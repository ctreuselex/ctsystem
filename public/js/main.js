
// STAT DETAILS
var statDetails = [
	{ id: 'health', name: 'Health', },
	{ id: 'energy', name: 'Energy', },
	{ id: 'myst', name: 'Myst', },
	{ id: 'body', name: 'Body', },
	{ id: 'mind', name: 'Mind', },
	{ id: 'spirit', name: 'Spirit', },
	{ id: 'affinity', name: 'Affinity', },
	{ id: 'weapon', name: 'Weapon Effectiveness', },
	{ id: 'heatresist', name: 'Heat Resistance', },
	{ id: 'coldresist', name: 'Cold Resistance', },
	{ id: 'sparkresist', name: 'Spark Resistance', },
	{ id: 'pierceresist', name: 'Piercing Resistance', },
	{ id: 'slashresist', name: 'Slashing Resistance', },
	{ id: 'crushresist', name: 'Crushing Resistance', },
	{ id: 'persuasion', name: 'Persuasion', },
	{ id: 'bartering', name: 'Bartering', },
	{ id: 'thievery', name: 'Thievery', },
	{ id: 'energycost', name: 'Energy Cost', },
	{ id: 'buff', name: '', },
	];

function findStatName(id) {
	for (var i=0; i<statDetails.length; i++) {
		if (id == statDetails[i]['id']) {
			return statDetails[i]['name']
		}
	}				
}

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
			setTimeout( function() { 
				$('.loading-screen').addClass('unload');
				setTimeout( function() { 
					$('.loading-screen').addClass('kept');
					$('.loading-screen').removeClass('loading unload');
					setTimeout( function() {
						$('.loading-screen').removeClass('kept');
					}, 1000);
				}, 500);
			}, 300);
		});
	}, 500);
	
	closeMainMenu();
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
		$(el).css('animation', '');
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

function outFocus(focus, callback) {
	if(focus) {
		$('#main-frame').addClass('out-focus');
		$('.menu-btn').addClass('out-focus');
		$('.menu-time').addClass('out-focus');
	} else {
		$('#main-frame').removeClass('out-focus');
		$('.menu-btn').removeClass('out-focus');
		$('.menu-time').removeClass('out-focus');
	}

	setTimeout(callback(), 500);
}
