@extends('dash.template')

<!-- MAIN -->
@section('main')
	<div class="character-grid"></div>

	<script type="text/javascript">
		var mainData = <?=json_encode($data)?>;
		var affinities = <?=json_encode($affinities)?>;
		var origins = <?=json_encode($origins)?>;
		
		var grid = mirrorGrid;
		grid.init({
			el: $('.character-grid'),
			title: 'Characters',
			gridColors: { 
				top: 'color_primary', 
				bot: 'color_secondary', 
				ico: 'color_primary', 
				cat: 'division_color',
				aff: 'affinity_color', 
			},
			gridContent: [
				{ name: 'icon', tag: 'icon' },
				{ name: 'category', tag: 'origin_name' },
				{ name: 'affinity', tag: 'affinity_icon' },
				{ name: 'image', tag: 'image' },
				{ name: 'name', tags: ['name', 'surname'], seperator: ' ' },
				{ name: 'description', tag: 'description' },
			],
			data: mainData,
			addData: {
				method: 'POST',
				title: "Add New Character",
				alertSuccess: "Character Added!",
				alertFail: "Fail to add Character!",
				inputs: [
					{ name: 'Icon', tag: 'icon', type: 'text' },
					{ name: 'Image', tag: 'image', type: 'text' },
					{ name: 'Name', tag: 'name', type: 'text' },
					{ name: 'Surname', tag: 'surname', type: 'text' },
					{ name: 'Birth Year', tag: 'birth_year', type: 'text' },
					{ name: 'Primary Color', tag: 'color_primary', type: 'color' },
					{ name: 'Secondary Color', tag: 'color_secondary', type: 'color' },
					{ name: 'Affinity', tag: 'affinity', type: 'select', from: affinities },
					{ name: 'Origin', tag: 'origin', type: 'select', from: origins },
					{ name: 'Forum Tag', tag: 'forum_name', type: 'text' },
					{ name: 'Description', tag: 'description', type: 'textarea' },
				],
				link: window.location.pathname,
			},
			editData: {
				method: 'PUT',
				title: "Edit Character",
				alertSuccess: "Character Saved!",
				alertFail: "Fail to save Character!",
				inputs: [
					{ name: 'Icon', tag: 'icon', type: 'text' },
					{ name: 'Image', tag: 'image', type: 'text' },
					{ name: 'Name', tag: 'name', type: 'text' },
					{ name: 'Surname', tag: 'surname', type: 'text' },
					{ name: 'Birth Year', tag: 'birth_year', type: 'text' },
					{ name: 'Primary Color', tag: 'color_primary', type: 'color' },
					{ name: 'Secondary Color', tag: 'color_secondary', type: 'color' },
					{ name: 'Affinity', tag: 'affinity', type: 'select', from: affinities },
					{ name: 'Origin', tag: 'origin', type: 'select', from: origins },
					{ name: 'Forum Tag', tag: 'forum_name', type: 'text' },
					{ name: 'Description', tag: 'description', type: 'textarea' },
				],
				baseLink: window.location.pathname,
			},
			deleteData: {
				alertQuestion: "Delete Character?",
				alertSuccess: "Character Deleted!",
				link: window.location.pathname,
			},
		});
	</script>
@stop