---
title: "VMC Quick Sizing Guide"
description: "Get essential insights on storage resources in VMware Cloud on AWS. Use our quick sizing guide for efficient planning and management."
date: 2025-05-21T09:33:04+00:00
modified: 2025-07-02T08:39:59+00:00
author: James Kilby
categories:
  - VMware
  - VMware Cloud on AWS
  - Personal
  - AWS
  - Veeam
  - VCF
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

  * [Automating the deployment of my Homelab AI Infrastructure](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)
  * [Using Content Libraries in VMC to deploy software faster](https://jameskilby.co.uk/2026/01/using-content-libraries-in-vmc-to-deploy-software-faster/)
  * [vSAN Cluster Shutdown &#8211; Orchestration](https://jameskilby.co.uk/2025/12/vsan-cluster-shutdown/)

## Similar Posts

  * [ ![An in-depth look at VMware Cloud on AWS hosts](https://jameskilby.co.uk/wp-content/uploads/2025/02/Picture-1-e1768509620339-768x193.png) ](https://jameskilby.co.uk/2025/08/vmc-host-deepdive/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [An in-depth look at VMware Cloud on AWS hosts](https://jameskilby.co.uk/2025/08/vmc-host-deepdive/)

By[James](https://jameskilby.co.uk) August 14, 2025January 18, 2026

This is single page intended to collate every single feature of the current VMware Cloud on AWS hosts for easy comparison. All of this data Is publicly available. I have just collated into a single page I3 I3en I4i CPU Processor Name Intel Xeon E5-2686 v4 Intel Xeon Platinum 8175 Intel Xeon 8375c No of…

  * [ ![VMC Host Errors](https://jameskilby.co.uk/wp-content/uploads/2022/11/iu-1-768x395.png) ](https://jameskilby.co.uk/2020/09/vmc-host-errors/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [VMC Host Errors](https://jameskilby.co.uk/2020/09/vmc-host-errors/)

By[James](https://jameskilby.co.uk) September 15, 2020February 9, 2026

Lean how host failures are handled within VMC

  * [ ![VMware – Going out with a Bang!](https://jameskilby.co.uk/wp-content/uploads/2023/10/rnli-logo-768x384.png) ](https://jameskilby.co.uk/2023/10/going-out-with-a-bang/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [Personal](https://jameskilby.co.uk/category/personal/)

### [VMware – Going out with a Bang!](https://jameskilby.co.uk/2023/10/going-out-with-a-bang/)

By[James](https://jameskilby.co.uk) October 7, 2023November 17, 2023

There is a lot of uncertainty with VMware at the moment. This is all due to the pending acquisition by Broadcom. There are a lot of unknowns for the staff and customers about what the company will look like in the future. I certainly have some concerns mainly just with the unknown. However, VMware has…

  * [VMware](https://jameskilby.co.uk/category/vmware/) | [AWS](https://jameskilby.co.uk/category/aws/) | [Veeam](https://jameskilby.co.uk/category/veeam/)

### [Monitoring VMC – Part 1](https://jameskilby.co.uk/2019/12/monitoring-vmc-part-1/)

By[James](https://jameskilby.co.uk) December 17, 2019October 1, 2025

As previously mentioned I have been working a lot with VMware Cloud on AWS and one of the questions that often crops up is around an approach to monitoring. This is an interesting topic as VMC is technically “as a service” therefore the monitoring approach is a bit different. Technically AWS and VMware’s SRE teams…

  * [ ![Using Content Libraries in VMC to deploy software faster](https://jameskilby.co.uk/wp-content/uploads/2026/01/Firefly_Gemini-Flash-768x417.png) ](https://jameskilby.co.uk/2026/01/using-content-libraries-in-vmc-to-deploy-software-faster/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [Using Content Libraries in VMC to deploy software faster](https://jameskilby.co.uk/2026/01/using-content-libraries-in-vmc-to-deploy-software-faster/)

By[James](https://jameskilby.co.uk) January 27, 2026February 1, 2026

How to leverage Content Libraries to deploy into VMware Cloud on AWS faster.

  * [ ![MultiHost Holodeck VCF](https://jameskilby.co.uk/wp-content/uploads/2023/12/Holodeck-Overview.png) ](https://jameskilby.co.uk/2024/01/multihost-holodeck-vcf/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VCF](https://jameskilby.co.uk/category/vmware/vcf/)

### [MultiHost Holodeck VCF](https://jameskilby.co.uk/2024/01/multihost-holodeck-vcf/)

By[James](https://jameskilby.co.uk) January 17, 2024January 18, 2026

How to Deploy VMware Holodeck on multiple hosts