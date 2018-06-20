---
layout: post
title:  "Images for Responsive Web Design"
date: 2018-03-19 12:00:00
categories: howto
redirect_from:
  - /2018/03/images-for-responsive/
---

Traditionally, images for web were sized at 72dpi, or 72 dots per inch. This was the number of pixels per inch in a standard monitor. With the advent of mobile devices, tablets, and computers with retina screens, this has changed. Now, we treat images for web more like they are treated for print. Start larger, and resize.

## Resolution of Common Devices

Here are screen resolution sizes of some of the most common devices:<br>
Via [http://screensiz.es/](screensiz.es)

<table>
  <thead>
    <tr>
      <th>Device</th>
      <th>Width</th>
      <th>Height</th>
      <th>PX Per Inch</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Apple iPhone 7</td>
      <td>750px</td>
      <td>1334px</td>
      <td>326</td>
    </tr>
    <tr>
      <td>Apple iPhone 7+</td>
      <td>1080px</td>
      <td>1920px</td>
      <td>401</td>
    </tr>
    <tr>
      <td>Apple iPhone 6</td>
      <td>750px</td>
      <td>1334px</td>
      <td>326</td>
    </tr>
    <tr>
      <td>Apple iPhone 6+</td>
      <td>1080px</td>
      <td>1920px</td>
      <td>401</td>
    </tr>
    <tr>
      <td>Apple iPhone 5</td>
      <td>640px</td>
      <td>1136px</td>
      <td>326</td>
    </tr>
    <tr>
      <td>Apple iPad Air</td>
      <td>2048px</td>
      <td>1536px</td>
      <td>264</td>
    </tr>
    <tr>
      <td>Apple iPad 3 &amp; 4</td>
      <td>1536px</td>
      <td>2048px</td>
      <td>264</td>
    </tr>
    <tr>
      <td>Apple MacBook Pro 15-Inch</td>
      <td>2880px</td>
      <td>1800px</td>
      <td>220</td>
    </tr>
  </tbody>
</table>

## Vector-Based Graphics

Vector-based graphics are those images that look more like illustrations. Icons, pictograms, flat drawings. Chances are, this type of image was created as a vector graphic and can easily be converted to SVGs (Scalable Vector Graphics). This is great, because SVGs are now being supported by more browsers and can easily scale from small to large without distortion or compromising load time. These images are created using mathematical lines instead of pixels, which prevents them from becoming pixelated when scaled.

<img src="/files/svg-optimized.svg" alt="Optimized SVG Graphic" style="width:100%; max-width:200px; float: left; margin-right: 2em;">

<svg xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 200px;" viewBox="0 0 200 200"><path fill="#7ac142" d="M65.7 16.7v38.1H27.6v30.5h38.1v38.2h30.5V85.3h38.1V54.8H96.2V16.7z"/><path fill="#7ac142" d="M110.3 16.7V32h46.9v76.2h-22.9v-8.8h-15.2v8.8h-8.8v15.3h8.8v22.8H42.8V99.4H27.6v62.2h15.2v21.7l21.8-21.7h69.7v-38.1h7.5l21.9 21.7v-21.7h8.7V16.7z"/></svg>

<strong>If your image is a digital illustration, always send the developers an SVG whenever possible!</strong>

See <a href="https://communicatehealth.github.io/svg-output/" target="_blank">this article</a> about how to create SVGs for websites.

## Raster-Based Graphics (photos)

Raster-based graphics (typically seen as photographs) are pixel-based. They do not scale as smoothly as vector-based graphics, so <strong>giving your developer a proper size is extra important!</strong> If you need to include a photograph or other raster-based image (perhaps a scanned image of a painting or drawing), there are certain guidelines you should follow in order for them to look great on all screen sizes and resolutions.

<div class="hero-image">
  <img src="/img/vicki-sunrise-raster.jpg" alt="Photo of a pretty sunrise at Vicki's house">
</div>

<ul>
  <li>Your image should be <strong>provided at twice the size of its largest display</strong>:</li>
  <ul>
    <li>If the widest possible width is 1200px, it should be provided at 2400px.</li>
    <li>Why do we need images so large? Because we use CSS and HTML to scale them down appropriately for each screen size and ensure that they won't look blurry on higher-resolution screens.</li>
  </ul>
  <li>Always <strong>ask the developer what proportions they need</strong> the image in. Don't assume that the height of the image will always be the same on each screen size.</li>
  <li>If you're able to, <strong>optimize your image so it's a smaller file size</strong> to help with load time.</li>
</ul>

## But, how do I optimize my raster images for web?

### Online Image Compressors

For a quick and simple way, use an online image compressor:

<ul>
  <li><a href="https://tinypng.com/" target="_blank">TinyPNG.com</a></li>
  <li><a href="https://compressor.io/" target="_blank">Compressor.io</a></li>
  <li><a href="https://kraken.io/web-interface" target="_blank">Kraken.io</a></li>
  <li><a href="http://www.imageoptimizer.net/Pages/Home.aspx" target="_blank">ImageOptimizer.net</a></li>
  <li><a href="https://imageoptim.com" target="_blank">ImageOptim.com</a></li>
</ul>

If you're fluent in Photoshop, you can also <strong>"Save for Web"</strong> or <strong>"Export As..."</strong>

### Save For Web in Photoshop

<img src="/img/saveforweb-menu-screen.png" alt="Save for Web in Photoshop Menu" style="max-width: 400px;">
<img src="/img/saveforweb-screen.png" alt="Save for Web in Photoshop Settings" style="max-width: 700px;">

### Export As in Photoshop

<img src="/img/export-as-menu-screen.png" alt="Export As in Photoshop Menu" style="max-width: 400px;">
<img src="/img/export-as-screen.png" alt="Export As in Photoshop Settings" style="max-width: 700px;">

The easiest way to reduce the file size is to also reduce the image quality slightly. Reducing it down to 60-80% will not make a noticeable visual difference to the user, but it can cut the file size way down.

## What about images for social media?

We've got you covered there too! Check out this handy <a href="https://communicatehealth.github.io/social-media-images/" target="_blank">Social Media Image Sizer</a> on our blog to help you figure out what size to make images for Facebook, Twitter, YouTube, LinkedIn, and Pinterest.
