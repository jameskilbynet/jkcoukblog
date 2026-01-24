---
title: "100Gb/s in my Homelab"
description: "100Gb/s in my Homelab: Transform your networking setup with MikroTik's CRS504-4XQ-IN. Learn how to maximize your homelab's potential now!"
date: 2022-12-19T10:09:58+00:00
modified: 2023-11-11T20:57:34+00:00
author: James Kilby
categories:
  - Homelab
  - Networking
  - Storage
  - VMware
  - vSAN
  - TrueNAS Scale
  - VCF
  - Ansible
tags:
  - #Homelab
  - #Mikrotik
url: https://jameskilby.co.uk/2022/12/100gb-s-in-my-homelab-sort-of/
image: https://jameskilby.co.uk/wp-content/uploads/2023/04/2157_hi_res.png
---

![](https://jameskilby.co.uk/wp-content/uploads/2023/04/2157_hi_res.png)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Networking](https://jameskilby.co.uk/category/networking/) | [Storage](https://jameskilby.co.uk/category/storage/) | [VMware](https://jameskilby.co.uk/category/vmware/)

# 100Gb/s in my Homelab

By[James](https://jameskilby.co.uk) December 19, 2022November 11, 2023 • 📖2 min read(304 words)

📅 **Published:** December 19, 2022• **Updated:** November 11, 2023

For a while, I’ve been looking to update the networking at the core of my homelab. I have had some great results with the current setup utilising a number of DAC’s but there were a couple of things that were annoying me. 

Then MikroTik dropped the [CRS504-4XQ-IN](https://mikrotik.com/product/crs504_4xq_in) and if the price wasn’t horrendous then that was the route I was going to go to alleviate these issues. Yes, it’s 100Gb/s and only has 4 ports but that should be all I need… I managed to locate one in stock for £587 plus Vat

![](https://jameskilby.co.uk/wp-content/uploads/2023/04/2157_hi_res-1024x462.png)

As you can see the switch has redundant power not often found at this price point. It actually has 4 ways to power it. 2 AC supplies, A DC input and then strangest of all it can be powered by POE in. This last point showcases how power efficient it is which is a huge win for a homelab.

My plan is to utilise the existing Intel 25Gb NICs I have and split the 100’s on the switch into 4×25. This technically gives me 16 usable 25 ports which are way more than I need. This will allow me to accommodate the TrueNAS box and the 2x Supermicro nodes I usually run for my lab. The other 2 nodes will get an upgrade at a future date. 

Initial impressions are that the switch is very quiet and also incredibly power efficient. ( It can be powered just from POE) however, the config is way more complex than I have seen before. This is because it’s basically a router that can switch at wire speed. The other challenge I have had is connecting my legacy 1gb/s network. This is still a work in progress but for now, Storage and vMotion have been migrated. 

I will report back when everything has been migrated.

## Similar Posts

  * [ ![vSAN Cluster Shutdown – Orchestration](https://jameskilby.co.uk/wp-content/uploads/2023/11/OrigionalPoweredByvSAN-550x324-1.jpg) ](https://jameskilby.co.uk/2025/12/vsan-cluster-shutdown/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [vSAN](https://jameskilby.co.uk/category/vmware/vsan-vmware/)

### [vSAN Cluster Shutdown – Orchestration](https://jameskilby.co.uk/2025/12/vsan-cluster-shutdown/)

By[James](https://jameskilby.co.uk) December 6, 2025January 17, 2026

How to safety shutdown a vSAN Environment

  * [ ![Can you really squeeze 96TB in 1U ?](https://jameskilby.co.uk/wp-content/uploads/2024/09/QuantaGrid-SD1Q-1ULH-Front-Three-Quarter.png) ](https://jameskilby.co.uk/2024/09/can-you-really-squeeze-96tb-in-1u/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [TrueNAS Scale](https://jameskilby.co.uk/category/truenas-scale/)

### [Can you really squeeze 96TB in 1U ?](https://jameskilby.co.uk/2024/09/can-you-really-squeeze-96tb-in-1u/)

By[James](https://jameskilby.co.uk) September 12, 2024January 23, 2026

Yes, that’s a clickbait title. But technically it’s possible if I dropped all drive redundancy… I recently saw an advert for a server that was just too good to be true. It promised to bring a huge amount of storage and future options in a quite hard-to-believe 1U. The price it was on offer for…

  * [ ![Holodeck CPU Fixes](https://jameskilby.co.uk/wp-content/uploads/2024/01/40oOd8IipPvtrPJs-1198788743-768x737.jpg) ](https://jameskilby.co.uk/2024/01/holodeck-cpu-fixes/)

[VCF](https://jameskilby.co.uk/category/vmware/vcf/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Holodeck CPU Fixes](https://jameskilby.co.uk/2024/01/holodeck-cpu-fixes/)

By[James](https://jameskilby.co.uk) January 18, 2024July 10, 2024

How to deploy Holodeck with Legacy CPU’s

  * [ ![Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/wp-content/uploads/2025/07/semaphore-768x768.png) ](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)

[Ansible](https://jameskilby.co.uk/category/ansible/) | [Homelab](https://jameskilby.co.uk/category/homelab/)

### [Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)

By[James](https://jameskilby.co.uk) September 2, 2025December 18, 2025

I recently stumbled across Semaphore, which is essentially a frontend for managing DevOps tooling, including Ansible, Terraform, OpenTofu, and PowerShell. It’s easy to deploy in Docker, and I am slowly moving more of my homelab management over to it. Introduction This is a guide to show you how to get up and running easily with…

  * [ ![Nvidia Tesla P4 Homelab Setup](https://jameskilby.co.uk/wp-content/uploads/2023/10/IMG_1107-768x403-1.jpg) ](https://jameskilby.co.uk/2023/10/vgpu-setup-in-my-homelab/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Nvidia Tesla P4 Homelab Setup](https://jameskilby.co.uk/2023/10/vgpu-setup-in-my-homelab/)

By[James](https://jameskilby.co.uk) October 23, 2023July 10, 2024

A little while ago I decided to play with vGPU in my homelab. This was something I had dabbled with in the past but never really had the time or need to get working properly. The first thing that I needed was a GPU. I did have a Dell T20 with an iGPU built into…

  * [ ![Configuring a Zen Internet and City Fibre connection with a 3rd party router](https://jameskilby.co.uk/wp-content/uploads/2023/11/cityfibre-zen-768x403.jpg) ](https://jameskilby.co.uk/2023/11/configuring-a-zen-internet-and-city-fibre-connection-with-a-3rd-party-router/)

[Networking](https://jameskilby.co.uk/category/networking/)

### [Configuring a Zen Internet and City Fibre connection with a 3rd party router](https://jameskilby.co.uk/2023/11/configuring-a-zen-internet-and-city-fibre-connection-with-a-3rd-party-router/)

By[James](https://jameskilby.co.uk) November 15, 2023January 18, 2026

Back in July I bought a new house and one of the best things about the property was that it was already in a City Fibre location. That meant I could take my Zen internet connection with me but ditch the ADSL (and Phone Line requirement). This gave me a much better connection in terms…