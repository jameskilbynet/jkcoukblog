---
title: "Lab Update – Part 2 Storage Truenas Scale"
description: "Synology to TrueNas storage move and increase in performance"
date: 2022-01-11T22:35:02+00:00
modified: 2023-12-11T15:02:10+00:00
author: James Kilby
categories:
  - Homelab
  - Storage
  - Networking
  - Synology
  - VMware
  - vSphere
  - vExpert
  - Ansible
  - Artificial Intelligence
  - Containers
  - Devops
  - NVIDIA
  - Traefik
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

  * [ ![Configure DHCP Option 43 for UniFi devices to enable remote adoption across subnets](https://jameskilby.co.uk/wp-content/uploads/2024/06/Ubiquiti_Networks-Logo.wine_-768x512.png) ](https://jameskilby.co.uk/2024/06/unifi-dhcp-option-43/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Networking](https://jameskilby.co.uk/category/networking/)

### [Configure DHCP Option 43 for UniFi devices to enable remote adoption across subnets](https://jameskilby.co.uk/2024/06/unifi-dhcp-option-43/)

By[James](https://jameskilby.co.uk) June 26, 2024January 18, 2026

How to configure DHCP Option 43 for UniFi devices 

  * [ ![Homelab bad days \(almost\)](https://jameskilby.co.uk/wp-content/uploads/2022/11/BrokenHardDive-1200x630-1-768x403.jpg) ](https://jameskilby.co.uk/2022/11/homelab-bad-days-almost/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [Synology](https://jameskilby.co.uk/category/synology/)

### [Homelab bad days (almost)](https://jameskilby.co.uk/2022/11/homelab-bad-days-almost/)

By[James](https://jameskilby.co.uk) November 21, 2022April 8, 2023

I recently spent 3 weeks in Ireland with my wife Wendy and our son Nate. This involves driving from the south coast of Dorset up to Scotland and then getting a ferry over to Belfast before travelling west to the Republic. While driving I got a slack notification that one of my SSD’s in my…

  * [ ![Forcing an Upgrade to vSphere 8](https://jameskilby.co.uk/wp-content/uploads/2022/12/Screenshot-2022-12-14-at-21.45.23.png) ](https://jameskilby.co.uk/2022/12/forcing-an-upgrade-to-vsphere-8/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [Forcing an Upgrade to vSphere 8](https://jameskilby.co.uk/2022/12/forcing-an-upgrade-to-vsphere-8/)

By[James](https://jameskilby.co.uk) December 14, 2022October 1, 2025

I run a reasonably extensive homelab that is of course built around the VMware ecosystem. So with the release of vSphere 8 I was obviously going to upgrade however a few personal things blocked me from doing it until now. The vCenter upgrade was smooth however knowing that some of the hardware I am running…

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [Synology](https://jameskilby.co.uk/category/synology/)

### [Lab Storage](https://jameskilby.co.uk/2018/01/lab-storage/)

By[James](https://jameskilby.co.uk) January 6, 2018July 10, 2024

I have been meaning to post around some of the lab setup for a while. Although it changes frequently at present it’s as below. I will add some pics when I have tidied up the lab/cables My primary lab storage is all contained within an HP Gen8 Microserver. Currently Configured: 1x INTEL Core i3-4130 running at…

  * [ ![Intel Optane NVMe Homelab](https://jameskilby.co.uk/wp-content/uploads/2023/04/intel_optane_ssd_900p_series_aic_-_right_angle_575px.png) ](https://jameskilby.co.uk/2023/04/intel-optane/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [vExpert](https://jameskilby.co.uk/category/vexpert/)

### [Intel Optane NVMe Homelab](https://jameskilby.co.uk/2023/04/intel-optane/)

By[James](https://jameskilby.co.uk) April 17, 2023October 1, 2025

I have been a VMware vExpert for many years and it has brought me many many benefits over the years. I don’t think it’s an understatement to say I probably wouldn’t have my current role within VMware without it. One of the best benefits has been access to a huge amount of licences for VMware…

  * [ ![Automating the deployment of my Homelab AI  Infrastructure](https://jameskilby.co.uk/wp-content/uploads/2026/01/VMware-NVIDIA-logos_ee2f18dc-615d-4c9e-8f11-9c3c2ce2bf37-prv-768x432.png) ](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)

[Ansible](https://jameskilby.co.uk/category/ansible/) | [Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Containers](https://jameskilby.co.uk/category/containers/) | [Devops](https://jameskilby.co.uk/category/devops/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [NVIDIA](https://jameskilby.co.uk/category/nvidia/) | [Traefik](https://jameskilby.co.uk/category/traefik/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Automating the deployment of my Homelab AI Infrastructure](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)

By[James](https://jameskilby.co.uk) February 9, 2026February 9, 2026

Learn how to use Ansible to configure an Ubuntu VM for use with NVIDIA based AI workloads in vSphere