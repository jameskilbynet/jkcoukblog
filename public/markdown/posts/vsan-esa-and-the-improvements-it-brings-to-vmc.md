---
title: "VMC – vSAN ESA"
description: "The benefits of vSAN ESA in VMware Cloud on AWS"
date: 2023-11-17T11:29:42+00:00
modified: 2024-07-10T10:40:28+00:00
author: James Kilby
categories:
  - VMware
  - VMware Cloud on AWS
  - vSAN
  - Homelab
  - Storage
  - TrueNAS Scale
  - Veeam
tags:
  - #Storage
  - #VMware Cloud on AWS
  - #vSAN
  - #vSAN ESA
url: https://jameskilby.co.uk/2023/11/vsan-esa-and-the-improvements-it-brings-to-vmc/
image: https://jameskilby.co.uk/wp-content/uploads/2023/11/OrigionalPoweredByvSAN-550x324-1.jpg
---

![](https://jameskilby.co.uk/wp-content/uploads/2023/11/OrigionalPoweredByvSAN-550x324-1.jpg)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/) | [vSAN](https://jameskilby.co.uk/category/vmware/vsan-vmware/)

# VMC – vSAN ESA

By[James](https://jameskilby.co.uk) November 17, 2023July 10, 2024 • 📖4 min read(851 words)

📅 **Published:** November 17, 2023• **Updated:** July 10, 2024

## Table of Contents

vSAN Express Storage Architecture (ESA) was announced at VMware Explore last year (2022) and while it’s been available for our on-premise customers for nearly a year it hasn’t been available in VMC until now…. With the release of the M24 version of VMC. It is now an option for newly provisioned SDDC’s

So why is this such an important change? to answer that we need a history lesson on vSAN

![](https://jameskilby.co.uk/wp-content/uploads/2023/10/Introducing-ESA-Figure01-1024x422.png)

vSAN first came to market in 2014, and the typical hardware of the day from a storage perspective was dominated by spindles. Flash had arrived on the scene but was VERY expensive and datacenter networking was in the transition from 1Gb/s to 10Gb/s. As a result of this and other factors design decisions were made in the original vSAN (referred to here as OSA) to implement a tiered storage architecture. This was made up of flash-based cache drives and flash or hard disk-based capacity drives. These were then combined into something called a disk group. This decision led to several consequences.

The first is that the cache drive cannot be used for storing data it is only a transient write buffer. As all writes go to the cache drive in a disk group in some circumstances this could limit the peak I/O available. 

It also meant that the endurance of this drive was paramount. This was a challenge in the early days of flash drives. 

To improve performance and reduce failure domains it’s possible to have multiple disk groups within a host. This is something that we implement in VMC using vSAN OSA this further compounds the reduction in usable storage. as multiple drives are allocated to the cache role.

As All-Flash has now become the normality it was worth revisiting the architecture. 

To understand more about the under-the-hood architecture of vSAN see the [official overview ](https://core.vmware.com/blog/introduction-vsan-express-storage-architecture)

## vSAN ESA – Benefits

Putting all of the above changes together brings significant benefits to VMC customers when using the ESA version of vSAN.

### Performance benefits

  * Significant increase in available IOPS ( all drives are used for reading and writing)
  * Adaptive write path for maximum throughput (Especially relevant for customers that require high throughput on a single or low number of VMDK’s) 
  * Improved snapshot mechanisms reduce the impact on the guest workload (Snapshot deletion is up to 100x faster combined with much reduced primary latency when running workloads from snapshots. As business demands lower RPO’s any improvement in snapshot mechanisms reduce the overhead to the guest workload.

### Efficiency benefits 

  * Improved compression algorithms for better data reduction
  * More efficient compression algorithms free up the Host CPU for Guest OS processing
  * Reduced storage network traffic (compression happens on the source host and then all replication is already compressed)
  * further enhancements reduce the CPU overhead when using vSAN Encryption (This is always used in VMC)
  * Always on [UNMAP/Trim](https://www.techtarget.com/searchstorage/definition/TRIM) (This helps to free up unused blocks at the Nand block level) 
  * The ability to deploy a parity-based (RAID5) with 3 Nodes. (OSA requires a minimum of 4)
  * The performance of the parity-based (RAID5/6) of the ESA implementation now exceeds the RAID1 performance of OSA. Customers can get increase savings by changing the storage policy.

### Resilience Benefits

  * less rewrites in the event of a device replacement – Although this is a significant benefit for on-premise customers with VMC if we have a drive failure we will replace the entire node. 

vSAN will only be available on the i4.metal-based VMC hosts at launch. It is also not currently available in a 2-node or Stretched SDDC configuration

## Sizing

As part of my job in VMware Cloud Pre-Sales a critical aspect is sizing VMC solutions for customers. This is usually done as a first pass with [RVtools](https://www.robware.net/rvtools/) inputs into our sizing tools. 

But what does that mean to a customer?

My colleague [Nikolay](https://nkulikov.com) put together this handy table. This is assuming a conservative compression ratio of 1.25% for ESA. The reality is we expect this to be higher.

**Nodes**|  **OSA (Compression 1.25)  
Policy In use**|  **Capacity (TiB)**|  **ESA  
(Compression 1.25)  
Policy In use**|  **Capacity (TiB)**|  **Delta %**  
---|---|---|---|---|---  
2| FTT1, Mirror| 14.09| N/A| N/A| N/A  
3| FTT1, Mirror| 23.5| FTT1, RAID5| 37.22| 58.38  
4| FTT1, RAID5| 51.87| FTT1, RAID5| 51.21| -1.27*  
5| FTT1, RAID5| 66.03| FTT1, RAID5| 65.19| -1.27*  
6| FTT2, RAID6| 70.56| FTT2, RAID6| 79.18| 12.22  
7| FTT2, RAID6| 83.11| FTT2, RAID6| 93.16| 12.09  
8| FTT2, RAID6| 95.65| FTT2, RAID6| 107.15| 12.02  
9| FTT2, RAID6| 108.2| FTT2, RAID6| 121.13| 11.95  
10| FTT2, RAID6| 120.75| FTT2, RAID6| 135.12| 11.90  
11| FTT2, RAID6| 133.3| FTT2, RAID6| 149.1| 11.85  
12| FTT2, RAID6| 145.85| FTT2, RAID6| 163.09| 11.82  
13| FTT2, RAID6| 158.4| FTT2, RAID6| 177.08| 11.79  
14| FTT2, RAID6| 170.95| FTT2, RAID6| 191.06| 11.76  
15| FTT2, RAID6| 183.5| FTT2, RAID6| 205.05| 11.74  
16| FTT2, RAID6| 196.04| FTT2, RAID6| 219.03| 11.73  
  
*As ESA has a dynamic parity-based mechanism it can either use 2+1 or 4+1 however OSA has the capability of using 3+1. This is why the 4 and 5 node has a lower usable space. 

The above table is the usable capacity for workloads including the management objects. Additional clusters would have more space.

## Similar Posts

  * [ ](https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Lab Update – Compute](https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/)

By[James](https://jameskilby.co.uk) January 6, 2022July 10, 2024

Quite a few changes have happened in the lab recently. so I decided to do a multipart blog on the changes. The refresh was triggered by the purchase of a SuperMicro Server (2027TR-H71FRF) chassis with 4x X9DRT Nodes / Blades. This is known as a BigTwin configuration in SuperMicro parlance. This is something I was…

  * [ ![Can you really squeeze 96TB in 1U ?](https://jameskilby.co.uk/wp-content/uploads/2024/09/QuantaGrid-SD1Q-1ULH-Front-Three-Quarter.png) ](https://jameskilby.co.uk/2024/09/can-you-really-squeeze-96tb-in-1u/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [TrueNAS Scale](https://jameskilby.co.uk/category/truenas-scale/)

### [Can you really squeeze 96TB in 1U ?](https://jameskilby.co.uk/2024/09/can-you-really-squeeze-96tb-in-1u/)

By[James](https://jameskilby.co.uk) September 12, 2024January 28, 2026

Yes, that’s a clickbait title. But technically it’s possible if I dropped all drive redundancy… I recently saw an advert for a server that was just too good to be true. It promised to bring a huge amount of storage and future options in a quite hard-to-believe 1U. The price it was on offer for…

  * [ ![Time in a VMC Environment](https://jameskilby.co.uk/wp-content/uploads/2025/02/Picture-1-e1768509620339-768x193.png) ](https://jameskilby.co.uk/2025/12/time-in-a-vmc-environment/)

[VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [Time in a VMC Environment](https://jameskilby.co.uk/2025/12/time-in-a-vmc-environment/)

By[James](https://jameskilby.co.uk) December 8, 2025January 17, 2026

One of the nice things about the VMC Service is that you dont have to worry about a number of the traditional infrastructure services that you typically obsess over when your running your own infrastructure. One of those is Time…. A key requirement for any enterprise platform. Time VMC allows you to utilise the Amazon…

  * [ ![Lab Storage](https://jameskilby.co.uk/wp-content/uploads/2023/04/81-ZoEW24UL._SL1500_-768x461.jpg) ](https://jameskilby.co.uk/2019/02/lab-storage-2/)

[Homelab](https://jameskilby.co.uk/category/homelab/)

### [Lab Storage](https://jameskilby.co.uk/2019/02/lab-storage-2/)

By[James](https://jameskilby.co.uk) February 10, 2019July 10, 2024

Lab Storage Update. Since starting my new role with Xtravirt my Homelab has gone through several fairly significant changes. At the moment it’s very much focused on the VMware stack and one of the things I needed was some more storage and especially some more storage performance. With that in mind, I purchased a new Synology…

  * [ ![Using Content Libraries in VMC to deploy software faster](https://jameskilby.co.uk/wp-content/uploads/2026/01/Firefly_Gemini-Flash-768x417.png) ](https://jameskilby.co.uk/2026/01/using-content-libraries-in-vmc-to-deploy-software-faster/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [Using Content Libraries in VMC to deploy software faster](https://jameskilby.co.uk/2026/01/using-content-libraries-in-vmc-to-deploy-software-faster/)

By[James](https://jameskilby.co.uk) January 27, 2026January 30, 2026

How to leverage Content Libraries to deploy into VMware Cloud on AWS faster.

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Veeam](https://jameskilby.co.uk/category/veeam/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Lab Update – Desired Workloads](https://jameskilby.co.uk/2022/01/lab-update-part-5-desired-workloads/)

By[James](https://jameskilby.co.uk) January 6, 2022November 11, 2023

My lab is always undergoing change. Partially as I want to try new things or new ways of doing things. Sometimes because I break things (not always by accident) sometimes it’s a great way to learn…. I decided to list the workloads I am looking to run (some of these are already in place) Infrastucture…