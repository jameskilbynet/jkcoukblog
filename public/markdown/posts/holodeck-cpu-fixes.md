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
  - Storage
  - vExpert
  - Synology
  - VMware Cloud on AWS
  - Artificial Intelligence
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

  * [ ![Intel Optane NVMe Homelab](https://jameskilby.co.uk/wp-content/uploads/2023/04/intel_optane_ssd_900p_series_aic_-_right_angle_575px.png) ](https://jameskilby.co.uk/2023/04/intel-optane/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [vExpert](https://jameskilby.co.uk/category/vexpert/)

### [Intel Optane NVMe Homelab](https://jameskilby.co.uk/2023/04/intel-optane/)

By[James](https://jameskilby.co.uk) April 17, 2023October 1, 2025

I have been a VMware vExpert for many years and it has brought me many many benefits over the years. I don’t think it’s an understatement to say I probably wouldn’t have my current role within VMware without it. One of the best benefits has been access to a huge amount of licences for VMware…

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [Synology](https://jameskilby.co.uk/category/synology/)

### [Lab Storage](https://jameskilby.co.uk/2018/01/lab-storage/)

By[James](https://jameskilby.co.uk) January 6, 2018July 10, 2024

I have been meaning to post around some of the lab setup for a while. Although it changes frequently at present it’s as below. I will add some pics when I have tidied up the lab/cables My primary lab storage is all contained within an HP Gen8 Microserver. Currently Configured: 1x INTEL Core i3-4130 running at…

  * [ ![Time in a VMC Environment](https://jameskilby.co.uk/wp-content/uploads/2025/02/Picture-1-e1768509620339-768x193.png) ](https://jameskilby.co.uk/2025/12/time-in-a-vmc-environment/)

[VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [Time in a VMC Environment](https://jameskilby.co.uk/2025/12/time-in-a-vmc-environment/)

By[James](https://jameskilby.co.uk) December 8, 2025January 17, 2026

One of the nice things about the VMC Service is that you dont have to worry about a number of the traditional infrastructure services that you typically obsess over when your running your own infrastructure. One of those is Time…. A key requirement for any enterprise platform. Time VMC allows you to utilise the Amazon…

  * [ ![Wa](https://jameskilby.co.uk/wp-content/uploads/2025/04/210902461-012e7273-413a-4ec7-be44-e854347f5a21-768x180.png) ](https://jameskilby.co.uk/2025/04/warp-the-intelligent-terminal/)

[Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Homelab](https://jameskilby.co.uk/category/homelab/)

### [Warp – The intelligent terminal](https://jameskilby.co.uk/2025/04/warp-the-intelligent-terminal/)

By[James](https://jameskilby.co.uk) April 11, 2025October 3, 2025

How Warp is helping me run my homelab. 

  * [ ![MultiHost Holodeck VCF](https://jameskilby.co.uk/wp-content/uploads/2023/12/Holodeck-Overview.png) ](https://jameskilby.co.uk/2024/01/multihost-holodeck-vcf/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VCF](https://jameskilby.co.uk/category/vmware/vcf/)

### [MultiHost Holodeck VCF](https://jameskilby.co.uk/2024/01/multihost-holodeck-vcf/)

By[James](https://jameskilby.co.uk) January 17, 2024January 18, 2026

How to Deploy VMware Holodeck on multiple hosts

  * [ ![Forcing an Upgrade to vSphere 8](https://jameskilby.co.uk/wp-content/uploads/2022/12/Screenshot-2022-12-14-at-21.45.23.png) ](https://jameskilby.co.uk/2022/12/forcing-an-upgrade-to-vsphere-8/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [Forcing an Upgrade to vSphere 8](https://jameskilby.co.uk/2022/12/forcing-an-upgrade-to-vsphere-8/)

By[James](https://jameskilby.co.uk) December 14, 2022October 1, 2025

I run a reasonably extensive homelab that is of course built around the VMware ecosystem. So with the release of vSphere 8 I was obviously going to upgrade however a few personal things blocked me from doing it until now. The vCenter upgrade was smooth however knowing that some of the hardware I am running…