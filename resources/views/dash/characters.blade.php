@extends('dash.template')

<!-- MAIN -->
@section('main')
	<div id="element"></div>

	<script type="text/javascript">
		var characters = <?=json_encode($characters)?>;
		var affinities = <?=json_encode($affinities)?>;
		var divisions = <?=json_encode($divisions)?>;
		var origins = <?=json_encode($origins)?>;

		var grid = new mirrorGrid({
			el: $('#element'),
			title: 'Characters',
			// subtitle: 'The medium in which Mystics perceive and manipulate Myst',
			data: characters,
			box: {
				columns: 6,
				spacing: 10,
				colors: { 
					top: 'color_primary', 
					bot: 'color_secondary', 
					ico: 'color_primary', 
					cat: 'division_color',
					aff: 'affinity_color', },
				content: [
					{ name: 'icon', 		tag: 'icon' },
					{ name: 'category', 	tag: 'origin_name' },
					{ name: 'affinity', 	tag: 'affinity_icon' },
					{ name: 'image', 		tag: 'image' },
					{ name: 'name', 		tags: ['name', 'surname'], seperator: ' ' },
					{ name: 'description', 	tag: 'description' },
				],
			},
		});

		grid.setAdd({
			method: 'POST',
			title: "Add New Character",
			alertSuccess: "Character Added!",
			alertFail: "Fail to add Character!",
			width: 600, columns: 2,
			inputs: [
				{ name: 'Icon', 			tag: 'icon', 			col: 1, type: 'text' },
				{ name: 'Image', 			tag: 'image', 			col: 1, type: 'text' },
				{ name: 'Name', 			tag: 'name', 			col: 1, type: 'text' },
				{ name: 'Surname', 			tag: 'surname', 		col: 1, type: 'text' },
				{ name: 'Primary Color', 	tag: 'color_primary', 	col: 1, type: 'color' },
				{ name: 'Secondary Color', 	tag: 'color_secondary', col: 1, type: 'color' },
				{ name: 'Birth Year', 		tag: 'birth_year', 		col: 1, type: 'text' },
				{ name: 'Forum Tag', 		tag: 'forum_name', 		col: 1, type: 'text' },
				{ name: 'Affinity', 		tag: 'affinity', 		col: 2, type: 'select', from: affinities },
				{ name: 'Origin', 			tag: 'origin', 			col: 2, type: 'select', from: origins },
				{ name: 'Description', 		tag: 'description', 	col: 2, type: 'textarea' },
			],
			link: window.location.pathname,
		});

		grid.setEdit({
			method: 'PUT',
			title: "Edit Character",
			alertSuccess: "Character Saved!",
			alertFail: "Fail to save Character!",
			width: 600, columns: 2,
			inputs: [
				{ name: 'Icon', 			tag: 'icon', 			col: 1, type: 'text' },
				{ name: 'Image', 			tag: 'image', 			col: 1, type: 'text' },
				{ name: 'Name', 			tag: 'name', 			col: 1, type: 'text' },
				{ name: 'Surname', 			tag: 'surname', 		col: 1, type: 'text' },
				{ name: 'Primary Color', 	tag: 'color_primary', 	col: 1, type: 'color' },
				{ name: 'Secondary Color', 	tag: 'color_secondary', col: 1, type: 'color' },
				{ name: 'Birth Year', 		tag: 'birth_year', 		col: 1, type: 'text' },
				{ name: 'Forum Tag', 		tag: 'forum_name', 		col: 1, type: 'text' },
				{ name: 'Affinity', 		tag: 'affinity', 		col: 2, type: 'select', from: affinities },
				{ name: 'Origin', 			tag: 'origin', 			col: 2, type: 'select', from: origins },
				{ name: 'Description', 		tag: 'description', 	col: 2, type: 'textarea' },
			],
			baseLink: window.location.pathname,
		});

		grid.setDelete({
			method: 'DELETE',
			title: "Delete Character?",
			alertSuccess: "Character Deleted!",
			alertFail: "Fail to delete Character!",
			width: 350, columns: 1,
			baseLink: window.location.pathname,
		});
		
		// grid.console();
		
		// var grid = mirrorGrid;
		// grid.init({
		// 	el: $('.character-grid'),
		// 	title: 'Characters',
		// 	gridColors: { 
		// 		top: 'color_primary', 
		// 		bot: 'color_secondary', 
		// 		ico: 'color_primary', 
		// 		cat: 'division_color',
		// 		aff: 'affinity_color', 
		// 	},
		// 	gridContent: [
		// 		{ name: 'icon', 		tag: 'icon' },
		// 		{ name: 'category', 	tag: 'origin_name' },
		// 		{ name: 'affinity', 	tag: 'affinity_icon' },
		// 		{ name: 'image', 		tag: 'image' },
		// 		{ name: 'name', 		tags: ['name', 'surname'], seperator: ' ' },
		// 		{ name: 'description', 	tag: 'description' },
		// 	],
		// 	data: characters,
		// 	addData: {
		// 		method: 'POST',
		// 		title: "Add New Character",
		// 		alertSuccess: "Character Added!",
		// 		alertFail: "Fail to add Character!",
		// 		width: 600, columns: 2,
		// 		inputs: [
		// 			{ name: 'Icon', 			tag: 'icon', 			col: 1, type: 'text' },
		// 			{ name: 'Image', 			tag: 'image', 			col: 1, type: 'text' },
		// 			{ name: 'Name', 			tag: 'name', 			col: 1, type: 'text' },
		// 			{ name: 'Surname', 			tag: 'surname', 		col: 1, type: 'text' },
		// 			{ name: 'Primary Color', 	tag: 'color_primary', 	col: 1, type: 'color' },
		// 			{ name: 'Secondary Color', 	tag: 'color_secondary', col: 1, type: 'color' },
		// 			{ name: 'Birth Year', 		tag: 'birth_year', 		col: 1, type: 'text' },
		// 			{ name: 'Forum Tag', 		tag: 'forum_name', 		col: 1, type: 'text' },
		// 			{ name: 'Affinity', 		tag: 'affinity', 		col: 2, type: 'select', from: affinities },
		// 			{ name: 'Origin', 			tag: 'origin', 			col: 2, type: 'select', from: origins },
		// 			{ name: 'Description', 		tag: 'description', 	col: 2, type: 'textarea' },
		// 		],
		// 		link: window.location.pathname,
		// 	},
		// 	editData: {
		// 		method: 'PUT',
		// 		title: "Edit Character",
		// 		alertSuccess: "Character Saved!",
		// 		alertFail: "Fail to save Character!",
		// 		width: 600, columns: 2,
		// 		inputs: [
		// 			{ name: 'Icon', 			tag: 'icon', 			col: 1, type: 'text' },
		// 			{ name: 'Image', 			tag: 'image', 			col: 1, type: 'text' },
		// 			{ name: 'Name', 			tag: 'name', 			col: 1, type: 'text' },
		// 			{ name: 'Surname', 			tag: 'surname', 		col: 1, type: 'text' },
		// 			{ name: 'Primary Color', 	tag: 'color_primary', 	col: 1, type: 'color' },
		// 			{ name: 'Secondary Color', 	tag: 'color_secondary', col: 1, type: 'color' },
		// 			{ name: 'Birth Year', 		tag: 'birth_year', 		col: 1, type: 'text' },
		// 			{ name: 'Forum Tag', 		tag: 'forum_name', 		col: 1, type: 'text' },
		// 			{ name: 'Affinity', 		tag: 'affinity', 		col: 2, type: 'select', from: affinities },
		// 			{ name: 'Origin', 			tag: 'origin', 			col: 2, type: 'select', from: origins },
		// 			{ name: 'Description', 		tag: 'description', 	col: 2, type: 'textarea' },
		// 		],
		// 		baseLink: window.location.pathname,
		// 	},
		// 	deleteData: {
		// 		alertQuestion: "Delete Character?",
		// 		alertSuccess: "Character Deleted!",
		// 		link: window.location.pathname,
		// 	},
		// });
	</script>
@stop