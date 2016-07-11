---
layout: default
title: Outline
permalink: /presentation/outline
---

# Beyond 508: Building Accessible Interactions with ARIA

## Quick Intro

  * Who I am
  * Who CH is
  * Who our clients are
  * Experience with 508, accessibility, ASPA

## Ask the audience:

What are some disabilities that could make browsing a web page difficult?

Looking for:

  * Visual
    * blind
      * don't use a mouse - keyboard friendly
      * can't see images - alt text
      * listen with a screenreader - skip over nav and other repetitive content
      * jump between links using the tab key - make sure links have useful text and make sense out of context (avoid "click here" or "read more")
      * expect links to take them somewhere - avoid scripts in links that don't have true destinations (e.g.href="javascript;"). Move users focus where it's expected if links stay on the page
    * color blind
      * Ensure color contrast minimums as designated by 508 (4.5:1)
      * Do not use color as the only means to convey meaning (make text a heading or use strong, clearly label icons)
    * low vision
      * avoid text in graphics (make everything real html text)
      * use screen magnifiers, smaller field of vision. Good reason to vertically align form elements and put each element on one line
  * Motor
    * May not be able to use a mouse - keyboard friendly
    * May not be able to control the mouse or keyboard well - error-tolerant ("Are you sure that you want to delete that file"), avoid small links or moving links
    * Thousands or assistive technologies available, one key point to keep in mind: Most assistive technologies for people with motor disabilities either work through the keyboard or emulate the functionality of the keyboard.
  * Hearing
    * closed captions for videos
    * include any important sounds in the captions
  * Cognitive
  * Seizure

## Keys for accessibility

  * Meet 508 standards: http://hhs.gov/web/508 - this is a starting point, not the final goal
  * Meet Color Contrast minimums and avoid using color as the only means to convey meaning
  * Ensure that your webpage is completely keyboard accessible
  * Use appropriate descriptive text for images, links and other focusable elements

## How?

  * Clean, semantic markup
  * ARIA attributes

## EXAMPLES!!!

https://communicatehealth.github.io/examples/



# Possible Drupal stuff to add:

## Drupal 7 accessibility out of the box

Poor ARIA support

## Drupal 7 accessibility modules

Block ARIA labels - https://www.drupal.org/project/block_aria_label
Block ARIA landmark roles - https://www.drupal.org/project/block_aria_landmark_roles

## Drupal 8 accessibility improvements

Much better

# Summary