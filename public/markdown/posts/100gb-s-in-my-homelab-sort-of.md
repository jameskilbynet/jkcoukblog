---
title: "100Gb/s in my Homelab"
description: "100Gb/s in my Homelab: Transform your networking setup with MikroTik's CRS504-4XQ-IN. Learn how to maximize your homelab's potential now!"
date: 2022-12-19T10:09:58+00:00
modified: 2023-11-11T20:57:34+00:00
author: James Kilby
categories:
  - Homelab
  - Networking
  - Storage
  - VMware
  - Hosting
  - Personal
  - vSphere
  - VMware Cloud on AWS
  - vSAN
tags:
  - #Homelab
  - #Mikrotik
url: https://jameskilby.co.uk/2022/12/100gb-s-in-my-homelab-sort-of/
image: https://jameskilby.co.uk/wp-content/uploads/2023/04/2157_hi_res.png
---

![](https://jameskilby.co.uk/wp-content/uploads/2023/04/2157_hi_res.png)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Networking](https://jameskilby.co.uk/category/networking/) | [Storage](https://jameskilby.co.uk/category/storage/) | [VMware](https://jameskilby.co.uk/category/vmware/)

# 100Gb/s in my Homelab

By[James](https://jameskilby.co.uk) December 19, 2022November 11, 2023 • 📖2 min read(304 words)

📅 **Published:** December 19, 2022• **Updated:** November 11, 2023

For a while, I’ve been looking to update the networking at the core of my homelab. I have had some great results with the current setup utilising a number of DAC’s but there were a couple of things that were annoying me. 

Then MikroTik dropped the [CRS504-4XQ-IN](https://mikrotik.com/product/crs504_4xq_in) and if the price wasn’t horrendous then that was the route I was going to go to alleviate these issues. Yes, it’s 100Gb/s and only has 4 ports but that should be all I need… I managed to locate one in stock for £587 plus Vat

![](https://jameskilby.co.uk/wp-content/uploads/2023/04/2157_hi_res-1024x462.png)

As you can see the switch has redundant power not often found at this price point. It actually has 4 ways to power it. 2 AC supplies, A DC input and then strangest of all it can be powered by POE in. This last point showcases how power efficient it is which is a huge win for a homelab.

My plan is to utilise the existing Intel 25Gb NICs I have and split the 100’s on the switch into 4×25. This technically gives me 16 usable 25 ports which are way more than I need. This will allow me to accommodate the TrueNAS box and the 2x Supermicro nodes I usually run for my lab. The other 2 nodes will get an upgrade at a future date. 

Initial impressions are that the switch is very quiet and also incredibly power efficient. ( It can be powered just from POE) however, the config is way more complex than I have seen before. This is because it’s basically a router that can switch at wire speed. The other challenge I have had is connecting my legacy 1gb/s network. This is still a work in progress but for now, Storage and vMotion have been migrated. 

I will report back when everything has been migrated.

## 📚 Related Posts

  * [Automating the deployment of my Homelab AI Infrastructure](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)
  * [Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)
  * [Warp &#8211; The intelligent terminal](https://jameskilby.co.uk/2025/04/warp-the-intelligent-terminal/)

## Similar Posts

  * [ ![Starlink](https://jameskilby.co.uk/wp-content/uploads/2022/10/spacexs-starlink-to-supply-free-satellite-internet-to-famili_u44u.1920-768x432.jpg) ](https://jameskilby.co.uk/2022/10/starlink/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [Starlink](https://jameskilby.co.uk/2022/10/starlink/)

By[James](https://jameskilby.co.uk) October 11, 2022October 1, 2025

Since moving to Dorset last year internet connectivity has been the bane of my existence. Currently, I have an ADSL connection provided by my old employer Zen and a 5G connection provided by Three. These are both plumbed into my WatchGuard Firewall with multi-wan configured. Most of the time the usability is ok but there…

  * [ ![VMware Certified Master Specialist HCI 2020](https://jameskilby.co.uk/wp-content/uploads/2020/09/vmware_SP_HCI20.png) ](https://jameskilby.co.uk/2020/09/vmware-certified-master-specialist-hci-2020/)

[Personal](https://jameskilby.co.uk/category/personal/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [VMware Certified Master Specialist HCI 2020](https://jameskilby.co.uk/2020/09/vmware-certified-master-specialist-hci-2020/)

By[James](https://jameskilby.co.uk) September 13, 2020November 11, 2023

I recently sat (and passed the VMware HCI Master Specialist exam (5V0-21.20). I won’t go into any details of the contents but I will comment that I felt the questions were fair and that there wasn’t anything in it to trip you up. The required knowledge was certainly wider than the vSAN specialist exam. This…

  * [ ![Configure DHCP Option 43 for UniFi devices to enable remote adoption across subnets](https://jameskilby.co.uk/wp-content/uploads/2024/06/Ubiquiti_Networks-Logo.wine_-768x512.png) ](https://jameskilby.co.uk/2024/06/unifi-dhcp-option-43/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Networking](https://jameskilby.co.uk/category/networking/)

### [Configure DHCP Option 43 for UniFi devices to enable remote adoption across subnets](https://jameskilby.co.uk/2024/06/unifi-dhcp-option-43/)

By[James](https://jameskilby.co.uk) June 26, 2024January 18, 2026

How to configure DHCP Option 43 for UniFi devices 

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

  * [ ![Time in a VMC Environment](https://jameskilby.co.uk/wp-content/uploads/2025/02/Picture-1-e1768509620339-768x193.png) ](https://jameskilby.co.uk/2025/12/time-in-a-vmc-environment/)

[VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [Time in a VMC Environment](https://jameskilby.co.uk/2025/12/time-in-a-vmc-environment/)

By[James](https://jameskilby.co.uk) December 8, 2025February 1, 2026

How to use the Amazon Time Sync Service in a VMC environment