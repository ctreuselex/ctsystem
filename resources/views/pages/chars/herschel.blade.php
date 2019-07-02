@extends('templates.char')

@section('metas')
	<script type="text/javascript">
		var heroImage = '<?=url('img/chars/herschel.png')?>';
		var charName = 'herschel';
		var charCusName = '';
		var charTop = '35%';
		var charLeft = '-9%';
		var charScrollTop = '300';

		initChars();
		partyChars[0]['blank'] = false;
		partyChars[0]['portrait'] = '1';
		partyChars[0]['name'] = 'Herschel';
		partyChars[0]['division'] = 'aeros';
		partyChars[0]['origin'] = 'sky-jumper';
		partyChars[0]['affinityelem'] = 'myst';
		charPerTraits = [ 'myst-ghost', 'ultra-tall', 'eagle-eye', 'high-risk-parkour', 'weapon-enthusiast', ];
		charPerWeapons = [ 'crippling-shot', 'piercing-arrow', ];
		charPerSkills = [ 'clear-mind', 'phase', 'mystfire-sweep', 'ethereal-shot', ];

	</script>
@stop

@section('tag') Longshots, Blindshots, Ghosts, Stars, Aiming Perfectionist, Super Tall @stop
@section('cont') 
	<p class="head">BACKGROUND</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
@stop