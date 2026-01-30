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
  - VMware Cloud on AWS
  - Nutanix
  - Docker
  - Portainer
  - Synology
  - Personal
  - Artificial Intelligence
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
  
## Similar Posts

  * [ ![Using Content Libraries in VMC to deploy software faster](https://jameskilby.co.uk/wp-content/uploads/2026/01/Firefly_Gemini-Flash-768x417.png) ](https://jameskilby.co.uk/2026/01/using-content-libraries-in-vmc-to-deploy-software-faster/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [Using Content Libraries in VMC to deploy software faster](https://jameskilby.co.uk/2026/01/using-content-libraries-in-vmc-to-deploy-software-faster/)

By[James](https://jameskilby.co.uk) January 27, 2026January 30, 2026

How to leverage Content Libraries to deploy into VMware Cloud on AWS faster.

  * [ ![New Nodes](https://jameskilby.co.uk/wp-content/uploads/2024/07/IMG_6629-768x149.jpeg) ](https://jameskilby.co.uk/2024/07/new-nodes/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Nutanix](https://jameskilby.co.uk/category/nutanix/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [New Nodes](https://jameskilby.co.uk/2024/07/new-nodes/)

By[James](https://jameskilby.co.uk) July 2, 2024January 18, 2026

I recently decided to update some of my homelab hosts and I managed to do this at very little cost by offloading 2 of my Supermicro e200’s to fellow vExpert Paul. The below post describes what I bought why and how I have configured it. Table of Contents Node Choice Bill of Materials Rescue IPMI…

  * [ ![How to Fix Portainer Agent not Starting On Synology DSM](https://jameskilby.co.uk/wp-content/uploads/2025/03/Docker-Symbol-1-2199360526-768x528.png) ](https://jameskilby.co.uk/2025/03/portainer-agent-on-synology-dsm/)

[Docker](https://jameskilby.co.uk/category/docker/) | [Portainer](https://jameskilby.co.uk/category/portainer/) | [Synology](https://jameskilby.co.uk/category/synology/)

### [How to Fix Portainer Agent not Starting On Synology DSM](https://jameskilby.co.uk/2025/03/portainer-agent-on-synology-dsm/)

By[James](https://jameskilby.co.uk) March 11, 2025December 27, 2025

How to fix Portainer Agent no starting on Synology

  * [ ![VMC Host Errors](https://jameskilby.co.uk/wp-content/uploads/2022/11/iu-1-768x395.png) ](https://jameskilby.co.uk/2020/09/vmc-host-errors/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [VMC Host Errors](https://jameskilby.co.uk/2020/09/vmc-host-errors/)

By[James](https://jameskilby.co.uk) September 15, 2020October 1, 2025

When you run a large enough Infrastructure failure is inevitable. How you handle that can be a big differentiator. With VMware Cloud on AWS, the hosts are monitored 24×7 by VMware/AWS Support all as part of the service. If you pay for X number of hosts you should have X. That includes during maintenance and…

  * [ ![VMware – Going out with a Bang!](https://jameskilby.co.uk/wp-content/uploads/2023/10/rnli-logo-768x384.png) ](https://jameskilby.co.uk/2023/10/going-out-with-a-bang/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [Personal](https://jameskilby.co.uk/category/personal/)

### [VMware – Going out with a Bang!](https://jameskilby.co.uk/2023/10/going-out-with-a-bang/)

By[James](https://jameskilby.co.uk) October 7, 2023November 17, 2023

There is a lot of uncertainty with VMware at the moment. This is all due to the pending acquisition by Broadcom. There are a lot of unknowns for the staff and customers about what the company will look like in the future. I certainly have some concerns mainly just with the unknown. However, VMware has…

  * [ ![Wa](https://jameskilby.co.uk/wp-content/uploads/2025/04/210902461-012e7273-413a-4ec7-be44-e854347f5a21-768x180.png) ](https://jameskilby.co.uk/2025/04/warp-the-intelligent-terminal/)

[Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Homelab](https://jameskilby.co.uk/category/homelab/)

### [Warp – The intelligent terminal](https://jameskilby.co.uk/2025/04/warp-the-intelligent-terminal/)

By[James](https://jameskilby.co.uk) April 11, 2025October 3, 2025

How Warp is helping me run my homelab.