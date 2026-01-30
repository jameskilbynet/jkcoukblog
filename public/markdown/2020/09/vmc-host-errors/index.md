---
title: "VMC Host Errors"
description: "Learn how VMware Cloud on AWS handles host errors seamlessly. Ensure your infrastructure remains resilient and efficient. Get started today!"
date: 2020-09-15T10:56:32+00:00
modified: 2025-10-01T15:22:15+00:00
author: James Kilby
categories:
  - VMware
  - VMware Cloud on AWS
  - Homelab
  - AWS
  - TrueNAS Scale
  - vSAN
  - vSphere
  - VCF
  - Runecast
  - Networking
  - Storage
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

By[James](https://jameskilby.co.uk) September 15, 2020October 1, 2025 • 📖1 min read(175 words)

📅 **Published:** September 15, 2020• **Updated:** October 01, 2025

When you run a large enough Infrastructure failure is inevitable. How you handle that can be a big differentiator. With VMware Cloud on AWS, the hosts are monitored 24×7 by VMware/AWS Support all as part of the service. If you pay for X number of hosts you should have X. That includes during maintenance and failure operations.

I’m not sure lucky is the right word but I did witness a host issue with a customer I was working with. True to the marketing It was picked up and automatically remediated.

![](https://jameskilby.co.uk/wp-content/uploads/2023/04/Screenshot-2020-08-27-at-16.56.37-1536x182-2-1024x121.png)

Looking at the log extract above a new host was being provisioned the same minute the issue was identified. Obviously, this needed to boot and join the VMware/vSAN cluster before a full data evacuation takes place on the faulty host and finally, the host is removed.

All of this was seamless to the customer. I noticed it as a few HA alarms tripped in the vCenter ( These were cosmetic only)

Just another reason why you should look at the VMware Cloud on AWS Service

## Similar Posts

  * [ ](https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Lab Update – Compute](https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/)

By[James](https://jameskilby.co.uk) January 6, 2022July 10, 2024

Quite a few changes have happened in the lab recently. so I decided to do a multipart blog on the changes. The refresh was triggered by the purchase of a SuperMicro Server (2027TR-H71FRF) chassis with 4x X9DRT Nodes / Blades. This is known as a BigTwin configuration in SuperMicro parlance. This is something I was…

  * [ ![AWS for Beginners](https://jameskilby.co.uk/wp-content/uploads/2018/03/raf750x1000075t101010_01c5ca27c6.u2.jpg) ](https://jameskilby.co.uk/2018/03/aws-for-beginners1/)

[AWS](https://jameskilby.co.uk/category/aws/)

### [AWS for Beginners](https://jameskilby.co.uk/2018/03/aws-for-beginners1/)

By[James](https://jameskilby.co.uk) March 30, 2018July 10, 2024

AWS For Beginners Account Guide

  * [ ![How to Run ZFS on VMware vSphere: Setup Guide and Best Practices](https://jameskilby.co.uk/wp-content/uploads/2024/12/ZFS.jpg) ](https://jameskilby.co.uk/2024/12/zfs-on-vmware/)

[TrueNAS Scale](https://jameskilby.co.uk/category/truenas-scale/) | [VMware](https://jameskilby.co.uk/category/vmware/) | [vSAN](https://jameskilby.co.uk/category/vmware/vsan-vmware/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [How to Run ZFS on VMware vSphere: Setup Guide and Best Practices](https://jameskilby.co.uk/2024/12/zfs-on-vmware/)

By[James](https://jameskilby.co.uk) December 18, 2024January 18, 2026

Table of Contents Copy-on-Write Disk IDs Trim I have run a number of systems using ZFS since the earliest days of my homelab using Nexenta, all the way back in 2010. The image below is my lab at the time with an IBM Head unit that I think had 18GB of RAM…

  * [ ![Holodeck CPU Fixes](https://jameskilby.co.uk/wp-content/uploads/2024/01/40oOd8IipPvtrPJs-1198788743-768x737.jpg) ](https://jameskilby.co.uk/2024/01/holodeck-cpu-fixes/)

[VCF](https://jameskilby.co.uk/category/vmware/vcf/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Holodeck CPU Fixes](https://jameskilby.co.uk/2024/01/holodeck-cpu-fixes/)

By[James](https://jameskilby.co.uk) January 18, 2024July 10, 2024

How to deploy Holodeck with Legacy CPU’s

  * [ ![Runecast Remediation Script’s](https://jameskilby.co.uk/wp-content/uploads/2023/05/Runecast-Solutions-Ltd.png) ](https://jameskilby.co.uk/2023/05/runecast-remediation-scripts/)

[Runecast](https://jameskilby.co.uk/category/runecast/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Runecast Remediation Script’s](https://jameskilby.co.uk/2023/05/runecast-remediation-scripts/)

By[James](https://jameskilby.co.uk) May 16, 2023November 17, 2023

I am a huge fan of the Runecast product and luckily as a vExpert they give out NFR licences for my lab. One of the really cool features I wanted to mention today was the remediation script function. I have been playing with storage a lot in my lab recently as part of a wider…

  * [ ![100Gb/s in my Homelab](https://jameskilby.co.uk/wp-content/uploads/2023/04/2157_hi_res-768x346.png) ](https://jameskilby.co.uk/2022/12/100gb-s-in-my-homelab-sort-of/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Networking](https://jameskilby.co.uk/category/networking/) | [Storage](https://jameskilby.co.uk/category/storage/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [100Gb/s in my Homelab](https://jameskilby.co.uk/2022/12/100gb-s-in-my-homelab-sort-of/)

By[James](https://jameskilby.co.uk) December 19, 2022November 11, 2023

For a while, I’ve been looking to update the networking at the core of my homelab. I have had some great results with the current setup utilising a number of DAC’s but there were a couple of things that were annoying me. Then MikroTik dropped the CRS504-4XQ-IN and if the price wasn’t horrendous then that…