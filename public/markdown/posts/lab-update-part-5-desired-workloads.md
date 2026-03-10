---
title: "Lab Update –  Desired Workloads"
description: "Lab Update - Desired Workloads: Stay informed about the latest workloads in my lab. Check out what’s running and what’s coming next!"
date: 2022-01-06T19:23:11+00:00
modified: 2023-11-11T21:15:26+00:00
author: James Kilby
categories:
  - Homelab
  - Veeam
  - VMware
  - Nutanix
  - vSphere
  - AWS
  - Storage
  - Hosting
  - VMware Cloud on AWS
tags:
  - #Desired State
  - #Homelab
  - #VMware
url: https://jameskilby.co.uk/2022/01/lab-update-part-5-desired-workloads/
image: https://jameskilby.co.uk/wp-content/uploads/2025/12/ChatGPT-Image-Dec-17-2025-at-09_03_10-PM.png
---

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Veeam](https://jameskilby.co.uk/category/veeam/) | [VMware](https://jameskilby.co.uk/category/vmware/)

# Lab Update – Desired Workloads

By[James](https://jameskilby.co.uk) January 6, 2022November 11, 2023 • 📖1 min read(139 words)

📅 **Published:** January 06, 2022• **Updated:** November 11, 2023

My lab is always undergoing change. Partially as I want to try new things or new ways of doing things. Sometimes because I break things (not always by accident) sometimes it’s a great way to learn….

I decided to list the workloads I am looking to run (some of these are already in place)

## Infrastucture

Active Directory -Done

vRealize Lifecycle Manager – Done

vRealize Operations Manager -Done

vRealize Log Insight

vRealize Network Insight

Vault

SecretServer

Nutanix CE

Hyper-V

Tanzu CE

VMware Horizon – Done

VMware HCX

vCloud Director

VMware Cloud Foundation

Docker

K8s

K3s

## Networking

PFsense – Done

Sophos UTM – Done

Avi

## Monitoring

Grafana

Runecast

Veeam One

## Backups/Recovery

Veeam Backup & Replication

Veeam Service Provider Console

VMware Cloud Disaster Recovery

SRM

## Storage

TrueNAS

HP Store Once

Minio

AWS Storage Gateway

## Automation

VMware Event Broker

vRealize Automation

VMware Orchestrator

## 📚 Related Posts

  * [Automating the deployment of my Homelab AI Infrastructure](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)
  * [Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)
  * [Warp &#8211; The intelligent terminal](https://jameskilby.co.uk/2025/04/warp-the-intelligent-terminal/)

## Similar Posts

  * [ ![New Nodes](https://jameskilby.co.uk/wp-content/uploads/2024/07/IMG_6629-768x149.jpeg) ](https://jameskilby.co.uk/2024/07/new-nodes/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Nutanix](https://jameskilby.co.uk/category/nutanix/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [New Nodes](https://jameskilby.co.uk/2024/07/new-nodes/)

By[James](https://jameskilby.co.uk) July 2, 2024January 18, 2026

I recently decided to update some of my homelab hosts and I managed to do this at very little cost by offloading 2 of my Supermicro e200’s to fellow vExpert Paul. The below post describes what I bought why and how I have configured it. Table of Contents Node Choice Bill of Materials Rescue IPMI…

  * [ ![Forcing an Upgrade to vSphere 8](https://jameskilby.co.uk/wp-content/uploads/2022/12/Screenshot-2022-12-14-at-21.45.23.png) ](https://jameskilby.co.uk/2022/12/forcing-an-upgrade-to-vsphere-8/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [Forcing an Upgrade to vSphere 8](https://jameskilby.co.uk/2022/12/forcing-an-upgrade-to-vsphere-8/)

By[James](https://jameskilby.co.uk) December 14, 2022October 1, 2025

I run a reasonably extensive homelab that is of course built around the VMware ecosystem. So with the release of vSphere 8 I was obviously going to upgrade however a few personal things blocked me from doing it until now. The vCenter upgrade was smooth however knowing that some of the hardware I am running…

  * [VMware](https://jameskilby.co.uk/category/vmware/) | [AWS](https://jameskilby.co.uk/category/aws/) | [Veeam](https://jameskilby.co.uk/category/veeam/)

### [Monitoring VMC – Part 1](https://jameskilby.co.uk/2019/12/monitoring-vmc-part-1/)

By[James](https://jameskilby.co.uk) December 17, 2019October 1, 2025

As previously mentioned I have been working a lot with VMware Cloud on AWS and one of the questions that often crops up is around an approach to monitoring. This is an interesting topic as VMC is technically “as a service” therefore the monitoring approach is a bit different. Technically AWS and VMware’s SRE teams…

  * [ ![TrueNAS Logo](https://jameskilby.co.uk/wp-content/uploads/2023/05/Screenshot-2023-05-22-at-18.49.21-768x198.png) ](https://jameskilby.co.uk/2023/05/homelab-storage-refresh-part-1/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/)

### [Homelab Storage Refresh (Part 1)](https://jameskilby.co.uk/2023/05/homelab-storage-refresh-part-1/)

By[James](https://jameskilby.co.uk) May 23, 2023October 1, 2025

Table of Contents Background ZFS Overview Read Cache (ARC and L2ARC) ZIL (ZFS Intent Log) Hardware Background I have just completed the move of all my production and media-based storage/services to TrueNAS Scale. ( I will just refer to this as TrueNAS) This is based on my HP Z840 and I have now retired my…

  * [ ![Starlink](https://jameskilby.co.uk/wp-content/uploads/2022/10/spacexs-starlink-to-supply-free-satellite-internet-to-famili_u44u.1920-768x432.jpg) ](https://jameskilby.co.uk/2022/10/starlink/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [Starlink](https://jameskilby.co.uk/2022/10/starlink/)

By[James](https://jameskilby.co.uk) October 11, 2022February 19, 2026

Since moving to Dorset last year internet connectivity has been the bane of my existence. Currently, I have an ADSL connection provided by my old employer Zen and a 5G connection provided by Three. These are both plumbed into my WatchGuard Firewall with multi-wan configured. Most of the time the usability is ok but there…

  * [ ![Using Content Libraries in VMC to deploy software faster](https://jameskilby.co.uk/wp-content/uploads/2026/01/Firefly_Gemini-Flash-768x417.png) ](https://jameskilby.co.uk/2026/01/using-content-libraries-in-vmc-to-deploy-software-faster/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [Using Content Libraries in VMC to deploy software faster](https://jameskilby.co.uk/2026/01/using-content-libraries-in-vmc-to-deploy-software-faster/)

By[James](https://jameskilby.co.uk) January 27, 2026February 1, 2026

How to leverage Content Libraries to deploy into VMware Cloud on AWS faster.