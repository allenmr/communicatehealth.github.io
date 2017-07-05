jQuery( document ).ready(function( $ ) {
  "use strict";

  $.hideAnimate = function($element, $delay) {
    $delay = $delay === undefined ? 300 : $delay;
    $element.addClass("ch-closing");
    $element.removeClass("ch-open ch-opening ch-closed");
    setTimeout($.hideComplete, $delay, $element); // slower, allow for animation
  };

  $.hideComplete = function($element) {
    $element.addClass("ch-closed").attr("aria-hidden", "true");
    $element.removeClass("ch-open ch-opening ch-closing");
  };

  $.showAnimate = function($element, $delay) {
    $delay = $delay === undefined ? 20 : $delay;
    $element.addClass("ch-opening");
    $element.removeClass("ch-open ch-closing ch-closed");
    setTimeout($.showComplete, $delay, $element); // faster, animation happens after
  };

  $.showComplete = function($element) {
    $element.addClass("ch-open").attr("aria-hidden", "false");
    $element.removeClass("ch-opening ch-closing ch-closed");
  };

});
