---
title: "An in-depth look at VMware Cloud on AWS hosts"
description: "Dive into the detailed features of VMware Cloud on AWS hosts. Compare and analyze all available data for informed decisions."
date: 2025-08-14T12:32:01+00:00
modified: 2025-12-24T09:44:16+00:00
author: James Kilby
categories:
  - VMware
  - VMware Cloud on AWS
  - Automation
  - Homelab
  - Personal
  - vSphere
  - Networking
  - Storage
  - VCF
tags:
  - #VMware Cloud on AWS
url: https://jameskilby.co.uk/2025/08/vmc-host-deepdive/
image: https://jameskilby.co.uk/wp-content/uploads/2025/02/Picture-1-e1768509620339.png
---

![](https://jameskilby.co.uk/wp-content/uploads/2025/02/Picture-1-e1768509620339.png)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

# An in-depth look at VMware Cloud on AWS hosts

By[James](https://jameskilby.co.uk) August 14, 2025December 24, 2025 • 📖1 min read(187 words)

📅 **Published:** August 14, 2025• **Updated:** December 24, 2025

This is single page intended to collate every single feature of the current [VMware Cloud on AWS hosts](https://techdocs.broadcom.com/us/en/vmware-cis/cloud/vmware-cloud-on-aws/SaaS/operations-guide/managing-sddc-hosts-and-clusters/vmware-cloud-on-aws-host-types.html) for easy comparison.

All of this data Is publicly available. I have just collated into a single page

| **I3**|  **I3en**|  **I4i**  
---|---|---|---  
 **CPU**| | |   
Processor Name| Intel Xeon E5-2686 v4 | Intel Xeon Platinum 8175| Intel Xeon 8375c  
No of Physical Cores| 36| 48| 64  
Hyperthreading| No| Yes| Yes  
Base Clock| 2.3GHz| 2.5 Ghz| 2.9 GHz  
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

## Similar Posts

  * [ ![Template Deployment with Packer](https://jameskilby.co.uk/wp-content/uploads/2021/01/logo_packer.png) ](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

[Automation](https://jameskilby.co.uk/category/automation/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Template Deployment with Packer](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

By[James](https://jameskilby.co.uk) January 21, 2021December 8, 2025

Packer is one of those tools I have heard about, and some of the cool people on Twitter that I follow have been using it for a while. But until now I had never played with it. That was until I saw the below tweet by the legend that is William Lam That was the…

  * [ ![Advanced Deploy VMware vSphere 7.x 3V0-22.21N](https://jameskilby.co.uk/wp-content/uploads/2023/11/image.png) ](https://jameskilby.co.uk/2023/11/advanced-deploy-vmware-vsphere-7-x-3v0-22-21n/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [Personal](https://jameskilby.co.uk/category/personal/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [Advanced Deploy VMware vSphere 7.x 3V0-22.21N](https://jameskilby.co.uk/2023/11/advanced-deploy-vmware-vsphere-7-x-3v0-22-21n/)

By[James](https://jameskilby.co.uk) November 10, 2023November 17, 2023

Yesterday I sat and passed the above exam. It had been on my todo list for a good number of years. With the current pause in the Broadcom VMware takeover deal. I had some downtime and decided to use one of the three exam vouchers VMware give me each year. This upgrades me to a…

  * [ ![100Gb/s in my Homelab](https://jameskilby.co.uk/wp-content/uploads/2023/04/2157_hi_res-768x346.png) ](https://jameskilby.co.uk/2022/12/100gb-s-in-my-homelab-sort-of/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Networking](https://jameskilby.co.uk/category/networking/) | [Storage](https://jameskilby.co.uk/category/storage/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [100Gb/s in my Homelab](https://jameskilby.co.uk/2022/12/100gb-s-in-my-homelab-sort-of/)

By[James](https://jameskilby.co.uk) December 19, 2022November 11, 2023

For a while, I’ve been looking to update the networking at the core of my homelab. I have had some great results with the current setup utilising a number of DAC’s but there were a couple of things that were annoying me. Then MikroTik dropped the CRS504-4XQ-IN and if the price wasn’t horrendous then that…

  * [ ![MultiHost Holodeck VCF](https://jameskilby.co.uk/wp-content/uploads/2023/12/Holodeck-Overview.png) ](https://jameskilby.co.uk/2024/01/multihost-holodeck-vcf/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VCF](https://jameskilby.co.uk/category/vmware/vcf/)

### [MultiHost Holodeck VCF](https://jameskilby.co.uk/2024/01/multihost-holodeck-vcf/)

By[James](https://jameskilby.co.uk) January 17, 2024December 27, 2025

How to Deploy VMware Holodeck on multiple hosts

  * [ ![VMware Certified Master Specialist HCI 2020](https://jameskilby.co.uk/wp-content/uploads/2020/09/vmware_SP_HCI20.png) ](https://jameskilby.co.uk/2020/09/vmware-certified-master-specialist-hci-2020/)

[Personal](https://jameskilby.co.uk/category/personal/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [VMware Certified Master Specialist HCI 2020](https://jameskilby.co.uk/2020/09/vmware-certified-master-specialist-hci-2020/)

By[James](https://jameskilby.co.uk) September 13, 2020November 11, 2023

I recently sat (and passed the VMware HCI Master Specialist exam (5V0-21.20). I won’t go into any details of the contents but I will comment that I felt the questions were fair and that there wasn’t anything in it to trip you up. The required knowledge was certainly wider than the vSAN specialist exam. This…

  * [ ![VMware – Going out with a Bang!](https://jameskilby.co.uk/wp-content/uploads/2023/10/rnli-logo-768x384.png) ](https://jameskilby.co.uk/2023/10/going-out-with-a-bang/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [Personal](https://jameskilby.co.uk/category/personal/)

### [VMware – Going out with a Bang!](https://jameskilby.co.uk/2023/10/going-out-with-a-bang/)

By[James](https://jameskilby.co.uk) October 7, 2023November 17, 2023

There is a lot of uncertainty with VMware at the moment. This is all due to the pending acquisition by Broadcom. There are a lot of unknowns for the staff and customers about what the company will look like in the future. I certainly have some concerns mainly just with the unknown. However, VMware has…