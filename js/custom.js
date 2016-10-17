$(document).ready(function(){
	$(document).on('click', '.close-nav', function(){
		$('button.navbar-toggle').trigger('click');
	});

	$(document).on('click', '#navbar li:not(.close-nav):not(.active)', function(){
		// $('#navbar li.active').find('span').removeClass('navbar-box').addClass('navbar-underscore');
		$('#navbar li.active').removeClass('active');
		$(this).addClass('active');
	//	$(this).find('span').addClass('navbar-box').removeClass('navbar-underscore');
	});
});



$(document).ready(function() {

  var owl = $("#three-biz");
//
//  owl.owlCarousel({
//	  autoPlay: 2000,
//	  loop: false,
//	  center: true,
//	  rewind: true,
//	  nav:false,
//	  dots: false,
//	  dotsEach: false,
//	  dotData: false,
//	  pagination:false,
//      itemsCustom:[[0,1],[450,1],[700,2],[1000,3]]
//
//  });

  owl.owlCarousel({
	    items:3,
	    center: true,
	    nav:false,
	    pagination:false,
	    loop:true,
	    autoplay:true,
	    autoplayTimeout:1000,
	    autoplayHoverPause:false,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        700:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});

});

