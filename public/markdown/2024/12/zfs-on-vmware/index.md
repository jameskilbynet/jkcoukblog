---
title: "How to Run ZFS on VMware vSphere: Setup Guide and Best Practices"
description: "ZFS,VMware,Best Practices for seamless integration and performance. Learn how to optimize your setup for maximum efficiency and reliability."
date: 2024-12-18T17:47:57+00:00
modified: 2026-02-09T22:16:17+00:00
author: James Kilby
categories:
  - TrueNAS Scale
  - VMware
  - vSAN
  - vSphere
  - Ansible
  - Artificial Intelligence
  - Containers
  - Devops
  - Homelab
  - NVIDIA
  - Traefik
  - Docker
  - Hosting
  - Storage
  - Kubernetes
  - Networking
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

By[James](https://jameskilby.co.uk) December 18, 2024February 9, 2026 • 📖3 min read(544 words)

📅 **Published:** December 18, 2024• **Updated:** February 09, 2026

## Table of Contents

## Introduction

I have run a number of systems using ZFS since the earliest days of my homelab using Nexenta, all the way back in 2010. The image below command is my lab at the time with an IBM head unit that I think had 18GB of RAM 6x450GB SAS drives and this was then connected to the Dell PowerVault SCSI Array above it with 14x146GB 10K SAS drives….

![](https://jameskilby.co.uk/wp-content/uploads/2024/12/IMG_20140330_210511-1024x845.jpeg)Original Nexenta Setup

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

![](https://jameskilby.co.uk/wp-content/uploads/2024/12/Disk-Serials-1024x125.png)

## Trim

Once the disks are seen as unique it is possible to enable trim. To confirm that trim is working execute the below command. ( I have no idea why this is a blocker but it is)
    
    
    Sudo pool trim Pool-1

📋 Copy

I decided to manually enable it by executing the command command in the shell. (my Pool is called Pool-1)

To confirm that To confirm that trim is working execute the below command command is working execute the below command command
    
    
    sudo zpool status Pool-1

📋 Copy

If everything is working you will see trimming running next to the pool.

![](https://jameskilby.co.uk/wp-content/uploads/2024/12/trimming-1-1024x452.png)

A further validation that this is working is to review the VMs’s storage used, see the before and after of this VM’s storage

![](https://jameskilby.co.uk/wp-content/uploads/2024/12/vm-Before-2.png) ![](https://jameskilby.co.uk/wp-content/uploads/2024/12/vm-After.png)

Additional confirmation can be seen by reviewing the underlying (vSAN consumption in this case). Before and after listed below command

![](https://jameskilby.co.uk/wp-content/uploads/2024/12/vSAN-Before.png) ![](https://jameskilby.co.uk/wp-content/uploads/2024/12/vSAN-After-1.png)

## 📚 Related Posts

  * [Can you really squeeze 96TB in 1U ?](https://jameskilby.co.uk/2024/09/can-you-really-squeeze-96tb-in-1u/)
  * [TrueNAS Scale Useful Commands](https://jameskilby.co.uk/2023/11/truenas-scale-useful-commands/)

## Similar Posts

  * [ ![Automating the deployment of my Homelab AI  Infrastructure](https://jameskilby.co.uk/wp-content/uploads/2026/01/VMware-NVIDIA-logos_ee2f18dc-615d-4c9e-8f11-9c3c2ce2bf37-prv-768x432.png) ](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)

[Ansible](https://jameskilby.co.uk/category/ansible/) | [Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Containers](https://jameskilby.co.uk/category/containers/) | [Devops](https://jameskilby.co.uk/category/devops/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [NVIDIA](https://jameskilby.co.uk/category/nvidia/) | [Traefik](https://jameskilby.co.uk/category/traefik/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Automating the deployment of my Homelab AI Infrastructure](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)

By[James](https://jameskilby.co.uk) February 9, 2026February 9, 2026

Learn how to use Ansible to configure an Ubuntu VM for use with NVIDIA based AI workloads in vSphere

  * [ ![How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/wp-content/uploads/2025/01/Screenshot-2025-01-29-at-23.30.47-768x411.png) ](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)

[Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Docker](https://jameskilby.co.uk/category/docker/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)

By[James](https://jameskilby.co.uk) January 29, 2025January 18, 2026

Update: Hoarder has now been renamed to Karakeep due to a trademark issue I’ve been on a mission recently to regain control of my data. I haven’t yet faced the humongous task of moving my main email from Gmail, but I have had some successes with other cloud services and a win is a win…….

  * [ ![Can you really squeeze 96TB in 1U ?](https://jameskilby.co.uk/wp-content/uploads/2024/09/QuantaGrid-SD1Q-1ULH-Front-Three-Quarter.png) ](https://jameskilby.co.uk/2024/09/can-you-really-squeeze-96tb-in-1u/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [TrueNAS Scale](https://jameskilby.co.uk/category/truenas-scale/)

### [Can you really squeeze 96TB in 1U ?](https://jameskilby.co.uk/2024/09/can-you-really-squeeze-96tb-in-1u/)

By[James](https://jameskilby.co.uk) September 12, 2024January 28, 2026

Yes, that’s a clickbait title. But technically it’s possible if I dropped all drive redundancy… I recently saw an advert for a server that was just too good to be true. It promised to bring a huge amount of storage and future options in a quite hard-to-believe 1U. The price it was on offer for…

  * [ ](https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Lab Update – Compute](https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/)

By[James](https://jameskilby.co.uk) January 6, 2022July 10, 2024

Quite a few changes have happened in the lab recently. so I decided to do a multipart blog on the changes. The refresh was triggered by the purchase of a SuperMicro Server (2027TR-H71FRF) chassis with 4x X9DRT Nodes / Blades. This is known as a BigTwin configuration in SuperMicro parlance. This is something I was…

  * [ ![TrueNAS Logo](https://jameskilby.co.uk/wp-content/uploads/2023/05/Screenshot-2023-05-22-at-18.49.21-768x198.png) ](https://jameskilby.co.uk/2023/11/truenas-scale-useful-commands/)

[Kubernetes](https://jameskilby.co.uk/category/kubernetes/) | [TrueNAS Scale](https://jameskilby.co.uk/category/truenas-scale/)

### [TrueNAS Scale Useful Commands](https://jameskilby.co.uk/2023/11/truenas-scale-useful-commands/)

By[James](https://jameskilby.co.uk) November 13, 2023March 8, 2024

A list of useful Truenas Scale commands

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Networking](https://jameskilby.co.uk/category/networking/)

### [Lab Update – Part 3 Network](https://jameskilby.co.uk/2022/01/lab-update-part-3-network/)

By[James](https://jameskilby.co.uk) January 6, 2022October 1, 2025

I have retired the WatchGuard Devices with the migration to PFSense running bare-metal in one of the Supermicro Nodes. I will likely virtualise this in the future. In terms of network/switching I have moved to an intermediate step here vMotion and Storage are running over DAC’s while VMware management and VM traffic is still over…