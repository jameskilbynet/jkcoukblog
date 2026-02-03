---
title: "Web Development"
description: "My Web-development workflow"
date: 2022-01-04T11:27:12+00:00
modified: 2025-10-01T15:22:14+00:00
author: James Kilby
categories:
  - Hosting
  - Cloudflare
  - Personal
  - Wordpress
  - Devops
  - Github
  - AWS
tags:
  - #Cloudflare
  - #Hosting
url: https://jameskilby.co.uk/2022/01/web-development/
image: https://jameskilby.co.uk/wp-content/uploads/2020/06/iu-2.png
---

![](https://jameskilby.co.uk/wp-content/uploads/2020/06/iu-2.png)

[Hosting](https://jameskilby.co.uk/category/hosting/) | [Cloudflare](https://jameskilby.co.uk/category/cloudflare/) | [Personal](https://jameskilby.co.uk/category/personal/) | [Wordpress](https://jameskilby.co.uk/category/wordpress/)

# Web Development

By[James](https://jameskilby.co.uk) January 4, 2022October 1, 2025 • 📖1 min read(211 words)

📅 **Published:** January 04, 2022• **Updated:** October 01, 2025

A while ago I started messing with Cloudflare Workers. I have now moved this site permanently over to them. This is partly related to some issues I have been having with internet access at home. Prior to this, the site ran from within my lab.

This means the site is now super fast (hopefully :p). It was cached by Cloudflare previously and now it’s served entirely from within their network.

![Web performance report](https://jameskilby.co.uk/wp-content/uploads/2023/04/Screenshot-2021-12-19-at-19.30.43-2048x751-1-1024x376.png)The speed report looks good

To enable this workflow I have retained a WordPress instance running within a docker instance on my Synology. I have also set up Cloudflare teams to access this.

This allows me to have the convenience of utilising WordPress as a CMS without having to worry about the security aspect as all public content is static. It also means that I don’t care about the uptime of the particular instance.

When I have finished writing the post I use the Simply Static Plugin to Generate the required static files. I then copy these to my wrangler site location on my laptop and ask Wrangler to publish them.
    
    
    wrangler publish --env production

📋 Copy

I wrote a post on the initial setup of Cloudflare Workers heck it out if you are interested in more of how this works.

## 📚 Related Posts

  * [Web Development Improvements](https://jameskilby.co.uk/2026/01/web-development-improvements/)
  * [How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)
  * [Analytics in a privacy focused world](https://jameskilby.co.uk/2023/11/analytics-in-a-privacy-focused-world/)

## Similar Posts

  * [ ![How I upgraded my blog as a  Static Website with GitHub Actions and Cloudflare](https://jameskilby.co.uk/wp-content/uploads/2025/10/Github-Actions.webp) ](https://jameskilby.co.uk/2025/10/how-i-deploy-my-blog-as-a-static-website-with-github-actions-and-cloudflare/)

[Cloudflare](https://jameskilby.co.uk/category/cloudflare/) | [Devops](https://jameskilby.co.uk/category/devops/) | [Github](https://jameskilby.co.uk/category/github/) | [Wordpress](https://jameskilby.co.uk/category/wordpress/)

### [How I upgraded my blog as a Static Website with GitHub Actions and Cloudflare](https://jameskilby.co.uk/2025/10/how-i-deploy-my-blog-as-a-static-website-with-github-actions-and-cloudflare/)

By[James](https://jameskilby.co.uk) October 6, 2025February 1, 2026

I wanted to automate the publishing of my blog from the authoring side to the public side. These are some of the improvements I made. What I started with My previous setup, involved a locally hosted WordPress instance. This runs in my homelab in an Ubuntu VM. This I will refer to as the authoring…

  * [ ![Static WordPress hosting using Cloudflare](https://jameskilby.co.uk/wp-content/uploads/2022/10/iu-768x450.jpeg) ](https://jameskilby.co.uk/2022/10/how-i-moved-my-wordpress-site-to-cloudflare-pages/)

[Cloudflare](https://jameskilby.co.uk/category/cloudflare/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Wordpress](https://jameskilby.co.uk/category/wordpress/)

### [Static WordPress hosting using Cloudflare](https://jameskilby.co.uk/2022/10/how-i-moved-my-wordpress-site-to-cloudflare-pages/)

By[James](https://jameskilby.co.uk) October 20, 2022December 27, 2025

For a while now I have been running this site directly from Cloudflare utilising their excellent worker’s product. I did this originally as a learning exercise but due to the benefits It brought and the ease of use I decided to stick with it. The benefits are several fold: Crazy Web Performance (Typically full page…

  * [ ![AWS Status Page – Monitoring Included](https://jameskilby.co.uk/wp-content/uploads/2018/05/AmazonWebservices_Logo.svg_-768x307.png) ](https://jameskilby.co.uk/2018/05/aws-status-page-monitoring-included/)

[AWS](https://jameskilby.co.uk/category/aws/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [AWS Status Page – Monitoring Included](https://jameskilby.co.uk/2018/05/aws-status-page-monitoring-included/)

By[James](https://jameskilby.co.uk) May 15, 2018October 1, 2025

AWS Status Page – Enhancements The tool I deployed lambstatus supports pulling metrics from AWS Cloudwatch and displaying them. As part of my personal development, I thought I would include this on my status page. I managed to get this working as can be seen here. This is a lambda function running once a minute…

  * [ ![Wrangler and Node versions](https://jameskilby.co.uk/wp-content/uploads/2022/01/WranglerCrab-1-768x256.png) ](https://jameskilby.co.uk/2022/01/wrangler-and-node-versions/)

[Cloudflare](https://jameskilby.co.uk/category/cloudflare/)

### [Wrangler and Node versions](https://jameskilby.co.uk/2022/01/wrangler-and-node-versions/)

By[James](https://jameskilby.co.uk) January 15, 2022April 10, 2023

I am a massive fan of the brew package management system for macOS and use it on all of my Mac’s I typically just upgrade everything blindly and have never had an issue….. Until today… I went to push some changes to this site and got the following error message A quick bit of digging…

  * [ ![Analytics in a privacy focused world](https://jameskilby.co.uk/wp-content/uploads/2023/11/plausible-analytics-icon-top.png) ](https://jameskilby.co.uk/2023/11/analytics-in-a-privacy-focused-world/)

[Hosting](https://jameskilby.co.uk/category/hosting/) | [Personal](https://jameskilby.co.uk/category/personal/)

### [Analytics in a privacy focused world](https://jameskilby.co.uk/2023/11/analytics-in-a-privacy-focused-world/)

By[James](https://jameskilby.co.uk) November 10, 2023October 1, 2025

I recently helped my friend Dean Lewis @veducate with some hosting issues. As part of the testing of this he kindly gave me a login to his WordPress instance. He has been a pretty prolific blogger over the years pumping out an amazing amount of really good content. It also highlighted to me that I…

  * [ ![Web Development Improvements](https://jameskilby.co.uk/wp-content/uploads/2026/01/Website-Optimisations-768x560.png) ](https://jameskilby.co.uk/2026/01/web-development-improvements/)

[Cloudflare](https://jameskilby.co.uk/category/cloudflare/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Wordpress](https://jameskilby.co.uk/category/wordpress/)

### [Web Development Improvements](https://jameskilby.co.uk/2026/01/web-development-improvements/)

By[James](https://jameskilby.co.uk) January 15, 2026January 17, 2026

I have spent the Christmas break making some improvements to this blog. A lot of these are in “the backend” These help improve the performance, Privacy, SEO, and I have also added some security best practices. Most of these changes were done more as an exercise than due to a specific requirement. I also had…