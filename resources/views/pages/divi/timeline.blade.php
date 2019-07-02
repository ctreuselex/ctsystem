@extends('templates.single-default')

@section('metas')
	<style type="text/css">
		.main-page .cont-div .cont {
			height: calc(100vh - 90px) !important;
			padding: 0 100px !important;
			overflow: hidden; }
		.main-page .cont .tl-list {
			float: left;
			width: 50%;
			height: 100%;
		    padding: 0 5px 0 0; }
			/*height: calc(100vh - 100px);*/
		 	/*overflow-y: scroll; }*/

		.main-page .cont .tl-box .head {
			float: left;
			width: 100%;
			background-color: rgba(0,0,0,0.7);
			font-size: 14px;
		    font-weight: initial;
			border-left: 5px solid grey;
			border-right: 5px solid grey;
		    padding: 5px 15px;
			margin: 0 0 1px;
			cursor: pointer;
			transition: 0.5s; }	
			.main-page .cont .tl-box.open .head {
				background-color: white;
				color: #333; 
				transition: 0.3s; }

			.main-page .cont .tl-box .head .col {
				float: left;
				width: calc(100% / 3); }
			.main-page .cont .tl-box .head .date { 
				font-family: "Quicksand"; 
				font-size: 12px;
				text-transform: initial; }
			.main-page .cont .tl-box .head .main { 
				font-family: "Quicksand"; 
				font-size: 12px;
				text-transform: capitalize;
				text-align: right; }
		.main-page .cont .tl-box .desc {
			float: left;
			width: 100%;
			background-color: rgba(0,0,0,0.5);
			font-size: 12px;
			line-height: 1.3;
		    padding: 5px 15px;
			margin: 0 0 5px; }

		.main-page .cont .tl-display {
			float: left;
			width: 50%;
			height: 100%;
			background-color: rgba(0,0,0,0.5);
    		font-size: 12px;
			padding: 15px; }
			.main-page .cont .tl-display .name {
				position: relative; right: 0;
			    font-family: "Righteous";
			    font-size: 30px;
			    font-weight: bold;
			    text-transform: uppercase;
			    letter-spacing: -1px;
			    opacity: 1;
			    transition: 0.3s; }
				.main-page .cont .tl-display.change .name {
					right: -50px;
					opacity: 0;
					transition: 0.3s; }
			.main-page .cont .tl-display .desc {
				position: relative; right: 0;
				opacity: 1;
				transition: 0.5s; }
				.main-page .cont .tl-display.change .desc {
					right: -50px;
					opacity: 0;
					transition: 0.5s; }
	</style>

	<script type="text/javascript">
		var mdColor = '#21EFD9';
		var sdColor = '#258D77';
	</script>
@stop

@section('title') Timeline @stop
@section('tag') History of Mirrorplane @stop
@section('cont') 
	<div class="tl-list">

		<?php foreach ($mirTimeline as $k => $tl) : ?>
			<div class="tl-box" onclick="openTimeline(this, '{{ $k }}')">

				<?php 
					// DATE FORMAT
					$date = explode('|', $tl['date']);
					$seasonNames = ['', '| Summer', '| Fall', '| Winter', '| Spring'];
					$season = $seasonNames[$date[1]];
					$day = "";
					if ($date[2] > 0) $day = "| " . $date[2];

					// CHARACTER COLOR
					$lColor = "grey"; $rColor = "grey";
					$charName = "";
					foreach ($mirChars as $c) {
						if ($tl['main'] == $c['name']) {
							$lColor = $c['color'];
							$rColor = $c['subcolor'];
							$charName = $c['name'];
						}
					}
				?>

				<div class="head" style="border-left-color: {{ $lColor }}; border-right-color: {{ $rColor }}">
					<div class="col date">{{ $date[0] }} {{ $season }} {{ $day }}</div>
					<div class="col name">{{ $tl['name'] }}</div>
					<div class="col main">{{ $charName }}</div>
				</div>
				<!-- <div class="desc">{{ $tl['cont'] }}</div> -->

			</div>
		<?php endforeach ?>

	</div>
	<div class="tl-display">
		<div class="name"></div>
		<div class="desc"></div>
	</div>

	<script type="text/javascript">
		var mirTimeline = <?=json_encode($mirTimeline)?>;

		function openTimeline(el, id) {
			var name = mirTimeline[id]['name'];
			var cont = mirTimeline[id]['cont'];

			$('.tl-display').addClass('change');
			setTimeout( function() {
				$('.tl-display .name').html(name);
				$('.tl-display .desc').html(cont);
				$('.tl-display').removeClass('change');
			}, 500);


			$('.tl-list .tl-box').removeClass('open');
			$(el).addClass('open');
		}
	</script>
@stop