(function (blocks, element, blockEditor) {
	const { registerBlockType } = blocks;
	const { createElement: el, Fragment } = element;
	const { useBlockProps, useInnerBlocksProps, InnerBlocks } = blockEditor;

	registerBlockType('hcsolutions/scrolling-block-section', {
		title: 'scrolling-block Section',
		icon: 'columns',
		category: 'layout',
		supports: { html: false },

		edit: function () {
			const blockProps = useBlockProps({ className: 'scrolling-block-section alignfull' });
			const innerBlocksProps = useInnerBlocksProps(
				{ className: 'scrolling-track' },
				{
					allowedBlocks: ['hcsolutions/scroll-item'],
					template: [],
					templateLock: false
				}
			);

			return el(Fragment, null,
				el('div', blockProps,
					el('div', { className: 'background-pattern' },
						el('div', { className: 'scrolling-block-container' },
							el('div', innerBlocksProps) // scrolling-track with inner blocks handled
						)
					)
				)
			);
		},

		save: function () {
			const blockProps = blockEditor.useBlockProps.save({ className: 'scrolling-block-section alignfull' });
			const innerBlocksProps = blockEditor.useInnerBlocksProps.save(
				{ className: 'scrolling-track' }
			);

			return el('div', blockProps,
				el('div', { className: 'background-pattern' },
					el('div', { className: 'scrolling-block-container' },
						el('div', innerBlocksProps)
					)
				)
			);
		}
	});
})(window.wp.blocks, window.wp.element, window.wp.blockEditor);
