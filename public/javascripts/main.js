$(function () {
	initializeComponents();
	showAboutMe();
	hideAboutMe();
	activateScrollFire();
	activateSideNav();
	activateInfoPanel();
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
		features: ['playpause', 'volume', 'progress'],
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

function activateScrollFire() {
	var options = [
		{
			selector: '#header', offset: 0, callback: function () {
			$('.slide-indicator').removeClass('visible');
		}
		},
		{
			selector: '#discography', offset: 1, callback: function () {
			$('.slide-indicator').addClass('visible');
		}
		}
	];
	Materialize.scrollFire(options);
}

function activateSideNav() {
	$('.button-collapse').sideNav({
			closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
		}
	);
}

function activateInfoPanel() {
	$('#news').on('click', function () {
		iziToast.show({
			color: 'dark',
			title: '<b>News</b>',
			message: '<br>' +
			'<b>Abril</b><br>' +
			'Dia 27, Jam Session con grandes figuras internacionales.<br>' +
			'Lugar: El Tablao, San Rafael y Prado.<br>' +
			'<br>' +
			'Dia 30, Concierto International Jazz Day.<br>' +
			'Lugar: El Gran Teatro de La Habana.<br>' +
			'Emilio Martini, Iván Lins, Marcus Miller, A Bu y Till Bronner etc.<br>' +
			'<br>' +
			'<b>Mayo</b><br>' +
			'De 11 a 21, Cubadisco 2017.<br>' +
			'Dia 11, Conferencia de Prensa del nuevo álbum: "Notas al viento".<br>' +
			'Dia 14, Concierto presentado el álbum "Notas al viento", Casa del ALBA cultural.<br>' +
			'<br>' +
			'<b>Nos puede contactar para concierto privado, con mucho gusto le atenderemos.</b>',
			image: '/images/assets/slogan-jazz-day-es.png',
			timeout: 60000,
			position: 'bottomCenter', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
			progressBarColor: 'rgb(0, 255, 184)',
		});
	})
}
