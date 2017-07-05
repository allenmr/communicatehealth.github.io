jQuery( document ).ready(function( $ ) {
  "use strict";

  $(".ch-ig-nav").click(function (event) {
    if (event.preventDefault) { event.preventDefault(); }
    else { event.returnValue = false; } // IE

    $("#ig-next").removeClass("ch-limit");
    $("#ig-previous").removeClass("ch-limit");
    $(".ch-lightbox-container").removeClass("backdrop");
    $(".ch-slide").removeClass("backdrop-on");
    $(".ch-lightbox-content").addClass("ch-lightbox-off").attr("aria-hidden", "true");
    if($(this).hasClass("btn-start")) {
      $(this).attr("aria-expanded", "true");
    }

    var target = $(this).attr('href');

    if ($(target).hasClass("ch-off")) {
      $(".ch-slide").addClass("ch-off").removeClass("ch-on").attr("aria-hidden", "true");
      $(target).removeClass("ch-off").addClass("ch-on").attr("aria-hidden", "false");
      $(".ch-slide-control").removeClass("ch-current").attr("aria-selected", "false").attr("tabindex", "-1");
      $(target + "-control").addClass("ch-current").attr("aria-selected", "true").attr("tabindex", "0");
    }

    if(!$(".ch-slide.ch-on").next('.ch-slide').length) {
      $("#ig-next").addClass("ch-limit");
    }

    if(!$(".ch-slide.ch-on").prev('.ch-slide').length) {
      $("#ig-previous").addClass("ch-limit");
    }
  });


  $("#ig-next").click(function (event) {
    if (event.preventDefault) { event.preventDefault(); }
    else { event.returnValue = false; } // IE

    var nextItem = $(".ch-slide.ch-on").next();
    var nextItemId = $(nextItem).attr("id");

    $("#ig-next").removeClass("ch-limit");
    $("#ig-previous").removeClass("ch-limit");

    $(".ch-slide-control").removeClass("ch-current").attr("aria-selected", "false").attr("tabindex", "-1");
    $("#" + nextItemId + "-control").addClass("ch-current").attr("aria-selected", "true").attr("tabindex", "0");
    $(".ch-lightbox-container").removeClass("backdrop");
    $(".ch-slide").removeClass("backdrop-on");
    $(".ch-lightbox-content").addClass("ch-lightbox-off").attr("aria-hidden", "true");

    if(!$(".ch-slide.ch-on").next('.ch-slide').next('.ch-slide').length) {
      $(".ch-slide.ch-on").removeClass("ch-on").addClass("ch-off").attr("aria-hidden", "true");
      $(nextItem).removeClass("ch-off").addClass("ch-on").attr("aria-hidden", "false");
      $("#ig-next").addClass("ch-limit");
    }
    else {
      $(".ch-slide.ch-on").removeClass("ch-on").addClass("ch-off").attr("aria-hidden", "true");
      $(nextItem).removeClass("ch-off").addClass("ch-on").attr("aria-hidden", "false");
      $("#ig-next").removeClass("ch-limit");
    }
  });


  $("#ig-previous").click(function (event) {
    if (event.preventDefault) { event.preventDefault(); }
    else { event.returnValue = false; } // IE

    var prevItem = $(".ch-slide.ch-on").prev();
    var prevItemId = $(prevItem).attr("id");

    $("#ig-next").removeClass("ch-limit");
    $("#ig-previous").removeClass("ch-limit");

    $(".ch-slide-control").removeClass("ch-current").attr("aria-selected", "false").attr("tabindex", "-1");
    $("#" + prevItemId + "-control").addClass("ch-current").attr("aria-selected", "true").attr("tabindex", "0");
    $(".ch-lightbox-container").removeClass("backdrop");
    $(".ch-slide").removeClass("backdrop-on");
    $(".ch-lightbox-content").addClass("ch-lightbox-off").attr("aria-hidden", "true");

    if(!$(".ch-slide.ch-on").prev('.ch-slide').prev('.ch-slide').length) {
      $(".ch-slide.ch-on").removeClass("ch-on").addClass("ch-off").attr("aria-hidden", "true");
      $(prevItem).removeClass("ch-off").addClass("ch-on").attr("aria-hidden", "false");
      $("#ig-previous").addClass("ch-limit");
    }
    else {
      $(".ch-slide.ch-on").removeClass("ch-on").addClass("ch-off").attr("aria-hidden", "true");
      $(prevItem).removeClass("ch-off").addClass("ch-on").attr("aria-hidden", "false");
      $("#ig-previous").removeClass("ch-limit");
    }
  });

  $('.ch-infographic-container [role="tab"]').on('keydown', function(e) {
    var $container = '.ch-infographic-container';
    var $original = $(this);
    var $prev = $(this).parents('li').prev().children('[role="tab"]');
    var $next = $(this).parents('li').next().children('[role="tab"]');
    var $target;

    $("#ig-next").removeClass("ch-limit");
    $("#ig-previous").removeClass("ch-limit");


    // find the direction (prev or next)

    switch (e.keyCode) {
      case 37:
        $target = $prev;
        if(!$(".ch-slide.ch-on").prev('.ch-slide').prev('.ch-slide').length) {
          $("#ig-previous").addClass("ch-limit");
        }
        break;
      case 39:
        $target = $next;
        if(!$(".ch-slide.ch-on").next('.ch-slide').next('.ch-slide').length) {
          $("#ig-next").addClass("ch-limit");
        }
        break;
      default:
        $target = false;
        //break;
    }

    if ($target.length) {
        $original.attr({
          'tabindex' : '-1',
          'aria-selected' : false
        }).removeClass('ch-current');
        $target.attr({
          'tabindex' : '0',
          'aria-selected' : true
        }).addClass('ch-current').focus();

        // Hide panels

        $($container +' .ch-slide')
          .attr('aria-hidden', 'true').addClass('ch-off').removeClass('ch-on').removeClass('backdrop-on');
        $(".ch-lightbox-content").addClass("ch-lightbox-off").removeClass("ch-lightbox-on").attr("aria-hidden", "true");
        $(".ch-lightbox-container").removeClass("backdrop");

        // Show panel which corresponds to target

        $($($target).attr('href'))
          .attr('aria-hidden', 'false').removeClass('ch-off').addClass('ch-on');
    }
  });


  $(".ch-hotspot-link").click(function (event) {
    if (event.preventDefault) { event.preventDefault(); }
    else { event.returnValue = false; } // IE

    $("#lightbox-nav-next").removeClass("ch-limit");
    $("#lightbox-nav-previous").removeClass("ch-limit");

    var target = $(this).attr('href');
    if ($(target).hasClass("ch-lightbox-off")) {
      $(".ch-lightbox-content").addClass("ch-lightbox-off").removeClass("ch-lightbox-on").attr("aria-hidden", "true");
      $(".ch-lightbox-container").addClass("backdrop");
      $(".ch-slide.ch-on").addClass("backdrop-on");
      $(target).removeClass("ch-lightbox-off").addClass("ch-lightbox-on").attr("aria-hidden", "false");
    }

    if(!$(".ch-lightbox-content.ch-lightbox-on").prev('.ch-lightbox-content').length) {
      $("#lightbox-nav-previous").addClass("ch-limit");
    }

    if(!$(".ch-lightbox-content.ch-lightbox-on").next('.ch-lightbox-content').length) {
      $("#lightbox-nav-next").addClass("ch-limit");
    }
  });

  $(".ch-small-lightbox-toggle a").click(function (event) {
    if (event.preventDefault) { event.preventDefault(); }
    else { event.returnValue = false; } // IE

    $("#lightbox-nav-next").removeClass("ch-limit");
    $("#lightbox-nav-previous").removeClass("ch-limit");

    var target = $(this).attr('href');
    if ($(target).hasClass("ch-lightbox-off")) {
      $(".ch-lightbox-content").addClass("ch-lightbox-off").removeClass("ch-lightbox-on").attr("aria-hidden", "true");
      $(".ch-lightbox-container").addClass("backdrop");
      $(".ch-slide.ch-on").addClass("backdrop-on");
      $(target).removeClass("ch-lightbox-off").addClass("ch-lightbox-on").attr("aria-hidden", "false");
    }

    if(!$(".ch-lightbox-content.ch-lightbox-on").prev('.ch-lightbox-content').length) {
      $("#lightbox-nav-previous").addClass("ch-limit");
    }

    if(!$(".ch-lightbox-content.ch-lightbox-on").next('.ch-lightbox-content').length) {
      $("#lightbox-nav-next").addClass("ch-limit");
    }
  });


  $(".ch-lightbox-close").click(function (event) {
    if (event.preventDefault) { event.preventDefault(); }
    else { event.returnValue = false; } // IE
    $(".ch-lightbox-container").removeClass("backdrop");
    $(".ch-slide").removeClass("backdrop-on");
    $(".ch-lightbox-content").addClass("ch-lightbox-off").attr("aria-hidden", "true");
  });


  $("#lightbox-nav-previous").click(function (event) {
    if (event.preventDefault) { event.preventDefault(); }
    else { event.returnValue = false; } // IE

    var prevLightbox = $(".ch-lightbox-content.ch-lightbox-on").prev();

    $("#lightbox-nav-next").removeClass("ch-limit");
    $("#lightbox-nav-previous").removeClass("ch-limit");

    if(!$(".ch-lightbox-content.ch-lightbox-on").prev('.ch-lightbox-content').prev('.ch-lightbox-content').length) {
      $(".ch-lightbox-content.ch-lightbox-on").removeClass("ch-lightbox-on").addClass("ch-lightbox-off").attr("aria-hidden", "true");
      $(prevLightbox).removeClass("ch-lightbox-off").addClass("ch-lightbox-on").attr("aria-hidden", "false");
      $("#lightbox-nav-previous").addClass("ch-limit");
    }
    else {
      $(".ch-lightbox-content.ch-lightbox-on").removeClass("ch-lightbox-on").addClass("ch-lightbox-off").attr("aria-hidden", "true");
      $(prevLightbox).removeClass("ch-lightbox-off").addClass("ch-lightbox-on").attr("aria-hidden", "false");
      $("#lightbox-nav-previous").removeClass("ch-limit");
    }
  });

  $("#lightbox-nav-next").click(function (event) {
    if (event.preventDefault) { event.preventDefault(); }
    else { event.returnValue = false; } // IE

    var nextLightbox = $(".ch-lightbox-content.ch-lightbox-on").next();

    $("#lightbox-nav-next").removeClass("ch-limit");
    $("#lightbox-nav-previous").removeClass("ch-limit");

    if(!$(".ch-lightbox-content.ch-lightbox-on").next('.ch-lightbox-content').next('.ch-lightbox-content').length) {
      $(".ch-lightbox-content.ch-lightbox-on").removeClass("ch-lightbox-on").addClass("ch-lightbox-off").attr("aria-hidden", "true");
      $(nextLightbox).removeClass("ch-lightbox-off").addClass("ch-lightbox-on").attr("aria-hidden", "false");
      $("#lightbox-nav-next").addClass("ch-limit");
    }
    else {
      $(".ch-lightbox-content.ch-lightbox-on").removeClass("ch-lightbox-on").addClass("ch-lightbox-off").attr("aria-hidden", "true");
      $(nextLightbox).removeClass("ch-lightbox-off").addClass("ch-lightbox-on").attr("aria-hidden", "false");
      $("#lightbox-nav-next").removeClass("ch-limit");
    }

  });

});
