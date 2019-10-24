@extends('dash.template')

<!-- MAIN -->
@section('main')
	<div class="origin-grid"></div>

	<script type="text/javascript">
		var mainData = <?=json_encode($data)?>;
		var divisions = <?=json_encode($divisions)?>;
		
		var grid = mirrorGrid;
		grid.init({
			el: $('.origin-grid'),
			title: 'Origins',
			subtitle: 'Individuals alike tend to flock together',
			gridColors: { top: 'color', bot: 'division_color', ico: 'color', cat: 'division_color' },
			gridContent: [
				{ name: 'icon', tag: 'icon' },
				{ name: 'category', tag: 'division_name' },
				{ name: 'image', tag: 'image' },
				{ name: 'name', tag: 'name' },
				{ name: 'description', tag: 'description' },
			],
			data: mainData,
			addData: {
				method: 'POST',
				title: "Add New Origin",
				alertSuccess: "Origin Added!",
				alertFail: "Fail to add Origin!",
				width: 350, columns: 1,
				inputs: [
					{ name: 'Division', 	tag: 'division', 	col: 1, type: 'select', from: divisions },
					{ name: 'Icon', 		tag: 'icon', 		col: 1, type: 'text' },
					{ name: 'Name', 		tag: 'name', 		col: 1, type: 'text' },
					{ name: 'Image', 		tag: 'image', 		col: 1, type: 'text' },
					{ name: 'Color', 		tag: 'color', 		col: 1, type: 'color' },
					{ name: 'Description', 	tag: 'description', col: 1, type: 'textarea' },
				],
				link: window.location.pathname,
			},
			editData: {
				method: 'PUT',
				title: "Edit Origin",
				alertSuccess: "Origin Saved!",
				alertFail: "Fail to save Origin!",
				width: 350, columns: 1,
				inputs: [
					{ name: 'Division', 	tag: 'division', 	col: 1, type: 'select', from: divisions },
					{ name: 'Icon', 		tag: 'icon', 		col: 1, type: 'text' },
					{ name: 'Name', 		tag: 'name', 		col: 1, type: 'text' },
					{ name: 'Image', 		tag: 'image', 		col: 1, type: 'text' },
					{ name: 'Color', 		tag: 'color', 		col: 1, type: 'color' },
					{ name: 'Description', 	tag: 'description', col: 1, type: 'textarea' },
				],
				baseLink: window.location.pathname,
			},
			deleteData: {
				alertQuestion: "Delete Origin?",
				alertSuccess: "Origin Deleted!",
				link: window.location.pathname,
			},
		});
	</script>
@stop