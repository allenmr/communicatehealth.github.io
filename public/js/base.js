// close all accordion items when JS loads
$(".accordion-toggle").attr("aria-expanded", "false");
$(".accordion-content").addClass("closed").attr("aria-hidden", "true");

$(".accordion-toggle").click(function (event) {
  if (event.preventDefault) { event.preventDefault(); }
  else { event.returnValue = false; } // IE

  var $next = $(this).next('.accordion-content');

  // If accordion content is already visible, hide
  if ($(this).attr('aria-expanded') === 'true') {
    $(this).attr("aria-expanded", "false");
    $.hideAnimate($next);
  }

  // Show accordion content
  else {
    $(this).attr("aria-expanded", "true");
    $.showAnimate($next);
  }
});


// The class for the container div
var $container = '.tab';

// Change focus between tabs with arrow keys
$('[role="tab"]').on('keydown', function(event) {

  // define current, previous and next (possible) tabs
  var $original = $(this);
  var $prev = $(this).parent('li').prev().children('[role="tab"]');
  var $next = $(this).parent('li').next().children('[role="tab"]');
  var $target;
  var containerId = $(this).parent().parent().parent().attr("id");

  // find the direction (prev or next)
  switch (event.keyCode) {
    case 37:
      $target = $prev;
      break;
    case 39:
      $target = $next;
      break;
    default:
      $target = false;
      break;
  }

  if ($target.length) {
      $original.attr({
        'tabindex' : '-1',
        'aria-selected' : false
      });
      $target.attr({
        'tabindex' : '0',
        'aria-selected' : true
      }).focus();
  }

  // Hide panels
  $('#' + containerId +' [role="tabpanel"]').attr('aria-hidden', 'true');

  // Show panel which corresponds to target
  $('#' + $(document.activeElement).attr('href').substring(1))
    .attr('aria-hidden', 'false');

});

// Handle click on tab to show + focus tabpanel
$('[role="tab"]').on('click', function(event) {

  if (event.preventDefault) { event.preventDefault(); }
  else { event.returnValue = false; } // IE

  // get container id
  var containerId = $(this).parent().parent().parent().attr("id");

  // remove focusability [sic] and aria-selected
  $('#' + containerId + ' [role="tab"]').attr({
    'tabindex': '-1',
    'aria-selected' : false
  });

  // replace above on clicked tab
  $(this).attr({
    'aria-selected' : true,
    'tabindex' : '0'
  });

  // Hide panels
  $('#' + containerId +' [role="tabpanel"]').attr('aria-hidden', 'true');

  // show corresponding panel
  $('#' + $(this).attr('href').substring(1))
    .attr('aria-hidden', 'false');

});

$(".content-slide-prev").click(function (event) {
  if (event.preventDefault) { event.preventDefault(); }
  else { event.returnValue = false; } // IE

  var $currentItem = $(".content-slide.open");
  var $previousItem = $(".content-slide.open").prev();

  // clear button states
  $(".content-slide-prev, .content-slide-next").removeClass("limit");
  $(".content-slide-restart").addClass("limit");

  // if previous slide is first slide, hide previous button
  if(!$(".content-slide.open").prev('.content-slide').prev('.content-slide').length) {
    $(".content-slide-prev").addClass("limit");
  }

  // hide current slide, show previous slide
  $.hideAnimate($currentItem);
  $.showAnimate($previousItem);
});

$(".content-slide-next").click(function (event) {
  if (event.preventDefault) { event.preventDefault(); }
  else { event.returnValue = false; } // IE

  var $currentItem = $(".content-slide.open");
  var $nextItem = $(".content-slide.open").next();

  // clear button states
  $(".content-slide-prev, .content-slide-next").removeClass("limit");
  $(".content-slide-restart").addClass("limit");

  // if next slide is last slide, hide next button, show restart button
  if(!$(".content-slide.open").next('.content-slide').next('.content-slide').length) {
    $(".content-slide-next").addClass("limit");
    $(".content-slide-restart").removeClass("limit");
  }

  // hide current slide, show previous slide
  $.hideAnimate($currentItem);
  $.showAnimate($nextItem);
});

$(".content-slide-restart").click(function (event) {
  if (event.preventDefault) { event.preventDefault(); }
  else { event.returnValue = false; } // IE

  var $currentItem = $(".content-slide.open");
  var $firstItem = $("#content-slide-1");

  // clear button states
  $(".content-slide-prev, .content-slide-restart").addClass("limit");
  $(".content-slide-next").removeClass("limit");

  // hide current slide, show first slide
  $.hideAnimate($currentItem);
  $.showAnimate($firstItem);
});

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

var responsiveAdjust = function() {
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
