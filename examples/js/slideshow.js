jQuery( document ).ready(function( $ ) {
  "use strict";

  $(".ch-content-slide-prev").click(function (event) {
    if (event.preventDefault) { event.preventDefault(); }
    else { event.returnValue = false; } // IE

    var slideParent = $(this).parents('.ch-content-slider-block').attr("id");
    var prevItem = $("#" + slideParent + " .ch-content-slide.ch-on").prev();

    $("#" + slideParent + " .ch-content-slide-prev").removeClass("ch-limit");
    $("#" + slideParent + " .ch-content-slide-next").removeClass("ch-limit");
    $("#" + slideParent + " .ch-content-slide-restart").addClass("ch-limit");

    if(!$("#" + slideParent + " .ch-content-slide.ch-on").prev('.ch-content-slide').prev('.ch-content-slide').length) {
      $("#" + slideParent + " .ch-content-slide.ch-on").removeClass("ch-on").attr("aria-hidden", "true");
      $(prevItem).addClass("ch-on").attr("aria-hidden", "false");
      $("#" + slideParent + " .ch-content-slide-prev").addClass("ch-limit");
    }
    else {
      $("#" + slideParent + " .ch-content-slide.ch-on").removeClass("ch-on").attr("aria-hidden", "true");
      $(prevItem).addClass("ch-on").attr("aria-hidden", "false");
      $("#" + slideParent + " .ch-content-slide-prev").removeClass("ch-limit");
    }
  });

  $(".ch-content-slide-next").click(function (event) {
    if (event.preventDefault) { event.preventDefault(); }
    else { event.returnValue = false; } // IE

    var slideParent = $(this).parents('.ch-content-slider-block').attr("id");
    var nextItem = $("#" + slideParent + " .ch-content-slide.ch-on").next();

    $("#" + slideParent + " .ch-content-slide-prev").removeClass("ch-limit");
    $("#" + slideParent + " .ch-content-slide-next").removeClass("ch-limit");
    $("#" + slideParent + " .ch-content-slide-restart").addClass("ch-limit");

    if(!$("#" + slideParent + " .ch-content-slide.ch-on").next('.ch-content-slide').next('.ch-content-slide').length) {
      $("#" + slideParent + " .ch-content-slide.ch-on").removeClass("ch-on").attr("aria-hidden", "true");
      $(nextItem).addClass("ch-on").attr("aria-hidden", "false");
      $("#" + slideParent + " .ch-content-slide-next").addClass("ch-limit");
      $("#" + slideParent + " .ch-content-slide-restart").removeClass("ch-limit");
    }
    else {
      $("#" + slideParent + " .ch-content-slide.ch-on").removeClass("ch-on").attr("aria-hidden", "true");
      $(nextItem).addClass("ch-on").attr("aria-hidden", "false");
      $("#" + slideParent + " .ch-content-slide-next").removeClass("ch-limit");
      $("#" + slideParent + " .ch-content-slide-restart").addClass("ch-limit");
    }
  });

  $(".ch-content-slide-restart").click(function (event) {
    if (event.preventDefault) { event.preventDefault(); }
    else { event.returnValue = false; } // IE

    var slideParent = $(this).parents('.ch-content-slider-block').attr("id");

    $("#" + slideParent + " .ch-content-slide-prev").addClass("ch-limit");
    $("#" + slideParent + " .ch-content-slide-next").removeClass("ch-limit");
    $("#" + slideParent + " .ch-content-slide-restart").addClass("ch-limit");

    $("#" + slideParent + " .ch-content-slide.ch-on").removeClass("ch-on").attr("aria-hidden", "true");
    $("#" + slideParent + " .ch-content-slide-first").addClass("ch-on").attr("aria-hidden", "false");

  });

});
