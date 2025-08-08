( function (blocks, element, blockEditor, components ) {

	const { registerBlockType } = blocks
	const { MediaUpload, MediaUploadCheck, InspectorControls, PanelColorSettings, RichText } = blockEditor
	const { PanelBody, RangeControl, Button } = components
	const { createElement: el, Fragment } = element


	registerBlockType('hcsolutions/floating-banner', {
		apiVersion: 3,
		title: 'Floating Banner',
		icon: 'format-image',
		category: 'layout',
		keywords: ['banner', 'floating', 'image', 'section', 'gold'],
		supports: {
			html: false
		},
		attributes: {
			background_image: {
				type: 'object',
				default: null
			},
			header: {type: 'string', default: ''},
			subHeading: {type: 'string', default: ''},
			buttonText: {type: 'string', default: ''},
			buttonUrl: {type: 'string', default: ''},

		},
		edit: function ({ attributes, setAttributes }) {
			var background = attributes.background_image;

			var hasBackground = !!attributes.background_image;
			var background_url = '';

			if (hasBackground) {
				background_url = background.url;
			}


			return el(Fragment, null,
				el('div', {
					className: "cover-image-section floating-banner",
					style: {
						backgroundImage: `url("${background_url}")`
					}
				}, [
					el(MediaUploadCheck, null,
						el(MediaUpload, {
							onSelect: function (media) {
								setAttributes({ background_image: media });
							},
							allowedTypes: ['image'],
							value: attributes.background_image && attributes.background_image.id,
							render: function ({ open }) {
								return el(Button, {
									onClick: open,
									isSecondary: true,
									className: 'select-image-button'
								}, 'Select Background Image');
							}
						})
					),
					el('div', {
						className: "float-section",
					}, [
						el('div', { className: "gold-band"}),
						el(RichText, {
					        tagName: 'h3',
					        className: 'header',
					        value: attributes.header,
					        onChange: (val) => setAttributes({ header: val }),
					        placeholder: 'Add Header text…',
					      }),
						el(RichText, {
					        tagName: 'h4',
					        className: 'floating-subheading',
					        value: attributes.subHeading,
					        onChange: (val) => setAttributes({ subHeading: val }),
					        placeholder: 'Add subHeading text…',
					      }),
						el(RichText, {
					        tagName: 'p',
					        className: 'button-text',
					        value: attributes.buttonText,
					        onChange: (val) => setAttributes({ buttonText: val }),
					        placeholder: 'Add button text…',
					        allowedFormats: [ 'core/link' ]
					      }),

					])
				])
			);
		},
		save: function () {
			return null;
		}
	});
} )(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.components);