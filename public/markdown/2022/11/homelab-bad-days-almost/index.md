---
title: "Homelab bad days (almost)"
description: "Facing SSD issues in your homelab? Learn about RAID 5 pitfalls and how to protect your data effectively. Read more for essential tips!"
date: 2022-11-21T15:46:53+00:00
modified: 2023-04-08T21:44:28+00:00
author: James Kilby
categories:
  - Homelab
  - Storage
  - Synology
  - VMware
  - Nutanix
  - TrueNAS Scale
  - Automation
  - Networking
tags:
  - #Homelab
  - #Storage
url: https://jameskilby.co.uk/2022/11/homelab-bad-days-almost/
image: https://jameskilby.co.uk/wp-content/uploads/2022/11/BrokenHardDive-1200x630-1.jpg
---

![](https://jameskilby.co.uk/wp-content/uploads/2022/11/BrokenHardDive-1200x630-1.jpg)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [Synology](https://jameskilby.co.uk/category/synology/)

# Homelab bad days (almost)

By[James](https://jameskilby.co.uk) November 21, 2022April 8, 2023 • 📖2 min read(363 words)

📅 **Published:** November 21, 2022• **Updated:** April 08, 2023

I recently spent 3 weeks in Ireland with my wife Wendy and our son Nate. This involves driving from the south coast of Dorset up to Scotland and then getting a ferry over to Belfast before travelling west to the Republic. While driving I got a slack notification that one of my SSD’s in my Synology DS918+ was in a bad way. (You do have notifications set up right? ) The timing could not have been worse. Now for years anyone that I have talked to at VMUG’s around data protection etc, I have advocating never using RAID 5. The reasons for this are well known. But when it’s your homelab and your wallet is in the line corners sometimes need to be cut.

When I got to Ireland I logged into the Synology it was pretty obvious it wasn’t happy

![](https://jameskilby.co.uk/wp-content/uploads/2023/04/Screenshot-2022-11-14-at-20.56.39.png)Unhappy Array ( For historical reasons I was using slots 1, 2 and 4

and it had pages and pages like this….

![](https://jameskilby.co.uk/wp-content/uploads/2023/04/Drive-Errors-2048x236-1-1024x118.png)

I had 3 SDD’s in this particular array all from around the same time. Out of curiosity, I checked how old they were. The drive that failed had a power-on-hours count of 49599 hours (5.6 Years) It had more than served its purpose so some replacements were ordered for when I was back in Poole. For now I had to run the risk and hope another drive didn’t fail. Returning home to swap a drive was never going to go down well with the family.

I decided to order 4x 2TB SSD’s and went with the Samsung 870 QVO’s. They are def on the budget end of SSD’s but are cost-effective and given the limited network bandwidth on my Synology were more than adequate.

I first replaced the failed drive and then when this was complete extended the array to be 4x Disk before replacing the other 2 existing drives one at a time.

![](https://jameskilby.co.uk/wp-content/uploads/2023/04/Screenshot-2022-11-21-at-16.43.51.png)Everything is green again

Everything is now back to being green and hunky dory. I have run scrubs to validate all data. I still have RAID 5 on both volumes but I have undertaken a task to improve some of my backup handling. Just In case…..

## 📚 Related Posts

  * [Automating the deployment of my Homelab AI Infrastructure](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)
  * [Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)
  * [Warp &#8211; The intelligent terminal](https://jameskilby.co.uk/2025/04/warp-the-intelligent-terminal/)

## Similar Posts

  * [ ](https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Lab Update – Compute](https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/)

By[James](https://jameskilby.co.uk) January 6, 2022July 10, 2024

Quite a few changes have happened in the lab recently. so I decided to do a multipart blog on the changes. The refresh was triggered by the purchase of a SuperMicro Server (2027TR-H71FRF) chassis with 4x X9DRT Nodes / Blades. This is known as a BigTwin configuration in SuperMicro parlance. This is something I was…

  * [ ![Nutanix CE](https://jameskilby.co.uk/wp-content/uploads/2020/07/nutanix-logo-HI-REZ_reverse-w-carrier-768x196.jpg) ](https://jameskilby.co.uk/2018/01/nutanix-ce/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Nutanix](https://jameskilby.co.uk/category/nutanix/)

### [Nutanix CE](https://jameskilby.co.uk/2018/01/nutanix-ce/)

By[James](https://jameskilby.co.uk) January 6, 2018July 10, 2024

I ran a Nutanix CE server at home for a little while when it first came out. However, due to the fairly high requirements, it didn’t make sense to me to continue running it at home. This was compounded by the fact that I have many clusters to play with at work. These all run my…

  * [ ![Can you really squeeze 96TB in 1U ?](https://jameskilby.co.uk/wp-content/uploads/2024/09/QuantaGrid-SD1Q-1ULH-Front-Three-Quarter.png) ](https://jameskilby.co.uk/2024/09/can-you-really-squeeze-96tb-in-1u/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [TrueNAS Scale](https://jameskilby.co.uk/category/truenas-scale/)

### [Can you really squeeze 96TB in 1U ?](https://jameskilby.co.uk/2024/09/can-you-really-squeeze-96tb-in-1u/)

By[James](https://jameskilby.co.uk) September 12, 2024January 28, 2026

Yes, that’s a clickbait title. But technically it’s possible if I dropped all drive redundancy… I recently saw an advert for a server that was just too good to be true. It promised to bring a huge amount of storage and future options in a quite hard-to-believe 1U. The price it was on offer for…

  * [ ![Template Deployment with Packer](https://jameskilby.co.uk/wp-content/uploads/2021/01/logo_packer.png) ](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

[Automation](https://jameskilby.co.uk/category/automation/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Template Deployment with Packer](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

By[James](https://jameskilby.co.uk) January 21, 2021February 9, 2026

Packer is one of those tools I have heard about, and some of the cool people on Twitter that I follow have been using it for a while. But until now I had never played with it. That was until I saw the below tweet by the legend that is William Lam That was the…

  * [ ![Nvidia Tesla P4 Homelab Setup](https://jameskilby.co.uk/wp-content/uploads/2023/10/IMG_1107-768x403-1.jpg) ](https://jameskilby.co.uk/2023/10/vgpu-setup-in-my-homelab/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Nvidia Tesla P4 Homelab Setup](https://jameskilby.co.uk/2023/10/vgpu-setup-in-my-homelab/)

By[James](https://jameskilby.co.uk) October 23, 2023July 10, 2024

A little while ago I decided to play with vGPU in my homelab. This was something I had dabbled with in the past but never really had the time or need to get working properly. The first thing that I needed was a GPU. I did have a Dell T20 with an iGPU built into…

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Networking](https://jameskilby.co.uk/category/networking/)

### [Lab Update – Part 3 Network](https://jameskilby.co.uk/2022/01/lab-update-part-3-network/)

By[James](https://jameskilby.co.uk) January 6, 2022October 1, 2025

I have retired the WatchGuard Devices with the migration to PFSense running bare-metal in one of the Supermicro Nodes. I will likely virtualise this in the future. In terms of network/switching I have moved to an intermediate step here vMotion and Storage are running over DAC’s while VMware management and VM traffic is still over…