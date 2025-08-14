// Scrolling track: seamless infinite marquee using GSAP + jQuery
if (window.wp && wp.blocks) {
	// In the editor; do nothing
} else {
	window.addEventListener('load', function () {
		// REQUIRED: verify libs *after* window load
		if (typeof jQuery === 'undefined' || typeof gsap === 'undefined') {
			return;
		}

		jQuery(function ($) {
			const SPEED_PX_PER_SEC = 45; // adjust speed

			function initScroller($container) {
				const $track = $container.find('.scrolling-track').first();
				if (!$track.length) return;

				// Kill any previous animation and remove prior clones
				gsap.killTweensOf($track.get(0));
				$track.find('.__clone').remove();

				// Ensure items don't shrink in flex layouts
				$track.css({ display: 'flex', flexWrap: 'nowrap', willChange: 'transform' });
				$track.children().css('flex', '0 0 auto');

				// Width of original set (exclude clones)
				function measureOriginalWidth() {
					let total = 0;
					$track.children(':not(.__clone)').each(function () {
						total += $(this).outerWidth(true);
					});
					return Math.round(total);
				}

				// Duplicate original children until we cover ~2x container width
				function duplicateUntilWide() {
					const containerWidth = $container.outerWidth();
					const minNeeded = containerWidth * 2 + 50; // small buffer
					let safety = 0;
					while ($track.outerWidth(true) < minNeeded && safety < 12) {
						$track.children(':not(.__clone)')
							.clone(true)
							.addClass('__clone')
							.appendTo($track);
						safety++;
					}
					// Ensure at least one clone set exists for the wrap
					if (!$track.children('.__clone').length) {
						$track.children()
							.clone(true)
							.addClass('__clone')
							.appendTo($track);
					}
				}

				function start() {
					duplicateUntilWide();

					const originalWidth = measureOriginalWidth();
					if (!originalWidth) {
						// In rare cases (fonts/layout settling) try again next tick
						setTimeout(start, 50);
						return;
					}

					const duration = originalWidth / SPEED_PX_PER_SEC;

					gsap.set($track, { x: 0 });
					gsap.to($track, {
						x: -originalWidth,
						duration: duration,
						ease: 'none',
						repeat: -1,
						onRepeat: function () {
							// Seamless reset: clones follow originals
							gsap.set($track, { x: 0 });
						}
					});
				}

				start();
			}

			function initAll() {
				$('.scrolling-block-container').each(function () {
					initScroller($(this));
				});
			}

			// Run once now (we're already in window.load), and rebuild on resize (debounced)
			initAll();

			let resizeTimer = null;
			$(window).on('resize', function () {
				clearTimeout(resizeTimer);
				resizeTimer = setTimeout(initAll, 200);
			});

			// // Optional: pause on hover
			// $(document)
			// 	.on('mouseenter', '.scrolling-block-container', function () {
			// 		const el = $(this).find('.scrolling-track').get(0);
			// 		gsap.getTweensOf(el).forEach(function (tw) { tw.pause(); });
			// 	})
			// 	.on('mouseleave', '.scrolling-block-container', function () {
			// 		const el = $(this).find('.scrolling-track').get(0);
			// 		gsap.getTweensOf(el).forEach(function (tw) { tw.resume(); });
			// 	});
		});
	});
}

