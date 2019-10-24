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
				width: 350, columns: 1,
				inputs: [
					{ name: 'Icon', 				tag: 'icon', 				col: 1, type: 'text' },
					{ name: 'Name', 				tag: 'name', 				col: 1, type: 'text' },
					{ name: 'Image', 				tag: 'image', 				col: 1, type: 'text' },
					{ name: 'Primary Color', 		tag: 'color_primary', 		col: 1, type: 'color' },
					{ name: 'Secondary Color', 		tag: 'color_secondary', 	col: 1, type: 'color' },
					{ name: 'Description',		 	tag: 'description', 		col: 1, type: 'textarea' },
				],
				link: window.location.pathname,
			},
			editData: {
				method: 'PUT',
				title: "Edit Division",
				alertSuccess: "Division Saved!",
				alertFail: "Fail to save Division!",
				width: 350, columns: 1,
				inputs: [
					{ name: 'Icon', 				tag: 'icon', 				col: 1, type: 'text' },
					{ name: 'Name', 				tag: 'name', 				col: 1, type: 'text' },
					{ name: 'Image', 				tag: 'image', 				col: 1, type: 'text' },
					{ name: 'Primary Color', 		tag: 'color_primary', 		col: 1, type: 'color' },
					{ name: 'Secondary Color', 		tag: 'color_secondary', 	col: 1, type: 'color' },
					{ name: 'Description',		 	tag: 'description', 		col: 1, type: 'textarea' },
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