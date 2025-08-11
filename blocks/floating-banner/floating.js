if (window.wp && wp.blocks) {
	// We're in editor; do nothing
} else {

	window.addEventListener('load', function () {
		if (typeof jQuery === 'undefined' || typeof gsap === 'undefined') {
			return;
		}

		// Target each floating banner on the page
		$('.cover-image-section.floating-banner').each(function() {
			const $section = $(this);
			const $float = $section.find('.float-section');

			// Animate the float-section to move slower than scroll
			gsap.to($float, {
				y: () => {
					// Move down by 50% of its own height (adjust for desired speed)
					return $float.outerHeight() * 0.8;
				},
				ease: 'none', // linear motion
				scrollTrigger: {
					trigger: $section[0],
					start: 'top bottom',   // when section enters viewport
					end: 'bottom top',     // when section leaves viewport
					scrub: true            // link animation to scroll
				}
			});
		});
	});
}