---
title: "Lab Storage"
description: "Upgrade your lab storage performance with the Synology DS918. Learn how to enhance your VMware stack and achieve efficient NFS setup."
date: 2019-02-10T23:59:20+00:00
modified: 2024-07-10T09:22:32+00:00
author: James Kilby
categories:
  - Homelab
  - Ansible
  - Artificial Intelligence
  - Docker
  - VMware
  - VMware Cloud on AWS
  - vSAN
  - Runecast
  - Containers
  - Devops
  - NVIDIA
  - Traefik
  - Hosting
tags:
  - #Homelab
  - #Storage
  - #Synology
url: https://jameskilby.co.uk/2019/02/lab-storage-2/
image: https://jameskilby.co.uk/wp-content/uploads/2023/04/81-ZoEW24UL._SL1500_.jpg
---

![](https://jameskilby.co.uk/wp-content/uploads/2023/04/81-ZoEW24UL._SL1500_.jpg)

[Homelab](https://jameskilby.co.uk/category/homelab/)

# Lab Storage

By[James](https://jameskilby.co.uk) February 10, 2019July 10, 2024 • 📖1 min read(207 words)

📅 **Published:** February 10, 2019• **Updated:** July 10, 2024

## Lab Storage Update.

Since starting my new role with Xtravirt my Homelab has gone through several fairly significant changes. At the moment it’s very much focused on the VMware stack and one of the things I needed was some more storage and especially some more storage performance. With that in mind, I purchased a new Synology DS918

![](https://jameskilby.co.uk/wp-content/uploads/2023/04/iu-768x432-1.jpg)

It’s a very compact unit with a quad-core Intel Celeron & I have left the RAM at 4 GB for now.

I have added some of the existing SSD’s that I had giving me about 3TB of usable flash. I am presenting this back to my VMware hosts using NFS 4.1. I must have missed the announcement as this is now built into the Synology GUI ( It used to be a command-line-only option) I have verified the VAAI works as expected in this configuration. At present I am using this with a single network connection however I will be testing NFS Multipathing shortly.

The performance improvement has been noticeable and I have now removed all non-Synology systems from primary storage. This has left me with the DS918+ detailed here and a DS216+ with 2TB of Raid1 WD Reds. I am using this for ISO’s and some general file storage.

## 📚 Related Posts

  * [Automating the deployment of my Homelab AI Infrastructure](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)
  * [Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)
  * [Warp &#8211; The intelligent terminal](https://jameskilby.co.uk/2025/04/warp-the-intelligent-terminal/)

## Similar Posts

  * [ ![Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/wp-content/uploads/2025/07/semaphore-768x768.png) ](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)

[Ansible](https://jameskilby.co.uk/category/ansible/) | [Homelab](https://jameskilby.co.uk/category/homelab/)

### [Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)

By[James](https://jameskilby.co.uk) September 2, 2025February 1, 2026

An intro on how I use SemaphoreUI to manage my Homelab

  * [ ![Self Hosting AI Stack using vSphere, Docker and NVIDIA GPU](https://jameskilby.co.uk/wp-content/uploads/2024/10/pexels-tara-winstead-8386440-768x512.jpg) ](https://jameskilby.co.uk/2024/10/self-hosting-ai-stack-using-vsphere-docker-and-nvidia-gpu/)

[Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Docker](https://jameskilby.co.uk/category/docker/) | [Homelab](https://jameskilby.co.uk/category/homelab/)

### [Self Hosting AI Stack using vSphere, Docker and NVIDIA GPU](https://jameskilby.co.uk/2024/10/self-hosting-ai-stack-using-vsphere-docker-and-nvidia-gpu/)

By[James](https://jameskilby.co.uk) October 11, 2024October 1, 2025

Artificial intelligence is all the rage at the moment, It’s getting included in every product announcement from pretty much every vendor under the sun. Nvidia’s stock price has gone to the moon. So I thought I better get some knowledge and understand some of this. As it’s a huge field and I wasn’t exactly sure…

  * [ ![VMC – vSAN ESA](https://jameskilby.co.uk/wp-content/uploads/2023/11/OrigionalPoweredByvSAN-550x324-1.jpg) ](https://jameskilby.co.uk/2023/11/vsan-esa-and-the-improvements-it-brings-to-vmc/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/) | [vSAN](https://jameskilby.co.uk/category/vmware/vsan-vmware/)

### [VMC – vSAN ESA](https://jameskilby.co.uk/2023/11/vsan-esa-and-the-improvements-it-brings-to-vmc/)

By[James](https://jameskilby.co.uk) November 17, 2023July 10, 2024

An Overview of vSAN ESA in VMC 

  * [ ![Runecast Remediation Script’s](https://jameskilby.co.uk/wp-content/uploads/2023/05/Runecast-Solutions-Ltd.png) ](https://jameskilby.co.uk/2023/05/runecast-remediation-scripts/)

[Runecast](https://jameskilby.co.uk/category/runecast/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Runecast Remediation Script’s](https://jameskilby.co.uk/2023/05/runecast-remediation-scripts/)

By[James](https://jameskilby.co.uk) May 16, 2023November 17, 2023

I am a huge fan of the Runecast product and luckily as a vExpert they give out NFR licences for my lab. One of the really cool features I wanted to mention today was the remediation script function. I have been playing with storage a lot in my lab recently as part of a wider…

  * [ ![Automating the deployment of my Homelab AI  Infrastructure](https://jameskilby.co.uk/wp-content/uploads/2026/01/VMware-NVIDIA-logos_ee2f18dc-615d-4c9e-8f11-9c3c2ce2bf37-prv-768x432.png) ](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)

[Ansible](https://jameskilby.co.uk/category/ansible/) | [Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Containers](https://jameskilby.co.uk/category/containers/) | [Devops](https://jameskilby.co.uk/category/devops/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [NVIDIA](https://jameskilby.co.uk/category/nvidia/) | [Traefik](https://jameskilby.co.uk/category/traefik/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Automating the deployment of my Homelab AI Infrastructure](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)

By[James](https://jameskilby.co.uk) February 9, 2026February 25, 2026

Learn how to use Ansible to configure an Ubuntu VM for use with NVIDIA based AI workloads in vSphere

  * [ ![Starlink](https://jameskilby.co.uk/wp-content/uploads/2022/10/spacexs-starlink-to-supply-free-satellite-internet-to-famili_u44u.1920-768x432.jpg) ](https://jameskilby.co.uk/2022/10/starlink/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [Starlink](https://jameskilby.co.uk/2022/10/starlink/)

By[James](https://jameskilby.co.uk) October 11, 2022February 19, 2026

Since moving to Dorset last year internet connectivity has been the bane of my existence. Currently, I have an ADSL connection provided by my old employer Zen and a 5G connection provided by Three. These are both plumbed into my WatchGuard Firewall with multi-wan configured. Most of the time the usability is ok but there…