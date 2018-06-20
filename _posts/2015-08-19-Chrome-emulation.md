---
layout: post
title:  "Chrome Dev Tools Device Emulation"
date:   2015-08-19 12:00:00
categories: testing
redirect_from:
  - /2015/08/Chrome-emulation/
---

Turning on Device Emulation
---------------------------
Open Chrome Developer Tools by pressing `Option+Cmd+I` (On Windows, `Shift+Ctrl+I`)

Enable Device Emulation by pressing `Shift+Cmd+M` (On Windows, `Shift+Ctrl+M`)

Open the Device Emulation settings by pressing `esc`

Device Tab
----------
Select Device Model to emulate a spcific device (iPhone, iPad, Android phone, etc...)

Network Tab
-----------
Throttle network under the Network tab then reload your page to see how much slower it loads

Sensors Tab
-----------
Enable device sensor emulation

  * touch screen
  * geolocation
  * accelerometer

Some examples
-------------

Mobile version auto-detect: [http://www.cvs.com/](http://www.cvs.com/)

Some of the sites we maintain:

Good example: [http://healthfinder.gov/](http://healthfinder.gov/)

Good example: [http://health.gov/](http://health.gov/)

Bad example: [http://www.healthypeople.gov/](http://www.healthypeople.gov/)
