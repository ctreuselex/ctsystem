<div class="action-menu">
	<div class="action-title"></div>
	<div class="action-item" id="ai-team" onclick="openParty(this)"><i class="fas fa-users"></i></div>
	<div class="action-item" id="ai-adve"><i class="fas fa-globe-americas"></i></div>
	<div class="action-item hidden" id="ai-time"><i class="far fa-clock"></i></div>
	<div class="action-item hidden" id="ai-part"><i class="fas fa-cocktail"></i></div>
	<div class="action-item" id="ai-lock"><i class="fas fa-lock"></i></i></div>
</div>

@include('pages/menu/party-menu')

<script type="text/javascript">
	$('.main-card .action-menu .action-item').hover( function() { 
		if ($(this).attr('id') == 'ai-team') $('.main-card .action-menu .action-title').html('My Party');
		if ($(this).attr('id') == 'ai-adve') $('.main-card .action-menu .action-title').html('Adventure Mode');
		if ($(this).attr('id') == 'ai-time') $('.main-card .action-menu .action-title').html('Wake Me Up Sometime');
		if ($(this).attr('id') == 'ai-part') $('.main-card .action-menu .action-title').html('Party With \"Friends\"');
		if ($(this).attr('id') == 'ai-lock') $('.main-card .action-menu .action-title').html('Log Out');
	}, function() {
		$('.main-card .action-menu .action-title').html('');
	});

	$('.main-card .action-menu .action-item').on('click', function() {
		$('.main-card .action-menu').removeClass('open-menu');
	});

	// ACTION OPEN MENUS
	/*===================================================================*/
	$(window).on('load', function() {
		$('.main-card .menu-action').on('click', function() { 
			// CLOSE ACTION MENU
			if ($('.main-card .action-menu').hasClass('open-menu')) {
				$('.main-card .action-menu').removeClass('open-menu');
		 	// OPEN ACTION MENU
			} else {
				$('.main-card .action-menu').addClass('open-menu');
				setActionBtns();
			}
		});

		function setActionBtns() {
			var angle = 190,
				size = 50; 
				
			$('.main-card .action-menu .action-item').each( function() {
				var radians = angle * Math.PI / 180, 
					radius = 385 / 2;

				$(this).css({
					'margin-top': (Math.cos( radians ) * radius - 50) + 'px',
					'margin-left': (Math.sin( radians ) * radius - 50) + 'px',
				});
				angle += 17;
			});
		}
	});
</script>