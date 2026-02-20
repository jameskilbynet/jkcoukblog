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
  - Homelab
  - TrueNAS Scale
  - vSAN
  - vSphere
  - VMware Cloud on AWS
  - Storage
  - vExpert
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

## 📚 Related Posts

  * [Automating the deployment of my Homelab AI Infrastructure](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)
  * [Using Content Libraries in VMC to deploy software faster](https://jameskilby.co.uk/2026/01/using-content-libraries-in-vmc-to-deploy-software-faster/)
  * [vSAN Cluster Shutdown &#8211; Orchestration](https://jameskilby.co.uk/2025/12/vsan-cluster-shutdown/)

## Similar Posts

  * [ ![VeeamON2020](https://jameskilby.co.uk/wp-content/uploads/2020/06/veeam-logo-new-large-1934042827-768x189.png) ](https://jameskilby.co.uk/2020/06/veeamon2020/)

[Veeam](https://jameskilby.co.uk/category/veeam/)

### [VeeamON2020](https://jameskilby.co.uk/2020/06/veeamon2020/)

By[James](https://jameskilby.co.uk) June 18, 2020April 25, 2023

As everyone knows by now the world has changed possibly forever. Due to Covid19 working from home has become the new normal. We are lucky in the IT world that this has been fairly straightforward for most of us. We are privileged in that it’s possible for us to continue indefinitely. Organisations still need to…

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Veeam](https://jameskilby.co.uk/category/veeam/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Lab Update – Desired Workloads](https://jameskilby.co.uk/2022/01/lab-update-part-5-desired-workloads/)

By[James](https://jameskilby.co.uk) January 6, 2022November 11, 2023

My lab is always undergoing change. Partially as I want to try new things or new ways of doing things. Sometimes because I break things (not always by accident) sometimes it’s a great way to learn…. I decided to list the workloads I am looking to run (some of these are already in place) Infrastucture…

  * [ ![How to Run ZFS on VMware vSphere: Setup Guide and Best Practices](https://jameskilby.co.uk/wp-content/uploads/2024/12/ZFS.jpg) ](https://jameskilby.co.uk/2024/12/zfs-on-vmware/)

[TrueNAS Scale](https://jameskilby.co.uk/category/truenas-scale/) | [VMware](https://jameskilby.co.uk/category/vmware/) | [vSAN](https://jameskilby.co.uk/category/vmware/vsan-vmware/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [How to Run ZFS on VMware vSphere: Setup Guide and Best Practices](https://jameskilby.co.uk/2024/12/zfs-on-vmware/)

By[James](https://jameskilby.co.uk) December 18, 2024February 9, 2026

ZFS on VMware Best Practices

  * [ ![An in-depth look at VMware Cloud on AWS hosts](https://jameskilby.co.uk/wp-content/uploads/2025/02/Picture-1-e1768509620339-768x193.png) ](https://jameskilby.co.uk/2025/08/vmc-host-deepdive/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [An in-depth look at VMware Cloud on AWS hosts](https://jameskilby.co.uk/2025/08/vmc-host-deepdive/)

By[James](https://jameskilby.co.uk) August 14, 2025January 18, 2026

This is single page intended to collate every single feature of the current VMware Cloud on AWS hosts for easy comparison. All of this data Is publicly available. I have just collated into a single page I3 I3en I4i CPU Processor Name Intel Xeon E5-2686 v4 Intel Xeon Platinum 8175 Intel Xeon 8375c No of…

  * [ ![Intel Optane NVMe Homelab](https://jameskilby.co.uk/wp-content/uploads/2023/04/intel_optane_ssd_900p_series_aic_-_right_angle_575px.png) ](https://jameskilby.co.uk/2023/04/intel-optane/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [vExpert](https://jameskilby.co.uk/category/vexpert/)

### [Intel Optane NVMe Homelab](https://jameskilby.co.uk/2023/04/intel-optane/)

By[James](https://jameskilby.co.uk) April 17, 2023October 1, 2025

I have been a VMware vExpert for many years and it has brought me many many benefits over the years. I don’t think it’s an understatement to say I probably wouldn’t have my current role within VMware without it. One of the best benefits has been access to a huge amount of licences for VMware…

  * [ ![New Nodes](https://jameskilby.co.uk/wp-content/uploads/2024/07/IMG_6629-768x149.jpeg) ](https://jameskilby.co.uk/2024/07/new-nodes/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Nutanix](https://jameskilby.co.uk/category/nutanix/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [New Nodes](https://jameskilby.co.uk/2024/07/new-nodes/)

By[James](https://jameskilby.co.uk) July 2, 2024January 18, 2026

I recently decided to update some of my homelab hosts and I managed to do this at very little cost by offloading 2 of my Supermicro e200’s to fellow vExpert Paul. The below post describes what I bought why and how I have configured it. Table of Contents Node Choice Bill of Materials Rescue IPMI…