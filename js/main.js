$(document).ready(function(){
	// alert("yea");


var imageHeight, textOverlayHeight, imageTop;

function centerText() {
	imageHeight = $(".showcase").height();
	textOverlayHeight = $(".textOverlay").height();
	imageTop = (imageHeight - textOverlayHeight)/3;
	$(".textOverlay").css({
		"top" : imageTop * 2
	}); //css
} // center text

$(window).resize(function () {
	centerText();
	}); //resize

centerText();




}); //ready method end