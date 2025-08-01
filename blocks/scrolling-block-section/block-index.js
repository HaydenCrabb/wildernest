( function (blocks, element, blockEditor, components ) {
	// actual block code. 
	const { registerBlockType } = blocks;
	const { createElement: el, Fragment } = element
	const { MediaUpload, MediaUploadCheck, RichText, InspectorControls, PanelColorSettings } = blockEditor;
	const { Button, PanelBody } = components;
	const InnerBlocks = blockEditor.InnerBlocks;

	blocks.registerBlockType('hcsolutions/scrolling-block-section', {
		title: 'scrolling-block Section',
		icon: {
		  src: wp.element.createElement(
		    'svg',
		    {
		      xmlns: 'http://www.w3.org/2000/svg',
		      viewBox: '0 0 135.266 67.633',
		    },
		    // Group and inner rects + paths
		    wp.element.createElement('g', null,
		      wp.element.createElement('rect', {
		        x: '1',
		        y: '1',
		        width: '65.633',
		        height: '65.633',
		        rx: '5.498',
		        ry: '5.498',
		        fill: '#fff'
		      }),
		      wp.element.createElement('path', {
		        d: 'M61.135,2c2.48,0,4.498,2.018,4.498,4.498V61.135c0,2.48-2.018,4.498-4.498,4.498H6.498c-2.48,0-4.498-2.018-4.498-4.498V6.498c0-2.48,2.018-4.498,4.498-4.498H61.135m0-2H6.498C2.909,0,0,2.909,0,6.498V61.135c0,3.589,2.909,6.498,6.498,6.498H61.135c3.589,0,6.498-2.909,6.498-6.498V6.498c0-3.589-2.909-6.498-6.498-6.498h0Z',
		        fill: '#444'
		      })
		    ),
		    wp.element.createElement('rect', {
		      x: '67.633',
		      y: '0',
		      width: '67.633',
		      height: '67.633',
		      rx: '6.498',
		      ry: '6.498',
		      fill: '#444'
		    }),
		    wp.element.createElement('path', {
		      d: 'M90.119,31.499c-.531,0-.945,.205-1.242,.615s-.445,1.018-.445,1.822c0,.719,.148,1.281,.445,1.688s.707,.609,1.23,.609c.688,0,1.189-.309,1.506-.926v-2.912c-.324-.598-.822-.896-1.494-.896Z',
		      fill: 'none'
		    }),
		    wp.element.createElement('path', {
		      d: 'M55.431,31.47c-.438,0-.805,.159-1.102,.478s-.48,.765-.551,1.339h3.176v-.082c-.031-.551-.18-.978-.445-1.28s-.625-.454-1.078-.454Z',
		      fill: 'none'
		    }),
		    wp.element.createElement('path', {
		      d: 'M48.675,31.499c-.531,0-.945,.205-1.242,.615s-.445,1.018-.445,1.822c0,.719,.148,1.281,.445,1.688s.707,.609,1.23,.609c.688,0,1.189-.309,1.506-.926v-2.912c-.324-.598-.822-.896-1.494-.896Z',
		      fill: 'none'
		    }),
		    wp.element.createElement('path', {
		      d: 'M64.888,31.499c-.715,0-1.229,.332-1.541,.996v2.742c.332,.664,.85,.996,1.553,.996,.52,0,.924-.201,1.213-.604s.434-1.008,.434-1.816c0-.738-.143-1.309-.428-1.711s-.695-.604-1.23-.604Z',
		      fill: 'none'
		    }),
		    wp.element.createElement('path', {
		      d: 'M96.875,31.47c-.438,0-.805,.159-1.102,.478s-.48,.765-.551,1.339h3.176v-.082c-.031-.551-.18-.978-.445-1.28s-.625-.454-1.078-.454Z',
		      fill: 'none'
		    })
		  )
		},
		category: 'layout',
		attributes: {
		  headerText: { type: 'string', default: '' },
		  bodyText: { type: 'string', default: '' },
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
		    		className: 'scrolling-block-section'
		    	}, [
		    		el('div', {
						className: 'background-pattern',
						style: {
							backgroundImage: 'url("https://sld.tid.temporary.site/website_c268a004/wp-content/uploads/2025/07/background-pattern-smaller.webp")'
						}
					}, [
						el('div', {
							className: 'textured-overlay',
							style: {
								backgroundColor: overlayColor
							}
						}),
						el('div', { 
							className: 'scrolling-block-container max-width center-aligned'
						}, [

							el(RichText, {
								tagName: 'h2',
								className: 'header-text',
								value: attributes.headerText,
								onChange: (val) => setAttributes({ headerText: val }),
								placeholder: 'Add Header…',
							}),
							el(RichText, {
								tagName: 'div',
								className: 'body-text',
								value: attributes.bodyText,
								onChange: (val) => setAttributes({ bodyText: val }),
								placeholder: 'Add body paragraph...',
							})
						])
					])
		    	]),
		   	);
		},
		save: function () {
			return null; // server-rendered by PHP
		}
	});

	//End actual block code. 
} )(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.components);
