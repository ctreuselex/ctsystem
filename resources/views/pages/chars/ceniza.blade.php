@extends('templates.char')

@section('metas')
	<script type="text/javascript">
		var heroImage = '<?=url('img/chars/ceniza.png')?>';
		var charName = 'ceniza';
		var charCusName = '';
		var charTop = '0%';
		var charLeft = '-8%';
		var charScrollTop = '250';

		initChars();
		partyChars[0]['blank'] = false;
		partyChars[0]['portrait'] = '1';
		partyChars[0]['name'] = 'Ceniza';
		partyChars[0]['division'] = 'mystos';
		partyChars[0]['origin'] = 'aristocrat';
		partyChars[0]['affinityelem'] = 'fire';
		charPerTraits = ['bossy', 'pyromaniac', 'workaholic', 'patient', 'sigiati-fashion', ];
		charPerWeapons = [ '', ];
		charPerSkills = [ 'encourage', 'heat-wave', 'ring-of-fire', 'fire-blast', 'sudden-combustion','firewall-security', ];

	</script>
@stop

@section('tag') You Shall Not Pass, Tropical Vacations, Typical Fire Mage, Fireball! @stop
@section('cont') 
	<p class="head">BACKGROUND</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
@stop