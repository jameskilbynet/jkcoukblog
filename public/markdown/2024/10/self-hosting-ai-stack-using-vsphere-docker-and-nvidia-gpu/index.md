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
  - Synology
  - Nutanix
  - Hosting
  - Kubernetes
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

## Similar Posts

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Storage](https://jameskilby.co.uk/category/storage/) | [Synology](https://jameskilby.co.uk/category/synology/)

### [Lab Storage](https://jameskilby.co.uk/2018/01/lab-storage/)

By[James](https://jameskilby.co.uk) January 6, 2018July 10, 2024

I have been meaning to post around some of the lab setup for a while. Although it changes frequently at present it’s as below. I will add some pics when I have tidied up the lab/cables My primary lab storage is all contained within an HP Gen8 Microserver. Currently Configured: 1x INTEL Core i3-4130 running at…

  * [ ![Nutanix CE](https://jameskilby.co.uk/wp-content/uploads/2020/07/nutanix-logo-HI-REZ_reverse-w-carrier-768x196.jpg) ](https://jameskilby.co.uk/2018/01/nutanix-ce/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Nutanix](https://jameskilby.co.uk/category/nutanix/)

### [Nutanix CE](https://jameskilby.co.uk/2018/01/nutanix-ce/)

By[James](https://jameskilby.co.uk) January 6, 2018July 10, 2024

I ran a Nutanix CE server at home for a little while when it first came out. However, due to the fairly high requirements, it didn’t make sense to me to continue running it at home. This was compounded by the fact that I have many clusters to play with at work. These all run my…

  * [ ![Starlink](https://jameskilby.co.uk/wp-content/uploads/2022/10/spacexs-starlink-to-supply-free-satellite-internet-to-famili_u44u.1920-768x432.jpg) ](https://jameskilby.co.uk/2022/10/starlink/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [Starlink](https://jameskilby.co.uk/2022/10/starlink/)

By[James](https://jameskilby.co.uk) October 11, 2022October 1, 2025

Since moving to Dorset last year internet connectivity has been the bane of my existence. Currently, I have an ADSL connection provided by my old employer Zen and a 5G connection provided by Three. These are both plumbed into my WatchGuard Firewall with multi-wan configured. Most of the time the usability is ok but there…

  * [ ![Use Portainer in a Homelab with GitHub](https://jameskilby.co.uk/wp-content/uploads/2022/12/22225832.png) ](https://jameskilby.co.uk/2022/12/use-portainer-in-a-homelab-with-github/)

[Docker](https://jameskilby.co.uk/category/docker/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [Hosting](https://jameskilby.co.uk/category/hosting/) | [Kubernetes](https://jameskilby.co.uk/category/kubernetes/)

### [Use Portainer in a Homelab with GitHub](https://jameskilby.co.uk/2022/12/use-portainer-in-a-homelab-with-github/)

By[James](https://jameskilby.co.uk) December 9, 2022October 1, 2025

Late to the party or not, I have been using containers in my lab more and more and that has led me to Portainer…. I use it for managing the docker containers on my Synology but it can also be used for managing lots of other things. In their own words “Portainer accelerates container adoption….

  * [ ![Nvidia Tesla P4 Homelab Setup](https://jameskilby.co.uk/wp-content/uploads/2023/10/IMG_1107-768x403-1.jpg) ](https://jameskilby.co.uk/2023/10/vgpu-setup-in-my-homelab/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Nvidia Tesla P4 Homelab Setup](https://jameskilby.co.uk/2023/10/vgpu-setup-in-my-homelab/)

By[James](https://jameskilby.co.uk) October 23, 2023July 10, 2024

A little while ago I decided to play with vGPU in my homelab. This was something I had dabbled with in the past but never really had the time or need to get working properly. The first thing that I needed was a GPU. I did have a Dell T20 with an iGPU built into…

  * [ ](https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/)

[Homelab](https://jameskilby.co.uk/category/homelab/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Lab Update – Compute](https://jameskilby.co.uk/2022/01/lab-update-part-1-compute/)

By[James](https://jameskilby.co.uk) January 6, 2022July 10, 2024

Quite a few changes have happened in the lab recently. so I decided to do a multipart blog on the changes. The refresh was triggered by the purchase of a SuperMicro Server (2027TR-H71FRF) chassis with 4x X9DRT Nodes / Blades. This is known as a BigTwin configuration in SuperMicro parlance. This is something I was…