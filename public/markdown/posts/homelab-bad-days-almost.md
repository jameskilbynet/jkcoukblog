---
title: "Homelab bad days (almost)"
description: "Facing SSD issues in your homelab? Learn about RAID 5 pitfalls and how to protect your data effectively. Read more for essential tips!"
date: 2022-11-21T15:46:53+00:00
modified: 2023-04-08T21:44:28+00:00
author: James Kilby
categories:
  - Homelab
  - Storage
  - Synology
  - Runecast
  - VMware
  - Networking
  - Ansible
  - Artificial Intelligence
  - Containers
  - Devops
  - NVIDIA
  - Traefik
  - vExpert
  - VMware Cloud on AWS
  - vSAN
tags:
  - #Homelab
  - #Storage
url: https://jameskilby.co.uk/2022/11/homelab-bad-days-almost/
image: https://jameskilby.co.uk/wp-content/uploads/2022/11/BrokenHardDive-1200x630-1.jpg
---

![](https://jameskilby.co.uk/wp-content/uploads/2022/11/BrokenHardDive-1200x630-1.jpg)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [Synology](https://jameskilby.co.uk/category/synology/)

# Homelab bad days (almost)

By[James](https://jameskilby.co.uk) November 21, 2022April 8, 2023 • 📖2 min read(363 words)

📅 **Published:** November 21, 2022• **Updated:** April 08, 2023

I recently spent 3 weeks in Ireland with my wife Wendy and our son Nate. This involves driving from the south coast of Dorset up to Scotland and then getting a ferry over to Belfast before travelling west to the Republic. While driving I got a slack notification that one of my SSD’s in my Synology DS918+ was in a bad way. (You do have notifications set up right? ) The timing could not have been worse. Now for years anyone that I have talked to at VMUG’s around data protection etc, I have advocating never using RAID 5. The reasons for this are well known. But when it’s your homelab and your wallet is in the line corners sometimes need to be cut.

When I got to Ireland I logged into the Synology it was pretty obvious it wasn’t happy

![](https://jameskilby.co.uk/wp-content/uploads/2023/04/Screenshot-2022-11-14-at-20.56.39.png)Unhappy Array ( For historical reasons I was using slots 1, 2 and 4

and it had pages and pages like this….

![](https://jameskilby.co.uk/wp-content/uploads/2023/04/Drive-Errors-2048x236-1-1024x118.png)

I had 3 SDD’s in this particular array all from around the same time. Out of curiosity, I checked how old they were. The drive that failed had a power-on-hours count of 49599 hours (5.6 Years) It had more than served its purpose so some replacements were ordered for when I was back in Poole. For now I had to run the risk and hope another drive didn’t fail. Returning home to swap a drive was never going to go down well with the family.

I decided to order 4x 2TB SSD’s and went with the Samsung 870 QVO’s. They are def on the budget end of SSD’s but are cost-effective and given the limited network bandwidth on my Synology were more than adequate.

I first replaced the failed drive and then when this was complete extended the array to be 4x Disk before replacing the other 2 existing drives one at a time.

![](https://jameskilby.co.uk/wp-content/uploads/2023/04/Screenshot-2022-11-21-at-16.43.51.png)Everything is green again

Everything is now back to being green and hunky dory. I have run scrubs to validate all data. I still have RAID 5 on both volumes but I have undertaken a task to improve some of my backup handling. Just In case…..

## 📚 Related Posts

  * [Automating the deployment of my Homelab AI Infrastructure](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)
  * [Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)
  * [Warp &#8211; The intelligent terminal](https://jameskilby.co.uk/2025/04/warp-the-intelligent-terminal/)

## Similar Posts

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

  * [ ![Configure DHCP Option 43 for UniFi devices to enable remote adoption across subnets](https://jameskilby.co.uk/wp-content/uploads/2024/06/Ubiquiti_Networks-Logo.wine_-768x512.png) ](https://jameskilby.co.uk/2024/06/unifi-dhcp-option-43/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Networking](https://jameskilby.co.uk/category/networking/)

### [Configure DHCP Option 43 for UniFi devices to enable remote adoption across subnets](https://jameskilby.co.uk/2024/06/unifi-dhcp-option-43/)

By[James](https://jameskilby.co.uk) June 26, 2024January 18, 2026

How to configure DHCP Option 43 for UniFi devices 

  * [ ![Automating the deployment of my Homelab AI  Infrastructure](https://jameskilby.co.uk/wp-content/uploads/2026/01/VMware-NVIDIA-logos_ee2f18dc-615d-4c9e-8f11-9c3c2ce2bf37-prv-768x432.png) ](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)

[Ansible](https://jameskilby.co.uk/category/ansible/) | [Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Containers](https://jameskilby.co.uk/category/containers/) | [Devops](https://jameskilby.co.uk/category/devops/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [NVIDIA](https://jameskilby.co.uk/category/nvidia/) | [Traefik](https://jameskilby.co.uk/category/traefik/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Automating the deployment of my Homelab AI Infrastructure](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)

By[James](https://jameskilby.co.uk) February 9, 2026February 25, 2026

Learn how to use Ansible to configure an Ubuntu VM for use with NVIDIA based AI workloads in vSphere

  * [ ![Intel Optane NVMe Homelab](https://jameskilby.co.uk/wp-content/uploads/2023/04/intel_optane_ssd_900p_series_aic_-_right_angle_575px.png) ](https://jameskilby.co.uk/2023/04/intel-optane/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [vExpert](https://jameskilby.co.uk/category/vexpert/)

### [Intel Optane NVMe Homelab](https://jameskilby.co.uk/2023/04/intel-optane/)

By[James](https://jameskilby.co.uk) April 17, 2023October 1, 2025

I have been a VMware vExpert for many years and it has brought me many many benefits over the years. I don’t think it’s an understatement to say I probably wouldn’t have my current role within VMware without it. One of the best benefits has been access to a huge amount of licences for VMware…

  * [ ![VMC – vSAN ESA](https://jameskilby.co.uk/wp-content/uploads/2023/11/OrigionalPoweredByvSAN-550x324-1.jpg) ](https://jameskilby.co.uk/2023/11/vsan-esa-and-the-improvements-it-brings-to-vmc/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/) | [vSAN](https://jameskilby.co.uk/category/vmware/vsan-vmware/)

### [VMC – vSAN ESA](https://jameskilby.co.uk/2023/11/vsan-esa-and-the-improvements-it-brings-to-vmc/)

By[James](https://jameskilby.co.uk) November 17, 2023July 10, 2024

An Overview of vSAN ESA in VMC