@extends('templates.char')

@section('metas')
	<script type="text/javascript">
		var heroImage = '<?=url('img/chars/llaxine.png')?>';
		var charName = 'llaxine';
		var charCusName = '';
		var charTop = '20%';
		var charLeft = '-6%';
		var charScrollTop = '350';

		initChars();
		partyChars[0]['blank'] = false;
		partyChars[0]['portrait'] = '1';
		partyChars[0]['name'] = 'Llaxine';
		partyChars[0]['division'] = 'mystos';
		partyChars[0]['origin'] = 'aristocrat';
		partyChars[0]['affinityelem'] = 'light';
		charPerTraits = [ 'wicked-cultured', 'astroneer', 'artistic', 'feathered-ankles', 'sophisticated', ];
		charPerWeapons = [ 'diamond-strike', 'razor-flurry', ];
		charPerSkills = [ 'mystfire-bolt', 'blinding-radiance', 'focused-ray', 'light-sigiati', ];

	</script>
@stop

@section('tag') Light, Ballet, Bracelets, Twisting and Spinning, Poof @stop
@section('cont') 
	<p class="head">BACKGROUND</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
@stop