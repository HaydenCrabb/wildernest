window.addEventListener('load', function () {
	if (typeof jQuery === 'undefined' || typeof gsap === 'undefined') {
		console.warn('jQuery or GSAP not loaded');
		return;
	}

	jQuery(function($) {
		let scrollAmount = $(window).width(); // 100vw in px
		const $gallery = $('.gallery-inner');
		let clicking_allowed = true;

		$('.scroll-button-container .right-button').on('click', function() {
			if (clicking_allowed) {
				clicking_allowed = false;
				$gallery.addClass('no-snap');
				gsap.to($gallery[0], {
					scrollLeft: $gallery[0].scrollLeft + scrollAmount,
					duration: 0.75,
					ease: "power4.inOut",
					onComplete: () => { 
						$gallery.removeClass('no-snap'); 
						clicking_allowed = true;
					}
				});
			}
		});

		$('.scroll-button-container .left-button').on('click', function() {
			if (clicking_allowed) {
				clicking_allowed = false;
				$gallery.addClass('no-snap');
				gsap.to($gallery[0], {
					scrollLeft: $gallery[0].scrollLeft - scrollAmount,
					duration: 0.75,
					ease: "power2.inOut",
					onComplete: () => { 
						$gallery.removeClass('no-snap');
						clicking_allowed = true;
					}
				});
			}
		});

		// Update on resize so 100vw stays correct
		$(window).on('resize', function() {
			scrollAmount = $(window).width();
		});
	});
});
