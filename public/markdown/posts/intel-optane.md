---
title: "Intel Optane NVMe Homelab"
description: "How VMware vExpert status unlocked access to Intel Optane NVMe drives for my homelab, and the performance gains from adding Optane storage to a vSphere environment."
date: 2023-04-17T12:20:04+00:00
modified: 2025-10-01T15:22:13+00:00
author: James Kilby
categories:
  - Homelab
  - Storage
  - vExpert
  - Nutanix
  - VMware
  - Networking
  - Docker
  - Hosting
  - Kubernetes
  - Artificial Intelligence
  - VCF
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

  * [My Self-Hosted AI Stack: Architecture Overview (Part 1)](https://jameskilby.co.uk/2026/03/my-self-hosted-ai-stack-a-technical-deep-dive/)
  * [Automating the deployment of my Homelab AI Infrastructure](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)
  * [Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)

## Similar Posts

  * [ ![New Nodes](https://jameskilby.co.uk/wp-content/uploads/2024/07/IMG_6629-768x149.jpeg) ](https://jameskilby.co.uk/2024/07/new-nodes/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Nutanix](https://jameskilby.co.uk/category/nutanix/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [New Nodes](https://jameskilby.co.uk/2024/07/new-nodes/)

By[James](https://jameskilby.co.uk) July 2, 2024March 10, 2026

I recently decided to update some of my homelab hosts and I managed to do this at very little cost by offloading 2 of my Supermicro e200’s to fellow vExpert Paul. The below post describes what I bought why and how I have configured it. Table of Contents Node Choice Bill of Materials Rescue IPMI…

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Networking](https://jameskilby.co.uk/category/networking/)

### [Lab Update – Part 3 Network](https://jameskilby.co.uk/2022/01/lab-update-part-3-network/)

By[James](https://jameskilby.co.uk) January 6, 2022March 10, 2026

I have retired the WatchGuard Devices with the migration to PFSense running bare-metal in one of the Supermicro Nodes. I will likely virtualise this in the future. In terms of network/switching I have moved to an intermediate step here vMotion and Storage are running over DAC’s while VMware management and VM traffic is still over…

  * [ ![Use Portainer in a Homelab with GitHub](https://jameskilby.co.uk/wp-content/uploads/2022/12/22225832.png) ](https://jameskilby.co.uk/2022/12/use-portainer-in-a-homelab-with-github/)

[Docker](https://jameskilby.co.uk/category/docker/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Kubernetes](https://jameskilby.co.uk/category/kubernetes/)

### [Use Portainer in a Homelab with GitHub](https://jameskilby.co.uk/2022/12/use-portainer-in-a-homelab-with-github/)

By[James](https://jameskilby.co.uk) December 9, 2022March 10, 2026

Late to the party or not, I have been using containers in my lab more and more and that has led me to Portainer…. I use it for managing the docker containers on my Synology but it can also be used for managing lots of other things. In their own words “Portainer accelerates container adoption….

  * [ ![Nutanix CE](https://jameskilby.co.uk/wp-content/uploads/2020/07/nutanix-logo-HI-REZ_reverse-w-carrier-768x196.jpg) ](https://jameskilby.co.uk/2018/01/nutanix-ce/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Nutanix](https://jameskilby.co.uk/category/nutanix/)

### [Nutanix CE](https://jameskilby.co.uk/2018/01/nutanix-ce/)

By[James](https://jameskilby.co.uk) January 6, 2018July 10, 2024

I ran a Nutanix CE server at home for a little while when it first came out. However, due to the fairly high requirements, it didn’t make sense to me to continue running it at home. This was compounded by the fact that I have many clusters to play with at work. These all run my…

  * [ ![How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/wp-content/uploads/2025/01/Screenshot-2025-01-29-at-23.30.47-768x411.png) ](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)

[Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Docker](https://jameskilby.co.uk/category/docker/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)

By[James](https://jameskilby.co.uk) January 29, 2025March 10, 2026

Update: Hoarder has now been renamed to Karakeep due to a trademark issue I’ve been on a mission recently to regain control of my data. I haven’t yet faced the humongous task of moving my main email from Gmail, but I have had some successes with other cloud services and a win is a win…….

  * [ ![MultiHost Holodeck VCF](https://jameskilby.co.uk/wp-content/uploads/2023/12/Holodeck-Overview.png) ](https://jameskilby.co.uk/2024/01/multihost-holodeck-vcf/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VCF](https://jameskilby.co.uk/category/vmware/vcf/)

### [MultiHost Holodeck VCF](https://jameskilby.co.uk/2024/01/multihost-holodeck-vcf/)

By[James](https://jameskilby.co.uk) January 17, 2024March 10, 2026

How to Deploy VMware Holodeck on multiple hosts