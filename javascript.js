$(document).ready(function() {
  $(window).bind('scroll',function(e){
    parallaxScroll();
  });
 
  function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('#parallax-bg1').css('top',(0-(scrolled*.35))+'px');
    $('#parallax-bg2').css('top',(1000-(scrolled*.75))+'px');
    $('#parallax-bg3').css('top',(2000-(scrolled*.25))+'px');
    
    $('li').removeClass('active')
    console.log(scrolled)
    if (scrolled < 1000) {
      $('#li-name-link').addClass('active');
    } else if (scrolled > 1000 && scrolled < 2000 ) {
      $('#li-bio-link').addClass('active');      
    } else if (scrolled > 2000 && scrolled < 3000) {
      $('#li-projects-link').addClass('active');      
    } else if (scrolled > 3000 && scrolled < 4000) {
      $('#li-about-link').addClass('active');      
    }
  };
  
  $('a#name-link').click(function(){
  	$('html, body').animate({
  		scrollTop:$('#name').offset().top
  	}, 750, function() {
    	parallaxScroll(); // Callback is required for iOS
	});
  	return false;
  });
  $('a#bio-link').click(function(){
  	$('html, body').animate({
  		scrollTop:$('#bio').offset().top
  	}, 750, function() {
    	parallaxScroll(); // Callback is required for iOS
	});
  	return false;
  });
  $('a#projects-link').click(function(){
  	$('html, body').animate({
  		scrollTop:$('#projects').offset().top
  	}, 750, function() {
    	parallaxScroll(); // Callback is required for iOS
	});
  	return false;
  });
  $('a#about-link').click(function(){
  	$('html, body').animate({
  		scrollTop:$('#about').offset().top
  	}, 750, function() {
    	parallaxScroll(); // Callback is required for iOS
	});
  	return false;
  });  
})