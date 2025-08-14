console.log("Registering cover Image");

( function (blocks, element, blockEditor, components ) {

	const { registerBlockType } = blocks
	const { MediaUpload, MediaUploadCheck, InspectorControls, PanelColorSettings, RichText, URLInput } = blockEditor
	const { PanelBody, PanelRow, ToggleControl, RangeControl, Button } = components
	const { createElement: el, Fragment } = element


	registerBlockType('hcsolutions/large-cover-image-with-text', {
		apiVersion: 3,
		title: 'Cover Image Section',
		icon: 'format-image',
		category: 'layout',
		keywords: ['hero', 'cover', 'background', 'image'],
		supports: {
			inserter: true
		},
		attributes: {
			background_image: {
				type: 'object',
				default: null
			},
			overlay_color: {
				type: 'string',
				default: '#000000'
			},
			overlay_opacity: {
				type: 'number',
				default: 0.15
			},
			header: {type: 'string', default: ''},
			paragraph: {type: 'string', default: ''},
			buttonText: {type: 'string', default: ''},
			buttonUrl: {type: 'string', default: ''},
			parrallax: {type: 'boolean', default: false},

		},
			edit: function ({ attributes, setAttributes }) {
			var background = attributes.background_image;
			const overlayColor = attributes.overlay_color ?? '#000000';
			const overlayOpacity = attributes.overlay_opacity ?? 0.15;

			var hasBackground = !!attributes.background_image;
			var parrallax = !!attributes.parrallax;
			var background_url = '';

			if (hasBackground) {
				background_url = background.url;
			}


			function renderBackgroundPreview(open, background_url, overlayOpacity, overlayColor) {
				return el('div', {
					className: 'wrapper',
					key: 'wrapper',
				}, [
					el('div', {
						className: 'inner-image-container',
						key: 'image-container',
						style: {
							backgroundImage: `url("${background_url}")`
						}
					}, [
						el('div', {
							className: 'cover-opacity',
							key: 'overlay',
							style: {
								backgroundColor: overlayColor,
								opacity: overlayOpacity
							}
						}),
						el('div', {
							className: 'text-container max-width center-aligned',
							key: 'text-container',
						}, [
							el(RichText, {
						        tagName: 'h2',
						        className: 'cover-header',
						        key: 'header',
						        value: attributes.header,
						        onChange: (val) => setAttributes({ header: val }),
						        placeholder: 'Add Header text…',
						      }),
							el(RichText, {
						        tagName: 'p',
						        className: 'cover-paragraph',
						        key: 'paragraph',
						        value: attributes.paragraph,
						        onChange: (val) => setAttributes({ paragraph: val }),
						        placeholder: 'Add paragraph text… or leave blank for no text.',
						      }),
							el('div', {
								className: 'cover-button',
								key: 'cover-button-container',
							}, [
								el(RichText, {
									tagName: 'span',
									className: 'cover-button-text',
									value: attributes.buttonText,
									key: 'buttonText',
									onChange: (val) => setAttributes({ buttonText: val }),
									placeholder: 'Add Button Text…',
								}),
								el(URLInput, {
									value: attributes.buttonUrl,
									key: 'buttonURL',
									onChange: (val) => setAttributes({ buttonUrl: val }),
								})
							])
						])
					]),
					el(Button, {
						onClick: open,
						isSecondary: true,
						key: 'change-bg-btn',
						className: 'select-image-button'
					}, 'Change Background Image')
				]);
			}

			function renderSelectButton(open) {
				return el(Button, {
					onClick: open,
					isSecondary: true,
					className: 'select-image-button'
				}, 'Select Background Image');
			}

			return el(Fragment, null,
				el(InspectorControls, null,
					el(PanelBody, { title: 'Overlay Settings', initialOpen: true },
						el(RangeControl, {
							label: 'Overlay Opacity',
							value: overlayOpacity,
							onChange: (value) => setAttributes({ overlay_opacity: value }),
							min: 0,
							max: 1,
							step: 0.01
						})
					),
					el(PanelColorSettings, {
						title: 'Overlay Color',
						colorSettings: [{
							label: 'Overlay Color',
							value: overlayColor,
							onChange: (color) => setAttributes({ overlay_color: color })
						}]
					}),
					el(PanelRow, {},
						el(ToggleControl, {
							label: 'Make Parrallax?',
							checked: !!parrallax,
							onChange: function (val) {
								setAttributes({ parrallax: !!val });
							},
							help: 'Toggle the background image to have parrallax styling',
						})
					)
				),
				el('div', { className: 'cover-image-section', key: 'section' },
					el(MediaUploadCheck, null,
						el(MediaUpload, {
							onSelect: function (media) {
								setAttributes({ background_image: media });
							},
							allowedTypes: ['image'],
							value: attributes.background_image && attributes.background_image.id,
							key: 'media-upload',
							render: function ({ open }) {
								return renderBackgroundPreview(open, background_url, overlayOpacity, overlayColor);
							}
						})
					)
				)
			);
		},
		save: function () {
			return null;
		}
	});
} )(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.components);