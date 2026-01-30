---
title: "AWS Status Page – Monitoring Included"
description: "LambStatus, Monitoring, AWS, Lambda"
date: 2018-05-15T21:41:14+00:00
modified: 2025-10-01T15:22:16+00:00
author: James Kilby
categories:
  - AWS
  - Hosting
  - Artificial Intelligence
  - Docker
  - Cloudflare
  - Wordpress
  - VMware
  - VMware Cloud on AWS
  - Personal
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

  * [ ![How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/wp-content/uploads/2025/01/Screenshot-2025-01-29-at-23.30.47-768x411.png) ](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)

[Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Docker](https://jameskilby.co.uk/category/docker/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)

By[James](https://jameskilby.co.uk) January 29, 2025January 18, 2026

Update: Hoarder has now been renamed to Karakeep due to a trademark issue I’ve been on a mission recently to regain control of my data. I haven’t yet faced the humongous task of moving my main email from Gmail, but I have had some successes with other cloud services and a win is a win…….

  * [ ![Cloudflare](https://jameskilby.co.uk/wp-content/uploads/2020/06/iu-2-768x229.png) ](https://jameskilby.co.uk/2018/03/cloudflare/)

[Hosting](https://jameskilby.co.uk/category/hosting/)

### [Cloudflare](https://jameskilby.co.uk/2018/03/cloudflare/)

By[James](https://jameskilby.co.uk) March 27, 2018December 8, 2024

Cloudflare – What is it and why would I care? I have been using Cloudflare for a long time. It is one of my go-to services and I use it to protect all of the public services I run for myself and other sites/ organizations. The basic premise of what Cloudflare do is that they…

  * [ ![Static WordPress hosting using Cloudflare](https://jameskilby.co.uk/wp-content/uploads/2022/10/iu-768x450.jpeg) ](https://jameskilby.co.uk/2022/10/how-i-moved-my-wordpress-site-to-cloudflare-pages/)

[Cloudflare](https://jameskilby.co.uk/category/cloudflare/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Wordpress](https://jameskilby.co.uk/category/wordpress/)

### [Static WordPress hosting using Cloudflare](https://jameskilby.co.uk/2022/10/how-i-moved-my-wordpress-site-to-cloudflare-pages/)

By[James](https://jameskilby.co.uk) October 20, 2022December 27, 2025

For a while now I have been running this site directly from Cloudflare utilising their excellent worker’s product. I did this originally as a learning exercise but due to the benefits It brought and the ease of use I decided to stick with it. The benefits are several fold: Crazy Web Performance (Typically full page…

  * [ ![VMC Host Errors](https://jameskilby.co.uk/wp-content/uploads/2022/11/iu-1-768x395.png) ](https://jameskilby.co.uk/2020/09/vmc-host-errors/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [VMC Host Errors](https://jameskilby.co.uk/2020/09/vmc-host-errors/)

By[James](https://jameskilby.co.uk) September 15, 2020October 1, 2025

When you run a large enough Infrastructure failure is inevitable. How you handle that can be a big differentiator. With VMware Cloud on AWS, the hosts are monitored 24×7 by VMware/AWS Support all as part of the service. If you pay for X number of hosts you should have X. That includes during maintenance and…

  * [ ![WordPress Hosting with Cloudflare  Pages](https://jameskilby.co.uk/wp-content/uploads/2023/05/simply-static-logo.png) ](https://jameskilby.co.uk/2023/05/how-to-take-a-wordpress-site-and-publish-it-as-a-static-site-on-cloudflare-pages/)

[Cloudflare](https://jameskilby.co.uk/category/cloudflare/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Wordpress](https://jameskilby.co.uk/category/wordpress/)

### [WordPress Hosting with Cloudflare Pages](https://jameskilby.co.uk/2023/05/how-to-take-a-wordpress-site-and-publish-it-as-a-static-site-on-cloudflare-pages/)

By[James](https://jameskilby.co.uk) May 14, 2023October 1, 2025

Table of Contents The Tooling The Process WordPress Plugin Install GitHub setup Cloudflare setup I have been using Cloudflare to protect my web assets for a really long time. Throughout that time Cloudflare has been improving there capabilities and approximately 2 years ago I decided to move this blog into their worker’s product. This meant…

  * [ ![AWS Solution Architect – Associate](https://jameskilby.co.uk/wp-content/uploads/2018/05/AmazonWebservices_Logo.svg_-768x307.png) ](https://jameskilby.co.uk/2019/12/aws-solution-architect-associate/)

[AWS](https://jameskilby.co.uk/category/aws/) | [Personal](https://jameskilby.co.uk/category/personal/)

### [AWS Solution Architect – Associate](https://jameskilby.co.uk/2019/12/aws-solution-architect-associate/)

By[James](https://jameskilby.co.uk) December 16, 2019December 4, 2025

Today was a good day. I renewed my AWS Solution Architect certification. Although my work is primarily in and around the VMware ecosystem I have been working a lot with VMware Cloud on AWS recently with a number of our customers. Having a good foundation of the core AWS services has…