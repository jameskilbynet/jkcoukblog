---
title: "Intel Optane NVMe Homelab"
description: "vExpert Intel Optane Drives"
date: 2023-04-17T12:20:04+00:00
modified: 2025-10-01T15:22:13+00:00
author: James Kilby
categories:
  - Homelab
  - Storage
  - vExpert
  - VMware
  - vSphere
  - VMware Cloud on AWS
  - Ansible
  - Synology
tags:
  - #Homelab
  - #Intel
  - #Optane
  - #Truenas
  - #TrueNAS Scale
  - #vExpert
  - #VMware
url: https://jameskilby.co.uk/2023/04/intel-optane/
image: https://jameskilby.co.uk/wp-content/uploads/2023/04/intel_optane_ssd_900p_series_aic_-_right_angle_575px.png
---

![](https://jameskilby.co.uk/wp-content/uploads/2023/04/intel_optane_ssd_900p_series_aic_-_right_angle_575px.png)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [vExpert](https://jameskilby.co.uk/category/vexpert/)

# Intel Optane NVMe Homelab

By[James](https://jameskilby.co.uk) April 17, 2023October 1, 2025 • 📖2 min read(317 words)

📅 **Published:** April 17, 2023• **Updated:** October 01, 2025

I have been a VMware vExpert for many years and it has brought me many many benefits over the years. I don’t think it’s an understatement to say I probably wouldn’t have my current role within VMware without it. One of the best benefits has been access to a huge amount of licences for VMware software to use in my lab. Some third parties have also recognised the award and given licences for their software. Two that I have probably made the most use of is [Runecast](https://www.runecast.com) and [Devolutions](https://devolutions.net) Remote Desktop Manager. 

However recently a few bits of hardware have become available and one piece in particular peeked my interest in particular some Optane drives thanks to the very generous folks at Intel.

I was lucky enough to get some together with [Gareth Edwards](http://www.virtualisedfruit.co.uk) we decided to put something together to show how good the Optane drives are and have a friendly bit of competition. 

![](https://jameskilby.co.uk/wp-content/uploads/2023/04/IMG_2109-1024x683.jpeg)

Gareth is going to keep most of the drives to start with doing some vSAN testing and I have added two to my TrueNas Server. This has both iSCSI and NFS connections back to my ESXi hosts.

To be honest it would be tricky to get more than that in my storage box (in the PCI format)

We’re planning on doing some back to back test to showcase the performance difference. I am going to do this by benchmarking from VMware the following drive pairs running in my Truenas “SAN”

I will also configure the Optane’s as “SLOG” attached to my main SSD storage pool. See my [TrueNAS ](https://jameskilby.co.uk/2023/05/homelab-storage-refresh-part-1/)post for more details of the setup

Drive| Model | Size| Manufacturers Read IOPS| Manufacturer Write IOPS| Max Read Sequential MB/s| Max Write Sequential MB/s  
---|---|---|---|---|---|---  
Consumer SSD | Samsung EVO 860 2TB | 2TB | 97,000 | 88,000 | 550 | 520  
Enterprise SSD | Samsung PM863 | 960GB | 99,000 | 18,000 | 520 | 475  
Intel Optane | SSD DC P4800X | 750GB | 550,000 | 550,000 | 2500 | 2200  
  
## 📚 Related Posts

  * [Automating the deployment of my Homelab AI Infrastructure](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)
  * [Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)
  * [Warp &#8211; The intelligent terminal](https://jameskilby.co.uk/2025/04/warp-the-intelligent-terminal/)

## Similar Posts

  * [ ![Forcing an Upgrade to vSphere 8](https://jameskilby.co.uk/wp-content/uploads/2022/12/Screenshot-2022-12-14-at-21.45.23.png) ](https://jameskilby.co.uk/2022/12/forcing-an-upgrade-to-vsphere-8/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [Forcing an Upgrade to vSphere 8](https://jameskilby.co.uk/2022/12/forcing-an-upgrade-to-vsphere-8/)

By[James](https://jameskilby.co.uk) December 14, 2022October 1, 2025

I run a reasonably extensive homelab that is of course built around the VMware ecosystem. So with the release of vSphere 8 I was obviously going to upgrade however a few personal things blocked me from doing it until now. The vCenter upgrade was smooth however knowing that some of the hardware I am running…

  * [ ![Lab Update – Part 2 Storage Truenas Scale](https://jameskilby.co.uk/wp-content/uploads/2022/01/maxresdefault-768x432.jpeg) ](https://jameskilby.co.uk/2022/01/lab-update-part-2-storage/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/)

### [Lab Update – Part 2 Storage Truenas Scale](https://jameskilby.co.uk/2022/01/lab-update-part-2-storage/)

By[James](https://jameskilby.co.uk) January 11, 2022March 10, 2026

The HP Z840 has changed its role to a permanent storage box running Truenas Scale. This is in addition to my Synology DS918+ TrueNas is the successor to FreeNas a very popular BSD based StorageOS and TrueNas scale is a fork of this based on Linux. The Synology has been an amazing piece of kit…

  * [ ![VMC Host Errors](https://jameskilby.co.uk/wp-content/uploads/2022/11/iu-1-768x395.png) ](https://jameskilby.co.uk/2020/09/vmc-host-errors/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [VMC Host Errors](https://jameskilby.co.uk/2020/09/vmc-host-errors/)

By[James](https://jameskilby.co.uk) September 15, 2020March 10, 2026

Learn how host failures are handled within VMC

  * [ ![Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/wp-content/uploads/2025/07/semaphore-768x768.png) ](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)

[Ansible](https://jameskilby.co.uk/category/ansible/) | [Homelab](https://jameskilby.co.uk/category/homelab/)

### [Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)

By[James](https://jameskilby.co.uk) September 2, 2025March 10, 2026

An intro on how I use SemaphoreUI to manage my Homelab

  * [ ![Using Content Libraries in VMC to deploy software faster](https://jameskilby.co.uk/wp-content/uploads/2026/01/Firefly_Gemini-Flash-768x417.png) ](https://jameskilby.co.uk/2026/01/using-content-libraries-in-vmc-to-deploy-software-faster/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [Using Content Libraries in VMC to deploy software faster](https://jameskilby.co.uk/2026/01/using-content-libraries-in-vmc-to-deploy-software-faster/)

By[James](https://jameskilby.co.uk) January 27, 2026March 10, 2026

How to leverage Content Libraries to deploy into VMware Cloud on AWS faster.

  * [ ![Homelab bad days \(almost\)](https://jameskilby.co.uk/wp-content/uploads/2022/11/BrokenHardDive-1200x630-1-768x403.jpg) ](https://jameskilby.co.uk/2022/11/homelab-bad-days-almost/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [Synology](https://jameskilby.co.uk/category/synology/)

### [Homelab bad days (almost)](https://jameskilby.co.uk/2022/11/homelab-bad-days-almost/)

By[James](https://jameskilby.co.uk) November 21, 2022March 10, 2026

I recently spent 3 weeks in Ireland with my wife Wendy and our son Nate. This involves driving from the south coast of Dorset up to Scotland and then getting a ferry over to Belfast before travelling west to the Republic. While driving I got a slack notification that one of my SSD’s in my…