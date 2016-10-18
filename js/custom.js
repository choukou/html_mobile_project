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

function initMap() {
	var uluru = {lat: 35.689487, lng: 139.691706};
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 4,
	  center: uluru
	});
	var marker = new google.maps.Marker({
	  position: uluru,
	  map: map
	});
}
