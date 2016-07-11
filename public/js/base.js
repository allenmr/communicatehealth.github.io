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

$(document).ready(function() {
  $('.nav').setup_navigation();
});
/*
$(function(){
  $('.nav').setup_navigation();
});
*/
var keyCodeMap = {
        48:"0", 49:"1", 50:"2", 51:"3", 52:"4", 53:"5", 54:"6", 55:"7", 56:"8", 57:"9", 59:";",
        65:"a", 66:"b", 67:"c", 68:"d", 69:"e", 70:"f", 71:"g", 72:"h", 73:"i", 74:"j", 75:"k", 76:"l",
        77:"m", 78:"n", 79:"o", 80:"p", 81:"q", 82:"r", 83:"s", 84:"t", 85:"u", 86:"v", 87:"w", 88:"x", 89:"y", 90:"z",
        96:"0", 97:"1", 98:"2", 99:"3", 100:"4", 101:"5", 102:"6", 103:"7", 104:"8", 105:"9"
};

$.fn.setup_navigation = function(settings) {

  settings = jQuery.extend({
    menuHoverClass: 'show-menu',
  }, settings);

  // Add ARIA role to menubar and menu items
  $(this).attr('role', 'menubar').find('li').attr('role', 'menuitem');

  var top_level_links = $(this).find('> li > a');

  // Added by Terrill: (removed temporarily: doesn't fix the JAWS problem after all)
  // Add tabindex="0" to all top-level links
  // Without at least one of these, JAWS doesn't read widget as a menu, despite all the other ARIA
  //$(top_level_links).attr('tabindex','0');

  // Set tabIndex to -1 so that top_level_links can't receive focus until menu is open
  $(top_level_links).next('ul')
    .attr('data-test','true')
    .attr({ 'aria-hidden': 'true', 'role': 'menu' })
    .find('a')
      .attr('tabIndex',-1);

  // Adding aria-haspopup for appropriate items
  $(top_level_links).each(function(){
    if($(this).next('ul').length > 0) {
      $(this).parent('li').attr('aria-haspopup', 'true');
    }
  });

  $(top_level_links).hover(function(){
    $(this).closest('ul')
      .attr('aria-hidden', 'false')
      .find('.'+settings.menuHoverClass)
        .attr('aria-hidden', 'true')
        .removeClass(settings.menuHoverClass)
        .find('a')
          .attr('tabIndex',-1);
    $(this).next('ul')
      .attr('aria-hidden', 'false')
      .addClass(settings.menuHoverClass)
      .find('a').attr('tabIndex',0);
  });
  $(top_level_links).focus(function(){
    $(this).closest('ul')
      // Removed by Terrill
      // The following was adding aria-hidden="false" to root ul since menu is never hidden
      // and seemed to be causing flakiness in JAWS (needs more testing)
      // .attr('aria-hidden', 'false')
      .find('.'+settings.menuHoverClass)
        .attr('aria-hidden', 'true')
        .removeClass(settings.menuHoverClass)
        .find('a')
          .attr('tabIndex',-1);
    $(this).next('ul')
      .attr('aria-hidden', 'false')
      .addClass(settings.menuHoverClass)
      .find('a').attr('tabIndex',0);
  });

  // Bind arrow keys for navigation
  $(top_level_links).keydown(function(e){
    if(e.keyCode === 37) {
      e.preventDefault();
      // This is the first item
      if($(this).parent('li').prev('li').length === 0) {
        $(this).parents('ul').find('> li').last().find('a').first().focus();
      } else {
        $(this).parent('li').prev('li').find('a').first().focus();
      }
    } else if(e.keyCode === 38) {
      e.preventDefault();
      if($(this).parent('li').find('ul').length > 0) {
        $(this).parent('li').find('ul')
          .attr('aria-hidden', 'false')
          .addClass(settings.menuHoverClass)
          .find('a').attr('tabIndex',0)
            .last().focus();
      }
    } else if(e.keyCode === 39) {
      e.preventDefault();
      // This is the last item
      if($(this).parent('li').next('li').length === 0) {
        $(this).parents('ul').find('> li').first().find('a').first().focus();
      } else {
        $(this).parent('li').next('li').find('a').first().focus();
      }
    } else if(e.keyCode === 40) {
      e.preventDefault();
      if($(this).parent('li').find('ul').length > 0) {
        $(this).parent('li').find('ul')
          .attr('aria-hidden', 'false')
          .addClass(settings.menuHoverClass)
          .find('a').attr('tabIndex',0)
            .first().focus();
      }
    } else if(e.keyCode === 13 || e.keyCode === 32) {
      // If submenu is hidden, open it
      e.preventDefault();
      $(this).parent('li').find('ul[aria-hidden=true]')
          .attr('aria-hidden', 'false')
          .addClass(settings.menuHoverClass)
          .find('a').attr('tabIndex',0)
            .first().focus();
    } else if(e.keyCode === 27) {
      e.preventDefault();
      $('.'+settings.menuHoverClass)
        .attr('aria-hidden', 'true')
        .removeClass(settings.menuHoverClass)
        .find('a')
          .attr('tabIndex',-1);
    } else {
      $(this).parent('li').find('ul[aria-hidden=false] a').each(function(){
        if($(this).text().substring(0,1).toLowerCase() === keyCodeMap[e.keyCode]) {
          $(this).focus();
          return false;
        }
      });
    }
  });


  var links = $(top_level_links).parent('li').find('ul').find('a');
  $(links).keydown(function(e){
    if(e.keyCode === 38) {
      e.preventDefault();
      // This is the first item
      if($(this).parent('li').prev('li').length === 0) {
        $(this).parents('ul').parents('li').find('a').first().focus();
      } else {
        $(this).parent('li').prev('li').find('a').first().focus();
      }
    } else if(e.keyCode === 40) {
      e.preventDefault();
      if($(this).parent('li').next('li').length === 0) {
        $(this).parents('ul').parents('li').find('a').first().focus();
      } else {
        $(this).parent('li').next('li').find('a').first().focus();
      }
    } else if(e.keyCode === 27 || e.keyCode === 37) {
      e.preventDefault();
      $(this)
        .parents('ul').first()
          .prev('a').focus()
          .parents('ul').first().find('.'+settings.menuHoverClass)
            .attr('aria-hidden', 'true')
            .removeClass(settings.menuHoverClass)
            .find('a')
              .attr('tabIndex',-1);
    } else if(e.keyCode === 32) {
      e.preventDefault();
      window.location = $(this).attr('href');
    } else {
      var found = false;
      $(this).parent('li').nextAll('li').find('a').each(function(){
        if($(this).text().substring(0,1).toLowerCase() === keyCodeMap[e.keyCode]) {
          $(this).focus();
          found = true;
          return false;
        }
      });

      if(!found) {
        $(this).parent('li').prevAll('li').find('a').each(function(){
          if($(this).text().substring(0,1).toLowerCase() === keyCodeMap[e.keyCode]) {
            $(this).focus();
            return false;
          }
        });
      }
    }
  });


  // Hide menu if click or focus occurs outside of navigation
  $(this).find('a').last().keydown(function(e){
    if(e.keyCode === 9) {
      // If the user tabs out of the navigation hide all menus
      $('.'+settings.menuHoverClass)
        .attr('aria-hidden', 'true')
        .removeClass(settings.menuHoverClass)
        .find('a')
          .attr('tabIndex',-1);
    }
  });
  $(document).click(function(){ $('.'+settings.menuHoverClass).attr('aria-hidden', 'true').removeClass(settings.menuHoverClass).find('a').attr('tabIndex',-1); });

  $(this).click(function(e){
    e.stopPropagation();
  });
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
