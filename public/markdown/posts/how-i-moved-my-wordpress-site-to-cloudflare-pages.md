---
title: "Static WordPress hosting using Cloudflare"
description: "How I moved my Wordpress Blog to Cloudflare Pages"
date: 2022-10-20T15:26:08+00:00
modified: 2025-12-27T21:25:38+00:00
author: James Kilby
categories:
  - Cloudflare
  - Hosting
  - Wordpress
  - Artificial Intelligence
  - Docker
  - Devops
  - Github
  - Homelab
  - Kubernetes
tags:
  - #Cloudflare
  - #Hosting
  - #Wordpress
  - #Workers
url: https://jameskilby.co.uk/2022/10/how-i-moved-my-wordpress-site-to-cloudflare-pages/
image: https://jameskilby.co.uk/wp-content/uploads/2022/10/iu.jpeg
---

![](https://jameskilby.co.uk/wp-content/uploads/2022/10/iu.jpeg)

[Cloudflare](https://jameskilby.co.uk/category/cloudflare/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Wordpress](https://jameskilby.co.uk/category/wordpress/)

# Static WordPress hosting using Cloudflare

By[James](https://jameskilby.co.uk) October 20, 2022December 27, 2025 • 📖4 min read(851 words)

📅 **Published:** October 20, 2022• **Updated:** December 27, 2025

For a while now I have been running this site directly from [Cloudflare](http:// <p>For a while now I have been running this site directly from Cloudflare utilising their workers product.   This has brought several benefits:</p>    <p>Crazy Web Performance</p>    <p>High Availability </p>    <p>Zero attack surface</p>    <p>A couple of people have asked me about the setup so I thought I would try and document it.</p>    <p>Firstly although this is effectively Serverless, I still have a copy of WordPress running. It lives in some docker containers on my NAS and it is not currently published to the outside world.  This hugely reduces the attack surface. Editing and contributing content works in exactly the same way however publishing is where the difference is seen.</p>    <p>At a very high level I have a WordPress plugin that generates the static content, This is then pushed into a GitHub Repo and from there its pushed to Cloudflare Pages.</p> ) utilising their excellent worker’s product. I did this originally as a learning exercise but due to the benefits It brought and the ease of use I decided to stick with it. The benefits are several fold:

  * Crazy Web Performance (Typically full page load in less than 500ms see below)
  * High Availability globally
  * Zero attack surface
  * ~Zero hosting costs

![](https://jameskilby.co.uk/wp-content/uploads/2023/04/Screenshot-2022-10-19-at-23.02.09-2048x860-1-1024x430.png) Gtmetrix Speed Test

A couple of people have asked me about the setup so I thought I would try and document an overview.

## Introduction

Firstly although this setup is effectively Serverless you need to have a copy of WordPress somewhere to make your edits. This doesn’t need to be exposed to the outside world (or can even be run just on your workstation/laptop using [local](https://localwp.com). I have chosen to keep WordPress running in some docker containers on my [Synology](https://jameskilby.co.uk/lab/)

The security of this setup is increased as WordPress is not published to the outside world. I do all of my editing locally, however, if I needed to change this I would leverage Cloudflare Access. Not publishing the site externally hugely reduces the attack surface as there is no implementation to attack. Editing and contributing content works in exactly the same way the difference is how content is published

At a very high level, I have a WordPress plugin that generates static content. This is then pushed into a GitHub Repo and from there, it’s pushed to Cloudflare Pages.

For

## WordPress Setup

Within WordPress, I am utilising the simply static [plugin](https://simplystatic.com) to generate the static content.

Initially, I was using the free plugin but I have since decided to upgrade to the paid-for version.

In terms of the plugin setup, I have it set to use relative URL’s with a delivery method set to GitHub. This is done as the WordPress site is on my NAS and therefore has a URL of http://nas1.jameskilby.net/

I have then excluded the WordPress management URL’s in the static generation.
    
    
    http://wordpress.jameskilby.cloud/wp-json
    https://wordpress.jameskilby.cloud/wp-login.php

📋 Copy

## GitHub Setup

In the deployment section, I have added the relevant details so that the simply static plugin can push the relevant content into a GitHub repo

![](https://jameskilby.co.uk/wp-content/uploads/2022/10/Screenshot-2022-07-09-at-17.29.07-2048x1191-1-1024x596.png)

Within GitHub, I have created a repo (Called jameskilbycouksite) I have made this private but it could easily be a public repo. I have then added my [personal access token ](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)so that SimplyStatic can push to the repo and lastly added a webhook to be called when the site has been updated (More on this a bit later)

## Cloudflare Page Builds

The Cloudflare setup is probably the most complex part of the process but once it has been set up it’s fire and forget. The page’s site needs to be set up in Cloudflare and then a Webhook is created that the WordPress site can trigger. This is triggered when all of the site is committed to GitHub to tell Cloudflare to refresh the build.

When you are logged into Cloudflare navigate to the pages section and create a project. At this point, I selected connect to Git and login/select the relevant GitHub account and Repo. For this to function, the GitHub Pages application needs to have been given permission in your GitHub Account

![](https://jameskilby.co.uk/wp-content/uploads/2023/04/Screenshot-2022-07-09-at-18.53.21-1024x925.png)GitHub Pages Permissions

When a page is complete and published at a WordPress level a new button is enabled called “Generate Static” When this is clicked it will run the process to generate the static page, push it to GitHub and then to Cloudflare.

The Paid plugin allows for updating a single page, whereas the free plugin needs to generate the entire site again.

As seen below, a single page usually takes around 9 seconds to update with this setup. Generating the entire site and uploading took approx 30 mins.
    
    
    [2022-07-17 18:37:46] Setting up
    [2022-07-17 18:37:49] Fetched 1 of 1 pages/files
    [2022-07-17 18:37:51] Committed / Updated 81 of 81 pages/files
    [2022-07-17 18:37:55] Wrapping up
    [2022-07-17 18:37:55] Done! Finished in 00:00:09

📋 Copy

Lastly, I have removed Google Analytics for privacy reasons and just utilise the web analytics built natively into Cloudflare.

## Costs

The cost of running the site in Cloudflare for my blog is exactly zero which is amazing. This is one of the reasons I decided to buy the plugin as it was roughly equivalent to a year’s worth of decent hosting.

If your site is more popular then you may require one of the paid plans that starts at $5 a month.

The free tier gives you:

**Workers Bundled (Workers Compute time)**

  * Up to 10ms CPU time per request
  * Lowest latency after the first request
  * Up to 100,000 requests per day (UTC+0)

**KV (Key Value Storage)**

  * Global low-latency key-value edge storage
  * Up to 100,000 read operations per day
  * Up to 1,000 write, delete, list operations per day

Although I have paid $99 for the single-site plugin this is not essential. It does however eliminate some manual steps which I was keen to avoid. Plus although I am not currently using them it does support forms and search capabilities.

For more like this why not follow me on [Twitter](https://twitter.com/jameskilbynet)

## Similar Posts

  * [ ![How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/wp-content/uploads/2025/01/Screenshot-2025-01-29-at-23.30.47-768x411.png) ](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)

[Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Docker](https://jameskilby.co.uk/category/docker/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)

By[James](https://jameskilby.co.uk) January 29, 2025January 18, 2026

Update: Hoarder has now been renamed to Karakeep due to a trademark issue I’ve been on a mission recently to regain control of my data. I haven’t yet faced the humongous task of moving my main email from Gmail, but I have had some successes with other cloud services and a win is a win…….

  * [ ![How I upgraded my blog as a  Static Website with GitHub Actions and Cloudflare](https://jameskilby.co.uk/wp-content/uploads/2025/10/Github-Actions.webp) ](https://jameskilby.co.uk/2025/10/how-i-deploy-my-blog-as-a-static-website-with-github-actions-and-cloudflare/)

[Cloudflare](https://jameskilby.co.uk/category/cloudflare/) | [Devops](https://jameskilby.co.uk/category/devops/) | [Github](https://jameskilby.co.uk/category/github/) | [Wordpress](https://jameskilby.co.uk/category/wordpress/)

### [How I upgraded my blog as a Static Website with GitHub Actions and Cloudflare](https://jameskilby.co.uk/2025/10/how-i-deploy-my-blog-as-a-static-website-with-github-actions-and-cloudflare/)

By[James](https://jameskilby.co.uk) October 6, 2025January 17, 2026

I wanted to automate the publishing of my blog from the authoring side to the public side. These are some of the improvements I made. What I started with My previous setup, involved a locally hosted WordPress instance. This runs in my homelab in an Ubuntu VM. This I will refer to as the authoring…

  * [ ![WordPress Hosting with Cloudflare  Pages](https://jameskilby.co.uk/wp-content/uploads/2023/05/simply-static-logo.png) ](https://jameskilby.co.uk/2023/05/how-to-take-a-wordpress-site-and-publish-it-as-a-static-site-on-cloudflare-pages/)

[Cloudflare](https://jameskilby.co.uk/category/cloudflare/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Wordpress](https://jameskilby.co.uk/category/wordpress/)

### [WordPress Hosting with Cloudflare Pages](https://jameskilby.co.uk/2023/05/how-to-take-a-wordpress-site-and-publish-it-as-a-static-site-on-cloudflare-pages/)

By[James](https://jameskilby.co.uk) May 14, 2023October 1, 2025

Table of Contents The Tooling The Process WordPress Plugin Install GitHub setup Cloudflare setup I have been using Cloudflare to protect my web assets for a really long time. Throughout that time Cloudflare has been improving there capabilities and approximately 2 years ago I decided to move this blog into their worker’s product. This meant…

  * [ ![Cloudflare](https://jameskilby.co.uk/wp-content/uploads/2020/06/iu-2-768x229.png) ](https://jameskilby.co.uk/2018/03/cloudflare/)

[Hosting](https://jameskilby.co.uk/category/hosting/)

### [Cloudflare](https://jameskilby.co.uk/2018/03/cloudflare/)

By[James](https://jameskilby.co.uk) March 27, 2018December 8, 2024

Cloudflare – What is it and why would I care? I have been using Cloudflare for a long time. It is one of my go-to services and I use it to protect all of the public services I run for myself and other sites/ organizations. The basic premise of what Cloudflare do is that they…

  * [ ![Wrangler and Node versions](https://jameskilby.co.uk/wp-content/uploads/2022/01/WranglerCrab-1-768x256.png) ](https://jameskilby.co.uk/2022/01/wrangler-and-node-versions/)

[Cloudflare](https://jameskilby.co.uk/category/cloudflare/)

### [Wrangler and Node versions](https://jameskilby.co.uk/2022/01/wrangler-and-node-versions/)

By[James](https://jameskilby.co.uk) January 15, 2022April 10, 2023

I am a massive fan of the brew package management system for macOS and use it on all of my Mac’s I typically just upgrade everything blindly and have never had an issue….. Until today… I went to push some changes to this site and got the following error message A quick bit of digging…

  * [ ![Use Portainer in a Homelab with GitHub](https://jameskilby.co.uk/wp-content/uploads/2022/12/22225832.png) ](https://jameskilby.co.uk/2022/12/use-portainer-in-a-homelab-with-github/)

[Docker](https://jameskilby.co.uk/category/docker/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Kubernetes](https://jameskilby.co.uk/category/kubernetes/)

### [Use Portainer in a Homelab with GitHub](https://jameskilby.co.uk/2022/12/use-portainer-in-a-homelab-with-github/)

By[James](https://jameskilby.co.uk) December 9, 2022October 1, 2025

Late to the party or not, I have been using containers in my lab more and more and that has led me to Portainer…. I use it for managing the docker containers on my Synology but it can also be used for managing lots of other things. In their own words “Portainer accelerates container adoption….