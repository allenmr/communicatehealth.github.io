$( document ).ready(function() {
  
  // While we are resizing, slow down the rate at which we send messages to the parent window
  var resizeTimeoutId = -1;
  function handleResize() {
    resizeTimeoutId = -1;
    parent.postMessage($('html').outerHeight( true ) + 'px', '*');
  }
  function pacedHandleResize() {
    if(resizeTimeoutId === -1){
      resizeTimeoutId = setTimeout(handleResize,50);
    }
  }
  // Here is the window resize handler
  $(window).resize(pacedHandleResize);
  // Define an iframe over whole body to detect document content size changes
  $('body').css('position','relative');
  var apiframe = $('<iframe tabindex="-1" style="position:absolute;top:0;bottom:0;left:0;height:100%;width:0;border:0;background-color:transparent;"></iframe>').appendTo($('body'));
  $(apiframe[0].contentWindow).resize(pacedHandleResize);
  // Fire off at least one message
  handleResize();
});