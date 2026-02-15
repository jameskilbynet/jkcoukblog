---
title: "Lab Update – Compute"
description: "Homelab, Supermicro"
date: 2022-01-06T11:12:00+00:00
modified: 2024-07-10T10:42:27+00:00
author: James Kilby
categories:
  - Homelab
  - VMware
  - Storage
  - Synology
  - Mikrotik
  - Networking
  - VMware Cloud on AWS
  - Nutanix
tags:
  - #Homelab
  - #Supermicro
  - #VMware
url: https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/
image: https://jameskilby.co.uk/wp-content/uploads/2023/04/IMG_4536-scaled-1-768x1024.jpg
---

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

# Lab Update – Compute

By[James](https://jameskilby.co.uk) January 6, 2022July 10, 2024 • 📖1 min read(223 words)

📅 **Published:** January 06, 2022• **Updated:** July 10, 2024

Quite a few changes have happened in the lab recently. so I decided to do a multipart blog on the changes.

The refresh was triggered by the purchase of a SuperMicro Server ([2027TR-H71FRF](https://www.supermicro.com/products/system/2U/2027/SYS-2027TR-H71FRF.cfm)) chassis with 4x X9DRT Nodes / Blades. This is known as a BigTwin configuration in SuperMicro parlance. This is something I was very familiar with as most of the Nutanix nodes that we deployed at Zen were of this design.

Each node has 2x Intel Xeon CPU E5-2670 @ 2.60GHz 3 Nodes have 192GB of RAM and 1 has 128GB giving a combined 64c/128t and 704GB of RAM. Quite an amount to be squeezed into 2U.

This is a huge uplift in compute resources so is more than welcome. I also decided to put what I could in a proper rack and purchased a Startech 25U rack to mount it.

![](https://jameskilby.co.uk/wp-content/uploads/2023/04/IMG_4536-scaled-1-768x1024.jpg) One of the Compute nodes was removed from the server

The plan is also to make a serious network investment (to move me away from 1Gb) but I haven’t completely decided what that will look like. This will likely be the final investment for a while.

With the additional Supermicro compute available I have made the Z840 a sort of standalone node. I will keep it around as it’s the only thing capable of running my Nvidia K2. 

## 📚 Related Posts

  * [Automating the deployment of my Homelab AI Infrastructure](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)
  * [Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)
  * [Warp &#8211; The intelligent terminal](https://jameskilby.co.uk/2025/04/warp-the-intelligent-terminal/)

## Similar Posts

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [Synology](https://jameskilby.co.uk/category/synology/)

### [Lab Storage](https://jameskilby.co.uk/2018/01/lab-storage/)

By[James](https://jameskilby.co.uk) January 6, 2018July 10, 2024

I have been meaning to post around some of the lab setup for a while. Although it changes frequently at present it’s as below. I will add some pics when I have tidied up the lab/cables My primary lab storage is all contained within an HP Gen8 Microserver. Currently Configured: 1x INTEL Core i3-4130 running at…

  * [ ![TrueNAS Logo](https://jameskilby.co.uk/wp-content/uploads/2023/05/Screenshot-2023-05-22-at-18.49.21-768x198.png) ](https://jameskilby.co.uk/2023/05/homelab-storage-refresh-part-1/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/)

### [Homelab Storage Refresh (Part 1)](https://jameskilby.co.uk/2023/05/homelab-storage-refresh-part-1/)

By[James](https://jameskilby.co.uk) May 23, 2023October 1, 2025

Table of Contents Background ZFS Overview Read Cache (ARC and L2ARC) ZIL (ZFS Intent Log) Hardware Background I have just completed the move of all my production and media-based storage/services to TrueNAS Scale. ( I will just refer to this as TrueNAS) This is based on my HP Z840 and I have now retired my…

  * [ ![Lab Storage](https://jameskilby.co.uk/wp-content/uploads/2023/04/81-ZoEW24UL._SL1500_-768x461.jpg) ](https://jameskilby.co.uk/2019/02/lab-storage-2/)

[Homelab](https://jameskilby.co.uk/category/homelab/)

### [Lab Storage](https://jameskilby.co.uk/2019/02/lab-storage-2/)

By[James](https://jameskilby.co.uk) February 10, 2019July 10, 2024

Lab Storage Update. Since starting my new role with Xtravirt my Homelab has gone through several fairly significant changes. At the moment it’s very much focused on the VMware stack and one of the things I needed was some more storage and especially some more storage performance. With that in mind, I purchased a new Synology…

  * [ ![CRS-504](https://jameskilby.co.uk/wp-content/uploads/2024/09/s-l1600-768x427.jpg) ](https://jameskilby.co.uk/2024/09/home-network-upgrade/)

[Mikrotik](https://jameskilby.co.uk/category/mikrotik/) | [Networking](https://jameskilby.co.uk/category/networking/)

### [Home Network Upgrade](https://jameskilby.co.uk/2024/09/home-network-upgrade/)

By[James](https://jameskilby.co.uk) September 9, 2024October 24, 2025

My journey to superfast networking in my homelab

  * [ ![VMC Quick Sizing Guide](https://jameskilby.co.uk/wp-content/uploads/2025/02/Picture-1-e1768509620339-768x193.png) ](https://jameskilby.co.uk/2025/05/vmc-quick-sizing-guide/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [VMC Quick Sizing Guide](https://jameskilby.co.uk/2025/05/vmc-quick-sizing-guide/)

By[James](https://jameskilby.co.uk) May 21, 2025July 2, 2025

Quick reference guide to the available storage resources that you get in VMware Cloud on AWS

  * [ ![Nutanix CE](https://jameskilby.co.uk/wp-content/uploads/2020/07/nutanix-logo-HI-REZ_reverse-w-carrier-768x196.jpg) ](https://jameskilby.co.uk/2018/01/nutanix-ce/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Nutanix](https://jameskilby.co.uk/category/nutanix/)

### [Nutanix CE](https://jameskilby.co.uk/2018/01/nutanix-ce/)

By[James](https://jameskilby.co.uk) January 6, 2018July 10, 2024

I ran a Nutanix CE server at home for a little while when it first came out. However, due to the fairly high requirements, it didn’t make sense to me to continue running it at home. This was compounded by the fact that I have many clusters to play with at work. These all run my…