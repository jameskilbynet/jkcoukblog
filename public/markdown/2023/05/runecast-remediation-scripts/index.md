---
title: "Runecast Remediation Script’s"
description: "Using Runecast to autogenerate PowerCLI to remediate discovered issues"
date: 2023-05-16T10:38:45+00:00
modified: 2023-11-17T15:28:57+00:00
author: James Kilby
categories:
  - Runecast
  - VMware
  - Docker
  - Homelab
  - Hosting
  - Kubernetes
  - Personal
  - Nutanix
  - vSphere
  - Storage
  - Synology
  - VCF
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

  * [ ![Use Portainer in a Homelab with GitHub](https://jameskilby.co.uk/wp-content/uploads/2022/12/22225832.png) ](https://jameskilby.co.uk/2022/12/use-portainer-in-a-homelab-with-github/)

[Docker](https://jameskilby.co.uk/category/docker/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Kubernetes](https://jameskilby.co.uk/category/kubernetes/)

### [Use Portainer in a Homelab with GitHub](https://jameskilby.co.uk/2022/12/use-portainer-in-a-homelab-with-github/)

By[James](https://jameskilby.co.uk) December 9, 2022October 1, 2025

Late to the party or not, I have been using containers in my lab more and more and that has led me to Portainer…. I use it for managing the docker containers on my Synology but it can also be used for managing lots of other things. In their own words “Portainer accelerates container adoption….

  * [ ![VMware Certified Master Specialist HCI 2020](https://jameskilby.co.uk/wp-content/uploads/2020/09/vmware_SP_HCI20.png) ](https://jameskilby.co.uk/2020/09/vmware-certified-master-specialist-hci-2020/)

[Personal](https://jameskilby.co.uk/category/personal/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [VMware Certified Master Specialist HCI 2020](https://jameskilby.co.uk/2020/09/vmware-certified-master-specialist-hci-2020/)

By[James](https://jameskilby.co.uk) September 13, 2020November 11, 2023

I recently sat (and passed the VMware HCI Master Specialist exam (5V0-21.20). I won’t go into any details of the contents but I will comment that I felt the questions were fair and that there wasn’t anything in it to trip you up. The required knowledge was certainly wider than the vSAN specialist exam. This…

  * [ ![New Nodes](https://jameskilby.co.uk/wp-content/uploads/2024/07/IMG_6629-768x149.jpeg) ](https://jameskilby.co.uk/2024/07/new-nodes/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Nutanix](https://jameskilby.co.uk/category/nutanix/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [New Nodes](https://jameskilby.co.uk/2024/07/new-nodes/)

By[James](https://jameskilby.co.uk) July 2, 2024January 18, 2026

I recently decided to update some of my homelab hosts and I managed to do this at very little cost by offloading 2 of my Supermicro e200’s to fellow vExpert Paul. The below post describes what I bought why and how I have configured it. Table of Contents Node Choice Bill of Materials Rescue IPMI…

  * [ ![Forcing an Upgrade to vSphere 8](https://jameskilby.co.uk/wp-content/uploads/2022/12/Screenshot-2022-12-14-at-21.45.23.png) ](https://jameskilby.co.uk/2022/12/forcing-an-upgrade-to-vsphere-8/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [Forcing an Upgrade to vSphere 8](https://jameskilby.co.uk/2022/12/forcing-an-upgrade-to-vsphere-8/)

By[James](https://jameskilby.co.uk) December 14, 2022October 1, 2025

I run a reasonably extensive homelab that is of course built around the VMware ecosystem. So with the release of vSphere 8 I was obviously going to upgrade however a few personal things blocked me from doing it until now. The vCenter upgrade was smooth however knowing that some of the hardware I am running…

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [Synology](https://jameskilby.co.uk/category/synology/)

### [Lab Storage](https://jameskilby.co.uk/2018/01/lab-storage/)

By[James](https://jameskilby.co.uk) January 6, 2018July 10, 2024

I have been meaning to post around some of the lab setup for a while. Although it changes frequently at present it’s as below. I will add some pics when I have tidied up the lab/cables My primary lab storage is all contained within an HP Gen8 Microserver. Currently Configured: 1x INTEL Core i3-4130 running at…

  * [ ![MultiHost Holodeck VCF](https://jameskilby.co.uk/wp-content/uploads/2023/12/Holodeck-Overview.png) ](https://jameskilby.co.uk/2024/01/multihost-holodeck-vcf/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VCF](https://jameskilby.co.uk/category/vmware/vcf/)

### [MultiHost Holodeck VCF](https://jameskilby.co.uk/2024/01/multihost-holodeck-vcf/)

By[James](https://jameskilby.co.uk) January 17, 2024January 18, 2026

How to Deploy VMware Holodeck on multiple hosts