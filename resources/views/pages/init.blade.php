@extends('templates.main')

<!-- MAIN -->
@section('main')
	<?php
		$randomSky = rand(0, count($skyStatus)-1 );

		$mColor = $skyStatus[$randomSky]['mcolor'];
		$sColor = $skyStatus[$randomSky]['scolor'];
	?>

	<style type="text/css">
		.main-menu .menu-item:hover { background-color: {{ $sColor }} }
		.main-menu .menu-item.active { border-color: {{ $mColor }}; }
		.sub-menu .menu-inner:hover { background-color: {{ $mColor }} }
		.sub-menu .menu-inner.current { background-color: {{ $mColor }} }
		.action-menu .action-item:hover { background-color: {{ $sColor }} }
		.loading-screen.loading .loading-diamond { background-color: {{ $mColor }}; }
		.loading-screen.loading .loading-diamond { box-shadow: 0 0 50px 10px {{ $mColor }}; }
    	.loading-screen.loading .loading-diamond:after { border-color: {{ $sColor }}; }

		@foreach ($mirChars as $char)
	    	<?php $ctscharcolor = $char['color']; if ($ctscharcolor=="") $ctscharcolor = "#333"; ?>
	    	<?php $ctscharsubcolor = $char['subcolor']; if ($ctscharsubcolor=="") $ctscharcolor = "#d5d5d5"; ?>
			.sub-menu .menu-inner:hover.d-{{ $char['name'] }}:hover {
		    	background-color: {{ $ctscharcolor }}; }   
			.sub-menu .menu-inner:hover.d-{{ $char['name'] }}:hover i{
				color: {{ $ctscharsubcolor }}; }
		@endforeach
	</style>

	<div class="main-card">
		<iframe id="main-frame" src="/home?skies=<?=$randomSky?>&init=0"></iframe>
		<div class="loading-screen">
			<div class="loading-diamond"><img src="{{ url('img/loading-diamond.gif') }}"></div>
		</div>

		<div class="main-menu">
			<a href="/home?skies=<?=$randomSky?>&init=1"><div class="menu-item" id="m-home"><i class="fas fa-home"></i></div></a>
			<div class="menu-item" id="m-char"><i class="fas fa-address-book"></i></div>
			<div class="menu-item" id="m-logs"><i class="far fa-calendar"></i></div>
			<div class="menu-item" id="m-divi"><i class="fas fa-chart-pie"></i></div>
			<div class="menu-item" id="m-myma"><i class="fas fa-atom"></i></div>
			<div class="menu-item" id="m-orgs"><i class="fas fa-coffee"></i></div>
		</div>
		<div class="sub-menu">
			<div class="menu-item" id="sm-char">
				<div class="menu-title">Contacts</div>
				@foreach ($mirChars as $char)
		        	@if ($char['ico']!='' && $char['color']!='')
		        		@if ($char['name']=='moon')
		        			<a href="/profile/djerick">
		        				<div class="menu-inner d-{{ $char['name'] }}">{{ $char['name'] }}<i class="{{ $char['ico'] }}"></i></div>
		        			</a>
		        		@elseif ($char['name']!='djerick' && $char['name']!='dom' && $char['name']!='cin')
		        			<a href="/profile/{{ $char['name'] }}">
		        				<div class="menu-inner d-{{ $char['name'] }}">{{ $char['name'] }}<i class="{{ $char['ico'] }}"></i></div>
		        			</a>
		        		@endif
		        	@endif
		        @endforeach
			</div>

			<div class="menu-item" id="sm-logs">
				<div class="menu-title">Conversation Logs</div>
			</div>

			<div class="menu-item" id="sm-divi">
				<!-- DIVISTIONS -->
				<div class="menu-title">City Divisions</div>
				<a href="/city/luminos?skies=<?=$randomSky?>"><div class="menu-inner">Luminos</div></a>
				<a href="/city/aeros?skies=<?=$randomSky?>"><div class="menu-inner">Aeros</div></a>
				<a href="/city/mystos?skies=<?=$randomSky?>"><div class="menu-inner">Mystos</div></a>
				<a href="/city/geios?skies=<?=$randomSky?>"><div class="menu-inner">Geios</div></a>
				<!-- RINGS -->
				<div class="menu-title">City Rings</div>
				<div class="menu-inner">Nimbocolumbus</div>
				<div class="menu-inner">Higher Ring</div>
				<div class="menu-inner">Middle Ring</div>
				<div class="menu-inner">Lower Ring</div>
			</div>

			<div class="menu-item" id="sm-myma">
				<div class="menu-title">Basics</div>
				<div class="menu-inner">Material Affinity</div>
				<div class="menu-title">Mystical Manipulations</div>
				<a href="/mystic/rudimenti?skies=<?=$randomSky?>"><div class="menu-inner">Rudimenti</div></a>
				<a href="/mystic/cirkunesi?skies=<?=$randomSky?>"><div class="menu-inner">Cirkunesi</div></a>
				<a href="/mystic/extenebri?skies=<?=$randomSky?>"><div class="menu-inner">Extenebri</div></a>
				<a href="/mystic/invorti?skies=<?=$randomSky?>"><div class="menu-inner">Invorti</div></a>
				<div class="menu-title">Special Arts</div>
				<a href="/mystic/agriconti?skies=<?=$randomSky?>"><div class="menu-inner">Agriconti</div></a>
				<a href="/mystic/sigiati?skies=<?=$randomSky?>"><div class="menu-inner">Sigiati</div></a>
				<a href="/mystic/construkti?skies=<?=$randomSky?>"><div class="menu-inner">Construkti</div></a>
				<a href="/mystic/tekinesi?skies=<?=$randomSky?>"><div class="menu-inner">Tekinesi</div></a>
				<a href="/mystic/vuidemorti?skies=<?=$randomSky?>"><div class="menu-inner">Vuidemorti</div></a>
			</div>

			<div class="menu-item" id="sm-orgs">
				<div class="menu-title">Organizations</div>
				<div class="menu-inner">The Dominion</div>
				<div class="menu-inner">The Institute</div>
				<div class="menu-inner">Psykeepers</div>
				<div class="menu-inner">Children of Mandalas</div>
				<div class="menu-inner">Landar Industries</div>
				<div class="menu-inner">Tauroscene Corporation</div>
				<div class="menu-inner">Corporal Works</div>
				<div class="menu-inner">Midring Republic</div>
				<div class="menu-inner">Carnival of Madness</div>
				<div class="menu-inner">Howlers</div>
				<div class="menu-inner">Order of the Void</div>
				<div class="menu-inner">The Ark</div>
				<div class="menu-inner">Rings United</div>
			</div>
		</div>

		<div class="action-menu">
			<div class="action-title"></div>
			<div class="action-item" id="ai-call"><i class="fas fa-phone"></i></div>
			<div class="action-item" id="ai-time"><i class="far fa-clock"></i></div>
			<div class="action-item" id="ai-inte"><i class="fas fa-globe-americas"></i></div>
			<div class="action-item" id="ai-part"><i class="fas fa-cocktail"></i></div>
			<div class="action-item" id="ai-lock"><i class="fas fa-lock"></i></i></div>
		</div>

		<div class="menu-btn"><i class="fas fa-bars"></i></div>
		<div class="menu-action"><i class="far fa-dot-circle"></i></div>
		<div class="menu-time">
			<div class="time"><span></span></div>
			<div class="fore"><?=$skyStatus[$randomSky]['name']?></div>
			<div class="user">Good Day, <b>User!</b></div>
		</div>
	</div>

	<script type="text/javascript">
		var mColor = "<?=$mColor?>";
		var sColor = "<?=$sColor?>";

		$(window).on('load', function() {
			setTimeout( function() { $('.menu-btn').fadeIn() }, 1000);
			setTimeout( function() { $('.menu-time').fadeIn() }, 1000);
		});
	</script>
@stop