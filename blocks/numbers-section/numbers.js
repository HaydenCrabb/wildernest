if (window.wp && wp.blocks) {
	// In the block editor; do nothing
} else {

	window.addEventListener('load', function () {
		if (typeof jQuery === 'undefined' || typeof gsap === 'undefined') {
			return;
		}

		// Use $ safely
		const $ = jQuery;

		// Register ScrollTrigger if present
		if (typeof ScrollTrigger !== 'undefined' && gsap.registerPlugin) {
			gsap.registerPlugin(ScrollTrigger);
		}

		function formatWithCommas(n, dp) {
			const s = dp > 0 ? n.toFixed(dp) : Math.round(n).toString();
			return s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		}

		function parseNumberText(text) {
			const m = (text || '').trim().match(/^([^0-9\-+]*)([-+]?\d[\d,]*\.?\d*)(.*)$/);
			if (!m) return null;
			const prefix = m[1] || '';
			const numStr = m[2].replace(/,/g, '');
			const suffix = m[3] || '';
			const end = parseFloat(numStr);
			if (isNaN(end)) return null;
			return { prefix, end, suffix, decimals: (numStr.split('.')[1] || '').length };
		}

		function animateNumber($el, ms) {
			if ($el.data('animated')) return;
			$el.data('animated', true);

			// Use saved parsed data
			const parsed = $el.data('parsedNumber');
			if (!parsed) return;

			const { prefix, end, suffix, decimals } = parsed;

			function render(val) {
				$el.text(prefix + formatWithCommas(val, decimals) + suffix);
			}

			const obj = { v: 0 };
			gsap.to(obj, {
				v: end,
				duration: ms / 1000,
				ease: 'power4.out', // slows near the end
				onUpdate: function () { render(obj.v); },
				onComplete: function () { render(end); }
			});
		}

		function setupScrollTriggers() {
			$('.by-the-numbers-section .number').each(function () {
				const el = this;
				const $el = $(el);

				// Prevent double-binding
				if ($el.data('st-bound')) return;
				$el.data('st-bound', true);

				// Parse original number and save for later
				const p = parseNumberText($el.text());
				if (p) {
					$el.data('parsedNumber', p); // store the real number & formatting
					$el.text(p.prefix + '0' + p.suffix); // display starting 0
				}

				ScrollTrigger.create({
					trigger: el,
					start: 'top 85%',
					onEnter: function (self) {
						animateNumber($el, 1500);
						self.kill(); // run once
					}
				});
			});
		}

		setupScrollTriggers();

	});
}


