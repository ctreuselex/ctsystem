@extends('templates.char')

@section('metas')
	<script type="text/javascript">
		var heroImage = '<?=url('img/chars/vines.png')?>';
		var charName = 'vines';
		var charCusName = '';
		var charTop = '35%';
		var charLeft = '-4%';
		var charScrollTop = '300';

		initChars();
		partyChars[0]['blank'] = false;
		partyChars[0]['portrait'] = '1';
		partyChars[0]['name'] = 'Vines';
		partyChars[0]['division'] = 'geios';
		partyChars[0]['origin'] = 'free-artist';
		partyChars[0]['affinityelem'] = 'water';
		charPerTraits = [ 'turtler', 'art-defender', 'artistic', 'thick-skin', 'patient', ];
		charPerWeapons = [ 'aurora-cannon', ];
		charPerSkills = [ 'sturdy-block', 'mist-cover', 'hydrobomb', 'aqua-dome', 'water-prison', ];

	</script>
@stop

@section('tag') Paintings, Murals, Color Me Surprised, Countering, Parrying @stop
@section('cont') 
	<p class="head">BACKGROUND</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
@stop