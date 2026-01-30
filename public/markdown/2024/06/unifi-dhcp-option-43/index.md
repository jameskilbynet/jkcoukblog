---
title: "Configure DHCP Option 43 for UniFi devices to enable remote adoption across subnets"
description: "How to Configure DHCP Option 43 for use by my Unifi Devices in my Network"
date: 2024-06-26T10:50:17+00:00
modified: 2026-01-18T21:40:37+00:00
author: James Kilby
categories:
  - Homelab
  - Networking
  - Storage
  - Docker
  - Hosting
  - Kubernetes
  - Ansible
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

  * [ ![TrueNAS Logo](https://jameskilby.co.uk/wp-content/uploads/2023/05/Screenshot-2023-05-22-at-18.49.21-768x198.png) ](https://jameskilby.co.uk/2023/05/homelab-storage-refresh-part-1/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/)

### [Homelab Storage Refresh (Part 1)](https://jameskilby.co.uk/2023/05/homelab-storage-refresh-part-1/)

By[James](https://jameskilby.co.uk) May 23, 2023October 1, 2025

Table of Contents Background ZFS Overview Read Cache (ARC and L2ARC) ZIL (ZFS Intent Log) Hardware Background I have just completed the move of all my production and media-based storage/services to TrueNAS Scale. ( I will just refer to this as TrueNAS) This is based on my HP Z840 and I have now retired my…

  * [ ![Use Portainer in a Homelab with GitHub](https://jameskilby.co.uk/wp-content/uploads/2022/12/22225832.png) ](https://jameskilby.co.uk/2022/12/use-portainer-in-a-homelab-with-github/)

[Docker](https://jameskilby.co.uk/category/docker/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Kubernetes](https://jameskilby.co.uk/category/kubernetes/)

### [Use Portainer in a Homelab with GitHub](https://jameskilby.co.uk/2022/12/use-portainer-in-a-homelab-with-github/)

By[James](https://jameskilby.co.uk) December 9, 2022October 1, 2025

Late to the party or not, I have been using containers in my lab more and more and that has led me to Portainer…. I use it for managing the docker containers on my Synology but it can also be used for managing lots of other things. In their own words “Portainer accelerates container adoption….

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Networking](https://jameskilby.co.uk/category/networking/)

### [Lab Update – Part 3 Network](https://jameskilby.co.uk/2022/01/lab-update-part-3-network/)

By[James](https://jameskilby.co.uk) January 6, 2022October 1, 2025

I have retired the WatchGuard Devices with the migration to PFSense running bare-metal in one of the Supermicro Nodes. I will likely virtualise this in the future. In terms of network/switching I have moved to an intermediate step here vMotion and Storage are running over DAC’s while VMware management and VM traffic is still over…

  * [ ![Lab Update – Part 2 Storage Truenas Scale](https://jameskilby.co.uk/wp-content/uploads/2022/01/maxresdefault-768x432.jpeg) ](https://jameskilby.co.uk/2022/01/lab-update-part-2-storage/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/)

### [Lab Update – Part 2 Storage Truenas Scale](https://jameskilby.co.uk/2022/01/lab-update-part-2-storage/)

By[James](https://jameskilby.co.uk) January 11, 2022December 11, 2023

The HP Z840 has changed its role to a permanent storage box running Truenas Scale. This is in addition to my Synology DS918+ TrueNas is the successor to FreeNas a very popular BSD based StorageOS and TrueNas scale is a fork of this based on Linux. The Synology has been an amazing piece of kit…

  * [ ![Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/wp-content/uploads/2025/07/semaphore-768x768.png) ](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)

[Ansible](https://jameskilby.co.uk/category/ansible/) | [Homelab](https://jameskilby.co.uk/category/homelab/)

### [Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)

By[James](https://jameskilby.co.uk) September 2, 2025December 18, 2025

I recently stumbled across Semaphore, which is essentially a frontend for managing DevOps tooling, including Ansible, Terraform, OpenTofu, and PowerShell. It’s easy to deploy in Docker, and I am slowly moving more of my homelab management over to it. Introduction This is a guide to show you how to get up and running easily with…

  * [ ![Nutanix CE](https://jameskilby.co.uk/wp-content/uploads/2020/07/nutanix-logo-HI-REZ_reverse-w-carrier-768x196.jpg) ](https://jameskilby.co.uk/2018/01/nutanix-ce/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Nutanix](https://jameskilby.co.uk/category/nutanix/)

### [Nutanix CE](https://jameskilby.co.uk/2018/01/nutanix-ce/)

By[James](https://jameskilby.co.uk) January 6, 2018July 10, 2024

I ran a Nutanix CE server at home for a little while when it first came out. However, due to the fairly high requirements, it didn’t make sense to me to continue running it at home. This was compounded by the fact that I have many clusters to play with at work. These all run my…