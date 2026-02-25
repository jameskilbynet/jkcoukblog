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
  - VMware Cloud on AWS
  - vSphere
  - Homelab
  - AWS
  - Veeam
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

  * [ ![VMware Certified Master Specialist HCI 2020](https://jameskilby.co.uk/wp-content/uploads/2020/09/vmware_SP_HCI20.png) ](https://jameskilby.co.uk/2020/09/vmware-certified-master-specialist-hci-2020/)

[Personal](https://jameskilby.co.uk/category/personal/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [VMware Certified Master Specialist HCI 2020](https://jameskilby.co.uk/2020/09/vmware-certified-master-specialist-hci-2020/)

By[James](https://jameskilby.co.uk) September 13, 2020November 11, 2023

I recently sat (and passed the VMware HCI Master Specialist exam (5V0-21.20). I won’t go into any details of the contents but I will comment that I felt the questions were fair and that there wasn’t anything in it to trip you up. The required knowledge was certainly wider than the vSAN specialist exam. This…

  * [ ![Time in a VMC Environment](https://jameskilby.co.uk/wp-content/uploads/2025/02/Picture-1-e1768509620339-768x193.png) ](https://jameskilby.co.uk/2025/12/time-in-a-vmc-environment/)

[VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [Time in a VMC Environment](https://jameskilby.co.uk/2025/12/time-in-a-vmc-environment/)

By[James](https://jameskilby.co.uk) December 8, 2025February 1, 2026

How to use the Amazon Time Sync Service in a VMC environment

  * [ ![Advanced Deploy VMware vSphere 7.x 3V0-22.21N](https://jameskilby.co.uk/wp-content/uploads/2023/11/image.png) ](https://jameskilby.co.uk/2023/11/advanced-deploy-vmware-vsphere-7-x-3v0-22-21n/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [Personal](https://jameskilby.co.uk/category/personal/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [Advanced Deploy VMware vSphere 7.x 3V0-22.21N](https://jameskilby.co.uk/2023/11/advanced-deploy-vmware-vsphere-7-x-3v0-22-21n/)

By[James](https://jameskilby.co.uk) November 10, 2023November 17, 2023

Yesterday I sat and passed the above exam. It had been on my todo list for a good number of years. With the current pause in the Broadcom VMware takeover deal. I had some downtime and decided to use one of the three exam vouchers VMware give me each year. This upgrades me to a…

  * [ ![Lab Update – Compute](https://jameskilby.co.uk/wp-content/uploads/2023/04/IMG_4536-scaled-1-768x1024.jpg) ](https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Lab Update – Compute](https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/)

By[James](https://jameskilby.co.uk) January 6, 2022February 16, 2026

Quite a few changes have happened in the lab recently. so I decided to do a multipart blog on the changes. The refresh was triggered by the purchase of a SuperMicro Server (2027TR-H71FRF) chassis with 4x X9DRT Nodes / Blades. This is known as a BigTwin configuration in SuperMicro parlance. This is something I was…

  * [ ![Forcing an Upgrade to vSphere 8](https://jameskilby.co.uk/wp-content/uploads/2022/12/Screenshot-2022-12-14-at-21.45.23.png) ](https://jameskilby.co.uk/2022/12/forcing-an-upgrade-to-vsphere-8/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [Forcing an Upgrade to vSphere 8](https://jameskilby.co.uk/2022/12/forcing-an-upgrade-to-vsphere-8/)

By[James](https://jameskilby.co.uk) December 14, 2022October 1, 2025

I run a reasonably extensive homelab that is of course built around the VMware ecosystem. So with the release of vSphere 8 I was obviously going to upgrade however a few personal things blocked me from doing it until now. The vCenter upgrade was smooth however knowing that some of the hardware I am running…

  * [VMware](https://jameskilby.co.uk/category/vmware/) | [AWS](https://jameskilby.co.uk/category/aws/) | [Veeam](https://jameskilby.co.uk/category/veeam/)

### [Monitoring VMC – Part 1](https://jameskilby.co.uk/2019/12/monitoring-vmc-part-1/)

By[James](https://jameskilby.co.uk) December 17, 2019October 1, 2025

As previously mentioned I have been working a lot with VMware Cloud on AWS and one of the questions that often crops up is around an approach to monitoring. This is an interesting topic as VMC is technically “as a service” therefore the monitoring approach is a bit different. Technically AWS and VMware’s SRE teams…