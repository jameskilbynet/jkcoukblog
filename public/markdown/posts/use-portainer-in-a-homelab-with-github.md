---
title: "Use Portainer in a Homelab with GitHub"
description: "How to use Portainer and Github to manage and deploy docker containers"
date: 2022-12-09T09:06:37+00:00
modified: 2025-10-01T15:22:14+00:00
author: James Kilby
categories:
  - Docker
  - Homelab
  - Hosting
  - Kubernetes
  - Storage
  - Synology
  - Artificial Intelligence
  - Ansible
  - Containers
  - Devops
  - NVIDIA
  - Traefik
  - VMware
  - Cloudflare
  - Wordpress
  - Personal
tags:
  - #Containers
  - #Docker
  - #Homelab
url: https://jameskilby.co.uk/2022/12/use-portainer-in-a-homelab-with-github/
image: https://jameskilby.co.uk/wp-content/uploads/2022/12/22225832.png
---

![](https://jameskilby.co.uk/wp-content/uploads/2022/12/22225832.png)

[Docker](https://jameskilby.co.uk/category/docker/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Kubernetes](https://jameskilby.co.uk/category/kubernetes/)

# Use Portainer in a Homelab with GitHub

By[James](https://jameskilby.co.uk) December 9, 2022October 1, 2025 • 📖2 min read(458 words)

📅 **Published:** December 09, 2022• **Updated:** October 01, 2025

Late to the party or not, I have been using containers in my lab more and more and that has led me to [Portainer](https://www.portainer.io)….

I use it for managing the docker containers on my Synology but it can also be used for managing lots of other things. In their own words “Portainer accelerates container adoption. It reduces operational complexity and addresses the security challenges of running containers in Docker, Swarm, Nomad and Kubernetes.”

![](https://jameskilby.co.uk/wp-content/uploads/2022/12/Screenshot-2022-11-21-at-17.36.13-1024x638.png)Portainer Platform

Based on the capabilities shown above I am only scratching the surface but I thought I would showcase one of the key features that I am utilising in deployment and updating containers.

## Prerequisites 

For now, I am going to assume that you have a Synology, Docker Installed and Portainer deployed. Plus have GitHub (or similar) version control system that Portainer can reach. If you don’t have this check out Marius’s great blog with detailed instructions for [Docker](https://mariushosting.com/docker/) and [Portainer](https://mariushosting.com/synology-30-second-portainer-install-using-task-scheduler-docker/) It’s also important to understand user and user id’s and a great blog on this can be found [here](https://drfrankenstein.co.uk/step-2-setting-up-a-restricted-docker-user-and-obtaining-ids/)

## Container Provision

To deploy a container with Portainer I prefer to deploy them in Stacks even if it’s a single container. 

Navigate to the Stacks section and select “Add Stack”

![](https://jameskilby.co.uk/wp-content/uploads/2023/04/Screenshot-2022-11-21-at-17.59.31.png)Add Stack 

I will show the deployment of a stack to run Grafana as it’s a simple container and popular with homelabbers. The first step is to name the stack which I have called grafana – note these must be lowercase.

The YAML code that the container will use is shown below. This is stored in my private docker repository located at https://github.com/jameskilbynet/docker/grafana
    
    
    version: '3.3'
    services:
        grafana:
            container_name: grafana
            image: grafana/grafana
            user: "1024"
            ports:
                - "3000:3000"  
            volumes:
             - /volume1/docker/grafana:/var/lib/grafana

📋 Copy

Reviewing the YAML code it’s clear that volume mapping is being used. This is a feature to expose a file or folder of the underlying Docker Host into the container. In this case /volume1/docker/grafana Therefore this folder must be created manually. Docker will then map this folder into var/lib/grafana within the container to the /volume1/docker/grafana folder on my Synology

Within Portainer to use a git repository change to the Git tab and enter the relevant details. 

![](https://jameskilby.co.uk/wp-content/uploads/2022/12/Screenshot-2022-11-22-at-11.56.52-2048x1133-1-1024x567.png)

I am using a private repository and therefore need to enable authentication to allow Portainer to access the private repo. This requires a Personal Access Token to be created as documented [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

When all of the relevent settings are input then click “Deploy the Stack”

Portainer will then instruct docker to fetch the container (if it hasn’t already) and deploy the stack. 

If for any reason this errors this is usually as the volume map is not set up correctly or a permissions issue. If it’s the former the docker app in Synology will show you.

## 📚 Related Posts

  * [How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)
  * [Self Hosting AI Stack using vSphere, Docker and NVIDIA GPU](https://jameskilby.co.uk/2024/10/self-hosting-ai-stack-using-vsphere-docker-and-nvidia-gpu/)

## Similar Posts

  * [ ![Homelab bad days \(almost\)](https://jameskilby.co.uk/wp-content/uploads/2022/11/BrokenHardDive-1200x630-1-768x403.jpg) ](https://jameskilby.co.uk/2022/11/homelab-bad-days-almost/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [Synology](https://jameskilby.co.uk/category/synology/)

### [Homelab bad days (almost)](https://jameskilby.co.uk/2022/11/homelab-bad-days-almost/)

By[James](https://jameskilby.co.uk) November 21, 2022April 8, 2023

I recently spent 3 weeks in Ireland with my wife Wendy and our son Nate. This involves driving from the south coast of Dorset up to Scotland and then getting a ferry over to Belfast before travelling west to the Republic. While driving I got a slack notification that one of my SSD’s in my…

  * [ ![How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/wp-content/uploads/2025/01/Screenshot-2025-01-29-at-23.30.47-768x411.png) ](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)

[Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Docker](https://jameskilby.co.uk/category/docker/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)

By[James](https://jameskilby.co.uk) January 29, 2025January 18, 2026

Update: Hoarder has now been renamed to Karakeep due to a trademark issue I’ve been on a mission recently to regain control of my data. I haven’t yet faced the humongous task of moving my main email from Gmail, but I have had some successes with other cloud services and a win is a win…….

  * [ ![TrueNAS Logo](https://jameskilby.co.uk/wp-content/uploads/2023/05/Screenshot-2023-05-22-at-18.49.21-768x198.png) ](https://jameskilby.co.uk/2023/05/homelab-storage-refresh-part-1/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/)

### [Homelab Storage Refresh (Part 1)](https://jameskilby.co.uk/2023/05/homelab-storage-refresh-part-1/)

By[James](https://jameskilby.co.uk) May 23, 2023October 1, 2025

Table of Contents Background ZFS Overview Read Cache (ARC and L2ARC) ZIL (ZFS Intent Log) Hardware Background I have just completed the move of all my production and media-based storage/services to TrueNAS Scale. ( I will just refer to this as TrueNAS) This is based on my HP Z840 and I have now retired my…

  * [ ![Automating the deployment of my Homelab AI  Infrastructure](https://jameskilby.co.uk/wp-content/uploads/2026/01/VMware-NVIDIA-logos_ee2f18dc-615d-4c9e-8f11-9c3c2ce2bf37-prv-768x432.png) ](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)

[Ansible](https://jameskilby.co.uk/category/ansible/) | [Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Containers](https://jameskilby.co.uk/category/containers/) | [Devops](https://jameskilby.co.uk/category/devops/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [NVIDIA](https://jameskilby.co.uk/category/nvidia/) | [Traefik](https://jameskilby.co.uk/category/traefik/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Automating the deployment of my Homelab AI Infrastructure](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)

By[James](https://jameskilby.co.uk) February 9, 2026February 25, 2026

Learn how to use Ansible to configure an Ubuntu VM for use with NVIDIA based AI workloads in vSphere

  * [ ![WordPress Hosting with Cloudflare  Pages](https://jameskilby.co.uk/wp-content/uploads/2023/05/simply-static-logo.png) ](https://jameskilby.co.uk/2023/05/how-to-take-a-wordpress-site-and-publish-it-as-a-static-site-on-cloudflare-pages/)

[Cloudflare](https://jameskilby.co.uk/category/cloudflare/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Wordpress](https://jameskilby.co.uk/category/wordpress/)

### [WordPress Hosting with Cloudflare Pages](https://jameskilby.co.uk/2023/05/how-to-take-a-wordpress-site-and-publish-it-as-a-static-site-on-cloudflare-pages/)

By[James](https://jameskilby.co.uk) May 14, 2023October 1, 2025

Table of Contents The Tooling The Process WordPress Plugin Install GitHub setup Cloudflare setup I have been using Cloudflare to protect my web assets for a really long time. Throughout that time Cloudflare has been improving there capabilities and approximately 2 years ago I decided to move this blog into their worker’s product. This meant…

  * [ ![Web Development](https://jameskilby.co.uk/wp-content/uploads/2020/06/iu-2-768x229.png) ](https://jameskilby.co.uk/2022/01/web-development/)

[Hosting](https://jameskilby.co.uk/category/hosting/) | [Cloudflare](https://jameskilby.co.uk/category/cloudflare/) | [Personal](https://jameskilby.co.uk/category/personal/) | [Wordpress](https://jameskilby.co.uk/category/wordpress/)

### [Web Development](https://jameskilby.co.uk/2022/01/web-development/)

By[James](https://jameskilby.co.uk) January 4, 2022October 1, 2025

A while ago I started messing with Cloudflare Workers. I have now moved this site permanently over to them. This is partly related to some issues I have been having with internet access at home. Prior to this, the site ran from within my lab. This means the site is now super fast (hopefully :p)….