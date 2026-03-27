---
title: "Configure DHCP Option 43 for UniFi devices to enable remote adoption across subnets"
description: "How to Configure DHCP Option 43 for use by my Unifi Devices in my Network"
date: 2024-06-26T10:50:17+00:00
modified: 2026-03-10T20:35:12+00:00
author: James Kilby
categories:
  - Homelab
  - Networking
  - Automation
  - VMware
  - vSphere
  - Storage
  - Synology
  - Mikrotik
  - Veeam
  - Nutanix
tags:
  - #DHCP
  - #Option 43
  - #Unifi
url: https://jameskilby.co.uk/2024/06/unifi-dhcp-option-43/
image: https://jameskilby.co.uk/wp-content/uploads/2024/06/Ubiquiti_Networks-Logo.wine_-1024x683.png
---

![](https://jameskilby.co.uk/wp-content/uploads/2024/06/Ubiquiti_Networks-Logo.wine_.png)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Networking](https://jameskilby.co.uk/category/networking/)

# Configure DHCP Option 43 for UniFi devices to enable remote adoption across subnets

By[James](https://jameskilby.co.uk) June 26, 2024March 10, 2026 • 📖1 min read(270 words)

📅 **Published:** June 26, 2024• **Updated:** March 10, 2026

## Table of Contents

## Intro

I have recently juggled some of my homelab services around, which involved moving my UniFi server to a different subnet. This meant that new UniFi devices could not find the UniFi server for adoption/control purposes as this is usually done with broadcast.

## Layer 3 Adoption Options

For Remote Adoption/Layer 3 UniFi supports:

  * SSH
  * DNS
  * DHCP Option 43

I discounted SSH as who wants to manually log into things and make changes and I discounted DNS. That left me with DHCP option 43

I decided to configure my DHCP server to hand out “option 43” on the network subnet the Access Points were connected to. The implementation of this will differ depending on what DHCP server you are using. Mine is the one built into my WatchGuard Firebox M200.

In this, I have set a custom option and then it asks for four values:

Code| 43  
---|---  
Name | Unifi  
Type | Hexadecimal  
Value | 01:04:c0:a8:14:02  
  
All of which are straightforward except the last one so let me explain. It is made up of 2 parts

The first two parts 01:04 Is fixed for UniFi. I am hosting the controller on IP 192.168.20.2 The remaining part of the value (c0:a8:14:02) is the IP address of the UniFi controller in Hex. Please note this method does not support DNS.

A multitude of tools exist for converting IP to HEX one can be found [here](https://www.browserling.com/tools/ip-to-hex)

And there you have it. I can connect a factory fresh UniFi device to my network DHCP will hand out an IP on one subnet and tell the device how to reach the controller in a different subnet.

## 📚 Related Posts

  * [My Self-Hosted AI Stack: Architecture Overview (Part 1)](https://jameskilby.co.uk/2026/03/my-self-hosted-ai-stack-a-technical-deep-dive/)
  * [Automating the deployment of my Homelab AI Infrastructure](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)
  * [Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)

## Similar Posts

  * [ ![Template Deployment with Packer](https://jameskilby.co.uk/wp-content/uploads/2021/01/logo_packer.png) ](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

[Automation](https://jameskilby.co.uk/category/automation/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Template Deployment with Packer](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

By[James](https://jameskilby.co.uk) January 21, 2021March 10, 2026

Packer is one of those tools I have heard about, and some of the cool people on Twitter that I follow have been using it for a while. But until now I had never played with it. That was until I saw the below tweet by the legend that is William Lam That was the…

  * [ ![Forcing an Upgrade to vSphere 8](https://jameskilby.co.uk/wp-content/uploads/2022/12/Screenshot-2022-12-14-at-21.45.23.png) ](https://jameskilby.co.uk/2022/12/forcing-an-upgrade-to-vsphere-8/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [Forcing an Upgrade to vSphere 8](https://jameskilby.co.uk/2022/12/forcing-an-upgrade-to-vsphere-8/)

By[James](https://jameskilby.co.uk) December 14, 2022March 10, 2026

I run a reasonably extensive homelab that is of course built around the VMware ecosystem. So with the release of vSphere 8 I was obviously going to upgrade however a few personal things blocked me from doing it until now. The vCenter upgrade was smooth however knowing that some of the hardware I am running…

  * [ ![Homelab bad days \(almost\)](https://jameskilby.co.uk/wp-content/uploads/2022/11/BrokenHardDive-1200x630-1-768x403.jpg) ](https://jameskilby.co.uk/2022/11/homelab-bad-days-almost/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [Synology](https://jameskilby.co.uk/category/synology/)

### [Homelab bad days (almost)](https://jameskilby.co.uk/2022/11/homelab-bad-days-almost/)

By[James](https://jameskilby.co.uk) November 21, 2022March 10, 2026

I recently spent 3 weeks in Ireland with my wife Wendy and our son Nate. This involves driving from the south coast of Dorset up to Scotland and then getting a ferry over to Belfast before travelling west to the Republic. While driving I got a slack notification that one of my SSD’s in my…

  * [ ![CRS-504](https://jameskilby.co.uk/wp-content/uploads/2024/09/s-l1600-768x427.jpg) ](https://jameskilby.co.uk/2024/09/home-network-upgrade/)

[Mikrotik](https://jameskilby.co.uk/category/mikrotik/) | [Networking](https://jameskilby.co.uk/category/networking/)

### [Home Network Upgrade](https://jameskilby.co.uk/2024/09/home-network-upgrade/)

By[James](https://jameskilby.co.uk) September 9, 2024October 24, 2025

My journey to superfast networking in my homelab

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Veeam](https://jameskilby.co.uk/category/veeam/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Lab Update – Desired Workloads](https://jameskilby.co.uk/2022/01/lab-update-part-5-desired-workloads/)

By[James](https://jameskilby.co.uk) January 6, 2022March 10, 2026

My lab is always undergoing change. Partially as I want to try new things or new ways of doing things. Sometimes because I break things (not always by accident) sometimes it’s a great way to learn…. I decided to list the workloads I am looking to run (some of these are already in place) Infrastucture…

  * [ ![Nutanix CE](https://jameskilby.co.uk/wp-content/uploads/2020/07/nutanix-logo-HI-REZ_reverse-w-carrier-768x196.jpg) ](https://jameskilby.co.uk/2018/01/nutanix-ce/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Nutanix](https://jameskilby.co.uk/category/nutanix/)

### [Nutanix CE](https://jameskilby.co.uk/2018/01/nutanix-ce/)

By[James](https://jameskilby.co.uk) January 6, 2018July 10, 2024

I ran a Nutanix CE server at home for a little while when it first came out. However, due to the fairly high requirements, it didn’t make sense to me to continue running it at home. This was compounded by the fact that I have many clusters to play with at work. These all run my…