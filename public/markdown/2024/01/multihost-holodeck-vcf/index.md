---
title: "MultiHost Holodeck VCF"
description: "MultiHost Holodeck VCF offers insights on deploying VMware Holodeck across multiple hosts. Learn more about the setup and specifications today!"
date: 2024-01-17T17:29:38+00:00
modified: 2026-01-18T21:41:39+00:00
author: James Kilby
categories:
  - VMware
  - VCF
  - AWS
  - Veeam
  - VMware Cloud on AWS
  - Runecast
  - Automation
  - Homelab
tags:
  - #Holodeck
  - #MultiHost
  - #VCF
  - #VMware
url: https://jameskilby.co.uk/2024/01/multihost-holodeck-vcf/
image: https://jameskilby.co.uk/wp-content/uploads/2023/12/Holodeck-Overview.png
---

![](https://jameskilby.co.uk/wp-content/uploads/2023/12/Holodeck-Overview.png)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VCF](https://jameskilby.co.uk/category/vmware/vcf/)

# MultiHost Holodeck VCF

By[James](https://jameskilby.co.uk) January 17, 2024January 18, 2026 • 📖4 min read(891 words)

📅 **Published:** January 17, 2024• **Updated:** January 18, 2026

Disclaimer: This is **not** a supported configuration by the Holodeck team please don’t reach out to them for help. As of today the only way to run Holodeck and receive support is to do it on a single compute node.

## Table of Contents

The [VCF Holodeck](https://core.vmware.com/introducing-holodeck-toolkit) toolkit is an excellent tool for learning not just VCF but a lot of technology that can be run on top of it. e.g. HCX, Tanzu vRA etc. Several guides have been written to assist with that.

However, the downside is that you need a single large fast vSphere host to run it on. The minimum specs are listed below for a few different configuration options. This shouldn’t be a challenge for a company or partner to provide but as a homelab enthusiast, this was always going to be a challenge. Many folks I know can cover the below resource requirements with the homelab they have. But the challenge is doing this with a single node. This was also going to be an issue for me. Therefore I needed to come up with a plan to make this work across at least 2 hosts….

## Holodeck recommended specifications

Minimum Hardware (1 env)| Recommended Hardware (2 envs)| Recommended Hardware (3-5 envs)  
---|---|---  
VCF Consolidated  | VCF Standard (MGMT + WLD) | VCF Standard (MGMT + WLD)  
2 sockets – Total 16 cores | 2 sockets – Total 32 core | 2 sockets – Total 64 cores  
384 GB RAM | 1024 GB RAM | 1.5 TB RAM  
3.5 TB SSD Disk | 2 – 3.5 TB SSD Disk | 4 – 3.5TB SSD Disks  
  
I was planning to use two of my existing Supermicro hosts that were already connected to my vCenter. They each have 2x Intel Xeon CPU E5-2670 @ 2.60GHz with 192GB of RAM each. The combined resources should be enough to run Holodeck and experiment with other toolsets on top. All of the storage is to be presented by my [TrueNas](https://jameskilby.co.uk/lab/) setup.

## Networking

Both hosts were originally connected through a DVSwitch and 2x25Gb/s physical adaptors. To change the configuration for Holodeck I removed one of the adaptors in each host from the DVswitch. I then followed the Holodeck guide and configured the standard switch as required on each host. I then added the unused 25Gb/s adaptor to the standard switch and then physically connected the two hosts with a short DAC cable as seen below.

![](https://jameskilby.co.uk/wp-content/uploads/2024/01/IMG_5286-1-1024x996.jpeg)Physical Network ![](https://jameskilby.co.uk/wp-content/uploads/2024/01/Standard-Switch-1024x299.png)Standard Switch configuration

## DNS

Holodeck can be deployed either directly to an ESX Host or through a vCenter. As my VC and Hosts are part of the jameskilby.cloud domain I needed to ensure that the private IPs were being returned to the Holodeck Console VM for deployment. This can be handled in several ways however I believe the most elegant is to edit the holohosts.txt file on the HoloBuilder VM. This host file is copied over to the HoloConsole VM as part of the deployment and therefore the builder can always resolve the correct IP’s irrespective of the state of the DNS on the CloudBuilder/HoloConsole VM.

The file is located at
    
    
    C:\Users\Administrator\Downloads\holodeck-standard-main2.0\holodeck-standard-main\Holo-Console\holohosts.txt

📋 Copy

I have added these values for my VC and the 2 Hosts that will be used as seen below.
    
    
    # Enter physical hosts or vCenter Server instances supporting Holodeck Deployment below
    
    10.203.42.1 w4-hs6-i1209.eng.vmware.com
    192.168.38.19 uk-poo-p-vc-1.jameskilby.cloud
    192.168.38.20 uk-bhr-p-esx-a.jameskilby.cloud
    192.168.38.21 uk-bhr-p-esx-b.jameskilby.cloud
    
    # Remaining entries are used for standardized Holdeck deployment
    10.0.0.101  esxi-1.vcf.sddc.lab 
    10.0.0.102  esxi-2.vcf.sddc.lab 
    10.0.0.103  esxi-3.vcf.sddc.lab 
    10.0.0.104  esxi-4.vcf.sddc.lab 
    10.0.0.4 sddc-manager.vcf.sddc.lab
    10.0.0.12 vcenter-mgmt.vcf.sddc.lab
    10.0.0.20 nsx-mgmt.vcf.sddc.lab 
    10.60.0.150 vrslcm.vcf.sddc.lab
    10.60.0.151 ws1.vcf.sddc.lab 
    10.60.0.170 vra.vcf.sddc.lab 
    10.0.0.150 kubeapi.vcf.sddc.lab 
    10.0.20.101  esxi-1.vcf2.sddc.lab 
    10.0.20.102  esxi-2.vcf2.sddc.lab 
    10.0.20.103  esxi-3.vcf2.sddc.lab 
    10.0.20.104  esxi-4.vcf2.sddc.lab 
    10.0.20.4 sddc-manager.vcf2.sddc.lab
    10.0.20.12 vcenter-mgmt.vcf2.sddc.lab
    10.0.20.20 nsx-mgmt.vcf2.sddc.lab 
    10.60.20.150 vrslcm.vcf2.sddc.lab
    10.60.20.151 ws1.vcf2.sddc.lab 
    10.60.20.170 vra.vcf2.sddc.lab 
    10.0.20.150 kubeapi.vcf2.sddc.lab 
    

📋 Copy

## vCenter Configuration

As I was deploying to a preexisting cluster I needed to make some small changes before Holodeck would deploy.

HA needs to be disabled and DRS either needs to be off or partially automated. I never like switching DRS off ( if you’ve ever used vCloud Director you will know why) so I went with partially automated.

## CPU/EVC config

The last step I personally needed to do (and I suspect this is due to the age of the CPUs in my hosts) was to disable EVC. I would suggest attempting to deploy with this in place and only turning it off if required.

I will detail some of the other fixes I needed specifically due to my CPU age in a separate [blog. ](https://jameskilby.co.uk/2024/01/holodeck-cpu-fixes/)

## Holodeck deployment

With these fixes in place, it was time to run the VLCGui Powershell file.

As you can see below this was pointed at my VC with the cluster used for deployment highlighted.

![](https://jameskilby.co.uk/wp-content/uploads/2024/01/Screenshot-2024-01-19-at-09.08.41-1-1024x545.png)

## Success

With the above in place the full deployment of the 7 vSphere hosts. NSX managers & Edges plus Tanzu is done in 4hr 11 Mins.

![](https://jameskilby.co.uk/wp-content/uploads/2024/01/Screenshot-2024-01-17-at-15.39.41-1024x549.png)Successful Deployment

## Deployment Notes

A few things that catch people out specifically with Holodeck. The first is if you happen to restart the HoloConsole VM before VCF deployment it loses a route. This is by design. When VCF is stood up all external network access is done through the CloudBuilder VM. To fix this run this at the command line on the HoloConsole VM
    
    
    route add 0.0.0.0 mask 0.0.0.0 10.0.0.1

📋 Copy

Another point of note. The CPU’s in my hosts were identical. If you have different generation Intel CPU’s or a mix of AMD/Intel then further consideration is likely to be required.

## 📚 Related Posts

  * [Using Content Libraries in VMC to deploy software faster](https://jameskilby.co.uk/2026/01/using-content-libraries-in-vmc-to-deploy-software-faster/)
  * [vSAN Cluster Shutdown &#8211; Orchestration](https://jameskilby.co.uk/2025/12/vsan-cluster-shutdown/)
  * [An in-depth look at VMware Cloud on AWS hosts](https://jameskilby.co.uk/2025/08/vmc-host-deepdive/)

## Similar Posts

  * [VMware](https://jameskilby.co.uk/category/vmware/) | [AWS](https://jameskilby.co.uk/category/aws/) | [Veeam](https://jameskilby.co.uk/category/veeam/)

### [Monitoring VMC – Part 1](https://jameskilby.co.uk/2019/12/monitoring-vmc-part-1/)

By[James](https://jameskilby.co.uk) December 17, 2019October 1, 2025

As previously mentioned I have been working a lot with VMware Cloud on AWS and one of the questions that often crops up is around an approach to monitoring. This is an interesting topic as VMC is technically “as a service” therefore the monitoring approach is a bit different. Technically AWS and VMware’s SRE teams…

  * [ ![VMC Quick Sizing Guide](https://jameskilby.co.uk/wp-content/uploads/2025/02/Picture-1-e1768509620339-768x193.png) ](https://jameskilby.co.uk/2025/05/vmc-quick-sizing-guide/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [VMC Quick Sizing Guide](https://jameskilby.co.uk/2025/05/vmc-quick-sizing-guide/)

By[James](https://jameskilby.co.uk) May 21, 2025July 2, 2025

Quick reference guide to the available storage resources that you get in VMware Cloud on AWS

  * [ ![An in-depth look at VMware Cloud on AWS hosts](https://jameskilby.co.uk/wp-content/uploads/2025/02/Picture-1-e1768509620339-768x193.png) ](https://jameskilby.co.uk/2025/08/vmc-host-deepdive/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [An in-depth look at VMware Cloud on AWS hosts](https://jameskilby.co.uk/2025/08/vmc-host-deepdive/)

By[James](https://jameskilby.co.uk) August 14, 2025January 18, 2026

This is single page intended to collate every single feature of the current VMware Cloud on AWS hosts for easy comparison. All of this data Is publicly available. I have just collated into a single page I3 I3en I4i CPU Processor Name Intel Xeon E5-2686 v4 Intel Xeon Platinum 8175 Intel Xeon 8375c No of…

  * [ ![Runecast Remediation Script’s](https://jameskilby.co.uk/wp-content/uploads/2023/05/Runecast-Solutions-Ltd.png) ](https://jameskilby.co.uk/2023/05/runecast-remediation-scripts/)

[Runecast](https://jameskilby.co.uk/category/runecast/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Runecast Remediation Script’s](https://jameskilby.co.uk/2023/05/runecast-remediation-scripts/)

By[James](https://jameskilby.co.uk) May 16, 2023November 17, 2023

I am a huge fan of the Runecast product and luckily as a vExpert they give out NFR licences for my lab. One of the really cool features I wanted to mention today was the remediation script function. I have been playing with storage a lot in my lab recently as part of a wider…

  * [ ![Template Deployment with Packer](https://jameskilby.co.uk/wp-content/uploads/2021/01/logo_packer.png) ](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

[Automation](https://jameskilby.co.uk/category/automation/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Template Deployment with Packer](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

By[James](https://jameskilby.co.uk) January 21, 2021December 8, 2025

Packer is one of those tools I have heard about, and some of the cool people on Twitter that I follow have been using it for a while. But until now I had never played with it. That was until I saw the below tweet by the legend that is William Lam That was the…

  * [ ](https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Lab Update – Compute](https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/)

By[James](https://jameskilby.co.uk) January 6, 2022July 10, 2024

Quite a few changes have happened in the lab recently. so I decided to do a multipart blog on the changes. The refresh was triggered by the purchase of a SuperMicro Server (2027TR-H71FRF) chassis with 4x X9DRT Nodes / Blades. This is known as a BigTwin configuration in SuperMicro parlance. This is something I was…