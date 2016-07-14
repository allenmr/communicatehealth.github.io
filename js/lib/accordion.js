jQuery( document ).ready(function( $ ) {
  "use strict";

  // close all accordion items when JS loads
  $(".accordion-toggle").attr("aria-expanded", "false");
  $(".accordion-content").addClass("closed").attr("aria-hidden", "true");

  $(".accordion-toggle").click(function (event) {
    if (event.preventDefault) { event.preventDefault(); }
    else { event.returnValue = false; } // IE

    var $next = $(this).next('.accordion-content');

    // If accordion content is already visible, hide
    if ($(this).attr('aria-expanded') === 'true') {
      $(this).attr("aria-expanded", "false");
      $.hideAnimate($next);
    }

    // Show accordion content
    else {
      $(this).attr("aria-expanded", "true");
      $.showAnimate($next);
    }
  });

});
