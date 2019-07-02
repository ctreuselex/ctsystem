@extends('templates.char')

@section('metas')
	<script type="text/javascript">
		var heroImage = '<?=url('img/chars/theodore.png')?>';
		var charName = 'theodore';
		var charCusName = '';
		var charTop = '35%';
		var charLeft = '7%';
		var charScrollTop = '300';

		initChars();
		partyChars[0]['blank'] = false;
		partyChars[0]['portrait'] = '1';
		partyChars[0]['name'] = 'Theodore';
		partyChars[0]['division'] = 'luminos';
		partyChars[0]['origin'] = 'blueblood';
		partyChars[0]['affinityelem'] = 'mydow';
		charPerTraits = ['artistic', 'art-attacker', 'carefree', 'cheerleader', 'hip-kid', ];
		charPerWeapons = [ '', ];
		charPerSkills = ['', '', '', '', ];

	</script>
@stop

@section('tag') Dark Souls, Death Kight, Oh no Murder, Has a Puppy which Wield Swords @stop
@section('cont') 
	<p class="head">BACKGROUND</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
@stop