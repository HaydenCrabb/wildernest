if (window.wp && wp.blocks) {
	// We're in editor; do nothing
} else {

	window.addEventListener('load', function () {
		if (typeof jQuery === 'undefined' || typeof gsap === 'undefined') {
			return;
		}

		ScrollTrigger.matchMedia({
			// Desktop
			"(min-width: 782px)": function () {
				$('.cover-image-section.floating-banner').each(function () {
					const $section = $(this);
					const $float = $section.find('.float-section');

					gsap.to($float, {
						y: () => $float.outerHeight() * 0.8, // slower, longer move
						ease: 'none',
						scrollTrigger: {
							trigger: $section[0],
							start: 'top bottom',
							end: 'bottom top',
							scrub: true
						}
					});
				});
			},

			// Mobile
			"(max-width: 781px)": function () {
				$('.cover-image-section.floating-banner').each(function () {
					const $section = $(this);
					const $float = $section.find('.float-section');

					gsap.to($float, {
						y: () => $float.outerHeight() * 0.3,
						ease: 'none',
						scrollTrigger: {
							trigger: $section[0],
							start: 'top 90%',
							end: 'bottom top',
							scrub: true
						}
					});
				});
			}
		});

	});
}