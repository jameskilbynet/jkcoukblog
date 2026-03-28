---
title: "Home Network Upgrade"
description: "Home Network Upgrade,100Gb Homelab. Transform your home networking with 25Gb/s solutions for a future-proof setup. Learn more about my journey!"
date: 2024-09-09T08:25:08+00:00
modified: 2025-10-24T14:21:56+00:00
author: James Kilby
categories:
  - Mikrotik
  - Networking
  - TrueNAS Scale
  - VMware
  - vSAN
  - vSphere
  - Homelab
  - Storage
  - vExpert
  - Nutanix
  - Hosting
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

  * [ ![How to Run ZFS on VMware vSphere: Setup Guide and Best Practices](https://jameskilby.co.uk/wp-content/uploads/2024/12/ZFS.jpg) ](https://jameskilby.co.uk/2024/12/zfs-on-vmware/)

[TrueNAS Scale](https://jameskilby.co.uk/category/truenas-scale/) | [VMware](https://jameskilby.co.uk/category/vmware/) | [vSAN](https://jameskilby.co.uk/category/vmware/vsan-vmware/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [How to Run ZFS on VMware vSphere: Setup Guide and Best Practices](https://jameskilby.co.uk/2024/12/zfs-on-vmware/)

By[James](https://jameskilby.co.uk) December 18, 2024March 10, 2026

ZFS on VMware Best Practices

  * [ ![Lab Update – Compute](https://jameskilby.co.uk/wp-content/uploads/2023/04/IMG_4536-scaled-1-768x1024.jpg) ](https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Lab Update – Compute](https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/)

By[James](https://jameskilby.co.uk) January 6, 2022February 16, 2026

Quite a few changes have happened in the lab recently. so I decided to do a multipart blog on the changes. The refresh was triggered by the purchase of a SuperMicro Server (2027TR-H71FRF) chassis with 4x X9DRT Nodes / Blades. This is known as a BigTwin configuration in SuperMicro parlance. This is something I was…

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Networking](https://jameskilby.co.uk/category/networking/)

### [Lab Update – Part 3 Network](https://jameskilby.co.uk/2022/01/lab-update-part-3-network/)

By[James](https://jameskilby.co.uk) January 6, 2022March 10, 2026

I have retired the WatchGuard Devices with the migration to PFSense running bare-metal in one of the Supermicro Nodes. I will likely virtualise this in the future. In terms of network/switching I have moved to an intermediate step here vMotion and Storage are running over DAC’s while VMware management and VM traffic is still over…

  * [ ![Intel Optane NVMe Homelab](https://jameskilby.co.uk/wp-content/uploads/2023/04/intel_optane_ssd_900p_series_aic_-_right_angle_575px.png) ](https://jameskilby.co.uk/2023/04/intel-optane/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [vExpert](https://jameskilby.co.uk/category/vexpert/)

### [Intel Optane NVMe Homelab](https://jameskilby.co.uk/2023/04/intel-optane/)

By[James](https://jameskilby.co.uk) April 17, 2023October 1, 2025

I have been a VMware vExpert for many years and it has brought me many many benefits over the years. I don’t think it’s an understatement to say I probably wouldn’t have my current role within VMware without it. One of the best benefits has been access to a huge amount of licences for VMware…

  * [ ![New Nodes](https://jameskilby.co.uk/wp-content/uploads/2024/07/IMG_6629-768x149.jpeg) ](https://jameskilby.co.uk/2024/07/new-nodes/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Nutanix](https://jameskilby.co.uk/category/nutanix/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [New Nodes](https://jameskilby.co.uk/2024/07/new-nodes/)

By[James](https://jameskilby.co.uk) July 2, 2024March 10, 2026

I recently decided to update some of my homelab hosts and I managed to do this at very little cost by offloading 2 of my Supermicro e200’s to fellow vExpert Paul. The below post describes what I bought why and how I have configured it. Table of Contents Node Choice Bill of Materials Rescue IPMI…

  * [ ![Starlink](https://jameskilby.co.uk/wp-content/uploads/2022/10/spacexs-starlink-to-supply-free-satellite-internet-to-famili_u44u.1920-768x432.jpg) ](https://jameskilby.co.uk/2022/10/starlink/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [Starlink](https://jameskilby.co.uk/2022/10/starlink/)

By[James](https://jameskilby.co.uk) October 11, 2022February 19, 2026

Since moving to Dorset last year internet connectivity has been the bane of my existence. Currently, I have an ADSL connection provided by my old employer Zen and a 5G connection provided by Three. These are both plumbed into my WatchGuard Firewall with multi-wan configured. Most of the time the usability is ok but there…