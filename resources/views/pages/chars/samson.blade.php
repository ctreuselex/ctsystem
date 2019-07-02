@extends('templates.char')

@section('metas')
	<script type="text/javascript">
		var heroImage = '<?=url('img/chars/griffin.png')?>';
		var charName = 'samson';
		var charCusName = '';
		var charTop = '35%';
		var charLeft = '7%';
		var charScrollTop = '300';

		initChars();
		partyChars[0]['blank'] = false;
		partyChars[0]['portrait'] = '1';
		partyChars[0]['name'] = 'Samson';
		partyChars[0]['division'] = 'aeros';
		partyChars[0]['origin'] = 'urban-dweller';
		partyChars[0]['affinityelem'] = 'flesh';
		charPerTraits = ['sadistic', 'bodybuilder', 'lone-wolf', 'mighty-glacier', 'athletic', ];
		charPerWeapons = [ '', ];
		charPerSkills = ['', '', '', '', ];

	</script>
@stop

@section('tag') The Murderer, Big Bad Wolf, Alpha Alpha Wolf, Is actually the one more appropriate for the name 'Lupe' @stop
@section('cont') 
	<p class="head">BACKGROUND</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
@stop