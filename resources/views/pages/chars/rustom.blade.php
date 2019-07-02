@extends('templates.char')

@section('metas')
	<script type="text/javascript">
		var heroImage = '<?=url('img/chars/rustom.png')?>';
		var charName = 'rustom';
		var charCusName = '';
		var charTop = '35%';
		var charLeft = '-7%';
		var charScrollTop = '300';

		initChars();
		partyChars[0]['blank'] = false;
		partyChars[0]['portrait'] = '1';
		partyChars[0]['name'] = 'Rustom';
		partyChars[0]['division'] = 'luminos';
		partyChars[0]['origin'] = 'flood-folk';
		partyChars[0]['affinityelem'] = 'light';
		charPerTraits = [ 'sunbathed', 'astroneer', 'bookworm', 'patient', 'perpetual-frowner', ];
		charPerWeapons = [ 'patterned-strike', ];
		charPerSkills = [ 'blinding-radiance', 'partial-eclipse', 'focused-ray', 'light-sigiati', 'distant-quasar', ];

	</script>
@stop

@section('tag') Light, Sigils, Cosmos, Seriously? Like Are You Serious? Why So Serious? @stop
@section('cont') 
	<p class="head">BACKGROUND</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
@stop