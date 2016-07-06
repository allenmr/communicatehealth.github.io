var $sidebar = $(".sidebar");

function removeClosedFromSidebar() {
  $sidebar.removeClass("closed");
}

function removeClosedFromSidebarDelayed() {
  setTimeout(removeClosedFromSidebar,10);
}

function AddVeryClosedToSidebar() {
  $sidebar.addClass("veryClosed");
}

function AddVeryClosedToSidebarDelayed() {
  setTimeout(AddVeryClosedToSidebar,150);
}

$(".site-menu button").click(function (event) {
  if (event.preventDefault) { event.preventDefault(); }
  else { event.returnValue = false; } // IE

  console.log("clicked");

  if ($(".sidebar").hasClass("closed")) {
    $(".sidebar").removeClass("veryClosed");
    removeClosedFromSidebarDelayed();
    $(".sidebar").addClass("open").attr("aria-hidden", "false");
    $(".overlay").addClass("on");
  }
  else {
    $(".sidebar").removeClass("open");
    $(".sidebar").addClass("closed").attr("aria-hidden", "true");
    AddVeryClosedToSidebarDelayed();
    $(".overlay").removeClass("on");
  }
});

$(".overlay").click(function (event) {
  $(".sidebar").removeClass("open");
  $(".sidebar").addClass("closed").attr("aria-hidden", "true");
   AddVeryClosedToSidebarDelayed();
  $(".overlay").removeClass("on");
});

// Display:none updates aria-hidden (JAWS bug)
if (window.matchMedia) {
  if (window.matchMedia("(min-width: 60em)").matches) {
    $(".mobile-menu").attr("aria-hidden", "true");
    $(".sidebar").attr("aria-hidden", "false");
  }
  if (window.matchMedia("(max-width: 60em)").matches) {
    $(".mobile-menu").attr("aria-hidden", "false");
    $(".sidebar").attr("aria-hidden", "true");
  }
}

window.onresize = function(){
  if (window.innerWidth >= 960 || !$(".sidebar").hasClass("closed") ) {
    $(".mobile-menu").attr("aria-hidden", "true");
    $(".sidebar").attr("aria-hidden", "false");
  } else {
    $(".mobile-menu").attr("aria-hidden", "false");
    $(".sidebar").attr("aria-hidden", "true");
  }
};
