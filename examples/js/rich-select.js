$( document ).ready(function() {

  $(".rich-select-toggle").click(function (event) {
    if (event.preventDefault) { event.preventDefault(); }
    else { event.returnValue = false; } // IE

    var $next = $(this).next('.rich-select-list');

    // If accordion content is already visible, hide
    if ($(this).attr('aria-expanded') === 'true') {
      $(this).removeClass("expanded").attr("aria-expanded", "false");
      $(this).find(".rich-select-toggle-arrow").html("&#9660;");
      $.hideAnimate($next);
    }

    // Show accordion content
    else {
      $(".rich-select-toggle").attr("aria-expanded", "false");
      $.hideAnimate($(".rich-select-list.open"));
      $(this).addClass("expanded").attr("aria-expanded", "true");
      $(this).find(".rich-select-toggle-arrow").html("&#9650;");
      $.showAnimate($next);
      $(this).parent().find(".rich-select-item:first").focus();
    }
  });

  $('.rich-select-item').keydown(function(e){
    if (e.keyCode === 37 || e.keyCode === 40) {
      var nextItem = $(this).parent().next().find(".rich-select-item");
      if(nextItem.length > 0){
        nextItem.focus();
        return false;
      }
    }
    if (e.keyCode === 38 || e.keyCode === 39) {
      var prevItem = $(this).parent().prev().find(".rich-select-item");
      if(prevItem.length > 0){
        prevItem.focus();
        return false;
      }
    }
    if (e.keyCode === 9) {
      var tabables = $("*[tabindex != '-1']:visible");
      var parentToggle = $(this).parents(".rich-select").find(".rich-select-toggle");
      var index = tabables.index(this);
      var i_tab, tabable;
      if (e.shiftKey) {
        for(i_tab = index - 1; i_tab >= 0; --i_tab){
          tabable = $(tabables[i_tab]);
          if(!tabable.hasClass("rich-select-item") && tabable[0].tabIndex >= 0 && !parentToggle.is(tabable)){
            tabable.focus();
            parentToggle.click();
            return false;
          }
        }
      } else {
        for(i_tab = index + 1; i_tab < tabables.length; ++i_tab){
          tabable = $(tabables[i_tab]);
          if(!tabable.hasClass("rich-select-item") && tabable[0].tabIndex >= 0 && !parentToggle.is(tabable)){
            tabable.focus();
            parentToggle.click();
            return false;
          }
        }
      }
    }
  });

});
