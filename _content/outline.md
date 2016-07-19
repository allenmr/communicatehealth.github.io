# Beyond 508: Building Accessible Interactions with ARIA

## Quick Intro

  * Me: Director of Technology at CommunicateHealth
  * CH: Mission-based company focused on simplifying Health Literacy and Improving the User Experience
  * Working with clients ranging from small businesses to large federal government websites like Health.gov
  * Experience with 508, accessibility, ASPA
    * Working on 508 since 2007
    * Worked closely with ASPA on launching complex features for:
    	* The 2015 edition of the Dietary Guidelines for Americans
    	* Health Literacy Online
    	* Patient Engagement Playbook for the Office of the National Coordinator for Health IT

## Ask the audience:

What types of challenges do users with disabilities or impairments experience online?

[https://the-pastry-box-project.net/anne-gibson/2014-July-31](https://the-pastry-box-project.net/anne-gibson/2014-July-31)

A - blind, has been since birth. He’s always used a screen reader, and always used a computer. He’s a programmer, and he’s better prepared to use the web than most of the others on this list.

D - Color blind


## Visual

### blind

Challenge: don't use a mouse

Accessible solution: keyboard friendly

**TP:** clean semantic markup, ensure that the mouse isn't required to browse the site

---

Challenge: can't see images

Accessible solution: alt text

**TP:** Not just vision impairments

could be on a slow connection and images don't load

Might just have their browser set to block images (for data reasons or other)

---

Challenge: listen with a screenreader

Accessible solution: provide links to skip over nav and other repetitive content

**TP:** 

---

Challenge: jump between links using the tab key

Accessible solution: make sure links have useful text and make sense out of context (avoid "click here" or "read more")

**TP:** 

---

Challenge: expect links to take them somewhere

Accessible solution: avoid scripts in links that don't have true destinations (e.g.href="javascript;"). Move users focus where it's expected if links stay on the page

**TP:** 

---

### color blind

Challenge: Difficulty differentiating between similar colors or might see in grayscale

Accessible solution 1: Ensure color contrast minimums as designated by 508 (4.5:1)

Accessible solution 2: Do not use color as the only means to convey meaning (make text a heading or use strong, clearly label icons)

**TP:** Don't say things like "See the green text below" or "red items are required."

Instead mark up the important content with strong or heading tags and use aria-labels where appropriate to expand text that requires more context for screen readers

---

### low vision

Challenge: Often need to increase font size above "normal" levels

Accessible solution: avoid text in graphics (make everything real html text)

---

Challenge:  Often use screen magnifiers, smaller field of vision

Accessible solution: Consider proximity of related elements. Good reason to vertically align form elements and put each element on one line

## Motor

Challenge: May not be able to use a mouse

Accessible solution: keyboard friendly

---

Challenge: May not be able to control the mouse or keyboard well

Accessible solution 1: Avoid small links or moving links

Accessible solution 2: error-tolerant ("Are you sure that you want to delete that file")

---

Thousands of assistive technologies available, one key point to keep in mind: Most assistive technologies for people with motor disabilities either work through the keyboard or emulate the functionality of the keyboard.

## hearing

Challenge: Difficulty hearing audio

Accessible solution 1: closed captions for videos

Accessible solution 2: include any important sounds in the captions

## cognitive

Write in plain language

**Update this to be simple using CH low literacy best practices**

## aging

**REMOVE**

## Keys for accessibility

  * Meet 508 standards: [http://hhs.gov/web/508](http://hhs.gov/web/508) - this is a starting point, not the final goal
  * Meet Color Contrast minimums and avoid using color as the only means to convey meaning
  * Ensure that your webpage is completely keyboard accessible
  * Use appropriate descriptive text for images, links and other focusable elements

## How?

  * Clean, semantic markup
  * ARIA attributes

## Drupal

### Drupal 7 accessibility out of the box

Poor ARIA support

### Drupal 7 accessibility modules

Block ARIA labels - [https://www.drupal.org/project/block_aria_label](https://www.drupal.org/project/block_aria_label)

Block ARIA landmark roles - [https://www.drupal.org/project/block_aria_landmark_roles](https://www.drupal.org/project/block_aria_landmark_roles)

### Extending Drupal

## EXAMPLES!!!

[https://communicatehealth.github.io/examples/](https://communicatehealth.github.io/examples/)

### Accordion

### Dropdown menu

### Off-canvas navigation

### Slideshow

### Tab Panel

### Infographic

# Summary

Mention keys for accessibility again
Other stuff?

## Follow WHHL

## Ending Slide