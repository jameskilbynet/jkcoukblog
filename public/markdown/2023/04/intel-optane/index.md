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
  - Synology
  - Automation
  - VMware
  - AWS
  - Veeam
  - VMware Cloud on AWS
  - Mikrotik
  - Networking
  - Artificial Intelligence
  - Docker
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

  * [Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)
  * [Warp &#8211; The intelligent terminal](https://jameskilby.co.uk/2025/04/warp-the-intelligent-terminal/)
  * [Self Hosting AI Stack using vSphere, Docker and NVIDIA GPU](https://jameskilby.co.uk/2024/10/self-hosting-ai-stack-using-vsphere-docker-and-nvidia-gpu/)

## Similar Posts

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [Synology](https://jameskilby.co.uk/category/synology/)

### [Lab Storage](https://jameskilby.co.uk/2018/01/lab-storage/)

By[James](https://jameskilby.co.uk) January 6, 2018July 10, 2024

I have been meaning to post around some of the lab setup for a while. Although it changes frequently at present it’s as below. I will add some pics when I have tidied up the lab/cables My primary lab storage is all contained within an HP Gen8 Microserver. Currently Configured: 1x INTEL Core i3-4130 running at…

  * [ ![Template Deployment with Packer](https://jameskilby.co.uk/wp-content/uploads/2021/01/logo_packer.png) ](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

[Automation](https://jameskilby.co.uk/category/automation/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Template Deployment with Packer](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

By[James](https://jameskilby.co.uk) January 21, 2021December 8, 2025

Packer is one of those tools I have heard about, and some of the cool people on Twitter that I follow have been using it for a while. But until now I had never played with it. That was until I saw the below tweet by the legend that is William Lam That was the…

  * [VMware](https://jameskilby.co.uk/category/vmware/) | [AWS](https://jameskilby.co.uk/category/aws/) | [Veeam](https://jameskilby.co.uk/category/veeam/)

### [Monitoring VMC – Part 1](https://jameskilby.co.uk/2019/12/monitoring-vmc-part-1/)

By[James](https://jameskilby.co.uk) December 17, 2019October 1, 2025

As previously mentioned I have been working a lot with VMware Cloud on AWS and one of the questions that often crops up is around an approach to monitoring. This is an interesting topic as VMC is technically “as a service” therefore the monitoring approach is a bit different. Technically AWS and VMware’s SRE teams…

  * [ ![Using Content Libraries in VMC to deploy software faster](https://jameskilby.co.uk/wp-content/uploads/2026/01/Firefly_Gemini-Flash-768x417.png) ](https://jameskilby.co.uk/2026/01/using-content-libraries-in-vmc-to-deploy-software-faster/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [Using Content Libraries in VMC to deploy software faster](https://jameskilby.co.uk/2026/01/using-content-libraries-in-vmc-to-deploy-software-faster/)

By[James](https://jameskilby.co.uk) January 27, 2026January 30, 2026

How to leverage Content Libraries to deploy into VMware Cloud on AWS faster.

  * [ ![CRS-504](https://jameskilby.co.uk/wp-content/uploads/2024/09/s-l1600-768x427.jpg) ](https://jameskilby.co.uk/2024/09/home-network-upgrade/)

[Mikrotik](https://jameskilby.co.uk/category/mikrotik/) | [Networking](https://jameskilby.co.uk/category/networking/)

### [Home Network Upgrade](https://jameskilby.co.uk/2024/09/home-network-upgrade/)

By[James](https://jameskilby.co.uk) September 9, 2024October 24, 2025

My journey to superfast networking in my homelab

  * [ ![Self Hosting AI Stack using vSphere, Docker and NVIDIA GPU](https://jameskilby.co.uk/wp-content/uploads/2024/10/pexels-tara-winstead-8386440-768x512.jpg) ](https://jameskilby.co.uk/2024/10/self-hosting-ai-stack-using-vsphere-docker-and-nvidia-gpu/)

[Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Docker](https://jameskilby.co.uk/category/docker/) | [Homelab](https://jameskilby.co.uk/category/homelab/)

### [Self Hosting AI Stack using vSphere, Docker and NVIDIA GPU](https://jameskilby.co.uk/2024/10/self-hosting-ai-stack-using-vsphere-docker-and-nvidia-gpu/)

By[James](https://jameskilby.co.uk) October 11, 2024October 1, 2025

Artificial intelligence is all the rage at the moment, It’s getting included in every product announcement from pretty much every vendor under the sun. Nvidia’s stock price has gone to the moon. So I thought I better get some knowledge and understand some of this. As it’s a huge field and I wasn’t exactly sure…