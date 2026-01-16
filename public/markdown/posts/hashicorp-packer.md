---
title: "Template Deployment with Packer"
description: "Getting started with HashiCorp packer to build VMware templates"
date: 2021-01-21T22:26:10+00:00
modified: 2025-12-08T12:50:22+00:00
author: James Kilby
categories:
  - Automation
  - Homelab
  - VMware
  - Nutanix
  - VCF
  - VMware Cloud on AWS
  - vSphere
tags:
  - #Automation
  - #Hashicorp
  - #Homelab
  - #packer
url: https://jameskilby.co.uk/2021/01/hashicorp-packer/
image: https://jameskilby.co.uk/wp-content/uploads/2021/01/logo_packer.png
---

![](https://jameskilby.co.uk/wp-content/uploads/2021/01/logo_packer.png)

[Automation](https://jameskilby.co.uk/category/automation/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

# Template Deployment with Packer

By[James](https://jameskilby.co.uk) January 21, 2021December 8, 2025 • 📖2 min read(345 words)

📅 **Published:** January 21, 2021• **Updated:** December 08, 2025

Packer is one of those tools I have heard about, and some of the cool people on Twitter that I follow have been using it for a while. But until now I had never played with it. That was until I saw the below tweet by the legend that is [William Lam](https://williamlam.com/)

> 🤩 THIS IS AWESOME 🤩  
>   
> For those who ❤️ Automation, check out @tenthirtyam amazing repo w/working examples to build Photon OS 3/4, Ubuntu 18.04/20.04, RHEL 7/8, CentOS 7/8 & Windows Server 2016/2019 VM images using Packer & pushing to Cont Lib! Well done <https://t.co/o7FQXtrpRn>
> 
> — William Lam (@lamw) [November 30, 2020](https://twitter.com/lamw/status/1333546472155987969?ref_src=twsrc%5Etfw)

That was the kicker I needed to go and have a look at getting it set up and running. As I run a Mac as my main machine it was easy to get deployed following the instructions using [brew](https://brew.sh) and the GitHub Repo that William had pointed to.

However, once I had added my vSphere credentials I was having a few issues. On execution, I was getting the error message “default datacenter resolves to multiple instances” I did a bit of digging and discovered that the code didn’t specify a VMware datacenter and in my lab environment, I have 2 physical sites with a VMware datacenter in each, therefore, I needed to specify which one. Once this was fixed I started rolling out some Linux templates and it worked flawlessly until I got to the photon 4 server. I again spotted a typo and a syntax error on a command being passed into the photon VM. I corrected this and decided that actually, I should work out how to get this fixed upstream to help the wider community.

Once this was working it was onto the Windows templates. Once all the relevant ISO’s and configs were in place I was able to fully deploy 4 Windows servers that were patched and added to my content library in about 40mins. So whenever I go to deploy an Image it is always up to date…

Thanks to [Ryan](https://github.com/tenthirtyam) for an Incredible piece of work

## Similar Posts

  * [ ![New Nodes](https://jameskilby.co.uk/wp-content/uploads/2024/07/IMG_6629-768x149.jpeg) ](https://jameskilby.co.uk/2024/07/new-nodes/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Nutanix](https://jameskilby.co.uk/category/nutanix/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [New Nodes](https://jameskilby.co.uk/2024/07/new-nodes/)

By[James](https://jameskilby.co.uk) July 2, 2024October 1, 2025

I recently decided to update some of my homelab hosts and I managed to do this at very little cost by offloading 2 of my Supermicro e200’s to fellow vExpert Paul. The below post describes what I bought why and how I have configured it. Table of Contents Node Choice Bill of Materials Rescue IPMI…

  * [ ![Nvidia Tesla P4 Homelab Setup](https://jameskilby.co.uk/wp-content/uploads/2023/10/IMG_1107-768x403-1.jpg) ](https://jameskilby.co.uk/2023/10/vgpu-setup-in-my-homelab/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Nvidia Tesla P4 Homelab Setup](https://jameskilby.co.uk/2023/10/vgpu-setup-in-my-homelab/)

By[James](https://jameskilby.co.uk) October 23, 2023July 10, 2024

A little while ago I decided to play with vGPU in my homelab. This was something I had dabbled with in the past but never really had the time or need to get working properly. The first thing that I needed was a GPU. I did have a Dell T20 with an iGPU built into…

  * [ ![Holodeck CPU Fixes](https://jameskilby.co.uk/wp-content/uploads/2024/01/40oOd8IipPvtrPJs-1198788743-768x737.jpg) ](https://jameskilby.co.uk/2024/01/holodeck-cpu-fixes/)

[VCF](https://jameskilby.co.uk/category/vmware/vcf/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Holodeck CPU Fixes](https://jameskilby.co.uk/2024/01/holodeck-cpu-fixes/)

By[James](https://jameskilby.co.uk) January 18, 2024July 10, 2024

How to deploy Holodeck with Legacy CPU’s

  * [ ![An in-depth look at VMware Cloud on AWS hosts](https://jameskilby.co.uk/wp-content/uploads/2025/02/Picture-1-e1768509620339-768x193.png) ](https://jameskilby.co.uk/2025/08/vmc-host-deepdive/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [An in-depth look at VMware Cloud on AWS hosts](https://jameskilby.co.uk/2025/08/vmc-host-deepdive/)

By[James](https://jameskilby.co.uk) August 14, 2025December 24, 2025

This is single page intended to collate every single feature of the current VMware Cloud on AWS hosts for easy comparison. All of this data Is publicly available. I have just collated into a single page I3 I3en I4i CPU Processor Name Intel Xeon E5-2686 v4 Intel Xeon Platinum 8175 Intel Xeon 8375c No of…

  * [ ![Forcing an Upgrade to vSphere 8](https://jameskilby.co.uk/wp-content/uploads/2022/12/Screenshot-2022-12-14-at-21.45.23.png) ](https://jameskilby.co.uk/2022/12/forcing-an-upgrade-to-vsphere-8/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [Forcing an Upgrade to vSphere 8](https://jameskilby.co.uk/2022/12/forcing-an-upgrade-to-vsphere-8/)

By[James](https://jameskilby.co.uk) December 14, 2022October 1, 2025

I run a reasonably extensive homelab that is of course built around the VMware ecosystem. So with the release of vSphere 8 I was obviously going to upgrade however a few personal things blocked me from doing it until now. The vCenter upgrade was smooth however knowing that some of the hardware I am running…

  * [ ![VMC Quick Sizing Guide](https://jameskilby.co.uk/wp-content/uploads/2025/02/Picture-1-e1768509620339-768x193.png) ](https://jameskilby.co.uk/2025/05/vmc-quick-sizing-guide/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [VMC Quick Sizing Guide](https://jameskilby.co.uk/2025/05/vmc-quick-sizing-guide/)

By[James](https://jameskilby.co.uk) May 21, 2025July 2, 2025

Quick reference guide to the available storage resources that you get in VMware Cloud on AWS