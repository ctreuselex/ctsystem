var charGround = [
	
	{ 	id: 'fire', name: 'Fire', icon: 'ra ra-fire',
			des: 'This ground is on fiyah ~',
			oncontact: false,
			stats: [ 
				{ value: 2, stat: 'duration', },
				{ value: 'Deals 2 |mystical| heat damage on contact', stat: 'custom', },
				{ value: 'burn', stat: 'status', },
			]},

	{ 	id: 'water', name: 'Water', icon: 'ra ra-droplet',
			des: 'Caution! Wet.',
			stats: [ 
				{ value: 4, stat: 'duration', },
				{ value: 'drench', stat: 'status', },
			]},

	{ 	id: 'mist-cover', name: 'Mist Cover', icon: 'ra ra-droplet',
			des: 'Increases evasion.',
			oncontact: false,
			stats: [ 
				{ value: 2, stat: 'duration', },
				{ value: 50, stat: 'evasion', },
			]},


	// SKILL SPECIFIC

	{ 	id: 'firewall-security', name: 'Firewall Security', icon: 'ra ra-fire',
			des: 'Just like regular fire, but hotter and it blocks ranged projectile attacks as well.',
			oncontact: false,
			stats: [ 
				{ value: 2, stat: 'duration', },
				{ value: 'Deals 4 |mystical| heat damage on contact', stat: 'custom', },
				{ value: 'burn', stat: 'status', },
			]},

	{ 	id: 'paper-crane', name: 'Paper Crane', icon: 'fa fa-paper-plane',
			des: 'This area has a floating paper crane on it. <i>Suspicious.</i>',
			oncontact: false,
			stats: [ 
				{ value: 2, stat: 'duration', },
				{ value: -30, stat: 'evasion', },
			]},

	{ 	id: 'trailblazer', name: 'Trailblazer', icon: 'ra ra-reverse',
			des: 'And from this point on, we\'ll be lightning!',
			oncontact: false,
			stats: [ 
				{ value: 2, stat: 'duration', },
				{ value: 'haste', stat: 'status', },
			]},

	{ 	id: 'kinetic-control', name: 'Kinetic Control', icon: 'ra ra-reverse',
			oncontact: true,
			des: 'An arrow a day keeps the enemies at bay.',
			stats: [ 
				{ value: 4, stat: 'duration', },
				{ value: 'Deals 10 |physical| crushing damage on contact', stat: 'custom', },
				{ value: 3, stat: 'knockback', },
			]},

];

function applyGroundTooltips(grounds) {
	for (var i=0; i<grounds.length; i++) {
		var ground = charGround[grounds[i]];

		var stats = "";
		for (var j=0; j<ground['stats'].length; j++) {
			var stattype = ground['stats'][j]['stat'];

			if (stattype == 'status') {
				var curStatus = charStatus[findStatusIndex(ground['stats'][j]['value'])];
				stats += '<div class="buff">';
				stats += 		'Inflicts <i class="' + curStatus['icon'] + '"></i> ' + curStatus['name'];
				stats += ' on contact</div>';

			} else {
				var statname = getStatName(stattype);
				var statvalue =  ground['stats'][j]['value'];
				if (statvalue > 0) statvalue = "+" + statvalue;

				stats += "<div class='stat'>" + statvalue + " " + statname + "</div>";
			}
		}

		var fulldes = ground['des'] + "<hr>" + stats;
		addTooltipCus(ground['id'], ground['name'], fulldes);
	}
}

function findGroundIndex(id) {
	for (var i=0; i<charGround.length; i++) {
		if (charGround[i]['id'] == id) return i;
	}
}