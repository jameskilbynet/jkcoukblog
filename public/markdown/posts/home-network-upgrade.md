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
  - TrueNAS Scale
  - VMware
  - vSAN
  - vSphere
  - Ansible
  - Artificial Intelligence
  - Docker
  - Hosting
  - Automation
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

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [Synology](https://jameskilby.co.uk/category/synology/)

### [Lab Storage](https://jameskilby.co.uk/2018/01/lab-storage/)

By[James](https://jameskilby.co.uk) January 6, 2018July 10, 2024

I have been meaning to post around some of the lab setup for a while. Although it changes frequently at present it’s as below. I will add some pics when I have tidied up the lab/cables My primary lab storage is all contained within an HP Gen8 Microserver. Currently Configured: 1x INTEL Core i3-4130 running at…

  * [ ![How to Run ZFS on VMware vSphere: Setup Guide and Best Practices](https://jameskilby.co.uk/wp-content/uploads/2024/12/ZFS.jpg) ](https://jameskilby.co.uk/2024/12/zfs-on-vmware/)

[TrueNAS Scale](https://jameskilby.co.uk/category/truenas-scale/) | [VMware](https://jameskilby.co.uk/category/vmware/) | [vSAN](https://jameskilby.co.uk/category/vmware/vsan-vmware/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [How to Run ZFS on VMware vSphere: Setup Guide and Best Practices](https://jameskilby.co.uk/2024/12/zfs-on-vmware/)

By[James](https://jameskilby.co.uk) December 18, 2024January 18, 2026

Table of Contents Copy-on-Write Disk IDs Trim I have run a number of systems using ZFS since the earliest days of my homelab using Nexenta, all the way back in 2010. The image below is my lab at the time with an IBM Head unit that I think had 18GB of RAM…

  * [ ![Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/wp-content/uploads/2025/07/semaphore-768x768.png) ](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)

[Ansible](https://jameskilby.co.uk/category/ansible/) | [Homelab](https://jameskilby.co.uk/category/homelab/)

### [Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)

By[James](https://jameskilby.co.uk) September 2, 2025December 18, 2025

I recently stumbled across Semaphore, which is essentially a frontend for managing DevOps tooling, including Ansible, Terraform, OpenTofu, and PowerShell. It’s easy to deploy in Docker, and I am slowly moving more of my homelab management over to it. Introduction This is a guide to show you how to get up and running easily with…

  * [ ![How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/wp-content/uploads/2025/01/Screenshot-2025-01-29-at-23.30.47-768x411.png) ](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)

[Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Docker](https://jameskilby.co.uk/category/docker/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)

By[James](https://jameskilby.co.uk) January 29, 2025January 18, 2026

Update: Hoarder has now been renamed to Karakeep due to a trademark issue I’ve been on a mission recently to regain control of my data. I haven’t yet faced the humongous task of moving my main email from Gmail, but I have had some successes with other cloud services and a win is a win…….

  * [ ![Template Deployment with Packer](https://jameskilby.co.uk/wp-content/uploads/2021/01/logo_packer.png) ](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

[Automation](https://jameskilby.co.uk/category/automation/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Template Deployment with Packer](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

By[James](https://jameskilby.co.uk) January 21, 2021December 8, 2025

Packer is one of those tools I have heard about, and some of the cool people on Twitter that I follow have been using it for a while. But until now I had never played with it. That was until I saw the below tweet by the legend that is William Lam That was the…

  * [ ![Nvidia Tesla P4 Homelab Setup](https://jameskilby.co.uk/wp-content/uploads/2023/10/IMG_1107-768x403-1.jpg) ](https://jameskilby.co.uk/2023/10/vgpu-setup-in-my-homelab/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Nvidia Tesla P4 Homelab Setup](https://jameskilby.co.uk/2023/10/vgpu-setup-in-my-homelab/)

By[James](https://jameskilby.co.uk) October 23, 2023July 10, 2024

A little while ago I decided to play with vGPU in my homelab. This was something I had dabbled with in the past but never really had the time or need to get working properly. The first thing that I needed was a GPU. I did have a Dell T20 with an iGPU built into…