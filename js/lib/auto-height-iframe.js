$( document ).ready(function() {
  
  // While we are resizing, slow down the rate at which we send messages to the parent window
  var resizeTimeoutId = -1;
  function handleResize() {
    resizeTimeoutId = -1;
    parent.postMessage($('html').outerHeight( true ) + 'px', '*');
  }
  // Here is the window resize handler
  $(window).resize(function(){
    if(resizeTimeoutId === -1){
      resizeTimeoutId = setTimeout(handleResize,50);
    }
  });
  // Fire off the resize message a few times as the page finishes rendering
  setTimeout(handleResize,50);
  setTimeout(handleResize,500);
  setTimeout(handleResize,1000);
  setTimeout(handleResize,2000);
    
});