---
title: "Starlink"
description: "Adding Starlink as another internet connection"
date: 2022-10-11T21:40:50+00:00
modified: 2025-10-01T15:22:14+00:00
author: James Kilby
categories:
  - Homelab
  - Hosting
  - Automation
  - VMware
  - Storage
  - Synology
  - Wordpress
  - vSphere
  - Cloudflare
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

  * [ ![Template Deployment with Packer](https://jameskilby.co.uk/wp-content/uploads/2021/01/logo_packer.png) ](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

[Automation](https://jameskilby.co.uk/category/automation/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Template Deployment with Packer](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

By[James](https://jameskilby.co.uk) January 21, 2021December 8, 2025

Packer is one of those tools I have heard about, and some of the cool people on Twitter that I follow have been using it for a while. But until now I had never played with it. That was until I saw the below tweet by the legend that is William Lam That was the…

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [Synology](https://jameskilby.co.uk/category/synology/)

### [Lab Storage](https://jameskilby.co.uk/2018/01/lab-storage/)

By[James](https://jameskilby.co.uk) January 6, 2018July 10, 2024

I have been meaning to post around some of the lab setup for a while. Although it changes frequently at present it’s as below. I will add some pics when I have tidied up the lab/cables My primary lab storage is all contained within an HP Gen8 Microserver. Currently Configured: 1x INTEL Core i3-4130 running at…

  * [ ![Cloudflare Workers – Limits of the free tier](https://jameskilby.co.uk/wp-content/uploads/2022/10/iu-768x450.jpeg) ](https://jameskilby.co.uk/2022/01/cloudflare-workers-limits-of-the-free-tier/)

[Hosting](https://jameskilby.co.uk/category/hosting/) | [Wordpress](https://jameskilby.co.uk/category/wordpress/)

### [Cloudflare Workers – Limits of the free tier](https://jameskilby.co.uk/2022/01/cloudflare-workers-limits-of-the-free-tier/)

By[James](https://jameskilby.co.uk) January 4, 2022April 9, 2023

I have been making several changes (mainly cosmetic to this site over the last day or so) On most changes I have been doing an export and then uploading the site to Cloudflare using Wrangler. After a while I received an email from Cloudflare saying: Hi, You’re 50% of the way to reaching one of…

  * [ ](https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Lab Update – Compute](https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/)

By[James](https://jameskilby.co.uk) January 6, 2022July 10, 2024

Quite a few changes have happened in the lab recently. so I decided to do a multipart blog on the changes. The refresh was triggered by the purchase of a SuperMicro Server (2027TR-H71FRF) chassis with 4x X9DRT Nodes / Blades. This is known as a BigTwin configuration in SuperMicro parlance. This is something I was…

  * [ ![Forcing an Upgrade to vSphere 8](https://jameskilby.co.uk/wp-content/uploads/2022/12/Screenshot-2022-12-14-at-21.45.23.png) ](https://jameskilby.co.uk/2022/12/forcing-an-upgrade-to-vsphere-8/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [Forcing an Upgrade to vSphere 8](https://jameskilby.co.uk/2022/12/forcing-an-upgrade-to-vsphere-8/)

By[James](https://jameskilby.co.uk) December 14, 2022October 1, 2025

I run a reasonably extensive homelab that is of course built around the VMware ecosystem. So with the release of vSphere 8 I was obviously going to upgrade however a few personal things blocked me from doing it until now. The vCenter upgrade was smooth however knowing that some of the hardware I am running…

  * [ ![Web Development Improvements](https://jameskilby.co.uk/wp-content/uploads/2026/01/Website-Optimisations-768x560.png) ](https://jameskilby.co.uk/2026/01/web-development-improvements/)

[Cloudflare](https://jameskilby.co.uk/category/cloudflare/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Wordpress](https://jameskilby.co.uk/category/wordpress/)

### [Web Development Improvements](https://jameskilby.co.uk/2026/01/web-development-improvements/)

By[James](https://jameskilby.co.uk) January 15, 2026January 17, 2026

I have spent the Christmas break making some improvements to this blog. A lot of these are in “the backend” These help improve the performance, Privacy, SEO, and I have also added some security best practices. Most of these changes were done more as an exercise than due to a specific requirement. I also had…