---
title: "Configure DHCP Option 43 for UniFi devices to enable remote adoption across subnets"
description: "How to Configure DHCP Option 43 for use by my Unifi Devices in my Network"
date: 2024-06-26T10:50:17+00:00
modified: 2026-01-18T21:40:37+00:00
author: James Kilby
categories:
  - Homelab
  - Networking
  - Mikrotik
  - Nutanix
  - Storage
  - Synology
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

## 📚 Related Posts

  * [Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)
  * [Warp &#8211; The intelligent terminal](https://jameskilby.co.uk/2025/04/warp-the-intelligent-terminal/)
  * [Self Hosting AI Stack using vSphere, Docker and NVIDIA GPU](https://jameskilby.co.uk/2024/10/self-hosting-ai-stack-using-vsphere-docker-and-nvidia-gpu/)

## Similar Posts

  * [ ![CRS-504](https://jameskilby.co.uk/wp-content/uploads/2024/09/s-l1600-768x427.jpg) ](https://jameskilby.co.uk/2024/09/home-network-upgrade/)

[Mikrotik](https://jameskilby.co.uk/category/mikrotik/) | [Networking](https://jameskilby.co.uk/category/networking/)

### [Home Network Upgrade](https://jameskilby.co.uk/2024/09/home-network-upgrade/)

By[James](https://jameskilby.co.uk) September 9, 2024October 24, 2025

My journey to superfast networking in my homelab

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Networking](https://jameskilby.co.uk/category/networking/)

### [Lab Update – Part 3 Network](https://jameskilby.co.uk/2022/01/lab-update-part-3-network/)

By[James](https://jameskilby.co.uk) January 6, 2022October 1, 2025

I have retired the WatchGuard Devices with the migration to PFSense running bare-metal in one of the Supermicro Nodes. I will likely virtualise this in the future. In terms of network/switching I have moved to an intermediate step here vMotion and Storage are running over DAC’s while VMware management and VM traffic is still over…

  * [ ![Configuring a Zen Internet and City Fibre connection with a 3rd party router](https://jameskilby.co.uk/wp-content/uploads/2023/11/cityfibre-zen-768x403.jpg) ](https://jameskilby.co.uk/2023/11/configuring-a-zen-internet-and-city-fibre-connection-with-a-3rd-party-router/)

[Networking](https://jameskilby.co.uk/category/networking/)

### [Configuring a Zen Internet and City Fibre connection with a 3rd party router](https://jameskilby.co.uk/2023/11/configuring-a-zen-internet-and-city-fibre-connection-with-a-3rd-party-router/)

By[James](https://jameskilby.co.uk) November 15, 2023January 18, 2026

Back in July I bought a new house and one of the best things about the property was that it was already in a City Fibre location. That meant I could take my Zen internet connection with me but ditch the ADSL (and Phone Line requirement). This gave me a much better connection in terms…

  * [ ![Nutanix CE](https://jameskilby.co.uk/wp-content/uploads/2020/07/nutanix-logo-HI-REZ_reverse-w-carrier-768x196.jpg) ](https://jameskilby.co.uk/2018/01/nutanix-ce/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Nutanix](https://jameskilby.co.uk/category/nutanix/)

### [Nutanix CE](https://jameskilby.co.uk/2018/01/nutanix-ce/)

By[James](https://jameskilby.co.uk) January 6, 2018July 10, 2024

I ran a Nutanix CE server at home for a little while when it first came out. However, due to the fairly high requirements, it didn’t make sense to me to continue running it at home. This was compounded by the fact that I have many clusters to play with at work. These all run my…

  * [ ![Homelab bad days \(almost\)](https://jameskilby.co.uk/wp-content/uploads/2022/11/BrokenHardDive-1200x630-1-768x403.jpg) ](https://jameskilby.co.uk/2022/11/homelab-bad-days-almost/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [Synology](https://jameskilby.co.uk/category/synology/)

### [Homelab bad days (almost)](https://jameskilby.co.uk/2022/11/homelab-bad-days-almost/)

By[James](https://jameskilby.co.uk) November 21, 2022April 8, 2023

I recently spent 3 weeks in Ireland with my wife Wendy and our son Nate. This involves driving from the south coast of Dorset up to Scotland and then getting a ferry over to Belfast before travelling west to the Republic. While driving I got a slack notification that one of my SSD’s in my…

  * [ ![Lab Storage](https://jameskilby.co.uk/wp-content/uploads/2023/04/81-ZoEW24UL._SL1500_-768x461.jpg) ](https://jameskilby.co.uk/2019/02/lab-storage-2/)

[Homelab](https://jameskilby.co.uk/category/homelab/)

### [Lab Storage](https://jameskilby.co.uk/2019/02/lab-storage-2/)

By[James](https://jameskilby.co.uk) February 10, 2019July 10, 2024

Lab Storage Update. Since starting my new role with Xtravirt my Homelab has gone through several fairly significant changes. At the moment it’s very much focused on the VMware stack and one of the things I needed was some more storage and especially some more storage performance. With that in mind, I purchased a new Synology…