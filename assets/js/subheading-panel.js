(function (wp) {
	const { registerPlugin } = wp.plugins;
	// Prefer wp.editor (new), fall back to wp.editPost (old).
	const PluginDocumentSettingPanel =
		(wp.editor && wp.editor.PluginDocumentSettingPanel) ||
		(wp.editPost && wp.editPost.PluginDocumentSettingPanel);

	const { TextControl } = wp.components;
	const { useSelect, useDispatch } = wp.data;
	const { createElement: el } = wp.element;

	const SubheadingPanel = function () {
		const meta = useSelect(function (select) {
			return select('core/editor').getEditedPostAttribute('meta') || {};
		}, []);

		const postType = useSelect(function (select) {
			return select('core/editor').getCurrentPostType();
		}, []);

		const { editPost } = useDispatch('core/editor');

		if (!PluginDocumentSettingPanel || postType !== 'page') return null;

		return el(
			PluginDocumentSettingPanel,
			{
				name: 'wildernest-subheading-panel',
				title: 'Sub Header',
				className: 'wildernest-subheading-panel'
			},
			el(TextControl, {
				label: 'Page Subheading',
				value: meta.wildernest_subheading_setting || '',
				onChange: function (value) {
					editPost({
						meta: Object.assign({}, meta, { wildernest_subheading_setting: value })
					});
				},
				__next40pxDefaultSize: true,
				__nextHasNoMarginBottom: true
			})
		);
	};

	registerPlugin('wildernest-subheading', {
		render: SubheadingPanel,
		icon: null
	});
})(window.wp);


