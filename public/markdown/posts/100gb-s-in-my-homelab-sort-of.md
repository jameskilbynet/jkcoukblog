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
  - Synology
  - Docker
  - Hosting
  - Kubernetes
  - Personal
  - Veeam
  - Artificial Intelligence
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

## Similar Posts

  * [ ![Homelab bad days \(almost\)](https://jameskilby.co.uk/wp-content/uploads/2022/11/BrokenHardDive-1200x630-1-768x403.jpg) ](https://jameskilby.co.uk/2022/11/homelab-bad-days-almost/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [Synology](https://jameskilby.co.uk/category/synology/)

### [Homelab bad days (almost)](https://jameskilby.co.uk/2022/11/homelab-bad-days-almost/)

By[James](https://jameskilby.co.uk) November 21, 2022April 8, 2023

I recently spent 3 weeks in Ireland with my wife Wendy and our son Nate. This involves driving from the south coast of Dorset up to Scotland and then getting a ferry over to Belfast before travelling west to the Republic. While driving I got a slack notification that one of my SSD’s in my…

  * [ ![Configure DHCP Option 43 for UniFi devices to enable remote adoption across subnets](https://jameskilby.co.uk/wp-content/uploads/2024/06/Ubiquiti_Networks-Logo.wine_-768x512.png) ](https://jameskilby.co.uk/2024/06/unifi-dhcp-option-43/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Networking](https://jameskilby.co.uk/category/networking/)

### [Configure DHCP Option 43 for UniFi devices to enable remote adoption across subnets](https://jameskilby.co.uk/2024/06/unifi-dhcp-option-43/)

By[James](https://jameskilby.co.uk) June 26, 2024January 18, 2026

How to configure DHCP Option 43 for UniFi devices 

  * [ ![Use Portainer in a Homelab with GitHub](https://jameskilby.co.uk/wp-content/uploads/2022/12/22225832.png) ](https://jameskilby.co.uk/2022/12/use-portainer-in-a-homelab-with-github/)

[Docker](https://jameskilby.co.uk/category/docker/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Kubernetes](https://jameskilby.co.uk/category/kubernetes/)

### [Use Portainer in a Homelab with GitHub](https://jameskilby.co.uk/2022/12/use-portainer-in-a-homelab-with-github/)

By[James](https://jameskilby.co.uk) December 9, 2022October 1, 2025

Late to the party or not, I have been using containers in my lab more and more and that has led me to Portainer…. I use it for managing the docker containers on my Synology but it can also be used for managing lots of other things. In their own words “Portainer accelerates container adoption….

  * [ ![VMware Certified Master Specialist HCI 2020](https://jameskilby.co.uk/wp-content/uploads/2020/09/vmware_SP_HCI20.png) ](https://jameskilby.co.uk/2020/09/vmware-certified-master-specialist-hci-2020/)

[Personal](https://jameskilby.co.uk/category/personal/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [VMware Certified Master Specialist HCI 2020](https://jameskilby.co.uk/2020/09/vmware-certified-master-specialist-hci-2020/)

By[James](https://jameskilby.co.uk) September 13, 2020November 11, 2023

I recently sat (and passed the VMware HCI Master Specialist exam (5V0-21.20). I won’t go into any details of the contents but I will comment that I felt the questions were fair and that there wasn’t anything in it to trip you up. The required knowledge was certainly wider than the vSAN specialist exam. This…

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Veeam](https://jameskilby.co.uk/category/veeam/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Lab Update – Desired Workloads](https://jameskilby.co.uk/2022/01/lab-update-part-5-desired-workloads/)

By[James](https://jameskilby.co.uk) January 6, 2022November 11, 2023

My lab is always undergoing change. Partially as I want to try new things or new ways of doing things. Sometimes because I break things (not always by accident) sometimes it’s a great way to learn…. I decided to list the workloads I am looking to run (some of these are already in place) Infrastucture…

  * [ ![How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/wp-content/uploads/2025/01/Screenshot-2025-01-29-at-23.30.47-768x411.png) ](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)

[Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Docker](https://jameskilby.co.uk/category/docker/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)

By[James](https://jameskilby.co.uk) January 29, 2025January 18, 2026

Update: Hoarder has now been renamed to Karakeep due to a trademark issue I’ve been on a mission recently to regain control of my data. I haven’t yet faced the humongous task of moving my main email from Gmail, but I have had some successes with other cloud services and a win is a win…….