---
title: "Monitoring VMC – Part 1"
description: "Learn essential monitoring techniques for VMware Cloud on AWS. Optimize your VMs and reduce costs with the right tools. Start monitoring today!"
date: 2019-12-17T23:01:27+00:00
modified: 2025-10-01T15:22:15+00:00
author: James Kilby
categories:
  - VMware
  - AWS
  - Veeam
  - Personal
  - Homelab
  - Networking
  - Storage
  - VCF
  - Nutanix
tags:
  - #AWS
  - #VMC
  - #VMware
url: https://jameskilby.co.uk/2019/12/monitoring-vmc-part-1/
image: https://jameskilby.co.uk/wp-content/uploads/2023/05/VMC-Vms.png
---

[VMware](https://jameskilby.co.uk/category/vmware/) | [AWS](https://jameskilby.co.uk/category/aws/) | [Veeam](https://jameskilby.co.uk/category/veeam/)

# Monitoring VMC – Part 1

By[James](https://jameskilby.co.uk) December 17, 2019October 1, 2025 • 📖2 min read(470 words)

📅 **Published:** December 17, 2019• **Updated:** October 01, 2025

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

## Similar Posts

  * [ ![AWS Solution Architect – Associate](https://jameskilby.co.uk/wp-content/uploads/2018/05/AmazonWebservices_Logo.svg_-768x307.png) ](https://jameskilby.co.uk/2019/12/aws-solution-architect-associate/)

[AWS](https://jameskilby.co.uk/category/aws/) | [Personal](https://jameskilby.co.uk/category/personal/)

### [AWS Solution Architect – Associate](https://jameskilby.co.uk/2019/12/aws-solution-architect-associate/)

By[James](https://jameskilby.co.uk) December 16, 2019December 4, 2025

Today was a good day. I renewed my AWS Solution Architect certification. Although my work is primarily in and around the VMware ecosystem I have been working a lot with VMware Cloud on AWS recently with a number of our customers. Having a good foundation of the core AWS services has…

  * [ ![100Gb/s in my Homelab](https://jameskilby.co.uk/wp-content/uploads/2023/04/2157_hi_res-768x346.png) ](https://jameskilby.co.uk/2022/12/100gb-s-in-my-homelab-sort-of/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Networking](https://jameskilby.co.uk/category/networking/) | [Storage](https://jameskilby.co.uk/category/storage/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [100Gb/s in my Homelab](https://jameskilby.co.uk/2022/12/100gb-s-in-my-homelab-sort-of/)

By[James](https://jameskilby.co.uk) December 19, 2022November 11, 2023

For a while, I’ve been looking to update the networking at the core of my homelab. I have had some great results with the current setup utilising a number of DAC’s but there were a couple of things that were annoying me. Then MikroTik dropped the CRS504-4XQ-IN and if the price wasn’t horrendous then that…

  * [ ![Holodeck CPU Fixes](https://jameskilby.co.uk/wp-content/uploads/2024/01/40oOd8IipPvtrPJs-1198788743-768x737.jpg) ](https://jameskilby.co.uk/2024/01/holodeck-cpu-fixes/)

[VCF](https://jameskilby.co.uk/category/vmware/vcf/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Holodeck CPU Fixes](https://jameskilby.co.uk/2024/01/holodeck-cpu-fixes/)

By[James](https://jameskilby.co.uk) January 18, 2024July 10, 2024

How to deploy Holodeck with Legacy CPU’s

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

  * [ ![New Nodes](https://jameskilby.co.uk/wp-content/uploads/2024/07/IMG_6629-768x149.jpeg) ](https://jameskilby.co.uk/2024/07/new-nodes/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Nutanix](https://jameskilby.co.uk/category/nutanix/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [New Nodes](https://jameskilby.co.uk/2024/07/new-nodes/)

By[James](https://jameskilby.co.uk) July 2, 2024January 18, 2026

I recently decided to update some of my homelab hosts and I managed to do this at very little cost by offloading 2 of my Supermicro e200’s to fellow vExpert Paul. The below post describes what I bought why and how I have configured it. Table of Contents Node Choice Bill of Materials Rescue IPMI…