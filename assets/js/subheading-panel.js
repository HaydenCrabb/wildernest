(function (wp) {
	const { registerPlugin } = wp.plugins;
	// Use the non-deprecated panel
	const { PluginDocumentSettingPanel } = wp.editor;
	const { TextControl, ToggleControl, PanelRow } = wp.components;
	const { useSelect, useDispatch } = wp.data;
	const { createElement: el } = wp.element;

	function SubheadingPanel() {
		const meta = useSelect(function (select) {
			return select('core/editor').getEditedPostAttribute('meta') || {};
		}, []);

		const postType = useSelect(function (select) {
			return select('core/editor').getCurrentPostType();
		}, []);

		const { editPost } = useDispatch('core/editor');

		// Only show for pages, and only if the panel exists
		if (!PluginDocumentSettingPanel || postType !== 'page') return null;

		// Convenience setters
		function setMeta(patch) {
			editPost({ meta: Object.assign({}, meta, patch) });
		}

		const subheading = meta.wildernest_subheading_setting || '';
		const showScroll = !!meta.wildernest_scroll_indicator;

		return el(
			PluginDocumentSettingPanel,
			{
				name: 'wildernest-subheading-panel',
				title: 'Sub Header',
				className: 'wildernest-subheading-panel'
			},
			// Subheading text
			el(TextControl, {
				label: 'Page Subheading',
				value: subheading,
				onChange: function (value) {
					setMeta({ wildernest_subheading_setting: value });
				},
				__next40pxDefaultSize: true
			}),
			// Scroll indicator toggle
			el(PanelRow, {},
				el(ToggleControl, {
					label: 'Remove scroll indicator',
					checked: showScroll,
					onChange: function (val) {
						setMeta({ wildernest_scroll_indicator: !!val });
					},
					help: 'Toggle a small “scroll down” chevron on this page’s cover header.',
					__nextHasNoMarginBottom: true
				})
			)
		);
	}

	registerPlugin('wildernest-subheading', {
		render: SubheadingPanel,
		icon: null
	});
})(window.wp);


