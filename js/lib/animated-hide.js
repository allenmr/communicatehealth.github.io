$.hideAnimate = function($element) {
  $element.addClass("closing");
  $element.removeClass("open opening close");
  setTimeout($.hideComplete, 20, $element);
};

$.hideComplete = function($element) {
  $element.addClass("closed").attr("aria-hidden", "true");
  $element.removeClass("closing");
};

$.showAnimate = function($element) {
  $element.addClass("opening");
  $element.removeClass("open closing closed");
  setTimeout($.showComplete, 20, $element);
};

$.showComplete = function($element) {
  $element.addClass("open").attr("aria-hidden", "false");
  $element.removeClass("opening");
};
