---
layout: post
title:  "Ask a Dev: Bulletins"
date:   2017-03-08 12:00:00
categories: howto
---

A brief explanation for all those questions we ask you once you hand a bulletin off to dev.

## Types of Email 

### ODPHP
We send out 2 types of ODPHP emails using GovDelivery:

#### ~~eblasts~~ Bulletins
These emails are hand crafted as needed and sent to specific mailing lists.
  * HealthyPeople
    * [NYCU](https://comhealth-odphp.github.io/emarketing/healthypeople.gov/templates/newsyoucanuse-template.html) (News You Can Use)
    * [LHI Monthly Bulletin](https://comhealth-odphp.github.io/emarketing/healthypeople.gov/LHI/2016/ODPHP_lhi_11_17_16_November.html)
  * healthfinder
    * ~~[Spotlight](https://comhealth-odphp.github.io/emarketing/healthfinder.gov/templates/spotlight.html)~~ - deprecated
  * [health.gov](https://comhealth-odphp.github.io/emarketing/Health.gov/template/Healthgov-template.html)
    * ~~[DGA](https://comhealth-odphp.github.io/emarketing/Health.gov/template/DGA-template.html)~~ - deprecated
    * ~~[PAG](https://comhealth-odphp.github.io/emarketing/Health.gov/template/PAG-template.html)~~ - deprecated

#### Pagewatch
These emails are automatically generated from content updates to their corresponding site. They can be sent automatically, or set to send after review. Users can sign up through ODPHP's [QuickSubscribe](https://public.govdelivery.com/accounts/USOPHSODPHPHF/subscriber/new?topic_id=USOPHSODPHPHF_1) links found throughout the 3 OHPHP sites. Anyone who is subscribed will get these emails.
  * HealthyPeople
    * [PH3.0](https://comhealth-odphp.github.io/emarketing/healthypeople.gov/templates/ph30/ph3_template.html) (from blog posts on the health.gov blog)
  * healthfinder
    * [Today's Headlines](https://comhealth-odphp.github.io/emarketing/healthfinder.gov/templates/todays_headlines-example.html)
    * [Noticias en Español](https://comhealth-odphp.github.io/emarketing/healthfinder.gov/templates/noticias_en_espanol-example.html)
  * health.gov blog
    * [PPM](https://comhealth-odphp.github.io/emarketing/Health.gov/template/Healthgov-pagewatch.html)
      * new [PPM Weekly Updates](https://comhealth-odphp.github.io/emarketing/Health.gov/template/Healthgov-pagewatch-demo-content.html)
    * [DGA](https://comhealth-odphp.github.io/emarketing/Health.gov/template/DGA-pagewatch.html)
    * [PAG](https://comhealth-odphp.github.io/emarketing/Health.gov/template/PAG-pagewatch.html)
    * [HCQ](https://comhealth-odphp.github.io/emarketing/Health.gov/template/HCQ-pagewatch.html)
    * [HLC](https://comhealth-odphp.github.io/emarketing/Health.gov/template/HLC-pagewatch.html)

### NVPO
Jason recently developed a new pagewatch template for the vaccines.gov contract. More on new templates below.
  * [NVPO template](https://communicatehealth.github.io/NVPO-emarketing/NVPO/NVPO-template.html)

### Other
We also use MailChimp for [W<3HL](https://communicatehealth.com/category/we-heart-health-literacy/) - see Rebecca or Blythe if you want to know more.

## Life cycle of an existing bulletin (from a dev's perspective)
<img src="{{ "/img/emarketing.png" | prepend: site.baseurl }}" alt="Bulletin code lifecycle: content > code > review > GovDev > send">

## New email templates
New email templates aren't created very often, but if you need one, the following guidelines will help smooth the process:
  * Start with Design to get a mockup and assets ([example](https://communicatehealth.app.box.com/files/0/f/13442234877/1/f_116110164663))
    * If possible, provide actual content &mdash; it's harder to predict issues in lorem ipsum
  * If this is a new template for an existing topic: turn off pagewatch autosend. We don't want to spam our users while we test changes!
  * Email clients really *really* don't always show the same thing. If the client says layout looks off, be prepared to troubleshoot &mdash; ask for screenshots and get their email client and OS

## Tips to make your email coder happy:
  * Include all known URLs 
    * Existing pages: even if you are waiting for drafts to be published before sending the bulletin, the URL won't change
    * New pages: if you know what the URL will be, we can include it
  * Include the bill code in the task description or as a TW tag
  * Keep it all in one TW task: we like to know where a bulletin is in the coding process
