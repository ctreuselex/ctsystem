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
        	@if (isset($char['show']))
        		@if ($char['show'])
	    			<a href="/profile/{{ $char['name'] }}?skies=<?=$randomSky?>">
	    				<div class="menu-inner d-{{ $char['name'] }}">{{ $char['name'] }}<i class="{{ $char['icon'] }}"></i></div>
	    			</a>
	        	@endif
        	@endif
        @endforeach
	</div>

	<div class="menu-item" id="sm-logs">
		<div class="menu-title">Conversation Logs</div>
	</div>

	<div class="menu-item" id="sm-divi">
		<div class="menu-title">Divisions</div>
			<a href="/city/luminos?skies=<?=$randomSky?>">				<div class="menu-inner">Luminos</div></a>
				<a href="/city/flood-folk?skies=<?=$randomSky?>">		<div class="menu-inner sub">Flood Folk</div></a>
				<a href="/city/bluebloods?skies=<?=$randomSky?>">		<div class="menu-inner sub">Bluebloods</div></a>
			<a href="/city/aeros?skies=<?=$randomSky?>">				<div class="menu-inner">Aeros</div></a>
				<a href="/city/sky-jumper?skies=<?=$randomSky?>">		<div class="menu-inner sub">Sky Jumpers</div></a>
				<a href="/city/urban-dwellers?skies=<?=$randomSky?>">	<div class="menu-inner sub">Urban Dwellers</div></a>
			<a href="/city/mystos?skies=<?=$randomSky?>">				<div class="menu-inner">Mystos</div></a>
				<a href="/city/aristocrats?skies=<?=$randomSky?>">		<div class="menu-inner sub">Aristocrats</div></a>
				<a href="/city/bourgeios?skies=<?=$randomSky?>">		<div class="menu-inner sub">Bourgeois</div></a>
			<a href="/city/geios?skies=<?=$randomSky?>">				<div class="menu-inner">Geios</div></a>
				<a href="/city/entrepreneurs?skies=<?=$randomSky?>">	<div class="menu-inner sub">Entrepreneurs</div></a>
				<a href="/city/free-artists?skies=<?=$randomSky?>">		<div class="menu-inner sub">Free Artists</div></a>
		<div class="menu-title">History</div>
			<a href="/timeline?skies=<?=$randomSky?>">				<div class="menu-inner">Timeline</div></a>
	</div>

	<div class="menu-item" id="sm-myma">
		<div class="menu-title">Mystic Arts</div>
			<a href="/mystic/rudimenti?skies=<?=$randomSky?>">			<div class="menu-inner">Rudimenti</div></a>
				<a href="/mystic/agriconti?skies=<?=$randomSky?>">		<div class="menu-inner sub">Agriconti</div></a>
				<a href="/mystic/sigiati?skies=<?=$randomSky?>">		<div class="menu-inner sub">Sigiati</div></a>
			<a href="/mystic/cirkunesi?skies=<?=$randomSky?>">			<div class="menu-inner">Cirkunesi</div></a>
				<a href="/mystic/construkti?skies=<?=$randomSky?>">		<div class="menu-inner sub">Construkti</div></a>
			<a href="/mystic/extenebri?skies=<?=$randomSky?>">			<div class="menu-inner">Extenebri</div></a>
				<a href="/mystic/tekinesi?skies=<?=$randomSky?>">		<div class="menu-inner sub">Tekinesi</div></a>
				<a href="/mystic/vuidemorti?skies=<?=$randomSky?>">		<div class="menu-inner sub">Vuidemorti</div></a>
			<a href="/mystic/invorti?skies=<?=$randomSky?>">			<div class="menu-inner">Invorti</div></a>
		<div class="menu-title">Material Affinity</div>
			<a href="/mystic/common?skies=<?=$randomSky?>">				<div class="menu-inner">Common</div></a>
			<a href="/mystic/abstract?skies=<?=$randomSky?>">			<div class="menu-inner">Abstract</div></a>
			<a href="/mystic/special?skies=<?=$randomSky?>">			<div class="menu-inner">Special</div></a>
	</div>

	<div class="menu-item" id="sm-orgs">
		<div class="menu-title">Organizations</div>
			<a href="/org/the-dominion?skies=<?=$randomSky?>">			<div class="menu-inner">The Dominion</div></a>
			<a href="/org/the-institute?skies=<?=$randomSky?>">			<div class="menu-inner">The Institute</div></a>
			<a href="/org/psykeepers?skies=<?=$randomSky?>">			<div class="menu-inner">Psykeepers</div></a>
			<a href="/org/children-of-mandalas?skies=<?=$randomSky?>">	<div class="menu-inner">Children of Mandalas</div></a>
			<a href="/org/landar-industries?skies=<?=$randomSky?>">		<div class="menu-inner">Landar Industries</div></a>
			<a href="/org/tauroscene-corporation?skies=<?=$randomSky?>"><div class="menu-inner">Tauroscene Corporation</div></a>
			<a href="/org/corporal-works?skies=<?=$randomSky?>">		<div class="menu-inner">Corporal Works</div></a>
			<a href="/org/midring-republic?skies=<?=$randomSky?>">		<div class="menu-inner">Midring Republic</div></a>
			<a href="/org/carnival-of-madness?skies=<?=$randomSky?>">	<div class="menu-inner">Carnival of Madness</div></a>
			<a href="/org/howlers?skies=<?=$randomSky?>">				<div class="menu-inner">Howlers</div></a>
			<a href="/org/order-of-the-void?skies=<?=$randomSky?>">		<div class="menu-inner">Order of the Void</div></a>
			<a href="/org/the-ark?skies=<?=$randomSky?>">				<div class="menu-inner">The Ark</div></a>
			<a href="/org/rings-united?skies=<?=$randomSky?>">			<div class="menu-inner">Rings United</div></a>
	</div>
</div>

<script type="text/javascript">
	// MAIN MENU
	/*===================================================================*/
	var menuData = "";
	$(window).on('load', function() {

		function getTime() {
			var dt = new Date();
			var time = dt.getHours() + ":" + dt.getMinutes();

			$('.menu-time .time span').html(time);
		}

		$('.main-card .menu-btn').on('click', function() {
			// CLOSE MAIN MENU
			if ($('.main-card .main-menu').hasClass('open-menu')) {
				closeMainMenu();
		 	// OPEN MAIN MENU
			} else {
				$('.main-card .main-menu').addClass('open-menu');
				$('.main-card iframe').addClass('open-menu');

				var iframe = $('.main-card iframe');
				$('.main-page.for-char.open .menu-party', iframe.contents()).removeClass('open');
				$('.main-page.for-char.open', iframe.contents()).addClass('menu-open');
			}
		});

		// SUB MENU
		/*===================================================================*/
		$('.main-card .main-menu .menu-item').on('click', function() {
			// CLICK SAME MAIN MENU BTN
			if (menuData == $(this).attr('id')) {
				closeMainMenu();
			// CLICK DIFFIRENT MAIN MENU BTN
			} else {
				// CHANGE SUB MENU WITHOUT CLOSING SUB MENU
				if ($('.main-card .sub-menu').hasClass('open-menu')) {
					menuData = $(this).attr('id');
					$('.main-card .main-menu .menu-item').removeClass('active');
					$(this).addClass('active');

					$('.main-card .sub-menu .menu-item').removeClass('open');
					$('.main-card .sub-menu .menu-item#s' + menuData).addClass('open');
					addMenuDelay('.menu-item#s' + menuData);
				// CHANGE SUB MENU AND OPEN SUB MENU
				} else {
					menuData = $(this).attr('id');
					$('.main-card .main-menu .menu-item').removeClass('active');
					$(this).addClass('active');

					$('.main-card .sub-menu').addClass('open-menu');
					$('.main-card .sub-menu .menu-item').removeClass('open');
					$('.main-card .sub-menu .menu-item#s' + menuData).addClass('open');
					addMenuDelay('.menu-item#s' + menuData);
				}
			}
		});

		function addMenuDelay(el) {
			var tDelay = 0.00;
			$(el  + ' a').each( function() {
				$(this).css({ 
					'transition-delay': tDelay + "s" });
				tDelay += 0.05;
			});
		}
	});

	function closeMainMenu(callback) {
		// CLOSE MAIN MENU AND SUB MENU
		if ($('.main-card .sub-menu').hasClass('open-menu')) {
			$('.main-card .sub-menu .menu-item').removeClass('open');
			$('.main-card .sub-menu').removeClass('open-menu');
			setTimeout( function() {
				$('.main-card .main-menu').removeClass('open-menu');
				$('.main-card .main-menu .menu-item').removeClass('active');
				$('.main-card iframe').removeClass('open-menu');
				if (typeof callback !== 'undefined') callback();
			}, 300);	
		// CLOSE ONLY MAIN MENU
		} else {
			$('.main-card .sub-menu').removeClass('open-menu');
			$('.main-card .main-menu').removeClass('open-menu');
			$('.main-card .main-menu .menu-item').removeClass('active');
			$('.main-card iframe').removeClass('open-menu');
			if (typeof callback !== 'undefined') callback();
		}
		menuData = "";

		var iframe = $('.main-card iframe');
		$('.main-page.for-char.open .menu-party', iframe.contents()).addClass('open');
		$('.main-page.for-char.open', iframe.contents()).removeClass('menu-open');
	}
</script>