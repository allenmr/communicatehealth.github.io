jQuery( document ).ready(function( $ ) {
  "use strict";
  
  $(".content-slide-prev").click(function (event) {
    if (event.preventDefault) { event.preventDefault(); }
    else { event.returnValue = false; } // IE

    var $currentItem = $(".content-slide.open");
    var $previousItem = $(".content-slide.open").prev();

    // clear button states
    $(".content-slide-prev, .content-slide-next").removeClass("limit");
    $(".content-slide-restart").addClass("limit");

    // if previous slide is first slide, hide previous button
    if(!$(".content-slide.open").prev('.content-slide').prev('.content-slide').length) {
      $(".content-slide-prev").addClass("limit");
    }

    // hide current slide, show previous slide
    $.hideAnimate($currentItem);
    $.showAnimate($previousItem);
  });

  $(".content-slide-next").click(function (event) {
    if (event.preventDefault) { event.preventDefault(); }
    else { event.returnValue = false; } // IE

    var $currentItem = $(".content-slide.open");
    var $nextItem = $(".content-slide.open").next();

    // clear button states
    $(".content-slide-prev, .content-slide-next").removeClass("limit");
    $(".content-slide-restart").addClass("limit");

    // if next slide is last slide, hide next button, show restart button
    if(!$(".content-slide.open").next('.content-slide').next('.content-slide').length) {
      $(".content-slide-next").addClass("limit");
      $(".content-slide-restart").removeClass("limit");
    }

    // hide current slide, show previous slide
    $.hideAnimate($currentItem);
    $.showAnimate($nextItem);
  });

  $(".content-slide-restart").click(function (event) {
    if (event.preventDefault) { event.preventDefault(); }
    else { event.returnValue = false; } // IE

    var $currentItem = $(".content-slide.open");
    var $firstItem = $("#content-slide-1");

    // clear button states
    $(".content-slide-prev, .content-slide-restart").addClass("limit");
    $(".content-slide-next").removeClass("limit");

    // hide current slide, show first slide
    $.hideAnimate($currentItem);
    $.showAnimate($firstItem);
  });

});