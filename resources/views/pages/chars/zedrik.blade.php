@extends('templates.char')

@section('metas')
	<script type="text/javascript">
		var heroImage = '<?=url('img/chars/zedrik.png')?>';
		var charName = 'zedrik';
		var charCusName = '';
		var charTop = '35%';
		var charLeft = '-7%';
		var charScrollTop = '300';

		initChars();
		partyChars[0]['blank'] = false;
		partyChars[0]['portrait'] = '1';
		partyChars[0]['name'] = 'Zedrik';
		partyChars[0]['division'] = 'luminos';
		partyChars[0]['origin'] = 'flood-folk';
		partyChars[0]['affinityelem'] = 'fire';
		charPerTraits = [ 'phoenix-fire', 'athletic', 'angerzerker', 'weapon-enthusiast', 'thick-skin', ];
		charPerWeapons = [ 'rising-slash', 'true-strike', ];
		charPerSkills = [ 'ignition-punch', 'explosive-touch', 'flame-breath', 'sudden-combustion', ];

	</script>
@stop

@section('tag') Berserker, Demon, Beast, Much Swag, Boom, Masochism, Boom! @stop
@section('cont') 
	<p class="head">BACKGROUND</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
@stop