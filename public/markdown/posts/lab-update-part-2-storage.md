---
title: "Lab Update – Part 2 Storage Truenas Scale"
description: "Synology to TrueNas storage move and increase in performance"
date: 2022-01-11T22:35:02+00:00
modified: 2023-12-11T15:02:10+00:00
author: James Kilby
categories:
  - Homelab
  - Storage
  - Automation
  - VMware
  - Nutanix
  - Synology
  - Artificial Intelligence
  - vExpert
tags:
  - #NVMe
  - #SSD
  - #Truenas
  - #TrueNAS Scale
url: https://jameskilby.co.uk/2022/01/lab-update-part-2-storage/
image: https://jameskilby.co.uk/wp-content/uploads/2022/01/maxresdefault.jpeg
---

![](https://jameskilby.co.uk/wp-content/uploads/2022/01/maxresdefault.jpeg)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/)

# Lab Update – Part 2 Storage Truenas Scale

By[James](https://jameskilby.co.uk) January 11, 2022December 11, 2023 • 📖2 min read(495 words)

📅 **Published:** January 11, 2022• **Updated:** December 11, 2023

The HP Z840 has changed its role to a permanent storage box running Truenas Scale. This is in addition to my Synology DS918+

TrueNas is the successor to FreeNas a very popular BSD based StorageOS and TrueNas scale is a fork of this based on Linux.

The Synology has been an amazing piece of kit handling VM storage, Docker, File sharing and Plex duties. It will maintain most of these roles. However, I needed something faster for my lab and especially something with faster network access. The Synology I had was limited to 2xGb interfaces. An option was to buy a newer Synology but I felt a better route was to try a “Storage OS” on some of my existing hardware with some network tweaks to be seen later.

The Spec of the Z840 Workstation I am using to run Truenas is 2x Intel Xeon CPU E5-2673 v3 @ 2.40GHz and 128GB of RAM. More than enough for my needs. I will use the 2xGb interfaces for management and the new network for a combination of iSCSI/NFS

Within one of the 5 1/2 inch drive bays I have placed an Icy Dock express cage giving me 6 additional 2.5 drive bays.

![](https://jameskilby.co.uk/wp-content/uploads/2023/04/iu-1.jpeg)ICY Dock

I have placed the TrueNAS OS on 2x Intel 80GB SSD’s running within these.

For now, I have configured 2 storage pools. One NVMe with a single INTEL SSDPE2MX020T7. This will be very high-performance storage but for now, is not redundant. I plan to mitigate this with regular backups.

The other is reusing some 3TB WD Red drives from the Synology in a Raid-Z config. I will likely add some SSD as a ZLOG at a later date.

This is presented back to my VMware hosts using iSCSI over a 25Gb direct network. I have only done basic testing so far. John would murder me for this but I did a test using CrystalDisk just to check everything was in the correct realms of what I would expect. (These numbers will have been influenced by cache size as they easily fit in the working set)

I chose to use the real-world test built into Crystel Disk Mark. I’m sure the numbers would be much higher with other configs. This was also done with a 4GiB file which isn’t huge but I used to keep the testing short. I will come back and test the storage properly at a later date.

![](https://jameskilby.co.uk/wp-content/uploads/2022/01/Screenshot-2022-01-17-at-09.11.14.png)

NVMe initial performance test. I had a number of VM’s running on the NVMe test at the time testing was running. This may account for the read being slightly lower than the SATA disks but the Write performance is much higher.

![](https://jameskilby.co.uk/wp-content/uploads/2022/01/NVMe.png)

TrueNAS SATA test. 3x Sata disks in Raid5 

![](https://jameskilby.co.uk/wp-content/uploads/2022/01/Screenshot-2022-01-17-at-09.07.00.png)

Comparison with Synology 3x SSD Raid 5 ( 2x1Gb/s ) Networking. You can see this is significantly lower than the Freenas box. The Synology was running a number of docker containers and apps at the time so I’m sure performance could be higher.

![](https://jameskilby.co.uk/wp-content/uploads/2022/01/Synology-1024x725.png)

## 📚 Related Posts

  * [Automating the deployment of my Homelab AI Infrastructure](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)
  * [Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)
  * [Warp &#8211; The intelligent terminal](https://jameskilby.co.uk/2025/04/warp-the-intelligent-terminal/)

## Similar Posts

  * [ ![Template Deployment with Packer](https://jameskilby.co.uk/wp-content/uploads/2021/01/logo_packer.png) ](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

[Automation](https://jameskilby.co.uk/category/automation/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Template Deployment with Packer](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

By[James](https://jameskilby.co.uk) January 21, 2021February 9, 2026

Packer is one of those tools I have heard about, and some of the cool people on Twitter that I follow have been using it for a while. But until now I had never played with it. That was until I saw the below tweet by the legend that is William Lam That was the…

  * [ ![New Nodes](https://jameskilby.co.uk/wp-content/uploads/2024/07/IMG_6629-768x149.jpeg) ](https://jameskilby.co.uk/2024/07/new-nodes/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Nutanix](https://jameskilby.co.uk/category/nutanix/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [New Nodes](https://jameskilby.co.uk/2024/07/new-nodes/)

By[James](https://jameskilby.co.uk) July 2, 2024January 18, 2026

I recently decided to update some of my homelab hosts and I managed to do this at very little cost by offloading 2 of my Supermicro e200’s to fellow vExpert Paul. The below post describes what I bought why and how I have configured it. Table of Contents Node Choice Bill of Materials Rescue IPMI…

  * [ ![Lab Update – Compute](https://jameskilby.co.uk/wp-content/uploads/2023/04/IMG_4536-scaled-1-768x1024.jpg) ](https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Lab Update – Compute](https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/)

By[James](https://jameskilby.co.uk) January 6, 2022February 16, 2026

Quite a few changes have happened in the lab recently. so I decided to do a multipart blog on the changes. The refresh was triggered by the purchase of a SuperMicro Server (2027TR-H71FRF) chassis with 4x X9DRT Nodes / Blades. This is known as a BigTwin configuration in SuperMicro parlance. This is something I was…

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [Synology](https://jameskilby.co.uk/category/synology/)

### [Lab Storage](https://jameskilby.co.uk/2018/01/lab-storage/)

By[James](https://jameskilby.co.uk) January 6, 2018July 10, 2024

I have been meaning to post around some of the lab setup for a while. Although it changes frequently at present it’s as below. I will add some pics when I have tidied up the lab/cables My primary lab storage is all contained within an HP Gen8 Microserver. Currently Configured: 1x INTEL Core i3-4130 running at…

  * [ ![Wa](https://jameskilby.co.uk/wp-content/uploads/2025/04/210902461-012e7273-413a-4ec7-be44-e854347f5a21-768x180.png) ](https://jameskilby.co.uk/2025/04/warp-the-intelligent-terminal/)

[Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Homelab](https://jameskilby.co.uk/category/homelab/)

### [Warp – The intelligent terminal](https://jameskilby.co.uk/2025/04/warp-the-intelligent-terminal/)

By[James](https://jameskilby.co.uk) April 11, 2025October 3, 2025

How Warp is helping me run my homelab. 

  * [ ![Intel Optane NVMe Homelab](https://jameskilby.co.uk/wp-content/uploads/2023/04/intel_optane_ssd_900p_series_aic_-_right_angle_575px.png) ](https://jameskilby.co.uk/2023/04/intel-optane/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [vExpert](https://jameskilby.co.uk/category/vexpert/)

### [Intel Optane NVMe Homelab](https://jameskilby.co.uk/2023/04/intel-optane/)

By[James](https://jameskilby.co.uk) April 17, 2023October 1, 2025

I have been a VMware vExpert for many years and it has brought me many many benefits over the years. I don’t think it’s an understatement to say I probably wouldn’t have my current role within VMware without it. One of the best benefits has been access to a huge amount of licences for VMware…