---
title: "Nvidia Tesla P4 Homelab Setup"
description: "vGPU Setup in my Homelab using a Nvidia Tesla P4"
date: 2023-10-23T14:56:58+00:00
modified: 2024-07-10T10:54:03+00:00
author: James Kilby
categories:
  - Homelab
  - VMware
  - VMware Cloud on AWS
  - Ansible
  - Personal
  - vSphere
tags:
  - #Homelab
  - #Nvidia
  - #vGPU
url: https://jameskilby.co.uk/2023/10/vgpu-setup-in-my-homelab/
image: https://jameskilby.co.uk/wp-content/uploads/2023/10/IMG_1107-768x403-1.jpg
---

![](https://jameskilby.co.uk/wp-content/uploads/2023/10/IMG_1107-768x403-1.jpg)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

# Nvidia Tesla P4 Homelab Setup

By[James](https://jameskilby.co.uk) October 23, 2023July 10, 2024 • 📖4 min read(863 words)

📅 **Published:** October 23, 2023• **Updated:** July 10, 2024

## Table of Contents

A little while ago I decided to play with vGPU in my homelab. This was something I had dabbled with in the past but never really had the time or need to get working properly. 

The first thing that I needed was a GPU. I did have a Dell T20 with an iGPU built into the CPU but I wanted a more enterprise card for my testing. I therefore decided to pick up a Nvidia Tesla P4 from eBay for the princely sum of £185.

The card stats are not impressive by modern standards but it was good enough for what I needed combined with the fact that it was a single-width PCIe 3.0 x16 card and didn’t require external power. An important note is that this is a passively cooled card so if it’s not located in a server with a reasonable airflow then you may run into some thermal issues. 3D printer fan shrouds are available on eBay to work around this issue.

## Card Stats

GPU 1 NVIDIA Pascal™ GPU  
NVIDIA® CUDA® Cores 2,560  
Memory Size 8 GB GDDR5  
H.264 1080p30 Streams 24  
vGPU Profiles 1 GB, 2 GB, 4 GB, 8 GB  
Form Factor PCle 3.0 single slot  
(low profile) for rack servers  
Power 75 W  
Thermal Solution Passive

In a VMware environment, the first decision is how are you going to use the card? There are two basic modes of operation either GPU pass through where the entire card is passed into a single VM or vGPU where the card can be carved up into multiple gFX cards and be presented to one or more VMs at the same time. It was this latter option that I planned to implement. I wanted at least one node presented through to a Horizon VDI instance. The other node was going to be used as a [Tdarr](https://home.tdarr.io) Node

## Install steps

I installed the card into one of my 4 Supermicro nodes. With the graphics card installed I was limited to the onboard 2xGb Nic’s but that would be sufficient for initial testing. Initial attempts at getting this to work with vSphere 8 seemed to have issues so I rolled this node back to vSphere 7.0u2 as I knew this combo would work.

The first step is to install the drivers into the ESXi Host. This is straightforward and as I was only doing this to a single host I copied the relevant driver to a datastore and then ran the below command to perform the install
    
    
    esxcli software vib install -v /vmfs/volumes/623a916d-ccad8ff0-0000-000000000000/Nvidia/NVD_bootbank_NVD-VMware_ESXi_7.0.2_Driver_535.54.06-1OEM.702.0.0.17630552.vib

📋 Copy

At the end of the installation, a host reboot is required (even if it says it isn’t )

Once this has been done you should have the ability to add PCI devices with the associated Nvidia Profile as you can see all of the below ones are grid_p4 as this is the card that I am using. 

![](https://jameskilby.co.uk/wp-content/uploads/2023/10/Screenshot-2023-10-23-at-15.00.32-1024x435.png)

The Nvidia GPU Software Docs list the capabilities of each profile I have copied the relevant table below.

Virtual GPU Type| Intended Use Case| Frame Buffer (MB)| Virtual Display Heads| Maximum Resolution per Display Head| Maximum vGPUs per GPU| Maximum vGPUs per Board| Required License Edition  
---|---|---|---|---|---|---|---  
P4-8Q| Virtual Workstations| 8192| 4| 4096×2160| 1| 1| Quadro vDWS  
P4-4Q| Virtual Workstations| 4096| 4| 4096×2160| 2| 2| Quadro vDWS  
P4-2Q| Virtual Workstations| 2048| 4| 4096×2160| 4| 4| Quadro vDWS  
P4-1Q| Virtual Desktops, Virtual Workstations| 1024| 2| 4096×2160| 8| 8| Quadro vDWS  
P4-8C| Training Workloads| 8192| 1| 4096×2160[2](https://docs.nvidia.com/grid/9.0/grid-vgpu-user-guide/index.html#virtual-gpu-types-grid__c-series-vgpu-graphics-note)| 1| 1| vCS or Quadro vDWS  
P4-4C| Inference Workloads| 4096| 1| 4096×2160[2](https://docs.nvidia.com/grid/9.0/grid-vgpu-user-guide/index.html#virtual-gpu-types-grid__c-series-vgpu-graphics-note)| 2| 2| vCS or Quadro vDWS  
P4-2B| Virtual Desktops| 2048| 2| 4096×2160| 4| 4| GRID Virtual PC or Quadro vDWS  
P4-2B4| Virtual Desktops| 2048| 4| 2560×1600| 4| 4| GRID Virtual PC or Quadro vDWS  
P4-1B| Virtual Desktops| 1024| 4| 2560×1600| 8| 8| GRID Virtual PC or Quadro vDWS  
P4-1B4| Virtual Desktops| 1024| 1| 4096×2160| 8| 8| GRID Virtual PC or Quadro vDWS  
P4-8A| Virtual Applications| 8192| [4](https://docs.nvidia.com/grid/9.0/grid-vgpu-user-guide/index.html#virtual-gpu-types-grid__a-series-vgpu-max-res-note)1| 1280×1024[4](https://docs.nvidia.com/grid/9.0/grid-vgpu-user-guide/index.html#virtual-gpu-types-grid__a-series-vgpu-max-res-note)| 1| 1| GRID Virtual Application  
P4-4A| Virtual Applications| 4096| 1[4](https://docs.nvidia.com/grid/9.0/grid-vgpu-user-guide/index.html#virtual-gpu-types-grid__a-series-vgpu-max-res-note)| 1280×1024[4](https://docs.nvidia.com/grid/9.0/grid-vgpu-user-guide/index.html#virtual-gpu-types-grid__a-series-vgpu-max-res-note)| 2| 2| GRID Virtual Application  
P4-2A| Virtual Applications| 2048| 1[4](https://docs.nvidia.com/grid/9.0/grid-vgpu-user-guide/index.html#virtual-gpu-types-grid__a-series-vgpu-max-res-note)| 1280×1024[4](https://docs.nvidia.com/grid/9.0/grid-vgpu-user-guide/index.html#virtual-gpu-types-grid__a-series-vgpu-max-res-note)| 4| 4| GRID Virtual Application  
P4-1A| Virtual Applications| 1024| 1[4](https://docs.nvidia.com/grid/9.0/grid-vgpu-user-guide/index.html#virtual-gpu-types-grid__a-series-vgpu-max-res-note)| 1280×1024[4](https://docs.nvidia.com/grid/9.0/grid-vgpu-user-guide/index.html#virtual-gpu-types-grid__a-series-vgpu-max-res-note)| 8| 8| GRID Virtual Application  
  
## VM Provisioning 

With that configured the next step was to provision a VM and use the associated drivers within the VM.

![](https://jameskilby.co.uk/wp-content/uploads/2023/10/Screenshot-2023-10-23-at-15.00.07-1024x313.png)

Please note that when utilising PCI passthrough all of the memory must be reserved for the VM

With the VM running and the drivers installed we can now see the graphics card in windows

![](https://jameskilby.co.uk/wp-content/uploads/2023/10/Screenshot-2023-10-23-at-15.25.01-1-1024x850.png)

Using GPU-Z we can validate the resources being presented through to the Virtual Machine

![](https://jameskilby.co.uk/wp-content/uploads/2023/10/Screenshot-2023-10-23-at-15.24.54-746x1024.png)

## Folding@Home

As a final step it was worth proving that the GPU can actually be used by the workload. For this I used the folding@home application as can be seen below. 

![](https://jameskilby.co.uk/wp-content/uploads/2023/10/Screenshot-2023-10-09-at-17.36.02-1024x408.png)Folding at home slots overview

My Folding@home stats can be seen [here](https://stats.foldingathome.org/donor/69704482) and consider joining your compute to the project as well 

Just a side note that folding@home will use all of the CPU and GPU if you let it. Here is the power utilisation of the node and you can easily see where Folding@Home started.

![](https://jameskilby.co.uk/wp-content/uploads/2023/10/Screenshot-2023-10-07-at-14.12.01-1024x273.png)

## Similar Posts

  * [ ![VMC Host Errors](https://jameskilby.co.uk/wp-content/uploads/2022/11/iu-1-768x395.png) ](https://jameskilby.co.uk/2020/09/vmc-host-errors/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [VMC Host Errors](https://jameskilby.co.uk/2020/09/vmc-host-errors/)

By[James](https://jameskilby.co.uk) September 15, 2020October 1, 2025

When you run a large enough Infrastructure failure is inevitable. How you handle that can be a big differentiator. With VMware Cloud on AWS, the hosts are monitored 24×7 by VMware/AWS Support all as part of the service. If you pay for X number of hosts you should have X. That includes during maintenance and…

  * [ ![Time in a VMC Environment](https://jameskilby.co.uk/wp-content/uploads/2025/02/Picture-1-e1768509620339-768x193.png) ](https://jameskilby.co.uk/2025/12/time-in-a-vmc-environment/)

[VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [Time in a VMC Environment](https://jameskilby.co.uk/2025/12/time-in-a-vmc-environment/)

By[James](https://jameskilby.co.uk) December 8, 2025January 17, 2026

One of the nice things about the VMC Service is that you dont have to worry about a number of the traditional infrastructure services that you typically obsess over when your running your own infrastructure. One of those is Time…. A key requirement for any enterprise platform. Time VMC allows you to utilise the Amazon…

  * [ ![Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/wp-content/uploads/2025/07/semaphore-768x768.png) ](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)

[Ansible](https://jameskilby.co.uk/category/ansible/) | [Homelab](https://jameskilby.co.uk/category/homelab/)

### [Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)

By[James](https://jameskilby.co.uk) September 2, 2025December 18, 2025

I recently stumbled across Semaphore, which is essentially a frontend for managing DevOps tooling, including Ansible, Terraform, OpenTofu, and PowerShell. It’s easy to deploy in Docker, and I am slowly moving more of my homelab management over to it. Introduction This is a guide to show you how to get up and running easily with…

  * [ ![VMware Certified Master Specialist HCI 2020](https://jameskilby.co.uk/wp-content/uploads/2020/09/vmware_SP_HCI20.png) ](https://jameskilby.co.uk/2020/09/vmware-certified-master-specialist-hci-2020/)

[Personal](https://jameskilby.co.uk/category/personal/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [VMware Certified Master Specialist HCI 2020](https://jameskilby.co.uk/2020/09/vmware-certified-master-specialist-hci-2020/)

By[James](https://jameskilby.co.uk) September 13, 2020November 11, 2023

I recently sat (and passed the VMware HCI Master Specialist exam (5V0-21.20). I won’t go into any details of the contents but I will comment that I felt the questions were fair and that there wasn’t anything in it to trip you up. The required knowledge was certainly wider than the vSAN specialist exam. This…

  * [ ![VMware – Going out with a Bang!](https://jameskilby.co.uk/wp-content/uploads/2023/10/rnli-logo-768x384.png) ](https://jameskilby.co.uk/2023/10/going-out-with-a-bang/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [Personal](https://jameskilby.co.uk/category/personal/)

### [VMware – Going out with a Bang!](https://jameskilby.co.uk/2023/10/going-out-with-a-bang/)

By[James](https://jameskilby.co.uk) October 7, 2023November 17, 2023

There is a lot of uncertainty with VMware at the moment. This is all due to the pending acquisition by Broadcom. There are a lot of unknowns for the staff and customers about what the company will look like in the future. I certainly have some concerns mainly just with the unknown. However, VMware has…

  * [ ![Advanced Deploy VMware vSphere 7.x 3V0-22.21N](https://jameskilby.co.uk/wp-content/uploads/2023/11/image.png) ](https://jameskilby.co.uk/2023/11/advanced-deploy-vmware-vsphere-7-x-3v0-22-21n/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [Personal](https://jameskilby.co.uk/category/personal/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [Advanced Deploy VMware vSphere 7.x 3V0-22.21N](https://jameskilby.co.uk/2023/11/advanced-deploy-vmware-vsphere-7-x-3v0-22-21n/)

By[James](https://jameskilby.co.uk) November 10, 2023November 17, 2023

Yesterday I sat and passed the above exam. It had been on my todo list for a good number of years. With the current pause in the Broadcom VMware takeover deal. I had some downtime and decided to use one of the three exam vouchers VMware give me each year. This upgrades me to a…