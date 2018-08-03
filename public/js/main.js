
// PAGE CHANGE 
/*===================================================================*/
$(document).on('click', '.main-card a', function(event){
    event.preventDefault();
    var link = $.attr(this, 'href');

    $('.main-card .sub-menu .menu-inner').removeClass('current');
    if ($(this).attr('id') != 'm-home') {
	    $('.menu-inner', this).addClass('current');
    }

    $('#main-frame').addClass('page-load');
    $('.loading-screen').addClass('loading');
    setTimeout( function() {		
		$('#main-frame').attr('src', link);
		$('#main-frame').on('load', function() {
			$('#main-frame').removeClass('page-load');
			setTimeout( function() { $('.loading-screen').removeClass('loading') }, 300);
		});
	}, 300);
	
    $('.main-card .sub-menu').removeClass('open-menu');
	setTimeout( function() {
		$('.main-card .main-menu').removeClass('open-menu');
		$('.main-card .main-menu .menu-item').removeClass('active');
		$('.main-card iframe').removeClass('open-menu');
	}, 300);	
});

// COLOR GRADE
/*===================================================================*/
function colorGradeDes(el, details) {
	if (details['delay'] != null) {
		setTimeout( function() {
			$(el).fadeIn();
		}, details['delay'])
	} else {
		$(el).fadeIn();
	}
}

// INIT DIAMOND
/*===================================================================*/
function diamondDes(el, details) {

	// INIT TOP
	var dSize = details['size'];
	if (details['size'] == null) dSize = $(el).height();
	if (details['top'] == 'center') {
		$(el).css({ "top": "calc(50% - " + (dSize / 2) + "px" });
	} else {
		$(el).css({ "top": details['top'] + "%" });
	}

	// INIT LEFT
	var dSize = details['size'];
	if (details['size'] == null) dSize = $(el).width();
	if (details['left'] == 'center') {
		$(el).css({ "left": "calc(50% - " + (dSize / 2) + "px" });
	} else {
		$(el).css({ "left": details['left'] + "%" });
	}

	// INIT SIZE
	$(el).css({
		"width": details['size'] + "px",
		"height": details['size'] + "px", });	

	// INIT COLOR
	$(el).css({ "background-color": details['color'] });

	// INIT GLOW
	if (details['glow']) {
		$(el).css({ "box-shadow": "0 0 100px 20px " + details['color'] });
	}

	// INIT ANIMATION AND DELAY
	if (details['delay'] != null) {
		setTimeout( function() {
			if (details['animation'] != null) animateDiamond(el, details['animation']);
			else $(el).fadeIn();
		}, details['delay'])
	} else {
		if (details['animation'] != null) animateDiamond(el, details['animation']);
		else $(el).fadeIn();
	}

	function animateDiamond(el, animation) {
		$(el).show();
		$(el).css('animation', animation);
	}

}


// TIME
/*===================================================================*/
$(window).on('load', function() {

	setInterval( function() {
		getTime();
	}, 1000);

	function getTime() {
		var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
		var dt = new Date();

		// FULL DATE
		var month = dt.getMonth();
		var day = dt.getDate();
		var output =
		    monthNames[month] + ' ' + (day<10 ? '0' : '') + day +
		    ' | <span></span>';
		$('.menu-time .time').html(output);

		// TIME
		var minutes = dt.getMinutes();		
		var time = dt.getHours() + ":" + (minutes<10 ? '0' : '') + minutes;
		$('.menu-time .time span').html(time);
	}

});


// MAIN MENU
/*===================================================================*/
$(window).on('load', function() {

	function getTime() {
		var dt = new Date();
		var time = dt.getHours() + ":" + dt.getMinutes();

		$('.menu-time .time span').html(time);
	}

	$('.main-card .menu-btn').on('click', function() {
		// CLOSE MAIN MENU
		if ($('.main-card .main-menu').hasClass('open-menu')) {
			// CLOSE MAIN MENU AND SUB MENU
			if ($('.main-card .sub-menu').hasClass('open-menu')) {
				$('.main-card .sub-menu').removeClass('open-menu');
				setTimeout( function() {
					$('.main-card .main-menu').removeClass('open-menu');
					$('.main-card .main-menu .menu-item').removeClass('active');
					$('.main-card iframe').removeClass('open-menu');
				}, 300);	
			// CLOSE  ONLY MAIN MENU
			} else {
				$('.main-card .sub-menu').removeClass('open-menu');
				$('.main-card .main-menu').removeClass('open-menu');
				$('.main-card .main-menu .menu-item').removeClass('active');
				$('.main-card iframe').removeClass('open-menu');
			}
	 	// OPEN MAIN MENU
		} else {
			$('.main-card .main-menu').addClass('open-menu');
			$('.main-card iframe').addClass('open-menu');
		}
	});

	var menuData = "";
	$('.main-card .main-menu .menu-item').on('click', function() {
		// CLICK SAME MAIN MENU BTN
		if (menuData == $(this).attr('id')) {
			// CLOSE SUB MENU
			if ($('.main-card .sub-menu').hasClass('open-menu')) {
				menuData = "";
				$('.main-card .main-menu .menu-item').removeClass('active');
				$('.main-card .sub-menu').removeClass('open-menu');
			// OPEN SUB MENU
			} else {
				menuData = $(this).attr('id');
				$('.main-card .main-menu .menu-item').removeClass('active');
				$(this).addClass('active');

				$('.main-card .sub-menu').addClass('open-menu');
				$('.main-card .sub-menu .menu-item').hide();
				$('.main-card .sub-menu .menu-item#s' + menuData).show();
			}
		// CLICK DIFFIRENT MAIN MENU BTN
		} else {
			// CHANGE SUB MENU WITHOUT CLOSING SUB MENU
			if ($('.main-card .sub-menu').hasClass('open-menu')) {
				menuData = $(this).attr('id');
				$('.main-card .main-menu .menu-item').removeClass('active');
				$(this).addClass('active');

				$('.main-card .sub-menu .menu-item').hide();
				$('.main-card .sub-menu .menu-item#s' + menuData).show();
			// CHANGE SUB MENU AND OPEN SUB MENU
			} else {
				menuData = $(this).attr('id');
				$('.main-card .main-menu .menu-item').removeClass('active');
				$(this).addClass('active');

				$('.main-card .sub-menu').addClass('open-menu');
				$('.main-card .sub-menu .menu-item').hide();
				$('.main-card .sub-menu .menu-item#s' + menuData).show();
			}
		}
	});

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

	$('.main-card .action-menu .action-item').hover( function() { 
		if ($(this).attr('id') == 'ai-call') $('.main-card .action-menu .action-title').html('Call My Father');
		if ($(this).attr('id') == 'ai-time') $('.main-card .action-menu .action-title').html('Wake Me Up Sometime');
		if ($(this).attr('id') == 'ai-inte') $('.main-card .action-menu .action-title').html('Waste My Time');
		if ($(this).attr('id') == 'ai-part') $('.main-card .action-menu .action-title').html('Party With \"Friends\"');
		if ($(this).attr('id') == 'ai-lock') $('.main-card .action-menu .action-title').html('Log Out & Lock the Gates');
	}, function() {
		$('.main-card .action-menu .action-title').html('');
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
