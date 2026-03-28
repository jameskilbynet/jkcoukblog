---
title: "Home Network Upgrade"
description: "Home Network Upgrade,100Gb Homelab. Transform your home networking with 25Gb/s solutions for a future-proof setup. Learn more about my journey!"
date: 2024-09-09T08:25:08+00:00
modified: 2025-10-24T14:21:56+00:00
author: James Kilby
categories:
  - Mikrotik
  - Networking
  - Homelab
  - Storage
  - Synology
  - Ansible
  - Artificial Intelligence
  - Containers
  - Devops
  - NVIDIA
  - Traefik
  - VMware
tags:
  - #Homelab
  - #Mikrotik
  - #Networking
url: https://jameskilby.co.uk/2024/09/home-network-upgrade/
image: https://jameskilby.co.uk/wp-content/uploads/2024/09/s-l1600.jpg
---

![CRS-504](https://jameskilby.co.uk/wp-content/uploads/2024/09/s-l1600.jpg)

[Mikrotik](https://jameskilby.co.uk/category/mikrotik/) | [Networking](https://jameskilby.co.uk/category/networking/)

# Home Network Upgrade

By[James](https://jameskilby.co.uk) September 9, 2024October 24, 2025 • 📖2 min read(454 words)

📅 **Published:** September 09, 2024• **Updated:** October 24, 2025

I have recently moved over to Mikrotik Switching for all of my Home environment as part of my home network upgrade. What started life as a move away from gigabit networking had some serious scope creep. As I needed new switches, network adaptors and cabling I evaluated the obvious choice of just upgrading to 10Gb/s. However, when looking at the price comparison to upgrade to 25Gb/s I felt the cost uplift was justified and certainly better future-proofed. This became the baseline for the majority of my server workloads. The Access switch layer has basically stayed gigabit but with 10Gb/s uplinks.

## Table of Contents

The decision to go to Mikrotik was predominantly based on the huge performance available for limited costs. So far I have been impressed with the switches once I got over the initial steep learning curve of RouterOS. I have purchased several switches spread out over a few months. This coincided with a property move so some extras were bought to accommodate the new layout In the property, my lab was relocated to a dedicated space and I also wanted wired connectivity into my office.

## Switch’s Purchased

Number| Model| £Price | Function| OS  
---|---|---|---|---  
1| [CRS504_4XQ](https://mikrotik.com/product/crs504_4xq_in)| 704.40| Core Switch| RouterOS  
1|   
[CRS305-1G-4S+IN](https://mikrotik.com/product/crs305_1g_4s_in)| 131.15| Breakout Switch| RouterOS  
2| [CSS610-8P-2S+IN](https://mikrotik.com/product/css610_8p_2s_in)| 193.46| House and Office Switch| SwitchOS Lite  
1|   
[CSS610-8G-2S+](https://mikrotik.com/product/css610_8g_2s_in)| 183.87| OOB Switch| SwitchOS Lite  
Total| | 1406.34| |   
  
The 100Gb/s Switch is effectively my core switch. It only has 4 physical ports however each of these can be split into 4x25gb/s or slower ports if needed. In the current state all 4 ports are used, however I do have 3 remaining breakouts available if needed.

I have then used the 5-Port 10 Gb/s switch sort of as a media translator for connections to the access switches around the house with 10Gb uplinks to distribute the network around the home and present ethernet ports to my devices.

![Network Overview](https://jameskilby.co.uk/wp-content/uploads/2025/01/Home-Net-overview-1024x633.png)

Mikrotik Switches can typically run one of two operating systems either RouterOS or SwitchOS. (The 3 ethernet port switches will only run SwOS)

SwitchOS is a much simpler setup and is similar to a web-managed switch from other manufacturers. It’s a trivial setup for anyone that’s used a webmanaged switch before. 

The config for these switches takes a little bit of time to get familiar with as they are incredibly powerful. It’s possible to run RouterOS or SwitchOS on them however I could never get SwitchOS to boot correctly on the 100GB/s switch so I stuck with RouterOS and perceived through the config. Part 2 will go into my RouterOS setup.

I have a draft post of the steps I have used to get RouterOS configured how I like. I will try and finish that off when I get some more time.

## Similar Posts

  * [ ![Configuring a Zen Internet and City Fibre connection with a 3rd party router](https://jameskilby.co.uk/wp-content/uploads/2023/11/cityfibre-zen-768x403.jpg) ](https://jameskilby.co.uk/2023/11/configuring-a-zen-internet-and-city-fibre-connection-with-a-3rd-party-router/)

[Networking](https://jameskilby.co.uk/category/networking/)

### [Configuring a Zen Internet and City Fibre connection with a 3rd party router](https://jameskilby.co.uk/2023/11/configuring-a-zen-internet-and-city-fibre-connection-with-a-3rd-party-router/)

By[James](https://jameskilby.co.uk) November 15, 2023March 10, 2026

Back in July I bought a new house and one of the best things about the property was that it was already in a City Fibre location. That meant I could take my Zen internet connection with me but ditch the ADSL (and Phone Line requirement). This gave me a much better connection in terms…

  * [ ![Homelab bad days \(almost\)](https://jameskilby.co.uk/wp-content/uploads/2022/11/BrokenHardDive-1200x630-1-768x403.jpg) ](https://jameskilby.co.uk/2022/11/homelab-bad-days-almost/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [Synology](https://jameskilby.co.uk/category/synology/)

### [Homelab bad days (almost)](https://jameskilby.co.uk/2022/11/homelab-bad-days-almost/)

By[James](https://jameskilby.co.uk) November 21, 2022March 10, 2026

I recently spent 3 weeks in Ireland with my wife Wendy and our son Nate. This involves driving from the south coast of Dorset up to Scotland and then getting a ferry over to Belfast before travelling west to the Republic. While driving I got a slack notification that one of my SSD’s in my…

  * [ ![Automating the deployment of my Homelab AI  Infrastructure](https://jameskilby.co.uk/wp-content/uploads/2026/01/VMware-NVIDIA-logos_ee2f18dc-615d-4c9e-8f11-9c3c2ce2bf37-prv-768x432.png) ](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)

[Ansible](https://jameskilby.co.uk/category/ansible/) | [Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Containers](https://jameskilby.co.uk/category/containers/) | [Devops](https://jameskilby.co.uk/category/devops/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [NVIDIA](https://jameskilby.co.uk/category/nvidia/) | [Traefik](https://jameskilby.co.uk/category/traefik/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Automating the deployment of my Homelab AI Infrastructure](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)

By[James](https://jameskilby.co.uk) February 9, 2026March 15, 2026

Learn how to use Ansible to configure an Ubuntu VM for use with NVIDIA based AI workloads in vSphere

  * [ ![100Gb/s in my Homelab](https://jameskilby.co.uk/wp-content/uploads/2023/04/2157_hi_res-768x346.png) ](https://jameskilby.co.uk/2022/12/100gb-s-in-my-homelab-sort-of/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Networking](https://jameskilby.co.uk/category/networking/) | [Storage](https://jameskilby.co.uk/category/storage/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [100Gb/s in my Homelab](https://jameskilby.co.uk/2022/12/100gb-s-in-my-homelab-sort-of/)

By[James](https://jameskilby.co.uk) December 19, 2022March 10, 2026

For a while, I’ve been looking to update the networking at the core of my homelab. I have had some great results with the current setup utilising a number of DAC’s but there were a couple of things that were annoying me. Then MikroTik dropped the CRS504-4XQ-IN and if the price wasn’t horrendous then that…

  * [ ![Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/wp-content/uploads/2025/07/semaphore-768x768.png) ](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)

[Ansible](https://jameskilby.co.uk/category/ansible/) | [Homelab](https://jameskilby.co.uk/category/homelab/)

### [Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)

By[James](https://jameskilby.co.uk) September 2, 2025March 10, 2026

An intro on how I use SemaphoreUI to manage my Homelab

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Networking](https://jameskilby.co.uk/category/networking/)

### [Lab Update – Part 3 Network](https://jameskilby.co.uk/2022/01/lab-update-part-3-network/)

By[James](https://jameskilby.co.uk) January 6, 2022March 10, 2026

I have retired the WatchGuard Devices with the migration to PFSense running bare-metal in one of the Supermicro Nodes. I will likely virtualise this in the future. In terms of network/switching I have moved to an intermediate step here vMotion and Storage are running over DAC’s while VMware management and VM traffic is still over…