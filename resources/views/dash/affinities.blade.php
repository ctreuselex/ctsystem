@extends('dash.template')

<!-- MAIN -->
@section('main')
	<div id="element"></div>

	<script type="text/javascript">
		var affinities = <?=json_encode($data)?>;

		var grid = new mirrorGrid({
			el: $('#element'),
			title: 'Affinities',
			subtitle: 'The medium in which Mystics perceive and manipulate Myst',
			data: affinities,
			box: {
				columns: 6,
				spacing: 10,
				colors: { 
					top: 'color', 
					bot: 'color', 
					ico: 'color', 
					cat: 'color',
					aff: 'color', },
				content: [
					{ name: 'icon', tag: 'icon' },
					{ name: 'image', tag: 'image' },
					{ name: 'name', tag: 'name' },
					{ name: 'description', tag: 'description' },
				],
			},
		});

		grid.setAdd({
			method: 'POST',
			title: "Add New Affinity",
			alertSuccess: "Affinity Added!",
			alertFail: "Fail to add Affinity!",
			width: 350, columns: 1,
			inputs: [
				{ name: 'Icon', 		tag: 'icon', 		col: 1, type: 'text' },
				{ name: 'Name', 		tag: 'name', 		col: 1, type: 'text' },
				{ name: 'Color', 		tag: 'color', 		col: 1, type: 'color' },
				{ name: 'Image', 		tag: 'image', 		col: 1, type: 'text' },
				{ name: 'Description', 	tag: 'description', col: 1, type: 'textarea' },
			],
			link: window.location.pathname,
		});

		grid.setEdit({
			method: 'PUT',
			title: "Edit Affinity",
			alertSuccess: "Affinity Saved!",
			alertFail: "Fail to save Affinity!",
			width: 350, columns: 1,
			inputs: [
				{ name: 'Icon', 		tag: 'icon', 		col: 1, type: 'text' },
				{ name: 'Name', 		tag: 'name', 		col: 1, type: 'text' },
				{ name: 'Color', 		tag: 'color', 		col: 1, type: 'color' },
				{ name: 'Image', 		tag: 'image', 		col: 1, type: 'text' },
				{ name: 'Description', 	tag: 'description', col: 1, type: 'textarea' },
			],
			baseLink: window.location.pathname,
		});

		grid.setDelete({
			method: 'DELETE',
			title: "Delete Affinity?",
			alertSuccess: "Affinity Deleted!",
			alertFail: "Fail to delete Affinity!",
			width: 350, columns: 1,
			baseLink: window.location.pathname,
		});

		// grid.console();
	</script>
@stop