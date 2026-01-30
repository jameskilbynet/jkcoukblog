---
title: "Runecast Remediation Script’s"
description: "Using Runecast to autogenerate PowerCLI to remediate discovered issues"
date: 2023-05-16T10:38:45+00:00
modified: 2023-11-17T15:28:57+00:00
author: James Kilby
categories:
  - Runecast
  - VMware
  - Personal
  - Homelab
  - Storage
  - vExpert
  - Automation
  - Networking
  - Hosting
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

  * [ ![VMware – Going out with a Bang!](https://jameskilby.co.uk/wp-content/uploads/2023/10/rnli-logo-768x384.png) ](https://jameskilby.co.uk/2023/10/going-out-with-a-bang/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [Personal](https://jameskilby.co.uk/category/personal/)

### [VMware – Going out with a Bang!](https://jameskilby.co.uk/2023/10/going-out-with-a-bang/)

By[James](https://jameskilby.co.uk) October 7, 2023November 17, 2023

There is a lot of uncertainty with VMware at the moment. This is all due to the pending acquisition by Broadcom. There are a lot of unknowns for the staff and customers about what the company will look like in the future. I certainly have some concerns mainly just with the unknown. However, VMware has…

  * [ ![Intel Optane NVMe Homelab](https://jameskilby.co.uk/wp-content/uploads/2023/04/intel_optane_ssd_900p_series_aic_-_right_angle_575px.png) ](https://jameskilby.co.uk/2023/04/intel-optane/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [vExpert](https://jameskilby.co.uk/category/vexpert/)

### [Intel Optane NVMe Homelab](https://jameskilby.co.uk/2023/04/intel-optane/)

By[James](https://jameskilby.co.uk) April 17, 2023October 1, 2025

I have been a VMware vExpert for many years and it has brought me many many benefits over the years. I don’t think it’s an understatement to say I probably wouldn’t have my current role within VMware without it. One of the best benefits has been access to a huge amount of licences for VMware…

  * [ ![Template Deployment with Packer](https://jameskilby.co.uk/wp-content/uploads/2021/01/logo_packer.png) ](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

[Automation](https://jameskilby.co.uk/category/automation/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Template Deployment with Packer](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

By[James](https://jameskilby.co.uk) January 21, 2021December 8, 2025

Packer is one of those tools I have heard about, and some of the cool people on Twitter that I follow have been using it for a while. But until now I had never played with it. That was until I saw the below tweet by the legend that is William Lam That was the…

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Networking](https://jameskilby.co.uk/category/networking/)

### [Lab Update – Part 3 Network](https://jameskilby.co.uk/2022/01/lab-update-part-3-network/)

By[James](https://jameskilby.co.uk) January 6, 2022October 1, 2025

I have retired the WatchGuard Devices with the migration to PFSense running bare-metal in one of the Supermicro Nodes. I will likely virtualise this in the future. In terms of network/switching I have moved to an intermediate step here vMotion and Storage are running over DAC’s while VMware management and VM traffic is still over…

  * [ ![Starlink](https://jameskilby.co.uk/wp-content/uploads/2022/10/spacexs-starlink-to-supply-free-satellite-internet-to-famili_u44u.1920-768x432.jpg) ](https://jameskilby.co.uk/2022/10/starlink/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [Starlink](https://jameskilby.co.uk/2022/10/starlink/)

By[James](https://jameskilby.co.uk) October 11, 2022October 1, 2025

Since moving to Dorset last year internet connectivity has been the bane of my existence. Currently, I have an ADSL connection provided by my old employer Zen and a 5G connection provided by Three. These are both plumbed into my WatchGuard Firewall with multi-wan configured. Most of the time the usability is ok but there…

  * [ ![Lab Storage](https://jameskilby.co.uk/wp-content/uploads/2023/04/81-ZoEW24UL._SL1500_-768x461.jpg) ](https://jameskilby.co.uk/2019/02/lab-storage-2/)

[Homelab](https://jameskilby.co.uk/category/homelab/)

### [Lab Storage](https://jameskilby.co.uk/2019/02/lab-storage-2/)

By[James](https://jameskilby.co.uk) February 10, 2019July 10, 2024

Lab Storage Update. Since starting my new role with Xtravirt my Homelab has gone through several fairly significant changes. At the moment it’s very much focused on the VMware stack and one of the things I needed was some more storage and especially some more storage performance. With that in mind, I purchased a new Synology…