---
title: "Using Content Libraries in VMC to deploy software faster"
description: "How to leverage Content Libraries to deploy into VMware Cloud on AWS faster."
date: 2026-01-27T22:19:39+00:00
modified: 2026-01-30T12:19:21+00:00
author: James Kilby
categories:
  - VMware
  - VMware Cloud on AWS
  - Homelab
  - Runecast
  - Personal
  - Veeam
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

By[James](https://jameskilby.co.uk) January 27, 2026January 30, 2026 • 📖3 min read(641 words)

📅 **Published:** January 27, 2026• **Updated:** January 30, 2026

As part of my role spinning up new SDDC’s to test things is quite a common occurrence. This is both a blessing and a curse. The new SDDC is 100% Vanilla and perfectly self contained. Therefore you can do the testing required, knowing that you won’t impact anything else and you’re not inheriting a legacy setting from previous testing.

However the downside is you need to get the configuration and the software you require into the SDDC. This can take some time. For configuration it’s possible to use IAC tools like Terraform. To speed up the process of deploying software I decided to leverage Content Library specifically for this task. This is a much faster and more reliable way to get what I need into the SDDC.

William Lam has previously [written ](https://williamlam.com/2018/07/creating-a-vsphere-content-library-directly-on-amazon-s3.html#google_vignette)about ways of doing this by utilising AWS S3 as the backend

## Table of Contents

## Introduction

For those unfamiliar with Content Libraries they are a storage medium for storing templates and ISO files for easy use within a vCentre environment or sharing with other vCentres. You can see some of the recent updates to this feature [here](https://blogs.vmware.com/cloud-foundation/2020/01/22/creating-and-using-content-library/)

## Networking

For this to work you need network connectivity between the source and destination vCentre. For my use case I use an my on premises vCentre as the source and VMC as the destination. However you can use VMC as the source if preferable.

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

  * [ ![Time in a VMC Environment](https://jameskilby.co.uk/wp-content/uploads/2025/02/Picture-1-e1768509620339-768x193.png) ](https://jameskilby.co.uk/2025/12/time-in-a-vmc-environment/)

[VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [Time in a VMC Environment](https://jameskilby.co.uk/2025/12/time-in-a-vmc-environment/)

By[James](https://jameskilby.co.uk) December 8, 2025January 17, 2026

One of the nice things about the VMC Service is that you dont have to worry about a number of the traditional infrastructure services that you typically obsess over when your running your own infrastructure. One of those is Time…. A key requirement for any enterprise platform. Time VMC allows you to utilise the Amazon…

  * [ ![VMC New Host -i3en](https://jameskilby.co.uk/wp-content/uploads/2022/11/iu-1-768x395.png) ](https://jameskilby.co.uk/2020/07/i3en/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [VMC New Host -i3en](https://jameskilby.co.uk/2020/07/i3en/)

By[James](https://jameskilby.co.uk) July 2, 2020July 10, 2024

VMware Cloud on AWS (VMC) has introduced a new host to its lineup the “i3en”. This is based on the i3en.metal AWS instance. The specifications are certainly impressive packing in 96 logical cores, 768GiB RAM, and approximately 45.84 TiB of NVMe raw storage capacity per host. It’s certainly a monster with a 266% uplift in…

  * [ ](https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Lab Update – Compute](https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/)

By[James](https://jameskilby.co.uk) January 6, 2022July 10, 2024

Quite a few changes have happened in the lab recently. so I decided to do a multipart blog on the changes. The refresh was triggered by the purchase of a SuperMicro Server (2027TR-H71FRF) chassis with 4x X9DRT Nodes / Blades. This is known as a BigTwin configuration in SuperMicro parlance. This is something I was…

  * [ ![Runecast Remediation Script’s](https://jameskilby.co.uk/wp-content/uploads/2023/05/Runecast-Solutions-Ltd.png) ](https://jameskilby.co.uk/2023/05/runecast-remediation-scripts/)

[Runecast](https://jameskilby.co.uk/category/runecast/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Runecast Remediation Script’s](https://jameskilby.co.uk/2023/05/runecast-remediation-scripts/)

By[James](https://jameskilby.co.uk) May 16, 2023November 17, 2023

I am a huge fan of the Runecast product and luckily as a vExpert they give out NFR licences for my lab. One of the really cool features I wanted to mention today was the remediation script function. I have been playing with storage a lot in my lab recently as part of a wider…

  * [ ![VMware Certified Master Specialist HCI 2020](https://jameskilby.co.uk/wp-content/uploads/2020/09/vmware_SP_HCI20.png) ](https://jameskilby.co.uk/2020/09/vmware-certified-master-specialist-hci-2020/)

[Personal](https://jameskilby.co.uk/category/personal/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [VMware Certified Master Specialist HCI 2020](https://jameskilby.co.uk/2020/09/vmware-certified-master-specialist-hci-2020/)

By[James](https://jameskilby.co.uk) September 13, 2020November 11, 2023

I recently sat (and passed the VMware HCI Master Specialist exam (5V0-21.20). I won’t go into any details of the contents but I will comment that I felt the questions were fair and that there wasn’t anything in it to trip you up. The required knowledge was certainly wider than the vSAN specialist exam. This…

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Veeam](https://jameskilby.co.uk/category/veeam/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Lab Update – Desired Workloads](https://jameskilby.co.uk/2022/01/lab-update-part-5-desired-workloads/)

By[James](https://jameskilby.co.uk) January 6, 2022November 11, 2023

My lab is always undergoing change. Partially as I want to try new things or new ways of doing things. Sometimes because I break things (not always by accident) sometimes it’s a great way to learn…. I decided to list the workloads I am looking to run (some of these are already in place) Infrastucture…