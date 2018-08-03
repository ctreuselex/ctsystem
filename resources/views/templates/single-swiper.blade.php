@extends('templates.inner')

<!-- MAIN -->
@section('main')
	<?php
		$randomSky = $_GET['skies'];

		$mColor = $skyStatus[$randomSky]['mcolor'];
		$sColor = $skyStatus[$randomSky]['scolor'];
	?>

	@yield('metas')

	<style type="text/css">
		.color-grade.top { background: linear-gradient(to bottom, {{ $mColor }} 0%, rgba(0,0,0,0) 50%); }
		.color-grade.bot { background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, {{ $sColor }} 100%); }
		.swiper-pagination-progressbar .swiper-pagination-progressbar-fill { background: {{ $sColor }}; }
	</style>

	<div class="home">
    	<div class="color-grade top"></div>
		<div id="dbcenter" class="diamond block"></div>
		<div id="dbleft" class="diamond block"></div>

    	<div class="main-page with-swiper">
    		<div class="content">
    			<div class="swiper-container">
			        <div class="swiper-wrapper">
			            @yield('slides')
			        </div>
			        <div class="swiper-pagination"></div>
			    </div>
    			<div class="title">@yield('title')</div>
    			<div class="tag">@yield('tag')</div>
    			<div class="cont">@yield('cont')</div>
    		</div>
    	</div>

		<div id="dbleftbot" class="diamond block"></div>	
    	<div class="color-grade bot"></div>
	</div>

	<script type="text/javascript">
		$(window).on('load', function() {
			initPage(mdColor, sdColor);

		    function initPage(mpColor, spColor) {
				setTimeout( function() {
					$('.main-page').fadeIn( function() {
						$('.main-page').addClass('open');

						var swiper = new Swiper('.swiper-container', {
					        slidesPerView: 'auto',
					        spaceBetween: 1,
					        pagination: {
					            el: '.swiper-pagination',
					            type: 'progressbar',
					        },
					    });
					});
				}, 1000);

				colorGradeDes('.color-grade.top', {
					delay: 0 });
				colorGradeDes('.color-grade.bot', {
					delay: 0 });

				diamondDes('#dbcenter', {
					top: 0,
					left: 20,
					size: 1000,
					color: mpColor,
					glow: true,
					animation: 'diamondDashRight 0.5s',
					delay: 250 });
				diamondDes('#dbleft', {
					top: 30,
					left: -15,
					size: 900,
					color: spColor,
					glow: true,
					animation: 'diamondDashLeft 0.5s',
					delay: 500 });
				diamondDes('#dbleftbot', {
					top: 15,
					left: -10,
					size: 400,
					color: mpColor,
					glow: true,
					animation: 'diamondGrow 0.5s',
					delay: 500 });
			}
		});
	</script>
@stop