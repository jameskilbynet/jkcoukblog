---
title: "VMC Host Errors"
description: "Learn how VMware Cloud on AWS handles host errors seamlessly. Ensure your infrastructure remains resilient and efficient. Get started today!"
date: 2020-09-15T10:56:32+00:00
modified: 2026-02-09T19:58:48+00:00
author: James Kilby
categories:
  - VMware
  - VMware Cloud on AWS
  - Automation
  - Homelab
  - VCF
  - AWS
  - Hosting
tags:
  - #AWS
  - #Failure
  - #SRE
  - #VMC
  - #VMware
  - #VMware Cloud on AWS
url: https://jameskilby.co.uk/2020/09/vmc-host-errors/
image: https://jameskilby.co.uk/wp-content/uploads/2022/11/iu-1-1024x526.png
---

![](https://jameskilby.co.uk/wp-content/uploads/2022/11/iu-1.png)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

# VMC Host Errors

By[James](https://jameskilby.co.uk) September 15, 2020February 9, 2026 • 📖1 min read(175 words)

📅 **Published:** September 15, 2020• **Updated:** February 09, 2026

When you run a large enough Infrastructure failure is inevitable. How you handle that can be a big differentiator. With VMware Cloud on AWS, the hosts are monitored 24×7 by VMware/AWS Support all as part of the service. If you pay for X number of hosts you should have X. That includes during maintenance and failure operations.

I’m not sure lucky is the right word but I did witness a host issue with a customer I was working with. True to the marketing It was picked up and automatically remediated.

![](https://jameskilby.co.uk/wp-content/uploads/2023/04/Screenshot-2020-08-27-at-16.56.37-1536x182-2-1024x121.png)

Looking at the log extract above a new host was being provisioned the same minute the issue was identified. Obviously, this needed to boot and join the VMware/vSAN cluster before a full data evacuation takes place on the faulty host and finally, the host is removed.

All of this was seamless to the customer. I noticed it as a few HA alarms tripped in the vCenter ( These were cosmetic only)

Just another reason why you should look at the VMware Cloud on AWS Service

## 📚 Related Posts

  * [Automating the deployment of my Homelab AI Infrastructure](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)
  * [Using Content Libraries in VMC to deploy software faster](https://jameskilby.co.uk/2026/01/using-content-libraries-in-vmc-to-deploy-software-faster/)
  * [vSAN Cluster Shutdown &#8211; Orchestration](https://jameskilby.co.uk/2025/12/vsan-cluster-shutdown/)

## Similar Posts

  * [ ![Template Deployment with Packer](https://jameskilby.co.uk/wp-content/uploads/2021/01/logo_packer.png) ](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

[Automation](https://jameskilby.co.uk/category/automation/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Template Deployment with Packer](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

By[James](https://jameskilby.co.uk) January 21, 2021February 9, 2026

Packer is one of those tools I have heard about, and some of the cool people on Twitter that I follow have been using it for a while. But until now I had never played with it. That was until I saw the below tweet by the legend that is William Lam That was the…

  * [ ![Using Content Libraries in VMC to deploy software faster](https://jameskilby.co.uk/wp-content/uploads/2026/01/Firefly_Gemini-Flash-768x417.png) ](https://jameskilby.co.uk/2026/01/using-content-libraries-in-vmc-to-deploy-software-faster/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [Using Content Libraries in VMC to deploy software faster](https://jameskilby.co.uk/2026/01/using-content-libraries-in-vmc-to-deploy-software-faster/)

By[James](https://jameskilby.co.uk) January 27, 2026February 1, 2026

How to leverage Content Libraries to deploy into VMware Cloud on AWS faster.

  * [ ![MultiHost Holodeck VCF](https://jameskilby.co.uk/wp-content/uploads/2023/12/Holodeck-Overview.png) ](https://jameskilby.co.uk/2024/01/multihost-holodeck-vcf/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VCF](https://jameskilby.co.uk/category/vmware/vcf/)

### [MultiHost Holodeck VCF](https://jameskilby.co.uk/2024/01/multihost-holodeck-vcf/)

By[James](https://jameskilby.co.uk) January 17, 2024January 18, 2026

How to Deploy VMware Holodeck on multiple hosts

  * [ ![AWS for Beginners](https://jameskilby.co.uk/wp-content/uploads/2018/03/raf750x1000075t101010_01c5ca27c6.u2.jpg) ](https://jameskilby.co.uk/2018/03/aws-for-beginners1/)

[AWS](https://jameskilby.co.uk/category/aws/)

### [AWS for Beginners](https://jameskilby.co.uk/2018/03/aws-for-beginners1/)

By[James](https://jameskilby.co.uk) March 30, 2018July 10, 2024

AWS For Beginners Account Guide

  * [ ![AWS Status Page – Monitoring Included](https://jameskilby.co.uk/wp-content/uploads/2018/05/AmazonWebservices_Logo.svg_-768x307.png) ](https://jameskilby.co.uk/2018/05/aws-status-page-monitoring-included/)

[AWS](https://jameskilby.co.uk/category/aws/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [AWS Status Page – Monitoring Included](https://jameskilby.co.uk/2018/05/aws-status-page-monitoring-included/)

By[James](https://jameskilby.co.uk) May 15, 2018October 1, 2025

AWS Status Page – Enhancements The tool I deployed lambstatus supports pulling metrics from AWS Cloudwatch and displaying them. As part of my personal development, I thought I would include this on my status page. I managed to get this working as can be seen here. This is a lambda function running once a minute…

  * [ ![Holodeck CPU Fixes](https://jameskilby.co.uk/wp-content/uploads/2024/01/40oOd8IipPvtrPJs-1198788743-768x737.jpg) ](https://jameskilby.co.uk/2024/01/holodeck-cpu-fixes/)

[VCF](https://jameskilby.co.uk/category/vmware/vcf/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Holodeck CPU Fixes](https://jameskilby.co.uk/2024/01/holodeck-cpu-fixes/)

By[James](https://jameskilby.co.uk) January 18, 2024July 10, 2024

How to deploy Holodeck with Legacy CPU’s