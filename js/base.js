function jumpLinkPageOut(){jumpLinkHistory.onPage=!1}function jumpLinkPageOver(){jumpLinkHistory.onPage=!0}function jumpLinkTargetOnScroll(){-1===jumpLinkHistory.index&&(jumpLinkHistory.index=0,jumpLinkHistory.positions.push({parent:null,top:0}),jumpLinkHistory.hashes.push(window.location.hash));var a=jumpLinkHistory.positions[jumpLinkHistory.index];a.parent=this,a.top=this.scrollTop}function jumpLinkOnClick(a){return a||(a=window.event),a.stopPropagation?a.stopPropagation():a.cancelBubble=!0,window.history.pushState("","",this.href),jumpLinkHistory.positions=jumpLinkHistory.positions.slice(0,jumpLinkHistory.index+1),jumpLinkHistory.hashes=jumpLinkHistory.hashes.slice(0,jumpLinkHistory.index+1),jumpLinkHistory.positions.push({parent:null,top:0}),jumpLinkHistory.hashes.push(window.location.hash),jumpLinkHistory.index=jumpLinkHistory.positions.length-1,jumpLink(),!1}function jumpLinkInitTargets(){for(var a=document.getElementsByTagName("a"),b=null,c=0;c<a.length;++c){var d=a[c],e=d.getAttribute("href");if(0===e.indexOf("#")){var f,g=document.getElementById(e.substr(1)),h=!1;if(g){for(;(g=g.parentNode)&&g!==document.body;){if(f=getStyle(g,"overflow"),"auto"===f||"scroll"===f){h=!0,b=g;break}if(f=getStyle(g,"overflow-y"),"auto"===f||"scroll"===f){h=!0,b=g;break}}h&&(g.onscroll=jumpLinkTargetOnScroll,d.onclick=jumpLinkOnClick)}}}b&&(jumpLinkHistory.positions.push({parent:b,top:b.scrollTop}),jumpLinkHistory.hashes.push(window.location.hash),jumpLinkHistory.index=jumpLinkHistory.positions.length-1)}function jumpLinkDelay(){window.location.hash&&setTimeout(jumpLink,20)}function jumpLink(){if(jumpLinkHistory.onPage){if(window.location.hash){var a=window.location.hash.substring(1);if(!/^[A-z0-9_\-]+$/.test(a))return;var b=document.getElementById(a),c=findPos(b),d=c[1],e=c.parent;if(d)if(e&&e!==document.body){var f=findRelativePos(b,e),g=f[1]-padTop;1>=g&&(g=0),setTimeout(function(){e.scrollTop=g},50)}else{var h=d-padTop;1>=h&&(h=0),window.scrollTo(0,h),jumpLinkHistory.positions.push({element:b,top:window.scrollTop,parent:e}),jumpLinkHistory.hashes.push(window.location.hash)}b&&(/^(?:a|select|input|button|textarea)$/i.test(b.tagName)||/^(?:jumplink-ignore)$/i.test(b.className)||(b.tabIndex=-1),b.focus())}}else{var i=!1;if(jumpLinkHistory.index-1>=0&&jumpLinkHistory.hashes[jumpLinkHistory.index-1]===window.location.hash?(i=!0,--jumpLinkHistory.index):jumpLinkHistory.index+1<jumpLinkHistory.hashes.length&&jumpLinkHistory.hashes[jumpLinkHistory.index+1]===window.location.hash?(i=!0,++jumpLinkHistory.index):(jumpLinkHistory.onPage=!0,jumpLink()),i&&jumpLinkHistory.index>=0){var j=jumpLinkHistory.positions[jumpLinkHistory.index];j.parent.scrollTop=j.top}}}function findPos(a){for(var b,c=0,d=0,e=a,f=!1;(e=e.parentNode)&&e!==document.body&&(c-=e.scrollLeft||0,d-=e.scrollTop||0,"fixed"===getStyle(e,"position")&&(f=!0),b=getStyle(e,"overflow"),"auto"!==b&&"scroll"!==b)&&(b=getStyle(e,"overflow-y"),"auto"!==b&&"scroll"!==b););if(f&&!window.opera){var g=scrollDist();c+=g[0],d+=g[1]}do c+=a.offsetLeft,d+=a.offsetTop;while(null!==(a=a.offsetParent));return{0:c,1:d,parent:e}}function findRelativePos(a,b){var c=0,d=0;do c+=a.offsetLeft,d+=a.offsetTop;while(null!==(a=a.offsetParent)&&a!==b);return[c,d]}function scrollDist(){var a=document.getElementsByTagName("html")[0];return a.scrollTop&&document.documentElement.scrollTop?[a.scrollLeft,a.scrollTop]:a.scrollTop||document.documentElement.scrollTop?[a.scrollLeft+document.documentElement.scrollLeft,a.scrollTop+document.documentElement.scrollTop]:document.body.scrollTop?[document.body.scrollLeft,document.body.scrollTop]:[0,0]}function getStyle(a,b){var c;return a.currentStyle?c=a.currentStyle[b]:window.getComputedStyle&&(c=window.getComputedStyle(a,null)[b]),c}var padTop=100;window.addEventListener("load",function(){jumpLinkDelay(),jumpLinkInitTargets(),document.body.addEventListener("mouseout",jumpLinkPageOut,!1),document.body.addEventListener("mouseover",jumpLinkPageOver,!1)},!1),window.addEventListener("hashchange",jumpLink,!1);var jumpLinkHistory={onPage:!0,hashes:[],index:-1,positions:[]},site=location.hostname;""===site&&(site="this site"),site=site.replace("www.","");for(var links=document.getElementsByTagName("a"),i=0;i<links.length;++i)links[i].href.indexOf(".gov")>-1&&-1===links[i].href.indexOf(site)&&links[i].className.indexOf("outlink-ignore")?(links[i].setAttribute("target","_blank"),links[i].setAttribute("rel","noopener noreferrer")):(links[i].href.indexOf("http://")>-1||links[i].href.indexOf("https://")>-1)&&-1===links[i].href.indexOf(site)&&links[i].className.indexOf("outlink-ignore")&&(links[i].setAttribute("target","_blank"),links[i].setAttribute("rel","noopener noreferrer"),links[i].innerHTML+='<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAQCAQAAACIaFaMAAAAPUlEQVR4AWMgHUz4D4FgdgOQBYVIEggphATzBEYMCZhqrEahCTcAIRaJBggb3agGFOdi8wJZEpgQvwTJAADRrod38NnIHQAAAABJRU5ErkJggg==" style="padding-left: .25em;" alt="External Link: You are leaving '+site+'" title="External Link: You are leaving '+site+'">');$(".accordion-toggle").attr("aria-expanded","false"),$(".accordion-content").addClass("closed").attr("aria-hidden","true"),$(".accordion-toggle").click(function(a){a.preventDefault?a.preventDefault():a.returnValue=!1;var b=$(this).next(".accordion-content");"true"===$(this).attr("aria-expanded")?($(this).attr("aria-expanded","false"),b.attr("aria-hidden","true"),$.hideAnimate(b)):($(this).attr("aria-expanded","true"),b.attr("aria-hidden","false"),$.showAnimate(b))});var $container=".tab";$('[role="tab"]').on("keydown",function(a){var b,c=$(this),d=$(this).parent("li").prev().children('[role="tab"]'),e=$(this).parent("li").next().children('[role="tab"]'),f=$(this).parent().parent().parent().attr("id");switch(a.keyCode){case 37:b=d;break;case 39:b=e;break;default:b=!1}b.length&&(c.attr({tabindex:"-1","aria-selected":!1}),b.attr({tabindex:"0","aria-selected":!0}).focus()),$("#"+f+' [role="tabpanel"]').attr("aria-hidden","true"),$("#"+$(document.activeElement).attr("href").substring(1)).attr("aria-hidden","false")}),$('[role="tab"]').on("click",function(a){a.preventDefault?a.preventDefault():a.returnValue=!1;var b=$(this).parent().parent().parent().attr("id");$("#"+b+' [role="tab"]').attr({tabindex:"-1","aria-selected":!1}),$(this).attr({"aria-selected":!0,tabindex:"0"}),$("#"+b+' [role="tabpanel"]').attr("aria-hidden","true"),$("#"+$(this).attr("href").substring(1)).attr("aria-hidden","false")}),$(".content-slide-prev").click(function(a){a.preventDefault?a.preventDefault():a.returnValue=!1;var b=$(".content-slide.on").prev();$(".content-slide-prev").removeClass("limit"),$(".content-slide-next").removeClass("limit"),$(".content-slide-restart").addClass("limit"),$(".content-slide.on").prev(".content-slide").prev(".content-slide").length?($(".content-slide.on").removeClass("on").attr("aria-hidden","true"),$(b).addClass("on").attr("aria-hidden","false"),$(".content-slide-prev").removeClass("limit")):($(".content-slide.on").removeClass("on").attr("aria-hidden","true"),$(b).addClass("on").attr("aria-hidden","false"),$(".content-slide-prev").addClass("limit"))}),$(".content-slide-next").click(function(a){a.preventDefault?a.preventDefault():a.returnValue=!1;var b=$(".content-slide.on").next();$(".content-slide-prev").removeClass("limit"),$(".content-slide-next").removeClass("limit"),$(".content-slide-restart").addClass("limit"),$(".content-slide.on").next(".content-slide").next(".content-slide").length?($(".content-slide.on").removeClass("on").attr("aria-hidden","true"),$(b).addClass("on").attr("aria-hidden","false"),$(".content-slide-next").removeClass("limit"),$(".content-slide-restart").addClass("limit")):($(".content-slide.on").removeClass("on").attr("aria-hidden","true"),$(b).addClass("on").attr("aria-hidden","false"),$(".content-slide-next").addClass("limit"),$(".content-slide-restart").removeClass("limit"))}),$(".content-slide-restart").click(function(a){a.preventDefault?a.preventDefault():a.returnValue=!1,$(".content-slide-prev").addClass("limit"),$(".content-slide-next").removeClass("limit"),$(".content-slide-restart").addClass("limit"),$(".content-slide.on").removeClass("on").attr("aria-hidden","true"),$("#content-slide-1").addClass("on").attr("aria-hidden","false")}),$.hideAnimate=function(a){a.addClass("closing"),a.removeClass("open"),setTimeout($.hideComplete,300,a)},$.hideComplete=function(a){a.addClass("closed"),a.removeClass("closing")},$.showAnimate=function(a){a.addClass("opening"),a.removeClass("closed"),setTimeout($.showComplete,300,a)},$.showComplete=function(a){a.addClass("open"),a.removeClass("opening")};