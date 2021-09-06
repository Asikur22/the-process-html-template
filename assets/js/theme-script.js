jQuery(document).ready(function($) {
	// Testimonial Slider
	$(".testimonial .owl-carousel").owlCarousel({
		loop: true,
		dots: true,
		margin: 30,
		items: 3
	});

	// Client Slider
	$(".client-slider .owl-carousel").owlCarousel({
		loop: true,
		margin: 30,
		items: 10
	});
});