
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
