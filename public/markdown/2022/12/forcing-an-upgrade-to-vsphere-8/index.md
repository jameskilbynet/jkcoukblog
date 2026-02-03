---
title: "Forcing an Upgrade to vSphere 8"
description: "Forcing an Upgrade to vSphere 8? Learn the essential steps and tips for a smooth transition in your VMware homelab setup. Get started now!"
date: 2022-12-14T21:43:39+00:00
modified: 2025-10-01T15:22:13+00:00
author: James Kilby
categories:
  - Homelab
  - VMware
  - vSphere
  - VMware Cloud on AWS
  - Networking
  - Docker
  - Hosting
  - Kubernetes
  - Personal
  - Storage
tags:
  - #Upgrade
  - #vSphere 8
url: https://jameskilby.co.uk/2022/12/forcing-an-upgrade-to-vsphere-8/
image: https://jameskilby.co.uk/wp-content/uploads/2022/12/Screenshot-2022-12-14-at-21.24.32.png
---

![](https://jameskilby.co.uk/wp-content/uploads/2022/12/Screenshot-2022-12-14-at-21.45.23.png)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

# Forcing an Upgrade to vSphere 8

By[James](https://jameskilby.co.uk) December 14, 2022October 1, 2025 • 📖1 min read(282 words)

📅 **Published:** December 14, 2022• **Updated:** October 01, 2025

I run a reasonably extensive [homelab](https://jameskilby.co.uk/lab/) that is of course built around the VMware ecosystem. So with the release of vSphere 8 I was obviously going to upgrade however a few personal things blocked me from doing it until now. The vCenter upgrade was smooth however knowing that some of the hardware I am running is a little dated this was always going to carry a risk.

I tried using lifecycle manager (vLCM) within vCenter but I was faced with the following and I couldn’t see a way to force remediate from within vCenter. Therefore I resorted to doing it from the command line.

![](https://jameskilby.co.uk/wp-content/uploads/2022/12/Screenshot-2022-12-14-at-21.24.32-1024x245.png)Host is not compatible

Firstly enable SSH on each of the hosts to be upgraded

Then Allow HTTP traffic in the ESXi firewall
    
    
    esxcli network firewall ruleset set -e true -r httpClient

📋 Copy

The next step is to list the available ESXi profiles using the online depot. In my case, I was looking for ESXi 8.0a
    
    
    esxcli software sources profile list -d https://hostupdate.vmware.com/software/VUM/PRODUCTION/main/vmw-depot-index.xml | grep -i ESXi-8.0a

📋 Copy

Then comes the Install, I had validated that this would be ok by installing from USB to another node. All of the hardware that I needed continued to work as expected with the only significant loss being Mellanox Connect X-3 40Gb/s adaptor. 
    
    
    esxcli software profile update -p ESXi-8.0a-20842819-standard -d https://hostupdate.vmware.com/software/VUM/PRODUCTION/main/vmw-depot-index.xml --no-hardware-warning

📋 Copy

Update Result

Message: The update completed successfully, but the system needs to be rebooted for the changes to be effective. Reboot Required: true

It also listed all of the newly installed VIB’s 

The last step is to disable the firewall rule and then SSH 
    
    
     esxcli network firewall ruleset set -e false -r httpClient

📋 Copy

## 📚 Related Posts

  * [Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)
  * [Warp &#8211; The intelligent terminal](https://jameskilby.co.uk/2025/04/warp-the-intelligent-terminal/)
  * [Self Hosting AI Stack using vSphere, Docker and NVIDIA GPU](https://jameskilby.co.uk/2024/10/self-hosting-ai-stack-using-vsphere-docker-and-nvidia-gpu/)

## Similar Posts

  * [ ![VMC New Host -i3en](https://jameskilby.co.uk/wp-content/uploads/2022/11/iu-1-768x395.png) ](https://jameskilby.co.uk/2020/07/i3en/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [VMC New Host -i3en](https://jameskilby.co.uk/2020/07/i3en/)

By[James](https://jameskilby.co.uk) July 2, 2020July 10, 2024

VMware Cloud on AWS (VMC) has introduced a new host to its lineup the “i3en”. This is based on the i3en.metal AWS instance. The specifications are certainly impressive packing in 96 logical cores, 768GiB RAM, and approximately 45.84 TiB of NVMe raw storage capacity per host. It’s certainly a monster with a 266% uplift in…

  * [ ![Configure DHCP Option 43 for UniFi devices to enable remote adoption across subnets](https://jameskilby.co.uk/wp-content/uploads/2024/06/Ubiquiti_Networks-Logo.wine_-768x512.png) ](https://jameskilby.co.uk/2024/06/unifi-dhcp-option-43/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Networking](https://jameskilby.co.uk/category/networking/)

### [Configure DHCP Option 43 for UniFi devices to enable remote adoption across subnets](https://jameskilby.co.uk/2024/06/unifi-dhcp-option-43/)

By[James](https://jameskilby.co.uk) June 26, 2024January 18, 2026

How to configure DHCP Option 43 for UniFi devices 

  * [ ![Use Portainer in a Homelab with GitHub](https://jameskilby.co.uk/wp-content/uploads/2022/12/22225832.png) ](https://jameskilby.co.uk/2022/12/use-portainer-in-a-homelab-with-github/)

[Docker](https://jameskilby.co.uk/category/docker/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Kubernetes](https://jameskilby.co.uk/category/kubernetes/)

### [Use Portainer in a Homelab with GitHub](https://jameskilby.co.uk/2022/12/use-portainer-in-a-homelab-with-github/)

By[James](https://jameskilby.co.uk) December 9, 2022October 1, 2025

Late to the party or not, I have been using containers in my lab more and more and that has led me to Portainer…. I use it for managing the docker containers on my Synology but it can also be used for managing lots of other things. In their own words “Portainer accelerates container adoption….

  * [ ![Nvidia Tesla P4 Homelab Setup](https://jameskilby.co.uk/wp-content/uploads/2023/10/IMG_1107-768x403-1.jpg) ](https://jameskilby.co.uk/2023/10/vgpu-setup-in-my-homelab/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Nvidia Tesla P4 Homelab Setup](https://jameskilby.co.uk/2023/10/vgpu-setup-in-my-homelab/)

By[James](https://jameskilby.co.uk) October 23, 2023July 10, 2024

A little while ago I decided to play with vGPU in my homelab. This was something I had dabbled with in the past but never really had the time or need to get working properly. The first thing that I needed was a GPU. I did have a Dell T20 with an iGPU built into…

  * [ ![VMware – Going out with a Bang!](https://jameskilby.co.uk/wp-content/uploads/2023/10/rnli-logo-768x384.png) ](https://jameskilby.co.uk/2023/10/going-out-with-a-bang/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [Personal](https://jameskilby.co.uk/category/personal/)

### [VMware – Going out with a Bang!](https://jameskilby.co.uk/2023/10/going-out-with-a-bang/)

By[James](https://jameskilby.co.uk) October 7, 2023November 17, 2023

There is a lot of uncertainty with VMware at the moment. This is all due to the pending acquisition by Broadcom. There are a lot of unknowns for the staff and customers about what the company will look like in the future. I certainly have some concerns mainly just with the unknown. However, VMware has…

  * [ ![TrueNAS Logo](https://jameskilby.co.uk/wp-content/uploads/2023/05/Screenshot-2023-05-22-at-18.49.21-768x198.png) ](https://jameskilby.co.uk/2023/05/homelab-storage-refresh-part-1/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/)

### [Homelab Storage Refresh (Part 1)](https://jameskilby.co.uk/2023/05/homelab-storage-refresh-part-1/)

By[James](https://jameskilby.co.uk) May 23, 2023October 1, 2025

Table of Contents Background ZFS Overview Read Cache (ARC and L2ARC) ZIL (ZFS Intent Log) Hardware Background I have just completed the move of all my production and media-based storage/services to TrueNAS Scale. ( I will just refer to this as TrueNAS) This is based on my HP Z840 and I have now retired my…