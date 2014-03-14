$(document).ready(function() {
  $(window).bind('scroll',function(e){
    parallaxScroll();
  });
 
  function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('#parallax-bg1').css('top',(0-(scrolled*.35))+'px');
    $('#parallax-bg2').css('top',(1000-(scrolled*.75))+'px');
    $('#parallax-bg3').css('top',(2000-(scrolled*.75))+'px');
  };
  
  $('a#name-link').click(function(){
  	$('html, body').animate({
  		scrollTop:$('#name').offset().top
  	}, 1000, function() {
    	parallaxScroll(); // Callback is required for iOS
	});
  	return false;
  });
  $('a#bio-link').click(function(){
  	$('html, body').animate({
  		scrollTop:$('#bio').offset().top
  	}, 1000, function() {
    	parallaxScroll(); // Callback is required for iOS
	});
  	return false;
  });
  $('a#projects-link').click(function(){
  	$('html, body').animate({
  		scrollTop:$('#projects').offset().top
  	}, 1000, function() {
    	parallaxScroll(); // Callback is required for iOS
	});
  	return false;
  });
  $('a#about-link').click(function(){
  	$('html, body').animate({
  		scrollTop:$('#about').offset().top
  	}, 1000, function() {
    	parallaxScroll(); // Callback is required for iOS
	});
  	return false;
  });  
})