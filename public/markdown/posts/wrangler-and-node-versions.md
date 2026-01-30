---
title: "Wrangler and Node versions"
description: "Wrangler fails to publish - exited with exit status: 9"
date: 2022-01-15T08:42:36+00:00
modified: 2023-04-10T09:41:26+00:00
author: James Kilby
categories:
  - Cloudflare
  - Hosting
  - Personal
  - Devops
  - Github
  - Wordpress
tags:
  - #Cloudflare
  - #Homebrew
  - #Node
  - #Workers
url: https://jameskilby.co.uk/2022/01/wrangler-and-node-versions/
image: https://jameskilby.co.uk/wp-content/uploads/2022/01/WranglerCrab-1.png
---

![](https://jameskilby.co.uk/wp-content/uploads/2022/01/WranglerCrab-1.png)

[Cloudflare](https://jameskilby.co.uk/category/cloudflare/)

# Wrangler and Node versions

By[James](https://jameskilby.co.uk) January 15, 2022April 10, 2023 • 📖1 min read(217 words)

📅 **Published:** January 15, 2022• **Updated:** April 10, 2023

I am a massive fan of the brew package management system for macOS and use it on all of my Mac’s I typically just upgrade everything blindly and have never had an issue….. Until today…

I went to push some changes to this site and got the following error message
    
    
    wrangler publish --env production
    /usr/local/bin/node: bad option: --openssl-legacy-provider
    Error: failed to execute `"/usr/local/bin/node" "--openssl-legacy-provider" "/Users/jameskilby/Library/Caches/.wrangler/wranglerjs-1.19.6" "--output-file=/var/folders/89/z9t99sg16h9cw3t86wp920jr0000gn/T/.wranglerjs_outputGBCY9" "--wasm-binding=WASM_MODULE" "--no-webpack-config=1" "--use-entry=/Users/jameskilby/jameskilbycouk/workers-site/index.js"`: exited with exit status: 9

📋 Copy

A quick bit of digging and it turns out the error was due to a new version of node being used (Version 17) 

The brew search command showed that I still had node16 installed 
    
    
    brew search node  
    ==> Formulae
    libbitcoin-node             node ✔                      node-sass                   node@12                     node@16 ✔                   nodebrew                    nodenv
    llnode                      node-build                  node@10                     node@14                     node_exporter               nodeenv                     ode

📋 Copy

So I then removed the link to the generic node and forced the link to node@16
    
    
    brew unlink node
    
    brew link --overwrite node@16

📋 Copy

Once this was done wrangler worked as expected and published my changes
    
    
    rangler publish --env production
    ✨  Built successfully, built project size is 13 KiB.
    🌀  Using namespace for Workers Site "__jameskilbycouk-production-workers_sites_assets"
    ✨  Success
    🌀  Uploading site files
    

📋 Copy

Certainly not a complex fix but hopefully handy for anyone playing with Wrangler on a Mac and using homebrew.

## 📚 Related Posts

  * [Web Development Improvements](https://jameskilby.co.uk/2026/01/web-development-improvements/)
  * [How I upgraded my blog as a Static Website with GitHub Actions and Cloudflare](https://jameskilby.co.uk/2025/10/how-i-deploy-my-blog-as-a-static-website-with-github-actions-and-cloudflare/)
  * [WordPress Hosting with Cloudflare Pages](https://jameskilby.co.uk/2023/05/how-to-take-a-wordpress-site-and-publish-it-as-a-static-site-on-cloudflare-pages/)

## Similar Posts

  * [ ![Analytics in a privacy focused world](https://jameskilby.co.uk/wp-content/uploads/2023/11/plausible-analytics-icon-top.png) ](https://jameskilby.co.uk/2023/11/analytics-in-a-privacy-focused-world/)

[Hosting](https://jameskilby.co.uk/category/hosting/) | [Personal](https://jameskilby.co.uk/category/personal/)

### [Analytics in a privacy focused world](https://jameskilby.co.uk/2023/11/analytics-in-a-privacy-focused-world/)

By[James](https://jameskilby.co.uk) November 10, 2023October 1, 2025

I recently helped my friend Dean Lewis @veducate with some hosting issues. As part of the testing of this he kindly gave me a login to his WordPress instance. He has been a pretty prolific blogger over the years pumping out an amazing amount of really good content. It also highlighted to me that I…

  * [ ![How I upgraded my blog as a  Static Website with GitHub Actions and Cloudflare](https://jameskilby.co.uk/wp-content/uploads/2025/10/Github-Actions.webp) ](https://jameskilby.co.uk/2025/10/how-i-deploy-my-blog-as-a-static-website-with-github-actions-and-cloudflare/)

[Cloudflare](https://jameskilby.co.uk/category/cloudflare/) | [Devops](https://jameskilby.co.uk/category/devops/) | [Github](https://jameskilby.co.uk/category/github/) | [Wordpress](https://jameskilby.co.uk/category/wordpress/)

### [How I upgraded my blog as a Static Website with GitHub Actions and Cloudflare](https://jameskilby.co.uk/2025/10/how-i-deploy-my-blog-as-a-static-website-with-github-actions-and-cloudflare/)

By[James](https://jameskilby.co.uk) October 6, 2025January 17, 2026

I wanted to automate the publishing of my blog from the authoring side to the public side. These are some of the improvements I made. What I started with My previous setup, involved a locally hosted WordPress instance. This runs in my homelab in an Ubuntu VM. This I will refer to as the authoring…

  * [ ![Cloudflare Workers – Limits of the free tier](https://jameskilby.co.uk/wp-content/uploads/2022/10/iu-768x450.jpeg) ](https://jameskilby.co.uk/2022/01/cloudflare-workers-limits-of-the-free-tier/)

[Hosting](https://jameskilby.co.uk/category/hosting/) | [Wordpress](https://jameskilby.co.uk/category/wordpress/)

### [Cloudflare Workers – Limits of the free tier](https://jameskilby.co.uk/2022/01/cloudflare-workers-limits-of-the-free-tier/)

By[James](https://jameskilby.co.uk) January 4, 2022April 9, 2023

I have been making several changes (mainly cosmetic to this site over the last day or so) On most changes I have been doing an export and then uploading the site to Cloudflare using Wrangler. After a while I received an email from Cloudflare saying: Hi, You’re 50% of the way to reaching one of…

  * [ ![WordPress Hosting with Cloudflare  Pages](https://jameskilby.co.uk/wp-content/uploads/2023/05/simply-static-logo.png) ](https://jameskilby.co.uk/2023/05/how-to-take-a-wordpress-site-and-publish-it-as-a-static-site-on-cloudflare-pages/)

[Cloudflare](https://jameskilby.co.uk/category/cloudflare/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Wordpress](https://jameskilby.co.uk/category/wordpress/)

### [WordPress Hosting with Cloudflare Pages](https://jameskilby.co.uk/2023/05/how-to-take-a-wordpress-site-and-publish-it-as-a-static-site-on-cloudflare-pages/)

By[James](https://jameskilby.co.uk) May 14, 2023October 1, 2025

Table of Contents The Tooling The Process WordPress Plugin Install GitHub setup Cloudflare setup I have been using Cloudflare to protect my web assets for a really long time. Throughout that time Cloudflare has been improving there capabilities and approximately 2 years ago I decided to move this blog into their worker’s product. This meant…

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