---
title: "How to Run ZFS on VMware vSphere: Setup Guide and Best Practices"
description: "ZFS,VMware,Best Practices for seamless integration and performance. Learn how to optimize your setup for maximum efficiency and reliability."
date: 2024-12-18T17:47:57+00:00
modified: 2026-01-18T21:36:48+00:00
author: James Kilby
categories:
  - TrueNAS Scale
  - VMware
  - vSAN
  - vSphere
  - VMware Cloud on AWS
  - Docker
  - Portainer
  - Synology
  - Kubernetes
  - VCF
  - Homelab
  - Veeam
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

By[James](https://jameskilby.co.uk) December 18, 2024January 18, 2026 • 📖3 min read(600 words)

📅 **Published:** December 18, 2024• **Updated:** January 18, 2026

## Table of Contents

## 

I have run a number of systems using ZFS since the earliest days of my homelab using Nexenta, all the way back in 2010. The image below command is my lab at the time with an IBM head unit that I think had 18GB of RAM 6x450GB SAS drives and this was then connected to the Dell PowerVault SCSI Array above it with 14x146GB 10K SAS drives….

![](https://jameskilby.co.uk/wp-content/uploads/2024/12/IMG_20140330_210511-1024x845.jpeg)Original Nexenta Setup

The number one rule is to ALWAYS give ZFS access to the underlying raw storage. You don’t want a raid controller or anything else interfering with the IO path. This is similar to how vSAN works with VMware.

But rules are meant to be broken right….. I have virtualized a few copies of TrueNAS Scale and Core which uses ZFS on top of VMware and in these particular instances I specifically DON’T want to pass through the storage in the of an HBA or drives of an HBA or drives. Why would I do this? Mainly of two reasons. This allows me to test upgrades of my physical TrueNAS setup with an easy rollback if needed by not passing the drives or controllers in I can clone and snapshot the VMss just as if it was any other and move it around my lab infrastructure.

## Copy on Write

ZFS is a “Copy on Write” file system which means that it never overwrites existing blocks of storage. It always places writes into new blocks. This is unfriendly with “thin provisioning” something I am a huge fan of. This means that over time even a tiny database writing one megabyte file over and over again will slowly clog the entire file system.

So if you’re going to break the rules. The way I see it is you might as well do it properly

The first requirement is that the VM’s be provisioned with thin disks in vSphere. If is not thin then unmap won’t work. This is important in case you are thin at the underlay storage level.

## Disk IDs

You also need to do is to to ensure that TrueNAS can see unique disk IDs. To do this shut down the VM’s and add the following parameter to the VMware VM’s configuration
    
    
     disk.EnableUUID=TRUE

📋 Copy

Once this is done when you power the VM’s on you should be able to see unique serials of each disk similar to this screenshot Prior to this change, the serial section is blank.

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

  * [ ![VMC Quick Sizing Guide](https://jameskilby.co.uk/wp-content/uploads/2025/02/Picture-1-e1768509620339-768x193.png) ](https://jameskilby.co.uk/2025/05/vmc-quick-sizing-guide/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [VMC Quick Sizing Guide](https://jameskilby.co.uk/2025/05/vmc-quick-sizing-guide/)

By[James](https://jameskilby.co.uk) May 21, 2025July 2, 2025

Quick reference guide to the available storage resources that you get in VMware Cloud on AWS

  * [ ![How to Fix Portainer Agent not Starting On Synology DSM](https://jameskilby.co.uk/wp-content/uploads/2025/03/Docker-Symbol-1-2199360526-768x528.png) ](https://jameskilby.co.uk/2025/03/portainer-agent-on-synology-dsm/)

[Docker](https://jameskilby.co.uk/category/docker/) | [Portainer](https://jameskilby.co.uk/category/portainer/) | [Synology](https://jameskilby.co.uk/category/synology/)

### [How to Fix Portainer Agent not Starting On Synology DSM](https://jameskilby.co.uk/2025/03/portainer-agent-on-synology-dsm/)

By[James](https://jameskilby.co.uk) March 11, 2025December 27, 2025

How to fix Portainer Agent no starting on Synology

  * [ ![TrueNAS Logo](https://jameskilby.co.uk/wp-content/uploads/2023/05/Screenshot-2023-05-22-at-18.49.21-768x198.png) ](https://jameskilby.co.uk/2023/11/truenas-scale-useful-commands/)

[Kubernetes](https://jameskilby.co.uk/category/kubernetes/) | [TrueNAS Scale](https://jameskilby.co.uk/category/truenas-scale/)

### [TrueNAS Scale Useful Commands](https://jameskilby.co.uk/2023/11/truenas-scale-useful-commands/)

By[James](https://jameskilby.co.uk) November 13, 2023March 8, 2024

A list of useful Truenas Scale commands

  * [ ![MultiHost Holodeck VCF](https://jameskilby.co.uk/wp-content/uploads/2023/12/Holodeck-Overview.png) ](https://jameskilby.co.uk/2024/01/multihost-holodeck-vcf/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VCF](https://jameskilby.co.uk/category/vmware/vcf/)

### [MultiHost Holodeck VCF](https://jameskilby.co.uk/2024/01/multihost-holodeck-vcf/)

By[James](https://jameskilby.co.uk) January 17, 2024January 18, 2026

How to Deploy VMware Holodeck on multiple hosts

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Veeam](https://jameskilby.co.uk/category/veeam/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Lab Update – Desired Workloads](https://jameskilby.co.uk/2022/01/lab-update-part-5-desired-workloads/)

By[James](https://jameskilby.co.uk) January 6, 2022November 11, 2023

My lab is always undergoing change. Partially as I want to try new things or new ways of doing things. Sometimes because I break things (not always by accident) sometimes it’s a great way to learn…. I decided to list the workloads I am looking to run (some of these are already in place) Infrastucture…

  * [ ![vSAN Cluster Shutdown – Orchestration](https://jameskilby.co.uk/wp-content/uploads/2023/11/OrigionalPoweredByvSAN-550x324-1.jpg) ](https://jameskilby.co.uk/2025/12/vsan-cluster-shutdown/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [vSAN](https://jameskilby.co.uk/category/vmware/vsan-vmware/)

### [vSAN Cluster Shutdown – Orchestration](https://jameskilby.co.uk/2025/12/vsan-cluster-shutdown/)

By[James](https://jameskilby.co.uk) December 6, 2025January 17, 2026

How to safety shutdown a vSAN Environment