if (window.wp && wp.blocks) {
	// In the block editor; do nothing
} else {

	function updateParallaxOverscan() {
		const travel = Math.round(window.innerHeight * 0.2); // same 20% you animate
		gsap.utils.toArray('.parrallax').forEach(function(el) {
			// match overscan to travel so edges never show
			el.style.inset = `-${travel}px -10vw -${travel}px -10vw`;
			// optional: ensure centering
			// el.style.backgroundPosition = 'center';
		});
	}

	window.addEventListener('load', function () {
		// Make sure GSAP & ScrollTrigger are available
		if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
			return;
		}

		// Do initial overscan sizing and attach refresh hooks
		updateParallaxOverscan();
		ScrollTrigger.addEventListener('refreshInit', updateParallaxOverscan);

		// Keep in sync on resize/orientation change
		window.addEventListener('resize', function () {
			updateParallaxOverscan();
			ScrollTrigger.refresh();
		});

		// Create the parallax animations
		gsap.utils.toArray('.parrallax').forEach(function (el) {
			gsap.to(el, {
				y: () => -window.innerHeight * 0.2,
				ease: "power2.inOut",
				scrollTrigger: {
					trigger: el,
					start: "top bottom",
					end: "bottom top",
					scrub: 0.5,
					invalidateOnRefresh: true
				}
			});
		});

		// Make sure all triggers recalc after setup
		ScrollTrigger.refresh();
	});
}