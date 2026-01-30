---
title: "VMC Quick Sizing Guide"
description: "Get essential insights on storage resources in VMware Cloud on AWS. Use our quick sizing guide for efficient planning and management."
date: 2025-05-21T09:33:04+00:00
modified: 2025-07-02T08:39:59+00:00
author: James Kilby
categories:
  - VMware
  - VMware Cloud on AWS
  - vSAN
  - AWS
  - Veeam
  - Automation
  - Homelab
  - Runecast
tags:
  - #Sizing
  - #VMC
  - #VMware Cloud on AWS
url: https://jameskilby.co.uk/2025/05/vmc-quick-sizing-guide/
image: https://jameskilby.co.uk/wp-content/uploads/2025/02/Picture-1-e1768509620339.png
---

![](https://jameskilby.co.uk/wp-content/uploads/2025/02/Picture-1-e1768509620339.png)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

# VMC Quick Sizing Guide

By[James](https://jameskilby.co.uk) May 21, 2025July 2, 2025 • 📖1 min read(199 words)

📅 **Published:** May 21, 2025• **Updated:** July 02, 2025

This is a quick reference guide to the available storage resources that you get in VMware Cloud on AWS depending on the host type in use.

For up to date info always use the official sizing tool located [here ](https://vmc.vmware.com/)

This is based on vSAN OSA and excluding the management overhead (Ie valid for secondary clusters) It also uses the most efficient storage policy that is supported based on the number of hosts available.

If you are planning to do a cluster conversion between host types then the management stack size doesn’t change.

Host Type| i3| i3en| I4i|   
---|---|---|---|---  
No of Hosts| i3 (TiB)| i3en (TiB)| I4i (TiB)| FTT in use  
2| 11.2| 41.39| 18.48| FTT1 RAID1  
3| 16.8| 62.09| 27.71| FTT1 RAID1  
4| 33.68| 124.49| 55.57| FTT1 RAID5  
5| 42.1| 155.61| 69.46| FTT1 RAID5  
6| 44.8| 165.57| 73.9| FTT2 RAID6  
7| 52.26| 193.17| 86.22| FTT2 RAID6  
8| 59.73| 220.77| 98.54| FTT2 RAID6  
9| 67.2| 248.36| 110.85| FTT2 RAID6  
10| 74.66| 275.96| 123.17| FTT2 RAID6  
11| 82.13| 303.55| 135.49| FTT2 RAID6  
12| 89.6| 331.15| 147.8| FTT2 RAID6  
13| 97.06| 358.74| 160.12| FTT2 RAID6  
14| 104.53| 386.34| 172.44| FTT2 RAID6  
15| 112| 413.94| 184.75| FTT2 RAID6  
16| 119.46| 441.53| 197.07| FTT2 RAID6  
  
## 📚 Related Posts

  * [Using Content Libraries in VMC to deploy software faster](https://jameskilby.co.uk/2026/01/using-content-libraries-in-vmc-to-deploy-software-faster/)
  * [vSAN Cluster Shutdown &#8211; Orchestration](https://jameskilby.co.uk/2025/12/vsan-cluster-shutdown/)
  * [An in-depth look at VMware Cloud on AWS hosts](https://jameskilby.co.uk/2025/08/vmc-host-deepdive/)

## Similar Posts

  * [ ![Using Content Libraries in VMC to deploy software faster](https://jameskilby.co.uk/wp-content/uploads/2026/01/Firefly_Gemini-Flash-768x417.png) ](https://jameskilby.co.uk/2026/01/using-content-libraries-in-vmc-to-deploy-software-faster/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [Using Content Libraries in VMC to deploy software faster](https://jameskilby.co.uk/2026/01/using-content-libraries-in-vmc-to-deploy-software-faster/)

By[James](https://jameskilby.co.uk) January 27, 2026January 30, 2026

How to leverage Content Libraries to deploy into VMware Cloud on AWS faster.

  * [ ![vSAN Cluster Shutdown – Orchestration](https://jameskilby.co.uk/wp-content/uploads/2023/11/OrigionalPoweredByvSAN-550x324-1.jpg) ](https://jameskilby.co.uk/2025/12/vsan-cluster-shutdown/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [vSAN](https://jameskilby.co.uk/category/vmware/vsan-vmware/)

### [vSAN Cluster Shutdown – Orchestration](https://jameskilby.co.uk/2025/12/vsan-cluster-shutdown/)

By[James](https://jameskilby.co.uk) December 6, 2025January 17, 2026

How to safety shutdown a vSAN Environment

  * [VMware](https://jameskilby.co.uk/category/vmware/) | [AWS](https://jameskilby.co.uk/category/aws/) | [Veeam](https://jameskilby.co.uk/category/veeam/)

### [Monitoring VMC – Part 1](https://jameskilby.co.uk/2019/12/monitoring-vmc-part-1/)

By[James](https://jameskilby.co.uk) December 17, 2019October 1, 2025

As previously mentioned I have been working a lot with VMware Cloud on AWS and one of the questions that often crops up is around an approach to monitoring. This is an interesting topic as VMC is technically “as a service” therefore the monitoring approach is a bit different. Technically AWS and VMware’s SRE teams…

  * [ ![Template Deployment with Packer](https://jameskilby.co.uk/wp-content/uploads/2021/01/logo_packer.png) ](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

[Automation](https://jameskilby.co.uk/category/automation/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Template Deployment with Packer](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

By[James](https://jameskilby.co.uk) January 21, 2021December 8, 2025

Packer is one of those tools I have heard about, and some of the cool people on Twitter that I follow have been using it for a while. But until now I had never played with it. That was until I saw the below tweet by the legend that is William Lam That was the…

  * [ ![An in-depth look at VMware Cloud on AWS hosts](https://jameskilby.co.uk/wp-content/uploads/2025/02/Picture-1-e1768509620339-768x193.png) ](https://jameskilby.co.uk/2025/08/vmc-host-deepdive/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [An in-depth look at VMware Cloud on AWS hosts](https://jameskilby.co.uk/2025/08/vmc-host-deepdive/)

By[James](https://jameskilby.co.uk) August 14, 2025January 18, 2026

This is single page intended to collate every single feature of the current VMware Cloud on AWS hosts for easy comparison. All of this data Is publicly available. I have just collated into a single page I3 I3en I4i CPU Processor Name Intel Xeon E5-2686 v4 Intel Xeon Platinum 8175 Intel Xeon 8375c No of…

  * [ ![Runecast Remediation Script’s](https://jameskilby.co.uk/wp-content/uploads/2023/05/Runecast-Solutions-Ltd.png) ](https://jameskilby.co.uk/2023/05/runecast-remediation-scripts/)

[Runecast](https://jameskilby.co.uk/category/runecast/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Runecast Remediation Script’s](https://jameskilby.co.uk/2023/05/runecast-remediation-scripts/)

By[James](https://jameskilby.co.uk) May 16, 2023November 17, 2023

I am a huge fan of the Runecast product and luckily as a vExpert they give out NFR licences for my lab. One of the really cool features I wanted to mention today was the remediation script function. I have been playing with storage a lot in my lab recently as part of a wider…