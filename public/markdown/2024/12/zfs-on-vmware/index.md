---
title: "How to Run ZFS on VMware vSphere: Setup Guide and Best Practices"
description: "ZFS,VMware,Best Practices for seamless integration and performance. Learn how to optimize your setup for maximum efficiency and reliability."
date: 2024-12-18T17:47:57+00:00
modified: 2026-03-10T20:35:14+00:00
author: James Kilby
categories:
  - TrueNAS Scale
  - VMware
  - vSAN
  - vSphere
  - Homelab
  - Storage
  - AWS
  - Veeam
  - Synology
  - Artificial Intelligence
  - Docker
  - VMware Cloud on AWS
  - Hosting
  - Kubernetes
tags:
  - #Homelab
  - #Trim
  - #UNMAP
  - #VMware
  - #ZFS
url: https://jameskilby.co.uk/2024/12/zfs-on-vmware/
image: https://jameskilby.co.uk/wp-content/uploads/2024/12/IMG_20140330_210511-1024x845.jpeg
---

![](https://jameskilby.co.uk/wp-content/uploads/2024/12/ZFS.jpg)

[TrueNAS Scale](https://jameskilby.co.uk/category/truenas-scale/) | [VMware](https://jameskilby.co.uk/category/vmware/) | [vSAN](https://jameskilby.co.uk/category/vmware/vsan-vmware/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

# How to Run ZFS on VMware vSphere: Setup Guide and Best Practices

By[James](https://jameskilby.co.uk) December 18, 2024March 10, 2026 • 📖3 min read(544 words)

📅 **Published:** December 18, 2024• **Updated:** March 10, 2026

## Table of Contents

## Introduction

I have run a number of systems using ZFS since the earliest days of my homelab using Nexenta, all the way back in 2010. The image below command is my lab at the time with an IBM head unit that I think had 18GB of RAM 6x450GB SAS drives and this was then connected to the Dell PowerVault SCSI Array above it with 14x146GB 10K SAS drives….

![How to Run ZFS on VMware vSphere: Setup Guide and Best Practices](https://jameskilby.co.uk/wp-content/uploads/2024/12/IMG_20140330_210511-1024x845.jpeg)Original Nexenta Setup

The number one rule is to ALWAYS give ZFS access to the underlying raw storage. You don’t want a raid controller or anything else interfering with the IO path. This is similar to how vSAN works with VMware.

But rules are meant to be broken right….. 

I have virtualized a few copies of TrueNAS Scale and Core using ZFS on top of VMware. In these particular instances I specifically DON’T want to pass through the storage HBA. Why would I do this? Mainly of two reasons. This allows me to test upgrades of my physical TrueNAS setup with an easy rollback if needed by not passing the drives or controllers in I can clone and snapshot the VMs’s just as if it was any other and move it around my lab infrastructure.

## Copy on Write

ZFS is a “Copy on Write” file system which means that it never overwrites existing blocks of storage. It always places writes into new blocks. This is unfriendly with “thin provisioning” something I am a huge fan of. This means that over time even a tiny database writing one megabyte file over and over again will slowly clog the entire file system.

So if you’re going to break the rules. The way I see it is you might as well do it properly

The first requirement is that the VM’s be provisioned with thin disks in vSphere. If is not thin then unmap won’t work. This is important in case you are thin at the underlay storage level.

## Disk IDs

You also need to do is to to ensure that TrueNAS can see unique disk IDs. To do this shut down the VM’s and add the following parameter to the VMware VM’s configuration
    
    
     disk.EnableUUID=TRUE

📋 Copy

Once this is done when you power the VM’s on you should be able to see unique serials of each disk similar to this screenshot. Prior to this change, the serial section is blank.

![Disk Serials](https://jameskilby.co.uk/wp-content/uploads/2024/12/Disk-Serials-1024x125.png)

## Trim

Once the disks are seen as unique it is possible to enable trim. To confirm that trim is working execute the below command. ( I have no idea why this is a blocker but it is)
    
    
    Sudo pool trim Pool-1

📋 Copy

I decided to manually enable it by executing the command command in the shell. (my Pool is called Pool-1)

To confirm that To confirm that trim is working execute the below command command is working execute the below command command
    
    
    sudo zpool status Pool-1

📋 Copy

If everything is working you will see trimming running next to the pool.

![Trimming](https://jameskilby.co.uk/wp-content/uploads/2024/12/trimming-1-1024x452.png)

A further validation that this is working is to review the VMs’s storage used, see the before and after of this VM’s storage

![Vm Before](https://jameskilby.co.uk/wp-content/uploads/2024/12/vm-Before-2.png) ![Vm After](https://jameskilby.co.uk/wp-content/uploads/2024/12/vm-After.png)

Additional confirmation can be seen by reviewing the underlying (vSAN consumption in this case). Before and after listed below command

![V SAN Before](https://jameskilby.co.uk/wp-content/uploads/2024/12/vSAN-Before.png) ![V SAN After](https://jameskilby.co.uk/wp-content/uploads/2024/12/vSAN-After-1.png)

## 📚 Related Posts

  * [Can you really squeeze 96TB in 1U ?](https://jameskilby.co.uk/2024/09/can-you-really-squeeze-96tb-in-1u/)
  * [TrueNAS Scale Useful Commands](https://jameskilby.co.uk/2023/11/truenas-scale-useful-commands/)

## Similar Posts

  * [ ![Can you really squeeze 96TB in 1U ?](https://jameskilby.co.uk/wp-content/uploads/2024/09/QuantaGrid-SD1Q-1ULH-Front-Three-Quarter.png) ](https://jameskilby.co.uk/2024/09/can-you-really-squeeze-96tb-in-1u/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [TrueNAS Scale](https://jameskilby.co.uk/category/truenas-scale/)

### [Can you really squeeze 96TB in 1U ?](https://jameskilby.co.uk/2024/09/can-you-really-squeeze-96tb-in-1u/)

By[James](https://jameskilby.co.uk) September 12, 2024March 10, 2026

Yes, that’s a clickbait title. But technically it’s possible if I dropped all drive redundancy… I recently saw an advert for a server that was just too good to be true. It promised to bring a huge amount of storage and future options in a quite hard-to-believe 1U. The price it was on offer for…

  * [ ![Monitoring VMC – Part 1](https://jameskilby.co.uk/wp-content/uploads/2026/03/VMConAWS.png.webp) ](https://jameskilby.co.uk/2019/12/monitoring-vmc-part-1/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [AWS](https://jameskilby.co.uk/category/aws/) | [Veeam](https://jameskilby.co.uk/category/veeam/)

### [Monitoring VMC – Part 1](https://jameskilby.co.uk/2019/12/monitoring-vmc-part-1/)

By[James](https://jameskilby.co.uk) December 17, 2019March 27, 2026

As previously mentioned I have been working a lot with VMware Cloud on AWS and one of the questions that often crops up is around an approach to monitoring. This is an interesting topic as VMC is technically “as a service” therefore the monitoring approach is a bit different. Technically AWS and VMware’s SRE teams…

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [Synology](https://jameskilby.co.uk/category/synology/)

### [Lab Storage](https://jameskilby.co.uk/2018/01/lab-storage/)

By[James](https://jameskilby.co.uk) January 6, 2018July 10, 2024

I have been meaning to post around some of the lab setup for a while. Although it changes frequently at present it’s as below. I will add some pics when I have tidied up the lab/cables My primary lab storage is all contained within an HP Gen8 Microserver. Currently Configured: 1x INTEL Core i3-4130 running at…

  * [ ![Self Hosting AI Stack using vSphere, Docker and NVIDIA GPU](https://jameskilby.co.uk/wp-content/uploads/2024/10/pexels-tara-winstead-8386440-768x512.jpg) ](https://jameskilby.co.uk/2024/10/self-hosting-ai-stack-using-vsphere-docker-and-nvidia-gpu/)

[Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Docker](https://jameskilby.co.uk/category/docker/) | [Homelab](https://jameskilby.co.uk/category/homelab/)

### [Self Hosting AI Stack using vSphere, Docker and NVIDIA GPU](https://jameskilby.co.uk/2024/10/self-hosting-ai-stack-using-vsphere-docker-and-nvidia-gpu/)

By[James](https://jameskilby.co.uk) October 11, 2024March 10, 2026

Artificial intelligence is all the rage at the moment, It’s getting included in every product announcement from pretty much every vendor under the sun. Nvidia’s stock price has gone to the moon. So I thought I better get some knowledge and understand some of this. As it’s a huge field and I wasn’t exactly sure…

  * [ ![An in-depth look at VMware Cloud on AWS hosts](https://jameskilby.co.uk/wp-content/uploads/2025/02/Picture-1-e1768509620339-768x193.png) ](https://jameskilby.co.uk/2025/08/vmc-host-deepdive/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [An in-depth look at VMware Cloud on AWS hosts](https://jameskilby.co.uk/2025/08/vmc-host-deepdive/)

By[James](https://jameskilby.co.uk) August 14, 2025March 10, 2026

This is single page intended to collate every single feature of the current VMware Cloud on AWS hosts for easy comparison. All of this data Is publicly available. I have just collated into a single page I3.metal I3en.metal I4i.metal CPU Processor Name Intel Xeon E5-2686 v4 Intel Xeon Platinum 8175 Intel Xeon 8375c No of…

  * [ ![Use Portainer in a Homelab with GitHub](https://jameskilby.co.uk/wp-content/uploads/2022/12/22225832.png) ](https://jameskilby.co.uk/2022/12/use-portainer-in-a-homelab-with-github/)

[Docker](https://jameskilby.co.uk/category/docker/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Kubernetes](https://jameskilby.co.uk/category/kubernetes/)

### [Use Portainer in a Homelab with GitHub](https://jameskilby.co.uk/2022/12/use-portainer-in-a-homelab-with-github/)

By[James](https://jameskilby.co.uk) December 9, 2022March 10, 2026

Late to the party or not, I have been using containers in my lab more and more and that has led me to Portainer…. I use it for managing the docker containers on my Synology but it can also be used for managing lots of other things. In their own words “Portainer accelerates container adoption….