---
layout: post
title:  "Email Templates"
date:   2017-03-21 12:00:00
categories: howto
---

## ~~Responsive~~ Fluid Email Template Considerations

### Rely on system fonts (no web fonts)

Generating a custom font stack could look like:
```
font-family: Ideal, Alternative, Common, Generic;
```

Arial, Helvetica, sans-serif stack:
```
font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
```

Cambria, Georgia, serif stack:
```
font-family: Cambria, Georgia, Times, "Times New Roman", serif;
```

A system default stack that includes Apple's San Francisco font:
```
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
```

### Assume content won't reflow, only squish

Although some email clients support media queries, the email clients that most of our audience uses do not. This forces us to layout email templates that have percentage-based widths.

The fluid nature of percentage-based widths allows our templates to adapt to a variety of screen sizes. However, unlike media queries, this percentage-based approach doesn't easily allow content to reflow when the layout gets squished.

![Email squish]({{ "/img/email-squish.gif" | prepend: site.baseurl }})

Using a single column layout is one way to achieve a simple and reliable layout for most screen widths.

Adding sidebars or using a two column layout is possible, but requires more consideration (and code) to ensure that sections of content don't become unreadably small on narrower screens.

### Design with images that can handle variation

Graphics and images that are part of the layout can find themselves in tight quarters, depending on screen size. When possible, creating assets that can handle scaling and clipping. A great example of this is the header graphic used on health.gov templates:

![Header graphic handling different orientations]({{ "/img/image-example.png" | prepend: site.baseurl }})

### Start with a narrow mockup

Starting a new template design on a 320px wide canvas, before moving to a wider version, can make the stress points of the layout clear from the beginning. This makes the development process smoother, too. We can add spacing and size as the screen gets wider, instead of wrestling a larger layout into smaller containers.

![Narrow email view]({{ "/img/email-narrow.jpg" | prepend: site.baseurl }})
