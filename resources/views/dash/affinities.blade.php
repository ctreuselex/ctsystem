@extends('dash.template')

<!-- MAIN -->
@section('main')
	<div class="affinity-grid"></div>

	<script type="text/javascript">
		var mainData = <?=json_encode($data)?>;

		var grid = mirrorGrid;
		grid.init({
			el: $('.affinity-grid'),
			title: 'Affinities',
			subtitle: 'The medium in which Mystics perceive and manipulate Myst',
			gridColors: { top: 'color', bot: 'color', ico: 'color', cat: 'color' },
			gridContent: [
				{ name: 'icon', tag: 'icon' },
				{ name: 'image', tag: 'image' },
				{ name: 'name', tag: 'name' },
				{ name: 'description', tag: 'description' },
			],
			data: mainData,
			addData: {
				method: 'POST',
				title: "Add New Affinity",
				alertSuccess: "Affinity Added!",
				alertFail: "Fail to add Affinity!",
				inputs: [
					{ name: 'Icon', tag: 'icon', type: 'text' },
					{ name: 'Name', tag: 'name', type: 'text' },
					{ name: 'Color', tag: 'color', type: 'color' },
					{ name: 'Image', tag: 'image', type: 'text' },
					{ name: 'Description', tag: 'description', type: 'textarea' },
				],
				link: window.location.pathname,
			},
			editData: {
				method: 'PUT',
				title: "Edit Affinity",
				alertSuccess: "Affinity Saved!",
				alertFail: "Fail to save Affinity!",
				inputs: [
					{ name: 'Icon', tag: 'icon', type: 'text' },
					{ name: 'Name', tag: 'name', type: 'text' },
					{ name: 'Color', tag: 'color', type: 'color' },
					{ name: 'Image', tag: 'image', type: 'text' },
					{ name: 'Description', tag: 'description', type: 'textarea' },
				],
				baseLink: window.location.pathname,
			},
			deleteData: {
				alertQuestion: "Delete Affinity?",
				alertSuccess: "Affinity Deleted!",
				link: window.location.pathname,
			},
		});
	</script>
@stop