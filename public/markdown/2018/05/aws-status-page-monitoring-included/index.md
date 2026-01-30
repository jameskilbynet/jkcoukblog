---
title: "AWS Status Page – Monitoring Included"
description: "LambStatus, Monitoring, AWS, Lambda"
date: 2018-05-15T21:41:14+00:00
modified: 2025-10-01T15:22:16+00:00
author: James Kilby
categories:
  - AWS
  - Hosting
  - VMware
  - VMware Cloud on AWS
  - Cloudflare
  - Personal
  - Wordpress
  - Docker
  - Homelab
  - Kubernetes
tags:
  - #AWS
  - #Lambda
url: https://jameskilby.co.uk/2018/05/aws-status-page-monitoring-included/
image: https://jameskilby.co.uk/wp-content/uploads/2018/05/AmazonWebservices_Logo.svg_.png
---

![](https://jameskilby.co.uk/wp-content/uploads/2018/05/AmazonWebservices_Logo.svg_.png)

[AWS](https://jameskilby.co.uk/category/aws/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

# AWS Status Page – Monitoring Included

By[James](https://jameskilby.co.uk) May 15, 2018October 1, 2025 • 📖1 min read(105 words)

📅 **Published:** May 15, 2018• **Updated:** October 01, 2025

## **AWS Status Page – Enhancements**

The tool I deployed [lambstatus](https://lambstatus.github.io/get-started/) supports pulling metrics from AWS Cloudwatch and displaying them. As part of my personal development, I thought I would include this on my status page.

I managed to get this working as can be seen [here. ](https://d1wijjwc03zzo1.cloudfront.net)This is a lambda function running once a minute polling this website and adding the response time into AWS Cloudwatch which Lambstatus is allowed to call. It has been running without a hitch for nearly a month now at **effectively zero cost**

#### Site Response

![](https://jameskilby.co.uk/wp-content/uploads/2023/04/Screen-Shot-2018-05-15-at-22.39.01.png)

The guide I followed is very good and is documented in the Git repo [here](https://lambstatus.github.io/set-up-custom-http-s-monitoring/)

## 📚 Related Posts

  * [Monitoring VMC &#8211; Part 1](https://jameskilby.co.uk/2019/12/monitoring-vmc-part-1/)
  * [AWS Solution Architect &#8211; Associate](https://jameskilby.co.uk/2019/12/aws-solution-architect-associate/)
  * [AWS for Beginners](https://jameskilby.co.uk/2018/03/aws-for-beginners1/)

## Similar Posts

  * [ ![VMC Host Errors](https://jameskilby.co.uk/wp-content/uploads/2022/11/iu-1-768x395.png) ](https://jameskilby.co.uk/2020/09/vmc-host-errors/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [VMC Host Errors](https://jameskilby.co.uk/2020/09/vmc-host-errors/)

By[James](https://jameskilby.co.uk) September 15, 2020October 1, 2025

When you run a large enough Infrastructure failure is inevitable. How you handle that can be a big differentiator. With VMware Cloud on AWS, the hosts are monitored 24×7 by VMware/AWS Support all as part of the service. If you pay for X number of hosts you should have X. That includes during maintenance and…

  * [ ![Web Development](https://jameskilby.co.uk/wp-content/uploads/2020/06/iu-2-768x229.png) ](https://jameskilby.co.uk/2022/01/web-development/)

[Hosting](https://jameskilby.co.uk/category/hosting/) | [Cloudflare](https://jameskilby.co.uk/category/cloudflare/) | [Personal](https://jameskilby.co.uk/category/personal/) | [Wordpress](https://jameskilby.co.uk/category/wordpress/)

### [Web Development](https://jameskilby.co.uk/2022/01/web-development/)

By[James](https://jameskilby.co.uk) January 4, 2022October 1, 2025

A while ago I started messing with Cloudflare Workers. I have now moved this site permanently over to them. This is partly related to some issues I have been having with internet access at home. Prior to this, the site ran from within my lab. This means the site is now super fast (hopefully :p)….

  * [ ![Cloudflare Workers – Limits of the free tier](https://jameskilby.co.uk/wp-content/uploads/2022/10/iu-768x450.jpeg) ](https://jameskilby.co.uk/2022/01/cloudflare-workers-limits-of-the-free-tier/)

[Hosting](https://jameskilby.co.uk/category/hosting/) | [Wordpress](https://jameskilby.co.uk/category/wordpress/)

### [Cloudflare Workers – Limits of the free tier](https://jameskilby.co.uk/2022/01/cloudflare-workers-limits-of-the-free-tier/)

By[James](https://jameskilby.co.uk) January 4, 2022April 9, 2023

I have been making several changes (mainly cosmetic to this site over the last day or so) On most changes I have been doing an export and then uploading the site to Cloudflare using Wrangler. After a while I received an email from Cloudflare saying: Hi, You’re 50% of the way to reaching one of…

  * [ ![AWS Solution Architect – Associate](https://jameskilby.co.uk/wp-content/uploads/2018/05/AmazonWebservices_Logo.svg_-768x307.png) ](https://jameskilby.co.uk/2019/12/aws-solution-architect-associate/)

[AWS](https://jameskilby.co.uk/category/aws/) | [Personal](https://jameskilby.co.uk/category/personal/)

### [AWS Solution Architect – Associate](https://jameskilby.co.uk/2019/12/aws-solution-architect-associate/)

By[James](https://jameskilby.co.uk) December 16, 2019December 4, 2025

Today was a good day. I renewed my AWS Solution Architect certification. Although my work is primarily in and around the VMware ecosystem I have been working a lot with VMware Cloud on AWS recently with a number of our customers. Having a good foundation of the core AWS services has…

  * [ ![Use Portainer in a Homelab with GitHub](https://jameskilby.co.uk/wp-content/uploads/2022/12/22225832.png) ](https://jameskilby.co.uk/2022/12/use-portainer-in-a-homelab-with-github/)

[Docker](https://jameskilby.co.uk/category/docker/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Kubernetes](https://jameskilby.co.uk/category/kubernetes/)

### [Use Portainer in a Homelab with GitHub](https://jameskilby.co.uk/2022/12/use-portainer-in-a-homelab-with-github/)

By[James](https://jameskilby.co.uk) December 9, 2022October 1, 2025

Late to the party or not, I have been using containers in my lab more and more and that has led me to Portainer…. I use it for managing the docker containers on my Synology but it can also be used for managing lots of other things. In their own words “Portainer accelerates container adoption….

  * [ ![AWS for Beginners](https://jameskilby.co.uk/wp-content/uploads/2018/03/raf750x1000075t101010_01c5ca27c6.u2.jpg) ](https://jameskilby.co.uk/2018/03/aws-for-beginners1/)

[AWS](https://jameskilby.co.uk/category/aws/)

### [AWS for Beginners](https://jameskilby.co.uk/2018/03/aws-for-beginners1/)

By[James](https://jameskilby.co.uk) March 30, 2018July 10, 2024

AWS For Beginners Account Guide