$(document).ready(function(){
$(".gallery").slick({
  infinite: true,
  dots: true,
  speed: 300,
  slidesToShow: 1,
  variableWidth: true,
  arrows: false,
});
});


$("img").on("click", function(){
  $(".bg-wall").toggleClass("popup_bg");
   $(this).parents(".gallery").toggleClass("gallery-big");

  var index = $(this).parent().index() - 1;
 
if($(this).parents(".gallery").hasClass("gallery-big")){
     $(this).parents(".gallery").fadeIn();
     $(this).parents(".gallery").slick("unslick");
     $(this).parents(".gallery").slick({
    adaptiveHeight: true,
    dots: false,
    arrows: true,
    slidesToScroll:1,
    initialSlide: index,
  });
  }  else{
      $(this).parents(".gallery").slick("unslick");
      $(this).parents(".gallery").slick({
      infinite: true,
      dots: true,
      speed: 300,
      slidesToShow: 1,
      variableWidth: true,
      arrows: false,
    });
}	
});

$(document).on( "click", ".popup_bg", function() {
$(".gallery").removeClass("gallery-big");
  $(".slick-list").addClass("slick-list-heignt");
  $(this).removeClass("popup_bg");
  $(".gallery").fadeIn();
   $(".gallery").slick("unslick");
   $(".gallery").slick({
	  infinite: true,
    dots: true,
	  speed: 300,
	  slidesToShow: 1,
	  variableWidth: true,
	  arrows: false,
	});
});

