---
layout: post
title:  "Self-hosting Google Web Fonts"
date:   2017-05-04 12:00:00
categories: howto
redirect_from:
  - /2017/05/google-web-fonts/
---

With our [new preference to self-host](https://communicatehealth.github.io/web-fonts/) Google Web Fonts with each project, we have another front-end step for the Dev Team to work through. The following process is the quickest we've found to download and reference [Google Web Fonts](https://fonts.google.com/) in each project.

### Download CSS and Font Files

1. Visit [localfont.com](http://localfont.com)
2. Choose a single font from the first dropdown
3. Choose the weight(s) needed for that font
4. Click the "Download font files and CSS" button
5. Repeat this process for any additional fonts

![Localfont.com]({{ "/img/localfont.jpg" | prepend: site.baseurl }})

### After download

1. Unzip each font package.
2. Copy font files into project directory (usually near CSS, in a "fonts" folder)
3. Copy the contents of the CSS file into the project (S)CSS file
4. Update the paths to the font files in the CSS to match the project directory structure

That should do it!

Even when projects aren't restricted from referencing Google servers for font files, self-hosting eliminates the extra connection and HTTPS negotiation required to load remote files. Without the extra connection, page load times can improve by up to 1 second on a high-speed connection!
