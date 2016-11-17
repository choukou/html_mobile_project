$(document).ready(function(){
	$(window).on('resize', function() {
//		fixHeightByImg('#content6, #content7');
	});
//	fixHeightByImg('#content6, #content7');
});

//extend for jquery
//$.fn.extend({
//	showToolTipHand: function(selector){
//
//	}
//});

function fixHeightByImg(selector) {
	$(selector).each(function(){
		var img = $(this).find('img');
		$(this).height(img.height());
	});

}