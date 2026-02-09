---
title: "Self Hosting AI Stack using vSphere, Docker and NVIDIA GPU"
description: "Self Hosting AI Stack using vSphere, Docker and NVIDIA GPU, Self Hosted solutions for AI enthusiasts. Start your AI journey today!"
date: 2024-10-11T15:03:26+00:00
modified: 2025-10-01T15:22:12+00:00
author: James Kilby
categories:
  - Artificial Intelligence
  - Docker
  - Homelab
  - Storage
  - Mikrotik
  - Networking
  - Hosting
  - Synology
  - Nutanix
  - Automation
  - VMware
tags:
  - #Artificial Intelligence
  - #Homelab
  - #Nvidia
url: https://jameskilby.co.uk/2024/10/self-hosting-ai-stack-using-vsphere-docker-and-nvidia-gpu/
image: https://jameskilby.co.uk/wp-content/uploads/2024/10/pexels-tara-winstead-8386440-1024x683.jpg
---

![](https://jameskilby.co.uk/wp-content/uploads/2024/10/pexels-tara-winstead-8386440-scaled.jpg)

[Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Docker](https://jameskilby.co.uk/category/docker/) | [Homelab](https://jameskilby.co.uk/category/homelab/)

# Self Hosting AI Stack using vSphere, Docker and NVIDIA GPU

By[James](https://jameskilby.co.uk) October 11, 2024October 1, 2025 • 📖5 min read(1,070 words)

📅 **Published:** October 11, 2024• **Updated:** October 01, 2025

Artificial intelligence is all the rage at the moment, It’s getting included in every product announcement from pretty much every vendor under the sun. Nvidia’s stock price has gone to the moon. So I thought I better get some knowledge and understand some of this.

As it’s a huge field and I wasn’t exactly sure where to start I decided to follow [Tim’s](https://www.youtube.com/@TechnoTim) excellent [video ](https://www.youtube.com/watch?v=GrLpdfhTwLg)and [guide](https://technotim.live/posts/ai-stack-tutorial/) as to what he has deployed. This blog is a bit more of a reminder for me as what I have done. I wont go into all the details as Tim has done a better job than I will. 

## Table of Contents

## Introduction

Yes, you can do some AI things with a CPU but the reality at the moment is that it’s better suited to being executed on a GPU and depending on what you’re doing a GPU(s) with lots of memory are what you need. I didn’t fancy spending any money so I thought I would start with my Nvidia P4 and see where I get to.

### Nvidia Tesla P4 Specs

The Nvidia P4 has 8GB of DDR5 memory which is enough for running some smaller models 

### OS Choice

I chose to use one of my vSphere Hosts with a VM running Ubuntu 24.04 VM 

### vHardware Spec

In vSphere, I allocated 8x vCPUs, 20GB of memory, and 256GB of storage to the VM with the P4 passed in directly. This means I didn’t need any additional NVIDIA licences.

Install Ubuntu 24.04 ( or use your template) & make sure it’s patched
    
    
    sudo apt-get update && sudo apt-get upgrade

📋 Copy

## Install NVIDIA Software

The first step is to install the Nvidia drivers.
    
    
    sudo ubuntu-drivers install 
    

📋 Copy

reboot and then use “sudo nvidia-smi” to validate that the card is now functioning within the VM. The output below shows that the Ubuntu server can see the Tesla P4
    
    
    +-----------------------------------------------------------------------------+
    | NVIDIA-SMI 470.256.02   Driver Version: 470.256.02   CUDA Version: 11.4     |
    |-------------------------------+----------------------+----------------------+
    | GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
    | Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
    |                               |                      |               MIG M. |
    |===============================+======================+======================|
    |   0  Tesla P4            Off  | 00000000:0B:00.0 Off |                    0 |
    | N/A   46C    P0    23W /  75W |      0MiB /  7611MiB |      0%      Default |
    |                               |                      |                  N/A |
    +-------------------------------+----------------------+----------------------+
                                                                                   
    +-----------------------------------------------------------------------------+
    | Processes:                                                                  |
    |  GPU   GI   CI        PID   Type   Process name                  GPU Memory |
    |        ID   ID                                                   Usage      |
    |=============================================================================|
    |  No running processes found                                                 |
    +-----------------------------------------------------------------------------+

📋 Copy

## Install Docker

The next step is to install docker as the AI engines will all be running within docker.
    
    
    # Add Docker's official GPG key:
    sudo apt-get update
    sudo apt-get install ca-certificates curl gnupg
    sudo install -m 0755 -d /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    sudo chmod a+r /etc/apt/keyrings/docker.gpg
    
    # Add the repository to Apt sources:
    echo \
      "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
      "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
      sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    sudo apt-get update

📋 Copy
    
    
    sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

📋 Copy

Use Docker without SUDO
    
    
    sudo usermod -aG docker $USER

📋 Copy

## NVIDIA Container Toolkit

The next thing to do is to install the Nvidia container toolkit. This allows containers to interact with the graphics card
    
    
    curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg \
      && curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list | \
        sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \
        sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list

📋 Copy

sudo apt-get update
    
    
    sudo apt-get install -y nvidia-container-toolkit

📋 Copy
    
    
    sudo nvidia-ctk runtime configure --runtime=docker
    sudo systemctl restart docker

📋 Copy

Test NVIDIA Docker
    
    
    sudo docker run --rm --runtime=nvidia --gpus all ubuntu nvidia-smi

📋 Copy

If the above worked, you have a functioning system where docker can communicate with your GPU.

## Overview

Tim’s blog has a decent overview of the containers and what they are doing so I won’t detail it here.

## Chat in Action

So the next obvious thing I needed to do was ask it some questions. So I asked the gemma2 model the question “What AI models can I run on a Nvidia p4?”

and it answered….

You’re right to be specific! While the Nvidia P4 is _technically_ an AI-capable GPU, it’s designed more for inference (running pre-trained models) than training complex ones from scratch. Think of it like a powerful calculator for AI, not a research lab.

Here’s a breakdown of what you can realistically expect on an Nvidia P4:

**1\. Lightweight Models are Your Friend:**

  * **Object Detection:** Tiny YOLOv3 variants or lightweight MobileNet-based detectors. Expect lower accuracy than bigger models but fast inference speeds for real-time applications.
  * **Image Classification:** MobileNet V2, Inception v3 (downscaled), SqueezeNet – these are pre-trained and optimized for mobile devices.

**2\. Frameworks Matter:**

  * **TensorRT** : This is Nvidia’s specialized engine for P4. It optimizes your models for performance, even converting them into a more efficient format.
  * **ONNX Runtime** : This open-source runtime supports various AI frameworks, and can be used to run models on the P4 after conversion.

**3\. Practical Applications:**

  * **Edge Devices:** Think smart cameras, embedded systems, or robotics where low power consumption and quick responses are crucial.
  * **Demo Projects:** Great for learning about deployment and seeing how AI works in real-time, even if the accuracy isn’t state-of-the-art.

**What You CAN’T Do:**

  * Train massive neural networks from scratch (think GPT-3 or large image generators). The P4 lacks the memory and compute power.
  * Run cutting-edge research models that demand immense resources. Those are best left to specialized cloud GPUs or supercomputers.

Let me know if you have a specific AI task in mind – I might be able to suggest suitable pre-trained models or optimizations for your Nvidia P4 setup!

As a response, I was certainly impressed with it

## Power Consumption

Obviously, I am very aware of the power usage on my lab so I thought it was interesting to dig into how this much running chat queries may impact things. According to NVTOP The P4 normally idles around 7 Watts, however, once a model is loaded even if its not running any queries this increases to around 24W this is probably due to the increased memory clock speed.

![](https://jameskilby.co.uk/wp-content/uploads/2024/09/Screenshot-2024-09-05-at-11.57.47.png)Idle consumption ![](https://jameskilby.co.uk/wp-content/uploads/2024/09/Screenshot-2024-09-05-at-12.01.26.png)Models loaded ![](https://jameskilby.co.uk/wp-content/uploads/2024/09/Screenshot-2024-09-16-at-14.41.52.png)Models Running

When queries are running it will typically use 50-60 watts.

## Summary 

Obviously it’s early days for my experimentation into what is a large and rapidly changing field. But it’s certainly something I will be playing with a lot.

## 📚 Related Posts

  * [Automating the deployment of my Homelab AI Infrastructure](https://jameskilby.co.uk/2026/02/automating-the-deployment-of-my-ai-homelab-and-other-improvements/)
  * [Warp &#8211; The intelligent terminal](https://jameskilby.co.uk/2025/04/warp-the-intelligent-terminal/)
  * [How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)

## Similar Posts

  * [ ![Lab Update – Part 2 Storage Truenas Scale](https://jameskilby.co.uk/wp-content/uploads/2022/01/maxresdefault-768x432.jpeg) ](https://jameskilby.co.uk/2022/01/lab-update-part-2-storage/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/)

### [Lab Update – Part 2 Storage Truenas Scale](https://jameskilby.co.uk/2022/01/lab-update-part-2-storage/)

By[James](https://jameskilby.co.uk) January 11, 2022December 11, 2023

The HP Z840 has changed its role to a permanent storage box running Truenas Scale. This is in addition to my Synology DS918+ TrueNas is the successor to FreeNas a very popular BSD based StorageOS and TrueNas scale is a fork of this based on Linux. The Synology has been an amazing piece of kit…

  * [ ![CRS-504](https://jameskilby.co.uk/wp-content/uploads/2024/09/s-l1600-768x427.jpg) ](https://jameskilby.co.uk/2024/09/home-network-upgrade/)

[Mikrotik](https://jameskilby.co.uk/category/mikrotik/) | [Networking](https://jameskilby.co.uk/category/networking/)

### [Home Network Upgrade](https://jameskilby.co.uk/2024/09/home-network-upgrade/)

By[James](https://jameskilby.co.uk) September 9, 2024October 24, 2025

My journey to superfast networking in my homelab

  * [ ![How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/wp-content/uploads/2025/01/Screenshot-2025-01-29-at-23.30.47-768x411.png) ](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)

[Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Docker](https://jameskilby.co.uk/category/docker/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [How I Migrated from Pocket to Hoarder with AI Integration](https://jameskilby.co.uk/2025/01/how-i-migrated-from-pocket-to-hoarder-and-introduced-some-ai-along-the-way/)

By[James](https://jameskilby.co.uk) January 29, 2025January 18, 2026

Update: Hoarder has now been renamed to Karakeep due to a trademark issue I’ve been on a mission recently to regain control of my data. I haven’t yet faced the humongous task of moving my main email from Gmail, but I have had some successes with other cloud services and a win is a win…….

  * [ ![Homelab bad days \(almost\)](https://jameskilby.co.uk/wp-content/uploads/2022/11/BrokenHardDive-1200x630-1-768x403.jpg) ](https://jameskilby.co.uk/2022/11/homelab-bad-days-almost/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [Synology](https://jameskilby.co.uk/category/synology/)

### [Homelab bad days (almost)](https://jameskilby.co.uk/2022/11/homelab-bad-days-almost/)

By[James](https://jameskilby.co.uk) November 21, 2022April 8, 2023

I recently spent 3 weeks in Ireland with my wife Wendy and our son Nate. This involves driving from the south coast of Dorset up to Scotland and then getting a ferry over to Belfast before travelling west to the Republic. While driving I got a slack notification that one of my SSD’s in my…

  * [ ![Nutanix CE](https://jameskilby.co.uk/wp-content/uploads/2020/07/nutanix-logo-HI-REZ_reverse-w-carrier-768x196.jpg) ](https://jameskilby.co.uk/2018/01/nutanix-ce/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Nutanix](https://jameskilby.co.uk/category/nutanix/)

### [Nutanix CE](https://jameskilby.co.uk/2018/01/nutanix-ce/)

By[James](https://jameskilby.co.uk) January 6, 2018July 10, 2024

I ran a Nutanix CE server at home for a little while when it first came out. However, due to the fairly high requirements, it didn’t make sense to me to continue running it at home. This was compounded by the fact that I have many clusters to play with at work. These all run my…

  * [ ![Template Deployment with Packer](https://jameskilby.co.uk/wp-content/uploads/2021/01/logo_packer.png) ](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

[Automation](https://jameskilby.co.uk/category/automation/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Template Deployment with Packer](https://jameskilby.co.uk/2021/01/hashicorp-packer/)

By[James](https://jameskilby.co.uk) January 21, 2021February 9, 2026

Packer is one of those tools I have heard about, and some of the cool people on Twitter that I follow have been using it for a while. But until now I had never played with it. That was until I saw the below tweet by the legend that is William Lam That was the…