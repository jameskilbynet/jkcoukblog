---
title: "Holodeck CPU Fixes"
description: "Holodeck CPU Fixes: Learn how to deploy Holodeck with legacy CPUs. Follow our guide for a smoother setup and troubleshooting tips."
date: 2024-01-18T14:37:04+00:00
modified: 2024-07-10T07:21:58+00:00
author: James Kilby
categories:
  - VCF
  - VMware
  - Homelab
  - Docker
  - Hosting
  - Kubernetes
  - Mikrotik
  - Networking
  - Artificial Intelligence
  - Automation
  - TrueNAS Scale
  - vSAN
  - vSphere
tags:
  - #CPU
  - #Holodeck
  - #Homelab
  - #VMware
url: https://jameskilby.co.uk/2024/01/holodeck-cpu-fixes/
image: https://jameskilby.co.uk/wp-content/uploads/2024/01/40oOd8IipPvtrPJs-1198788743.jpg
---

![](https://jameskilby.co.uk/wp-content/uploads/2024/01/40oOd8IipPvtrPJs-1198788743.jpg)

[VCF](https://jameskilby.co.uk/category/vmware/vcf/) | [VMware](https://jameskilby.co.uk/category/vmware/)

# Holodeck CPU Fixes

By[James](https://jameskilby.co.uk) January 18, 2024July 10, 2024 • 📖1 min read(268 words)

📅 **Published:** January 18, 2024• **Updated:** July 10, 2024

Disclaimer: This is **not** a supported configuration by the Holodeck team please don’t reach out to them for help. No support will be given for running cpu’s without the required feature sets.

## Table of Contents

In my [previous post](https://jameskilby.co.uk/2024/01/multihost-holodeck-vcf/) about my Holodeck experience, I mentioned that I had some issues due to the age of the Physical CPU’s in the hosts that I was using to run Holodeck. This error will manifest itself in three places during the deployment.

  * Nested ESX Power On
  * vCLS machine deployment
  * NSX Edge deployment

## Nested ESX Power On

Obviously, my CPU’s are not supported for ESXi 8.0.1 and when the host is powered on you will see the image below. 

![ESXi unsupported error](https://jameskilby.co.uk/wp-content/uploads/2023/09/Screenshot-2023-09-27-at-12.55.09.png)

Just like with a physical host, it is possible to override this. 

This is done by adding 
    
    
    --ignoreprereqwarnings --ignoreprereqerrors --forceunsupportedinstall

📋 Copy

to the VLCGUI.ps1 script.

For the same reasons when the cluster is built and the vCLS VM’s for DRS are deployed, they will fail to power on. 

## NSX Edge

![](https://jameskilby.co.uk/wp-content/uploads/2023/10/Screenshot-2023-10-02-at-14.28.25.png)

And last of all when the NSX edges attempt to power on they will fail due to the lack of a feature in the CPU called 1G huge page support. These issues can manifest when deploying NSX outside of VCF so a lot has been written about these issues and how to overcome them.

## Solution

Luckily a colleague of mine Tim Sommer has made all of the required changes to the VLCGUI.ps1 deployment script and that is available [here ](https://ent.box.com/s/u4wiwh2mq8o05ct8e67ndapvxhudkhe2)

I have tried this multiple times and I have had a 100% success rate with the deployment with no manual fixes being required.

## Similar Posts

  * [ ![Lab Storage](https://jameskilby.co.uk/wp-content/uploads/2023/04/81-ZoEW24UL._SL1500_-768x461.jpg) ](https://jameskilby.co.uk/2019/02/lab-storage-2/)

[Homelab](https://jameskilby.co.uk/category/homelab/)

### [Lab Storage](https://jameskilby.co.uk/2019/02/lab-storage-2/)

By[James](https://jameskilby.co.uk) February 10, 2019July 10, 2024

Lab Storage Update. Since starting my new role with Xtravirt my Homelab has gone through several fairly significant changes. At the moment it’s very much focused on the VMware stack and one of the things I needed was some more storage and especially some more storage performance. With that in mind, I purchased a new Synology…

  * [ ![Use Portainer in a Homelab with GitHub](https://jameskilby.co.uk/wp-content/uploads/2022/12/22225832.png) ](https://jameskilby.co.uk/2022/12/use-portainer-in-a-homelab-with-github/)

[Docker](https://jameskilby.co.uk/category/docker/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Kubernetes](https://jameskilby.co.uk/category/kubernetes/)

### [Use Portainer in a Homelab with GitHub](https://jameskilby.co.uk/2022/12/use-portainer-in-a-homelab-with-github/)

By[James](https://jameskilby.co.uk) December 9, 2022October 1, 2025

Late to the party or not, I have been using containers in my lab more and more and that has led me to Portainer…. I use it for managing the docker containers on my Synology but it can also be used for managing lots of other things. In their own words “Portainer accelerates container adoption….

  * [ ![CRS-504](https://jameskilby.co.uk/wp-content/uploads/2024/09/s-l1600-768x427.jpg) ](https://jameskilby.co.uk/2024/09/home-network-upgrade/)

[Mikrotik](https://jameskilby.co.uk/category/mikrotik/) | [Networking](https://jameskilby.co.uk/category/networking/)

### [Home Network Upgrade](https://jameskilby.co.uk/2024/09/home-network-upgrade/)

By[James](https://jameskilby.co.uk) September 9, 2024October 24, 2025

My journey to superfast networking in my homelab

  * [ ![How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/wp-content/uploads/2025/01/Screenshot-2025-01-29-at-23.30.47-768x411.png) ](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)

[Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Docker](https://jameskilby.co.uk/category/docker/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)

By[James](https://jameskilby.co.uk) January 29, 2025January 18, 2026

Update: Hoarder has now been renamed to Karakeep due to a trademark issue I’ve been on a mission recently to regain control of my data. I haven’t yet faced the humongous task of moving my main email from Gmail, but I have had some successes with other cloud services and a win is a win…….

  * [ ![Template Deployment with Packer](https://jameskilby.co.uk/wp-content/uploads/2021/01/logo_packer.png) ](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

[Automation](https://jameskilby.co.uk/category/automation/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Template Deployment with Packer](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

By[James](https://jameskilby.co.uk) January 21, 2021December 8, 2025

Packer is one of those tools I have heard about, and some of the cool people on Twitter that I follow have been using it for a while. But until now I had never played with it. That was until I saw the below tweet by the legend that is William Lam That was the…

  * [ ![How to Run ZFS on VMware vSphere: Setup Guide and Best Practices](https://jameskilby.co.uk/wp-content/uploads/2024/12/ZFS.jpg) ](https://jameskilby.co.uk/2024/12/zfs-on-vmware/)

[TrueNAS Scale](https://jameskilby.co.uk/category/truenas-scale/) | [VMware](https://jameskilby.co.uk/category/vmware/) | [vSAN](https://jameskilby.co.uk/category/vmware/vsan-vmware/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [How to Run ZFS on VMware vSphere: Setup Guide and Best Practices](https://jameskilby.co.uk/2024/12/zfs-on-vmware/)

By[James](https://jameskilby.co.uk) December 18, 2024January 18, 2026

Table of Contents Copy-on-Write Disk IDs Trim I have run a number of systems using ZFS since the earliest days of my homelab using Nexenta, all the way back in 2010. The image below is my lab at the time with an IBM Head unit that I think had 18GB of RAM…