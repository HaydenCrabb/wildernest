( function (blocks, element, blockEditor, components ) {
	// actual block code. 
	const { registerBlockType } = blocks;
	const { createElement: el, Fragment } = element
	const { MediaUpload, MediaUploadCheck, RichText, InspectorControls, PanelColorSettings, InnerBlocks } = blockEditor;
	const { Button, PanelBody } = components;

	blocks.registerBlockType('hcsolutions/textured-text-section', {
		title: 'textured-text Section',
		icon: "columns",
		category: 'layout',
		attributes: {
		  overlayColor: {type: 'string', default: '#494D3D'},
		},
		edit: function (props) {
		    const { attributes, setAttributes } = props;

		    const headerText = attributes.headerText ?? '';
		    const bodyText = attributes.bodyText ?? '';
		    const overlayColor = attributes.overlayColor ?? '#494D3D';

		    return el(Fragment, null, 
		    	el(InspectorControls, null,
					el(PanelBody, { title: 'Overlay Settings', initialOpen: true },
					),
					el(PanelColorSettings, {
						title: 'Overlay Color',
						colorSettings: [{
							label: 'Overlay Color',
							value: overlayColor,
							onChange: (color) => setAttributes({ overlayColor: color })
						}]
					})
				),
		    	el('div', { 
		    		className: 'textured-text-section',
		    		key: 'textured-text-section',
		    	}, [
		    		el('div', {
						className: 'background-pattern',
						key: 'background-patter',
						style: {
							backgroundImage: 'url("https://sld.tid.temporary.site/website_c268a004/wp-content/uploads/2025/07/background-pattern-smaller.webp")'
						}
					}, [
						el('div', {
							className: 'textured-overlay',
							key: 'textured-overlay',
							style: {
								backgroundColor: overlayColor
							}
						}),
						el('div', { 
							className: 'textured-text-container max-width center-aligned',
							key: 'textured-text-container',
						}, 
							el(InnerBlocks, {
								key: 'inner-blocks',
								allowedBlocks: ['core/paragraph', 'core/heading', 'hcsolutions/button'],
								template: [
								],
								templateLock: false,
							})
						)
					])
		    	]),
		   	);
		},
		save: function (props) {
			const { overlayColor = '#494D3D' } = props.attributes;
			const bgUrl = 'https://sld.tid.temporary.site/website_c268a004/wp-content/uploads/2025/07/background-pattern-smaller.webp';

			return el(
				'div',
				{ className: 'textured-text-section alignfull' },
				el(
					'div',
					{
						className: 'background-pattern',
						style: { backgroundImage: 'url("' + bgUrl + '")' }
					},
					el('div', { className: 'gold-band' }),
					el('div', {
						className: 'textured-overlay',
						style: { backgroundColor: overlayColor }
					}),
					el(
						'div',
						{ className: 'textured-text-container max-width center-aligned' },
						wp.blockEditor.InnerBlocks.Content()
					)
				)
			);
		}
	});

	//End actual block code. 
} )(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.components);
