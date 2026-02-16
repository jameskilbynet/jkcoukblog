---
title: "Analytics in a privacy focused world"
description: "Analytics in a privacy focused world: Learn how to implement privacy-friendly analytics solutions for your blog today!"
date: 2023-11-10T16:45:03+00:00
modified: 2025-10-01T15:22:13+00:00
author: James Kilby
categories:
  - Hosting
  - Personal
  - AWS
  - Cloudflare
  - Wordpress
  - Homelab
  - Consulting
  - Devops
  - Docker
  - Kubernetes
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

By[James](https://jameskilby.co.uk) November 10, 2023October 1, 2025 • 📖1 min read(254 words)

📅 **Published:** November 10, 2023• **Updated:** October 01, 2025

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

  * [ ![AWS Solution Architect – Associate](https://jameskilby.co.uk/wp-content/uploads/2018/05/AmazonWebservices_Logo.svg_-768x307.png) ](https://jameskilby.co.uk/2019/12/aws-solution-architect-associate/)

[AWS](https://jameskilby.co.uk/category/aws/) | [Personal](https://jameskilby.co.uk/category/personal/)

### [AWS Solution Architect – Associate](https://jameskilby.co.uk/2019/12/aws-solution-architect-associate/)

By[James](https://jameskilby.co.uk) December 16, 2019December 4, 2025

Today was a good day. I renewed my AWS Solution Architect certification. Although my work is primarily in and around the VMware ecosystem I have been working a lot with VMware Cloud on AWS recently with a number of our customers. Having a good foundation of the core AWS services has…

  * [ ![Web Development](https://jameskilby.co.uk/wp-content/uploads/2020/06/iu-2-768x229.png) ](https://jameskilby.co.uk/2022/01/web-development/)

[Hosting](https://jameskilby.co.uk/category/hosting/) | [Cloudflare](https://jameskilby.co.uk/category/cloudflare/) | [Personal](https://jameskilby.co.uk/category/personal/) | [Wordpress](https://jameskilby.co.uk/category/wordpress/)

### [Web Development](https://jameskilby.co.uk/2022/01/web-development/)

By[James](https://jameskilby.co.uk) January 4, 2022October 1, 2025

A while ago I started messing with Cloudflare Workers. I have now moved this site permanently over to them. This is partly related to some issues I have been having with internet access at home. Prior to this, the site ran from within my lab. This means the site is now super fast (hopefully :p)….

  * [ ![Starlink](https://jameskilby.co.uk/wp-content/uploads/2022/10/spacexs-starlink-to-supply-free-satellite-internet-to-famili_u44u.1920-768x432.jpg) ](https://jameskilby.co.uk/2022/10/starlink/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [Starlink](https://jameskilby.co.uk/2022/10/starlink/)

By[James](https://jameskilby.co.uk) October 11, 2022October 1, 2025

Since moving to Dorset last year internet connectivity has been the bane of my existence. Currently, I have an ADSL connection provided by my old employer Zen and a 5G connection provided by Three. These are both plumbed into my WatchGuard Firewall with multi-wan configured. Most of the time the usability is ok but there…

  * [ ![My Home Office Setup & Upgrades](https://jameskilby.co.uk/wp-content/uploads/2023/05/IMG_7017-scaled-1-768x576.jpeg) ](https://jameskilby.co.uk/2021/01/my-home-office-setup-upgrades/)

[Personal](https://jameskilby.co.uk/category/personal/) | [Consulting](https://jameskilby.co.uk/category/consulting/)

### [My Home Office Setup & Upgrades](https://jameskilby.co.uk/2021/01/my-home-office-setup-upgrades/)

By[James](https://jameskilby.co.uk) January 5, 2021October 1, 2025

Given the year that was 2020 and at the time of writing a distinct improvement appears a long way off I decided it was time to up my homeworking game. I bought a beautiful Dell 49″ monitor back in mid-2020 that has been the central focus of my home office. With this setup I always…

  * [ ![My First Pull](https://jameskilby.co.uk/wp-content/uploads/2020/12/175jvBleoQfAZJc3sgTSPQA.jpg) ](https://jameskilby.co.uk/2020/12/my-first-pull/)

[Devops](https://jameskilby.co.uk/category/devops/) | [Personal](https://jameskilby.co.uk/category/personal/)

### [My First Pull](https://jameskilby.co.uk/2020/12/my-first-pull/)

By[James](https://jameskilby.co.uk) December 22, 2020December 8, 2025

I was initially going to add in the contents of this post to one that I have been writing about my exploits with HashiCorp Packer but I decided it probably warranted being separated out. While working with the following awesome project I noticed a couple of minor errors and Improvements that I wanted to suggest….

  * [ ![Use Portainer in a Homelab with GitHub](https://jameskilby.co.uk/wp-content/uploads/2022/12/22225832.png) ](https://jameskilby.co.uk/2022/12/use-portainer-in-a-homelab-with-github/)

[Docker](https://jameskilby.co.uk/category/docker/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Kubernetes](https://jameskilby.co.uk/category/kubernetes/)

### [Use Portainer in a Homelab with GitHub](https://jameskilby.co.uk/2022/12/use-portainer-in-a-homelab-with-github/)

By[James](https://jameskilby.co.uk) December 9, 2022October 1, 2025

Late to the party or not, I have been using containers in my lab more and more and that has led me to Portainer…. I use it for managing the docker containers on my Synology but it can also be used for managing lots of other things. In their own words “Portainer accelerates container adoption….