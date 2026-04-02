---
title: "New VMC Host i7i.metal-24xl"
description: "We’ve expanded the VMC fleet with the new i7i (i7i.24xlarge) host type. Powered by Intel Emerald Rapids processors with PCIe Gen5 connectivity, it delivers"
date: 2026-04-01T08:06:00+00:00
modified: 2026-04-02T08:52:56+00:00
author: James Kilby
categories:
  - VMware
  - VMware Cloud on AWS
  - vSAN
  - TrueNAS Scale
  - vSphere
  - Personal
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

By[James](https://jameskilby.co.uk)April 1, 2026April 2, 2026 • 📖2 min read(409 words)

📅 **Published:** April 01, 2026• **Updated:** April 02, 2026

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
vSAN OSA Cache Disk| 2| 4^| 2| 2  
vSAN OSA Capacity Disk| 6| 28^| 6| 4  
vSAN Compression| Yes| Yes| Yes| Yes  
vSAN OSA Deduplication| Yes| No| No| No  
vSAN OSA Support| Yes| Yes| Yes| Yes  
vSAN ESA Support| No| No| Yes| Yes  
Underlying Storage Performance IOPS*| –| 80000| 160000| 120000  
Underlying Storage Performance Throughput*| –| 2375| 5000| 3750  
  
*Storage performance figures taken from instances website vSAN performance will differ based on OSA/ESA, Storage Policy in use and number of hosts in the environment. 

^I3en hosts use NVMe namespaces to carve the disks up differently to how they are physically presented

** In vSAN ESA all drives are in a single tier and contribute to both performance and capacity

The official announcement can be found [here](https://blogs.vmware.com/cloud-foundation/2026/04/01/vmware-cloud-aws-i7i-metal-24xl-instance/).

## 📚 Related Posts

  * [My Self-Hosted AI Stack: Architecture Overview (Part 1)](https://jameskilby.co.uk/2026/03/my-self-hosted-ai-stack-a-technical-deep-dive/)
  * [Automating the deployment of my Homelab AI Infrastructure](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)
  * [Using Content Libraries in VMC to deploy software faster](https://jameskilby.co.uk/2026/01/using-content-libraries-in-vmc-to-deploy-software-faster/)

## Similar Posts

  * [![VMC – vSAN ESA](https://jameskilby.co.uk/wp-content/uploads/2023/11/OrigionalPoweredByvSAN-550x324-1.jpg)](https://jameskilby.co.uk/2023/11/vsan-esa-and-the-improvements-it-brings-to-vmc/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/) | [vSAN](https://jameskilby.co.uk/category/vmware/vsan-vmware/)

### [VMC – vSAN ESA](https://jameskilby.co.uk/2023/11/vsan-esa-and-the-improvements-it-brings-to-vmc/)

By[James](https://jameskilby.co.uk)November 17, 2023March 10, 2026

An Overview of vSAN ESA in VMC 

  * [![How to Run ZFS on VMware vSphere: Setup Guide and Best Practices](https://jameskilby.co.uk/wp-content/uploads/2024/12/ZFS.jpg)](https://jameskilby.co.uk/2024/12/zfs-on-vmware/)

[TrueNAS Scale](https://jameskilby.co.uk/category/truenas-scale/) | [VMware](https://jameskilby.co.uk/category/vmware/) | [vSAN](https://jameskilby.co.uk/category/vmware/vsan-vmware/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [How to Run ZFS on VMware vSphere: Setup Guide and Best Practices](https://jameskilby.co.uk/2024/12/zfs-on-vmware/)

By[James](https://jameskilby.co.uk)December 18, 2024March 10, 2026

ZFS on VMware Best Practices

  * [![Advanced Deploy VMware vSphere 7.x 3V0-22.21N](https://jameskilby.co.uk/wp-content/uploads/2023/11/image.png)](https://jameskilby.co.uk/2023/11/advanced-deploy-vmware-vsphere-7-x-3v0-22-21n/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [Personal](https://jameskilby.co.uk/category/personal/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [Advanced Deploy VMware vSphere 7.x 3V0-22.21N](https://jameskilby.co.uk/2023/11/advanced-deploy-vmware-vsphere-7-x-3v0-22-21n/)

By[James](https://jameskilby.co.uk)November 10, 2023March 10, 2026

Yesterday I sat and passed the above exam. It had been on my todo list for a good number of years. With the current pause in the Broadcom VMware takeover deal. I had some downtime and decided to use one of the three exam vouchers VMware give me each year. This upgrades me to a…

  * [![VMC Quick Sizing Guide](https://jameskilby.co.uk/wp-content/uploads/2025/02/Picture-1-e1768509620339-768x193.png)](https://jameskilby.co.uk/2025/05/vmc-quick-sizing-guide/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [VMC Quick Sizing Guide](https://jameskilby.co.uk/2025/05/vmc-quick-sizing-guide/)

By[James](https://jameskilby.co.uk)May 21, 2025July 2, 2025

Quick reference guide to the available storage resources that you get in VMware Cloud on AWS

  * [![vSAN Cluster Shutdown – Orchestration](https://jameskilby.co.uk/wp-content/uploads/2023/11/OrigionalPoweredByvSAN-550x324-1.jpg)](https://jameskilby.co.uk/2025/12/vsan-cluster-shutdown/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [vSAN](https://jameskilby.co.uk/category/vmware/vsan-vmware/)

### [vSAN Cluster Shutdown – Orchestration](https://jameskilby.co.uk/2025/12/vsan-cluster-shutdown/)

By[James](https://jameskilby.co.uk)December 6, 2025March 10, 2026

How to safety shutdown a vSAN Environment

  * [![VMware – Going out with a Bang!](https://jameskilby.co.uk/wp-content/uploads/2023/10/rnli-logo-768x384.png)](https://jameskilby.co.uk/2023/10/going-out-with-a-bang/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [Personal](https://jameskilby.co.uk/category/personal/)

### [VMware – Going out with a Bang!](https://jameskilby.co.uk/2023/10/going-out-with-a-bang/)

By[James](https://jameskilby.co.uk)October 7, 2023March 10, 2026

There is a lot of uncertainty with VMware at the moment. This is all due to the pending acquisition by Broadcom. There are a lot of unknowns for the staff and customers about what the company will look like in the future. I certainly have some concerns mainly just with the unknown. However, VMware has…