$(".content-slide-prev").click(function (event) {
  if (event.preventDefault) { event.preventDefault(); }
  else { event.returnValue = false; } // IE

  var prevItem = $(".content-slide.on").prev();

  $(".content-slide-prev").removeClass("limit");
  $(".content-slide-next").removeClass("limit");
  $(".content-slide-restart").addClass("limit");

  if(!$(".content-slide.on").prev('.content-slide').prev('.content-slide').length) {
    $(".content-slide.on").removeClass("on").attr("aria-hidden", "true");
    $(prevItem).addClass("on").attr("aria-hidden", "false");
    $(".content-slide-prev").addClass("limit");
  }
  else {
    $(".content-slide.on").removeClass("on").attr("aria-hidden", "true");
    $(prevItem).addClass("on").attr("aria-hidden", "false");
    $(".content-slide-prev").removeClass("limit");
  }
});

$(".content-slide-next").click(function (event) {
  if (event.preventDefault) { event.preventDefault(); }
  else { event.returnValue = false; } // IE

  var nextItem = $(".content-slide.on").next();

  $(".content-slide-prev").removeClass("limit");
  $(".content-slide-next").removeClass("limit");
  $(".content-slide-restart").addClass("limit");

  if(!$(".content-slide.on").next('.content-slide').next('.content-slide').length) {
    $(".content-slide.on").removeClass("on").attr("aria-hidden", "true");
    $(nextItem).addClass("on").attr("aria-hidden", "false");
    $(".content-slide-next").addClass("limit");
    $(".content-slide-restart").removeClass("limit");
  }
  else {
    $(".content-slide.on").removeClass("on").attr("aria-hidden", "true");
    $(nextItem).addClass("on").attr("aria-hidden", "false");
    $(".content-slide-next").removeClass("limit");
    $(".content-slide-restart").addClass("limit");
  }
});

$(".content-slide-restart").click(function (event) {
  if (event.preventDefault) { event.preventDefault(); }
  else { event.returnValue = false; } // IE

  $(".content-slide-prev").addClass("limit");
  $(".content-slide-next").removeClass("limit");
  $(".content-slide-restart").addClass("limit");

  $(".content-slide.on").removeClass("on").attr("aria-hidden", "true");
  $("#content-slide-1").addClass("on").attr("aria-hidden", "false");

});
