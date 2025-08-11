( function (blocks, element, blockEditor, components ) {
	// actual block code. 
	const { registerBlockType } = blocks;
	const { createElement: el, Fragment } = element
	const { MediaUpload, MediaUploadCheck, RichText, InspectorControls, PanelColorSettings, InnerBlocks } = blockEditor;
	const { Button, PanelBody, TextControl } = components;

	blocks.registerBlockType('hcsolutions/numbers-section', {
		title: 'Numbers Section',
		icon: 'editor-ol',
		category: 'layout',
		keywords: ['Numbers', 'By The', 'Section', 'stats', 'statistics'],
		attributes: {
		  headerText: { type: 'string', default: '' },
		  items: {
		  	type: 'array',
		  	default: []
		  }
		},
		edit: function (props) {
			var items = props.attributes.items;

			function updateItem(index, key, value) {
				var newItems = items.slice();
				newItems[index][key] = value;
				props.setAttributes({ items: newItems });
			}

			function addItem() {
				props.setAttributes({
					items: items.concat([{ number: '', description: '' }])
				});
			}

			function removeItem(index) {
				var newItems = items.filter(function (_, i) { return i !== index; });
				props.setAttributes({ items: newItems });
			}

			return el(Fragment, null,
				el(
					InspectorControls,
					null,
					el(
						PanelBody,
						{ title: 'By The Numbers Items', initialOpen: true },
						items.map(function (item, index) {
							return el(
								'div',
								{
									key: index,
									style: {
										marginBottom: '15px',
										borderBottom: '1px solid #ccc',
										paddingBottom: '10px'
									}
								},
								el(TextControl, {
									label: 'Number',
									value: item.number,
									onChange: function (value) { updateItem(index, 'number', value); }
								}),
								el(TextControl, {
									label: 'Description',
									value: item.description,
									onChange: function (value) { updateItem(index, 'description', value); }
								}),
								el(Button, {
									isDestructive: true,
									onClick: function () { removeItem(index); }
								}, 'Remove')
							);
						}),
						el(Button, {
							isPrimary: true,
							onClick: addItem
						}, 'Add Item')
					)
				),
				el(
					'div',
					{ className: 'by-the-numbers-preview' },
					items.map(function (item, i) {
						return el(
							'div',
							{ key: i, className: 'by-the-numbers-item' },
							el('strong', { className: 'number' }, item.number),
							el('div', { className: 'description' }, item.description)
						);
					})
				)
			);
		},
		save: function () {
			return null; // server-rendered by PHP
		}
	});

	//End actual block code. 
} )(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.components);
