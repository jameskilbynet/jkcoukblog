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
  - TrueNAS Scale
  - VMware
  - vSAN
  - vSphere
  - Homelab
  - Storage
  - Hosting
  - Ansible
  - Mikrotik
  - Networking
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

## Similar Posts

  * [ ![How to Run ZFS on VMware vSphere: Setup Guide and Best Practices](https://jameskilby.co.uk/wp-content/uploads/2024/12/ZFS.jpg) ](https://jameskilby.co.uk/2024/12/zfs-on-vmware/)

[TrueNAS Scale](https://jameskilby.co.uk/category/truenas-scale/) | [VMware](https://jameskilby.co.uk/category/vmware/) | [vSAN](https://jameskilby.co.uk/category/vmware/vsan-vmware/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [How to Run ZFS on VMware vSphere: Setup Guide and Best Practices](https://jameskilby.co.uk/2024/12/zfs-on-vmware/)

By[James](https://jameskilby.co.uk) December 18, 2024January 18, 2026

Table of Contents Copy-on-Write Disk IDs Trim I have run a number of systems using ZFS since the earliest days of my homelab using Nexenta, all the way back in 2010. The image below is my lab at the time with an IBM Head unit that I think had 18GB of RAM…

  * [ ![Can you really squeeze 96TB in 1U ?](https://jameskilby.co.uk/wp-content/uploads/2024/09/QuantaGrid-SD1Q-1ULH-Front-Three-Quarter.png) ](https://jameskilby.co.uk/2024/09/can-you-really-squeeze-96tb-in-1u/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [TrueNAS Scale](https://jameskilby.co.uk/category/truenas-scale/)

### [Can you really squeeze 96TB in 1U ?](https://jameskilby.co.uk/2024/09/can-you-really-squeeze-96tb-in-1u/)

By[James](https://jameskilby.co.uk) September 12, 2024January 23, 2026

Yes, that’s a clickbait title. But technically it’s possible if I dropped all drive redundancy… I recently saw an advert for a server that was just too good to be true. It promised to bring a huge amount of storage and future options in a quite hard-to-believe 1U. The price it was on offer for…

  * [ ![Starlink](https://jameskilby.co.uk/wp-content/uploads/2022/10/spacexs-starlink-to-supply-free-satellite-internet-to-famili_u44u.1920-768x432.jpg) ](https://jameskilby.co.uk/2022/10/starlink/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [Starlink](https://jameskilby.co.uk/2022/10/starlink/)

By[James](https://jameskilby.co.uk) October 11, 2022October 1, 2025

Since moving to Dorset last year internet connectivity has been the bane of my existence. Currently, I have an ADSL connection provided by my old employer Zen and a 5G connection provided by Three. These are both plumbed into my WatchGuard Firewall with multi-wan configured. Most of the time the usability is ok but there…

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [Synology](https://jameskilby.co.uk/category/synology/)

### [Lab Storage](https://jameskilby.co.uk/2018/01/lab-storage/)

By[James](https://jameskilby.co.uk) January 6, 2018July 10, 2024

I have been meaning to post around some of the lab setup for a while. Although it changes frequently at present it’s as below. I will add some pics when I have tidied up the lab/cables My primary lab storage is all contained within an HP Gen8 Microserver. Currently Configured: 1x INTEL Core i3-4130 running at…

  * [ ![Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/wp-content/uploads/2025/07/semaphore-768x768.png) ](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)

[Ansible](https://jameskilby.co.uk/category/ansible/) | [Homelab](https://jameskilby.co.uk/category/homelab/)

### [Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)

By[James](https://jameskilby.co.uk) September 2, 2025December 18, 2025

I recently stumbled across Semaphore, which is essentially a frontend for managing DevOps tooling, including Ansible, Terraform, OpenTofu, and PowerShell. It’s easy to deploy in Docker, and I am slowly moving more of my homelab management over to it. Introduction This is a guide to show you how to get up and running easily with…

  * [ ![CRS-504](https://jameskilby.co.uk/wp-content/uploads/2024/09/s-l1600-768x427.jpg) ](https://jameskilby.co.uk/2024/09/home-network-upgrade/)

[Mikrotik](https://jameskilby.co.uk/category/mikrotik/) | [Networking](https://jameskilby.co.uk/category/networking/)

### [Home Network Upgrade](https://jameskilby.co.uk/2024/09/home-network-upgrade/)

By[James](https://jameskilby.co.uk) September 9, 2024October 24, 2025

My journey to superfast networking in my homelab