@extends('templates.char')

@section('metas')
	<script type="text/javascript">
		var heroImage = '<?=url('img/chars/seline.png')?>';
		var charName = 'seline';
		var charCusName = '';
		var charTop = '35%';
		var charLeft = '-7%';
		var charScrollTop = '300';

		initChars();
		partyChars[0]['blank'] = false;
		partyChars[0]['portrait'] = '1';
		partyChars[0]['name'] = 'Seline';
		partyChars[0]['division'] = 'mystos';
		partyChars[0]['origin'] = 'aristocrat';
		partyChars[0]['affinityelem'] = 'electric';
		charPerTraits = ['wicked-cultured', 'the-beautiful-elite', 'thunderstruck', 'lowblow-aficionado', 'flirty', ];
		charPerWeapons = [ 'bolt-saw', 'titan-sigiati' ];
		charPerSkills = [ 'spark', 'electric-conduit', 'lightning-arc', 'thunder-bolt' ];

	</script>
@stop

@section('tag') Storms, Mists, Elite, Purging, Genocide, Anything Sexy @stop
@section('cont') 
	<p class="head">BACKGROUND</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
@stop