---
title: "VMC New Host -i3en"
description: "Overview of the VMware Cloud on AWS i3en host type — high-density NVMe storage nodes designed for data-intensive and storage-heavy VMC workloads."
date: 2020-07-02T22:01:39+00:00
modified: 2024-07-10T09:28:48+00:00
author: James Kilby
categories:
  - VMware
  - VMware Cloud on AWS
  - Homelab
  - vSphere
  - AWS
  - Veeam
  - VCF
  - Artificial Intelligence
  - Automation
  - Docker
  - NVIDIA
  - Traefik
  - Personal
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

  * [My Self-Hosted AI Stack: Architecture Overview (Part 1)](https://jameskilby.co.uk/2026/03/my-self-hosted-ai-stack-a-technical-deep-dive/)
  * [Automating the deployment of my Homelab AI Infrastructure](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)
  * [Using Content Libraries in VMC to deploy software faster](https://jameskilby.co.uk/2026/01/using-content-libraries-in-vmc-to-deploy-software-faster/)

## Similar Posts

  * [ ![Forcing an Upgrade to vSphere 8](https://jameskilby.co.uk/wp-content/uploads/2022/12/Screenshot-2022-12-14-at-21.45.23.png) ](https://jameskilby.co.uk/2022/12/forcing-an-upgrade-to-vsphere-8/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [Forcing an Upgrade to vSphere 8](https://jameskilby.co.uk/2022/12/forcing-an-upgrade-to-vsphere-8/)

By[James](https://jameskilby.co.uk) December 14, 2022March 10, 2026

I run a reasonably extensive homelab that is of course built around the VMware ecosystem. So with the release of vSphere 8 I was obviously going to upgrade however a few personal things blocked me from doing it until now. The vCenter upgrade was smooth however knowing that some of the hardware I am running…

  * [ ![Monitoring VMC – Part 1](https://jameskilby.co.uk/wp-content/uploads/2026/03/VMConAWS.png.webp) ](https://jameskilby.co.uk/2019/12/monitoring-vmc-part-1/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [AWS](https://jameskilby.co.uk/category/aws/) | [Veeam](https://jameskilby.co.uk/category/veeam/)

### [Monitoring VMC – Part 1](https://jameskilby.co.uk/2019/12/monitoring-vmc-part-1/)

By[James](https://jameskilby.co.uk) December 17, 2019March 27, 2026

As previously mentioned I have been working a lot with VMware Cloud on AWS and one of the questions that often crops up is around an approach to monitoring. This is an interesting topic as VMC is technically “as a service” therefore the monitoring approach is a bit different. Technically AWS and VMware’s SRE teams…

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Veeam](https://jameskilby.co.uk/category/veeam/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Lab Update – Desired Workloads](https://jameskilby.co.uk/2022/01/lab-update-part-5-desired-workloads/)

By[James](https://jameskilby.co.uk) January 6, 2022March 10, 2026

My lab is always undergoing change. Partially as I want to try new things or new ways of doing things. Sometimes because I break things (not always by accident) sometimes it’s a great way to learn…. I decided to list the workloads I am looking to run (some of these are already in place) Infrastucture…

  * [ ![MultiHost Holodeck VCF](https://jameskilby.co.uk/wp-content/uploads/2023/12/Holodeck-Overview.png) ](https://jameskilby.co.uk/2024/01/multihost-holodeck-vcf/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VCF](https://jameskilby.co.uk/category/vmware/vcf/)

### [MultiHost Holodeck VCF](https://jameskilby.co.uk/2024/01/multihost-holodeck-vcf/)

By[James](https://jameskilby.co.uk) January 17, 2024March 10, 2026

How to Deploy VMware Holodeck on multiple hosts

  * [ ![My Self-Hosted AI Stack: Architecture Overview \(Part 1\)](https://jameskilby.co.uk/wp-content/uploads/2026/03/ai-stack-featured-768x403.png) ](https://jameskilby.co.uk/2026/03/my-self-hosted-ai-stack-a-technical-deep-dive/)

[Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Automation](https://jameskilby.co.uk/category/automation/) | [Docker](https://jameskilby.co.uk/category/docker/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [NVIDIA](https://jameskilby.co.uk/category/nvidia/) | [Traefik](https://jameskilby.co.uk/category/traefik/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [My Self-Hosted AI Stack: Architecture Overview (Part 1)](https://jameskilby.co.uk/2026/03/my-self-hosted-ai-stack-a-technical-deep-dive/)

By[James](https://jameskilby.co.uk) March 27, 2026March 27, 2026

A walkthrough of my self-hosted AI stack: Ollama, Open WebUI, ComfyUI, Whishper, n8n, Qdrant, SearxNG, and a full observability layer — all running on my own hardware with Docker Compose.

  * [ ![Advanced Deploy VMware vSphere 7.x 3V0-22.21N](https://jameskilby.co.uk/wp-content/uploads/2023/11/image.png) ](https://jameskilby.co.uk/2023/11/advanced-deploy-vmware-vsphere-7-x-3v0-22-21n/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [Personal](https://jameskilby.co.uk/category/personal/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [Advanced Deploy VMware vSphere 7.x 3V0-22.21N](https://jameskilby.co.uk/2023/11/advanced-deploy-vmware-vsphere-7-x-3v0-22-21n/)

By[James](https://jameskilby.co.uk) November 10, 2023March 10, 2026

Yesterday I sat and passed the above exam. It had been on my todo list for a good number of years. With the current pause in the Broadcom VMware takeover deal. I had some downtime and decided to use one of the three exam vouchers VMware give me each year. This upgrades me to a…