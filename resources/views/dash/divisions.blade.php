@extends('dash.template')

<!-- MAIN -->
@section('main')
	<div class="division-grid"></div>

	<script type="text/javascript">
		var mainData = <?=json_encode($data)?>;

		var grid = mirrorGrid;
		grid.init({
			el: $('.division-grid'),
			title: 'Divisions',
			gridColors: { top: 'color_primary', bot: 'color_secondary', ico: 'color_primary', cat: 'color_primary' },
			gridContent: [
				{ name: 'icon', tag: 'icon' },
				{ name: 'image', tag: 'image' },
				{ name: 'name', tag: 'name' },
				{ name: 'description', tag: 'description' },
			],
			data: mainData,
			addData: {
				method: 'POST',
				title: "Add New Division",
				alertSuccess: "Division Added!",
				alertFail: "Fail to add Division!",
				inputs: [
					{ name: 'Icon', tag: 'icon', type: 'text' },
					{ name: 'Name', tag: 'name', type: 'text' },
					{ name: 'Image', tag: 'image', type: 'txt' },
					{ name: 'Primary Color', tag: 'color_primary', type: 'txt' },
					{ name: 'Secondary Color', tag: 'color_secondary', type: 'txt' },
					{ name: 'Description', tag: 'description', type: 'textarea' },
				],
				link: window.location.pathname,
			},
			editData: {
				method: 'PUT',
				title: "Edit Division",
				alertSuccess: "Division Saved!",
				alertFail: "Fail to save Division!",
				inputs: [
					{ name: 'Icon', tag: 'icon', type: 'text' },
					{ name: 'Name', tag: 'name', type: 'text' },
					{ name: 'Image', tag: 'image', type: 'txt' },
					{ name: 'Primary Color', tag: 'color_primary', type: 'txt' },
					{ name: 'Secondary Color', tag: 'color_secondary', type: 'txt' },
					{ name: 'Description', tag: 'description', type: 'textarea' },
				],
				baseLink: window.location.pathname,
			},
			deleteData: {
				alertQuestion: "Delete Division?",
				alertSuccess: "Division Deleted!",
				link: window.location.pathname,
			},
		});
	</script>
@stop