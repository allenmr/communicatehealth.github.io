---
layout: post
title:  "QC: Supported Operating Systems and Browsers"
date:   2017-03-08 12:00:00
categories: qc
---

Use this post as a reference when setting up your [QC checklist](https://docs.google.com/spreadsheets/d/1QWDkz8TkE-cKyG8QQAr9SmoTaCO358fAQRlJfgaG4_o/edit#gid=0). This post was last updated on **03/08/2017**.<!--Update whenever browser list is updates --> If that was a while ago, check the [latest versions on browserlist](http://browserl.ist/?q=%3E+2%25+in+US%2C+last+2+versions).

QC the website in BrowserStack on the following operating systems and browsers (unless otherwise indicated by Dev).

## Browsers
If we have analytics for a site, we may add or drop browsers depending on usage (default cut-off is 5%).
  * IE9 as needed (check with Dev first before QCing)
    * ODPHP:
      * h.gov
      * HF
      * ~~HP~~
  * IE10+
  * Latest official/stable release for:
    * Chrome
    * Safari
    * Firefox
    * Edge

## Operating Systems
  * Windows - [Mainstream support](https://support.microsoft.com/en-us/help/13853/windows-lifecycle-fact-sheet):
    * 10
    * 8
  * OSX
    * [Apple supports editions "n", "n-1" and "n-2](https://en.wikipedia.org/wiki/MacOS#Release_history)
    * Sierra
    * El Capitan
    * Yosemite
  * Mobile, latest versions (phone) (tablet as needed)
    * Note: some devices have more than one browser option. Check all browsers.
    * iOS
    * Android