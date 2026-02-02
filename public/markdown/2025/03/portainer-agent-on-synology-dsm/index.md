---
title: "How to Fix Portainer Agent not Starting On Synology DSM"
description: "How to Fix Portainer Agent Not Starting on Synology DSM"
date: 2025-03-11T12:06:39+00:00
modified: 2025-12-27T14:26:37+00:00
author: James Kilby
categories:
  - Docker
  - Portainer
  - Synology
  - Homelab
  - Storage
  - Automation
  - VMware
  - Hosting
  - Kubernetes
  - Artificial Intelligence
  - Nutanix
  - VCF
tags:
  - #Homelab
  - #Portainer
  - #Synology
url: https://jameskilby.co.uk/2025/03/portainer-agent-on-synology-dsm/
image: https://jameskilby.co.uk/wp-content/uploads/2025/03/Docker-Symbol-1-2199360526-1024x705.png
---

![](https://jameskilby.co.uk/wp-content/uploads/2025/03/Docker-Symbol-1-2199360526.png)

[Docker](https://jameskilby.co.uk/category/docker/) | [Portainer](https://jameskilby.co.uk/category/portainer/) | [Synology](https://jameskilby.co.uk/category/synology/)

# How to Fix Portainer Agent not Starting On Synology DSM

By[James](https://jameskilby.co.uk) March 11, 2025December 27, 2025 • 📖2 min read(412 words)

📅 **Published:** March 11, 2025• **Updated:** December 27, 2025

Intro:

This is a really quick post for any one wanting to manage docker deployments on a Synology using Portainer hosted elsewhere.

I have been using [Portainer](https://www.portainer.io) as my homelab container management for a few years now. I wanted to extend this management to one of my Synology NAS devices as I had plans to run a few containers on them (away from my main VMware Cluster) At present Portainer runs in a Docker VM direct on my [TrueNAS](https://jameskilby.co.uk/2024/09/can-you-really-squeeze-96tb-in-1u/) box

## Table of Contents

## Setup

When logged into Portainer, the first thing we are going to do is add another environment. This is done by navigating to the environments section. I am lucky enough to have a 5 node Business licence for this purpose.

![](https://jameskilby.co.uk/wp-content/uploads/2025/03/portainer-environments.png)

This will navigate you to the list of existing environments, where you can add an additional environment

![](https://jameskilby.co.uk/wp-content/uploads/2025/03/environment-List-1024x166.png)

The wizard will then ask you what environment you would like to create. In my case it will be a Docker Standalone

![](https://jameskilby.co.uk/wp-content/uploads/2025/03/environment-Type-1024x301.png)

Once you have chosen Docker you have to name the environment and tell Portainer the address remembering the port (9001)

Portainer then gives you the command to execute on the remote environment to fire up the Portainer Agent for the Portainer server to connect to.

## Issue

When I SSH into my Synology to run the commands I get the below error
    
    
     sudo docker run -d \
    >   -p 9001:9001 \
    >   --name portainer_agent \
    >   --restart=always \
    >   -v /var/run/docker.sock:/var/run/docker.sock \
    >   -v /var/lib/docker/volumes:/var/lib/docker/volumes \
    >   -v /:/host \
    >   portainer/agent:2.27.1
    
    We trust you have received the usual lecture from the local System
    Administrator. It usually boils down to these three things:
    
        #1) Respect the privacy of others.
        #2) Think before you type.
        #3) With great power comes great responsibility.
    
    Password: 
    Unable to find image 'portainer/agent:2.27.1' locally
    2.27.1: Pulling from portainer/agent
    436768c74267: Pull complete 
    d61825c69234: Pull complete 
    51403bd1b0cb: Pull complete 
    1eb0f77f2186: Pull complete 
    285795d2a093: Pull complete 
    cccbadf68541: Pull complete 
    3dd836c679e8: Pull complete 
    9da95a675496: Pull complete 
    92100a91b378: Pull complete 
    Digest: sha256:d2e6833bb6f067962f79be262066cc96921159bc9a49a3100cacecb542522fd5
    Status: Downloaded newer image for portainer/agent:2.27.1
    2a0dcdc5b104c35b0b030da973d7f7a6a148c24aa50db35e9ecf49dc0279fd03
    **docker: Error response from daemon: Bind mount failed: '/var/lib/docker/volumes' does not exist.**

📋 Copy

## The Fix

This occurs as /var/lib/docker/volumes does not exist on the Synology Filesystem. If we update the command as below the container starts successfully.
    
    
    sudo docker run -d -p 9001:9001 --name portainer_agent --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v /volume1/@docker/volumes:/var/lib/docker/volumes portainer/agent
    Unable to find image 'portainer/agent:latest' locally
    latest: Pulling from portainer/agent
    Digest: sha256:d2e6833bb6f067962f79be262066cc96921159bc9a49a3100cacecb542522fd5
    Status: Downloaded newer image for portainer/agent:latest
    e770c9990d9afddbbe0098486a421421027de60d1ca324aa3af0cff10ab88ab7
    

📋 Copy

## 📚 Related Posts

  * [How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)
  * [Self Hosting AI Stack using vSphere, Docker and NVIDIA GPU](https://jameskilby.co.uk/2024/10/self-hosting-ai-stack-using-vsphere-docker-and-nvidia-gpu/)
  * [Use Portainer in a Homelab with GitHub](https://jameskilby.co.uk/2022/12/use-portainer-in-a-homelab-with-github/)

## Similar Posts

  * [ ![Homelab bad days \(almost\)](https://jameskilby.co.uk/wp-content/uploads/2022/11/BrokenHardDive-1200x630-1-768x403.jpg) ](https://jameskilby.co.uk/2022/11/homelab-bad-days-almost/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [Synology](https://jameskilby.co.uk/category/synology/)

### [Homelab bad days (almost)](https://jameskilby.co.uk/2022/11/homelab-bad-days-almost/)

By[James](https://jameskilby.co.uk) November 21, 2022April 8, 2023

I recently spent 3 weeks in Ireland with my wife Wendy and our son Nate. This involves driving from the south coast of Dorset up to Scotland and then getting a ferry over to Belfast before travelling west to the Republic. While driving I got a slack notification that one of my SSD’s in my…

  * [ ![Template Deployment with Packer](https://jameskilby.co.uk/wp-content/uploads/2021/01/logo_packer.png) ](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

[Automation](https://jameskilby.co.uk/category/automation/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Template Deployment with Packer](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

By[James](https://jameskilby.co.uk) January 21, 2021December 8, 2025

Packer is one of those tools I have heard about, and some of the cool people on Twitter that I follow have been using it for a while. But until now I had never played with it. That was until I saw the below tweet by the legend that is William Lam That was the…

  * [ ![Use Portainer in a Homelab with GitHub](https://jameskilby.co.uk/wp-content/uploads/2022/12/22225832.png) ](https://jameskilby.co.uk/2022/12/use-portainer-in-a-homelab-with-github/)

[Docker](https://jameskilby.co.uk/category/docker/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Kubernetes](https://jameskilby.co.uk/category/kubernetes/)

### [Use Portainer in a Homelab with GitHub](https://jameskilby.co.uk/2022/12/use-portainer-in-a-homelab-with-github/)

By[James](https://jameskilby.co.uk) December 9, 2022October 1, 2025

Late to the party or not, I have been using containers in my lab more and more and that has led me to Portainer…. I use it for managing the docker containers on my Synology but it can also be used for managing lots of other things. In their own words “Portainer accelerates container adoption….

  * [ ![Self Hosting AI Stack using vSphere, Docker and NVIDIA GPU](https://jameskilby.co.uk/wp-content/uploads/2024/10/pexels-tara-winstead-8386440-768x512.jpg) ](https://jameskilby.co.uk/2024/10/self-hosting-ai-stack-using-vsphere-docker-and-nvidia-gpu/)

[Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Docker](https://jameskilby.co.uk/category/docker/) | [Homelab](https://jameskilby.co.uk/category/homelab/)

### [Self Hosting AI Stack using vSphere, Docker and NVIDIA GPU](https://jameskilby.co.uk/2024/10/self-hosting-ai-stack-using-vsphere-docker-and-nvidia-gpu/)

By[James](https://jameskilby.co.uk) October 11, 2024October 1, 2025

Artificial intelligence is all the rage at the moment, It’s getting included in every product announcement from pretty much every vendor under the sun. Nvidia’s stock price has gone to the moon. So I thought I better get some knowledge and understand some of this. As it’s a huge field and I wasn’t exactly sure…

  * [ ![New Nodes](https://jameskilby.co.uk/wp-content/uploads/2024/07/IMG_6629-768x149.jpeg) ](https://jameskilby.co.uk/2024/07/new-nodes/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Nutanix](https://jameskilby.co.uk/category/nutanix/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [New Nodes](https://jameskilby.co.uk/2024/07/new-nodes/)

By[James](https://jameskilby.co.uk) July 2, 2024January 18, 2026

I recently decided to update some of my homelab hosts and I managed to do this at very little cost by offloading 2 of my Supermicro e200’s to fellow vExpert Paul. The below post describes what I bought why and how I have configured it. Table of Contents Node Choice Bill of Materials Rescue IPMI…

  * [ ![Holodeck CPU Fixes](https://jameskilby.co.uk/wp-content/uploads/2024/01/40oOd8IipPvtrPJs-1198788743-768x737.jpg) ](https://jameskilby.co.uk/2024/01/holodeck-cpu-fixes/)

[VCF](https://jameskilby.co.uk/category/vmware/vcf/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Holodeck CPU Fixes](https://jameskilby.co.uk/2024/01/holodeck-cpu-fixes/)

By[James](https://jameskilby.co.uk) January 18, 2024July 10, 2024

How to deploy Holodeck with Legacy CPU’s