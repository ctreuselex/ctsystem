@extends('templates.char')

@section('metas')
	<script type="text/javascript">
		var heroImage = '<?=url('img/chars/daud.png')?>';
		var charName = 'daud';
		var charCusName = '';
		var charTop = '38%';
		var charLeft = '-4%';
		var charScrollTop = '325';

		initChars();
		partyChars[0]['blank'] = false;
		partyChars[0]['portrait'] = '1';
		partyChars[0]['name'] = 'Daud';
		partyChars[0]['division'] = 'geios';
		partyChars[0]['origin'] = 'entrepreneur';
		partyChars[0]['affinityelem'] = 'speed';
		charPerTraits = ['daredevil', 'athletic', 'eagle-eye', 'air-guitarist', 'weapon-enthusiast', ];
		charPerWeapons = [ 'solid-hit', 'power-bash', ];
		charPerSkills = [ 'mad-dash', 'trailblazer', 'kinetic-control', 'cutting-wind', ];

	</script>
@stop

@section('tag') Speed, Sports, Arrows, Vectors, Hater of Cats, Lover of Non-Cats @stop
@section('cont') 
	<p class="head">BACKGROUND</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
@stop