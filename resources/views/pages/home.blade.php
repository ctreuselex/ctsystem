@extends('templates.inner')

<!-- METAS -->
@section('title') 
	Mirrorplane
@stop

<!-- MAIN -->
@section('main')
	<?php
		$init = $_GET['init'];
		$randomSky = $_GET['skies'];

		$mColor = $skyStatus[$randomSky]['mcolor'];
		$sColor = $skyStatus[$randomSky]['scolor'];

		$randomNews = rand(0, count($newsCasts)-1 );
		$newsHead = $newsCasts[$randomNews]['headline'];
		$newsDetail = $newsCasts[$randomNews]['detail'];
	?>

	<style type="text/css">
		.color-grade.top { background: linear-gradient(to bottom, {{ $mColor }} 0%, rgba(0,0,0,0) 50%); }
		.color-grade.bot { background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, {{ $sColor }} 100%); }
		.newscast .news-title { color: {{ $sColor }}; };
	</style>

	<div class="home">
		<div class="init" onclick="initCore()">
			<div id="dbinit" class="diamond block"></div>
			<div id="doinit" class="diamond outline"></div>
			<div class="init-btn"><i class="far fa-dot-circle"></i></div>
		</div>

		<div class="load">
			<img src="{{ url('img/loading-diamond.gif') }}">
		</div>

    	<div class="color-grade top"></div>
		<div id="dbcenter" class="diamond block"></div>

		<div id="particles-js" style="display: none;"></div> 

		<div id="dbleft" class="diamond block"></div>
		<div id="dbright" class="diamond block"></div>
		<div id="docenter" class="diamond outline"></div>

    	<div class="color-grade bot"></div>
		<div class="logo">
			<img src="{{ url('img/mirrorplane-logo.png') }}">
		</div>

		<div class="newscast">
			<div class="news-title"><?=$newsHead?></div>
			<div class="news-cont"><?=$newsDetail?></div>
		</div>

	</div>

	<script type="text/javascript">

		var init = "<?=$init?>";
		var mColor = "<?=$mColor?>";
		var sColor = "<?=$sColor?>";

		$(document).ready( function() {

			if(init==0) {
				// INIT BUTTON
				diamondDes('#dbinit', {
					top: 'center',
					left: 'center',
					size: 200,
					color: mColor,
					glow: true,
					animation: 'diamondShrink 0.3s',
					delay: 500 });
				diamondDes('#doinit', {
					top: 'center',
					left: 'center',
					size: 175,
					animation: 'diamondBorderGrow 0.5s',
					delay: 500 });
			} else {
				initCore();
			}
		});

		// INIT MAIN FUNCTIONS
		function initCore() {
			$('#particles-js').fadeIn('slow');
			initParticles();

			$('.init').fadeOut( function() {
				$('.load').fadeIn();

				setTimeout( function() {
					$('.load').fadeOut('fast', function() {
						$('.logo').fadeIn();
						setTimeout( function() { $('.newscast').fadeIn() }, 500);
					});
				}, 2500);

				colorGradeDes('.color-grade.top', {
					delay: 750 });
				colorGradeDes('.color-grade.bot', {
					delay: 1500 });

				diamondDes('#dbcenter', {
					top: 5,
					left: 'center',
					size: 800,
					color: '#9C27B0',
					glow: true,
					animation: 'diamondGrow 0.3s',
					delay: 500 });
				diamondDes('#docenter', {
					top: 'center',
					left: 'center',
					size: 750,
					animation: 'diamondBorderGrow 0.5s',
					delay: 1500 });

				diamondDes('#dbleft', {
					top: 40,
					left: -15,
					size: 700,
					color: '#F3A40C',
					glow: true,
					animation: 'diamondDashLeft 0.5s',
					delay: 1000 });
				diamondDes('#dbright', {
					top: -35,
					left: 60,
					size: 700,
					color: '#26DC9F ',
					glow: true,
					animation: 'diamondDashRight 0.3s',
					delay: 1250 });
			});
		}

		// PARTICLES
		function initParticles() {
			particlesJS("particles-js", 
				{	"particles":{
						"number":{"value":50,"density":{"enable":true,"value_area":800}},
						"color":{"value":sColor},
						"shape":{"type":"polygon","stroke":{"width":0,"color":"#000000"},
							"polygon":{"nb_sides":4},
							"image":{"src":"img/github.svg","width":100,"height":100}},
						"opacity":{"value":1,"random":true,
							"anim":{"enable":true,"speed":1,"opacity_min":0.1,"sync":false}},
						"size":{"value":5,"random":true,
							"anim":{"enable":true,"speed":1,"size_min":0.5,"sync":false}},
						"line_linked":{"enable":true,"distance":50,"color":sColor,"opacity":0.5,"width":1},
						"move":{"enable":true,"speed":1,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,
							"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
					"interactivity":{
						"detect_on":"canvas",
						"events":{"onhover":{"enable":true,"mode":"grab"},
							"onclick":{"enable":true,"mode":"push"},
							"resize":true},
						"modes":{"grab":{"distance":100,"line_linked":{"opacity":0.3}},
							"bubble":{"distance":400,"size":4,"duration":0.3,"opacity":1,"speed":3},
							"repulse":{"distance":200,"duration":0.4},
							"push":{"particles_nb":4},
							"remove":{"particles_nb":2}}},
					"retina_detect":true});
		}

	</script>
@stop