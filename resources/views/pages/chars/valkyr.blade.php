@extends('templates.char')

@section('metas')
	<script type="text/javascript">
		var heroImage = '<?=url('img/chars/valkyr.png')?>';
		var charName = 'valkyr';
		var charCusName = '';
		var charTop = '35%';
		var charLeft = '-7%';
		var charScrollTop = '250';

		initChars();
		partyChars[0]['blank'] = false;
		partyChars[0]['portrait'] = '1';
		partyChars[0]['name'] = 'Valkyr';
		partyChars[0]['division'] = 'luminos';
		partyChars[0]['origin'] = 'flood-folk';
		partyChars[0]['affinityelem'] = 'fire';
		charPerTraits = ['phoenix-fire', 'dirty-fingers', 'bodybuilder', 'athletic', 'dad-punisher', ];
		charPerWeapons = [ '', ];
		charPerSkills = [ 'fiery-bind', 'cinder-blade', 'cinder-spin', 'fire-blast', 'flame-breath', 'phoenix-dive', ];

	</script>
@stop

@section('tag') Firebirds, Ultimate Powah, Chains and Blades, Immortality, Dad Puns, I Like Boats @stop
@section('cont') 
	<p class="head">BACKGROUND</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatk.</p>
@stop