jQuery( document ).ready(function( $ ) {
  "use strict";

  // close all accordion items when JS loads
  $(".ch-accordion-block").addClass("ch-closed");
  $(".ch-accordion-toggle").attr("aria-expanded", "false");
  $(".ch-accordion-content").addClass("ch-closed").attr("aria-hidden", "true");

  $(".ch-accordion-toggle").click(function (event) {
    if (event.preventDefault) { event.preventDefault(); }
    else { event.returnValue = false; } // IE

    var $next = $(this).next('.ch-accordion-content');

    // If accordion content is already visible, hide
    if ($(this).attr('aria-expanded') === 'true') {
      $(this).attr("aria-expanded", "false");
      $(this).parent(".ch-accordion-block").removeClass("ch-open").addClass("ch-closed");
      $.hideAnimate($next);
    }

    // Show accordion content
    else {
      $(this).attr("aria-expanded", "true");
      $(this).parent(".ch-accordion-block").removeClass("ch-closed").addClass("ch-open");
      $.showAnimate($next);
    }
  });

});
