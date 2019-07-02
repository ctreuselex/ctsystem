

// STAT DETAILS
var statDetails = [
	{ id: 'health', name: 'Health', 
		desc: 'Determines how much hit the character can take before being teleported back to the City.<br><br>The character\'s health at start of combat is determined as their maximum health and cannot heal beyond it.' },
	{ id: 'energy', name: 'Energy', 
		desc: 'During exploration, energy is the amount of activity the character can do for a day and can be replenished by resting.<br><br>Halved at combat, while regenerating half per turn, maximum of 15.' },
	{ id: 'myst', name: 'Myst', 
		desc: 'Is the amount of Myst the character has.<br><br>Halved at combat, while regenerating half per turn, maximum of 15.' },
	{ id: 'body', name: 'Body', 
		desc: 'Increases the amount of Health the character has. Also slightly increases Energy and Weapon Effectiveness.' },
	{ id: 'mind', name: 'Mind', 
		desc: 'Increases the character\'s Myst, Accuracy, and Affinity.' },
	{ id: 'spirit', name: 'Spirit', 
		desc: 'Gives boosts to both Energy and Myst.<br><br>In addition to current energy, determines initiative which dictates turn during battles.' },
	{ id: 'affinity', name: 'Affinity', 
		desc: 'Determines the effectiveness of the character\'s Mystic Arts.<br><br>For Mydows, a portion of their affinity gets added to their Weapon Effectiveness.' },
	{ id: 'accuracy', name: 'Accuracy', 
		desc: 'The base accuracy of the character. Varies per Mystic Art or weapon.' },
	{ id: 'evasion', name: 'Evasion', 
		desc: 'The character\'s chance to evade and receive no damage from attacks.<br><br>Only 50% of current evasion apply to burst attacks.' },
	{ id: 'counter', name: 'Counter', 
		desc: 'The chance to deflect an attack back to the attacker.<br><br>Burst attacks cannot be deflected.' },
	{ id: 'weapon', name: 'Weapon Effectiveness', 
		desc: 'Determines the character\'s weapon damage.<br><br>Also determines the percentage of damage dealt on deflect.' },
	{ id: 'heatresist', name: 'Heat Resistance', 
		desc: 'Reduces damage from heat attacks.' },
	{ id: 'coldresist', name: 'Cold Resistance', 
		desc: 'Reduces damage from cold attacks.' },
	{ id: 'sparkresist', name: 'Spark Resistance', 
		desc: 'Reduces damage from electric attacks.' },
	{ id: 'pierceresist', name: 'Piercing Resistance', 
		desc: 'Reduces damage from piercing attacks.' },
	{ id: 'slashresist', name: 'Slashing Resistance', 
		desc: 'Reduces damage from slashing attacks.' },
	{ id: 'crushresist', name: 'Crushing Resistance', 
		desc: 'Reduces damage from crushing attacks.' },
	{ id: 'persuasion', name: 'Persuasion', 
		desc: 'Determines the chance of persuading others which allows the party to trade or completely avoid fights.' },
	{ id: 'bartering', name: 'Bartering', 
		desc: 'Decreases the prices from vendors.' },
	{ id: 'thievery', name: 'Thievery', 
		desc: 'Determines the chance of successfully commiting a theft or break in.' },
	{ id: 'energycost', name: 'Energy Cost', 
		desc: 'lorem ipsum' },

	// OTHERS
	{ id: 'damage', name: '<i class="ra ra-dripping-sword"></i> Damage Dealt', 
		desc: '' },
	{ id: 'damagetaken', name: '<i class="ra ra-broken-shield"></i> Damage Taken', 
		desc: '' },
	{ id: 'duration', name: '<i class="ra ra-stopwatch"></i> Duration', 
		desc: '' },
	{ id: 'knockback', name: 'Knockback Power', 
		desc: '' },
	];

function getStatName(id) {
	var statname = "";
	if (id == "special") return statname;
	else {
		for (var i=0; i<statDetails.length; i++) {
			if (id == statDetails[i]['id']) {
				statname = statDetails[i]['name'];
			}
		}		
		return statname;
	}	
}

// INIT TOOLTIP
/*===================================================================*/
function initTooltip() {
	var mainCard = $('.main-card').offset();
	var ttTop = mainCard.top;
	var ttLeft = mainCard.left;

	$('.tooltip-ico').show();
	$('.tooltip-ico').css('top', ttTop + 30);
	$('.tooltip-ico').css('right', ttLeft + $('.main-card').width());
	$('.tooltip-box').show();
	$('.tooltip-box').css('top', ttTop + 60);
	$('.tooltip-box').css('right', ttLeft + $('.main-card').width());

	$('.tooltip-ico').on('click', function() {
		openTooltip();
	});

	var ttOpen = false;
	function openTooltip() {
		if (ttOpen) {
			$('.tooltip-ico').addClass('active');
			$('.tooltip-box').addClass('active');
			ttOpen = false;
		} else {
			$('.tooltip-ico').removeClass('active');
			$('.tooltip-box').removeClass('active');
			ttOpen = true;
		}
	}
}

function addTooltip(id) {
	var ttTitle, ttDesc;
	for (var i=0; i<statDetails.length; i++) {
		if (statDetails[i]['id'] == id) {
			ttTitle = statDetails[i]['name'];
			ttDesc = statDetails[i]['desc'];
		}
	}
	callTooltip(id, ttTitle, ttDesc);
}

function addTooltipCus(id, name, desc) {
	var ttTitle = name,
		ttDesc = desc;
	callTooltip(id, ttTitle, ttDesc);
}

function callTooltip(id, ttTitle, ttDesc) {
	$('.tt' + id).hover( function() {
		$('.tooltip-box .title').html(ttTitle);
		$('.tooltip-box .desc').html(findReplaceableTags(ttDesc));
		$('.tooltip-box .title', top.document).html(ttTitle);
		$('.tooltip-box .desc', top.document).html(findReplaceableTags(ttDesc));
	}, function() {
		$('.tooltip-box .title').html('Tooltips');
		$('.tooltip-box .desc').html('Hover over stuff to see their description.');
		$('.tooltip-box .title', top.document).html('Tooltips');
		$('.tooltip-box .desc', top.document).html('Hover over stuff to see their description.');
	});
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
