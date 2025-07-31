(function(wp) {
	const { registerPlugin } = wp.plugins;
	const { PluginDocumentSettingPanel } = wp.editor;
	const { TextControl } = wp.components;
	const { useSelect, useDispatch } = wp.data;
	const { createElement: el } = wp.element;

	const SubheadingPanel = () => {
		const meta = useSelect(select =>
			select('core/editor').getEditedPostAttribute('meta')
		);

		const postType = useSelect(select =>
			select('core/editor').getCurrentPostType()
		);

		const postId = useSelect(select =>
			select('core/editor').getCurrentPostId()
		);

		const { editor } = useDispatch('core/editor');

		if (postType !== 'page') return null;

		return el(
			PluginDocumentSettingPanel,
			{
				name: 'wildernest-subheading-panel',
				title: 'Sub Header',
				className: 'wildernest-subheading-panel'
			},
			el(TextControl, {
				label: 'Page Subheading',
				value: meta?.wildernest_subheading_setting || '',
				onChange: (value) =>
					editor({ meta: { ...meta, wildernest_subheading_setting: value } }),
				__next40pxDefaultSize: true,
			})
		);
	};

	registerPlugin('wildernest-subheading', {
		render: SubheadingPanel,
		icon: null
	});
})(window.wp);
