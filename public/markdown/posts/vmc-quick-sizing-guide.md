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
  - Homelab
  - vSphere
  - Automation
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

  * [ ![VMware Certified Master Specialist HCI 2020](https://jameskilby.co.uk/wp-content/uploads/2020/09/vmware_SP_HCI20.png) ](https://jameskilby.co.uk/2020/09/vmware-certified-master-specialist-hci-2020/)

[Personal](https://jameskilby.co.uk/category/personal/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [VMware Certified Master Specialist HCI 2020](https://jameskilby.co.uk/2020/09/vmware-certified-master-specialist-hci-2020/)

By[James](https://jameskilby.co.uk) September 13, 2020November 11, 2023

I recently sat (and passed the VMware HCI Master Specialist exam (5V0-21.20). I won’t go into any details of the contents but I will comment that I felt the questions were fair and that there wasn’t anything in it to trip you up. The required knowledge was certainly wider than the vSAN specialist exam. This…

  * [ ![Using Content Libraries in VMC to deploy software faster](https://jameskilby.co.uk/wp-content/uploads/2026/01/Firefly_Gemini-Flash-768x417.png) ](https://jameskilby.co.uk/2026/01/using-content-libraries-in-vmc-to-deploy-software-faster/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [Using Content Libraries in VMC to deploy software faster](https://jameskilby.co.uk/2026/01/using-content-libraries-in-vmc-to-deploy-software-faster/)

By[James](https://jameskilby.co.uk) January 27, 2026February 1, 2026

How to leverage Content Libraries to deploy into VMware Cloud on AWS faster.

  * [ ![An in-depth look at VMware Cloud on AWS hosts](https://jameskilby.co.uk/wp-content/uploads/2025/02/Picture-1-e1768509620339-768x193.png) ](https://jameskilby.co.uk/2025/08/vmc-host-deepdive/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [An in-depth look at VMware Cloud on AWS hosts](https://jameskilby.co.uk/2025/08/vmc-host-deepdive/)

By[James](https://jameskilby.co.uk) August 14, 2025March 3, 2026

This is single page intended to collate every single feature of the current VMware Cloud on AWS hosts for easy comparison. All of this data Is publicly available. I have just collated into a single page I3.metal I3en.metal I4i.metal CPU Processor Name Intel Xeon E5-2686 v4 Intel Xeon Platinum 8175 Intel Xeon 8375c No of…

  * [ ![Forcing an Upgrade to vSphere 8](https://jameskilby.co.uk/wp-content/uploads/2022/12/Screenshot-2022-12-14-at-21.45.23.png) ](https://jameskilby.co.uk/2022/12/forcing-an-upgrade-to-vsphere-8/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [Forcing an Upgrade to vSphere 8](https://jameskilby.co.uk/2022/12/forcing-an-upgrade-to-vsphere-8/)

By[James](https://jameskilby.co.uk) December 14, 2022October 1, 2025

I run a reasonably extensive homelab that is of course built around the VMware ecosystem. So with the release of vSphere 8 I was obviously going to upgrade however a few personal things blocked me from doing it until now. The vCenter upgrade was smooth however knowing that some of the hardware I am running…

  * [ ![Template Deployment with Packer](https://jameskilby.co.uk/wp-content/uploads/2021/01/logo_packer.png) ](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

[Automation](https://jameskilby.co.uk/category/automation/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Template Deployment with Packer](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

By[James](https://jameskilby.co.uk) January 21, 2021February 9, 2026

Packer is one of those tools I have heard about, and some of the cool people on Twitter that I follow have been using it for a while. But until now I had never played with it. That was until I saw the below tweet by the legend that is William Lam That was the…

  * [ ![Holodeck CPU Fixes](https://jameskilby.co.uk/wp-content/uploads/2024/01/40oOd8IipPvtrPJs-1198788743-768x737.jpg) ](https://jameskilby.co.uk/2024/01/holodeck-cpu-fixes/)

[VCF](https://jameskilby.co.uk/category/vmware/vcf/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Holodeck CPU Fixes](https://jameskilby.co.uk/2024/01/holodeck-cpu-fixes/)

By[James](https://jameskilby.co.uk) January 18, 2024July 10, 2024

How to deploy Holodeck with Legacy CPU’s