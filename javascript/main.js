// JavaScript Document

//Scrolling
$(document).ready(function(){
  $("body").on("scroll", "#home", scrollToGallery);
  $("body").on("scroll", "#gallery", scrollToHome);
});

scrollToHome = () => {
	$('html, body').animate({
		scrollTop: $("#home").offset().top
	}, 500);
}

scrollToGallery = () => {
	$('html, body').animate({
		scrollTop: $("#gallery").offset().top
	}, 500);
}

var count = 0;
$(window).on('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0 && count == 1) {
		if($(document).scrollTop() <= 1034) {
			$("#gallery").trigger("scroll");
			$("body").off("scroll", "#gallery", scrollToHome);
			$("body").on("scroll", "#home", scrollToGallery);
			count = 0;
		}
    } else if (event.originalEvent.wheelDelta < 0 && count == 0) {
		$("#home").trigger("scroll");
		$("body").off("scroll", "#home", scrollToGallery);
		$("body").on("scroll", "#gallery", scrollToHome);
		count = 1;
    }
});

//Open Photo Modal
openPhoto = (event, photo) => {
	var photoModal = document.getElementById("photoModal");
	var photoImage = document.getElementById("photoImage");
	var photoTitle = document.getElementById("photoTitle");
	var photoYear = document.getElementById("photoYear");
	var photoDetail = document.getElementById("photoDetail");
	var photoTitleInput = photo.getAttribute("data-title");
	var photoYearInput = photo.getAttribute("data-year");
	var photoDetailInput = photo.getAttribute("data-detail");
	photoModal.style.display = "block";
	photoImage.src = event.target.src;
	photoTitle.innerHTML = photoTitleInput;
	photoYear.innerHTML = photoYearInput;
	photoDetail.innerHTML = photoDetailInput;
}

//Close Photo Modal
closePhoto = () => {
	photoModal.style.display = "none";
}

//Open Menu
var menu = document.getElementById("menu");
openMenu = () => {
	menu.style.transform = "translateX(0%)";
}

closeMenu = () => {
	menu.style.transform = "translateX(-100%)";
}

