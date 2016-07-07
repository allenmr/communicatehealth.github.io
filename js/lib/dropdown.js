
// Open/close subnavsw
$(".subnav-toggle").click(function (event) {
  if (event.preventDefault) { event.preventDefault(); }
  else { event.returnValue = false; } // IE

  if ($(this).parent().find(".subnav").hasClass("closed")) {
    // reset other nav links
    $(".subnav").addClass("closed").attr("aria-hidden", "true");
    $(".group").removeClass("active");
    $(".subnav-toggle").html("+").attr("aria-expanded", "false");

    $(this).parent().find(".subnav").removeClass("closed").attr("aria-hidden", "false");
    $(this).html("-").attr("aria-expanded", "true");
    $(this).parent().addClass("active");
  }
  else {
    $(this).parent().find(".subnav").addClass("closed").attr("aria-hidden", "true");
    $(this).html("+").attr("aria-expanded", "false");
    $(this).parent().removeClass("active");
  }
});
