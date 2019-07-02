@extends('templates.char')

@section('metas')
	<script type="text/javascript">
		var heroImage = '<?=url('img/chars/noemi.png')?>';
		var charName = 'noemi';
		var charCusName = '';
		var charTop = '35%';
		var charLeft = '-7%';
		var charScrollTop = '300';

		initChars();
		partyChars[0]['blank'] = false;
		partyChars[0]['portrait'] = '1';
		partyChars[0]['name'] = 'Noemi';
		partyChars[0]['division'] = 'geios';
		partyChars[0]['origin'] = 'free-artist';
		partyChars[0]['affinityelem'] = 'plant';
		charPerTraits = [ 'green-thumb', 'bookworm', 'nutritionist', 'sane', 'hard-headed', ];
		charPerWeapons = [ '', ];
		charPerSkills = [ 'toxic-bulb', 'cleansing-bulb', 'vine-whip', 'rapid-growth', 'caustic-darts', 'overgrowth',  ];

	</script>
@stop

@section('tag') Plants, Poison Ivy, Big Ass Flowers, Whips, Thorns, Emotional Attachments @stop
@section('cont') 
	<p class="head">BACKGROUND</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
@stop