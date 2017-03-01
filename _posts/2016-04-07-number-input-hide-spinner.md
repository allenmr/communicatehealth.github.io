---
layout: post
title:  "Hide Spinners when using the HTML5 Number Input"
date:   2016-04-07 12:00:00
categories: code
---

What are we trying to solve?
----------------------------

Webkit and Gecko-based browsers add little up down arrows to number inputs called spinners.

<input type="number">

How Do I remove them?
---------------------

Adding this snippet of CSS will hide the number spinners and still leave all of the benefits of the number tupe in place (different keypad on mobile, up/down arrows or scoll wheel to increment)

<pre><code>input[type=number] {
  -moz-appearance: textfield;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</code></pre>

Example
-------

With spinners

<input type="number">

Without spinners

<input class="no-spinners" type="number">