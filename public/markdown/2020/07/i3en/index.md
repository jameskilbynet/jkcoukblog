---
title: "VMC New Host -i3en"
description: "VMC on AWS, I3en host the"
date: 2020-07-02T22:01:39+00:00
modified: 2024-07-10T09:28:48+00:00
author: James Kilby
categories:
  - VMware
  - VMware Cloud on AWS
  - Personal
  - Homelab
  - vSphere
  - vSAN
  - Networking
  - Storage
tags:
  - #VMC
  - #VMware Cloud on AWS
url: https://jameskilby.co.uk/2020/07/i3en/
image: https://jameskilby.co.uk/wp-content/uploads/2022/11/iu-1-1024x526.png
---

![](https://jameskilby.co.uk/wp-content/uploads/2022/11/iu-1.png)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

# VMC New Host -i3en

By[James](https://jameskilby.co.uk) July 2, 2020July 10, 2024 • 📖2 min read(413 words)

📅 **Published:** July 02, 2020• **Updated:** July 10, 2024

VMware Cloud on AWS (VMC) has introduced a new host to its lineup the “i3en”. This is based on the i3en.metal AWS instance.

The specifications are certainly impressive packing in 96 logical cores, 768GiB RAM, and approximately 45.84 TiB of NVMe raw storage capacity per host.

It’s certainly a monster with a 266% uplift in CPU, a 50% increase in RAM and a whopping 440% increase in raw storage per host compared to the i3. Most of the engagements I have worked on so far have discovered that they are storage limited requiring extra hosts to handle the required storage footprint. With such a big uplift in Storage capacity hopefully, this will trend towards filling up CPU, RAM & Storage at the same time. This is the panacea of Hyperconvergence.

The other two noticeable changes are that the processor is based on a much later Intel family. It is now based on 3.1 GHz all-core turbo Intel® Xeon® Scalable (Skylake) processors. This is a much more modern processor than the Broadwell’s in the original i3. This brings several processor extension improvements including Intel AVX, Intel AVX2, Intel AVX-512

The other noticeable change is the networking uplift with 100Gb/s available to each host.

Model|  pCPU| Memory GiB| Networking Gbps| Storage TB| AWS Host Pricing (On-demand in US-East-2 Ohio)  
---|---|---|---|---|---  
i3.metal| 36*| 512| 25| 8×1.9| $5.491  
i3en.metal| 96| 768| 100| 8×7.5| $11.933  
  
*The i3.metal instance, when used with VMware Cloud on AWS has hyperthreading disabled.

At present this host is only available in the newer SDDC versions (1.10v4 or later) and limited locations.

It also looks like the i3 still has to be the node used in the first cluster within the SDDC (where the management components reside) and they aren’t supported in 2 node clusters.

~~At the time of writing pricing from VMware is not available however pricing is available for the hosts if they were bought directly from AWS. Assuming the VMware costs fall broadly in line with this giving:~~

VMware have now released pricing. The below is for On-Demand in the AWS US-East region.

i3.Metal is £6.213287 per hour & i3en.Metal £13.6221 per hour giving:

  * A cost per GB of SSD instance storage that is up to 50% lower
  * Storage density (GB per vCPU) that is roughly 2.6x greater
  * Ratio of network bandwidth to vCPUs that is up to 2.7x greater

This new host type adds complication to choosing host types within VMware Cloud on AWS but makes it a very compelling solution.

## 📚 Related Posts

  * [Using Content Libraries in VMC to deploy software faster](https://jameskilby.co.uk/2026/01/using-content-libraries-in-vmc-to-deploy-software-faster/)
  * [Automating the deployment of my Homelab AI Infrastructure](https://jameskilby.co.uk/2026/01/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)
  * [vSAN Cluster Shutdown &#8211; Orchestration](https://jameskilby.co.uk/2025/12/vsan-cluster-shutdown/)

## Similar Posts

  * [ ![VMware Certified Master Specialist HCI 2020](https://jameskilby.co.uk/wp-content/uploads/2020/09/vmware_SP_HCI20.png) ](https://jameskilby.co.uk/2020/09/vmware-certified-master-specialist-hci-2020/)

[Personal](https://jameskilby.co.uk/category/personal/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [VMware Certified Master Specialist HCI 2020](https://jameskilby.co.uk/2020/09/vmware-certified-master-specialist-hci-2020/)

By[James](https://jameskilby.co.uk) September 13, 2020November 11, 2023

I recently sat (and passed the VMware HCI Master Specialist exam (5V0-21.20). I won’t go into any details of the contents but I will comment that I felt the questions were fair and that there wasn’t anything in it to trip you up. The required knowledge was certainly wider than the vSAN specialist exam. This…

  * [ ](https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Lab Update – Compute](https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/)

By[James](https://jameskilby.co.uk) January 6, 2022July 10, 2024

Quite a few changes have happened in the lab recently. so I decided to do a multipart blog on the changes. The refresh was triggered by the purchase of a SuperMicro Server (2027TR-H71FRF) chassis with 4x X9DRT Nodes / Blades. This is known as a BigTwin configuration in SuperMicro parlance. This is something I was…

  * [ ![Forcing an Upgrade to vSphere 8](https://jameskilby.co.uk/wp-content/uploads/2022/12/Screenshot-2022-12-14-at-21.45.23.png) ](https://jameskilby.co.uk/2022/12/forcing-an-upgrade-to-vsphere-8/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [Forcing an Upgrade to vSphere 8](https://jameskilby.co.uk/2022/12/forcing-an-upgrade-to-vsphere-8/)

By[James](https://jameskilby.co.uk) December 14, 2022October 1, 2025

I run a reasonably extensive homelab that is of course built around the VMware ecosystem. So with the release of vSphere 8 I was obviously going to upgrade however a few personal things blocked me from doing it until now. The vCenter upgrade was smooth however knowing that some of the hardware I am running…

  * [ ![VMC – vSAN ESA](https://jameskilby.co.uk/wp-content/uploads/2023/11/OrigionalPoweredByvSAN-550x324-1.jpg) ](https://jameskilby.co.uk/2023/11/vsan-esa-and-the-improvements-it-brings-to-vmc/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/) | [vSAN](https://jameskilby.co.uk/category/vmware/vsan-vmware/)

### [VMC – vSAN ESA](https://jameskilby.co.uk/2023/11/vsan-esa-and-the-improvements-it-brings-to-vmc/)

By[James](https://jameskilby.co.uk) November 17, 2023July 10, 2024

An Overview of vSAN ESA in VMC 

  * [ ![vSAN Cluster Shutdown – Orchestration](https://jameskilby.co.uk/wp-content/uploads/2023/11/OrigionalPoweredByvSAN-550x324-1.jpg) ](https://jameskilby.co.uk/2025/12/vsan-cluster-shutdown/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [vSAN](https://jameskilby.co.uk/category/vmware/vsan-vmware/)

### [vSAN Cluster Shutdown – Orchestration](https://jameskilby.co.uk/2025/12/vsan-cluster-shutdown/)

By[James](https://jameskilby.co.uk) December 6, 2025February 1, 2026

How to safety shutdown a vSAN Environment

  * [ ![100Gb/s in my Homelab](https://jameskilby.co.uk/wp-content/uploads/2023/04/2157_hi_res-768x346.png) ](https://jameskilby.co.uk/2022/12/100gb-s-in-my-homelab-sort-of/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Networking](https://jameskilby.co.uk/category/networking/) | [Storage](https://jameskilby.co.uk/category/storage/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [100Gb/s in my Homelab](https://jameskilby.co.uk/2022/12/100gb-s-in-my-homelab-sort-of/)

By[James](https://jameskilby.co.uk) December 19, 2022November 11, 2023

For a while, I’ve been looking to update the networking at the core of my homelab. I have had some great results with the current setup utilising a number of DAC’s but there were a couple of things that were annoying me. Then MikroTik dropped the CRS504-4XQ-IN and if the price wasn’t horrendous then that…