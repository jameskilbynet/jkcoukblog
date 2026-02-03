---
title: "Using Content Libraries in VMC to deploy software faster"
description: "How to leverage Content Libraries to deploy into VMware Cloud on AWS faster."
date: 2026-01-27T22:19:39+00:00
modified: 2026-02-01T10:42:21+00:00
author: James Kilby
categories:
  - VMware
  - VMware Cloud on AWS
  - Homelab
  - Storage
  - vExpert
  - Personal
  - vSphere
  - TrueNAS Scale
  - vSAN
tags:
  - #Content Library
  - #VMC
  - #VMware
  - #VMware Cloud on AWS
url: https://jameskilby.co.uk/2026/01/using-content-libraries-in-vmc-to-deploy-software-faster/
image: https://jameskilby.co.uk/wp-content/uploads/2026/01/Firefly_Gemini-Flash.png
---

![](https://jameskilby.co.uk/wp-content/uploads/2026/01/Firefly_Gemini-Flash.png)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

# Using Content Libraries in VMC to deploy software faster

By[James](https://jameskilby.co.uk) January 27, 2026February 1, 2026 • 📖3 min read(640 words)

📅 **Published:** January 27, 2026• **Updated:** February 01, 2026

As part of my role spinning up new SDDC’s to test things is quite a common occurrence. This is both a blessing and a curse. The new SDDC is 100% Vanilla and perfectly self contained. Therefore you can do the testing required, knowing that you won’t impact anything else and you’re not inheriting a legacy setting from previous testing.

However the downside is you need to get the configuration and the software you require into the SDDC. This can take some time. For configuration it’s possible to use IAC tools like Terraform. To speed up the process of deploying software I decided to leverage Content Library specifically for this task. This is a much faster and more reliable way to get what I need into the SDDC.

William Lam has previously [written ](https://williamlam.com/2018/07/creating-a-vsphere-content-library-directly-on-amazon-s3.html#google_vignette)about ways of doing this by utilising AWS S3 as the backend

## Table of Contents

## Introduction

For those unfamiliar with Content Libraries they are a storage medium for storing templates and ISO files for easy use within a vCentre environment or sharing with other vCentres. You can see some of the recent updates to this feature [here](https://blogs.vmware.com/cloud-foundation/2020/01/22/creating-and-using-content-library/)

## Networking

For this to work you need network connectivity between the source and destination vCentre. For my use case I use my on premises vCentre as the source and VMC as the destination. However you can use VMC as the source if preferable.

![](https://jameskilby.co.uk/wp-content/uploads/2026/01/ContentLibraryFlow-1024x358.png)

Usually I don’t utilise/DX for this although It will absolutely work over those connections and would be purely private IP

I have a NAT rule on one of my public IP’s on my Onprem Watchguard Firewall to connect through to the Onprem vCentre. The URL of my vCentre will publicly resolve to this IP. I have restricted this connection to only allow from the public IP of the VMC vCentre. For the VMC vCentre there shouldn’t be any changes required as outbound https is allowed by default on the management gateway.

### Create Publishing Content Library

I already use content libraries extensively in my lab and didn’t need everything uploading to VMC. So I created a new Library just for this purpose and added some select software. If you don’t have a content library or need to create another one. These are the steps you will need to follow.

To create a new Library from the vSphere Client from the top menu select **Content Libraries**

![](https://jameskilby.co.uk/wp-content/uploads/2026/01/ContentLibary-1024x368.png)

Name the Content Library appropriately and add a description.

![](https://jameskilby.co.uk/wp-content/uploads/2026/01/NameLocation-1024x440.png)

Configure the Content Library

As this will be the source Content Library we will set this to be a local content library and then enable the publishing feature to allow other vCentre’s to subscribe to this. I choose not to use authentication for this purpose as there is nothing sensitive 

![](https://jameskilby.co.uk/wp-content/uploads/2026/01/ConfigureContentLibrary-1024x631.png)

The next step is to define what Datastore the Content Library will reside on.

Here I am using my datastore called “ISO” as it saves my valuable NVMe datastore for workloads.

![](https://jameskilby.co.uk/wp-content/uploads/2026/01/Select-Storage-1024x481.png)

Ready to complete

![](https://jameskilby.co.uk/wp-content/uploads/2026/01/ReadyToComplete-1024x507.png)

Complete the creation and then go back into the Content Library settings. It will show you a Subscription URL which we will need later. Take a copy of the full Subscription URL

![](https://jameskilby.co.uk/wp-content/uploads/2026/01/CompleteWithUrl-1024x558.png)

### Create Subscribing Content Library

We need to repeat the procedure in VMC however now we need to create a Subscribed Content Library. Input the URL that we saved earlier

<https://uk-bhr-p-vc-1.jameskilby.cloud:443/cls/vcsp/lib/165734dc-81a8-464a-bbe5-a99e4ae597da/lib.json>

![](https://jameskilby.co.uk/wp-content/uploads/2026/01/VMCSubscriber-1024x906.png)

## Download content option

There are two options for how you want the Subscribed Content Library to behave on first connection/new content. The first is to synchronise the content as soon as possible. This is what I use. However if you have a large catalogue and not all items are required in the VMC vCentre an option to save storage would be to only download content on demand. The downside to this option is that deployed would take longer, waiting for the item to synchronise before it can be used. 

## 📚 Related Posts

  * [vSAN Cluster Shutdown &#8211; Orchestration](https://jameskilby.co.uk/2025/12/vsan-cluster-shutdown/)
  * [An in-depth look at VMware Cloud on AWS hosts](https://jameskilby.co.uk/2025/08/vmc-host-deepdive/)
  * [VMC Quick Sizing Guide](https://jameskilby.co.uk/2025/05/vmc-quick-sizing-guide/)

## Similar Posts

  * [ ![Intel Optane NVMe Homelab](https://jameskilby.co.uk/wp-content/uploads/2023/04/intel_optane_ssd_900p_series_aic_-_right_angle_575px.png) ](https://jameskilby.co.uk/2023/04/intel-optane/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [vExpert](https://jameskilby.co.uk/category/vexpert/)

### [Intel Optane NVMe Homelab](https://jameskilby.co.uk/2023/04/intel-optane/)

By[James](https://jameskilby.co.uk) April 17, 2023October 1, 2025

I have been a VMware vExpert for many years and it has brought me many many benefits over the years. I don’t think it’s an understatement to say I probably wouldn’t have my current role within VMware without it. One of the best benefits has been access to a huge amount of licences for VMware…

  * [ ![VMware – Going out with a Bang!](https://jameskilby.co.uk/wp-content/uploads/2023/10/rnli-logo-768x384.png) ](https://jameskilby.co.uk/2023/10/going-out-with-a-bang/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [Personal](https://jameskilby.co.uk/category/personal/)

### [VMware – Going out with a Bang!](https://jameskilby.co.uk/2023/10/going-out-with-a-bang/)

By[James](https://jameskilby.co.uk) October 7, 2023November 17, 2023

There is a lot of uncertainty with VMware at the moment. This is all due to the pending acquisition by Broadcom. There are a lot of unknowns for the staff and customers about what the company will look like in the future. I certainly have some concerns mainly just with the unknown. However, VMware has…

  * [ ![VMC New Host -i3en](https://jameskilby.co.uk/wp-content/uploads/2022/11/iu-1-768x395.png) ](https://jameskilby.co.uk/2020/07/i3en/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [VMC New Host -i3en](https://jameskilby.co.uk/2020/07/i3en/)

By[James](https://jameskilby.co.uk) July 2, 2020July 10, 2024

VMware Cloud on AWS (VMC) has introduced a new host to its lineup the “i3en”. This is based on the i3en.metal AWS instance. The specifications are certainly impressive packing in 96 logical cores, 768GiB RAM, and approximately 45.84 TiB of NVMe raw storage capacity per host. It’s certainly a monster with a 266% uplift in…

  * [ ![VMC Quick Sizing Guide](https://jameskilby.co.uk/wp-content/uploads/2025/02/Picture-1-e1768509620339-768x193.png) ](https://jameskilby.co.uk/2025/05/vmc-quick-sizing-guide/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [VMC Quick Sizing Guide](https://jameskilby.co.uk/2025/05/vmc-quick-sizing-guide/)

By[James](https://jameskilby.co.uk) May 21, 2025July 2, 2025

Quick reference guide to the available storage resources that you get in VMware Cloud on AWS

  * [ ![Advanced Deploy VMware vSphere 7.x 3V0-22.21N](https://jameskilby.co.uk/wp-content/uploads/2023/11/image.png) ](https://jameskilby.co.uk/2023/11/advanced-deploy-vmware-vsphere-7-x-3v0-22-21n/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [Personal](https://jameskilby.co.uk/category/personal/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [Advanced Deploy VMware vSphere 7.x 3V0-22.21N](https://jameskilby.co.uk/2023/11/advanced-deploy-vmware-vsphere-7-x-3v0-22-21n/)

By[James](https://jameskilby.co.uk) November 10, 2023November 17, 2023

Yesterday I sat and passed the above exam. It had been on my todo list for a good number of years. With the current pause in the Broadcom VMware takeover deal. I had some downtime and decided to use one of the three exam vouchers VMware give me each year. This upgrades me to a…

  * [ ![How to Run ZFS on VMware vSphere: Setup Guide and Best Practices](https://jameskilby.co.uk/wp-content/uploads/2024/12/ZFS.jpg) ](https://jameskilby.co.uk/2024/12/zfs-on-vmware/)

[TrueNAS Scale](https://jameskilby.co.uk/category/truenas-scale/) | [VMware](https://jameskilby.co.uk/category/vmware/) | [vSAN](https://jameskilby.co.uk/category/vmware/vsan-vmware/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [How to Run ZFS on VMware vSphere: Setup Guide and Best Practices](https://jameskilby.co.uk/2024/12/zfs-on-vmware/)

By[James](https://jameskilby.co.uk) December 18, 2024January 18, 2026

Table of Contents Copy-on-Write Disk IDs Trim I have run a number of systems using ZFS since the earliest days of my homelab using Nexenta, all the way back in 2010. The image below is my lab at the time with an IBM Head unit that I think had 18GB of RAM…