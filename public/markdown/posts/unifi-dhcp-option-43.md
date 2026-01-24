---
title: "Configure DHCP Option 43 for UniFi devices to enable remote adoption across subnets"
description: "How to Configure DHCP Option 43 for use by my Unifi Devices in my Network"
date: 2024-06-26T10:50:17+00:00
modified: 2026-01-18T21:40:37+00:00
author: James Kilby
categories:
  - Homelab
  - Networking
  - Nutanix
  - Hosting
  - Artificial Intelligence
  - Docker
  - Veeam
  - VMware
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

By[James](https://jameskilby.co.uk) June 26, 2024January 18, 2026 • 📖1 min read(270 words)

📅 **Published:** June 26, 2024• **Updated:** January 18, 2026

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

## Similar Posts

  * [ ![Nutanix CE](https://jameskilby.co.uk/wp-content/uploads/2020/07/nutanix-logo-HI-REZ_reverse-w-carrier-768x196.jpg) ](https://jameskilby.co.uk/2018/01/nutanix-ce/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Nutanix](https://jameskilby.co.uk/category/nutanix/)

### [Nutanix CE](https://jameskilby.co.uk/2018/01/nutanix-ce/)

By[James](https://jameskilby.co.uk) January 6, 2018July 10, 2024

I ran a Nutanix CE server at home for a little while when it first came out. However, due to the fairly high requirements, it didn’t make sense to me to continue running it at home. This was compounded by the fact that I have many clusters to play with at work. These all run my…

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Networking](https://jameskilby.co.uk/category/networking/)

### [Lab Update – Part 3 Network](https://jameskilby.co.uk/2022/01/lab-update-part-3-network/)

By[James](https://jameskilby.co.uk) January 6, 2022October 1, 2025

I have retired the WatchGuard Devices with the migration to PFSense running bare-metal in one of the Supermicro Nodes. I will likely virtualise this in the future. In terms of network/switching I have moved to an intermediate step here vMotion and Storage are running over DAC’s while VMware management and VM traffic is still over…

  * [ ![Starlink](https://jameskilby.co.uk/wp-content/uploads/2022/10/spacexs-starlink-to-supply-free-satellite-internet-to-famili_u44u.1920-768x432.jpg) ](https://jameskilby.co.uk/2022/10/starlink/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [Starlink](https://jameskilby.co.uk/2022/10/starlink/)

By[James](https://jameskilby.co.uk) October 11, 2022October 1, 2025

Since moving to Dorset last year internet connectivity has been the bane of my existence. Currently, I have an ADSL connection provided by my old employer Zen and a 5G connection provided by Three. These are both plumbed into my WatchGuard Firewall with multi-wan configured. Most of the time the usability is ok but there…

  * [ ![Self Hosting AI Stack using vSphere, Docker and NVIDIA GPU](https://jameskilby.co.uk/wp-content/uploads/2024/10/pexels-tara-winstead-8386440-768x512.jpg) ](https://jameskilby.co.uk/2024/10/self-hosting-ai-stack-using-vsphere-docker-and-nvidia-gpu/)

[Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Docker](https://jameskilby.co.uk/category/docker/) | [Homelab](https://jameskilby.co.uk/category/homelab/)

### [Self Hosting AI Stack using vSphere, Docker and NVIDIA GPU](https://jameskilby.co.uk/2024/10/self-hosting-ai-stack-using-vsphere-docker-and-nvidia-gpu/)

By[James](https://jameskilby.co.uk) October 11, 2024October 1, 2025

Artificial intelligence is all the rage at the moment, It’s getting included in every product announcement from pretty much every vendor under the sun. Nvidia’s stock price has gone to the moon. So I thought I better get some knowledge and understand some of this. As it’s a huge field and I wasn’t exactly sure…

  * [ ![Wa](https://jameskilby.co.uk/wp-content/uploads/2025/04/210902461-012e7273-413a-4ec7-be44-e854347f5a21-768x180.png) ](https://jameskilby.co.uk/2025/04/warp-the-intelligent-terminal/)

[Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Homelab](https://jameskilby.co.uk/category/homelab/)

### [Warp – The intelligent terminal](https://jameskilby.co.uk/2025/04/warp-the-intelligent-terminal/)

By[James](https://jameskilby.co.uk) April 11, 2025October 3, 2025

How Warp is helping me run my homelab. 

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Veeam](https://jameskilby.co.uk/category/veeam/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Lab Update – Desired Workloads](https://jameskilby.co.uk/2022/01/lab-update-part-5-desired-workloads/)

By[James](https://jameskilby.co.uk) January 6, 2022November 11, 2023

My lab is always undergoing change. Partially as I want to try new things or new ways of doing things. Sometimes because I break things (not always by accident) sometimes it’s a great way to learn…. I decided to list the workloads I am looking to run (some of these are already in place) Infrastucture…