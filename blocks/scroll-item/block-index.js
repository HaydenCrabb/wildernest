( function (blocks, element, blockEditor, components ) {
	// actual block code. 
	const { registerBlockType } = blocks;
	const { createElement: el, Fragment } = element
	const { PanelBody, Button } = components
	const { RichText, InspectorControls, URLInput, MediaUpload, MediaUploadCheck } = blockEditor

	blocks.registerBlockType('hcsolutions/scroll-item', {
		title: 'Scroll Item',
		icon: "button",
		category: 'design',
		attributes: {
		  mainImage: { type: 'object', default: null },
		  description: {type: 'string', default: ''}
		},
		edit: function (props) {
		    const { attributes, setAttributes } = props;

		    const mainImage = attributes.mainImage ?? null;
		    const buttonUrl = attributes.description ?? '';

		    return el(Fragment, null,
		    	el('div', {
		    		className: "scroll-item-container"
		    	}, [
		    		el(MediaUploadCheck, {key: "media-check"},
						el(MediaUpload, {
							onSelect: function (media) {
								setAttributes({ mainImage: media });
							},
							allowedTypes: ['image'],
							key: "media-uploader",
							value: attributes.mainImage && attributes.mainImage.id,
							render: function ({ open }) {
								return attributes.mainImage?.url
									? el('img', {
										className: "scroll-item-image",
										key: 'scroll-item-image',
										src: attributes.mainImage.url,
										onClick: open,
										title: "Click to replace image",
										role: "button"
									})
									: el(Button, {
										key: 'button',
										onClick: open,
										variant: 'primary',
										isSecondary: true
									}, 'Select Image');
							}
						})
					),
					el(RichText, {
						tagName: 'h4',
						className: "scroll-item-description",
						key: "scroll-item-description",
						value: attributes.description,
				        onChange: (val) => setAttributes({ description: val }),
				        placeholder: 'Add 2-3 word Description',
					})
		    	])
		    );
		},
		save: function () {
			return null; // server-rendered by PHP
		}
	});

	//End actual block code. 
} )(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.components);
