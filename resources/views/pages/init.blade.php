@extends('templates.main')

<!-- MAIN -->
@section('main')
	<?php
		$randomSky = rand(0, count($skyStatus)-1 );

		$mColor = $skyStatus[$randomSky]['mcolor'];
		$sColor = $skyStatus[$randomSky]['scolor'];
	?>

	<style type="text/css">
		.tooltip-ico { background-color: {{ $sColor }} }
		.tooltip-ico.active { background-color: {{ $mColor }} }
		.tooltip-ico:hover { background-color: {{ $mColor }} }
		.main-menu .menu-item:hover { background-color: {{ $sColor }} }
		.main-menu .menu-item.active { border-color: {{ $mColor }}; }
		.sub-menu .menu-inner:hover { background-color: {{ $mColor }} }
		.sub-menu .menu-inner.current { background-color: {{ $mColor }} }
		.action-menu .action-item:hover { background-color: {{ $sColor }} }
		.action-menu .action-item.current { background-color: {{ $sColor }} }
		.loading-screen.loading .loading-diamond { background-color: {{ $mColor }}; }
		.loading-screen.loading .loading-diamond { box-shadow: 0 0 50px 10px {{ $mColor }}; }
    	.loading-screen.loading .loading-diamond:after { border-color: {{ $sColor }}; }

		@foreach ($mirChars as $char)
	    	<?php $ctscharcolor = $char['color']; if ($ctscharcolor=="") $ctscharcolor = "#333"; ?>
	    	<?php $ctscharsubcolor = $char['subcolor']; if ($ctscharsubcolor=="") $ctscharcolor = "#d5d5d5"; ?>
			.sub-menu .menu-inner.d-{{ $char['name'] }}:hover,
			.sub-menu .menu-inner.d-{{ $char['name'] }}.current {
		    	background-color: {{ $ctscharcolor }}; }   
			.sub-menu .menu-inner.d-{{ $char['name'] }}:hover i,
			.sub-menu .menu-inner.d-{{ $char['name'] }}.current i{
				color: {{ $ctscharsubcolor }}; }
		@endforeach

	</style>

	<div class="main-card">
		<iframe id="main-frame" src="/home?skies=<?=$randomSky?>&init=0"></iframe>
		<div class="loading-screen">
			<div class="loading-diamond"><img src="{{ url('img/loading-diamond.gif') }}"></div>
		</div>

		@include('pages/menu/main-menu')

		@include('pages/menu/action-menu')

		@include('pages/menu/party-menu')

		<div class="menu-btn"><i class="fas fa-bars"></i></div>
		<div class="menu-action"><i class="far fa-dot-circle"></i></div>
		<div class="menu-time">
			<div class="time"><span></span></div>
			<div class="fore"><?=$skyStatus[$randomSky]['name']?></div>
			<div class="user">Good Day, <b>User!</b></div>
		</div>
	</div>

	<div class="tooltip-ico"><i class="fas fa-question-circle"></i></div>
	<div class="tooltip-box">
		<div class="title">Tooltips</div>
		<div class="desc">Hover over stuff to see their description.</div>
	</div>

    <script src="{{ url('js/orig.js') }}"></script>
    <script src="{{ url('js/myma.js') }}"></script>
    <script src="{{ url('js/getr.js') }}"></script>
    <script src="{{ url('js/char.js') }}"></script>
    <script src="{{ url('js/field.js') }}"></script>
	<script type="text/javascript">
		// INITIALIZE
		/*===================================================================*/
		var mirChars = <?=json_encode($mirChars)?>;
        var charAffinities = <?=json_encode($charAffinities)?>;
        var charTraits = <?=json_encode($charTraits)?>;
        var charWeapons = <?=json_encode($charWeapons)?>;
        var charSkills = <?=json_encode($charSkills)?>;
        var charStatus = <?=json_encode($charStatus)?>;
        var charGround = <?=json_encode($charGround)?>;

		initTooltip();
		initChars();

		var baseUrl = "<?=url('/')?>";
		var mColor = "<?=$mColor?>";
		var sColor = "<?=$sColor?>";

		$(window).on('load', function() {
			$('#main-frame').contents().click(function (event) {
				$('.menu-btn').show();
				$('.menu-time').show();
				$('.menu-action').show();
			});
		});
	</script>
@stop