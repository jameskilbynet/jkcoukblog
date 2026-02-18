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
  - vSphere
  - Storage
  - TrueNAS Scale
  - Networking
  - Runecast
  - VMware Cloud on AWS
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

  * [ ![Forcing an Upgrade to vSphere 8](https://jameskilby.co.uk/wp-content/uploads/2022/12/Screenshot-2022-12-14-at-21.45.23.png) ](https://jameskilby.co.uk/2022/12/forcing-an-upgrade-to-vsphere-8/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [Forcing an Upgrade to vSphere 8](https://jameskilby.co.uk/2022/12/forcing-an-upgrade-to-vsphere-8/)

By[James](https://jameskilby.co.uk) December 14, 2022October 1, 2025

I run a reasonably extensive homelab that is of course built around the VMware ecosystem. So with the release of vSphere 8 I was obviously going to upgrade however a few personal things blocked me from doing it until now. The vCenter upgrade was smooth however knowing that some of the hardware I am running…

  * [ ![Can you really squeeze 96TB in 1U ?](https://jameskilby.co.uk/wp-content/uploads/2024/09/QuantaGrid-SD1Q-1ULH-Front-Three-Quarter.png) ](https://jameskilby.co.uk/2024/09/can-you-really-squeeze-96tb-in-1u/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [TrueNAS Scale](https://jameskilby.co.uk/category/truenas-scale/)

### [Can you really squeeze 96TB in 1U ?](https://jameskilby.co.uk/2024/09/can-you-really-squeeze-96tb-in-1u/)

By[James](https://jameskilby.co.uk) September 12, 2024January 28, 2026

Yes, that’s a clickbait title. But technically it’s possible if I dropped all drive redundancy… I recently saw an advert for a server that was just too good to be true. It promised to bring a huge amount of storage and future options in a quite hard-to-believe 1U. The price it was on offer for…

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Networking](https://jameskilby.co.uk/category/networking/)

### [Lab Update – Part 3 Network](https://jameskilby.co.uk/2022/01/lab-update-part-3-network/)

By[James](https://jameskilby.co.uk) January 6, 2022October 1, 2025

I have retired the WatchGuard Devices with the migration to PFSense running bare-metal in one of the Supermicro Nodes. I will likely virtualise this in the future. In terms of network/switching I have moved to an intermediate step here vMotion and Storage are running over DAC’s while VMware management and VM traffic is still over…

  * [ ![Runecast Remediation Script’s](https://jameskilby.co.uk/wp-content/uploads/2023/05/Runecast-Solutions-Ltd.png) ](https://jameskilby.co.uk/2023/05/runecast-remediation-scripts/)

[Runecast](https://jameskilby.co.uk/category/runecast/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Runecast Remediation Script’s](https://jameskilby.co.uk/2023/05/runecast-remediation-scripts/)

By[James](https://jameskilby.co.uk) May 16, 2023November 17, 2023

I am a huge fan of the Runecast product and luckily as a vExpert they give out NFR licences for my lab. One of the really cool features I wanted to mention today was the remediation script function. I have been playing with storage a lot in my lab recently as part of a wider…

  * [ ![MultiHost Holodeck VCF](https://jameskilby.co.uk/wp-content/uploads/2023/12/Holodeck-Overview.png) ](https://jameskilby.co.uk/2024/01/multihost-holodeck-vcf/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VCF](https://jameskilby.co.uk/category/vmware/vcf/)

### [MultiHost Holodeck VCF](https://jameskilby.co.uk/2024/01/multihost-holodeck-vcf/)

By[James](https://jameskilby.co.uk) January 17, 2024January 18, 2026

How to Deploy VMware Holodeck on multiple hosts

  * [ ![Time in a VMC Environment](https://jameskilby.co.uk/wp-content/uploads/2025/02/Picture-1-e1768509620339-768x193.png) ](https://jameskilby.co.uk/2025/12/time-in-a-vmc-environment/)

[VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [Time in a VMC Environment](https://jameskilby.co.uk/2025/12/time-in-a-vmc-environment/)

By[James](https://jameskilby.co.uk) December 8, 2025February 1, 2026

How to use the Amazon Time Sync Service in a VMC environment