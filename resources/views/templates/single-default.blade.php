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

	   	.main-page.open .content {
	   		width: 100%; }
	   		.main-page  .cont-div .title{
			    width: calc(100%);
			    height: 100px;
			    padding: 50px 100px 0; }
	   		.main-page  .cont-div .cont {
			    width: calc(100% + 17px);
			    height: calc(100vh - 100px);
			    padding: 0 100px 100px;
			    overflow-y: scroll; }

	   	.main-page .content .cont-div .title { }
	   		.main-page .content .cont-div .title span {
				font-family: "Quicksand"; 
	   			font-size: 14px;
	   			letter-spacing: 0;
    			text-transform: initial; }
	</style>

	<div class="home">
    	<div class="color-grade top"></div>
		<div id="dbcenter" class="diamond block"></div>
		<div id="dbleft" class="diamond block"></div>

    	<div class="main-page">
    		<div class="content">
			    <div class="cont-div">
	    			<div class="title">@yield('title') <span>| @yield('tag')</span></div>
	    			<div class="cont">
	    				@yield('cont')
	    			</div>
    			</div>
    		</div>
    	</div>

		<div id="dblogoback" class="diamond outline"></div>	
		<div id="dbleftbot" class="diamond block"></div>	
    	<div class="color-grade bot"></div>
	</div>

	<script type="text/javascript">
		var mdColor = '#21EFD9';
		var sdColor = '#258D77';

		$(window).on('load', function() {
			initPage(mdColor, sdColor);

		    function initPage(mpColor, spColor) {
				setTimeout( function() {
					$('.main-page').fadeIn( function() {
						$('.main-page').addClass('open');
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
					top: -55,
					left: -15,
					size: 900,
					color: spColor,
					glow: true,
					animation: 'diamondDashLeft 0.5s',
					delay: 500 });
				diamondDes('#dbleftbot', {
					top: 50,
					left: -20,
					size: 600,
					color: mpColor,
					glow: true,
					animation: 'diamondGrow 0.5s',
					delay: 500 });

				diamondDes('#dblogoback', {
					top: -30,
					left: -10,
					size: 500,
					animation: 'diamondBorderGrow 0.5s',
					delay: 1000 });
			}
		});
	</script>
@stop