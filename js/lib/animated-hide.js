jQuery( document ).ready(function( $ ) {
  "use strict";

  $.hideAnimate = function($element) {
    $element.addClass("closing");
    $element.removeClass("open opening close");
    setTimeout($.hideComplete, 300, $element); // slower, allow for animation
  };

  $.hideComplete = function($element) {
    $element.addClass("closed").attr("aria-hidden", "true");
    $element.removeClass("closing");
  };

  $.showAnimate = function($element) {
    $element.addClass("opening");
    $element.removeClass("open closing closed");
    setTimeout($.showComplete, 20, $element); // faster, animation happens after
  };

  $.showComplete = function($element) {
    $element.addClass("open").attr("aria-hidden", "false");
    $element.removeClass("opening");
  };

});