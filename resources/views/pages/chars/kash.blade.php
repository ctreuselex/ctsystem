@extends('templates.char')

@section('metas')
	<script type="text/javascript">
		var heroImage = '<?=url('img/chars/kash.png')?>';
		var charName = 'kash';
		var charCusName = '';
		var charTop = '21%';
		var charLeft = '-9%';
		var charScrollTop = '200';

		initChars();
		partyChars[0]['blank'] = false;
		partyChars[0]['portrait'] = '1';
		partyChars[0]['name'] = 'Kash';
		partyChars[0]['division'] = 'luminos';
		partyChars[0]['origin'] = 'blueblood';
		partyChars[0]['affinityelem'] = 'water';
		charPerTraits = ['aquatic', 'childish', 'hop-bunny', 'daredevil', 'ambidextrous',  ];
		charPerWeapons = [ 'cross-strike', 'razor-flurry', ];
		charPerSkills = [ 'counter-cuttle', 'mist-cover', 'vapor-blade', 'razor-waters',  ];

	</script>
@stop

@section('tag') Marine, Nautilidae, Crustaceans, Aerial Shrimp, Twin Bladed Bandit @stop
@section('cont') 
	<p class="head">BACKGROUND</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
	<p class="head">STRATEGY</p>
	<p>Kash is close range fighter who likes to harrass his opponents with multi-hit attacks that can inflict bleeding, which prevents them from healing. With high mobility and evasion he can survive even while in the thick of the fight.</p>
@stop