window.addEventListener('load', function () {
	if (typeof jQuery === 'undefined' || typeof gsap === 'undefined') {
		console.warn('jQuery or GSAP not loaded');
		return;
	}

	function closeAllOthers($faqItems, $excludeItem = null) {
		$faqItems.each(function () {
			const $item = $(this);
			const $answer = $item.find('.answer-body');
			const $question = $item.find('.faq-header');

			// Skip the excluded item
			if ($excludeItem && $item.is($excludeItem)) {
				return;
			}

			if ($question.hasClass('open-header')) {
				$question.removeClass('open-header');
			}

			if ($answer.hasClass('open')) {
				$answer.removeClass('open');
				gsap.to($answer, {
					height: 0,
					duration: 0.4,
					ease: 'power2.inOut'
				});
			}
		});
	}


	jQuery(function ($) {
		const $faqItems = $('.faq-item');
		const $body = $('.faq-textured-overlay');
		const $faqBlock = $('.faq-block');

		$faqItems.each(function () {
			const $item = $(this);
			const $question = $item.find('.faq-header');
			const $answer = $item.find('.answer-body');

			// Initially collapse all
			gsap.set($answer, { height: 0, overflow: 'hidden' });

			$question.on('click', function (e) {
				e.stopPropagation()
				const isCurrentlyOpen = $answer.hasClass('open');

				closeAllOthers($faqItems);

				// If this one was not open, open it now
				if (!isCurrentlyOpen) {
					$answer.addClass('open');
					$question.addClass('open-header');

					// Temporarily set to auto to measure full height
					const fullHeight = $answer.get(0).scrollHeight;

					gsap.fromTo(
						$answer,
						{ height: 0 },
						{
							height: fullHeight,
							duration: 0.4,
							ease: 'power2.inOut',
							onComplete: () => {
								gsap.set($answer, { height: 'auto' }); // Reset to auto so future content adjusts
							}
						}
					);
				}
			});
		});

		$body.on('click', function () {
			closeAllOthers($faqItems)
		});

		$faqBlock.on('click', function () {
			closeAllOthers($faqItems)
		})

	});

});