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
		"top" : imageTop * 3.5
	}); //css
} // center text

$(window).resize(function () {
	centerText();
	}); //resize

centerText();


}); //ready method end