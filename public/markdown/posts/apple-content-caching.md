---
title: "Apple Content Caching"
description: "Utilising MacOS Cache Caching to Save Internet Bandwidth"
date: 2021-02-08T14:12:23+00:00
modified: 2023-11-10T14:50:29+00:00
author: James Kilby
categories:
  - Apple
tags:
  - #Apple
  - #Cache
url: https://jameskilby.co.uk/2021/02/apple-content-caching/
image: https://jameskilby.co.uk/wp-content/uploads/2021/02/iu.png
---

![](https://jameskilby.co.uk/wp-content/uploads/2021/02/iu.png)

[Apple](https://jameskilby.co.uk/category/apple/)

# Apple Content Caching

By[James](https://jameskilby.co.uk) February 8, 2021November 10, 2023 • 📖2 min read(313 words)

📅 **Published:** February 08, 2021• **Updated:** November 10, 2023

I have slowly morphed into an Apple fanboy over the last decade or so collecting a large number of devices ever since my first MacBook Air back in 2011. When you’re in the ecosystem additional devices just make sense….. I currently have: 

  * Mac Mini M1
  * Macbook Air 2018
  * iPhone XS
  * Ipad Pro 9.7
  * Apple Watch 4
  * iPhone 7 ( Work Phone)

My Wife also has 

  * MacBook Air
  * Ipad
  * iPhone Xs

All in all a lot of apple devices need Software & Application updates etc. Christian Mohn mentioned a while back that MacOS can do content caching and it’s very easy to implement. If only WSUS was as straightforward….

I turned it on on my Mac M1 last year and I’ve been pleasantly surprised with the results.

![Cache Served Graph](https://jameskilby.co.uk/wp-content/uploads/2023/04/Screenshot-2021-02-05-at-23.55.08.png)Cache Results after 30 days

Over the last 30 days, all of the devices have pulled down nearly 100GB of data. The cache mechanism on my Mac Mini was able to serve 41GB of this locally leading to faster updates and less traffic on my WAN link. Although I have a fast link this may be useful for homes where multiple people are working from home or the connection is less than stellar. More info on it can be found [here](https://support.apple.com/en-gb/guide/mac-help/mchl9388ba1b/mac)

To enable it is very straightforward

Go to the Apple menu ![](https://help.apple.com/assets/5FCA9DF4094622AC2BC6F94E/5FCA9E00094622AC2BC6F96C/en_GB/2f77cc85238452e25cb517130188bf99.png) > System Preferences, click Sharing then select Content Caching.

![](https://jameskilby.co.uk/wp-content/uploads/2023/04/Screenshot-2021-02-08-at-12.56.43.png) ![](https://jameskilby.co.uk/wp-content/uploads/2023/04/Screenshot-2021-02-08-at-12.57.20-2-1020x1024.png)

Click the popup menu and choose the content to be shared. I have mine set to All Content. This includes

  * macOS updates and Internet Recovery images
  * Apps and app updates from the Mac App Store
  * iCloud data caching (photos and documents)
  * Apple TV updates & Screensavers
  * iOS apps, Apple TV apps and app updates
  * watchOS apps and app updates

![](https://jameskilby.co.uk/wp-content/uploads/2023/04/Screenshot-2021-02-08-at-12.57.46-1024x827.png)

In the options, you can control the amount of disk space to use it defaults to 10%. Clients will need to be restarted to find the server.

![](https://jameskilby.co.uk/wp-content/uploads/2023/04/Screenshot-2021-02-08-at-12.57.37-1.png)

## Similar Posts

  * [ ![New Laptop](https://jameskilby.co.uk/wp-content/uploads/2018/12/colorware-768x384.jpg) ](https://jameskilby.co.uk/2018/12/new-laptop/)

[Apple](https://jameskilby.co.uk/category/apple/)

### [New Laptop](https://jameskilby.co.uk/2018/12/new-laptop/)

By[James](https://jameskilby.co.uk) December 4, 2018October 1, 2025

I decided it was about time I replaced my trusted MacBook Air that I purchased back in 2011. After waiting and watching the Apple announcements over the last couple of years I decided the MacBook Pro’s weren’t worth it. So I have replaced my Air with yes you guessed it another MacBook Air….