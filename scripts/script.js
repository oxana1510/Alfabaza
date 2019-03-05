$("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked"); 
});

$(document).ready(function(){

var url=document.location.href; $.each($(".nav-menu a"),function(){
  if(this.href==url){$(this).addClass('active-link');};
  });
});
 

$('a').on('click touchend', function(e) {
    var el = $(this);
    var link = el.attr('href');
    window.location = link;
});


jQuery("document").ready(function($){
 
  var nav = $('.top');
  var logo = $('.logo');
  var navmob = $('.navBurger');
 
  $(window).scroll(function () {
    if (window.scrollY > 400) {
      nav.addClass("fixed topfixed");
      logo.addClass("logoFix");
      navmob.addClass("mobfixed");
      
    } else{
      nav.removeClass("fixed");
      logo.removeClass("logoFix");
      navmob.removeClass("mobfixed");
    }
});
});