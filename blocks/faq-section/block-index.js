( function (blocks, element, blockEditor, components ) {
	// actual block code. 
	const { registerBlockType } = blocks;
	const { createElement: el, Fragment } = element
	const { MediaUpload, MediaUploadCheck, RichText, InspectorControls, PanelColorSettings, InnerBlocks } = blockEditor;
	const { Button, PanelBody } = components;

	blocks.registerBlockType('hcsolutions/faq-section', {
		title: 'Frequently Asked Questions',
		keywords: ['Frequently', 'Asked', 'Questions', 'FAQ'],
		icon: {
		  src: el(
		    'svg',
		    {
		      xmlns: 'http://www.w3.org/2000/svg',
		      viewBox: '0 0 135.266 67.633',
		    },
		    // Group and inner rects + paths
		    el('g', null,
		      el('rect', {
		        x: '1',
		        y: '1',
		        width: '65.633',
		        height: '65.633',
		        rx: '5.498',
		        ry: '5.498',
		        fill: '#fff'
		      }),
		      el('path', {
		        d: 'M61.135,2c2.48,0,4.498,2.018,4.498,4.498V61.135c0,2.48-2.018,4.498-4.498,4.498H6.498c-2.48,0-4.498-2.018-4.498-4.498V6.498c0-2.48,2.018-4.498,4.498-4.498H61.135m0-2H6.498C2.909,0,0,2.909,0,6.498V61.135c0,3.589,2.909,6.498,6.498,6.498H61.135c3.589,0,6.498-2.909,6.498-6.498V6.498c0-3.589-2.909-6.498-6.498-6.498h0Z',
		        fill: '#444'
		      })
		    ),
		    el('rect', {
		      x: '67.633',
		      y: '0',
		      width: '67.633',
		      height: '67.633',
		      rx: '6.498',
		      ry: '6.498',
		      fill: '#444'
		    }),
		    el('path', {
		      d: 'M90.119,31.499c-.531,0-.945,.205-1.242,.615s-.445,1.018-.445,1.822c0,.719,.148,1.281,.445,1.688s.707,.609,1.23,.609c.688,0,1.189-.309,1.506-.926v-2.912c-.324-.598-.822-.896-1.494-.896Z',
		      fill: 'none'
		    }),
		    el('path', {
		      d: 'M55.431,31.47c-.438,0-.805,.159-1.102,.478s-.48,.765-.551,1.339h3.176v-.082c-.031-.551-.18-.978-.445-1.28s-.625-.454-1.078-.454Z',
		      fill: 'none'
		    }),
		    el('path', {
		      d: 'M48.675,31.499c-.531,0-.945,.205-1.242,.615s-.445,1.018-.445,1.822c0,.719,.148,1.281,.445,1.688s.707,.609,1.23,.609c.688,0,1.189-.309,1.506-.926v-2.912c-.324-.598-.822-.896-1.494-.896Z',
		      fill: 'none'
		    }),
		    el('path', {
		      d: 'M64.888,31.499c-.715,0-1.229,.332-1.541,.996v2.742c.332,.664,.85,.996,1.553,.996,.52,0,.924-.201,1.213-.604s.434-1.008,.434-1.816c0-.738-.143-1.309-.428-1.711s-.695-.604-1.23-.604Z',
		      fill: 'none'
		    }),
		    el('path', {
		      d: 'M96.875,31.47c-.438,0-.805,.159-1.102,.478s-.48,.765-.551,1.339h3.176v-.082c-.031-.551-.18-.978-.445-1.28s-.625-.454-1.078-.454Z',
		      fill: 'none'
		    })
		  )
		},
		category: 'layout',
		attributes: {
			faqItems: {
				type: 'array',
				default: []
			}
		},

		edit: function (props) {
			const { attributes, setAttributes } = props;
			const { faqItems = [] } = attributes;

			function updateFAQ(index, field, value) {
				const updatedItems = [...faqItems];
				updatedItems[index][field] = value;
				setAttributes({ faqItems: updatedItems });
			}

			function addFAQ() {
				setAttributes({
					faqItems: [
						...faqItems,
						{ id: Date.now().toString(36) + Math.random().toString(36).slice(2), question: '', answer: '' }
					]
				});
			}

			function removeFAQ(index) {
				const updatedItems = [...faqItems];
				updatedItems.splice(index, 1);
				setAttributes({ faqItems: updatedItems });
			}

			return el('div', { className: 'faq-block' },
				el('div', { className: 'faq-wrapper' }, [
					el('h3', { key: 'faqs-title' }, 'FAQs'),

					...faqItems.map(function (item, index) {
						var id = item.id || ('tmp-' + index); // fallback if older items don’t have id
						return el('div', { className: 'faq-item', key: 'item-' + id }, [
							el('div', { className: 'faq-header', key: 'hdr-' + id },
								el(RichText, {
									tagName: 'h4',
									className: 'faq-question',
									placeholder: 'Enter question...',
									value: item.question,
									onChange: function (val) { updateFAQ(index, 'question', val); }
								})
							),
							el(RichText, {
								key: 'ans-' + id,
								tagName: 'p',
								className: 'faq-answer',
								placeholder: 'Enter answer...',
								value: item.answer,
								onChange: function (val) { updateFAQ(index, 'answer', val); }
							}),
							el(Button, {
								key: 'rm-' + id,
								isDestructive: true,
								className: 'removal-button',
								onClick: function () { removeFAQ(index); }
							}, 'X')
						]);
					}),

					el(Button, {
						key: 'add-faq',
						isPrimary: true,
						onClick: addFAQ
					}, 'Add FAQ')
				])
			);
		},
		save: function () {
			return null; // server-rendered by PHP
		}
	});

	//End actual block code. 
} )(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.components);
