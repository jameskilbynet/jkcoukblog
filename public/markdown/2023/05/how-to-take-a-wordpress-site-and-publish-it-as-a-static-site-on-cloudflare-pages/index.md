---
title: "WordPress Hosting with Cloudflare  Pages"
description: "WordPress Hosting with Cloudflare Pages offers unmatched performance and security. Start enhancing your site today with our easy setup guide!"
date: 2023-05-14T07:00:35+00:00
modified: 2025-10-01T15:22:13+00:00
author: James Kilby
categories:
  - Cloudflare
  - Hosting
  - Wordpress
  - Personal
  - Artificial Intelligence
  - Docker
  - Homelab
tags:
  - #Cloudflare
  - #Cloudflare Pages
  - #Free
  - #Wordpress
url: https://jameskilby.co.uk/2023/05/how-to-take-a-wordpress-site-and-publish-it-as-a-static-site-on-cloudflare-pages/
image: https://jameskilby.co.uk/wp-content/uploads/2023/05/Screenshot-2023-05-13-at-10.31.30.png
---

![](https://jameskilby.co.uk/wp-content/uploads/2023/05/simply-static-logo.png)

[Cloudflare](https://jameskilby.co.uk/category/cloudflare/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Wordpress](https://jameskilby.co.uk/category/wordpress/)

# WordPress Hosting with Cloudflare Pages

By[James](https://jameskilby.co.uk) May 14, 2023October 1, 2025 • 📖3 min read(645 words)

📅 **Published:** May 14, 2023• **Updated:** October 01, 2025

## Table of Contents

I have been using Cloudflare to protect my web assets for a really long time. Throughout that time Cloudflare has been improving there capabilities and approximately 2 years ago I decided to move this blog into their worker’s product. This meant that the site was 100% served from their datacenter’s rather than just cached assets as done in the previous config. This had several distinct benefits. It improved the site’s performance significantly, especially for anyone outside of the UK. It effectively became unhackable (as the content is all static) and it meant that if my home connection was offline it would not impact the site. They have made deployment easier so I thought I would document how I am doing this.

## The Tooling

  * Admin access to your WordPress Site
  * Simply Static WordPress Plugin
  * GitHub account (Optional)
  * Cloudflare Account

## The Process

### WordPress Plugin Install

The first step is to install and activate the plugin on your WordPress site that generates the static files. I am using the free version of [Simply Static](https://en-gb.wordpress.org/plugins/simply-static/) by the excellent Patrick Posner.

When the plugin is activated go to the diagnostic page and ensure everything is looking green. In the unlikely event that it’s not then this is likely to be a WordPress version or permissions issue. 

![](https://jameskilby.co.uk/wp-content/uploads/2023/05/Screenshot-2023-05-13-at-10.31.30-1024x674.png)

This is what it should look like

Then navigate to the settings section ensure that the settings are set to Zip file delivery and use relative URL’s and then click “generate static files”. The plugin will effectively scrape your site to build up a zip file which is available for download when this is complete. 

The activity log shows you the status. My scrape took just over 90s
    
    
    [2023-05-13 08:32:47] Setting up
    [2023-05-13 08:32:48] Fetched 875 of 875 pages/files
    [2023-05-13 08:34:23] ZIP archive created: Click here to download
    [2023-05-13 08:34:23] Wrapping up
    [2023-05-13 08:34:23] Done! Finished in 00:01:36

📋 Copy

When this is finished download the zip file to your computer.

### GitHub setup

The GitHub setup is optional but I like to use it. It effectively means that I have a backup of my site if needed. 

Log in to GitHub and create a new repository. This can be either Public or Private. I have chosen to use a private repo called WordPress

Once this has been done you need to extract the Zip file created earlier and add all of the contents to this Repo. 

## Cloudflare setup 

Log into your Cloudflare account and navigate to the pages section. Then you want to select “Create a Project” As I am using GitHub I then select the “Connect to Git” Option. 

I have previously connected my Cloudflare account to GitHub for the WordPress repo so I did not need to do anything here. If you have not done this ( Or installed the Cloudflare Pages App in GitHub you can do this by following this [link](https://github.com/settings/installations/22356437)

Once everything is linked you can give your Project a name and set the production branch to be “Main” You can then leave all the other settings as default 

![](https://jameskilby.co.uk/wp-content/uploads/2023/05/Screenshot-2023-05-13-at-11.11.53-931x1024.png)

When you hit Save and Deploy Cloudflare will initialize the build environment clone the Git repository and publish your site to a pages.dev based domain. In my case https://wordpress-cpy.pages.dev/

You can check this is working correctly by clicking the visit site link at the top right

![](https://jameskilby.co.uk/wp-content/uploads/2023/05/Screenshot-2023-05-13-at-11.15.54.png)

The final step is to add my custom domain of wordpress.jameskilby.cloud to this site. The DNS for the domain is also managed by Cloudflare so this is a trivial step

If you click the name of the project, In my case WordPress you can then scroll to the Custom Domain section. Click Set up a Custom domain and enter the domain you want to use. When I enter wordpress.jameskilby.cloud here Cloudflare automatically changed the DNS entry required but it will list the correct values if you don’t have Cloudflare DNS management.

## Similar Posts

  * [ ![Static WordPress hosting using Cloudflare](https://jameskilby.co.uk/wp-content/uploads/2022/10/iu-768x450.jpeg) ](https://jameskilby.co.uk/2022/10/how-i-moved-my-wordpress-site-to-cloudflare-pages/)

[Cloudflare](https://jameskilby.co.uk/category/cloudflare/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Wordpress](https://jameskilby.co.uk/category/wordpress/)

### [Static WordPress hosting using Cloudflare](https://jameskilby.co.uk/2022/10/how-i-moved-my-wordpress-site-to-cloudflare-pages/)

By[James](https://jameskilby.co.uk) October 20, 2022December 27, 2025

For a while now I have been running this site directly from Cloudflare utilising their excellent worker’s product. I did this originally as a learning exercise but due to the benefits It brought and the ease of use I decided to stick with it. The benefits are several fold: Crazy Web Performance (Typically full page…

  * [ ![Analytics in a privacy focused world](https://jameskilby.co.uk/wp-content/uploads/2023/11/plausible-analytics-icon-top.png) ](https://jameskilby.co.uk/2023/11/analytics-in-a-privacy-focused-world/)

[Hosting](https://jameskilby.co.uk/category/hosting/) | [Personal](https://jameskilby.co.uk/category/personal/)

### [Analytics in a privacy focused world](https://jameskilby.co.uk/2023/11/analytics-in-a-privacy-focused-world/)

By[James](https://jameskilby.co.uk) November 10, 2023October 1, 2025

I recently helped my friend Dean Lewis @veducate with some hosting issues. As part of the testing of this he kindly gave me a login to his WordPress instance. He has been a pretty prolific blogger over the years pumping out an amazing amount of really good content. It also highlighted to me that I…

  * [ ![How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/wp-content/uploads/2025/01/Screenshot-2025-01-29-at-23.30.47-768x411.png) ](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)

[Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Docker](https://jameskilby.co.uk/category/docker/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)

By[James](https://jameskilby.co.uk) January 29, 2025January 18, 2026

Update: Hoarder has now been renamed to Karakeep due to a trademark issue I’ve been on a mission recently to regain control of my data. I haven’t yet faced the humongous task of moving my main email from Gmail, but I have had some successes with other cloud services and a win is a win…….

  * [ ![Cloudflare Workers – Limits of the free tier](https://jameskilby.co.uk/wp-content/uploads/2022/10/iu-768x450.jpeg) ](https://jameskilby.co.uk/2022/01/cloudflare-workers-limits-of-the-free-tier/)

[Hosting](https://jameskilby.co.uk/category/hosting/) | [Wordpress](https://jameskilby.co.uk/category/wordpress/)

### [Cloudflare Workers – Limits of the free tier](https://jameskilby.co.uk/2022/01/cloudflare-workers-limits-of-the-free-tier/)

By[James](https://jameskilby.co.uk) January 4, 2022April 9, 2023

I have been making several changes (mainly cosmetic to this site over the last day or so) On most changes I have been doing an export and then uploading the site to Cloudflare using Wrangler. After a while I received an email from Cloudflare saying: Hi, You’re 50% of the way to reaching one of…

  * [ ![Web Development Improvements](https://jameskilby.co.uk/wp-content/uploads/2026/01/Website-Optimisations-768x560.png) ](https://jameskilby.co.uk/2026/01/web-development-improvements/)

[Cloudflare](https://jameskilby.co.uk/category/cloudflare/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Wordpress](https://jameskilby.co.uk/category/wordpress/)

### [Web Development Improvements](https://jameskilby.co.uk/2026/01/web-development-improvements/)

By[James](https://jameskilby.co.uk) January 15, 2026January 17, 2026

I have spent the Christmas break making some improvements to this blog. A lot of these are in “the backend” These help improve the performance, Privacy, SEO, and I have also added some security best practices. Most of these changes were done more as an exercise than due to a specific requirement. I also had…

  * [ ![Starlink](https://jameskilby.co.uk/wp-content/uploads/2022/10/spacexs-starlink-to-supply-free-satellite-internet-to-famili_u44u.1920-768x432.jpg) ](https://jameskilby.co.uk/2022/10/starlink/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [Starlink](https://jameskilby.co.uk/2022/10/starlink/)

By[James](https://jameskilby.co.uk) October 11, 2022October 1, 2025

Since moving to Dorset last year internet connectivity has been the bane of my existence. Currently, I have an ADSL connection provided by my old employer Zen and a 5G connection provided by Three. These are both plumbed into my WatchGuard Firewall with multi-wan configured. Most of the time the usability is ok but there…