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
  - Hosting
  - Runecast
  - VMware
  - Storage
  - vExpert
  - Kubernetes
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

  * [ ![Starlink](https://jameskilby.co.uk/wp-content/uploads/2022/10/spacexs-starlink-to-supply-free-satellite-internet-to-famili_u44u.1920-768x432.jpg) ](https://jameskilby.co.uk/2022/10/starlink/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [Starlink](https://jameskilby.co.uk/2022/10/starlink/)

By[James](https://jameskilby.co.uk) October 11, 2022October 1, 2025

Since moving to Dorset last year internet connectivity has been the bane of my existence. Currently, I have an ADSL connection provided by my old employer Zen and a 5G connection provided by Three. These are both plumbed into my WatchGuard Firewall with multi-wan configured. Most of the time the usability is ok but there…

  * [ ![Runecast Remediation Script’s](https://jameskilby.co.uk/wp-content/uploads/2023/05/Runecast-Solutions-Ltd.png) ](https://jameskilby.co.uk/2023/05/runecast-remediation-scripts/)

[Runecast](https://jameskilby.co.uk/category/runecast/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Runecast Remediation Script’s](https://jameskilby.co.uk/2023/05/runecast-remediation-scripts/)

By[James](https://jameskilby.co.uk) May 16, 2023November 17, 2023

I am a huge fan of the Runecast product and luckily as a vExpert they give out NFR licences for my lab. One of the really cool features I wanted to mention today was the remediation script function. I have been playing with storage a lot in my lab recently as part of a wider…

  * [ ![Lab Storage](https://jameskilby.co.uk/wp-content/uploads/2023/04/81-ZoEW24UL._SL1500_-768x461.jpg) ](https://jameskilby.co.uk/2019/02/lab-storage-2/)

[Homelab](https://jameskilby.co.uk/category/homelab/)

### [Lab Storage](https://jameskilby.co.uk/2019/02/lab-storage-2/)

By[James](https://jameskilby.co.uk) February 10, 2019July 10, 2024

Lab Storage Update. Since starting my new role with Xtravirt my Homelab has gone through several fairly significant changes. At the moment it’s very much focused on the VMware stack and one of the things I needed was some more storage and especially some more storage performance. With that in mind, I purchased a new Synology…

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [Synology](https://jameskilby.co.uk/category/synology/)

### [Lab Storage](https://jameskilby.co.uk/2018/01/lab-storage/)

By[James](https://jameskilby.co.uk) January 6, 2018July 10, 2024

I have been meaning to post around some of the lab setup for a while. Although it changes frequently at present it’s as below. I will add some pics when I have tidied up the lab/cables My primary lab storage is all contained within an HP Gen8 Microserver. Currently Configured: 1x INTEL Core i3-4130 running at…

  * [ ![Intel Optane NVMe Homelab](https://jameskilby.co.uk/wp-content/uploads/2023/04/intel_optane_ssd_900p_series_aic_-_right_angle_575px.png) ](https://jameskilby.co.uk/2023/04/intel-optane/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [vExpert](https://jameskilby.co.uk/category/vexpert/)

### [Intel Optane NVMe Homelab](https://jameskilby.co.uk/2023/04/intel-optane/)

By[James](https://jameskilby.co.uk) April 17, 2023October 1, 2025

I have been a VMware vExpert for many years and it has brought me many many benefits over the years. I don’t think it’s an understatement to say I probably wouldn’t have my current role within VMware without it. One of the best benefits has been access to a huge amount of licences for VMware…

  * [ ![Use Portainer in a Homelab with GitHub](https://jameskilby.co.uk/wp-content/uploads/2022/12/22225832.png) ](https://jameskilby.co.uk/2022/12/use-portainer-in-a-homelab-with-github/)

[Docker](https://jameskilby.co.uk/category/docker/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Kubernetes](https://jameskilby.co.uk/category/kubernetes/)

### [Use Portainer in a Homelab with GitHub](https://jameskilby.co.uk/2022/12/use-portainer-in-a-homelab-with-github/)

By[James](https://jameskilby.co.uk) December 9, 2022October 1, 2025

Late to the party or not, I have been using containers in my lab more and more and that has led me to Portainer…. I use it for managing the docker containers on my Synology but it can also be used for managing lots of other things. In their own words “Portainer accelerates container adoption….