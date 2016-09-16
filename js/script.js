$(document).ready(function() {
	
	//highlight the pictures//
	$("#jumbotron").mouseenter(function() {
		$(this).addClass('highlighted');
	});
	$("#jumbotron").mouseleave(function() {
		$(this).removeClass('highlighted');
	});
	
	//Bold the company logo//
	$('#logo').mouseenter(function() {
		$(this).fadeTo('fast', 0.9);
	});
	$('#logo').mouseleave(function() {
		$(this).fadeTo('fast', 0.5);
	});
	
	//Bold the shingle logos//
	$('#shingle').mouseenter(function() {
		$(this).fadeTo('fast', 0.9);
	});
	$('#shingle').mouseleave(function() {
		$(this).fadeTo('fast', 0.5);
	});
	
	//Animate navigation bar//
	$('.nav').mouseenter(function() {
		$(this).animate({fontSize: '1.1em'}, 'fast')
	});
	$('.nav').mouseleave(function() {
		$(this).animate({fontSize: '1.0em'}, 'fast')
	});
	
	//Accordion//
	$(function() {
		$('#warrantyacc').accordion();
	});
	
	//Trailer Slideshow//
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




