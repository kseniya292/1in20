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

currentSet = 0;

	// i'm bundling the show functionality here so we can reuse it every time we want to show a new block
	function showContentSet(targetSet) {
		$(".expand:eq(" + targetSet + ")").slideToggle(1000);
		currentSet++;
	} // showContentSet

	// turn on first set immediately
	showContentSet(currentSet);

	// click on the link to show the next set
	$(".pagination-link").click(function(event) {
		// since the click is coming from an empty anchor href, we need to prevent the default behavior of the browser
		// allowing it to handle the custom event response
		event.preventDefault();
		showContentSet(currentSet);
	}); // click


}); //ready method end