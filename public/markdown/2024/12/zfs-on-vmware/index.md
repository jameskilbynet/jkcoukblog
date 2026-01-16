---
title: "How to Run ZFS on VMware vSphere: Setup Guide and Best Practices"
description: "ZFS,VMware,Best Practices for seamless integration and performance. Learn how to optimize your setup for maximum efficiency and reliability."
date: 2024-12-18T17:47:57+00:00
modified: 2025-12-27T14:46:37+00:00
author: James Kilby
categories:
  - TrueNAS Scale
  - VMware
  - vSAN
  - vSphere
  - Docker
  - Portainer
  - Synology
  - VMware Cloud on AWS
  - VCF
  - Artificial Intelligence
  - Hosting
  - Homelab
  - Storage
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

By[James](https://jameskilby.co.uk) December 18, 2024December 27, 2025 • 📖3 min read(600 words)

📅 **Published:** December 18, 2024• **Updated:** December 27, 2025

## Table of Contents

## 

I have run a number of systems using ZFS since the earliest days of my homelab using Nexenta, all the way back in 2010. The image below command is my lab at the time with an IBM head unit that I think had 18GB of RAM 6x450GB SAS drives and this was then connected to the Dell PowerVault SCSI Array above it with 14x146GB 10K SAS drives….

![](https://jameskilby.co.uk/wp-content/uploads/2024/12/IMG_20140330_210511-1024x845.jpeg)Original Nexenta Setup

The number one rule is to ALWAYS give ZFS access to the underlying raw storage. You don’t want a raid controller or anything else interfering with the IO path. This is similar to how vSAN works with VMware.

But rules are meant to be broken right….. I have virtualized a few copies of TrueNAS Scale and Core which uses ZFS on top of VMware and in these particular instances I specifically DON’T want to pass through the storage in the of an HBA or drives of an HBA or drives. Why would I do this? Mainly of two reasons. This allows me to test upgrades of my physical TrueNAS setup with an easy rollback if needed by not passing the drives or controllers in I can clone and snapshot the VMss just as if it was any other and move it around my lab infrastructure.

## Copy on Write

ZFS is a “Copy on Write” file system which means that it never overwrites existing blocks of storage. It always places writes into new blocks. This is unfriendly with “thin provisioning” something I am a huge fan of. This means that over time even a tiny database writing one megabyte file over and over again will slowly clog the entire file system.

So if you’re going to break the rules. The way I see it is you might as well do it properly

The first requirement is that the VMss be provisioned with thin disks in vSphere. If is not thin then unmap won’t work. This is important in case you are thin at the underlay storage level.

## Disk IDs

You also need to do is to to ensure that TrueNAS can see unique disk IDs. To do this shut down the VMss and add the following parameter to the VMware VMss configuration
    
    
     disk.EnableUUID=TRUE

📋 Copy

Once this is done when you power the VMss on you should be able to see unique serials of each disk similar to this screenshot Prior to this change, the serial section is blank.

![](https://jameskilby.co.uk/wp-content/uploads/2024/12/Disk-Serials-1024x125.png)

## Trim

Once the disks are seen as unique it is possible to enable To confirm that trim is working execute the below command command. ( I have no idea why this is a blocker but it is)

You can enable auto To confirm that trim is working execute the below command command in the Storage Dashboard under “ZFS Health”

I decided to manually enable it by executing the below command command in the shell. ( my Pool is called Pool-1)
    
    
    sudo zpool To confirm that trim is working execute the below command command Pool-1

📋 Copy

To confirm that To confirm that trim is working execute the below command command is working execute the below command command
    
    
    sudo zpool status Pool-1

📋 Copy

If everything is working you will see the To confirm that trim is working execute the below command command command as per below command

![](https://jameskilby.co.uk/wp-content/uploads/2024/12/To confirm that trim is working execute the below command command-1-1024x452.png)

A further validation that this is working is to review the VMss storage used, see the before and after of this VMss

![](https://jameskilby.co.uk/wp-content/uploads/2024/12/vm-Before-2.png)

Additional confirmation can be seen by reviewing the underlying (vSAN consumption in this case). Before and after listed below command

![](https://jameskilby.co.uk/wp-content/uploads/2024/12/vSAN-Before.png) ![](https://jameskilby.co.uk/wp-content/uploads/2024/12/vSAN-After-1.png)

## Similar Posts

  * [ ![How to Fix Portainer Agent not Starting On Synology DSM](https://jameskilby.co.uk/wp-content/uploads/2025/03/Docker-Symbol-1-2199360526-768x528.png) ](https://jameskilby.co.uk/2025/03/portainer-agent-on-synology-dsm/)

[Docker](https://jameskilby.co.uk/category/docker/) | [Portainer](https://jameskilby.co.uk/category/portainer/) | [Synology](https://jameskilby.co.uk/category/synology/)

### [How to Fix Portainer Agent not Starting On Synology DSM](https://jameskilby.co.uk/2025/03/portainer-agent-on-synology-dsm/)

By[James](https://jameskilby.co.uk) March 11, 2025December 27, 2025

How to fix Portainer Agent no starting on Synology

  * [ ![An in-depth look at VMware Cloud on AWS hosts](https://jameskilby.co.uk/wp-content/uploads/2025/02/Picture-1-e1768509620339-768x193.png) ](https://jameskilby.co.uk/2025/08/vmc-host-deepdive/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [An in-depth look at VMware Cloud on AWS hosts](https://jameskilby.co.uk/2025/08/vmc-host-deepdive/)

By[James](https://jameskilby.co.uk) August 14, 2025December 24, 2025

This is single page intended to collate every single feature of the current VMware Cloud on AWS hosts for easy comparison. All of this data Is publicly available. I have just collated into a single page I3 I3en I4i CPU Processor Name Intel Xeon E5-2686 v4 Intel Xeon Platinum 8175 Intel Xeon 8375c No of…

  * [ ![MultiHost Holodeck VCF](https://jameskilby.co.uk/wp-content/uploads/2023/12/Holodeck-Overview.png) ](https://jameskilby.co.uk/2024/01/multihost-holodeck-vcf/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VCF](https://jameskilby.co.uk/category/vmware/vcf/)

### [MultiHost Holodeck VCF](https://jameskilby.co.uk/2024/01/multihost-holodeck-vcf/)

By[James](https://jameskilby.co.uk) January 17, 2024December 27, 2025

How to Deploy VMware Holodeck on multiple hosts

  * [ ![How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/wp-content/uploads/2025/01/Screenshot-2025-01-29-at-23.30.47-768x411.png) ](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)

[Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Docker](https://jameskilby.co.uk/category/docker/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)

By[James](https://jameskilby.co.uk) January 29, 2025December 27, 2025

Update: Hoarder has now been renamed to Karakeep due to a trademark issue I’ve been on a mission recently to regain control of my data. I haven’t yet faced the humongous task of moving my main email from Gmail, but I have had some successes with other cloud services and a win is a win…….

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [Synology](https://jameskilby.co.uk/category/synology/)

### [Lab Storage](https://jameskilby.co.uk/2018/01/lab-storage/)

By[James](https://jameskilby.co.uk) January 6, 2018July 10, 2024

I have been meaning to post around some of the lab setup for a while. Although it changes frequently at present it’s as below. I will add some pics when I have tidied up the lab/cables My primary lab storage is all contained within an HP Gen8 Microserver. Currently Configured: 1x INTEL Core i3-4130 running at…

  * [ ![Nvidia Tesla P4 Homelab Setup](https://jameskilby.co.uk/wp-content/uploads/2023/10/IMG_1107-768x403-1.jpg) ](https://jameskilby.co.uk/2023/10/vgpu-setup-in-my-homelab/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Nvidia Tesla P4 Homelab Setup](https://jameskilby.co.uk/2023/10/vgpu-setup-in-my-homelab/)

By[James](https://jameskilby.co.uk) October 23, 2023July 10, 2024

A little while ago I decided to play with vGPU in my homelab. This was something I had dabbled with in the past but never really had the time or need to get working properly. The first thing that I needed was a GPU. I did have a Dell T20 with an iGPU built into…