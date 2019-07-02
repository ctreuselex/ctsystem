@extends('templates.char')

@section('metas')
	<script type="text/javascript">
		var heroImage = '<?=url('img/chars/maximus.png')?>';
		var charName = 'maximus';
		var charCusName = '';
		var charTop = '35%';
		var charLeft = '7%';
		var charScrollTop = '300';

		initChars();
		partyChars[0]['blank'] = false;
		partyChars[0]['portrait'] = '1';
		partyChars[0]['name'] = 'Griff';
		partyChars[0]['division'] = 'geios';
		partyChars[0]['origin'] = 'entrepreneur';
		partyChars[0]['affinityelem'] = 'myst';
		charPerTraits = ['artistic', 'art-attacker', 'carefree', 'cheerleader', 'hip-kid', ];
		charPerWeapons = [ '', ];
		charPerSkills = ['', '', '', '', ];

	</script>
@stop

@section('tag') Shields, Tethers, Technology, Armor, Nerd in a Bully Costume @stop
@section('cont') 
	<p class="head">BACKGROUND</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
@stop