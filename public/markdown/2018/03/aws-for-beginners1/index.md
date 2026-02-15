---
title: "AWS for Beginners"
description: "Start your AWS journey with our beginner's guide. Learn account setup, security tips, and billing alerts for a smooth experience. Join now!"
date: 2018-03-30T23:13:21+00:00
modified: 2024-07-10T09:04:44+00:00
author: James Kilby
categories:
  - AWS
  - VMware
  - VMware Cloud on AWS
  - Hosting
  - Personal
  - Veeam
tags:
  - #Account Setup
  - #AWS
url: https://jameskilby.co.uk/2018/03/aws-for-beginners1/
image: https://jameskilby.co.uk/wp-content/uploads/2018/03/raf750x1000075t101010_01c5ca27c6.u2.jpg
---

![](https://jameskilby.co.uk/wp-content/uploads/2018/03/raf750x1000075t101010_01c5ca27c6.u2.jpg)

[AWS](https://jameskilby.co.uk/category/aws/)

# AWS for Beginners

By[James](https://jameskilby.co.uk) March 30, 2018July 10, 2024 • 📖1 min read(202 words)

📅 **Published:** March 30, 2018• **Updated:** July 10, 2024

![](https://jameskilby.co.uk/wp-content/uploads/2023/04/AWS_Services.gif)

## AWS for Beginners Part 1

I am hoping to get back into doing some AWS stuff over the next couple of months. I am a huge fan of some of the tools and technology they have built. It’s not perfect and it is often not well understood by people lifting and shifting existing infrastructure into “the cloud”

My view is firmly if this is what you have done, then you have done it wrong and missed the point….

But if you do want to kick the tyres and see what it’s all about go and set up an [account and play ](https://portal.aws.amazon.com/billing/signup?nc2=h_ct&redirect_url=https%3A%2F%2Faws.amazon.com%2Fregistration-confirmation#/start)

#### Ensure you implement these three recommendations

  * Root Account Security – Ensure you have a strong password on this account then stop using it. Use IAM to set up another account and then use that.
  * Enable Two Factor Authentication – This is a must, Sadly AWS don’t appear to support my preferred 2FA device. [Yubikey](https://www.yubico.com/) so I’m using the Google authenticator
  * Enable [Billing Alerts](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html#turning_on_billing_metrics) Create an alert so that if your bill is over X you will get a notification. It’s very easy to leave an Instance or several running somewhere. No one wants billshock.

Update: AWS now does support Yubikey. Wahoo.

## 📚 Related Posts

  * [Monitoring VMC &#8211; Part 1](https://jameskilby.co.uk/2019/12/monitoring-vmc-part-1/)
  * [AWS Solution Architect &#8211; Associate](https://jameskilby.co.uk/2019/12/aws-solution-architect-associate/)
  * [AWS Status Page &#8211; Monitoring Included](https://jameskilby.co.uk/2018/05/aws-status-page-monitoring-included/)

## Similar Posts

  * [ ![VMC Host Errors](https://jameskilby.co.uk/wp-content/uploads/2022/11/iu-1-768x395.png) ](https://jameskilby.co.uk/2020/09/vmc-host-errors/)

[VMware](https://jameskilby.co.uk/category/vmware/) | [VMware Cloud on AWS](https://jameskilby.co.uk/category/vmware/vmware-cloud-on-aws/)

### [VMC Host Errors](https://jameskilby.co.uk/2020/09/vmc-host-errors/)

By[James](https://jameskilby.co.uk) September 15, 2020February 9, 2026

Lean how host failures are handled within VMC

  * [ ![AWS Status Page – Monitoring Included](https://jameskilby.co.uk/wp-content/uploads/2018/05/AmazonWebservices_Logo.svg_-768x307.png) ](https://jameskilby.co.uk/2018/05/aws-status-page-monitoring-included/)

[AWS](https://jameskilby.co.uk/category/aws/) | [Hosting](https://jameskilby.co.uk/category/hosting/)

### [AWS Status Page – Monitoring Included](https://jameskilby.co.uk/2018/05/aws-status-page-monitoring-included/)

By[James](https://jameskilby.co.uk) May 15, 2018October 1, 2025

AWS Status Page – Enhancements The tool I deployed lambstatus supports pulling metrics from AWS Cloudwatch and displaying them. As part of my personal development, I thought I would include this on my status page. I managed to get this working as can be seen here. This is a lambda function running once a minute…

  * [ ![AWS Solution Architect – Associate](https://jameskilby.co.uk/wp-content/uploads/2018/05/AmazonWebservices_Logo.svg_-768x307.png) ](https://jameskilby.co.uk/2019/12/aws-solution-architect-associate/)

[AWS](https://jameskilby.co.uk/category/aws/) | [Personal](https://jameskilby.co.uk/category/personal/)

### [AWS Solution Architect – Associate](https://jameskilby.co.uk/2019/12/aws-solution-architect-associate/)

By[James](https://jameskilby.co.uk) December 16, 2019December 4, 2025

Today was a good day. I renewed my AWS Solution Architect certification. Although my work is primarily in and around the VMware ecosystem I have been working a lot with VMware Cloud on AWS recently with a number of our customers. Having a good foundation of the core AWS services has…

  * [VMware](https://jameskilby.co.uk/category/vmware/) | [AWS](https://jameskilby.co.uk/category/aws/) | [Veeam](https://jameskilby.co.uk/category/veeam/)

### [Monitoring VMC – Part 1](https://jameskilby.co.uk/2019/12/monitoring-vmc-part-1/)

By[James](https://jameskilby.co.uk) December 17, 2019October 1, 2025

As previously mentioned I have been working a lot with VMware Cloud on AWS and one of the questions that often crops up is around an approach to monitoring. This is an interesting topic as VMC is technically “as a service” therefore the monitoring approach is a bit different. Technically AWS and VMware’s SRE teams…