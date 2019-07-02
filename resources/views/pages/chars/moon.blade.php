@extends('templates.char')

@section('metas')
	<script type="text/javascript">
		var heroImage = '<?=url('img/chars/moon.png')?>';
		var charName = 'moon';
		var charCusName = 'Djerick Beleaguer';
		var charTop = '35%';
		var charLeft = '-3%';
		var charScrollTop = '300';

		initChars();
		partyChars[0]['blank'] = false;
		partyChars[0]['portrait'] = '1';
		partyChars[0]['name'] = 'Moon';
		partyChars[0]['division'] = 'mystos';
		partyChars[0]['origin'] = 'aristocrat';
		partyChars[0]['affinityelem'] = 'water';
		charPerTraits = ['tide-turner', 'weapon-enthusiast', 'lucky', 'not-quite-dead', 'ambidextrous', ];
		charPerWeapons = [ 'precision-strike', 'pole-vault-slam', ];
		charPerSkills = [ 'weapon-ready', 'water-whip', 'wyrm-slide', 'whirlpool', ];

	</script>
@stop

@section('tag') Pole-arms, Mirrors, Wicked Dance Moves, A Little Too Short On Everything @stop
@section('cont') 
	<p class="head">BACKGROUND</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
@stop