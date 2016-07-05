// close all accordion items when JS loads
$(".accordion-toggle").attr("aria-expanded", "false");
$(".accordion-content").attr("aria-hidden", "true");

$(".accordion-toggle").click(function (event) {
  if (event.preventDefault) { event.preventDefault(); }
  else { event.returnValue = false; } // IE

  // If accordion content is already visible, hide
  if ($(this).attr('aria-expanded') === 'true') {
    $(this).attr("aria-expanded", "false");
    $(this).next('.accordion-content').attr("aria-hidden", "true");
  }

  // Show accordion content
  else {
    $(this).attr("aria-expanded", "true");
    $(this).next('.accordion-content').attr("aria-hidden", "false");
  }
});
