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
				inputs: [
					{ name: 'Division', tag: 'division', type: 'select', from: divisions },
					{ name: 'Icon', tag: 'icon', type: 'text' },
					{ name: 'Name', tag: 'name', type: 'text' },
					{ name: 'Image', tag: 'image', type: 'text' },
					{ name: 'Color', tag: 'color', type: 'color' },
					{ name: 'Description', tag: 'description', type: 'textarea' },
				],
				link: window.location.pathname,
			},
			editData: {
				method: 'PUT',
				title: "Edit Origin",
				alertSuccess: "Origin Saved!",
				alertFail: "Fail to save Origin!",
				inputs: [
					{ name: 'Division', tag: 'division', type: 'select', from: divisions },
					{ name: 'Icon', tag: 'icon', type: 'text' },
					{ name: 'Name', tag: 'name', type: 'text' },
					{ name: 'Image', tag: 'image', type: 'text' },
					{ name: 'Color', tag: 'color', type: 'color' },
					{ name: 'Description', tag: 'description', type: 'textarea' },
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