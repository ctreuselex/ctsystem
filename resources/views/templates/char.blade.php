@extends('templates.inner')

<!-- MAIN -->
@section('main')
	<?php
		$randomSky = $_GET['skies'];

		$mColor = $skyStatus[$randomSky]['mcolor'];
		$sColor = $skyStatus[$randomSky]['scolor'];
	?>

    <script src="{{ url('js/orig.js') }}"></script>
    <script src="{{ url('js/myma.js') }}"></script>
    <script src="{{ url('js/getr.js') }}"></script>
    <script src="{{ url('js/char.js') }}"></script>
    <script src="{{ url('js/field.js') }}"></script>

	@yield('metas')

	<style type="text/css">
		.color-grade.top { background: linear-gradient(to bottom, {{ $mColor }} 0%, rgba(0,0,0,0) 50%); }
		.color-grade.bot { background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, {{ $sColor }} 100%); }

		.main-page.for-char .scroll {
		    padding: 250px 50px 75px;
		    transition: 0.3s; }

		.main-page.for-char .hero {
		    position: absolute;
			background-color: transparent;
		    background-size: auto 100%;
		    /*background-size: auto 1100px;*/
		    background-repeat: no-repeat;
		    z-index: -1;
		    filter: contrast(5) brightness(5) sepia(1) opacity(0); }
			.main-page.for-char.open .hero {
				width: calc(100%);
		    	background-position: center;
		    	/*background-position: left;*/
		    	filter: contrast(1) brightness(1) sepia(0) opacity(1);
		    	transition-delay: 2s;
			    transition: 2s;  }
			.main-page.for-char.open .hero:before { 
				border: 0; }

		.main-page.for-char .hero.bright {
		    filter: contrast(5) brightness(5) sepia(0) opacity(1); }
			.main-page.for-char.open .hero.bright {
		    	filter: contrast(0) brightness(5) sepia(0) opacity(0); }	

		@keyframes charAnimateBright {
			0% { filter: contrast(1) brightness(1) sepia(0) opacity(1); }
			20% { filter: contrast(1) brightness(1) sepia(0) opacity(1); }
			50% { filter: contrast(1.5) brightness(1.3) sepia(0.3) opacity(1); }
			80% { filter: contrast(1) brightness(1) sepia(0) opacity(1); }
			100% { filter: contrast(1) brightness(1) sepia(0) opacity(1); }
		}

		.main-page.for-char .content { 
    		position: relative; left: 0; }
			.main-page.for-char.open .content {
				width: 100%;
    			padding-left: 55%; }

	    	.main-page.for-char .title,
	    	.main-page.for-char .tag,
	    	.main-page.for-char .cont {
		    	position: relative;
	    		z-index: 5; }
		    	.main-page.for-char .title {
		    		text-transform: capitalize;
		    		font-variant: small-caps;
		    		font-size: 50px;
		    		line-height: 0.8;
				    white-space: nowrap;
				    margin-bottom: 5px; }
		    	.main-page.for-char .cont {
				    width: 100%; }
				    .main-page.for-char .cont p {
	    				text-indent: 0; } 

			.main-page.for-char .menu-party {
			    display: inline-table;
				position: absolute; top: -100%; left: 0;
    			width: 25%;
			    padding: 5px;
			    opacity: 1; }
				.main-page.for-char.open .menu-party.open {
				    top: -10px;
				    opacity: 1; 
				    visibility: visible; }

				.main-page.for-char .menu-party .scroll {
				    overflow-y: scroll;
				    overflow-x: hidden;
				    padding: 5px  5px 125px !important; }

			   	.main-page.for-char .menu-party .char {
			   		top: -10px;
			   		width: 100%; 
			   		height: calc(100% - 10px);
			   		margin: 0; }

		#dblefttop { 
		    z-index: -1; }
		#dblefttop.open {
			transform: rotate(45deg) scaleX(1) scaleY(1);
			animation: diamondDashY 0.5s !important;
			animation-fill-mode: forwards !important; }
		#dbleftbot.open {
			transform: rotate(45deg) scaleX(1) scaleY(1);
			animation: diamondDashX 0.5s !important;
			animation-fill-mode: forwards !important; }

		.main-page.for-char.open.menu-open .hero {
    		left: -20% !important;
		    /*background-size: auto 100%;*/
    		transition: 1s; }

	</style>

	<div class="home">
    	<div class="color-grade top"></div>
		<div id="dbcenter" class="diamond block"></div>
		<div id="dbleft" class="diamond block"></div>

    	<div class="main-page for-char">

			<div id="dblefttop" class="diamond block"></div>
    		<div class="hero"></div>
    		<div class="hero bright"></div>
			<div id="dbleftbot" class="diamond block ontop"></div>	

    		<div class="content">
    			<div class="scroll">
    				<div class="desc">
		    			<div class="title"></div>
		    			<div class="tag">@yield('tag')</div>
		    			<div class="cont">@yield('cont')</div>
	    			</div>
    			</div>

				<div class="menu-party">
					<div class="char" id="char0">
						<div class="scroll">
							<div class="stats origin"><div class="attr">There's nothing here...</div></div>

							<div class="stats attributes">
								<div class="stat tthealth"><i class="ra ra-heart-bottle"></i> Health: 		<span class="val health"></span></div>
								<div class="stat ttenergy"><i class="ra ra-corked-tube"></i> Energy: 		<span class="val energy"></span></div>
								<div class="stat ttmyst"><i class="ra ra-fizzing-flask"></i> Myst: 		<span class="val myst"></span></div>

								<div class="colrow">
									<div class="col3 ttbody"><div class="stat"><i class="ra ra-muscle-up"></i>			<span class="val statbody"></span></div></div>
									<div class="col3 ttmind"><div class="stat"><i class="ra ra-aware"></i> 			<span class="val statmind"></span></div></div>
									<div class="col3 ttspirit"><div class="stat"><i class="ra ra-player-teleport"></i> 	<span class="val statspirit"></span></div></div>
								</div>

								<div class="stat ttweapon"><i class="ra ra-all-for-one "></i> Weapon Effectiveness: <span class="val statweapon"></span></div>
								<div class="stat ttaffinity"><i id="stataffinityicon" class=""></i> <span class="stataffinityelem"></span> <span class="val stataffinity"></span></div>

								<div class="colrow">
									<div class="col3 ttaccuracy"><div class="stat"><i class="ra ra-burning-eye"></i>		<span class="val stataccuracy"></span></div></div>
									<div class="col3 ttevasion"><div class="stat"><i class="ra ra-double-team"></i> 		<span class="val statevasion"></span></div></div>
									<div class="col3 ttcounter"><div class="stat"><i class="ra ra-divert"></i> 			<span class="val statcounter"></span></div></div>
								</div>
							</div>

							<div class="stats resistances colrow">
								<div class="col3">
									<div class="stat ttheatresist"><i class="ra ra-fire-symbol"></i> 		<span class="val statheatresist"></span></div>
									<div class="stat ttcoldresist"><i class="ra ra-snowflake"></i> 			<span class="val statcoldresist"></span></div>
								</div>
								<div class="col3">
									<div class="stat ttsparkresist"><i class="ra ra-lightning-bolt"></i>  	<span class="val statsparkresist"></span></div>
									<div class="stat ttpierceresist"><i class="ra ra-broadhead-arrow"></i> 	<span class="val statpierceresist"></span></div>
								</div>
								<div class="col3">
									<div class="stat ttslashresist"><i class="ra ra-sword"></i> 				<span class="val statslashresist"></span></div>
									<div class="stat ttcrushresist"><i class="ra ra-large-hammer"></i> 		<span class="val statcrushresist"></span></div>
								</div>
							</div>

							<div class="stats social">
								<div class="colrow">
									<div class="col3 ttpersuasion"><div class="stat"><i class="ra ra-cycle"></i> 	<span class="val statpersuasion">0</span></div></div>
									<div class="col3 ttbartering"><div class="stat"><i class="ra ra-diamond"></i>  	<span class="val statbartering">0</span></div></div>
									<div class="col3 ttthievery"><div class="stat"><i class="ra ra-hood"></i> 		<span class="val statthievery">0</span></div></div>
								</div>
							</div>
							
							<div class="stats traits"><div class="attr">There's nothing here...</div></div>
							<div class="stats skills"><div class="attr">There's nothing here...</div></div>
						</div>
					</div>
				</div>

    		</div>
    	</div>

    	<div class="color-grade bot"></div>
	</div>

	<script type="text/javascript">
		var baseUrl = "<?=url('/')?>";
		var mirChars = <?=json_encode($mirChars)?>;
        var charAffinities = <?=json_encode($charAffinities)?>;
        var charTraits = <?=json_encode($charTraits)?>;
        var charWeapons = <?=json_encode($charWeapons)?>;
        var charSkills = <?=json_encode($charSkills)?>;
        var charStatus = <?=json_encode($charStatus)?>;
        var charGround = <?=json_encode($charGround)?>;

		var mdColor, sdColor;
		$('.main-page .hero').css('background-image', "url('" + heroImage + "')");
		for (var i=0; i<mirChars.length; i++) {
			if (mirChars[i]['name'] == charName) {
				mdColor = mirChars[i]['color'];
				sdColor = mirChars[i]['subcolor'];

				if (charCusName != '') $('.main-page .title').html(charCusName);
				else $('.main-page .title').html( mirChars[i]['name'] + ' ' + mirChars[i]['sur'] );
			}
		}

		for (var i=0; i<charPerTraits.length; i++) { if(charPerTraits[i] != '') partyChars[0]['traits'].push( getTraitIndex(charPerTraits[i]) ) }
		for (var i=0; i<charPerWeapons.length; i++) { if(charPerWeapons[i] != '') partyChars[0]['weaps'].push( getWeapIndex(charPerWeapons[i]) ) }
		for (var i=0; i<charPerSkills.length; i++) { if(charPerSkills[i] != '') partyChars[0]['arts'].push( getArtIndex(charPerSkills[i]) ) }
		setChar(0);

		$(window).on('load', function() {

			initPage(mdColor, sdColor);

			function initPage(mpColor, spColor) {
				$('.main-page.for-char .menu-party').css('background-color', mdColor + '80' );
				$('.main-page.for-char .scroll').css('padding-top', charScrollTop + 'px');
				// $('.main-page.for-char .hero').css('background-position-y', charTop);
				// $('.main-page.for-char .menu-party .char').css('background-color', mdColor + '80' );

				setTimeout( function() {
					$('.main-page').fadeIn( function() {
						$('.main-page').addClass('open');
						$('.main-page.for-char.open .hero').css('left', charLeft);

						setTimeout( function() { $('#dbleftbot').addClass('open') }, 1000);
						setTimeout( function() { $('#dblefttop').addClass('open') }, 1250);
						setTimeout( function() { $('.main-page.for-char.open .menu-party').addClass('open') }, 2000);
						setTimeout( function() { $('.main-page.for-char.open .hero').css('animation', 'charAnimateBright 6s infinite') }, 3000);
						setTimeout( function() { $('.main-page.for-char.open .hero.bright').remove() }, 3000);
						
					});
				}, 1000);

				colorGradeDes('.color-grade.top', {
					delay: 0 });
				colorGradeDes('.color-grade.bot', {
					delay: 0 });

				diamondDes('#dbcenter', {
					top: 25,
					left: 35,
					size: 700,
					color: spColor,
					glow: true,
					animation: 'diamondDashRight 0.5s',
					delay: 250 });
				diamondDes('#dbleft', {
					top: -10,
					left: -15,
					size: 1000,
					color: mpColor,
					glow: true,
					animation: 'diamondDashLeft 0.5s',
					delay: 500 });
				diamondDes('#dblefttop', {
					top: 40,
					left: 25,
					size: 200,
					color: spColor,
					glow: true,
					animation: 'diamondGrow 0.5s',
					delay: 1750 });
				diamondDes('#dbleftbot', {
					top: 35,
					left: 60,
					size: 400,
					color: mpColor,
					glow: true,
					animation: 'diamondShrink 0.5s',
					delay: 1250 });
			}
		});
	</script>
@stop