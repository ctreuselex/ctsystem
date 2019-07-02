var charStatus = [

	// DEBUFFS

		// DAMAGE
		// ======================================================================
		{ 	id: 'weaken', name: 'Weaken', icon: 'ra ra-lightning-sword',
			des: 'Your limbs limped and the stick you\'re holding suddenly becomes heavy. You question yourself; "Hey, I\'m not holding a stick!"',
			stack: 3,
			stats: [ 
				{ value: 2, stat: 'duration', onstack: false, },
				{ value: -3, stat: 'damage', onstack: false, },
				{ value: 1, stat: 'duration', onstack: true, },
				{ value: -2, stat: 'damage', onstack: true, },
			]},

		{ 	id: 'disarm', name: 'Disarm', icon: 'fa fa-sign-language',
			des: 'Sometimes, people will play dirty and hit your weapon sending it flying away from you. That\'s when you know that you got to deal with them like a man.',
			stack: 1,
			stats: [ 
				{ value: 1, stat: 'duration', onstack: false, },
				{ value: 'Weapon attacks becomes unavailable', stat: 'custom', onstack: false, },
			]},

		{ 	id: 'myst-lock', name: 'Myst Lock', icon: 'ra ra-locked-fortress',
			des: 'Oh no, you\'re Myst locked! That\'s like being a normal humna being! NOOoo!',
			stack: 1,
			stats: [ 
				{ value: 1, stat: 'duration', onstack: false, },
				{ value: 'Myst-based attacks becomes unavailable', stat: 'custom', onstack: false, },
			]},


		// ARMOR
		// ======================================================================
		{ 	id: 'frangible', name: 'Frangible', icon: 'ra ra-crystal-cluster',
			des: 'You were cursed with glass bones and paper skin. Every morning you\'ll break your legs, and every afternoon you\'ll break your arms. At night, you\'ll lie awake in agony until your heart puts you to sleep.',
			stack: 3,
			stats: [ 
				{ value: 2, stat: 'duration', onstack: false, },
				{ value: 3, stat: 'damagetaken', onstack: false, },
				{ value: 1, stat: 'duration', onstack: true, },
				{ value: 2, stat: 'damagetaken', onstack: true, },
			]},

		{ 	id: 'break', name: 'Break', icon: 'ra ra-broken-shield',
			des: 'Oops! Looks like the straps on your armor are barely armored at all.',
			stack: 3,
			stats: [ 
				{ value: 2, stat: 'duration', onstack: false, },
				{ value: -2, stat: 'pierceresist', onstack: false, },
				{ value: -2, stat: 'slashresist', onstack: false, },
				{ value: -2, stat: 'crushresist', onstack: false, },
				{ value: 1, stat: 'duration', onstack: true, },
				{ value: -2, stat: 'pierceresist', onstack: true, },
				{ value: -2, stat: 'slashresist', onstack: true, },
				{ value: -2, stat: 'crushresist', onstack: true, },
			]},


		// STUNS
		// ======================================================================
		{ 	id: 'freeze', name: 'Freeze', icon: 'ra ra-frost-emblem',
			des: 'This is the Police!',
			stack: 1,
			stats: [ 
				{ value: 2, stat: 'duration', onstack: false, },
			]},

		{ 	id: 'stun', name: 'Stun', icon: 'ra ra-doubled',
			stack: 1,
			des: 'Hitting your head against your opponents\' fist is a very good way of becoming stunned.',
			stats: [ 
				{ value: 1, stat: 'duration', onstack: false, },
			]},

		{ 	id: 'pause', name: 'Pause', icon: 'ra ra-clockwork',
			des: 'Looks like you are about to get time looped to oblivion.',
			stack: 1,
			stats: [ 
				{ value: 2, stat: 'duration', onstack: false, },
			]},


		// ETC
		// ======================================================================
		{ 	id: 'blind', name: 'Blind', icon: 'ra ra-bleeding-eye',
			des: 'Should have learned siesmic sense.',
			stack: 1,
			stats: [ 
				{ value: 3, stat: 'duration', onstack: false, },
				{ value: -50, stat: 'accuracy', onstack: false, },
			]},

		{ 	id: 'drench', name: 'Drench', icon: 'ra ra-droplet',
			des: 'You are now covered in water. Good?',
			stack: 3,
			stats: [ 
				{ value: 3, stat: 'duration', onstack: false, },
				{ value: 2, stat: 'heatresist', onstack: false, },
				{ value: -2, stat: 'sparkresist', onstack: false, },
				{ value: 1, stat: 'duration', onstack: true, },
			]},

		{ 	id: 'slow', name: 'Slow', icon: 'ra ra-footprint',
			des: 'Energy is such a precious resource you for you to be slacking in the middle of a battle.',
			stack: 2,
			stats: [ 
				{ value: 2, stat: 'duration', onstack: false, },
				{ value: -2, stat: 'energy', onstack: false, },
				{ value: 1, stat: 'duration', onstack: true, },
				{ value: -2, stat: 'energy', onstack: true, },
			]},

		{ 	id: 'myst-leak', name: 'Myst Leak', icon: 'ra ra-bottle-vapors',
			des: 'Who knew Mystics would be like a that one pipe in your house that won\'t stop slowly flooding to room.',
			stack: 2,
			stats: [ 
				{ value: 2, stat: 'duration', onstack: false, },
				{ value: -2, stat: 'myst', onstack: false, },
				{ value: 1, stat: 'duration', onstack: true, },
				{ value: -2, stat: 'myst', onstack: true, },
			]},

		{ 	id: 'spark', name: 'Spark', icon: 'ra ra-lightning-trio',
			des: 'Prepare to get shocked.',
			stack: 5,
			stats: [ 
				{ value: 3, stat: 'duration', onstack: false, },
				{ value: 'Deals electric damage based on number of stack once drenched', stat: 'custom', onstack: false, },
				{ value: 1, stat: 'duration', onstack: true, },
			]},


		// DOT
		// ======================================================================
		{ 	id: 'bleed', name: 'Bleed', icon: 'ra ra-dripping-blade',
			des: 'No. This is not the time of the month.',
			stack: 3,
			stats: [ 
				{ value: 3, stat: 'duration', onstack: false, },
				{ value: 'Deals 5% of remaining Health as damage per turn', stat: 'custom', onstack: false, },
				{ value: 1, stat: 'duration', onstack: true, },
			]},

		{ 	id: 'burn', name: 'Burn', icon: 'ra ra-fire',
			des: 'You always thought that burning would be quite painful, but not like this.',
			stack: 3,
			stats: [ 
				{ value: 3, stat: 'duration', onstack: false, },
				{ value: 'Deals 4 heat damage per turn', stat: 'custom', onstack: false, },
				{ value: 1, stat: 'duration', onstack: true, },
				{ value: 'Adds additional 3 heat damage per turn', stat: 'custom', onstack: true, },
			]},

		{ 	id: 'poison', name: 'Poison', icon: 'ra ra-skull',
			des: 'Eating that berry that you found in the middle of the field that someone obviously threw at you is definitely not a good idea.',
			stack: 3,
			stats: [ 
				{ value: 5, stat: 'duration', onstack: false, },
				{ value: 'Deals 3 damage per turn', stat: 'custom', onstack: false, },
				{ value: 2, stat: 'duration', onstack: true, },
				{ value: 'Adds additional 2 damage per turn', stat: 'custom', onstack: true, },
			]},

		{ 	id: 'rot', name: 'Rot', icon: 'ra ra-bone-bite',
			des: 'This is what you get for being dead inside.',
			stack: 3,
			stats: [ 
				{ value: 2, stat: 'duration', onstack: false, },
				{ value: 'Deals 15% of remaining Health as damage per turn', stat: 'custom', onstack: false, },
				{ value: 1, stat: 'duration', onstack: true, },
			]},
	

	// BUFFS

		// DAMAGE
		// ======================================================================
		{ 	id: 'invoke', name: 'Invoke', icon: 'ra ra-castle-emblem',
			des: 'Here comes the power of the Myst Core',
			stack: 1,
			stats: [ 
				{ value: 1, stat: 'duration', onstack: false, },
				{ value: 8, stat: 'affinity', onstack: false, },
			]},
		{ 	id: 'amplify', name: 'Amplify', icon: 'ra ra-all-for-one',
			des: 'Let the music comence!',
			stack: 3,
			stats: [ 
				{ value: 2, stat: 'duration', onstack: false, },
				{ value: 3, stat: 'damage', onstack: false, },
				{ value: 1, stat: 'duration', onstack: true, },
				{ value: 2, stat: 'damage', onstack: true, },
			]},
		{ 	id: 'weapon-ready', name: 'Weapon Ready', icon: 'ra ra-all-for-one',
			des: 'Fire at will!',
			stack: 1,
			stats: [ 
				{ value: 2, stat: 'duration', onstack: false, },
				{ value: 4, stat: 'weapon', onstack: false, },
			]},


		// ARMOR
		// ======================================================================
		{ 	id: 'fortify', name: 'Fortify', icon: 'ra ra-shield',
			des: 'happiness is equivalent to the amount of layers of armor you have.',
			stack: 1,
			stats: [ 
				{ value: 2, stat: 'duration', onstack: false, },
				{ value: 2, stat: 'pierceresist', onstack: false, },
				{ value: 2, stat: 'slashresist', onstack: false, },
				{ value: 2, stat: 'crushresist', onstack: false, },
				{ value: 1, stat: 'duration', onstack: true, },
				{ value: 2, stat: 'pierceresist', onstack: true, },
				{ value: 2, stat: 'slashresist', onstack: true, },
				{ value: 2, stat: 'crushresist', onstack: true, },
			]},

		{ 	id: 'shield', name: 'Shield', icon: 'ra ra-reactor',
			des: 'Protect me squire!',
			stack: 3,
			stats: [ 
				{ value: 2, stat: 'duration', onstack: false, },
				{ value: 'Gives shield based on Affinity', stat: 'custom', onstack: false, },
				{ value: 1, stat: 'duration', onstack: true, },
				{ value: 'Gives 50% more shield based on Affinity', stat: 'custom', onstack: true, },
			]},


		// ETC
		// ======================================================================
		{ 	id: 'haste', name: 'Haste', icon: 'ra ra-footprint',
			des: 'Someones on the rush.',
			stack: 1,
			stats: [ 
				{ value: 2, stat: 'duration', onstack: false, },
				{ value: 2, stat: 'energy', onstack: false, },
				{ value: 1, stat: 'duration', onstack: true, },
				{ value: 2, stat: 'energy', onstack: true, },
			]},

		{ 	id: 'stuff', name: 'Stuff', icon: 'ra ra-footprint',
			des: 'Hmmm... Food... Food is nice.',
			stack: 1,
			stats: [ 
				{ value: 2, stat: 'duration', onstack: false, },
			]},


	// SPECIFIC SKILL
	// ======================================================================

	{ 	id: 'clear-mind', name: 'Clear Mind', icon: 'ra ra-aware',
		des: 'Hocus pocus.',
		stack: 1,
		stats: [ 
			{ value: 1, stat: 'duration', onstack: false, },
			{ value: 20, stat: 'accuracy', onstack: false, },
		]},

	{ 	id: 'heat-wave', name: 'Heat Wave', icon: 'ra ra-fire-symbol',
		des: 'It\'s so hot everything goes woobly!',
		stack: 1,
		stats: [ 
			{ value: 2, stat: 'duration', onstack: false, },
			{ value: -3, stat: 'heatresist', onstack: false, },
			{ value: 'Prevents getting Drenched', stat: 'custom', onstack: false, },
		]},

	{ 	id: 'phase', name: 'Phase', icon: 'ra ra-bottle-vapors',
		des: 'The ghost of murders\' past.',
		stack: 1,
		stats: [ 
			{ value: 2, stat: 'duration', onstack: false, },
			{ value: 'Renders |physical| physical damage ineffective while doubles |mystical| Myst-base damage taken.', stat: 'custom', onstack: false, },
		]},

	{ 	id: 'devourers-charm', name: 'Devourver\'s Charm', icon: 'fa fa-paper-plane',
		des: '"It only hurts when I move." says the guy before he gets killed for standing still.',
		stack: 1,
		stats: [ 
			{ value: 'Deals 3 |mystical| piercing damage per tile', stat: 'custom', onstack: false, },
			{ value: 2, stat: 'duration', onstack: false, },
		]},

	{ 	id: 'lifetread-jinx', name: 'Lifetread Jinx', icon: 'fa fa-paper-plane',
		des: 'Haha. Jinx!',
		stack: 1,
		stats: [ 
			{ value: 'Deals |mystical| damage based on the difference between the caster and the target\'s health', stat: 'custom', onstack: false, },
		]},

	{ 	id: 'counter-cuttle', name: 'Counter Cuttle', icon: 'ra ra-water-drop',
		des: 'Surprise cuttle fish drone attack!',
		stack: 1,
		stats: [ 
			{ value: 'Deals 8 |mystical| slashing damage on the next unit that does damage to caster', stat: 'custom', onstack: false, },
		]},

];

	// { 	id: '', 
	// 	name: '',
	// 	icon: 'ra ',
	// 	des: '',
	// 	stats: [ ]},
function applyStatusTooltips(statuses) {
	for (var i=0; i<statuses.length; i++) {
		var status = charStatus[statuses[i]];

		var stats = "", stack = "";
		for (var j=0; j<status['stats'].length; j++) {
			var statname = getStatName(status['stats'][j]['stat']);
			var statvalue =  status['stats'][j]['value'];
			if (statvalue > 0) statvalue = "+" + statvalue;

			if (!status['stats'][j]['onstack']) {
				stats += "<div class='stat'>" + statvalue + " " + statname + "</div>";
			} else {
				stack += "<div class='stat'>" + statvalue + " " + statname + "</div>";
			}
		}

		var fulldes = status['des'] + "<hr>Initial<br>" + stats;
		if (status['stack'] > 1) fulldes += "<hr>On Stack <b>(Max: <b>" + status['stack'] + ")</b><br>" + stack;
		addTooltipCus(status['id'], status['name'], fulldes);
	}
}

function findStatusIndex(id) {
	for (var i=0; i<charStatus.length; i++) {
		if (charStatus[i]['id'] == id) return i;
	}
}