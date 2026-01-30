---
title: "Cloudflare"
description: "Learn how Cloudflare's WAF and CDN can protect your site. Start leveraging their free tier for improved global performance today!"
date: 2018-03-27T12:30:48+00:00
modified: 2024-12-08T21:43:07+00:00
author: James Kilby
categories:
  - Hosting
  - Cloudflare
  - Wordpress
  - Docker
  - Homelab
  - Kubernetes
  - Artificial Intelligence
tags:
  - #Cloudflare
url: https://jameskilby.co.uk/2018/03/cloudflare/
image: https://jameskilby.co.uk/wp-content/uploads/2020/06/iu-2.png
---

![](https://jameskilby.co.uk/wp-content/uploads/2020/06/iu-2.png)

[Hosting](https://jameskilby.co.uk/category/hosting/)

# Cloudflare

By[James](https://jameskilby.co.uk) March 27, 2018December 8, 2024 • 📖1 min read(288 words)

📅 **Published:** March 27, 2018• **Updated:** December 08, 2024

## Cloudflare – What is it and why would I care?

I have been using Cloudflare for a long time. It is one of my go-to services and I use it to protect all of the public services I run for myself and other sites/ organizations.

The basic premise of what Cloudflare do is that they are a distributed Web Application Firewall (WAF) and CDN but they also offer so much more. Because they have a large number of POP’s they can cache and push content closer to your end users to give them a better experience. This also offloads work from your firewalls, DNS, Web and Database servers. At present they have [139 sites](https://www.cloudflare.com/network/) globally allowing you to host a site anywhere and get good global performance.

Cloudflare has an amazing free tier so you can get started easily. I use this to host all of my public DNS records. So what does that look like?

[codeblocks name=’host -a’]

As you can see they have given me 2 Nameserver records (Matt and Fay) and also 2 A records Neither of which are my source web server.

Then within the Cloudflare portal, you input where the real webserver lives cloudflare will do the rest. My blog is still a little bit light on readership but you can see Cloudflare handling the spike in requests.

They are also handling the SSL cert for me and the redirect so all traffic is HTTPS to my site allowing me to close port 80 on the firewall all within the free tier.

If you are using WordPress I would strongly recommend the Cloudflare plugin is installed. This way when you make changes to your site it will automatically purge the cache if required

## Similar Posts

  * [ ![Web Development Improvements](https://jameskilby.co.uk/wp-content/uploads/2026/01/Website-Optimisations-768x560.png) ](https://jameskilby.co.uk/2026/01/web-development-improvements/)

[Cloudflare](https://jameskilby.co.uk/category/cloudflare/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Wordpress](https://jameskilby.co.uk/category/wordpress/)

### [Web Development Improvements](https://jameskilby.co.uk/2026/01/web-development-improvements/)

By[James](https://jameskilby.co.uk) January 15, 2026January 17, 2026

I have spent the Christmas break making some improvements to this blog. A lot of these are in “the backend” These help improve the performance, Privacy, SEO, and I have also added some security best practices. Most of these changes were done more as an exercise than due to a specific requirement. I also had…

  * [ ![Use Portainer in a Homelab with GitHub](https://jameskilby.co.uk/wp-content/uploads/2022/12/22225832.png) ](https://jameskilby.co.uk/2022/12/use-portainer-in-a-homelab-with-github/)

[Docker](https://jameskilby.co.uk/category/docker/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Kubernetes](https://jameskilby.co.uk/category/kubernetes/)

### [Use Portainer in a Homelab with GitHub](https://jameskilby.co.uk/2022/12/use-portainer-in-a-homelab-with-github/)

By[James](https://jameskilby.co.uk) December 9, 2022October 1, 2025

Late to the party or not, I have been using containers in my lab more and more and that has led me to Portainer…. I use it for managing the docker containers on my Synology but it can also be used for managing lots of other things. In their own words “Portainer accelerates container adoption….

  * [ ![How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/wp-content/uploads/2025/01/Screenshot-2025-01-29-at-23.30.47-768x411.png) ](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)

[Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Docker](https://jameskilby.co.uk/category/docker/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)

By[James](https://jameskilby.co.uk) January 29, 2025January 18, 2026

Update: Hoarder has now been renamed to Karakeep due to a trademark issue I’ve been on a mission recently to regain control of my data. I haven’t yet faced the humongous task of moving my main email from Gmail, but I have had some successes with other cloud services and a win is a win…….

  * [ ![Starlink](https://jameskilby.co.uk/wp-content/uploads/2022/10/spacexs-starlink-to-supply-free-satellite-internet-to-famili_u44u.1920-768x432.jpg) ](https://jameskilby.co.uk/2022/10/starlink/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [Starlink](https://jameskilby.co.uk/2022/10/starlink/)

By[James](https://jameskilby.co.uk) October 11, 2022October 1, 2025

Since moving to Dorset last year internet connectivity has been the bane of my existence. Currently, I have an ADSL connection provided by my old employer Zen and a 5G connection provided by Three. These are both plumbed into my WatchGuard Firewall with multi-wan configured. Most of the time the usability is ok but there…

  * [ ![WordPress Hosting with Cloudflare  Pages](https://jameskilby.co.uk/wp-content/uploads/2023/05/simply-static-logo.png) ](https://jameskilby.co.uk/2023/05/how-to-take-a-wordpress-site-and-publish-it-as-a-static-site-on-cloudflare-pages/)

[Cloudflare](https://jameskilby.co.uk/category/cloudflare/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Wordpress](https://jameskilby.co.uk/category/wordpress/)

### [WordPress Hosting with Cloudflare Pages](https://jameskilby.co.uk/2023/05/how-to-take-a-wordpress-site-and-publish-it-as-a-static-site-on-cloudflare-pages/)

By[James](https://jameskilby.co.uk) May 14, 2023October 1, 2025

Table of Contents The Tooling The Process WordPress Plugin Install GitHub setup Cloudflare setup I have been using Cloudflare to protect my web assets for a really long time. Throughout that time Cloudflare has been improving there capabilities and approximately 2 years ago I decided to move this blog into their worker’s product. This meant…

  * [ ![Cloudflare Workers – Limits of the free tier](https://jameskilby.co.uk/wp-content/uploads/2022/10/iu-768x450.jpeg) ](https://jameskilby.co.uk/2022/01/cloudflare-workers-limits-of-the-free-tier/)

[Hosting](https://jameskilby.co.uk/category/hosting/) | [Wordpress](https://jameskilby.co.uk/category/wordpress/)

### [Cloudflare Workers – Limits of the free tier](https://jameskilby.co.uk/2022/01/cloudflare-workers-limits-of-the-free-tier/)

By[James](https://jameskilby.co.uk) January 4, 2022April 9, 2023

I have been making several changes (mainly cosmetic to this site over the last day or so) On most changes I have been doing an export and then uploading the site to Cloudflare using Wrangler. After a while I received an email from Cloudflare saying: Hi, You’re 50% of the way to reaching one of…