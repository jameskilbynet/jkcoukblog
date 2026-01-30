---
title: "How I Migrated from Pocket to Hoarder with AI Integration"
description: "How I migrated to Hoarder for my Bookmark Management"
date: 2025-01-29T23:31:56+00:00
modified: 2026-01-18T21:36:03+00:00
author: James Kilby
categories:
  - Artificial Intelligence
  - Docker
  - Hosting
  - AWS
  - Personal
  - Cloudflare
  - Wordpress
  - Portainer
  - Synology
  - Ansible
  - Homelab
  - Veeam
  - VMware
tags:
  - #AI
  - #Docker
  - #Hoarder
  - #Homelab
  - #Ollama
url: https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/
image: https://jameskilby.co.uk/wp-content/uploads/2025/01/Screenshot-2025-01-29-at-23.30.47-1024x547.png
---

![](https://jameskilby.co.uk/wp-content/uploads/2025/01/Screenshot-2025-01-29-at-23.30.47.png)

[Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Docker](https://jameskilby.co.uk/category/docker/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

# How I Migrated from Pocket to Hoarder with AI Integration

By[James](https://jameskilby.co.uk) January 29, 2025January 18, 2026 • 📖5 min read(1,003 words)

📅 **Published:** January 29, 2025• **Updated:** January 18, 2026

Update: Hoarder has now been renamed to Karakeep due to a trademark issue

I’ve been on a mission recently to regain control of my data. I haven’t yet faced the humongous task of moving my main email from Gmail, but I have had some successes with other cloud services and a win is a win….

One of them is my bookmark manager. Up until now, I used Pocket since way back in the day when it was originally called “Read it Later”. I wanted to bring it away from a cloud service and host it locally. I also had the opportunity to add a little AI magic to go with it.

## Table of Contents

## What is Hoarder?

Taken from the Hoarder website, it’s an App that can do all of this….

  * 🔗 Bookmark links, take simple notes and store images and pdfs.
  * ⬇️ Automatic fetching for link titles, descriptions and images.
  * 📋 Sort your bookmarks into lists.
  * 🔎 Full text search of all the content stored.
  * ✨ AI-based (aka chatgpt) automatic tagging. With support for local models using Ollama!
  * 🎆 OCR for extracting text from images.
  * 🔖 [Chrome plugin](https://chromewebstore.google.com/detail/hoarder/kgcjekpmcjjogibpjebkhaanilehneje) and [Firefox addon](https://addons.mozilla.org/en-US/firefox/addon/hoarder/) for quick bookmarking.
  * 📱 An [iOS app](https://apps.apple.com/us/app/hoarder-app/id6479258022), and an [Android app](https://play.google.com/store/apps/details?id=app.hoarder.hoardermobile&pcampaignid=web_share).
  * 📰 Auto hoarding from RSS feeds.
  * 🔌 REST API.
  * 🌐 Mutli-language support.
  * 🖍️ Mark and store highlights from your hoarded content.
  * 🗄️ Full page archival (using [monolith](https://github.com/Y2Z/monolith)) to protect against link rot. Auto video archiving using [youtube-dl](https://github.com/marado/youtube-dl).
  * ☑️ Bulk actions support.
  * 🔐 SSO support.
  * 🌙 Dark mode support.
  * 💾 Self-hosting first.

The main use for me is having a website and mobile app for saving pages useful to me that I found when I’m usually down a tech rabbit hole. 

## Hoarder Architecture

I have chosen to run this within my home infrastructure and connected it to my existing Ollama [setup ](https://jameskilby.co.uk/2024/10/self-hosting-ai-stack-using-vsphere-docker-and-nvidia-gpu/) This means that Hoarder can call Ollama for AI text/image clarification using the setup and models I have already created.

The deployment is all within Docker and I have added extracts from my Docker Compose files below.

![](https://jameskilby.co.uk/wp-content/uploads/2025/01/HoarderApp-1024x491.png)

## Hoarder Install

Snippet from my docker-compose.yml
    
    
    Hoarder
      hoarder:
        image: ghcr.io/hoarder-app/hoarder:${HOARDER_VERSION:-release}
        restart: unless-stopped
        networks:
          - traefik
        volumes:
          - ./data:/data
        env_file:
          - .env
        environment:
          MEILI_ADDR: http://meilisearch:7700
          BROWSER_WEB_URL: http://chrome:9222
          DATA_DIR: /data
        labels:
          - "com.example.description=hoarder"
          - "traefik.enable=true"
          - "traefik.http.routers.hoarder.rule=Host(`hoarder.jameskilby.cloud`)"
          - "traefik.http.routers.hoarder.entrypoints=https"
          - "traefik.http.routers.hoarder.tls=true"
          - "traefik.http.routers.hoarder.tls.certresolver=cloudflare"
          - "traefik.http.services.hoarder.loadbalancer.server.port=3000"
    
      chrome:
        image: gcr.io/zenika-hub/alpine-chrome:123
        restart: unless-stopped
        networks:
          - traefik
        command:
          - --no-sandbox
          - --disable-gpu
          - --disable-dev-shm-usage
          - --remote-debugging-address=0.0.0.0
          - --remote-debugging-port=9222
          - --hide-scrollbars
      meilisearch:
        image: getmeili/meilisearch:v1.11.1
        restart: unless-stopped
        networks:
          - traefik
        env_file:
          - .env
        environment:
          MEILI_NO_ANALYTICS: "true"
        volumes:
          - ./meilisearch:/meili_data

📋 Copy

.env snippet file
    
    
    OLLAMA_BASE_URL=http://ollama:11434
    INFERENCE_TEXT_MODEL=llama3.1:8b
    INFERENCE_IMAGE_MODEL=llava
    

📋 Copy

## Export from Pocket

Luckily, Pocket has an export function that will dump all of your saved URL’s and tags into a single file. This can be run by navigating to https://getpocket.com/export when logged in.

## Import to Hoarder

Once you have this file, you can input it straight into Hoarder. This is done by navigating to the user settings section and then selecting import/export.

Hoarder supports several file formats from other tools

![](https://jameskilby.co.uk/wp-content/uploads/2025/01/Screenshot-2025-01-29-at-22.52.45-1024x124.png)

## Hoarder In Action

When the URLs are loaded. Hoarder passes the URL’s into a headless Chrome to gather the data from that page. It then index’s the contents and then passes the contents to Ollama to apply appropriate tags.

### AI Prompt

You can tweak the AI prompt that is sent over to Ollama. In my case I have just used the default as it looked like a good starting point. The prompt is
    
    
    You are a bot in a read-it-later app and your responsibility is to help with automatic tagging.
    Please analyze the text between the sentences "CONTENT START HERE" and "CONTENT END HERE" and suggest relevant tags that describe its key themes, topics, and main ideas. The rules are:
    - Aim for a variety of tags, including broad categories, specific keywords, and potential sub-genres.
    - The tags language must be in english.
    - If it's a famous website you may also include a tag for the website. If the tag is not generic enough, don't include it.
    - The content can include text for cookie consent and privacy policy, ignore those while tagging.
    - Aim for 3-5 tags.
    - If there are no good tags, leave the array empty.
    
    CONTENT START HERE
    
    <CONTENT_HERE>
    
    CONTENT END HERE
    You must respond in JSON with the key "tags" and the value is an array of string tags.

📋 Copy

The process of gathering all the web pages, indexing them and analysing with AI took around an hour with my setup. I believe that Hoarder has some internal throttles to try and avoid tripping anti-bot tools.

You can monitor this process in the admin section. I was also keen to see the stats on my graphics card while this was running so I ran NVTOP on the VM while some AI processing was running.

![](https://jameskilby.co.uk/wp-content/uploads/2025/01/Screenshot-2025-01-29-at-23.00.23-1024x329.png)

## Finished Result

At the end of the process, I ended up with a little over 750 bookmarks imported and fully indexed and displayed in a very appealing nature.

![](https://jameskilby.co.uk/wp-content/uploads/2025/01/Screenshot-2025-01-29-at-23.21.32-1024x590.png)

## Post Install Tasks

### Tag Merge

The AI process is mightily impressive but one of the issues that can occur is it generate similar tags. Hoarder has the ability to allow you to merge them. 

This is done in the cleanups section under your username. In my case it suggested 150 tags that may need merging. At the moment I am glad this has manual oversight as some should definitely be merged like “Motherboard” and “Motherboards” but some are totally different like “NAS” and “NASA”

### Broken Links

I was quite surprised by how many of the links I had were broken links. These were for a few reasons, ranging from company takeovers. To sites being dead. Sadly, in one case the author is no longer with us. In a few cases, the broken link was because the URL I had saved led to a URL shortener that no longer exists. I need to revisit the remaining links in the list and ensure that they point to the end state.

## Similar Posts

  * [ ![AWS Status Page – Monitoring Included](https://jameskilby.co.uk/wp-content/uploads/2018/05/AmazonWebservices_Logo.svg_-768x307.png) ](https://jameskilby.co.uk/2018/05/aws-status-page-monitoring-included/)

[AWS](https://jameskilby.co.uk/category/aws/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [AWS Status Page – Monitoring Included](https://jameskilby.co.uk/2018/05/aws-status-page-monitoring-included/)

By[James](https://jameskilby.co.uk) May 15, 2018October 1, 2025

AWS Status Page – Enhancements The tool I deployed lambstatus supports pulling metrics from AWS Cloudwatch and displaying them. As part of my personal development, I thought I would include this on my status page. I managed to get this working as can be seen here. This is a lambda function running once a minute…

  * [ ![Analytics in a privacy focused world](https://jameskilby.co.uk/wp-content/uploads/2023/11/plausible-analytics-icon-top.png) ](https://jameskilby.co.uk/2023/11/analytics-in-a-privacy-focused-world/)

[Hosting](https://jameskilby.co.uk/category/hosting/) | [Personal](https://jameskilby.co.uk/category/personal/)

### [Analytics in a privacy focused world](https://jameskilby.co.uk/2023/11/analytics-in-a-privacy-focused-world/)

By[James](https://jameskilby.co.uk) November 10, 2023October 1, 2025

I recently helped my friend Dean Lewis @veducate with some hosting issues. As part of the testing of this he kindly gave me a login to his WordPress instance. He has been a pretty prolific blogger over the years pumping out an amazing amount of really good content. It also highlighted to me that I…

  * [ ![Static WordPress hosting using Cloudflare](https://jameskilby.co.uk/wp-content/uploads/2022/10/iu-768x450.jpeg) ](https://jameskilby.co.uk/2022/10/how-i-moved-my-wordpress-site-to-cloudflare-pages/)

[Cloudflare](https://jameskilby.co.uk/category/cloudflare/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Wordpress](https://jameskilby.co.uk/category/wordpress/)

### [Static WordPress hosting using Cloudflare](https://jameskilby.co.uk/2022/10/how-i-moved-my-wordpress-site-to-cloudflare-pages/)

By[James](https://jameskilby.co.uk) October 20, 2022December 27, 2025

For a while now I have been running this site directly from Cloudflare utilising their excellent worker’s product. I did this originally as a learning exercise but due to the benefits It brought and the ease of use I decided to stick with it. The benefits are several fold: Crazy Web Performance (Typically full page…

  * [ ![How to Fix Portainer Agent not Starting On Synology DSM](https://jameskilby.co.uk/wp-content/uploads/2025/03/Docker-Symbol-1-2199360526-768x528.png) ](https://jameskilby.co.uk/2025/03/portainer-agent-on-synology-dsm/)

[Docker](https://jameskilby.co.uk/category/docker/) | [Portainer](https://jameskilby.co.uk/category/portainer/) | [Synology](https://jameskilby.co.uk/category/synology/)

### [How to Fix Portainer Agent not Starting On Synology DSM](https://jameskilby.co.uk/2025/03/portainer-agent-on-synology-dsm/)

By[James](https://jameskilby.co.uk) March 11, 2025December 27, 2025

How to fix Portainer Agent no starting on Synology

  * [ ![Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/wp-content/uploads/2025/07/semaphore-768x768.png) ](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)

[Ansible](https://jameskilby.co.uk/category/ansible/) | [Homelab](https://jameskilby.co.uk/category/homelab/)

### [Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)

By[James](https://jameskilby.co.uk) September 2, 2025December 18, 2025

I recently stumbled across Semaphore, which is essentially a frontend for managing DevOps tooling, including Ansible, Terraform, OpenTofu, and PowerShell. It’s easy to deploy in Docker, and I am slowly moving more of my homelab management over to it. Introduction This is a guide to show you how to get up and running easily with…

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Veeam](https://jameskilby.co.uk/category/veeam/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Lab Update – Desired Workloads](https://jameskilby.co.uk/2022/01/lab-update-part-5-desired-workloads/)

By[James](https://jameskilby.co.uk) January 6, 2022November 11, 2023

My lab is always undergoing change. Partially as I want to try new things or new ways of doing things. Sometimes because I break things (not always by accident) sometimes it’s a great way to learn…. I decided to list the workloads I am looking to run (some of these are already in place) Infrastucture…