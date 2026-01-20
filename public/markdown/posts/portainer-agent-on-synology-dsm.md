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
  - Networking
  - Storage
  - VMware
  - TrueNAS Scale
  - vSAN
  - vSphere
  - Artificial Intelligence
  - Hosting
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

## Similar Posts

  * [ ![100Gb/s in my Homelab](https://jameskilby.co.uk/wp-content/uploads/2023/04/2157_hi_res-768x346.png) ](https://jameskilby.co.uk/2022/12/100gb-s-in-my-homelab-sort-of/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Networking](https://jameskilby.co.uk/category/networking/) | [Storage](https://jameskilby.co.uk/category/storage/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [100Gb/s in my Homelab](https://jameskilby.co.uk/2022/12/100gb-s-in-my-homelab-sort-of/)

By[James](https://jameskilby.co.uk) December 19, 2022November 11, 2023

For a while, I’ve been looking to update the networking at the core of my homelab. I have had some great results with the current setup utilising a number of DAC’s but there were a couple of things that were annoying me. Then MikroTik dropped the CRS504-4XQ-IN and if the price wasn’t horrendous then that…

  * [ ![How to Run ZFS on VMware vSphere: Setup Guide and Best Practices](https://jameskilby.co.uk/wp-content/uploads/2024/12/ZFS.jpg) ](https://jameskilby.co.uk/2024/12/zfs-on-vmware/)

[TrueNAS Scale](https://jameskilby.co.uk/category/truenas-scale/) | [VMware](https://jameskilby.co.uk/category/vmware/) | [vSAN](https://jameskilby.co.uk/category/vmware/vsan-vmware/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [How to Run ZFS on VMware vSphere: Setup Guide and Best Practices](https://jameskilby.co.uk/2024/12/zfs-on-vmware/)

By[James](https://jameskilby.co.uk) December 18, 2024January 18, 2026

Table of Contents Copy-on-Write Disk IDs Trim I have run a number of systems using ZFS since the earliest days of my homelab using Nexenta, all the way back in 2010. The image below is my lab at the time with an IBM Head unit that I think had 18GB of RAM…

  * [ ![How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/wp-content/uploads/2025/01/Screenshot-2025-01-29-at-23.30.47-768x411.png) ](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)

[Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Docker](https://jameskilby.co.uk/category/docker/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)

By[James](https://jameskilby.co.uk) January 29, 2025January 18, 2026

Update: Hoarder has now been renamed to Karakeep due to a trademark issue I’ve been on a mission recently to regain control of my data. I haven’t yet faced the humongous task of moving my main email from Gmail, but I have had some successes with other cloud services and a win is a win…….

  * [ ![Holodeck CPU Fixes](https://jameskilby.co.uk/wp-content/uploads/2024/01/40oOd8IipPvtrPJs-1198788743-768x737.jpg) ](https://jameskilby.co.uk/2024/01/holodeck-cpu-fixes/)

[VCF](https://jameskilby.co.uk/category/vmware/vcf/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Holodeck CPU Fixes](https://jameskilby.co.uk/2024/01/holodeck-cpu-fixes/)

By[James](https://jameskilby.co.uk) January 18, 2024July 10, 2024

How to deploy Holodeck with Legacy CPU’s

  * [ ![Starlink](https://jameskilby.co.uk/wp-content/uploads/2022/10/spacexs-starlink-to-supply-free-satellite-internet-to-famili_u44u.1920-768x432.jpg) ](https://jameskilby.co.uk/2022/10/starlink/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [Starlink](https://jameskilby.co.uk/2022/10/starlink/)

By[James](https://jameskilby.co.uk) October 11, 2022October 1, 2025

Since moving to Dorset last year internet connectivity has been the bane of my existence. Currently, I have an ADSL connection provided by my old employer Zen and a 5G connection provided by Three. These are both plumbed into my WatchGuard Firewall with multi-wan configured. Most of the time the usability is ok but there…

  * [ ![Can you really squeeze 96TB in 1U ?](https://jameskilby.co.uk/wp-content/uploads/2024/09/QuantaGrid-SD1Q-1ULH-Front-Three-Quarter.png) ](https://jameskilby.co.uk/2024/09/can-you-really-squeeze-96tb-in-1u/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [TrueNAS Scale](https://jameskilby.co.uk/category/truenas-scale/)

### [Can you really squeeze 96TB in 1U ?](https://jameskilby.co.uk/2024/09/can-you-really-squeeze-96tb-in-1u/)

By[James](https://jameskilby.co.uk) September 12, 2024January 18, 2026

Yes, that’s a clickbait title. But technically it’s possible if I dropped all drive redundancy… I recently saw an advert for a server that was just too good to be true. It promised to bring a huge amount of storage and future options in a quite hard-to-believe 1U. The price it was on offer for…