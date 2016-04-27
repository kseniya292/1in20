$(document).ready(function(){
	// alert("yea");

$("#navBtn").click(function(){
		$("nav").slideToggle();
		$(this).toggleClass("navActive"); 
	}); // click method


var imageHeight, textOverlayHeight, imageTop;

function centerText() {
	imageHeight = $(".showcase").height();
	textOverlayHeight = $(".textOverlay").height();
	imageTop = (imageHeight - textOverlayHeight)/4;
	$(".textOverlay").css({
		"top" : imageTop * 2.8
	}); //css
} // center text

$(window).resize(function () {
	centerText();
	}); //resize

centerText();


var windowHeight, overlayTextHeight, overlayTop;



function resizeOverlay() {
	windowHeight = $(window).height();
	$(".disclaimer-overlay").css({
		"height" : windowHeight + "px"
	}); //css

	overlayTextHeight = $(".disclaimer-overlay-text").height();
	overlayTop = (windowHeight-overlayTextHeight)/2;
	$(".disclaimer-overlay-text").css({
		"margin-top" : overlayTop + "px"
	}); //css
} //resizeOverlay

$(window).resize(function() {
	resizeOverlay();
}); //resize

resizeOverlay();



// function centerDisclaimer() {
// 	windowHeight = $(window).height();
// 	disclaimerTextHeight = $(".disclaimer-overlay-text").height();
// 	windowTop = (windowHeight - disclaimerTextHeight)/2;
// 	$(".disclaimer-overlay-text").css({
// 		"bottom" : windowTop
// 	}); //css


// $(window).resize(function () {
// 	centerDisclaimer();
// 	}); //resize

// } //center Disclaimer
// centerDisclaimer();




$(".read-story-button").click(function() {
	event.preventDefault();
	var storyLink = $(this).attr("href");
	$(".bigCTA").attr("href", storyLink);
	$(".disclaimer-overlay").show();
}); //click




}); //ready method end