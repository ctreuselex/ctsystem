@extends('templates.char')

@section('metas')
	<script type="text/javascript">
		var heroImage = '<?=url('img/chars/vriskvin.png')?>';
		var charName = 'vriskvin';
		var charCusName = '';
		var charTop = '35%';
		var charLeft = '-7%';
		var charScrollTop = '300';

		initChars();
		partyChars[0]['blank'] = false;
		partyChars[0]['portrait'] = '1';
		partyChars[0]['name'] = 'Vriskvin';
		partyChars[0]['division'] = 'mystos';
		partyChars[0]['origin'] = 'aristocrat';
		partyChars[0]['affinityelem'] = 'time';
		charPerTraits = [ 'timekeeper', 'bossy', 'lone-wolf', 'grammar-dominioneer', 'bookworm', ];
		charPerWeapons = [ '', ];
		charPerSkills = [ 'myst-dagger', 'myst-hammer', 'psyblade', 'psychic-rush', 'psychic-burst', 'time-tap', ];

	</script>
@stop

@section('tag') Physics, Hammers, Saws, Eyepatches, Do Not Provoke, Total Hipster @stop
@section('cont') 
	<p class="head">BACKGROUND</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
@stop