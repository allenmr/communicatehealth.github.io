jQuery( document ).ready(function( $ ) {
  "use strict";

  $(".content-slide-prev").click(function (event) {
    if (event.preventDefault) { event.preventDefault(); }
    else { event.returnValue = false; } // IE

    var slideParent = $(this).parents('.content-slider-block').attr("id");
    var prevItem = $("#" + slideParent + " .content-slide.on").prev();

    $("#" + slideParent + " .content-slide-prev").removeClass("limit");
    $("#" + slideParent + " .content-slide-next").removeClass("limit");
    $("#" + slideParent + " .content-slide-restart").addClass("limit");

    if(!$("#" + slideParent + " .content-slide.on").prev('.content-slide').prev('.content-slide').length) {
      $("#" + slideParent + " .content-slide.on").removeClass("on").attr("aria-hidden", "true");
      $(prevItem).addClass("on").attr("aria-hidden", "false");
      $("#" + slideParent + " .content-slide-prev").addClass("limit");
    }
    else {
      $("#" + slideParent + " .content-slide.on").removeClass("on").attr("aria-hidden", "true");
      $(prevItem).addClass("on").attr("aria-hidden", "false");
      $("#" + slideParent + " .content-slide-prev").removeClass("limit");
    }
  });

  $(".content-slide-next").click(function (event) {
    if (event.preventDefault) { event.preventDefault(); }
    else { event.returnValue = false; } // IE

    var slideParent = $(this).parents('.content-slider-block').attr("id");
    var nextItem = $("#" + slideParent + " .content-slide.on").next();

    $("#" + slideParent + " .content-slide-prev").removeClass("limit");
    $("#" + slideParent + " .content-slide-next").removeClass("limit");
    $("#" + slideParent + " .content-slide-restart").addClass("limit");

    if(!$("#" + slideParent + " .content-slide.on").next('.content-slide').next('.content-slide').length) {
      $("#" + slideParent + " .content-slide.on").removeClass("on").attr("aria-hidden", "true");
      $(nextItem).addClass("on").attr("aria-hidden", "false");
      $("#" + slideParent + " .content-slide-next").addClass("limit");
      $("#" + slideParent + " .content-slide-restart").removeClass("limit");
    }
    else {
      $("#" + slideParent + " .content-slide.on").removeClass("on").attr("aria-hidden", "true");
      $(nextItem).addClass("on").attr("aria-hidden", "false");
      $("#" + slideParent + " .content-slide-next").removeClass("limit");
      $("#" + slideParent + " .content-slide-restart").addClass("limit");
    }
  });

  $(".content-slide-restart").click(function (event) {
    if (event.preventDefault) { event.preventDefault(); }
    else { event.returnValue = false; } // IE

    var slideParent = $(this).parents('.content-slider-block').attr("id");

    $("#" + slideParent + " .content-slide-prev").addClass("limit");
    $("#" + slideParent + " .content-slide-next").removeClass("limit");
    $("#" + slideParent + " .content-slide-restart").addClass("limit");

    $("#" + slideParent + " .content-slide.on").removeClass("on").attr("aria-hidden", "true");
    $("#" + slideParent + " .content-slide-first").addClass("on").attr("aria-hidden", "false");

  });

});
