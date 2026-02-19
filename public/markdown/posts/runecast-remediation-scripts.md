---
title: "Runecast Remediation Script’s"
description: "Using Runecast to autogenerate PowerCLI to remediate discovered issues"
date: 2023-05-16T10:38:45+00:00
modified: 2023-11-17T15:28:57+00:00
author: James Kilby
categories:
  - Runecast
  - VMware
  - Mikrotik
  - Networking
  - Homelab
  - Storage
  - Synology
  - VMware Cloud on AWS
  - Ansible
  - Artificial Intelligence
  - Containers
  - Devops
  - NVIDIA
  - Traefik
  - TrueNAS Scale
tags:
  - #Homelab
  - #PowerCLI
  - #Runecast
  - #VMware
url: https://jameskilby.co.uk/2023/05/runecast-remediation-scripts/
image: https://jameskilby.co.uk/wp-content/uploads/2023/05/Runecast-Solutions-Ltd.png
---

![](https://jameskilby.co.uk/wp-content/uploads/2023/05/Runecast-Solutions-Ltd.png)

[Runecast](https://jameskilby.co.uk/category/runecast/) | [VMware](https://jameskilby.co.uk/category/vmware/)

# Runecast Remediation Script’s

By[James](https://jameskilby.co.uk) May 16, 2023November 17, 2023 • 📖2 min read(442 words)

📅 **Published:** May 16, 2023• **Updated:** November 17, 2023

I am a huge fan of the Runecast product and luckily as a vExpert they give out NFR licences for my lab. One of the really cool features I wanted to mention today was the remediation script function. 

I have been playing with storage a lot in my lab recently as part of a wider storage migration piece but also as part of testing Intel Optane drives. Runecast flagged up that I didn’t have Storage I/O Control enabled for these data stores. It gave a great overview of what that issue means:

It is a good practice to enable SIOC, especially in environments where storage is overutilized. SIOC monitors the latency of I/Os to data stores at each ESX host sharing that device. When the average normalized datastore latency exceeds a set threshold (30ms by default), the datastore is considered to be congested, and SIOC kicks in to distribute the available storage resources to virtual machines in proportion to their shares. This is to ensure that low-priority workloads do not monopolize or reduce I/O bandwidth for high-priority workloads.

But the issue I want to highlight is it will generate the code to resolve it for you. 

If I drill into the specific issue I get the below view

![](https://jameskilby.co.uk/wp-content/uploads/2023/05/Screenshot-2023-05-16-at-11.31.30-1024x536.png)

Here you can confirm the discovered issue and the remediation action. ( I have chosen not to enable SIOC on my ISO-NFS datastore)

The below code is what Runecast generated for me.
    
    
    # Automatically generated action. Always review before executing.
    
    # Start of the section for Enabling of Storage IO control on datastore
    # This action is going to be performed on the following Datastores: "Optane-iSCSI"
    
    Write-Host "`n[RCA] Connecting to vCenter Server "uk-poo-p-vc-1.jameskilby.cloud"..." -ForegroundColor Cyan
    $vcConnection = Connect-VIServer -Server "uk-poo-p-vc-1.jameskilby.cloud"
    
    $datastoreIds = "Datastore-datastore-50097"
    
    foreach($datastoreId in $datastoreIds) 
    {
        try 
        {
            $ds = Get-Datastore -Id $datastoreId -ErrorAction Stop
            Write-Host "`n[RCA] Reconfiguring datastore with current name $($ds.name)" -ForegroundColor Yellow
            Write-Host "`n[RCA] Enabling Storage I/O Control" -ForegroundColor Yellow
            $ds | Set-Datastore -StorageIOControlEnabled $true -ErrorAction Stop | Format-Table name,Id,StorageIOControlEnabled
            
        }
        catch 
        {
            Write-Host "`n[RCA] Datastore with ID $datastoreId was not found or the reconfiguration failed" -ForegroundColor Red
        }
        
    }
    
    Write-Host "`n[RCA] Disconnecting from vCenter Server "uk-poo-p-vc-1.jameskilby.cloud"..." -ForegroundColor Cyan
    Disconnect-VIServer $vcConnection -Confirm:$false
    
    # End of the section for Enabling of Storage IO control on datastore

📋 Copy

Dropping this into a PowerCLI session we get….
    
    
    [RCA] Connecting to vCenter Server  uk-poo-p-vc-1.jameskilby.cloud...
    
    Specify Credential
    Please specify server credential
    User: administrator@vsphere.cloud
    Password for user administrator@vsphere.cloud: ************
    
    
    [RCA] Reconfiguring datastore with current name Optane-iSCSI
    
    [RCA] Enabling Storage I/O Control
    
    Name         Id                        StorageIOControlEnabled
    ----         --                        -----------------------
    Optane-iSCSI Datastore-datastore-50097                    True
    
    
    [RCA] Disconnecting from vCenter Server  uk-poo-p-vc-1.jameskilby.cloud...
    PS /Users/w20kilja> 

📋 Copy

What an amazing little feature

## Similar Posts

  * [ ![CRS-504](https://jameskilby.co.uk/wp-content/uploads/2024/09/s-l1600-768x427.jpg) ](https://jameskilby.co.uk/2024/09/home-network-upgrade/)

[Mikrotik](https://jameskilby.co.uk/category/mikrotik/) | [Networking](https://jameskilby.co.uk/category/networking/)

### [Home Network Upgrade](https://jameskilby.co.uk/2024/09/home-network-upgrade/)

By[James](https://jameskilby.co.uk) September 9, 2024October 24, 2025

My journey to superfast networking in my homelab

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [Synology](https://jameskilby.co.uk/category/synology/)

### [Lab Storage](https://jameskilby.co.uk/2018/01/lab-storage/)

By[James](https://jameskilby.co.uk) January 6, 2018July 10, 2024

I have been meaning to post around some of the lab setup for a while. Although it changes frequently at present it’s as below. I will add some pics when I have tidied up the lab/cables My primary lab storage is all contained within an HP Gen8 Microserver. Currently Configured: 1x INTEL Core i3-4130 running at…

  * [ ![Lab Storage](https://jameskilby.co.uk/wp-content/uploads/2023/04/81-ZoEW24UL._SL1500_-768x461.jpg) ](https://jameskilby.co.uk/2019/02/lab-storage-2/)

[Homelab](https://jameskilby.co.uk/category/homelab/)

### [Lab Storage](https://jameskilby.co.uk/2019/02/lab-storage-2/)

By[James](https://jameskilby.co.uk) February 10, 2019July 10, 2024

Lab Storage Update. Since starting my new role with Xtravirt my Homelab has gone through several fairly significant changes. At the moment it’s very much focused on the VMware stack and one of the things I needed was some more storage and especially some more storage performance. With that in mind, I purchased a new Synology…

  * [ ![VMC Host Errors](https://jameskilby.co.uk/wp-content/uploads/2022/11/iu-1-768x395.png) ](https://jameskilby.co.uk/2020/09/vmc-host-errors/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [VMC Host Errors](https://jameskilby.co.uk/2020/09/vmc-host-errors/)

By[James](https://jameskilby.co.uk) September 15, 2020February 9, 2026

Lean how host failures are handled within VMC

  * [ ![Automating the deployment of my Homelab AI  Infrastructure](https://jameskilby.co.uk/wp-content/uploads/2026/01/VMware-NVIDIA-logos_ee2f18dc-615d-4c9e-8f11-9c3c2ce2bf37-prv-768x432.png) ](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)

[Ansible](https://jameskilby.co.uk/category/ansible/) | [Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Containers](https://jameskilby.co.uk/category/containers/) | [Devops](https://jameskilby.co.uk/category/devops/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [NVIDIA](https://jameskilby.co.uk/category/nvidia/) | [Traefik](https://jameskilby.co.uk/category/traefik/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Automating the deployment of my Homelab AI Infrastructure](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)

By[James](https://jameskilby.co.uk) February 9, 2026February 9, 2026

Learn how to use Ansible to configure an Ubuntu VM for use with NVIDIA based AI workloads in vSphere

  * [ ![Can you really squeeze 96TB in 1U ?](https://jameskilby.co.uk/wp-content/uploads/2024/09/QuantaGrid-SD1Q-1ULH-Front-Three-Quarter.png) ](https://jameskilby.co.uk/2024/09/can-you-really-squeeze-96tb-in-1u/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [TrueNAS Scale](https://jameskilby.co.uk/category/truenas-scale/)

### [Can you really squeeze 96TB in 1U ?](https://jameskilby.co.uk/2024/09/can-you-really-squeeze-96tb-in-1u/)

By[James](https://jameskilby.co.uk) September 12, 2024January 28, 2026

Yes, that’s a clickbait title. But technically it’s possible if I dropped all drive redundancy… I recently saw an advert for a server that was just too good to be true. It promised to bring a huge amount of storage and future options in a quite hard-to-believe 1U. The price it was on offer for…