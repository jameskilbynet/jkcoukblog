---
title: "Automating the deployment of my Homelab AI  Infrastructure"
description: "How I use Ansible automation to deploy my AI Infrastucture"
date: 2026-01-15T21:19:58+00:00
modified: 2026-02-08T22:56:47+00:00
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
  - Docker
  - Personal
  - Mikrotik
  - Networking
  - Portainer
  - Synology
  - VMware Cloud on AWS
  - vSphere
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

By[James](https://jameskilby.co.uk) January 15, 2026February 8, 2026 • 📖14 min read(2,827 words)

📅 **Published:** January 15, 2026• **Updated:** February 08, 2026

In a previous [post](https://jameskilby.co.uk/2024/10/self-hosting-ai-stack-using-vsphere-docker-and-nvidia-gpu/), I wrote about using my VMware lab with an NVIDIA Tesla P4 for running some AI services. This deployment was done with the GPU in walkthrough mode (I will refer to this as GPU). I wanted to take this to the next level. I also wanted to automate most of the steps. This was for a few reasons, firstly I wanted to get better at automating in general. Secondly, I found the setup brittle and wanted to improve the reliability of deployments. This post will be about using automation to deploying of the VM infrastructure required to be able to run AI Workloads.

I also decided to bite the bullet and update the graphics card I was using to something a bit more modern and capable. After a bit of searching I decided on an [NVIDIA A10](https://www.nvidia.com/en-gb/data-center/products/a10-gpu/)

This post is about getting the foundational infrastructure ready. The first part will explain the steps and detail the Ansible configuration. The second part of this post goes into a full deployment utilising SemaphoreUI. My next post will go into more details on the Docker containers I am using for actually running the AI services building on these foundations.

All of the code is referenced in my GitHub IAC [repository](https://github.com/jameskilbynet/iac/tree/main/ansible)

## Table of Contents

## GPU vs vGPU

For anyone not familiar, it may be worth giving an overview of the differences between GPU and vGPU. What I describe as “GPU” is where I am passing the entire Graphics PCI device through to a single VM within vSphere. Using this method has some advantages, firstly, it doesn’t require any special licences or drivers. The entire PCI card gets passed into the VM as is. However, it has some downsides. The two most important ones for me are that it can only be presented to a single VM at a time and that VM cannot be snapshotted while it is turned on. This made backups convoluted. As I was changing configurations a lot this became tedious. I also wanted to be able to pass the card through to multiple VM’s

vGPU is only officially supported on “datacentre” cards from NVIDIA it virtualizes the graphics card and allows you to share it across multiple VM’s in a similar way to what vSphere has done for compute virtualization for years. It allows you to split the card into some predefined profiles that I have listed below and attach them to multiple virtual machines at the same time.

## Pre req’s

There are quite a lot of pre-reqs required to be in place to utilise all the attached deployment playbooks. So it’s worth ensuring that all of these are complete.

  * Obviously, you need a vSphere Host and vCentre server licensed at least at the enterprise level (I am using Enterprise Plus on 8.0u3)
  * An Ubuntu VM (Tested with 25.04) referred to as the vGPU VM
  * A NVIDIA datacenter Graphics card and associated Host and Guest drivers, I am using an A10 24GB and using driver version 535.247.0
  * NVIDIA vGPU licence. Trials are available [here](https://www.nvidia.com/en-gb/data-center/resources/vgpu-evaluation/) if needed
  * NFS Server (used for NVIDIA software deployment)
  * A Domain hosted with Cloudflare and an API [token](http://You can create one at: https://dash.cloudflare.com/profile/api-tokens) with Zone:DNS:Edit permissions.
  * SSH access to the vGPU VM with SUDO permission
  * Somewhere to run Ansible playbooks from.
  * Internal DNS Records created for 
    * vGPU VM
    * Traefik Dashboard
    * Test NGINX Server – Optional
    * NFS Server (Used for vGPU Software install)

## Host Setup

To make vGPU work successfully, there are three elements required. The first is that the vSphere host has the driver installed. For now, I’m using the ‘535’ version of the driver, which is the LTS version.` To utilise vGPU with vSphere you need an NVIDIA account to obtain the software. Once this has been obtained, you need to copy the host driver to a VMware datastore. Place the host in maintenance mode and then install the driver.
    
    
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

Once the host has restarted, ssh into it and validate that the driver is talking to the GPU correctly. This can be done with the nvidia-smi command. This is executed on the ESXi host and will show something similar to the below if it’s working.
    
    
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

### vGPU Profiles

If everything is working correctly you should now be able to see the vGPU profiles in vCentre. Select the VM you want to present the NVIDIA card to. Edit the settings and select add PCI device.

![](https://jameskilby.co.uk/wp-content/uploads/2026/01/Add-PCI-Device-1-402x1024.png)

You should then be presented with the available profiles from the NVIDIA GPU

![](https://jameskilby.co.uk/wp-content/uploads/2026/01/GPU-Profiles-1024x397.png)

As can be seen the NVIDIA A10 supports 18 different profiles. The nvidia_a10 specifies the card and the suffix determines how much ram is allocated to the vGPU instance along with the features that are exposed with it. I typically use either the a10-24q profile to allow use of larger AI models. Although I do step this down to the 12q profile to allow support of multiple vm’s for testing etc.

The NVIDIA A10 supports four separate “Personalities) A, B, Q and C each of these come with different capabilities but also potentially a different licensing requirement.

Profile| Intended Use| Driver Feature Set| License Tier| Expected Workloads  
---|---|---|---|---  
A-Series| App Streaming / RDSH| Basic Graphics no pro features| vAPPS| Many Users / Published Apps  
B-Series| VDI Desktops| Standard Desktop Graphics| vPC| Knowledge Worker Desktops  
C-Series| Compute Only| CUDA Only | vCompute Server| AI/ML Data Science  
Q-Series| Full GFX Workstation| Full RTX| RTX vWS| CAD,3D Rendering   
  
The keen eyed amongst you might realise that I am using the wrong profile. I have chosen to use Q based profiles rather than C based ones. This is because the A, B and Q profiles are run from one ESXi driver VIB and the C profile requires a different VIB. Because I occasionally want to run a VDI based workload or media conversion in my lab. I have chosen to use the more graphics focused VIB and utilise the Q profile for my AI based workloads.

## Guest Setup

To make the guest setup easier and more repeatable I have built some Ansible playbooks. These perform a number of activities that make it MUCH easier to get the guest up and running for use with AI workloads and other containers. These have only been tested with Ubuntu but will probably work with other Linux distro’s without a lot of changes. As a bonus if you want to utilise the Traefik setup I have built this can be used on its own just with the Deploy Docker and Install Traefik playbooks. Once these playbooks have been run you will be in a position to spin up any number of docker containers with GPU access. 

At a high level the four playbooks I have built:

  * [Deploy Docker ](https://github.com/jameskilbynet/iac/blob/main/ansible/docker/install_docker.yml)
  * [Install NVIDIA Guest drivers](https://github.com/jameskilbynet/iac/blob/main/ansible/vGPU/install_nvidia_drivers.yml)
  * [Install NVIDIA Container Toolkit](http://ansible/vGPU/install_nvidia_containertoolkit.yml)
  * [Install Traefik ](https://github.com/jameskilbynet/iac/blob/main/ansible/traefik/traefik_deploy.yml)

### Ansible Details 

I have kept these as separate playbooks for now. This hopefully makes it easier to follow and/or troubleshoot if needed. The playbooks are intended to be run in order. 

I am using SemaphoreUI to handle the Ansible deployment but this isn’t required. If you are familiar enough with Ansible to not use Semaphore than you can easily modify these to suit your execution preferences.

#### 1\. Docker deployment

<https://github.com/jameskilbynet/iac/blob/main/ansible/docker/install_docker.yml>

I have covered the deployment of Docker already in [this](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/ "Managing my Homelab with SemaphoreUI") post. 

No parameters are required to be set for the Docker deployment. Everything is set in the playbook.

#### 2\. Install NVIDIA Guest Drivers

<https://github.com/jameskilbynet/iac/blob/main/ansible/vGPU/install_nvidia_drivers.yml>

This playbook configures an NFS client on the Ubuntu server and then copies both the vGPU license file and the driver from my NFS storage before installing them. This I felt was the best way to have a portable Ansible file without checking in my NVIDIA licence and driver files into Git.

Before you use this playbook a number of parameters need to be set in Semaphore these should be done in the Variable Group section. I created a Variable Group called vGPU for this purpose. 

##### NVIDIA Guest Driver Variables

**Variable**|  **Default**|  **Description**  
---|---|---  
nvidia_vgpu_driver_file| NVIDIA-Linux-x86_64-535.247.01-grid.run| Driver filename  
nvidia_vgpu_licence_file| client_configuration_token_04-08-2025-16-54-19.tok| Token filename  
nvidia_nfs_server| nas.jameskilby.cloud| NFS server hostname  
nvidia_nfs_export_path| /mnt/pool1/ISO/nvidia| NFS export path  
nvidia_nfs_mount_point| /mnt/iso/nvidia| Local mount point  
  
To make your life easier you can copy this json to Semaphore and just tweak what is needed.
    
    
    {
      "nvidia_vgpu_driver_file": "NVIDIA-Linux-x86_64-535.247.01-grid.run",
      "nvidia_vgpu_licence_file": "client_configuration_token_04-08-2025-16-54-19.tok",
      "nvidia_nfs_server": "nas.jameskilby.cloud",
      "nvidia_nfs_export_path": "/mnt/pool1/ISO/nvidia",
      "nvidia_nfs_mount_point": "/mnt/iso/nvidia",
    }

📋 Copy

If everything runs smoothly the last step on the Ansible playbook will show an export of the licence and vGPU configuration.
    
    
    TASK [Show vGPU license info] **************************************************
    9:18:47 PM
    ok: [blogtest.jameskilby.cloud] => 
    9:18:47 PM
      msg: |-
    9:18:47 PM
        ==============NVSMI LOG==============
    9:18:47 PM
      
    9:18:47 PM
        Timestamp                                 : Fri Feb  6 21:18:47 2026
    9:18:47 PM
        Driver Version                            : 535.247.01
    9:18:47 PM
        CUDA Version                              : 12.2
    9:18:47 PM
      
    9:18:47 PM
        Attached GPUs                             : 1
    9:18:47 PM
        GPU 00000000:03:00.0
    9:18:47 PM
            Product Name                          : NVIDIA A10-12Q
    9:18:47 PM
            Product Brand                         : NVIDIA RTX Virtual Workstation
    9:18:47 PM
            Product Architecture                  : Ampere
    9:18:47 PM
            Display Mode                          : Enabled
    9:18:47 PM
            Display Active                        : Disabled
    9:18:47 PM
            Persistence Mode                      : Enabled
    9:18:47 PM
            Addressing Mode                       : None
    9:18:47 PM
            MIG Mode
    9:18:47 PM
                Current                           : Disabled
    9:18:47 PM
                Pending                           : Disabled
    9:18:47 PM
            Accounting Mode                       : Disabled
    9:18:47 PM
            Accounting Mode Buffer Size           : 4000

📋 Copy

#### 3.Install NVIDIA Container Toolkit

<https://github.com/jameskilbynet/iac/blob/main/ansible/vGPU/install_nvidia_containertoolkit.yml>

This playbook installs the NVIDIA container toolkit and validates that everything is working by running a Docker container and executing the nvidia-smi command from within a container. This sounds trivial but actually is one of the main reasons I made these playbooks. To get the GPU to work in the docker container you have to have a lot of things set up correctly. 

No additional parameters need to be set to execute it. 

The below is the expected output showcasing nvidia-smi running from within a docker container. 

![](https://jameskilby.co.uk/wp-content/uploads/2026/01/nvidia-smi-1024x654.png)

#### 4\. Install Traefik

<https://github.com/jameskilbynet/iac/blob/main/ansible/traefik/traefik_deploy.yml>

For those unfamiliar with Traefik ( It’s pronounced Traffic) it is a reverse proxy/ingress controller with automatic integrations to Docker and Kubernetes. I have it configured so that it can leverage both Let’s Encrypt and Cloudflare so that it will automatically obtain signed certificates for me. This is done with Docker labels in such a way that any container I spin up that has the correct Traefik labels will automatically mint a signed certificate and add it to the load balancer. This has the added benefit that I just need to remember a URL IE openwebui.jameskilby.cloud rather than which VM and port the service is running on. It has the added benefit that it makes it very easy for me to expose services externally if needed. I just add the appropriate DNS record on my external DNS.

The labels look something like the below. These are added to the individual Docker containers and Traefik can see them through the Docker API. When the containers are started it will autoconfigure the certificate generation and automatically configure the load balancer. If the container is removed or stopped it will tidy up the configuration.
    
    
      labels:
          - "traefik.enable=true"
          - "traefik.http.routers.open-webui.rule=Host(`openwebui.jameskilby.cloud`)"
          - "traefik.http.routers.open-webui.entrypoints=websecure"
          - "traefik.http.routers.open-webui.tls=true"
          - "traefik.http.routers.open-webui.tls.certresolver=cloudflare"
          - "traefik.http.services.open-webui.loadbalancer.server.port=8080"

📋 Copy

With the above labels added to my OpenWebUI container, Traefik will request a certificate for openwebui.jameskilby.cloud and deploy this as a HTTPS service mapped to the OpenWebUI container on port 8080

I could probably do a whole post just on my setup of Traefik but for now here is an overview diagram.

![](https://jameskilby.co.uk/wp-content/uploads/2025/01/Traefik-Docker-Setup-2-1024x342.png)

As part of the included playbook I have added the option to deploy a simple nginx web server using this principle. If everything is configured correctly you should be able to connect to this container post deployment and it will have a fully trusted certificate as seen below. (you may need to wait 30 seconds or so after deployment for this process to complete)

![](https://jameskilby.co.uk/wp-content/uploads/2026/01/nginx-cert-1024x997.png)

Before running this playbook a lot of variables need to be configured as can be seen below. In most cases the default is OK. I have just extended the vGPU Variable group to do this. When they are all input to Semaphore it will look something like this.

![](https://jameskilby.co.uk/wp-content/uploads/2026/01/Traefik-Variables-804x1024.png)

Rather than typing all of the values out you can copy the JSON below and then just tweak what you need to.
    
    
    {
      "nvidia_vgpu_driver_file": "NVIDIA-Linux-x86_64-535.247.01-grid.run",
      "nvidia_vgpu_licence_file": "client_configuration_token_04-08-2025-16-54-19.tok",
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
      "acme_dns_resolvers": "[\"1.1.1.1:53\", \"8.8.8.8:53\"]",
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
      "traefik_dashboard_user": "admin",
      "wildcard_domain": "jameskilby.cloud"
    }

📋 Copy

##### Traefik Variable Definitions

**Variable**|  **Default**|  **Description**  
---|---|---  
traefik_deploy_test_service| true| set to false to skip NGINX deployment  
traefik_healthcheck_poll_retries| 12| Number of health check poll attempts  
traefik_docker_image| 3.6| Traefik Docker Image and version  
| |   
| |   
| |   
| |   
| |   
| |   
| |   
| |   
| |   
| |   
| |   
| |   
| |   
| |   
| |   
| |   
  
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
traefik_dashboard_domain| trdash.jameskilby.cloud| tr  
  
#### Ansible Secrets

The playbook also needs two values that should be considered sensitive. These can be added to Semaphore as secrets. The two secrets are the Cloudflare API Token and the second is a hash of a password that is used to access the Traefik dashboard. The Traefik dashboard is very useful for troubleshooting any SSL/connectivity issues.

![](https://jameskilby.co.uk/wp-content/uploads/2026/01/SemaphoreSecrets-1024x262.png)

The Cloudflare Token needs to be generated in the Cloudflare dashboard. 

To generate the hash for the admin dashboard password, the easiest way is with Docker. The below is an example that can be run on the command line 
    
    
    docker run --rm httpd:2   htpasswd -nbB '' 'your_password_here'

📋 Copy

It will download and execute the httpd container the last line is the hash that you need.

![](https://jameskilby.co.uk/wp-content/uploads/2026/01/httpd-1024x383.png)

In this case the hash is :$2y$05$nkQGI2UxnRY.7O.6k14naOJPjslbqOT5vpqZPmXMu4knhBOH1EUAqtake the output from this output and add it to the Semaphore secure variable for “dashboard_admin_password_hash”

## Semaphore End to End Setup

Assuming you are going to use SemaphoreUI to execute the playbooks these are the steps you will need to take. If you haven’t already set it up review my guide [here](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)

### Repository

The first step is to point Semaphore at the Git repository. This is the location where the playbooks will be executed from. As my Git repo is public no authentication is required. You also need to specify the branch, in this case I am using main. 

![](https://jameskilby.co.uk/wp-content/uploads/2026/01/Semaphore_repo.png)

### Key Store

The next step is to add the Key Store items. This is used to define the authentication from Semaphore to the target workload or other systems.I do this in two parts. The first is standard authentication which I do with an SSH key. The second part is defining the become password to allow Semaphore to execute SUDO commands. I do this with a password stored in the Key Store. I have called these two methods KeyAuth and PassAuth

![](https://jameskilby.co.uk/wp-content/uploads/2026/01/NewKey-802x1024.png)

Once the Key authentication is added, the next step is to add a different key store item for when the playbook needs to “Become”

![](https://jameskilby.co.uk/wp-content/uploads/2026/01/PassAuth.png)

An Alternative approach is to allow your user to elevate without confirmation.

### Inventory

Once the authentication methods are now defined the next step is to update the Semaphore Inventory. 

I have created a new Inventory item called “vGPU’ set the User credentials to be KeyAuth and the Sudo credentials as PassAuth.

I’ve then added the specific VM in the inventory. For testing I have called this blogtest.

![](https://jameskilby.co.uk/wp-content/uploads/2026/01/blogtest_ansible_inventory-670x1024.png)

### Variable Group

The next step is to create a variable group and the required variables. 

Review the variable table above and set to match your environment. This is what mine looks like

### Task Templates

Then ensure that the task template is set to use it

![](https://jameskilby.co.uk/wp-content/uploads/2026/01/Variable-Group-1024x547.png)

Traefik Dashboard±1a23s45tyui

## Conclusion 

## 📚 Related Posts

  * [Managing my Homelab with SemaphoreUI](https://jameskilby.co.uk/2025/09/managing-my-homelab-with-semaphoreui/)

## Similar Posts

  * [ ![Self Hosting AI Stack using vSphere, Docker and NVIDIA GPU](https://jameskilby.co.uk/wp-content/uploads/2024/10/pexels-tara-winstead-8386440-768x512.jpg) ](https://jameskilby.co.uk/2024/10/self-hosting-ai-stack-using-vsphere-docker-and-nvidia-gpu/)

[Artificial Intelligence](https://jameskilby.co.uk/category/artificial-intelligence/) | [Docker](https://jameskilby.co.uk/category/docker/) | [Homelab](https://jameskilby.co.uk/category/homelab/)

### [Self Hosting AI Stack using vSphere, Docker and NVIDIA GPU](https://jameskilby.co.uk/2024/10/self-hosting-ai-stack-using-vsphere-docker-and-nvidia-gpu/)

By[James](https://jameskilby.co.uk) October 11, 2024October 1, 2025

Artificial intelligence is all the rage at the moment, It’s getting included in every product announcement from pretty much every vendor under the sun. Nvidia’s stock price has gone to the moon. So I thought I better get some knowledge and understand some of this. As it’s a huge field and I wasn’t exactly sure…

  * [ ![My First Pull](https://jameskilby.co.uk/wp-content/uploads/2020/12/175jvBleoQfAZJc3sgTSPQA.jpg) ](https://jameskilby.co.uk/2020/12/my-first-pull/)

[Devops](https://jameskilby.co.uk/category/devops/) | [Personal](https://jameskilby.co.uk/category/personal/)

### [My First Pull](https://jameskilby.co.uk/2020/12/my-first-pull/)

By[James](https://jameskilby.co.uk) December 22, 2020December 8, 2025

I was initially going to add in the contents of this post to one that I have been writing about my exploits with HashiCorp Packer but I decided it probably warranted being separated out. While working with the following awesome project I noticed a couple of minor errors and Improvements that I wanted to suggest….

  * [ ![CRS-504](https://jameskilby.co.uk/wp-content/uploads/2024/09/s-l1600-768x427.jpg) ](https://jameskilby.co.uk/2024/09/home-network-upgrade/)

[Mikrotik](https://jameskilby.co.uk/category/mikrotik/) | [Networking](https://jameskilby.co.uk/category/networking/)

### [Home Network Upgrade](https://jameskilby.co.uk/2024/09/home-network-upgrade/)

By[James](https://jameskilby.co.uk) September 9, 2024October 24, 2025

My journey to superfast networking in my homelab

  * [ ![How to Fix Portainer Agent not Starting On Synology DSM](https://jameskilby.co.uk/wp-content/uploads/2025/03/Docker-Symbol-1-2199360526-768x528.png) ](https://jameskilby.co.uk/2025/03/portainer-agent-on-synology-dsm/)

[Docker](https://jameskilby.co.uk/category/docker/) | [Portainer](https://jameskilby.co.uk/category/portainer/) | [Synology](https://jameskilby.co.uk/category/synology/)

### [How to Fix Portainer Agent not Starting On Synology DSM](https://jameskilby.co.uk/2025/03/portainer-agent-on-synology-dsm/)

By[James](https://jameskilby.co.uk) March 11, 2025December 27, 2025

How to fix Portainer Agent no starting on Synology

  * [ ![Time in a VMC Environment](https://jameskilby.co.uk/wp-content/uploads/2025/02/Picture-1-e1768509620339-768x193.png) ](https://jameskilby.co.uk/2025/12/time-in-a-vmc-environment/)

[VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [Time in a VMC Environment](https://jameskilby.co.uk/2025/12/time-in-a-vmc-environment/)

By[James](https://jameskilby.co.uk) December 8, 2025February 1, 2026

How to use the Amazon Time Sync Service in a VMC environment

  * [ ![Advanced Deploy VMware vSphere 7.x 3V0-22.21N](https://jameskilby.co.uk/wp-content/uploads/2023/11/image.png) ](https://jameskilby.co.uk/2023/11/advanced-deploy-vmware-vsphere-7-x-3v0-22-21n/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [Personal](https://jameskilby.co.uk/category/personal/) | [vSphere](https://jameskilby.co.uk/category/vsphere/)

### [Advanced Deploy VMware vSphere 7.x 3V0-22.21N](https://jameskilby.co.uk/2023/11/advanced-deploy-vmware-vsphere-7-x-3v0-22-21n/)

By[James](https://jameskilby.co.uk) November 10, 2023November 17, 2023

Yesterday I sat and passed the above exam. It had been on my todo list for a good number of years. With the current pause in the Broadcom VMware takeover deal. I had some downtime and decided to use one of the three exam vouchers VMware give me each year. This upgrades me to a…