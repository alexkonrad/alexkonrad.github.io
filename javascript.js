$(document).ready(function() {
  $(window).bind('scroll',function(e){
    parallaxScroll();
  });
 
  function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
    $('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
    $('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');
  };
  
  $('a.sidebar-link').click(function(){
  	$('html, body').animate({
  		scrollTop:$('#sidebar-link').offset().top
  	}, 1000, function() {
    	parallaxScroll(); // Callback is required for iOS
	});
  	return false;
  });
})