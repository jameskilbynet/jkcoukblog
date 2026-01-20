---
title: "Can you really squeeze 96TB in 1U ?"
description: "Learn how to achieve 96TB in a 1U server without redundancy. Uncover the potential of ultra-dense storage solutions today!"
date: 2024-09-12T12:39:16+00:00
modified: 2026-01-18T21:38:15+00:00
author: James Kilby
categories:
  - Homelab
  - Storage
  - TrueNAS Scale
  - Synology
  - Automation
  - VMware
  - Docker
  - Hosting
  - Kubernetes
  - Artificial Intelligence
tags:
  - #Homelab
  - #Storage
url: https://jameskilby.co.uk/2024/09/can-you-really-squeeze-96tb-in-1u/
image: https://jameskilby.co.uk/wp-content/uploads/2024/09/QuantaGrid-SD1Q-1ULH-Front-Three-Quarter.png
---

![](https://jameskilby.co.uk/wp-content/uploads/2024/09/QuantaGrid-SD1Q-1ULH-Front-Three-Quarter.png)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [TrueNAS Scale](https://jameskilby.co.uk/category/truenas-scale/)

# Can you really squeeze 96TB in 1U ?

By[James](https://jameskilby.co.uk) September 12, 2024January 18, 2026 • 📖4 min read(809 words)

📅 **Published:** September 12, 2024• **Updated:** January 18, 2026

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
Boot Device | 80GB Intel SSD  
HDD | 12x ST8000NM0075 8TB 12Gb SAS  
SDD | 3x2TB Samsung Evo  
NIC | 2x 10Gb  
  
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

## Future Upgrades

There are a couple of upgrades I would like to add however they seem difficult to source.

The first is a dual port 25GbE Nic. As this is a Mezz card a standard Pcie device will not do.

**3GS5BMA0000 Quanta ConnectX-4 LX Dual Port 25GbE SFP28 OCP Mezzanine NIC.**

The second is a SataDOM to use as the TrueNAS install drive. This would allow me to utilize an extra 2.5 inch drive for IO purposes

DOM: SD134C-128GM-PT-A

## Similar Posts

  * [ ![Homelab bad days \(almost\)](https://jameskilby.co.uk/wp-content/uploads/2022/11/BrokenHardDive-1200x630-1-768x403.jpg) ](https://jameskilby.co.uk/2022/11/homelab-bad-days-almost/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [Synology](https://jameskilby.co.uk/category/synology/)

### [Homelab bad days (almost)](https://jameskilby.co.uk/2022/11/homelab-bad-days-almost/)

By[James](https://jameskilby.co.uk) November 21, 2022April 8, 2023

I recently spent 3 weeks in Ireland with my wife Wendy and our son Nate. This involves driving from the south coast of Dorset up to Scotland and then getting a ferry over to Belfast before travelling west to the Republic. While driving I got a slack notification that one of my SSD’s in my…

  * [ ![Template Deployment with Packer](https://jameskilby.co.uk/wp-content/uploads/2021/01/logo_packer.png) ](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

[Automation](https://jameskilby.co.uk/category/automation/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Template Deployment with Packer](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

By[James](https://jameskilby.co.uk) January 21, 2021December 8, 2025

Packer is one of those tools I have heard about, and some of the cool people on Twitter that I follow have been using it for a while. But until now I had never played with it. That was until I saw the below tweet by the legend that is William Lam That was the…

  * [ ![Use Portainer in a Homelab with GitHub](https://jameskilby.co.uk/wp-content/uploads/2022/12/22225832.png) ](https://jameskilby.co.uk/2022/12/use-portainer-in-a-homelab-with-github/)

[Docker](https://jameskilby.co.uk/category/docker/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Kubernetes](https://jameskilby.co.uk/category/kubernetes/)

### [Use Portainer in a Homelab with GitHub](https://jameskilby.co.uk/2022/12/use-portainer-in-a-homelab-with-github/)

By[James](https://jameskilby.co.uk) December 9, 2022October 1, 2025

Late to the party or not, I have been using containers in my lab more and more and that has led me to Portainer…. I use it for managing the docker containers on my Synology but it can also be used for managing lots of other things. In their own words “Portainer accelerates container adoption….

  * [ ![Lab Storage](https://jameskilby.co.uk/wp-content/uploads/2023/04/81-ZoEW24UL._SL1500_-768x461.jpg) ](https://jameskilby.co.uk/2019/02/lab-storage-2/)

[Homelab](https://jameskilby.co.uk/category/homelab/)

### [Lab Storage](https://jameskilby.co.uk/2019/02/lab-storage-2/)

By[James](https://jameskilby.co.uk) February 10, 2019July 10, 2024

Lab Storage Update. Since starting my new role with Xtravirt my Homelab has gone through several fairly significant changes. At the moment it’s very much focused on the VMware stack and one of the things I needed was some more storage and especially some more storage performance. With that in mind, I purchased a new Synology…

  * [ ](https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Lab Update – Compute](https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/)

By[James](https://jameskilby.co.uk) January 6, 2022July 10, 2024

Quite a few changes have happened in the lab recently. so I decided to do a multipart blog on the changes. The refresh was triggered by the purchase of a SuperMicro Server (2027TR-H71FRF) chassis with 4x X9DRT Nodes / Blades. This is known as a BigTwin configuration in SuperMicro parlance. This is something I was…

  * [ ![Self Hosting AI Stack using vSphere, Docker and NVIDIA GPU](https://jameskilby.co.uk/wp-content/uploads/2024/10/pexels-tara-winstead-8386440-768x512.jpg) ](https://jameskilby.co.uk/2024/10/self-hosting-ai-stack-using-vsphere-docker-and-nvidia-gpu/)

[Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Docker](https://jameskilby.co.uk/category/docker/) | [Homelab](https://jameskilby.co.uk/category/homelab/)

### [Self Hosting AI Stack using vSphere, Docker and NVIDIA GPU](https://jameskilby.co.uk/2024/10/self-hosting-ai-stack-using-vsphere-docker-and-nvidia-gpu/)

By[James](https://jameskilby.co.uk) October 11, 2024October 1, 2025

Artificial intelligence is all the rage at the moment, It’s getting included in every product announcement from pretty much every vendor under the sun. Nvidia’s stock price has gone to the moon. So I thought I better get some knowledge and understand some of this. As it’s a huge field and I wasn’t exactly sure…