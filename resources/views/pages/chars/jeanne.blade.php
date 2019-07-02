@extends('templates.char')

@section('metas')
	<script type="text/javascript">
		var heroImage = '<?=url('img/chars/jeanne.png')?>';
		var charName = 'jeanne';
		var charCusName = '';
		var charTop = '35%';
		var charLeft = '7%';
		var charScrollTop = '300';

		initChars();
		partyChars[0]['blank'] = false;
		partyChars[0]['portrait'] = '1';
		partyChars[0]['name'] = 'Jeanne';
		partyChars[0]['division'] = 'mystos';
		partyChars[0]['origin'] = 'bourgeois';
		partyChars[0]['affinityelem'] = 'space';
		charPerTraits = ['hop-bunny', 'astroneer', 'duelist', 'chilled-butter', 'patient',];
		charPerWeapons = [ '', ];
		charPerSkills = ['', '', '', '', ];

	</script>
@stop

@section('tag') Divine Calling, Teleportation, Space, Stabbing, Definitely French, Oui? @stop
@section('cont') 
	<p class="head">BACKGROUND</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
@stop