( function (blocks, element, blockEditor, components ) {
	// actual block code. 
	const { registerBlockType } = blocks;
	const { createElement: el, Fragment } = element
	const { PanelBody, Button } = components
	const { RichText, InspectorControls, URLInput } = blockEditor

	blocks.registerBlockType('hcsolutions/button', {
		title: 'Wildernest Button',
		icon: "button",
		category: 'layout',
		attributes: {
		  buttonText: { type: 'string', default: '' },
		  buttonUrl: {type: 'string', default: ''}
		},
		edit: function (props) {
		    const { attributes, setAttributes } = props;

		    const buttonText = attributes.buttonText ?? '';
		    const buttonUrl = attributes.buttonUrl ?? '';

		    return el(Fragment, null,
		    	el(InspectorControls, null,
					el(PanelBody, { title: 'Link Destination', initialOpen: true },
						el(URLInput, {
							label: 'Button URL',
							value: buttonUrl,
							onChange: (value) => setAttributes({ buttonUrl: value }),
							placeholder: 'https://example.com'
						})
					)
				),
		    	el('div', {
			    		className: "button-container",
			    	},
			    	el('div', {
			    			className: "hcsolutions-button",
			    		},
			    		el(RichText, {
			    			tagName: 'span', // more reliable than 'div' for inline content
							className: 'button-text',
			    			value: buttonText,
			    			onChange: (val) => setAttributes({ buttonText: val }),
							placeholder: 'Add button text…',
							allowedFormats: []
			    		},)
			    	)
			    )
		    );
		},
		save: function () {
			return null; // server-rendered by PHP
		}
	});

	//End actual block code. 
} )(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.components);
