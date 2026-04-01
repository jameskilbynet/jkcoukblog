---
title: "New VMC Host i7i.metal-24xl"
description: "We’ve expanded the VMC fleet with the new i7i (i7i.24xlarge) host type. Powered by Intel Emerald Rapids processors with PCIe Gen5 connectivity, it delivers"
date: 2026-04-01T08:06:00+00:00
modified: 2026-04-01T21:10:45+00:00
author: James Kilby
categories:
  - VMware
  - VMware Cloud on AWS
  - Homelab
  - Veeam
  - VCF
  - Personal
  - Automation
tags:
  - #I7i
  - #VMware
  - #VMware Cloud on AWS
url: https://jameskilby.co.uk/2026/04/new-vmc-host-i7i-metal-24xl/
image: https://jameskilby.co.uk/wp-content/uploads/2026/03/VMConAWS.png.webp
---

![Vmconaws.Png](https://jameskilby.co.uk/wp-content/uploads/2026/03/VMConAWS.png.webp)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

# New VMC Host i7i.metal-24xl

By[James](https://jameskilby.co.uk)April 1, 2026April 1, 2026 • 📖2 min read(384 words)

We’ve expanded the VMC fleet with the new **i7i**[ **(i7i.24xlarge)**](https://aws.amazon.com/ec2/instance-types/i7i/)host type. Powered by Intel Emerald Rapids processors with PCIe Gen5 connectivity, it delivers the fleet’s highest single-core performance and memory bandwidth, making it well suited for latency-sensitive workloads and high-performance vSAN configurations.

## Key Technical Specs:

  *  **Performance:** Intel Emerald Rapids CPUs + PCIe Gen5, offering the fleet’s highest clock speeds and memory bandwidth.
  *  **Storage:** Optimized for vSAN with the fastest available NVMe devices. Support for both vSAN OSA and ESA
  *  **Security:** Enhanced security based on [Intel Total Memory Encryption](https://www.intel.com/content/dam/www/central-libraries/us/en/documents/white-paper-intel-tme.pdf)

This host brings a blend of usable options to complement the existing VMC fleet ranging from bleeding edge performance for tier one applications. It also supports expanded DR capabilities with SCFS via [VLR](https://techdocs.broadcom.com/us/en/vmware-cis/live-recovery.html).

The below table compares the specifications of all nodes currently running in VMC.

|  **I3**|  **I3en**|  **I4i**|  **I7i**  
---|---|---|---|---  
AWS Nitro Version| v2| v3| v4| v4  
 **CPU**| | | |   
Processor Name| Intel Xeon E5-2686 v4 | Intel Xeon Platinum 8175| Intel Xeon 8375c| Intel Xeon 8559c  
No of Physical Cores| 36| 48| 64| 48  
Hyperthreading| No| Yes| Yes| Yes  
Base Clock| 2.3GHz| 2.5 Ghz| 2.9 GHz| 3.2 GHz  
Turbo Clock| N/A| 3.1 GHz| 3.5 GHz| 4.0 Ghz  
Processor Family| Broadwell| Skylake| Ice Lake| Emerald Rapids  
Supported Custom Core Counts| 8 16 36| 8 16 24   
30 36 48| 8 16 24   
30 36 48 64| 8 16 24 30 36  
 **Memory**| | | |   
Capacity GiB| 512| 768| 1024| 768  
Memory Speed| DDR4-2400| DDR4-2666| DDR4-3200| DDR5-5600  
 **Networking**| | | |   
Network Adaptor Speed Gb/s| 25| 100| 75 | 56.25  
Hardware Network Encryption | No| Yes| Yes| Yes  
 **Storage**| | | |   
Drive Connection| PCIe Gen3| PCIe Gen3| PCIe Gen4| PCIe Gen5  
Physical Drives| 8×1900| 8×7500| 8×3570| 6×3750  
Physical Raw Space GiB| 15,200| 60,000| 28,560| 22,500  
vSAN OSA Cache Disk| 2| 4*| 2| 2  
vSAN OSA Capacity Disk| 6| 28*| 6| 4  
vSAN Compression| Yes| Yes| Yes| Yes  
vSAN OSA Deduplication| Yes| No| No| No  
vSAN OSA Support| Yes| Yes| Yes| Yes  
vSAN ESA Support| No| No| Yes| Yes  
Underlying Storage Performance IOPS*| –| 80000| 160000| 120000  
Underlying Storage Performance Throughput*| –| 2375| 5000| 3750  
  
*Storage performance figures taken from instances website vSAN performance will differ based on OSA/ESA, Storage Policy in use and number of hosts in the environment. 

** In vSAN ESA all drives are in a single tier and contribute to both performance and capacity

## 📚 Related Posts

  * [My Self-Hosted AI Stack: Architecture Overview (Part 1)](https://jameskilby.co.uk/2026/03/my-self-hosted-ai-stack-a-technical-deep-dive/)
  * [Automating the deployment of my Homelab AI Infrastructure](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)
  * [Using Content Libraries in VMC to deploy software faster](https://jameskilby.co.uk/2026/01/using-content-libraries-in-vmc-to-deploy-software-faster/)

## Similar Posts

  * [![Time in a VMC Environment](https://jameskilby.co.uk/wp-content/uploads/2025/02/Picture-1-e1768509620339-768x193.png)](https://jameskilby.co.uk/2025/12/time-in-a-vmc-environment/)

[VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [Time in a VMC Environment](https://jameskilby.co.uk/2025/12/time-in-a-vmc-environment/)

By[James](https://jameskilby.co.uk)December 8, 2025March 10, 2026

How to use the Amazon Time Sync Service in a VMC environment

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Veeam](https://jameskilby.co.uk/category/veeam/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Lab Update – Desired Workloads](https://jameskilby.co.uk/2022/01/lab-update-part-5-desired-workloads/)

By[James](https://jameskilby.co.uk)January 6, 2022March 10, 2026

My lab is always undergoing change. Partially as I want to try new things or new ways of doing things. Sometimes because I break things (not always by accident) sometimes it’s a great way to learn…. I decided to list the workloads I am looking to run (some of these are already in place) Infrastucture…

  * [![Holodeck CPU Fixes](https://jameskilby.co.uk/wp-content/uploads/2024/01/40oOd8IipPvtrPJs-1198788743-768x737.jpg)](https://jameskilby.co.uk/2024/01/holodeck-cpu-fixes/)

[VCF](https://jameskilby.co.uk/category/vmware/vcf/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Holodeck CPU Fixes](https://jameskilby.co.uk/2024/01/holodeck-cpu-fixes/)

By[James](https://jameskilby.co.uk)January 18, 2024March 10, 2026

How to deploy Holodeck with Legacy CPU’s

  * [![VMware – Going out with a Bang!](https://jameskilby.co.uk/wp-content/uploads/2023/10/rnli-logo-768x384.png)](https://jameskilby.co.uk/2023/10/going-out-with-a-bang/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [Personal](https://jameskilby.co.uk/category/personal/)

### [VMware – Going out with a Bang!](https://jameskilby.co.uk/2023/10/going-out-with-a-bang/)

By[James](https://jameskilby.co.uk)October 7, 2023March 10, 2026

There is a lot of uncertainty with VMware at the moment. This is all due to the pending acquisition by Broadcom. There are a lot of unknowns for the staff and customers about what the company will look like in the future. I certainly have some concerns mainly just with the unknown. However, VMware has…

  * [![Template Deployment with Packer](https://jameskilby.co.uk/wp-content/uploads/2021/01/logo_packer.png)](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

[Automation](https://jameskilby.co.uk/category/automation/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Template Deployment with Packer](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

By[James](https://jameskilby.co.uk)January 21, 2021March 10, 2026

Packer is one of those tools I have heard about, and some of the cool people on Twitter that I follow have been using it for a while. But until now I had never played with it. That was until I saw the below tweet by the legend that is William Lam That was the…

  * [![Lab Update – Compute](https://jameskilby.co.uk/wp-content/uploads/2023/04/IMG_4536-scaled-1-768x1024.jpg)](https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Lab Update – Compute](https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/)

By[James](https://jameskilby.co.uk)January 6, 2022February 16, 2026

Quite a few changes have happened in the lab recently. so I decided to do a multipart blog on the changes. The refresh was triggered by the purchase of a SuperMicro Server (2027TR-H71FRF) chassis with 4x X9DRT Nodes / Blades. This is known as a BigTwin configuration in SuperMicro parlance. This is something I was…