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
  - VMware
  - Cloudflare
  - Wordpress
  - Devops
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

  * [ ![VMware Certified Master Specialist HCI 2020](https://jameskilby.co.uk/wp-content/uploads/2020/09/vmware_SP_HCI20.png) ](https://jameskilby.co.uk/2020/09/vmware-certified-master-specialist-hci-2020/)

[Personal](https://jameskilby.co.uk/category/personal/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [VMware Certified Master Specialist HCI 2020](https://jameskilby.co.uk/2020/09/vmware-certified-master-specialist-hci-2020/)

By[James](https://jameskilby.co.uk) September 13, 2020November 11, 2023

I recently sat (and passed the VMware HCI Master Specialist exam (5V0-21.20). I won’t go into any details of the contents but I will comment that I felt the questions were fair and that there wasn’t anything in it to trip you up. The required knowledge was certainly wider than the vSAN specialist exam. This…

  * [ ![Wrangler and Node versions](https://jameskilby.co.uk/wp-content/uploads/2022/01/WranglerCrab-1-768x256.png) ](https://jameskilby.co.uk/2022/01/wrangler-and-node-versions/)

[Cloudflare](https://jameskilby.co.uk/category/cloudflare/)

### [Wrangler and Node versions](https://jameskilby.co.uk/2022/01/wrangler-and-node-versions/)

By[James](https://jameskilby.co.uk) January 15, 2022April 10, 2023

I am a massive fan of the brew package management system for macOS and use it on all of my Mac’s I typically just upgrade everything blindly and have never had an issue….. Until today… I went to push some changes to this site and got the following error message A quick bit of digging…

  * [ ![Static WordPress hosting using Cloudflare](https://jameskilby.co.uk/wp-content/uploads/2022/10/iu-768x450.jpeg) ](https://jameskilby.co.uk/2022/10/how-i-moved-my-wordpress-site-to-cloudflare-pages/)

[Cloudflare](https://jameskilby.co.uk/category/cloudflare/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Wordpress](https://jameskilby.co.uk/category/wordpress/)

### [Static WordPress hosting using Cloudflare](https://jameskilby.co.uk/2022/10/how-i-moved-my-wordpress-site-to-cloudflare-pages/)

By[James](https://jameskilby.co.uk) October 20, 2022December 27, 2025

For a while now I have been running this site directly from Cloudflare utilising their excellent worker’s product. I did this originally as a learning exercise but due to the benefits It brought and the ease of use I decided to stick with it. The benefits are several fold: Crazy Web Performance (Typically full page…

  * [ ![Web Development Improvements](https://jameskilby.co.uk/wp-content/uploads/2026/01/Website-Optimisations-768x560.png) ](https://jameskilby.co.uk/2026/01/web-development-improvements/)

[Cloudflare](https://jameskilby.co.uk/category/cloudflare/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Wordpress](https://jameskilby.co.uk/category/wordpress/)

### [Web Development Improvements](https://jameskilby.co.uk/2026/01/web-development-improvements/)

By[James](https://jameskilby.co.uk) January 15, 2026January 17, 2026

I have spent the Christmas break making some improvements to this blog. A lot of these are in “the backend” These help improve the performance, Privacy, SEO, and I have also added some security best practices. Most of these changes were done more as an exercise than due to a specific requirement. I also had…

  * [ ![My First Pull](https://jameskilby.co.uk/wp-content/uploads/2020/12/175jvBleoQfAZJc3sgTSPQA.jpg) ](https://jameskilby.co.uk/2020/12/my-first-pull/)

[Devops](https://jameskilby.co.uk/category/devops/) | [Personal](https://jameskilby.co.uk/category/personal/)

### [My First Pull](https://jameskilby.co.uk/2020/12/my-first-pull/)

By[James](https://jameskilby.co.uk) December 22, 2020December 8, 2025

I was initially going to add in the contents of this post to one that I have been writing about my exploits with HashiCorp Packer but I decided it probably warranted being separated out. While working with the following awesome project I noticed a couple of minor errors and Improvements that I wanted to suggest….