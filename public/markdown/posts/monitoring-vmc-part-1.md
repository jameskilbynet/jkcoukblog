---
title: "Monitoring VMC – Part 1"
description: "Learn essential monitoring techniques for VMware Cloud on AWS. Optimize your VMs and reduce costs with the right tools. Start monitoring today!"
date: 2019-12-17T23:01:27+00:00
modified: 2026-03-27T23:19:28+00:00
author: James Kilby
categories:
  - VMware
  - AWS
  - Veeam
  - Personal
  - VMware Cloud on AWS
  - Homelab
  - Automation
  - VCF
tags:
  - #AWS
  - #VMC
  - #VMware
url: https://jameskilby.co.uk/2019/12/monitoring-vmc-part-1/
image: https://jameskilby.co.uk/wp-content/uploads/2026/03/VMConAWS.png.webp
---

![](https://jameskilby.co.uk/wp-content/uploads/2026/03/VMConAWS.png.webp)

[VMware](https://jameskilby.co.uk/category/vmware/) | [AWS](https://jameskilby.co.uk/category/aws/) | [Veeam](https://jameskilby.co.uk/category/veeam/)

# Monitoring VMC – Part 1

By[James](https://jameskilby.co.uk) December 17, 2019March 27, 2026 • 📖2 min read(470 words)

📅 **Published:** December 17, 2019• **Updated:** March 27, 2026

As previously mentioned I have been working a lot with VMware Cloud on AWS and one of the questions that often crops up is around an approach to monitoring.

This is an interesting topic as VMC is technically “as a service” therefore the monitoring approach is a bit different. Technically AWS and VMware’s SRE teams will be monitoring all of the infrastructure components,

however, you still need to monitor your Virtual Machines. If it was me I would still want some monitoring of the Infrastructure and I see two different reasons why you would want to do this:

Firstly I want to check that the VMware Cloud on AWS service is doing what I am paying for. Secondly, I still need to monitor my VMs to ensure they are all behaving properly, the added factor is that with a good real-time view of my workload, I can potentially optimise the number of VMC hosts in my fleet reducing the costs.

With that in mind, I decided to look at a few options for connecting some monitoring tools to a VMC environment to see what worked and what didn’t. I am expecting some things could behave differently as you don’t have true root/admin access as you would usually do. All of the tests will be done with the cloudadmin@vmc.local account. This is the highest-level account that a service user has within VMC.

The first product that I decided to test was [Veeam One](https://www.veeam.com/virtualization-management-one-solution.html). This made sense for a few reasons: Firstly I’m a [Veeam Vanguard](https://jameskilby.co.uk/about-me/) and am very familiar with the product. I also have access to the Beta versions of the v10 products as part of the Vanguard program.

Secondly, it’s pretty easy to spin up a test server to kick the tyres and finally, the config is incredibly quick to implement.

I could have easily added a VMC vCenter to my existing Veeam servers however I chose to deploy a new server just for this testing. Assuming you have network access between your Veeam One server and the VMC vCenter then adding to Veeam One is straightforward. If not you will need to open up the relevant firewalls

Once done Veeam performs an inventory operation and returns all of the objects you would expect. This test was shortly after a VMC environment was created so it doesn’t yet have any workloads migrated to it. However, as you can see below it’s correctly reporting on the hosts and VM workloads. It is correctly reporting back that the hosts are running ESXi 6.9.1

I also ran a couple of test reports to check they functioned as expected. Everything seemed to work as I would expect.

![](https://jameskilby.co.uk/wp-content/uploads/2023/05/VMC-Vms-1024x296.png)

![](https://jameskilby.co.uk/wp-content/uploads/2023/05/Screenshot-2019-12-17-at-21.19.40-1024x500.png)

![](https://jameskilby.co.uk/wp-content/uploads/2023/05/Screenshot-2019-12-17-at-21.19.30-1024x472.png)

In Part Two I am going to look at using Grafana, Influxdb and Telegraf and seeing if this common open-source monitoring stack works with VMC.

## 📚 Related Posts

  * [My Self-Hosted AI Stack: Architecture Overview (Part 1)](https://jameskilby.co.uk/2026/03/my-self-hosted-ai-stack-a-technical-deep-dive/)
  * [Automating the deployment of my Homelab AI Infrastructure](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)
  * [Using Content Libraries in VMC to deploy software faster](https://jameskilby.co.uk/2026/01/using-content-libraries-in-vmc-to-deploy-software-faster/)

## Similar Posts

  * [ ![AWS Solution Architect – Associate](https://jameskilby.co.uk/wp-content/uploads/2018/05/AmazonWebservices_Logo.svg_-768x307.png) ](https://jameskilby.co.uk/2019/12/aws-solution-architect-associate/)

[AWS](https://jameskilby.co.uk/category/aws/) | [Personal](https://jameskilby.co.uk/category/personal/)

### [AWS Solution Architect – Associate](https://jameskilby.co.uk/2019/12/aws-solution-architect-associate/)

By[James](https://jameskilby.co.uk) December 16, 2019March 10, 2026

Today was a good day. I renewed my AWS Solution Architect certification. Although my work is primarily in and around the VMware ecosystem I have been working a lot with VMware Cloud on AWS recently with a number of our customers. Having a good foundation of the core AWS services has…

  * [ ![VMC New Host -i3en](https://jameskilby.co.uk/wp-content/uploads/2022/11/iu-1-768x395.png) ](https://jameskilby.co.uk/2020/07/i3en/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [VMC New Host -i3en](https://jameskilby.co.uk/2020/07/i3en/)

By[James](https://jameskilby.co.uk) July 2, 2020July 10, 2024

VMware Cloud on AWS (VMC) has introduced a new host to its lineup the “i3en”. This is based on the i3en.metal AWS instance. The specifications are certainly impressive packing in 96 logical cores, 768GiB RAM, and approximately 45.84 TiB of NVMe raw storage capacity per host. It’s certainly a monster with a 266% uplift in…

  * [ ![VMC Quick Sizing Guide](https://jameskilby.co.uk/wp-content/uploads/2025/02/Picture-1-e1768509620339-768x193.png) ](https://jameskilby.co.uk/2025/05/vmc-quick-sizing-guide/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [VMC Quick Sizing Guide](https://jameskilby.co.uk/2025/05/vmc-quick-sizing-guide/)

By[James](https://jameskilby.co.uk) May 21, 2025July 2, 2025

Quick reference guide to the available storage resources that you get in VMware Cloud on AWS

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Veeam](https://jameskilby.co.uk/category/veeam/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Lab Update – Desired Workloads](https://jameskilby.co.uk/2022/01/lab-update-part-5-desired-workloads/)

By[James](https://jameskilby.co.uk) January 6, 2022March 10, 2026

My lab is always undergoing change. Partially as I want to try new things or new ways of doing things. Sometimes because I break things (not always by accident) sometimes it’s a great way to learn…. I decided to list the workloads I am looking to run (some of these are already in place) Infrastucture…

  * [ ![Template Deployment with Packer](https://jameskilby.co.uk/wp-content/uploads/2021/01/logo_packer.png) ](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

[Automation](https://jameskilby.co.uk/category/automation/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Template Deployment with Packer](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

By[James](https://jameskilby.co.uk) January 21, 2021March 10, 2026

Packer is one of those tools I have heard about, and some of the cool people on Twitter that I follow have been using it for a while. But until now I had never played with it. That was until I saw the below tweet by the legend that is William Lam That was the…

  * [ ![MultiHost Holodeck VCF](https://jameskilby.co.uk/wp-content/uploads/2023/12/Holodeck-Overview.png) ](https://jameskilby.co.uk/2024/01/multihost-holodeck-vcf/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VCF](https://jameskilby.co.uk/category/vmware/vcf/)

### [MultiHost Holodeck VCF](https://jameskilby.co.uk/2024/01/multihost-holodeck-vcf/)

By[James](https://jameskilby.co.uk) January 17, 2024March 10, 2026

How to Deploy VMware Holodeck on multiple hosts