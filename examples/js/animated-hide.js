jQuery( document ).ready(function( $ ) {
  "use strict";

  $.hideAnimate = function($element, $delay) {
    $delay = $delay === undefined ? 300 : $delay;
    $element.addClass("closing");
    $element.removeClass("open opening closed");
    setTimeout($.hideComplete, $delay, $element); // slower, allow for animation
  };

  $.hideComplete = function($element) {
    $element.addClass("closed").attr("aria-hidden", "true");
    $element.removeClass("open opening closing");
  };

  $.showAnimate = function($element, $delay) {
    $delay = $delay === undefined ? 20 : $delay;
    $element.addClass("opening");
    $element.removeClass("open closing closed");
    setTimeout($.showComplete, $delay, $element); // faster, animation happens after
  };

  $.showComplete = function($element) {
    $element.addClass("open").attr("aria-hidden", "false");
    $element.removeClass("opening closing closed");
  };

});
