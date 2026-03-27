---
title: "Web Development"
description: "How I migrated my WordPress blog to Cloudflare Workers to serve it globally from Cloudflare's edge network, dramatically improving page load speed and performance."
date: 2022-01-04T11:27:12+00:00
modified: 2025-10-01T15:22:14+00:00
author: James Kilby
categories:
  - Hosting
  - Cloudflare
  - Personal
  - Wordpress
  - Artificial Intelligence
  - Docker
  - VMware
  - Nutanix
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

  * [ ![And now for something completely different](https://jameskilby.co.uk/wp-content/uploads/2018/10/fWbXybA7-768x193.png) ](https://jameskilby.co.uk/2018/10/and-now-for-something-completely-different/)

[Personal](https://jameskilby.co.uk/category/personal/)

### [And now for something completely different](https://jameskilby.co.uk/2018/10/and-now-for-something-completely-different/)

By[James](https://jameskilby.co.uk) October 16, 2018March 10, 2026

I have worked for my current employer Zen Internet for 3.5 years. Over that time I have changed roles from what was originally a customer-focused role into a role with one of the core platform teams. This has meant looking after the majority of the Internal and customer Virtual platforms. During this time Zen has undergone…

  * [ ![How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/wp-content/uploads/2025/01/Screenshot-2025-01-29-at-23.30.47-768x411.png) ](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)

[Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Docker](https://jameskilby.co.uk/category/docker/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)

By[James](https://jameskilby.co.uk) January 29, 2025March 10, 2026

Update: Hoarder has now been renamed to Karakeep due to a trademark issue I’ve been on a mission recently to regain control of my data. I haven’t yet faced the humongous task of moving my main email from Gmail, but I have had some successes with other cloud services and a win is a win…….

  * [ ![VMware Certified Master Specialist HCI 2020](https://jameskilby.co.uk/wp-content/uploads/2020/09/vmware_SP_HCI20.png) ](https://jameskilby.co.uk/2020/09/vmware-certified-master-specialist-hci-2020/)

[Personal](https://jameskilby.co.uk/category/personal/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [VMware Certified Master Specialist HCI 2020](https://jameskilby.co.uk/2020/09/vmware-certified-master-specialist-hci-2020/)

By[James](https://jameskilby.co.uk) September 13, 2020March 10, 2026

I recently sat (and passed the VMware HCI Master Specialist exam (5V0-21.20). I won’t go into any details of the contents but I will comment that I felt the questions were fair and that there wasn’t anything in it to trip you up. The required knowledge was certainly wider than the vSAN specialist exam. This…

  * [ ![Nutanix NCP](https://jameskilby.co.uk/wp-content/uploads/2020/07/nutanix-logo-HI-REZ_reverse-w-carrier-768x196.jpg) ](https://jameskilby.co.uk/2020/07/nutanix-ncp/)

[Nutanix](https://jameskilby.co.uk/category/nutanix/) | [Personal](https://jameskilby.co.uk/category/personal/)

### [Nutanix NCP](https://jameskilby.co.uk/2020/07/nutanix-ncp/)

By[James](https://jameskilby.co.uk) July 2, 2020July 10, 2024

I saw a tweet a couple of weeks ago mentioning that Nutanix were offering a free go at the Nutanix Certified Professional exam. They are also offering free on-demand training to go with it. In my current role, I haven’t used Nutanix however I have good experience using it as the storage platform with vSphere…

  * [ ![VMware – Going out with a Bang!](https://jameskilby.co.uk/wp-content/uploads/2023/10/rnli-logo-768x384.png) ](https://jameskilby.co.uk/2023/10/going-out-with-a-bang/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [Personal](https://jameskilby.co.uk/category/personal/)

### [VMware – Going out with a Bang!](https://jameskilby.co.uk/2023/10/going-out-with-a-bang/)

By[James](https://jameskilby.co.uk) October 7, 2023March 10, 2026

There is a lot of uncertainty with VMware at the moment. This is all due to the pending acquisition by Broadcom. There are a lot of unknowns for the staff and customers about what the company will look like in the future. I certainly have some concerns mainly just with the unknown. However, VMware has…

  * [ ![Wrangler and Node versions](https://jameskilby.co.uk/wp-content/uploads/2022/01/WranglerCrab-1-768x256.png) ](https://jameskilby.co.uk/2022/01/wrangler-and-node-versions/)

[Cloudflare](https://jameskilby.co.uk/category/cloudflare/)

### [Wrangler and Node versions](https://jameskilby.co.uk/2022/01/wrangler-and-node-versions/)

By[James](https://jameskilby.co.uk) January 15, 2022April 10, 2023

I am a massive fan of the brew package management system for macOS and use it on all of my Mac’s I typically just upgrade everything blindly and have never had an issue….. Until today… I went to push some changes to this site and got the following error message A quick bit of digging…