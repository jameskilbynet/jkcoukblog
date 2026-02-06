---
title: "Managing my Homelab with SemaphoreUI"
description: "Learn to manage your homelab using SemaphoreUI with Docker. Follow our guide to streamline your DevOps tools like Ansible and Terraform today!"
date: 2025-09-02T16:01:48+00:00
modified: 2026-02-01T10:50:18+00:00
author: James Kilby
categories:
  - Ansible
  - Homelab
  - Storage
  - Veeam
  - VMware
  - TrueNAS Scale
  - vSAN
  - vSphere
  - Docker
  - Portainer
  - Synology
tags:
  - #Ansible
  - #Homelab
  - #IAC
  - #Semaphore
url: https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/
image: https://jameskilby.co.uk/wp-content/uploads/2025/07/semaphore.png
---

![](https://jameskilby.co.uk/wp-content/uploads/2025/07/semaphore.png)

[Ansible](https://jameskilby.co.uk/category/ansible/) | [Homelab](https://jameskilby.co.uk/category/homelab/)

# Managing my Homelab with SemaphoreUI

By[James](https://jameskilby.co.uk) September 2, 2025February 1, 2026 • 📖8 min read(1,592 words)

📅 **Published:** September 02, 2025• **Updated:** February 01, 2026

I recently stumbled across [Semaphore](https://docs.semaphoreui.com), which is essentially a frontend for managing DevOps tooling, including Ansible, Terraform, OpenTofu, and PowerShell.

It’s easy to deploy in Docker, and I am slowly moving more of my homelab management over to it.

## Introduction

This is a guide to show you how to get up and running easily with SemaphoreUI in Docker and use it to execute a basic Ansible playbook to deploy Docker onto an Ubuntu Server.

## Table of Contents

## Pre-reqs

  * Somewhere to run your Semaphore server. I chose to use a Docker container on one of my existing hosts.
  * Git Repo. I am using GitHub. My code is all stored in a public repo [here](https://github.com/jameskilbynet/iac/) so others can follow along.
  * SSH Keys/Authentication into the server to be provisioned.

## Docker Configuration 

This is the config that I am using (with some environment variables obscured). If you want to build your own docker run or compose file they have built a [website](https://semaphoreui.com/install/docker/2_15/) that helps you build your docker configuration. I love this. That is what I used to build the below config. 
    
    
    services:
        semaphore:
            image: semaphoreui/semaphore:v2.15.12-powershell7.5.0
            labels:
              - "com.example.description=semaphore"
              - "traefik.enable=true"
              - "traefik.http.routers.semaphore.rule=Host(`semaphore.jameskilby.cloud`)"
              - "traefik.http.routers.semaphore.entrypoints=https"
              - "traefik.http.routers.semaphore.tls=true"
              - "traefik.http.routers.semaphore.tls.certresolver=cloudflare"
              - "traefik.http.services.semaphore.loadbalancer.server.port=3000"
            networks:
              traefik:
            environment:
                SEMAPHORE_DB_DIALECT: bolt
                SEMAPHORE_ADMIN: admin
                SEMAPHORE_ADMIN_PASSWORD: XXXXXX
                SEMAPHORE_ADMIN_NAME: James
                SEMAPHORE_ADMIN_EMAIL: email@jameskilby.cloud
                SEMAPHORE_RUNNER_REGISTRATION_TOKEN: "mwsEdFU51pZDjkZsDsmws8yOvfdvdf"
                SEMAPHORE_EMAIL_SENDER: "semaphore@jameskilby.cloud"
                SEMAPHORE_EMAIL_HOST: "mail.jameskilby.cloud"
                SEMAPHORE_EMAIL_PORT: "25"
                SEMAPHORE_EMAIL_SECURE: "True"
            volumes:
                - semaphore_data:/var/lib/semaphore
                - semaphore_config:/etc/semaphore
                - semaphore_tmp:/tmp/semaphore
    volumes:
        semaphore_data:
        semaphore_config:
        semaphore_tmp:
    
    networks:
      traefik:
        external: true

📋 Copy

## Playbook Walkthrough

Once Semaphore is up and running, you can start setting up your automation pipelines. I will step through an example Ansible Playbook to deploy Docker. This playbook can be found [here](https://github.com/jameskilbynet/iac/blob/b65d7f8d014cb5458c74f5188798b3129387f36e/ansible/docker/install_docker.yml). Let me walk you through the playbook, then we will demonstrate using Semaphore to execute this.

### Playbook Metadata
    
    
    - name: Install Docker on supported Ubuntu hosts
      hosts: all
      become: yes

📋 Copy

This defines the hosts to run the playbook on (for now, this should just be set to all), and the become option allows it to become root if needed.
    
    
    vars:
      docker_gpg_path: /etc/apt/keyrings/docker.gpg
      docker_repo: "deb [arch=amd64 signed-by={{ docker_gpg_path }}] https://download.docker.com/linux/ubuntu {{ ansible_distribution_release }} stable"

📋 Copy

This defines the variables of where we will store the Docker GPG Key and the Docker repo

We then use Ansible to define some variables and to ensure we are getting the correct Docker release based on the Version of Ubuntu.

### Define Variables
    
    
    tasks:
        - name: Ensure required system packages are present
          apt:
            name:
              - apt-transport-https
              - ca-certificates
              - curl
              - gnupg
              - lsb-release
            state: present
            update_cache: yes
    

📋 Copy

The next block ensures that the required packages are present on the system.

### Handle reboots
    
    
    - name: Check if a reboot is required
      stat:
        path: /var/run/reboot-required
      register: reboot_required
    
    - name: Reboot the machine if required
      reboot:
        msg: "Reboot initiated by Ansible due to package upgrade."
        pre_reboot_delay: 60
        reboot_timeout: 600
        post_reboot_delay: 60
      when: reboot_required.stat.exists

📋 Copy

### Preps APT and stores GPG Keys
    
    
    - name: Ensure /etc/apt/keyrings directory exists
      file:
        path: /etc/apt/keyrings
        state: directory
        mode: '0755'
    - name: Download Docker GPG key in dearmored format
      shell: |
        curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o {{ docker_gpg_path }}
      args:
        creates: "{{ docker_gpg_path }}"
    - name: Set permissions on Docker GPG key
      file:
        path: "{{ docker_gpg_path }}"
        mode: '0644'
    - name: Set permissions on Docker GPG key
      file:
        path: "{{ docker_gpg_path }}"
        mode: '0644'
    

📋 Copy

### Install Docker and ensure it’s running
    
    
        - name: Install Docker Engine and related packages
          apt:
            name:
              - docker-ce
              - docker-ce-cli
              - containerd.io
              - docker-buildx-plugin
              - docker-compose-plugin
            state: latest
    
        - name: Ensure Docker service is running and enabled
          service:
            name: docker
            state: started
            enabled: true

📋 Copy

# Semaphore Concepts

So now that we understand the playbook, let’s go over some of the Semaphore concepts

### Projects

First we need a project. A project is used for separating out management activity. This could be as Prod/Test/Dev etc. or for managing different systems or applications. To keep everything easy right now I am running everything in a single project. I will likely split this out a bit later.

### Task Templates

The task templates are the actions that we want Sempahore to perform for us. In the example, I will just be using it to deploy Docker onto host’s specified in the Inventory.

### Schedule

A schedule is an easy way to run a specified task repeatedly. Fairly self-explanatory, I am using this to run a weekly patching schedule on most of my Ubuntu servers.

### Inventory

The Inventory specifies hosts to be managed with the appropriate credentials.

![](https://jameskilby.co.uk/wp-content/uploads/2025/09/Sempahore-Inventory.png)

### Variable Groups

Variable Groups are used for storing additional variables for an inventory. They must be in the JSON format.

I am not using these as part of my Docker example.

### Key Store

The key store is for storing all credentials. This is for connecting to remote hosts to execute jobs but also for accessing code repositories. 

### Repositories

A repository defines where the code that Semaphore executes lives. It’s possible to have multiple repo’s connected. I have a single one defined, and I am using a public repo for two reasons. Firstly, so anyone else can copy the configuration I am using. Secondly to enforce me being more secure and not putting any secrets in any of the code. Something that I sometimes do for speed with my lab.

![](https://jameskilby.co.uk/wp-content/uploads/2025/07/Semaphore-Repo-1024x80.png)

## Execute

Now that we have gone over the basic concepts. Let’s deploy Docker using Semaphore.

For testing, I have spun up a Vanilla Ubuntu 24.04 server to be used as the Docker server and created a new Project to ensure that we are starting from scratch.

## Repositories

### Connect your repository 

Step 1: Connect your repository

![](https://jameskilby.co.uk/wp-content/uploads/2025/09/New-Repo-1024x350.png)

And define the appropriate config. I am just using the Main branch and require no authentication as it’s a public GitHub repo

![](https://jameskilby.co.uk/wp-content/uploads/2025/09/Repo-Settings.png)

## Update your Key Store

Step 2

Create the credentials for Semaphore to authenticate against your remote server.

I am using SSH keys to authenticate against the system, and the account can elevate without a password

## Define your Inventory

Step 3 is to define the Inventory of systems you want the task to be run against.

This requires a name and the user credentials defined in step 2.

For demo purposes, I am just using the IP address of the remote server. All of my homelab servers are connected via DNS, and I am using a simple static list. 

![](https://jameskilby.co.uk/wp-content/uploads/2025/09/Ansible-Inventory.png)

## Define the task you want to run

Go to the “Task Templates” section, select a new template and then select Ansible Playbook

![](https://jameskilby.co.uk/wp-content/uploads/2025/09/Screenshot-2025-09-02-at-13.28.53.png)

Add the required variables; for this particular task, only a few are needed.

![](https://jameskilby.co.uk/wp-content/uploads/2025/09/Docker-Task-1-1024x553.png)

Once the task is created, simply press the play button to execute it.

![](https://jameskilby.co.uk/wp-content/uploads/2025/09/Task-Running.png)

Semaphore will clone the GitHub repo and then start executing the tasks defined in the Ansible playbook as can be seen above. The big green success button at the top tells you that all of the tasks executed successfully. 

As the playbook rolls off the screen I have a copy of it in full that can be seen below.
    
    
    4:33:00 PM
    Task 2147483445 added to queue
    4:33:00 PM
    Started: 2147483445
    4:33:00 PM
    Run TaskRunner with template: Install Docker
    4:33:00 PM
    Preparing: 2147483445
    4:33:00 PM
    Cloning Repository https://github.com/jameskilbynet/iac
    4:33:00 PM
    Cloning into 'repository_1_template_1'...
    4:33:01 PM
    Get current commit hash
    4:33:01 PM
    Get current commit message
    4:33:01 PM
    installing static inventory
    4:33:01 PM
    No /tmp/semaphore/project_2/repository_1_template_1/ansible/docker/collections/requirements.yml file found. Skip galaxy install process.
    4:33:01 PM
    No /tmp/semaphore/project_2/repository_1_template_1/ansible/docker/requirements.yml file found. Skip galaxy install process.
    4:33:01 PM
    No /tmp/semaphore/project_2/repository_1_template_1/collections/requirements.yml file found. Skip galaxy install process.
    4:33:01 PM
    No /tmp/semaphore/project_2/repository_1_template_1/requirements.yml file found. Skip galaxy install process.
    4:33:01 PM
    No /tmp/semaphore/project_2/repository_1_template_1/ansible/docker/roles/requirements.yml file found. Skip galaxy install process.
    4:33:01 PM
    No /tmp/semaphore/project_2/repository_1_template_1/ansible/docker/requirements.yml file found. Skip galaxy install process.
    4:33:01 PM
    No /tmp/semaphore/project_2/repository_1_template_1/roles/requirements.yml file found. Skip galaxy install process.
    4:33:01 PM
    No /tmp/semaphore/project_2/repository_1_template_1/requirements.yml file found. Skip galaxy install process.
    4:33:02 PM
    4:33:02 PM
    PLAY [Install Docker on supported Ubuntu hosts] ********************************
    4:33:02 PM
    4:33:02 PM
    TASK [Gathering Facts] *********************************************************
    4:33:06 PM
    [WARNING]: Platform linux on host 192.168.38.146 is using the discovered Python
    4:33:06 PM
    ok: [192.168.38.146]
    4:33:06 PM
    interpreter at /usr/bin/python3.12, but future installation of another Python
    4:33:06 PM
    interpreter could change the meaning of that path. See
    4:33:06 PM
    https://docs.ansible.com/ansible-
    4:33:06 PM
    core/2.18/reference_appendices/interpreter_discovery.html for more information.
    4:33:06 PM
    4:33:06 PM
    TASK [Ensure required system packages are present] *****************************
    4:33:13 PM
    changed: [192.168.38.146]
    4:33:13 PM
    4:33:13 PM
    TASK [Check if a reboot is required] *******************************************
    4:33:14 PM
    ok: [192.168.38.146]
    4:33:14 PM
    4:33:14 PM
    TASK [Reboot the machine if required] ******************************************
    4:34:31 PM
    changed: [192.168.38.146]
    4:34:31 PM
    4:34:31 PM
    TASK [Ensure /etc/apt/keyrings directory exists] *******************************
    4:34:32 PM
    ok: [192.168.38.146]
    4:34:32 PM
    4:34:32 PM
    TASK [Download Docker GPG key in dearmored format] *****************************
    4:34:33 PM
    changed: [192.168.38.146]
    4:34:33 PM
    4:34:33 PM
    TASK [Set permissions on Docker GPG key] ***************************************
    4:34:33 PM
    ok: [192.168.38.146]
    4:34:33 PM
    4:34:33 PM
    TASK [Add Docker APT repository] ***********************************************
    4:34:42 PM
    changed: [192.168.38.146]
    4:34:42 PM
    4:34:42 PM
    TASK [Update APT cache] ********************************************************
    4:34:43 PM
    ok: [192.168.38.146]
    4:34:43 PM
    4:34:43 PM
    TASK [Install Docker Engine and related packages] ******************************
    4:35:04 PM
    changed: [192.168.38.146]
    4:35:04 PM
    4:35:04 PM
    TASK [Ensure Docker service is running and enabled] ****************************
    4:35:06 PM
    ok: [192.168.38.146]
    4:35:06 PM
    4:35:06 PM
    PLAY RECAP *********************************************************************
    4:35:06 PM
    192.168.38.146             : ok=11   changed=5    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0   
    4:35:06 PM
    

📋 Copy

## Wrap Up

I have been really impressed with Sempahore and am migrating more and more of my lab control into it. I might write some more posts on how I am using it for more complex tasks. The one thing I wish it could do natively is Packer for building templates, but just with Terraform and Ansible, it is making my life so much easier.

## 📚 Related Posts

  * [Automating the deployment of my Homelab AI Infrastructure](https://jameskilby.co.uk/2026/01/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)

## Similar Posts

  * [ ![TrueNAS Logo](https://jameskilby.co.uk/wp-content/uploads/2023/05/Screenshot-2023-05-22-at-18.49.21-768x198.png) ](https://jameskilby.co.uk/2023/05/homelab-storage-refresh-part-1/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/)

### [Homelab Storage Refresh (Part 1)](https://jameskilby.co.uk/2023/05/homelab-storage-refresh-part-1/)

By[James](https://jameskilby.co.uk) May 23, 2023October 1, 2025

Table of Contents Background ZFS Overview Read Cache (ARC and L2ARC) ZIL (ZFS Intent Log) Hardware Background I have just completed the move of all my production and media-based storage/services to TrueNAS Scale. ( I will just refer to this as TrueNAS) This is based on my HP Z840 and I have now retired my…

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Veeam](https://jameskilby.co.uk/category/veeam/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Lab Update – Desired Workloads](https://jameskilby.co.uk/2022/01/lab-update-part-5-desired-workloads/)

By[James](https://jameskilby.co.uk) January 6, 2022November 11, 2023

My lab is always undergoing change. Partially as I want to try new things or new ways of doing things. Sometimes because I break things (not always by accident) sometimes it’s a great way to learn…. I decided to list the workloads I am looking to run (some of these are already in place) Infrastucture…

  * [ ![How to Run ZFS on VMware vSphere: Setup Guide and Best Practices](https://jameskilby.co.uk/wp-content/uploads/2024/12/ZFS.jpg) ](https://jameskilby.co.uk/2024/12/zfs-on-vmware/)

[TrueNAS Scale](https://jameskilby.co.uk/category/truenas-scale/) | [VMware](https://jameskilby.co.uk/category/vmware/) | [vSAN](https://jameskilby.co.uk/category/vmware/vsan-vmware/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [How to Run ZFS on VMware vSphere: Setup Guide and Best Practices](https://jameskilby.co.uk/2024/12/zfs-on-vmware/)

By[James](https://jameskilby.co.uk) December 18, 2024February 3, 2026

ZFS on VMware Best Practices

  * [ ](https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Lab Update – Compute](https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/)

By[James](https://jameskilby.co.uk) January 6, 2022July 10, 2024

Quite a few changes have happened in the lab recently. so I decided to do a multipart blog on the changes. The refresh was triggered by the purchase of a SuperMicro Server (2027TR-H71FRF) chassis with 4x X9DRT Nodes / Blades. This is known as a BigTwin configuration in SuperMicro parlance. This is something I was…

  * [ ![How to Fix Portainer Agent not Starting On Synology DSM](https://jameskilby.co.uk/wp-content/uploads/2025/03/Docker-Symbol-1-2199360526-768x528.png) ](https://jameskilby.co.uk/2025/03/portainer-agent-on-synology-dsm/)

[Docker](https://jameskilby.co.uk/category/docker/) | [Portainer](https://jameskilby.co.uk/category/portainer/) | [Synology](https://jameskilby.co.uk/category/synology/)

### [How to Fix Portainer Agent not Starting On Synology DSM](https://jameskilby.co.uk/2025/03/portainer-agent-on-synology-dsm/)

By[James](https://jameskilby.co.uk) March 11, 2025December 27, 2025

How to fix Portainer Agent no starting on Synology

  * [ ![Can you really squeeze 96TB in 1U ?](https://jameskilby.co.uk/wp-content/uploads/2024/09/QuantaGrid-SD1Q-1ULH-Front-Three-Quarter.png) ](https://jameskilby.co.uk/2024/09/can-you-really-squeeze-96tb-in-1u/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [TrueNAS Scale](https://jameskilby.co.uk/category/truenas-scale/)

### [Can you really squeeze 96TB in 1U ?](https://jameskilby.co.uk/2024/09/can-you-really-squeeze-96tb-in-1u/)

By[James](https://jameskilby.co.uk) September 12, 2024January 28, 2026

Yes, that’s a clickbait title. But technically it’s possible if I dropped all drive redundancy… I recently saw an advert for a server that was just too good to be true. It promised to bring a huge amount of storage and future options in a quite hard-to-believe 1U. The price it was on offer for…