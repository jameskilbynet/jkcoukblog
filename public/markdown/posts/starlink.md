---
title: "Starlink"
description: "Adding Starlink as another internet connection"
date: 2022-10-11T21:40:50+00:00
modified: 2025-10-01T15:22:14+00:00
author: James Kilby
categories:
  - Homelab
  - Hosting
  - Nutanix
  - VMware
  - Cloudflare
  - Wordpress
  - Networking
  - Personal
  - Automation
tags:
  - #Homelab
  - #Starlink
url: https://jameskilby.co.uk/2022/10/starlink/
image: https://jameskilby.co.uk/wp-content/uploads/2022/10/spacexs-starlink-to-supply-free-satellite-internet-to-famili_u44u.1920.jpg
---

![](https://jameskilby.co.uk/wp-content/uploads/2022/10/spacexs-starlink-to-supply-free-satellite-internet-to-famili_u44u.1920.jpg)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

# Starlink

By[James](https://jameskilby.co.uk) October 11, 2022October 1, 2025 • 📖4 min read(747 words)

📅 **Published:** October 11, 2022• **Updated:** October 01, 2025

Since moving to Dorset last year internet connectivity has been the bane of my existence. Currently, I have an ADSL connection provided by my old employer Zen and a 5G connection provided by Three. These are both plumbed into my WatchGuard Firewall with multi-wan configured. Most of the time the usability is ok but there are multiple times a day when latency or packet loss is not acceptable. From living at previous locations where I had multiple companies that would deliver Gigabit Internet connections it was far from ideal. My job at VMware involves numerous calls with customers every day, typically presenting things to them and often with video on. Even a small interruption can leave a bad impression. VMware sells an SDWan product (Velocloud) and enables staff to use them. I was given one not long after I started, however, integrating it with my network has been suboptimal (as the device is locked down by VMware Corporate IT) 

One of the nice features of the WatchGuard is that it monitors the WAN interfaces for me. At the time of writing this blog the Zen interface was dropping approx 10% of traffic (This is unusually bad) and although it isn’t easy to see the Three interface was also a non-zero packet loss. The Starlink one is showing as I had configured the interface but it was not connected at the time.

![](https://jameskilby.co.uk/wp-content/uploads/2023/04/Screenshot-2022-10-05-at-12.56.21-1-1024x187.png)Packet Loss on WAN interfaces

Given we have no plans to move I decided to bite the bullet and pay for Starlink. Prior to doing this I downloaded the Starlink App and used the Visibility function to scan the sky for obstructions. I climbed out onto part of our roof that is flat and scanned the sky. This uses the iPhone camera and the accelerometer’s to scan the sky for obstructions. Luckily the results were positive. 

The intention is to drop the Zen connection when my contract runs out in a few months’ time. I can work around not having the /29 that comes with it with some Cloudflare magic that I will try and document in a follow-up post.

One thing to remember is that by default Starlink doesn’t ship you an ethernet adaptor. I ordered mine on the same day but it was shipped separately meaning I had to wait a few days before I could properly hook the system up. It’s a bit annoying to pay for an extra adaptor but £35 won’t break the bank. The other thing to pay attention to is the length of cable that you need. I went for the standard 75ft cable but it only just covers the length I need to get back to my firewall.

While waiting on the adaptor I decided to do some speed tests over Wifi from my iPhone 13 Pro

![](https://jameskilby.co.uk/wp-content/uploads/2023/04/IMG_8711-805x1024.png)

To prove it wasn’t Starlink massaging the numbers I also performed a number of speed tests to other third parties and got broadly similar results. 

When the ethernet adaptor arrived I put the Starlink router in bypass mode. This can only be done from the iOS/Android App. The WatchGuard firewall interface was set to DHCP but once bypass was enabled it would not pick up a new address. I, therefore, rebooted the firewall and it came back with a CGNAT 100.65.x.x address removing the additional level of NAT. I will add a static entry on the firewall so I can still get to the Starlink management page. I believe the business service offers a fully routable IP.

![](https://jameskilby.co.uk/wp-content/uploads/2023/04/IMG_8718-710x1536-1-473x1024.png)

Once all the above had been done. It was a case of connecting Starlink to the relevant port on my firewall. I had already configured the port as an “External interface” and set the IP endpoint to monitor. The WatchGuard immediately picked up that the ethernet port came up and tried to hit its monitoring endpoint. As soon as this was successful traffic started to route over this link as intended.

![](https://jameskilby.co.uk/wp-content/uploads/2023/04/Screenshot-2022-10-11-at-13.03.37-2048x695-1-1024x348.png)Traffic starting to use Starlink ( Bottom Left) 

Due to the way I have configured traffic egress from the WatchGuard to the internet each TCP/IP session will stay on a link (unless there is a failure) and they will get moved to the next available link. New sessions will be distributed based on the weightings I have applied. With the WatchGuard I have this configured on a per-firewall policy basis. Most traffic I allow uses any available link however some traffic I steer e.g. SMTP is configured to only use the Zen link.

## Similar Posts

  * [ ![New Nodes](https://jameskilby.co.uk/wp-content/uploads/2024/07/IMG_6629-768x149.jpeg) ](https://jameskilby.co.uk/2024/07/new-nodes/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Nutanix](https://jameskilby.co.uk/category/nutanix/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [New Nodes](https://jameskilby.co.uk/2024/07/new-nodes/)

By[James](https://jameskilby.co.uk) July 2, 2024January 18, 2026

I recently decided to update some of my homelab hosts and I managed to do this at very little cost by offloading 2 of my Supermicro e200’s to fellow vExpert Paul. The below post describes what I bought why and how I have configured it. Table of Contents Node Choice Bill of Materials Rescue IPMI…

  * [ ![Static WordPress hosting using Cloudflare](https://jameskilby.co.uk/wp-content/uploads/2022/10/iu-768x450.jpeg) ](https://jameskilby.co.uk/2022/10/how-i-moved-my-wordpress-site-to-cloudflare-pages/)

[Cloudflare](https://jameskilby.co.uk/category/cloudflare/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Wordpress](https://jameskilby.co.uk/category/wordpress/)

### [Static WordPress hosting using Cloudflare](https://jameskilby.co.uk/2022/10/how-i-moved-my-wordpress-site-to-cloudflare-pages/)

By[James](https://jameskilby.co.uk) October 20, 2022December 27, 2025

For a while now I have been running this site directly from Cloudflare utilising their excellent worker’s product. I did this originally as a learning exercise but due to the benefits It brought and the ease of use I decided to stick with it. The benefits are several fold: Crazy Web Performance (Typically full page…

  * [ ![Configure DHCP Option 43 for UniFi devices to enable remote adoption across subnets](https://jameskilby.co.uk/wp-content/uploads/2024/06/Ubiquiti_Networks-Logo.wine_-768x512.png) ](https://jameskilby.co.uk/2024/06/unifi-dhcp-option-43/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Networking](https://jameskilby.co.uk/category/networking/)

### [Configure DHCP Option 43 for UniFi devices to enable remote adoption across subnets](https://jameskilby.co.uk/2024/06/unifi-dhcp-option-43/)

By[James](https://jameskilby.co.uk) June 26, 2024January 18, 2026

How to configure DHCP Option 43 for UniFi devices 

  * [ ![Analytics in a privacy focused world](https://jameskilby.co.uk/wp-content/uploads/2023/11/plausible-analytics-icon-top.png) ](https://jameskilby.co.uk/2023/11/analytics-in-a-privacy-focused-world/)

[Hosting](https://jameskilby.co.uk/category/hosting/) | [Personal](https://jameskilby.co.uk/category/personal/)

### [Analytics in a privacy focused world](https://jameskilby.co.uk/2023/11/analytics-in-a-privacy-focused-world/)

By[James](https://jameskilby.co.uk) November 10, 2023October 1, 2025

I recently helped my friend Dean Lewis @veducate with some hosting issues. As part of the testing of this he kindly gave me a login to his WordPress instance. He has been a pretty prolific blogger over the years pumping out an amazing amount of really good content. It also highlighted to me that I…

  * [ ![Template Deployment with Packer](https://jameskilby.co.uk/wp-content/uploads/2021/01/logo_packer.png) ](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

[Automation](https://jameskilby.co.uk/category/automation/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Template Deployment with Packer](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

By[James](https://jameskilby.co.uk) January 21, 2021December 8, 2025

Packer is one of those tools I have heard about, and some of the cool people on Twitter that I follow have been using it for a while. But until now I had never played with it. That was until I saw the below tweet by the legend that is William Lam That was the…

  * [ ](https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Lab Update – Compute](https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/)

By[James](https://jameskilby.co.uk) January 6, 2022July 10, 2024

Quite a few changes have happened in the lab recently. so I decided to do a multipart blog on the changes. The refresh was triggered by the purchase of a SuperMicro Server (2027TR-H71FRF) chassis with 4x X9DRT Nodes / Blades. This is known as a BigTwin configuration in SuperMicro parlance. This is something I was…