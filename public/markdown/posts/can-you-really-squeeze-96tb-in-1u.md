---
title: "Can you really squeeze 96TB in 1U ?"
description: "Learn how to achieve 96TB in a 1U server without redundancy. Uncover the potential of ultra-dense storage solutions today!"
date: 2024-09-12T12:39:16+00:00
modified: 2026-01-28T17:47:29+00:00
author: James Kilby
categories:
  - Homelab
  - Storage
  - TrueNAS Scale
  - Synology
  - Networking
  - VMware
  - Docker
  - Portainer
  - Hosting
  - Nutanix
tags:
  - #Homelab
  - #Storage
url: https://jameskilby.co.uk/2024/09/can-you-really-squeeze-96tb-in-1u/
image: https://jameskilby.co.uk/wp-content/uploads/2024/09/QuantaGrid-SD1Q-1ULH-Front-Three-Quarter.png
---

![](https://jameskilby.co.uk/wp-content/uploads/2024/09/QuantaGrid-SD1Q-1ULH-Front-Three-Quarter.png)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [TrueNAS Scale](https://jameskilby.co.uk/category/truenas-scale/)

# Can you really squeeze 96TB in 1U ?

By[James](https://jameskilby.co.uk) September 12, 2024January 28, 2026 • 📖4 min read(774 words)

📅 **Published:** September 12, 2024• **Updated:** January 28, 2026

Yes, that’s a clickbait title. But technically it’s possible if I dropped all drive redundancy…

I recently saw an advert for a server that was just too good to be true. It promised to bring a huge amount of storage and future options in a quite hard-to-believe 1U. The price it was on offer for was also unreal. I wasn’t looking for a new storage server but knew I would be able to make good use of this one. It would allow me to consolidate a few bits and pieces so it just had to be done….

## Table of Contents

## Intro

The server is a D51PH-1ULH from a vendor called [Quanta Cloud Technology](http://qct.io). They are a vendor that doesn’t seem to be very well known outside of the HyperScalers. It’s described as an Ultra dense storage server and with the capacity for 12×3.5″ plus 4×2.5″ drives it’s hard to argue with that. It also comes with IPMIv2.0 and 2x10Gb SFP+ connections. One really interesting thing is that at first glance the drives don’t look like they are hot-swap. However, the server comes with a giant hard drive tray that slides out the front and then individual drives can be swapped.

The seller also threw in a few 480GB Samsung Enterprise SSDs and 16x8TB Seagate Exos making it the bargain of the century. This allowed me to fully populate the chassis and still have 4 8TB drives spare. I typically don’t like using second hard storage but in this instance, I was willing to make an exception.

![](https://jameskilby.co.uk/wp-content/uploads/2024/08/IMG_7063-744x1024.jpeg)Server shortly before being installed in my Rack

## OS Setup

I have stuck with TrueNAS scale as the OS of choice for my dedicated storage systems. It’s something I’m familiar with and served my needs in the past well. However, I have decided to leave this as primarily a pure “Storage Server”. The available storage will be served out as a mixture of iSCSI, NFS, and SMB natively by TrueNAS and then I will run a MINIO container on top to offer S3-based object services.

## Hardware

I swapped out the 480GB Samsung drives for some larger 2TB consumer-based drives. The current configuration is listed below.

The servers also included rails which was a much appreciated benefit. The only downside is I underestimated just how long these servers are. The good news is I can adjust my Startech rack to make it longer and accommodate this. The downside is I need to derack the rest of my gear to do it. So for now it’s sitting on top of one of my other Supermicro servers.

CPU| 2x Intel(R) Xeon(R) CPU E5-2620 v4 @ 2.10GHz  
---|---  
Memory | 256 DDR4  
Boot Device | 32 GB SATADom  
HDD | 12x ST8000NM0075 8TB 12Gb SAS  
SDD | 3x2TB Samsung Evo  
NIC | 2x 25Gb  
  
## Pool Configuration

For performance reasons, I have chosen to go with 6x Mirrored vDevs 2x wide. Conceptually this is similar to RAID 10. This uses all 12 of the 3.5-inch drives in a single pool. This gives a usable pool capacity of just under 43.5TB

Although I lose 50% of the usable capacity I wanted the write performance that this gives

This is then complemented by three 2TB SSDs being used as L2ARC (Read cache) and as I have so much read cache the drives basically just do writes.

## Performance

I haven’t bothered benchmarking the setup from a performance perspective as I have actual workloads on it that would be annoying to move. However, from what I am seeing in the latency graphs of vCenter I am happy with the results.

As you can see below the ARC is holding all of the really hot data in RAM.

![](https://jameskilby.co.uk/wp-content/uploads/2024/09/Screenshot-2024-08-29-at-10.02.01.png)

The warm data is being served from the 6TB of SSD in the server, however it has not finished warming up yet. The L2ARC data can also be compressed so the reality is that it’s probably closer to the equivalent of 12TB.

![L2ARC Warming up](https://jameskilby.co.uk/wp-content/uploads/2024/09/Screenshot-2024-09-11-at-15.07.42-1024x203.png)L2ARC Warming up

A benefit of TrueNAS Scale is that the L2ARC persists between reboots. Otherwise, it would take a very long time to finish warming up with my workload.

This means the performance graphs of the actual disks tend to look like this. Only two are shown but all of the main drives appear like this. Yes, there are some reads (Blue) but the majority of the time they are only doing writes ( Pink) for the system.

![](https://jameskilby.co.uk/wp-content/uploads/2024/09/Screenshot-2024-09-10-at-11.32.39-1024x513.png)

## Upgrades:

### SATADom

I have managed to source a compatible SATADom (32GB rather than the 128GB Partcode SD131C-032GM-JM-A) I was looking for. The migration of the TrueNAS install was super smooth.

### Networking

I have also upgraded the NIC to a Quanta ConnectX-4 LX Dual-Port 25GbE 

![](https://jameskilby.co.uk/wp-content/uploads/2024/09/s-l1600-1-1024x537.jpg)

## Similar Posts

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [Synology](https://jameskilby.co.uk/category/synology/)

### [Lab Storage](https://jameskilby.co.uk/2018/01/lab-storage/)

By[James](https://jameskilby.co.uk) January 6, 2018July 10, 2024

I have been meaning to post around some of the lab setup for a while. Although it changes frequently at present it’s as below. I will add some pics when I have tidied up the lab/cables My primary lab storage is all contained within an HP Gen8 Microserver. Currently Configured: 1x INTEL Core i3-4130 running at…

  * [ ![Lab Update – Part 2 Storage Truenas Scale](https://jameskilby.co.uk/wp-content/uploads/2022/01/maxresdefault-768x432.jpeg) ](https://jameskilby.co.uk/2022/01/lab-update-part-2-storage/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/)

### [Lab Update – Part 2 Storage Truenas Scale](https://jameskilby.co.uk/2022/01/lab-update-part-2-storage/)

By[James](https://jameskilby.co.uk) January 11, 2022December 11, 2023

The HP Z840 has changed its role to a permanent storage box running Truenas Scale. This is in addition to my Synology DS918+ TrueNas is the successor to FreeNas a very popular BSD based StorageOS and TrueNas scale is a fork of this based on Linux. The Synology has been an amazing piece of kit…

  * [ ![100Gb/s in my Homelab](https://jameskilby.co.uk/wp-content/uploads/2023/04/2157_hi_res-768x346.png) ](https://jameskilby.co.uk/2022/12/100gb-s-in-my-homelab-sort-of/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Networking](https://jameskilby.co.uk/category/networking/) | [Storage](https://jameskilby.co.uk/category/storage/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [100Gb/s in my Homelab](https://jameskilby.co.uk/2022/12/100gb-s-in-my-homelab-sort-of/)

By[James](https://jameskilby.co.uk) December 19, 2022November 11, 2023

For a while, I’ve been looking to update the networking at the core of my homelab. I have had some great results with the current setup utilising a number of DAC’s but there were a couple of things that were annoying me. Then MikroTik dropped the CRS504-4XQ-IN and if the price wasn’t horrendous then that…

  * [ ![How to Fix Portainer Agent not Starting On Synology DSM](https://jameskilby.co.uk/wp-content/uploads/2025/03/Docker-Symbol-1-2199360526-768x528.png) ](https://jameskilby.co.uk/2025/03/portainer-agent-on-synology-dsm/)

[Docker](https://jameskilby.co.uk/category/docker/) | [Portainer](https://jameskilby.co.uk/category/portainer/) | [Synology](https://jameskilby.co.uk/category/synology/)

### [How to Fix Portainer Agent not Starting On Synology DSM](https://jameskilby.co.uk/2025/03/portainer-agent-on-synology-dsm/)

By[James](https://jameskilby.co.uk) March 11, 2025December 27, 2025

How to fix Portainer Agent no starting on Synology

  * [ ![Starlink](https://jameskilby.co.uk/wp-content/uploads/2022/10/spacexs-starlink-to-supply-free-satellite-internet-to-famili_u44u.1920-768x432.jpg) ](https://jameskilby.co.uk/2022/10/starlink/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [Starlink](https://jameskilby.co.uk/2022/10/starlink/)

By[James](https://jameskilby.co.uk) October 11, 2022October 1, 2025

Since moving to Dorset last year internet connectivity has been the bane of my existence. Currently, I have an ADSL connection provided by my old employer Zen and a 5G connection provided by Three. These are both plumbed into my WatchGuard Firewall with multi-wan configured. Most of the time the usability is ok but there…

  * [ ![New Nodes](https://jameskilby.co.uk/wp-content/uploads/2024/07/IMG_6629-768x149.jpeg) ](https://jameskilby.co.uk/2024/07/new-nodes/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Nutanix](https://jameskilby.co.uk/category/nutanix/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [New Nodes](https://jameskilby.co.uk/2024/07/new-nodes/)

By[James](https://jameskilby.co.uk) July 2, 2024January 18, 2026

I recently decided to update some of my homelab hosts and I managed to do this at very little cost by offloading 2 of my Supermicro e200’s to fellow vExpert Paul. The below post describes what I bought why and how I have configured it. Table of Contents Node Choice Bill of Materials Rescue IPMI…