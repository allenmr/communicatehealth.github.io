$.hideAnimate = function($element) {
  $element.addClass("closing");
  $element.removeClass("open");
  setTimeout($.hideComplete, 300, $element);
};

$.hideComplete = function($element) {
  $element.addClass("closed");
  $element.removeClass("closing");
};

$.showAnimate = function($element) {
  $element.addClass("opening");
  $element.removeClass("closed");
  setTimeout($.showComplete, 300, $element);
};

$.showComplete = function($element) {
  $element.addClass("open");
  $element.removeClass("opening");
};
