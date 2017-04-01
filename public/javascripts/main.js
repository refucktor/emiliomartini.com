$(function () {
	initializeComponents();
	showAboutMe();
	hideAboutMe();
	activateScrollFire();
});

/**
 * Initialize Material Design components.
 */
function initializeComponents() {
	$('.parallax').parallax();
	$('.scrollspy').scrollSpy({scrollOffset: 0});
	$('.full-carousel.carousel').carousel({full_width: true});
	$('.events-content.carousel').carousel({full_width: true});
    $('.audio-player').mediaelementplayer({
        alwaysShowControls: true,
        features: ['playpause','volume','progress'],
        audioVolume: 'horizontal',
        audioWidth: 400,
        audioHeight: 120
    });
}

/**
 * Click on About Me link in the main page.
 */
function showAboutMe() {
	$('.about-me-link').click(function () {
		$(".about-me-panel").removeClass("hided").removeClass("hiding").addClass("visible");
	});
}

/**
 * Click event on Go Home in About Me page.
 */
function hideAboutMe() {
	$('.go-home-link').click(function () {
		$(".about-me-panel").removeClass('visible').addClass("hiding");
	})
}

function activateScrollFire(){
	var options = [
		{selector: '#header', offset: 0, callback: function(){
			$('.slide-indicator').removeClass('visible');
		}},
		{selector: '#discography', offset: 1, callback: function(){
			$('.slide-indicator').addClass('visible');
		}}
	];
	Materialize.scrollFire(options);
}
