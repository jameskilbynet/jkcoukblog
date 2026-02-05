---
title: "Automating the deployment of my Homelab AI  Infrastructure"
description: "In a previous post, I wrote about using my VMware lab with an NVIDIA Tesla P4 for running some AI services. However, this deployment was done with the GPU in"
date: 2026-01-15T21:19:58+00:00
modified: 2026-02-05T23:49:09+00:00
author: James Kilby
categories:
  - Ansible
  - Artificial Intelligence
  - Containers
  - Devops
  - Homelab
  - NVIDIA
  - Traefik
  - VMware
  - vSAN
  - VMware Cloud on AWS
  - VCF
  - Personal
  - vSphere
  - Networking
tags:
  - #AI
  - #Docker
  - #Homelab
  - #Nvidia
  - #Semaphore
url: https://jameskilby.co.uk/2026/01/automating-the-deployment-of-my-ai-homelab-and-other-improvements/
image: https://jameskilby.co.uk/wp-content/uploads/2026/01/VMware-NVIDIA-logos_ee2f18dc-615d-4c9e-8f11-9c3c2ce2bf37-prv.png
---

![](https://jameskilby.co.uk/wp-content/uploads/2026/01/VMware-NVIDIA-logos_ee2f18dc-615d-4c9e-8f11-9c3c2ce2bf37-prv.png)

[Ansible](https://jameskilby.co.uk/category/ansible/) | [Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Containers](https://jameskilby.co.uk/category/containers/) | [Devops](https://jameskilby.co.uk/category/devops/) | [Homelab](https://jameskilby.co.uk/category/homelab/) | [NVIDIA](https://jameskilby.co.uk/category/nvidia/) | [Traefik](https://jameskilby.co.uk/category/traefik/) | [VMware](https://jameskilby.co.uk/category/vmware/)

# Automating the deployment of my Homelab AI Infrastructure

By[James](https://jameskilby.co.uk) January 15, 2026February 5, 2026 • 📖8 min read(1,594 words)

📅 **Published:** January 15, 2026• **Updated:** February 05, 2026

In a previous post, I wrote about using my VMware lab with an NVIDIA Tesla P4 for running some AI services. However, this deployment was done with the GPU in passthrough mode (I will refer to this a GPU). I wanted to take this to the next level and I also wanted to automate most of the steps. This was for a few reasons, firstly I wanted to get better at automating in general. Secondly, I found the setup brittle and wanted to improve the reliability of deployments. This post will be about using automation to deploying of the VM infrastructure required to be able to run AI Workloads. 

I also decided to bite the bullet and update the graphics card I was using to something a bit more modern and capable. After a bit of searching I decided on an [Nvidia A10](https://www.nvidia.com/en-gb/data-center/products/a10-gpu/)

Here is my write-up, and a link to my GitHub [repository](https://github.com/jameskilbynet/iac/tree/main/ansible) with the relevant code.

## Table of Contents

## GPU vs vGPU

For anyone not familiar, it may be worth giving an overview of the differences between GPU and vGPU. What I describe as “GPU” is where I am passing the entire Graphics PCI device through to a single VM within vSphere. Using this method has some advantages, firstly, it doesn’t require any special licences or drivers. The entire PCI card gets passed into the VM as is. However, it has some downsides. The two most important ones for me are that it can only be presented to a single VM at a time and that VM cannot be snapshotted while it is turned on. This made backups convoluted. As I was changing configurations a lot this became tedious. I also wanted to be able to pass the card through to multiple VM’s

vGPU is only officially supported on “datacentre” cards from NVIDIA it virtualizes the graphics card and allows you to share it across multiple VM’s in a similar way to what vSphere has done for compute virtualization for years. It allows you to split the card into some predefined profiles that I have listed below and attach them to multiple virtual machines at the same time.

## Pre req’s

There are quite a lot of pre-reqs required to be in place to utilise the attached deployment scripts. So it’s worth ensuring that all of these are complete.

  * Obviously, you need a vSphere Host and vCentre licensed at least at the enterprise level (I am using Enterprise Plus on 8.0u3)
  * NVIDIA datacenter Graphics card and associated Host and Guest drivers, I am using an A10 and using driver version 535.247.0 
  * NVIDIA vGPU licence. Trials are available [here](https://www.nvidia.com/en-gb/data-center/resources/vgpu-evaluation/) if needed
  * NFS Server (used for NVIDIA software deployment)
  * Domain hosted with Cloudflare and API [token](http://You can create one at: https://dash.cloudflare.com/profile/api-tokens) with Zone:DNS:Edit permissions.
  * SSH access to the vGPU VM with SUDO permission
  * Internal DNS Records created for 
    * vGPU VM
    * Traefik Dashboard
    * Test NGINX Server – Optional
    * NFS Server (Used for vGPU Software install)

## Host Preparation

To make vGPU work successfully, there are two elements required. The first is that the vSphere host has the driver installed. For now, I’m using the ‘535’ version of the driver, which is the LTS version.` To utilise vGPU with vSphere you need an NVIDIA account to obtain the software. Once this has been obtained, you need to copy the host driver to a VMware datastore. Place the host in maintenance mode and then install the driver.
    
    
    esxcli software vib install -d /vmfs/volumes/02cb3d2b-457ccb84/nvidia/NVIDIA-GRID-vSphere-8.0-535.247.02-535.247.01-539.28.zip

📋 Copy

If it worked successfully, you should get a result like the below
    
    
    Installation Result
       Message: Operation finished successfully.
       VIBs Installed: NVD_bootbank_NVD-VMware_ESXi_8.0.0_Driver_535.247.02-1OEM.800.1.0.20613240
       VIBs Removed: 
       VIBs Skipped: 
       Reboot Required: false
       DPU Results: 

📋 Copy

I always choose to restart the host after installing the driver. I have been bitten in the past where it says a reboot isn’t required but it was.

Once the host has restarted ssh into it and validate that the driver is talking to the card correctly with the nvidia-smi command. This is executed on the ESXi host.
    
    
    +---------------------------------------------------------------------------------------+  
    | NVIDIA-SMI 535.247.02             Driver Version: 535.247.02   CUDA Version: N/A      |  
    |-----------------------------------------+----------------------+----------------------+  
    | GPU  Name                 Persistence-M | Bus-Id        Disp.A | Volatile Uncorr. ECC |  
    | Fan  Temp   Perf          Pwr:Usage/Cap |         Memory-Usage | GPU-Util  Compute M. |  
    |                                         |                      |               MIG M. |  
    |=========================================+======================+======================|  
    |   0  NVIDIA A10                     On  | 00000000:03:00.0 Off |                    0 |  
    |  0%   41C    P8              22W / 150W |  11200MiB / 23028MiB |      0%      Default |  
    |                                         |                      |                  N/A |  
    +-----------------------------------------+----------------------+----------------------+  
      
    

📋 Copy

## Guest Setup

I have built some Ansible playbooks that perform a number of activities that make it MUCH easier to get the guest up and running for use with AI workloads. These have only been tested with Ubuntu.

At a high level, they:

  * [Patch Ubuntu ](https://github.com/jameskilbynet/iac/blob/main/ansible/updates/patch_ubuntu.yml)
  * [Deploy Docker ](https://github.com/jameskilbynet/iac/blob/main/ansible/docker/install_docker.yml)
  * [Install NVIDIA Guest drivers](https://github.com/jameskilbynet/iac/blob/main/ansible/vGPU/install_nvidia_drivers.yml)
  * [Install NVIDIA Container Toolkit](http://ansible/vGPU/install_nvidia_containertoolkit.yml)
  * [Install Traefik ](https://github.com/jameskilbynet/iac/blob/main/ansible/traefik/traefik_deploy.yml)(Optional) but highly recommended

## Ansible Details 

I have kept these as separate playbooks for now. This hopefully makes it easier to follow and/or troubleshoot if needed. The playbooks are intended to be run in order.

I am using SemaphoreUI to handle the deployment but this isn’t required. 

### 1\. Docker deployment

I have covered the deployment of Docker already in [this](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/ "Managing my Homelab with SemaphoreUI") post. Obviously, you don’t have to use Semaphore to do this (especially as Semaphore requires Docker in the first place). However, you can use the Ansible playbook with some amendments.

No parameters are required to be set. Everything is set in the playbook.

### 2\. Install NVIDIA Guest Drivers

This playbook configures an NFS client on the Ubuntu server and then copies both the vGPU license file and the driver from my NFS storage before installing them.

A number of parameters need to be defined or amended to run this successfully in your environment.

The following parameters need to be set in SemaphoreUI as a variable group. 

Jump to the full Semaphore Instructions at the bottom

Variable| Default| Description  
---|---|---  
`nvidia_vgpu_driver_file`| `NVIDIA-Linux-x86_64-535.247.01-grid.run`| Driver installer filename  
`nvidia_vgpu_licence_file`| `client_configuration_token_04-08-2025-16-54-19.tok`| License token filename  
`nvidia_vgpu_driver_path`| `/tmp/<driver_file>`| Local path for installer  
`nvidia_nfs_server`| `nas.jameskilby.cloud`| NFS server hostname  
`nvidia_nfs_export_path`| `/mnt/pool1/ISO/nvidia`| NFS export path  
`nvidia_nfs_mount_point`| `/mnt/iso/nvidia`| Local mount point  
  
### 3\. Install NVIDIA Container Toolkit

This playbook installs the NVIDIA container toolkit and validates that everything is working by running a Docker container and executing the nvidia-smi command from within a container.

No parameters are required to be set

### 4\. Install Traefik

Traefik is a reverse proxy/ingress controller. I am using it effectively as a load balancer in front of my web-based homelab services. I also have it integrated with Let’s Encrypt and Cloudflare so that it will automatically obtain a trusted certificate for my internal services. This has the added benefit that I don’t need to remember the relevant port the containers are running on.

This playbook needs a lot of Variables as can be seen below. In most cases the default is ok.

When they are all input to Semaphore it will look something like this.

![](https://jameskilby.co.uk/wp-content/uploads/2026/01/Screenshot-2026-02-05-at-23.01.04-806x1024.png)

Rather than typing all of the values out you can copy the json below and then just tweak what you need to.
    
    
    {
      "nvidia_vgpu_driver_file": "NVIDIA-Linux-x86_64-535.247.01-grid.run",
      "nvidia_vgpu_licence_file": "client_configuration_token_04-08-2025-16-54-19.tok",
      "nvidia_vgpu_driver_path": "/tmp/<driver_file>",
      "nvidia_nfs_server": "nas.jameskilby.cloud",
      "nvidia_nfs_export_path": "/mnt/pool1/ISO/nvidia",
      "nvidia_nfs_mount_point": "/mnt/iso/nvidia",
      "traefik_deploy_test_service": "true",
      "traefik_healthcheck_poll_retries": "12",
      "traefik_healthcheck_poll_delay": "5",
      "traefik_docker_image": "traefik:v3.6.4",
      "traefik_name": "traefik",
      "traefik_config_path": "/etc/traefik",
      "traefik_acme_path": "/etc/traefik/acme",
      "traefik_docker_network": "traefik",
      "traefik_http_port": "80",
      "traefik_https_port": "443",
      "acme_dns_delay": "10",
      "acme_dns_resolvers": "['1.1.1.1:53', '8.8.8.8:53']",
      "traefik_log_level": "info",
      "traefik_log_format": "json",
      "traefik_log_max_size": "10m",
      "traefik_log_max_files": "3",
      "traefik_healthcheck_interval": "30s",
      "traefik_healthcheck_timeout": "10s",
      "traefik_healthcheck_retries": "3",
      "traefik_healthcheck_start_period": "30s",
      "traefik_test_container": "nginx-test",
      "traefik_test_image": "nginx:alpine",
      "traefik_test_domain": "test.jameskilby.cloud",
      "traefik_dashboard_user": "admin"
    }

📋 Copy

## Variable Definitions

Variable| Default| Description  
---|---|---  
`traefik_deploy_test_service`| ``true``| Set to `false` to skip test nginx deployment  
`traefik_healthcheck_poll_retries`| `12`| Number of health check poll attempts  
`traefik_healthcheck_poll_delay`| `5`| Seconds between health check polls  
`traefik_docker_image`| `traefik:v3`| Traefik Docker image  
`traefik_name`| `traefik`| Container name  
`traefik_config_path`| `/etc/traefik`| Config directory  
`traefik_acme_path`| `/etc/traefik/acme`| ACME/cert directory  
`traefik_docker_network`| `traefik`| Docker network name  
`traefik_http_port`| `80`| HTTP port  
`traefik_https_port`| `443`| HTTPS port  
`acme_dns_delay`| `10`| Seconds before DNS check  
`acme_dns_resolvers`| `['1.1.1.1:53', '8.8.8.8:53']`| DNS resolvers  
`traefik_log_level`| `INFO`| Log level  
`traefik_log_format`| `json`| Log format  
`traefik_log_max_size`| `10m`| Max log size  
`traefik_log_max_files`| `3`| Max log files  
`traefik_healthcheck_interval`| `30s`| Health check interval  
`traefik_healthcheck_timeout`| `10s`| Health check timeout  
`traefik_healthcheck_retries`| `3`| Health check retries  
`traefik_healthcheck_start_period`| `30s`| Health check grace period  
`traefik_test_container`| `nginx-test`| Test container name  
`traefik_test_image`| `nginx:alpine`| Test container image  
`traefik_test_domain`| `test.<wildcard_domain>`| Test service domain  
`traefik_dashboard_user`| `admin`| Dashboard username  
  
It also needs additional variables that should be classed as secrets as they are sensitive

These are the Traefik admin dashboard hash and the Cloudflare API token

![](https://jameskilby.co.uk/wp-content/uploads/2026/01/SemaphoreSecrets-1024x262.png)

To generate the hash for the password, the easiest way is with Docker
    
    
    docker run --rm httpd:2 htpasswd -nbB admin 'your_password_here'

📋 Copy

## Semaphore Implementation Instructions

Assuming you are going to use SemaphoreUI to execute the playbooks these are the steps you will need to take. If you haven’t already set it up review my guide [here](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)

The first step is to define a new repository where the playbooks will be executed from. As my Git repo is public no authentication is required. You also need to specify the branch, in this case I am using main.

### Repository

![](https://jameskilby.co.uk/wp-content/uploads/2026/01/SemaphoreRepo-e1769682413872.png)

### Key Store

You also need to define the authentication from Semaphore to the target workload. This is done in the Key Store section.

I do this in two parts. The first is auth which I choose to do with SSH key 

I then also store the become password in Semaphore for use as SUDO

## Inventory

![](https://jameskilby.co.uk/wp-content/uploads/2026/01/Sempahore-Inventory-665x1024.png)

### Task Templates

## Variable Group

We will need to create a variable group and set the variables when we come to install the NVIDIA drivers

Review the variable table above and set to match your environment. This is what mine looks like

![](https://jameskilby.co.uk/wp-content/uploads/2026/01/Set_Variable_Group-922x1024.png)

Then ensure that the task template is set to use it

![](https://jameskilby.co.uk/wp-content/uploads/2026/01/Variable-Group-1024x547.png)

## 📚 Related Posts

  * [Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)

## Similar Posts

  * [ ![vSAN Cluster Shutdown – Orchestration](https://jameskilby.co.uk/wp-content/uploads/2023/11/OrigionalPoweredByvSAN-550x324-1.jpg) ](https://jameskilby.co.uk/2025/12/vsan-cluster-shutdown/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [vSAN](https://jameskilby.co.uk/category/vmware/vsan-vmware/)

### [vSAN Cluster Shutdown – Orchestration](https://jameskilby.co.uk/2025/12/vsan-cluster-shutdown/)

By[James](https://jameskilby.co.uk) December 6, 2025February 1, 2026

How to safety shutdown a vSAN Environment

  * [ ![Using Content Libraries in VMC to deploy software faster](https://jameskilby.co.uk/wp-content/uploads/2026/01/Firefly_Gemini-Flash-768x417.png) ](https://jameskilby.co.uk/2026/01/using-content-libraries-in-vmc-to-deploy-software-faster/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [Using Content Libraries in VMC to deploy software faster](https://jameskilby.co.uk/2026/01/using-content-libraries-in-vmc-to-deploy-software-faster/)

By[James](https://jameskilby.co.uk) January 27, 2026February 1, 2026

How to leverage Content Libraries to deploy into VMware Cloud on AWS faster.

  * [ ![VMC New Host -i3en](https://jameskilby.co.uk/wp-content/uploads/2022/11/iu-1-768x395.png) ](https://jameskilby.co.uk/2020/07/i3en/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [VMC New Host -i3en](https://jameskilby.co.uk/2020/07/i3en/)

By[James](https://jameskilby.co.uk) July 2, 2020July 10, 2024

VMware Cloud on AWS (VMC) has introduced a new host to its lineup the “i3en”. This is based on the i3en.metal AWS instance. The specifications are certainly impressive packing in 96 logical cores, 768GiB RAM, and approximately 45.84 TiB of NVMe raw storage capacity per host. It’s certainly a monster with a 266% uplift in…

  * [ ![Holodeck CPU Fixes](https://jameskilby.co.uk/wp-content/uploads/2024/01/40oOd8IipPvtrPJs-1198788743-768x737.jpg) ](https://jameskilby.co.uk/2024/01/holodeck-cpu-fixes/)

[VCF](https://jameskilby.co.uk/category/vmware/vcf/) | [VMware](https://jameskilby.co.uk/category/vmware/)

### [Holodeck CPU Fixes](https://jameskilby.co.uk/2024/01/holodeck-cpu-fixes/)

By[James](https://jameskilby.co.uk) January 18, 2024July 10, 2024

How to deploy Holodeck with Legacy CPU’s

  * [ ![Advanced Deploy VMware vSphere 7.x 3V0-22.21N](https://jameskilby.co.uk/wp-content/uploads/2023/11/image.png) ](https://jameskilby.co.uk/2023/11/advanced-deploy-vmware-vsphere-7-x-3v0-22-21n/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [Personal](https://jameskilby.co.uk/category/personal/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [Advanced Deploy VMware vSphere 7.x 3V0-22.21N](https://jameskilby.co.uk/2023/11/advanced-deploy-vmware-vsphere-7-x-3v0-22-21n/)

By[James](https://jameskilby.co.uk) November 10, 2023November 17, 2023

Yesterday I sat and passed the above exam. It had been on my todo list for a good number of years. With the current pause in the Broadcom VMware takeover deal. I had some downtime and decided to use one of the three exam vouchers VMware give me each year. This upgrades me to a…

  * [Homelab](https://jameskilby.co.uk/category/homelab/) | [Networking](https://jameskilby.co.uk/category/networking/)

### [Lab Update – Part 3 Network](https://jameskilby.co.uk/2022/01/lab-update-part-3-network/)

By[James](https://jameskilby.co.uk) January 6, 2022October 1, 2025

I have retired the WatchGuard Devices with the migration to PFSense running bare-metal in one of the Supermicro Nodes. I will likely virtualise this in the future. In terms of network/switching I have moved to an intermediate step here vMotion and Storage are running over DAC’s while VMware management and VM traffic is still over…