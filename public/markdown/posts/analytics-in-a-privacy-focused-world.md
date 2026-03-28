---
title: "Analytics in a privacy focused world"
description: "Analytics in a privacy focused world: Learn how to implement privacy-friendly analytics solutions for your blog today!"
date: 2023-11-10T16:45:03+00:00
modified: 2026-03-10T20:35:12+00:00
author: James Kilby
categories:
  - Hosting
  - Personal
  - AWS
  - Cloudflare
  - Wordpress
  - Consulting
  - Artificial Intelligence
  - Docker
  - VMware
  - vSphere
tags:
  - #Analytics
  - #Cloudflare
  - #Hosting
  - #Ingress
  - #Plausible
  - #Privacy
  - #Tunnel
url: https://jameskilby.co.uk/2023/11/analytics-in-a-privacy-focused-world/
image: https://jameskilby.co.uk/wp-content/uploads/2023/11/plausible-analytics-icon-top.png
---

![](https://jameskilby.co.uk/wp-content/uploads/2023/11/plausible-analytics-icon-top.png)

[Hosting](https://jameskilby.co.uk/category/hosting/) | [Personal](https://jameskilby.co.uk/category/personal/)

# Analytics in a privacy focused world

By[James](https://jameskilby.co.uk) November 10, 2023March 10, 2026 • 📖1 min read(254 words)

📅 **Published:** November 10, 2023• **Updated:** March 10, 2026

I recently helped my friend Dean Lewis [@veducate](https://veducate.co.uk) with some hosting issues. As part of the testing of this he kindly gave me a login to his WordPress instance. He has been a pretty prolific blogger over the years pumping out an amazing amount of really good content. It also highlighted to me that I didn’t know if anyone was reading my blog as i removed Google Analytics years ago over privacy concerns. I had seen from Myles’s [blog](http://blah.cloud) that he had done something similar as part of his blog revamp. Myles was using [Plausible](https://plausible.io/open-source-website-analytics) and seeing as they had a self hosted version of this I decided to give it a whirl.

## Install 

Luckily for me Truecharts has a prebuilt plausible container so i fired that up and set an ingress entry of plausible.jameskilby.cloud on the container so that it uses my Traefik instance as an entry into my Truenas K3s environment. In my WordPress origin site I added the Plausible plugin and defined the endpoint. The last step was to expose the container to the outside world. To do this I created a public DNS record in Cloudflare and pointed this at an existing Cloudflare tunnel terminating in my Truenas K3s setup. 

The entire process took approx 30 mins to setup and Im really pleased with the results. 

![Plausible results](https://jameskilby.co.uk/wp-content/uploads/2023/11/Screenshot-2023-11-10-at-16.42.39-1024x527.png)

Plausible real time stats

Update:

I am now happy with this and have decided to make my stats public to show exactly what information I can and can’t see. This can be seen [here](https://plausible.jameskilby.cloud/jameskilby.co.uk/)

## 📚 Related Posts

  * [Web Development Improvements](https://jameskilby.co.uk/2026/01/web-development-improvements/)
  * [How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)
  * [WordPress Hosting with Cloudflare Pages](https://jameskilby.co.uk/2023/05/how-to-take-a-wordpress-site-and-publish-it-as-a-static-site-on-cloudflare-pages/)

## Similar Posts

  * [ ![AWS Status Page – Monitoring Included](https://jameskilby.co.uk/wp-content/uploads/2018/05/AmazonWebservices_Logo.svg_-768x307.png) ](https://jameskilby.co.uk/2018/05/aws-status-page-monitoring-included/)

[AWS](https://jameskilby.co.uk/category/aws/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [AWS Status Page – Monitoring Included](https://jameskilby.co.uk/2018/05/aws-status-page-monitoring-included/)

By[James](https://jameskilby.co.uk) May 15, 2018March 10, 2026

AWS Status Page – Enhancements The tool I deployed lambstatus supports pulling metrics from AWS Cloudwatch and displaying them. As part of my personal development, I thought I would include this on my status page. I managed to get this working as can be seen here. This is a lambda function running once a minute…

  * [ ![WordPress Hosting with Cloudflare  Pages](https://jameskilby.co.uk/wp-content/uploads/2023/05/simply-static-logo.png) ](https://jameskilby.co.uk/2023/05/how-to-take-a-wordpress-site-and-publish-it-as-a-static-site-on-cloudflare-pages/)

[Cloudflare](https://jameskilby.co.uk/category/cloudflare/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Wordpress](https://jameskilby.co.uk/category/wordpress/)

### [WordPress Hosting with Cloudflare Pages](https://jameskilby.co.uk/2023/05/how-to-take-a-wordpress-site-and-publish-it-as-a-static-site-on-cloudflare-pages/)

By[James](https://jameskilby.co.uk) May 14, 2023March 10, 2026

Table of Contents The Tooling The Process WordPress Plugin Install GitHub setup Cloudflare setup I have been using Cloudflare to protect my web assets for a really long time. Throughout that time Cloudflare has been improving there capabilities and approximately 2 years ago I decided to move this blog into their worker’s product. This meant…

  * [ ![Wrangler and Node versions](https://jameskilby.co.uk/wp-content/uploads/2022/01/WranglerCrab-1-768x256.png) ](https://jameskilby.co.uk/2022/01/wrangler-and-node-versions/)

[Cloudflare](https://jameskilby.co.uk/category/cloudflare/)

### [Wrangler and Node versions](https://jameskilby.co.uk/2022/01/wrangler-and-node-versions/)

By[James](https://jameskilby.co.uk) January 15, 2022April 10, 2023

I am a massive fan of the brew package management system for macOS and use it on all of my Mac’s I typically just upgrade everything blindly and have never had an issue….. Until today… I went to push some changes to this site and got the following error message A quick bit of digging…

  * [ ![My Home Office Setup & Upgrades](https://jameskilby.co.uk/wp-content/uploads/2023/05/IMG_7017-scaled-1-768x576.jpeg) ](https://jameskilby.co.uk/2021/01/my-home-office-setup-upgrades/)

[Personal](https://jameskilby.co.uk/category/personal/) | [Consulting](https://jameskilby.co.uk/category/consulting/)

### [My Home Office Setup & Upgrades](https://jameskilby.co.uk/2021/01/my-home-office-setup-upgrades/)

By[James](https://jameskilby.co.uk) January 5, 2021March 10, 2026

Given the year that was 2020 and at the time of writing a distinct improvement appears a long way off I decided it was time to up my homeworking game. I bought a beautiful Dell 49″ monitor back in mid-2020 that has been the central focus of my home office. With this setup I always…

  * [ ![How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/wp-content/uploads/2025/01/Screenshot-2025-01-29-at-23.30.47-768x411.png) ](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)

[Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Docker](https://jameskilby.co.uk/category/docker/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)

By[James](https://jameskilby.co.uk) January 29, 2025March 10, 2026

Update: Hoarder has now been renamed to Karakeep due to a trademark issue I’ve been on a mission recently to regain control of my data. I haven’t yet faced the humongous task of moving my main email from Gmail, but I have had some successes with other cloud services and a win is a win…….

  * [ ![Advanced Deploy VMware vSphere 7.x 3V0-22.21N](https://jameskilby.co.uk/wp-content/uploads/2023/11/image.png) ](https://jameskilby.co.uk/2023/11/advanced-deploy-vmware-vsphere-7-x-3v0-22-21n/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [Personal](https://jameskilby.co.uk/category/personal/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [Advanced Deploy VMware vSphere 7.x 3V0-22.21N](https://jameskilby.co.uk/2023/11/advanced-deploy-vmware-vsphere-7-x-3v0-22-21n/)

By[James](https://jameskilby.co.uk) November 10, 2023March 10, 2026

Yesterday I sat and passed the above exam. It had been on my todo list for a good number of years. With the current pause in the Broadcom VMware takeover deal. I had some downtime and decided to use one of the three exam vouchers VMware give me each year. This upgrades me to a…