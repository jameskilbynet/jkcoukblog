---
title: "Ubuntu Disk Expansion Steps"
description: "Step-by-step guide to expanding disk space in Ubuntu using growpart, pvresize, and lvextend for LVM volumes — commands I always forget and keep here for reference."
date: 2025-12-15T20:56:40+00:00
modified: 2026-04-09T20:37:54+00:00
author: James Kilby
categories:
  - Ubuntu
tags:
  - #Disk Expand
  - #Ubuntu
url: https://jameskilby.co.uk/2025/12/ubuntu-disk-expansion-steps/
image: https://jameskilby.co.uk/wp-content/uploads/2025/12/UbuntuExpand.png
---

![](https://jameskilby.co.uk/wp-content/uploads/2025/12/UbuntuExpand.png)

[Ubuntu](https://jameskilby.co.uk/category/ubuntu/)

# Ubuntu Disk Expansion Steps

By[James](https://jameskilby.co.uk) December 15, 2025April 9, 2026 • 📖1 min read(91 words)

📅 **Published:** December 15, 2025• **Updated:** April 09, 2026

How to expand disks from the command line in Ubuntu.

This is something I do fairly frequently, and I can never remember the steps. So I decided to write them down.

## Table of Contents

## 1\. Rescan for disk size changes

sudo tee /sys/class/block/sda/device/rescan

## 2\. Extend the physical partition (if needed)

sudo growpart /dev/sda 3

## 3\. Resize the physical volume

sudo pvresize /dev/sda3

## 4\. Extend the logical volume to use all available space

sudo lvextend -l +100%FREE /dev/ubuntu-vg/ubuntu-lv

## 5\. Resize the filesystem

sudo resize2fs /dev/ubuntu-vg/ubuntu-lv

## 6\. Verify the new size

df -h