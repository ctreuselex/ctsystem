@extends('templates.char')

@section('metas')
	<script type="text/javascript">
		var heroImage = '<?=url('img/chars/chance.png')?>';
		var charName = 'chance';
		var charCusName = '';
		var charTop = '35%';
		var charLeft = '7%';
		var charScrollTop = '300';

		initChars();
		partyChars[0]['blank'] = false;
		partyChars[0]['portrait'] = '1';
		partyChars[0]['name'] = 'Chance';
		partyChars[0]['division'] = 'mystos';
		partyChars[0]['origin'] = 'aristocrat';
		partyChars[0]['affinityelem'] = 'myst';
		charPerTraits = [ 'the-beautiful-elite', 'finger-gunner', 'intimidating', 'perpetual-frowner', 'know-it-all', ];
		charPerWeapons = [ 'focused-shot', 'rapid-fire', 'void-trap' ];
		charPerSkills = [ 'mystfire-leap', 'weapon-ready', 'trash-talk', ];

	</script>
@stop

@section('tag') Dual Guns, Balance, No Second Chances, Being a Jerk to Everyone @stop
@section('cont') 
	<p class="head">BACKGROUND</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
@stop