---
title: "An in-depth look at VMware Cloud on AWS hosts"
description: "Dive into the detailed features of VMware Cloud on AWS hosts. Compare and analyze all available data for informed decisions."
date: 2025-08-14T12:32:01+00:00
modified: 2026-01-18T21:34:33+00:00
author: James Kilby
categories:
  - VMware
  - VMware Cloud on AWS
  - Runecast
  - Personal
  - vSphere
  - Ansible
  - Artificial Intelligence
  - Containers
  - Devops
  - Homelab
  - NVIDIA
  - Traefik
  - Networking
  - Storage
tags:
  - #VMware Cloud on AWS
url: https://jameskilby.co.uk/2025/08/vmc-host-deepdive/
image: https://jameskilby.co.uk/wp-content/uploads/2025/02/Picture-1-e1768509620339.png
---

![](https://jameskilby.co.uk/wp-content/uploads/2025/02/Picture-1-e1768509620339.png)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

# An in-depth look at VMware Cloud on AWS hosts

By[James](https://jameskilby.co.uk) August 14, 2025January 18, 2026 • 📖1 min read(187 words)

📅 **Published:** August 14, 2025• **Updated:** January 18, 2026

This is single page intended to collate every single feature of the current [VMware Cloud on AWS hosts](https://techdocs.broadcom.com/us/en/vmware-cis/cloud/vmware-cloud-on-aws/SaaS/operations-guide/managing-sddc-hosts-and-clusters/vmware-cloud-on-aws-host-types.html) for easy comparison.

All of this data Is publicly available. I have just collated into a single page

| **I3**|  **I3en**|  **I4i**  
---|---|---|---  
 **CPU**| | |   
Processor Name| Intel Xeon E5-2686 v4 | Intel Xeon Platinum 8175| Intel Xeon 8375c  
No of Physical Cores| 36| 48| 64  
Hyperthreading| No| Yes| Yes  
Base Clock| 2.3GHz| 2.5 GHz| 2.9 GHz  
Turbo Clock| N/A| 3.1 GHz| 3.5 GHz  
Processor Family| Broadwell| Skylake| Ice Lake  
Custom Core Count| 8 16 36| 8 16 24   
30 36 48| 8 16 24   
30 36 48 64  
 **Memory** | | |   
Capacity GiB| 512| 768| 1024  
Memory Speed| DDR4-2400| DDR4-2666| DDR4-3200  
 **Networking**| | |   
Network Adaptor Speed Gb/s| 25| 100| 75   
Hardware Network Encryption in Transit| No| Yes| Yes  
 **Storage**| | |   
Physical Drives| 8×1900| 8×7500| 8×3570  
vSAN OSA Cache Disk| 2| 4*| 2  
vSAN OSA Capacity Disk| 6| 28*| 6  
vSAN Compression| Yes| Yes| Yes  
vSAN Deduplication| Yes| No| No  
vSAN OSA Support| Yes| Yes| Yes  
vSAN ESA Support| No| No| Yes  
  
*I3en is using NVMe namespace to split the 8 physical disks into 32 NVMe namespaces. 

## 📚 Related Posts

  * [Automating the deployment of my Homelab AI Infrastructure](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)
  * [Using Content Libraries in VMC to deploy software faster](https://jameskilby.co.uk/2026/01/using-content-libraries-in-vmc-to-deploy-software-faster/)
  * [vSAN Cluster Shutdown &#8211; Orchestration](https://jameskilby.co.uk/2025/12/vsan-cluster-shutdown/)

## Similar Posts

  * [ ![Runecast Remediation Script’s](https://jameskilby.co.uk/wp-content/uploads/2023/05/Runecast-Solutions-Ltd.png) ](https://jameskilby.co.uk/2023/05/runecast-remediation-scripts/)

[Runecast](https://jameskilby.co.uk/category/runecast/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Runecast Remediation Script’s](https://jameskilby.co.uk/2023/05/runecast-remediation-scripts/)

By[James](https://jameskilby.co.uk) May 16, 2023November 17, 2023

I am a huge fan of the Runecast product and luckily as a vExpert they give out NFR licences for my lab. One of the really cool features I wanted to mention today was the remediation script function. I have been playing with storage a lot in my lab recently as part of a wider…

  * [ ![VMC New Host -i3en](https://jameskilby.co.uk/wp-content/uploads/2022/11/iu-1-768x395.png) ](https://jameskilby.co.uk/2020/07/i3en/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [VMC New Host -i3en](https://jameskilby.co.uk/2020/07/i3en/)

By[James](https://jameskilby.co.uk) July 2, 2020July 10, 2024

VMware Cloud on AWS (VMC) has introduced a new host to its lineup the “i3en”. This is based on the i3en.metal AWS instance. The specifications are certainly impressive packing in 96 logical cores, 768GiB RAM, and approximately 45.84 TiB of NVMe raw storage capacity per host. It’s certainly a monster with a 266% uplift in…

  * [ ![Advanced Deploy VMware vSphere 7.x 3V0-22.21N](https://jameskilby.co.uk/wp-content/uploads/2023/11/image.png) ](https://jameskilby.co.uk/2023/11/advanced-deploy-vmware-vsphere-7-x-3v0-22-21n/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [Personal](https://jameskilby.co.uk/category/personal/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [Advanced Deploy VMware vSphere 7.x 3V0-22.21N](https://jameskilby.co.uk/2023/11/advanced-deploy-vmware-vsphere-7-x-3v0-22-21n/)

By[James](https://jameskilby.co.uk) November 10, 2023November 17, 2023

Yesterday I sat and passed the above exam. It had been on my todo list for a good number of years. With the current pause in the Broadcom VMware takeover deal. I had some downtime and decided to use one of the three exam vouchers VMware give me each year. This upgrades me to a…

  * [ ![Automating the deployment of my Homelab AI  Infrastructure](https://jameskilby.co.uk/wp-content/uploads/2026/01/VMware-NVIDIA-logos_ee2f18dc-615d-4c9e-8f11-9c3c2ce2bf37-prv-768x432.png) ](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)

[Ansible](https://jameskilby.co.uk/category/ansible/) | [Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Containers](https://jameskilby.co.uk/category/containers/) | [Devops](https://jameskilby.co.uk/category/devops/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [NVIDIA](https://jameskilby.co.uk/category/nvidia/) | [Traefik](https://jameskilby.co.uk/category/traefik/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Automating the deployment of my Homelab AI Infrastructure](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)

By[James](https://jameskilby.co.uk) February 9, 2026February 9, 2026

Learn how to use Ansible to configure an Ubuntu VM for use with NVIDIA based AI workloads in vSphere

  * [ ![100Gb/s in my Homelab](https://jameskilby.co.uk/wp-content/uploads/2023/04/2157_hi_res-768x346.png) ](https://jameskilby.co.uk/2022/12/100gb-s-in-my-homelab-sort-of/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Networking](https://jameskilby.co.uk/category/networking/) | [Storage](https://jameskilby.co.uk/category/storage/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [100Gb/s in my Homelab](https://jameskilby.co.uk/2022/12/100gb-s-in-my-homelab-sort-of/)

By[James](https://jameskilby.co.uk) December 19, 2022November 11, 2023

For a while, I’ve been looking to update the networking at the core of my homelab. I have had some great results with the current setup utilising a number of DAC’s but there were a couple of things that were annoying me. Then MikroTik dropped the CRS504-4XQ-IN and if the price wasn’t horrendous then that…

  * [ ![VMC Quick Sizing Guide](https://jameskilby.co.uk/wp-content/uploads/2025/02/Picture-1-e1768509620339-768x193.png) ](https://jameskilby.co.uk/2025/05/vmc-quick-sizing-guide/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [VMC Quick Sizing Guide](https://jameskilby.co.uk/2025/05/vmc-quick-sizing-guide/)

By[James](https://jameskilby.co.uk) May 21, 2025July 2, 2025

Quick reference guide to the available storage resources that you get in VMware Cloud on AWS