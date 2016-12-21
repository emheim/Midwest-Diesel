$(document).ready(function() {
	


	
	//Animate navigation bar//
	$('.nav').mouseenter(function() {
		$(this).animate({fontSize: '1.1em'}, 'fast');
	});
	$('.nav').mouseleave(function() {
		$(this).animate({fontSize: '1.0em'}, 'fast');
	});
	
	
	
	//Slideshows//
	var slideIndex = 0;
	showSlides();

	function showSlides() {
		var i;
		var slides = document.getElementsByClassName("mySlides");
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		slideIndex++;
		if (slideIndex > slides.length) {slideIndex = 1}
		slides[slideIndex-1].style.display = "block";
		setTimeout(showSlides, 3000);
	}

});




