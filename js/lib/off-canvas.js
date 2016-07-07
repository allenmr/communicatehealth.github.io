$(".site-menu button").click(function (event) {
  if (event.preventDefault) { event.preventDefault(); }
  else { event.returnValue = false; } // IE

  if ($(".sidebar").hasClass("closed")) {
    $(this).attr("aria-expanded", "true");
    $.showAnimate($(".sidebar"));
    $.showAnimate($(".overlay"));
  }

  else {
    $(this).attr("aria-expanded", "false");
    $.hideAnimate($(".sidebar"));
    $.hideAnimate($(".overlay"));
  }
});

$(".overlay").click(function (event) {
  $.hideAnimate($(".sidebar"));
  $.hideAnimate($(".overlay"));
  $(".site-menu button").attr("aria-expanded", "false");
});

$(document).ready(function() {
  responsiveAdjust();
});

$(window).resize($.debounce(500, function() {
  responsiveAdjust();
}));

$.responsiveAdjust = function() {
  if (window.matchMedia) {
    if (window.matchMedia("(min-width: 60em)").matches) {
      $.showAnimate($(".sidebar"));
      $.hideAnimate($(".mobile-menu"));
      $.hideAnimate($(".overlay"));
    }

    if (window.matchMedia("(max-width: 60em)").matches) {
      $.showAnimate($(".mobile-menu"));
      $.hideAnimate($(".sidebar"));
      $.hideAnimate($(".overlay"));
    }
  }
};
