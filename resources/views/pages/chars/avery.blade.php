@extends('templates.char')

@section('metas')
	<script type="text/javascript">
		var heroImage = '<?=url('img/chars/avery.png')?>';
		var charName = 'avery';
		var charCusName = '';
		var charTop = '30%';
		var charLeft = '-7%';
		var charScrollTop = '300';


		initChars();
		partyChars[0]['blank'] = false;
		partyChars[0]['portrait'] = '1';
		partyChars[0]['name'] = 'Avery';
		partyChars[0]['division'] = 'geios';
		partyChars[0]['origin'] = 'free-artist';
		partyChars[0]['affinityelem'] = 'paper';
		charPerTraits = [ 'artistic', 'art-attacker', 'carefree', 'rot-meister', 'hip-kid', ];
		charPerWeapons = [ 'poison-fumes', ];
		charPerSkills = [ 'myst-dagger', 'paper-crane', 'devourers-charm', 'lifetread-jinx', 'dreaded-hex', ];

	</script>
@stop

@section('tag') Papers, Wizard, Origamis, Hopeless Romantic, Lookin' Good @stop
@section('cont') 
	<p class="head">BACKGROUND</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
@stop