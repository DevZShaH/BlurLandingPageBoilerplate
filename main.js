//METHOD TO SCROLL ANIMATIONS================================================================================================================
$(document).ready(function() {
	AOS.init({
		duration: 1200, // values from 0 to 3000, with step 50ms
		easing: 'ease',
		anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation
	});
});
