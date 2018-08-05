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

	   	.main-page.with-swiper .content {
			width: 100%; }
	   	.main-page.with-swiper .content .swiper-div,
	   	.main-page.with-swiper .content .cont-div {
			display: none; }
			.main-page.with-swiper .content .swiper-container {
				opacity: 0.8;
				width: 100%;
				transition: 0.3s; }
				.main-page.with-swiper .content .swiper-container:hover {
					opacity: 1;
					cursor: grab;
					transition: 0.3s; }
				.main-page.with-swiper .content .swiper-container:before { 
					content: ""; 
					position: absolute;
					width: 100%; height: 100%; 
					background-color: rgba(0,0,0,0.5);
					z-index: 2;
					transition: 0.3s; }
					.main-page.with-swiper .content .swiper-container:hover:before {
						background-color: rgba(0,0,0,0);
						transition: 0.3s; }
	   		.main-page.with-swiper .title {
				position: absolute; top: 215px; left: 100px;
				font-size: 50px;
				z-index: 10; }
				.main-page.with-swiper .title img {
				    position: absolute; top: -150px; left: calc(50% - 75px);
				    width: 150px;
				    filter: brightness(1000) grayscale(1); }
			.main-page.with-swiper .tag {
				position: absolute; top: 275px; left: 100px;
				z-index: 10; }
			.main-page.with-swiper .cont {
				width: calc(100% + 17px);
			    height: calc(100vh - 300px);
			    padding: 0 100px 0;
			    overflow-y: scroll; } 
		    	.main-page.with-swiper .cont:before { 
		    		animation: scrollLoop 1.5s infinite;
		    		content: "";
		    		position: absolute; right: 0;
		    		width: 5px;
	    			background-color: white; }
			   	.main-page.with-swiper .cont:after {
					content: "";
					display: block;
					height: 100px;
					width: 100%; }
			    .main-page.with-swiper .cont img {
				    width: 150px;
				    float: right;
				    margin-left: 15px;
				    margin-bottom: 15px;
				    filter: brightness(1000) grayscale(1); }
	</style>

	<div class="home">
    	<div class="color-grade top"></div>
		<div id="dbcenter" class="diamond block"></div>
		<div id="dbleft" class="diamond block"></div>

    	<div class="main-page with-swiper">
    		<div class="content">
    			<div class="swiper-div">
	    			<div class="swiper-container">
				        <div class="swiper-wrapper">
				            @yield('slides')
				        </div>
				        <div class="swiper-pagination"></div>
				    </div>
			    </div>
			    <div class="cont-div">
	    			<div class="title">@yield('title')</div>
	    			<div class="tag">@yield('tag')</div>
	    			<div class="cont">@yield('cont')</div>
    			</div>
    		</div>
    	</div>

		<div id="dblogoback" class="diamond outline"></div>	
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

						$('.main-page .content .swiper-div').slideDown();
						$('.main-page .content .cont-div').fadeIn();
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
					top: 55,
					left: -15,
					size: 900,
					color: spColor,
					glow: true,
					animation: 'diamondDashLeft 0.5s',
					delay: 500 });
				diamondDes('#dbleftbot', {
					top: 25,
					left: -20,
					size: 400,
					color: mpColor,
					glow: true,
					animation: 'diamondGrow 0.5s',
					delay: 500 });

				diamondDes('#dblogoback', {
					top: -20,
					left: -10,
					size: 500,
					animation: 'diamondBorderGrow 0.5s',
					delay: 1000 });
			}
		});
	</script>
@stop