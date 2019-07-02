var charSkills = [

	// MYDOW
	// ===========================================================================================
	{ 	id: 'encourage', name: 'Encourage', unique: false,
		affinity: 'mydow', req: '', hits: 1,
		energycost: 3, mystcost: 0, type: 'instant', accuracy: 0, area: 'all', target: 'allies',
		des: 'Your words inspires and magically boosts your allies\' skills with the power of friendship.',
		effects: [
			{ val: 'amplify', type: 'status', con: 100 },
			]},

	{ 	id: 'sturdy-block', name: 'Sturdy Block', unique: false,
		affinity: 'mydow', req: '', hits: 1,
		energycost: 3, mystcost: 0, type: 'instant', accuracy: 0, area: 'dot', target: 'self',
		des: 'Readies yourself for incoming damage, effectively decreasing the damage taken.',
		effects: [
			{ val: '', type: '', con: '' },
			]},

	{ 	id: 'weapon-ready', name: 'Weapon Ready', unique: false,
		affinity: 'mydow', req: '', hits: 1,
		energycost: 3, mystcost: 0, type: 'instant', accuracy: 0, area: 'dot', target: 'self',
		des: 'Temporarily increases weapon effectiveness.',
		effects: [
			{ val: 'weapon-ready', type: 'status', con: 90 },
			]},

	{ 	id: 'clear-mind', name: 'Clear Mind', unique: false,
		affinity: 'mydow', req: '', hits: 1,
		energycost: 3, mystcost: 0, type: 'instant', accuracy: 0, area: 'dot', target: 'self',
		des: 'Removes intrusive thoughts and clears the mind from distractions, applying Amplify.',
		effects: [
			{ val: 'clear-mind', type: 'status', con: 100 },
			]},

	{ 	id: 'trash-talk', name: 'Trash Talk', unique: true,
		affinity: 'mydow', req: '', hits: 1,
		energycost: 3, mystcost: 0, type: 'instant', accuracy: 0, area: 'all', target: 'enemies',
		des: 'Talks loudly about how you\'re going to make them kiss your boots. No <i>Chance</i> they\'ll win this one.',
		effects: [
			{ val: 'weaken', type: 'status', con: 60 },
			]},


	// MYTICS
	// ===========================================================================================
	{ 	id: 'hex-shield', name: 'Hex Shield', unique: false,
		affinity: 'myst', req: '', hits: 1,
		energycost: 3, mystcost: 3, type: 'ranged-projectile', accuracy: 0, area: 'dot', target: 'self',
		des: 'Creates a shield that protects the target from damage.',
		effects: [
			{ val: '', type: '', con: '' },
			]},

	{ 	id: 'myst-dagger', name: 'Myst Dagger', unique: false,
		affinity: 'myst', req: '', hits: 2,
		energycost: 5, mystcost: 3, type: 'ranged-projectile', accuracy: 0, area: 'dot', target: 'enemies',
		des: 'Throws a bunch of Myst daggers at the target, dealing piercing damage.',
		effects: [
			{ val: 0.7, type: 'affinitydamage', con: 'mystical|piercing' },
			]},


	{ 	id: 'mystfire-leap', name: 'Mystfire Leap', unique: false,
		affinity: 'myst', req: '', hits: 1,
		energycost: 5, mystcost: 3, type: 'dash', accuracy: 0, area: 'dot', target: 'ground',
		des: 'Dashes backwards while dealing heat damage towards the front cone with fire-like energy.',
		effects: [
			{ val: 2, type: 'dash', con: '' },
			{ val: 1.1, type: 'affinitydamage', con: 'mystical|piercing' },
			]},

	{ 	id: 'mystfire-sweep', name: 'Mystfire Sweep', unique: false,
		affinity: 'myst', req: '', hits: 1,
		energycost: 5, mystcost: 5, type: 'melee', accuracy: 0, area: 'linever', target: 'enemies',
		des: 'Sweeps the front with a Myst blade. Causing severe damage and bleeding.',
		effects: [
			{ val: 1.9, type: 'affinitydamage', con: 'mystical|slashing' },
			{ val: 'bleed', type: 'status', con: 80 },
			]},

	{ 	id: 'mystfire-bolt', name: 'Mystfire Bolt', unique: false,
		affinity: 'myst', req: '', hits: 1,
		energycost: 3, mystcost: 5, type: 'ranged-projectile', accuracy: 0, area: 'dot', target: 'self',
		des: 'Conjures a Mystical ball of fire-like energy that deals heat damage. Could just be fire though.',
		effects: [
			{ val: 1.1, type: 'affinitydamage', con: 'mystical|heat' },
			]},

	{ 	id: 'comet-fall', name: 'Comet Fall', unique: false,
		affinity: 'myst', req: '', hits: 1,
		energycost: 5, mystcost: 7, type: 'Instant', accuracy: -10, area: 'all', target: 'enemies',
		des: 'Rain down a barrage of Myst arrows, damaging and breaking enemies\' armors.',
		effects: [
			{ val: 1.3, type: 'affinitydamage', con: 'mystical|piercing' },
			{ val: 'break', type: 'status', con: 80 },
			]},

	{ 	id: 'phase', name: 'Phase', unique: true,
		affinity: 'myst', req: '', hits: 1,
		energycost: 3, mystcost: 5, type: 'instant', accuracy: 0, area: 'dot', target: 'self',
		des: 'Turns self into pure Myst, rendering physical damage ineffective at the cost of doubling Myst-based damage taken.',
		effects: [
			{ val: 'phase', type: 'status', con: 100 },
			]},

	{ 	id: 'ethereal-shot', name: 'Ethereal Shot', unique: true,
		affinity: 'myst', req: 'clear-mind', hits: 1,
		energycost: 7, mystcost: 9, type: 'ranged-burst', accuracy: 100, area: 'linehor', target: 'enemies',
		des: 'Fires a void arrow that deals massive amount of damage towards a line while leaving any survivors Myst-locked.',
		effects: [
			{ val: 5, type: 'affinitydamage', con: 'mystical|piercing' },
			{ val: 'myst-lock', type: 'status', con: 100 },
			]},

	{ 	id: 'fiery-bind', name: 'Fiery Bind', unique: true,
		affinity: 'myst', req: '', hits: 1,
		energycost: 5, mystcost: 3, type: 'ranged-projectile', accuracy: 0, area: 'dot', target: 'self',
		des: 'Throws a Mystfire chain that binds the target, unable to do anything while also being burned.',
		effects: [
			{ val: 'stun', type: 'status', con: 70 },
			{ val: 'burn', type: 'status', con: 85 },
			]},

	{ 	id: 'cinder-blade', name: 'Cinder Blade', unique: true,
		affinity: 'myst', req: '', hits: 2,
		energycost: 5, mystcost: 5, type: 'ranged-projectile', accuracy: 0, area: 'linehor', target: 'enemies',
		des: 'Swings two chain blades that damages and burns enemies.',
		effects: [
			{ val: 1.1, type: 'affinitydamage', con: 'mystical|slashing' },
			{ val: 'burn', type: 'status', con: 60 },
			]},

	{ 	id: 'invoke', name: 'Invoke', unique: true,
		affinity: 'myst', req: '', hits: 2,
		energycost: 5, mystcost: 5, type: 'instant', accuracy: 0, area: 'dot', target: 'self',
		des: 'Draws a sigiati sigin proceed with an invocation that dramatically increases your affinity.',
		effects: [
			{ val: 'invoke', type: 'status', con: 50 },
			]},


	// FIRE
	// ===========================================================================================
	{ 	id: 'heat-wave', name: 'Heat Wave', unique: false,
		affinity: 'fire', req: '', hits: 1,
		energycost: 3, mystcost: 3, type: 'instant', accuracy: 0, area: 'all', target: 'all',
		des: 'Increases the temperature in the surrounding area decreasing everyone\'s heat resistance and preventing them from getting drenched.',
		effects: [
			{ val: 'heat-wave', type: 'status', con: 90 },
			]},

	{ 	id: 'ignition-punch', name: 'Ignition Punch', unique: false,
		affinity: 'fire', req: '', hits: 1,
		energycost: 3, mystcost: 5, type: 'melee', accuracy: 0, area: 'dot', target: 'enemies',
		des: 'Get upclose and personal with a flaming fist of fury, dealing heat damage.',
		effects: [
			{ val: 1.6, type: 'affinitydamage', con: 'mystical|heat' },
			{ val: 'stun', type: 'status', con: 30 },
			]},

	{ 	id: 'fire-blast', name: 'Fire Blast', unique: false,
		affinity: 'fire', req: '', hits: 1,
		energycost: 5, mystcost: 5, type: 'ranged-projectile', accuracy: 10, area: 'dot', target: 'enemies',
		des: 'Throws a small lob of flames that deals heat damage and inflicts burn.',
		effects: [
			{ val: 1.5, type: 'affinitydamage', con: 'mystical|heat' },
			{ val: 'burn', type: 'status', con: 80 },
			]},

	{ 	id: 'fire-burst', name: 'Fire Burst', unique: false,
		affinity: 'fire', req: '', hits: 1,
		energycost: 5, mystcost: 7, type: 'ranged-burst', accuracy: 0, area: 'cross', target: 'enemies',
		des: 'Creates a massive burst of flame underneath a target which severely burns them to a crisp. Can be used for perfect smores or just general cooking.',
		effects: [
			{ val: 1.7, type: 'affinitydamage', con: 'mystical|heat' },
			{ val: 'fire', type: 'ground', con: '' },
			]},

	{ 	id: 'flame-breath', name: 'Flame Breath', unique: false,
		affinity: 'fire', req: '', hits: 1,
		energycost: 5, mystcost: 5, type: 'melee', accuracy: 0, area: 'dot', target: 'enemies',
		des: 'Breathe a cone of fire which burns the target enemies, while also giving a boost the users resistance to cold.',
		effects: [
			{ val: '', type: '', con: '' },
			]},

	{ 	id: 'heat-screen', name: 'Heat Screen', unique: false,
		affinity: 'fire', req: '', hits: 1,
		energycost: 3, mystcost: 3, type: 'instant', accuracy: 0, area: 'dot', target: 'allies',
		des: 'Decreases the amount of heat damage the whole party is taking from fire related antics.',
		effects: [
			{ val: '', type: '', con: '' },
			]},

	{ 	id: 'ring-of-fire', name: 'Ring of Fire', unique: false,
		affinity: 'fire', req: '', hits: 1,
		energycost: 3, mystcost: 5, type: 'instant', accuracy: 0, area: 'ring', target: 'all',
		des: 'Creates a circling ring of fire that prevents those dirty-handed snatchers from stealing Ceniza\'s favourite purse.',
		effects: [
			{ val: 1.2, type: 'affinitydamage', con: 'mystical|heat' },
			{ val: 'fire', type: 'ground', con: '' },
			]},

	{ 	id: 'firewall-security', name: 'Firewall Security', unique: true,
		affinity: 'fire', req: '', hits: 1,
		energycost: 5, mystcost: 7, type: 'ranged-burst', accuracy: 0, area: 'linever', target: 'all',
		des: 'Conjures a massive wall of flame that damage every enemy while also staying for the entire turn to demolish all incoming projectiles.',
		effects: [
			{ val: 2.5, type: 'affinitydamage', con: 'mystical|heat' },
			{ val: 'firewall-security', type: 'ground', con: '' },
			]},

	{ 	id: 'phoenix-dive', name: 'Phoenix Dive', unique: true,
		affinity: 'fire', req: '', hits: 1,
		energycost: 7, mystcost: 7, type: 'dash', accuracy: 0, area: 'ring', target: 'ground',
		des: 'Dive bombs towards the target, dealing massive damage and inflicting burn to other enemies.',
		effects: [
			{ val: 5, type: 'dash', con: '' },
			{ val: 3, type: 'affinitydamage', con: 'mystical|heat' },
			{ val: 'burn', type: 'status', con: 100 },
			]},

	// WATER
	// ===========================================================================================

	{ 	id: 'aqua-slide', name: 'Aqua Slide', unique: false,
		affinity: 'water', req: '', hits: 1,
		energycost: 3, mystcost: 3, type: 'dash', accuracy: 10, area: 'linehor', target: 'ground',
		des: 'Penguin slides towards the target location, drenching everybody inline, including yourself.',
		effects: [
			{ val: 'drench', type: 'status', con: 100 },
			]},

	{ 	id: 'mist-cover', name: 'Mist Cover', unique: false,
		affinity: 'water', req: '', hits: 1,
		energycost: 3, mystcost: 3, type: 'instant', accuracy: 0, area: 'box', target: 'ground',
		des: 'Creates a thick cloud of mist the increases the evasion of anyone in it.',
		effects: [
			{ val: 'mist-cover', type: 'ground', con: 100 },
			]},

	{ 	id: 'water-whip', name: 'Water Whip', unique: false,
		affinity: 'water', req: '', hits: 1,
		energycost: 3, mystcost: 3, type: 'ranged-projectile', accuracy: 10, area: 'dot', target: 'enemies',
		des: 'Wildly whip them with water like an octopus out in the open.',
		effects: [
			{ val: 1, type: 'affinitydamage', con: 'physical|slashing' },
			{ val: 'drench', type: 'status', con: 80 },
			]},

	{ 	id: 'water-prison', name: 'Water Prison', unique: false,
		affinity: 'water', req: '', hits: 1,
		energycost: 1, mystcost: 3, type: 'ranged-projectile', accuracy: 0, area: 'dot', target: 'self',
		des: 'Locks a target in into a water prison, drenching and preventing them from doing any action in their next turn.',
		effects: [
			{ val: '', type: '', con: '' },
			]},

	{ 	id: 'vapor-blade', name: 'Vapor Blade', unique: false,
		affinity: 'water', req: '', hits: 1,
		energycost: 5, mystcost: 3, type: 'instant', accuracy: 0, area: 'ring', target: 'enemies',
		des: 'Form a circular ring of water and slash enemies who get close.',
		effects: [
			{ val: 1.4, type: 'affinitydamage', con: 'physical|slashing' },
			{ val: 'bleed', type: 'status', con: 70 },
			]},

	{ 	id: 'counter-cuttle', name: 'Counter Cuttle', unique: true,
		affinity: 'water', req: '', hits: 1,
		energycost: 3, mystcost: 3, type: 'instant', accuracy: 0, area: 'dot', target: 'self',
		des: 'Proceed to go counter mode, damaging the next person that damages Kash, as well as making them bleed.',
		effects: [
			{ val: 'counter-cuttle', type: 'status', con: 100 },
			]},

	{ 	id: 'razor-waters', name: 'Razor Waters', unique: false,
		affinity: 'water', req: '', hits: 3,
		energycost: 5, mystcost: 5, type: 'dash', accuracy: 0, area: 'dot', target: 'enemies',
		des: 'Clings towards an enemy and unleashes a barrage of water blades on their face.',
		effects: [
			{ val: 0.9, type: 'affinitydamage', con: 'physical|slashing' },
			{ val: 'bleed', type: 'status', con: 60 },
			]},

	{ 	id: 'surfers-wave', name: 'Surfer\'s Wave', unique: false,
		affinity: 'water', req: '', hits: 1,
		energycost: 2, mystcost: 3, type: 'instant', accuracy: 0, area: 'dot', target: 'self',
		des: 'Pushes a giant wave of water that deals massive damage to anything in its path.',
		effects: [
			{ val: '', type: '', con: '' },
			]},

	{ 	id: 'whirlpool', name: 'Whirlpool', unique: true,
		affinity: 'water', req: 'drench', hits: 5,
		energycost: 7, mystcost: 7, type: 'instant', accuracy: -30, area: 'ring', target: 'all',
		des: 'Moon unleashes his inner breakdancer and damages everyone around him with pure, unfiltered, cringe damage mixed with his coolness aura.',
		effects: [
			{ val: 0.8, type: 'weapondamage', con: 'physical|slashing' },
			{ val: 0.6, type: 'affinitydamage', con: 'mystical|cold' },
			]},


	// EARTH
	// ===========================================================================================
	{ 	id: 'dust', name: 'Dust', unique: false,
		affinity: 'earth', req: '', hits: 1,
		energycost: 1, mystcost: 1, type: 'ranged-projectile', accuracy: 0, area: 'dot', target: 'self',
		des: 'Creates a cloud of dust that blinds opponents or hides allies, decreasing the chance of getting hit.',
		effects: [
			{ val: '', type: '', con: '' },
			]},

	{ 	id: 'knockout-boulder', name: 'Knockout Boulder', unique: false,
		affinity: 'earth', req: '', hits: 1,
		energycost: 1, mystcost: 2, type: 'ranged-projectile', accuracy: 0, area: 'dot', target: 'self',
		des: 'Pulls a rock from the ground and slings it to the target, possibly stunning them.',
		effects: [
			{ val: '', type: '', con: '' },
			]},

	{ 	id: 'earth-wall', name: 'Earth Wall', unique: false,
		affinity: 'earth', req: '', hits: 1,
		energycost: 1, mystcost: 2, type: 'instant', accuracy: 0, area: 'dot', target: 'self',
		des: 'Creates a wall of earth that gives all allies extra protection.',
		effects: [
			{ val: '', type: '', con: '' },
			]},

	{ 	id: 'earth-pillar', name: 'Earth Pillar', unique: false,
		affinity: 'earth', req: '', hits: 1,
		energycost: 1, mystcost: 2, type: 'ranged-projectile', accuracy: 0, area: 'dot', target: 'self',
		des: 'Gives yourself, or an ally the high ground; giving them higher chance to land their attacks but disables them from giving and taking melee hits.',
		effects: [
			{ val: '', type: '', con: '' },
			]},


	// AIR
	// ===========================================================================================
	{ 	id: 'air-slice', name: 'Air Slice', unique: false,
		affinity: 'air', req: '', hits: 1,
		energycost: 1, mystcost: 1, type: 'ranged-projectile', accuracy: 0, area: 'dot', target: 'self',
		des: 'The bread and butter of air Mystics. Makes them real good at fruit cutting contests during festivals.',
		effects: [
			{ val: '', type: '', con: '' },
			]},

	{ 	id: 'air-dome', name: 'Air Dome', unique: false,
		affinity: 'air', req: '', hits: 1,
		energycost: 1, mystcost: 2, type: 'ranged-projectile', accuracy: 0, area: 'dot', target: 'self',
		des: 'Creates a dome of air around a target that blocks all ranged-projectile attacks.',
		effects: [
			{ val: '', type: '', con: '' },
			]},

	{ 	id: 'pressure-slam', name: 'Pressure Slam', unique: false,
		affinity: 'air', req: '', hits: 1,
		energycost: 1, mystcost: 2, type: 'ranged-projectile', accuracy: 0, area: 'dot', target: 'self',
		des: 'Crushes the target with the weight of your <strike>sins</strike> air pressure.',
		effects: [
			{ val: '', type: '', con: '' },
			]},

	{ 	id: 'evasive-maneuver', name: 'Evasive Maneuver', unique: false,
		affinity: 'air', req: '', hits: 1,
		energycost: 2, mystcost: 2, type: 'instant', accuracy: 0, area: 'dot', target: 'self',
		des: 'Allows you to dodge all incoming ranged-projectile or melee attacks.',
		effects: [
			{ val: '', type: '', con: '' },
			]},


	// LIGHT
	// ===========================================================================================
	{ 	id: 'flash-light', name: 'Flash Light', unique: false,
		affinity: 'light', req: '', hits: 1,
		energycost: 0, mystcost: 1, type: 'ranged-projectile', accuracy: 0, area: 'dot', target: 'self',
		des: 'Flahes a bright light that blinds the target, lowering their accuracy.',
		effects: [
			{ val: '', type: '', con: '' },
			]},

	{ 	id: 'blinding-light', name: 'Blinding Light', unique: false,
		affinity: 'light', req: '', hits: 1,
		energycost: 3, mystcost: 5, type: 'ranged-burst', accuracy: 0, area: 'ring', target: 'enemies',
		des: 'blinds evrey enemies around you from the sheer glow of your awesomeness.',
		effects: [
			{ val: 0.5, type: 'affinitydamage', con: 'mystical|heat' },
			{ val: 'blind', type: 'status', con: 80 },
			]},

	{ 	id: 'focused-ray', name: 'Focused Ray', unique: false,
		affinity: 'light', req: '', hits: 1,
		energycost: 5, mystcost: 5, type: 'ranged-burst', accuracy: 0, area: 'linehor', target: 'enemies',
		des: 'Blasts a bright ray of light, damaging the target and lowering their resistances.',
		effects: [
			{ val: 0.8, type: 'affinitydamage', con: 'mystical|heat' },
			{ val: 'break', type: 'status', con: 60 },
			]},

	{ 	id: 'luminous-orb', name: 'Luminous Orb', unique: false,
		affinity: 'light', req: '', hits: 1,
		energycost: 1, mystcost: 1, type: 'ranged-projectile', accuracy: 0, area: 'dot', target: 'self',
		des: 'Creates a luminous orb that hovers around the target allies, blinding enemies how tries to hit them.',
		effects: [
			{ val: '', type: '', con: '' },
			]},

	{ 	id: 'counter-prism', name: 'Counter Prism', unique: false,
		affinity: 'light', req: '', hits: 1,
		energycost: 1, mystcost: 1, type: 'instant', accuracy: 0, area: 'dot', target: 'self',
		des: 'Readies one\'s self to counter incoming melee attack with another heat attack.',
		effects: [
			{ val: '', type: '', con: '' },
			]},


	// ELECTRIC
	// ===========================================================================================
	{ 	id: 'spark', name: 'Spark', unique: false,
		affinity: 'electric', req: '', hits: 1,
		energycost: 0, mystcost: 1, type: 'instant', accuracy: 0, area: 'dot', target: 'self',
		des: 'Generate a current of electricity on your body that can used for your attacks.',
		effects: [
			{ val: '', type: '', con: '' },
			]},

	{ 	id: 'spark-wave', name: 'Spark Wave', unique: false,
		affinity: 'electric', req: '', hits: 1,
		energycost: 1, mystcost: 2, type: 'instant', accuracy: 0,  area: 'dot', target: 'self',
		des: 'Blasts the surrounding area with electricity, basically electrifying all who are drenched.',
		effects: [
			{ val: '', type: '', con: '' },
			]},

	{ 	id: 'lightning-arc', name: 'Lightning Arc', unique: false,
		affinity: 'electric', req: 'spark', hits: 1,
		energycost: 1, mystcost: 1, type: 'ranged-projectile', accuracy: 0,  area: 'dot', target: 'self',
		des: 'Directs your electric current at the target dealing massive damage based on your spark stack.',
		effects: [
			{ val: '', type: '', con: '' },
			]},

	{ 	id: 'bolt-curve', name: 'Bolt Curve', unique: false,
		affinity: 'electric', req: 'spark', hits: 1,
		energycost: 1, mystcost: 1, type: 'ranged-projectile', accuracy: 0,  area: 'dot', target: 'self',
		des: 'Redirects someone else\'s electric current to a target, dealing damage if they are drenched.',
		effects: [
			{ val: '', type: '', con: '' },
			]},


	// FROST
	// ===========================================================================================
	{ 	id: 'freeze', name: 'Freeze', unique: false,
		affinity: 'frost', req: '', hits: 1,
		energycost: 0, mystcost: 0, type: 'instant', accuracy: 0, area: 'dot', target: 'self',
		des: 'lowers temp',
		effects: [
			{ val: '', type: '', con: '' },
			]},

	{ 	id: 'mist-cloud', name: 'Mist Cloud', unique: false,
		affinity: 'frost', req: '', hits: 1,
		energycost: 0, mystcost: 0, type: 'instant', accuracy: 0, area: 'dot', target: 'self',
		des: 'lowers temp',
		effects: [
			{ val: '', type: '', con: '' },
			]},

	{ 	id: 'mist-clouds', name: 'Mist Clouds', unique: false,
		affinity: 'frost', req: '', hits: 1,
		energycost: 0, mystcost: 0, type: 'instant', accuracy: 0, area: 'dot', target: 'self',
		des: 'lowers temp',
		effects: [
			{ val: '', type: '', con: '' },
			]},


	// PLANT
	// ===========================================================================================
	{ 	id: 'seedling', name: 'Seedling', unique: false,
		affinity: 'plant', req: '', hits: 1,
		energycost: 0, mystcost: 0, type: 'instant', accuracy: 0, area: 'dot', target: 'self',
		des: 'Creat spore cloud',
		effects: [
			{ val: '', type: '', con: '' },
			]},

	{ 	id: 'rapid-growth', name: 'Rapid Growth', unique: false,
		affinity: 'plant', req: '', hits: 1,
		energycost: 0, mystcost: 0, type: 'instant', accuracy: 0, area: 'dot', target: 'self',
		des: 'Creat spore cloud',
		effects: [
			{ val: '', type: '', con: '' },
			]},

	{ 	id: 'rapid-growths', name: 'Rapid Growths', unique: false,
		affinity: 'plant', req: '', hits: 1,
		energycost: 0, mystcost: 0, type: 'instant', accuracy: 0, area: 'dot', target: 'self',
		des: 'Creat spore cloud',
		effects: [
			{ val: '', type: '', con: '' },
			]},

	// METAL
	// ===========================================================================================
	{ 	id: 'forge',name: 'Forge', unique: false,
		affinity: 'metal', req: '', hits: 1,
		energycost: 1, mystcost: 2, type: 'instant', accuracy: 0, area: 'dot', target: 'self',
		des: 'If there is no other option to obtaining metal, you create your own.',
		effects: [
			{ val: '', type: '', con: '' },
			]},

	{ 	id: 'metal-eye',name: 'Metal Eye', unique: false,
		affinity: 'metal', req: '', hits: 1,
		energycost: 0, mystcost: 1, type: 'ranged-projectile', accuracy: 0, area: 'dot', target: 'self',
		des: 'Detects all metallic material in the surrounding area giving you the weapons you need in combat. While also allowing you to take advantage of the enemies\' armor\'s weaknesses.',
		effects: [
			{ val: '', type: '', con: '' },
			]},

	{ 	id: 'shrapnel',name: 'Shrapnel', unique: false,
		affinity: 'metal', req: '', hits: 1,
		energycost: 1, mystcost: 2, type: 'ranged-projectile', accuracy: 0, area: 'dot', target: 'self',
		des: 'Using metal bars and/or ores from inventory, throws a bunch of sharp metal sheets at the target.',
		effects: [
			{ val: '', type: '', con: '' },
			]},

	{ 	id: 'armor-strip',name: 'Armor Strip', unique: false,
		affinity: 'metal', req: '', hits: 1,
		energycost: 1, mystcost: 2, type: 'ranged-projectile', accuracy: 0, area: 'dot', target: 'self',
		des: 'Removes a targets armor, complete wearing off their defenses, or their dignity if it\'s was the only thing that they are wearing.',
		effects: [
			{ val: '', type: '', con: '' },
			]},

	{ 	id: 'wire-bind',name: 'Wire Bind', unique: false,
		affinity: 'metal', req: '', hits: 1,
		energycost: 1, mystcost: 2, type: 'ranged-projectile', accuracy: 0, area: 'dot', target: 'self',
		des: 'Binds a target with wires using metal bars and/or ores from inventory rendering them unable to do any action on their next turn. Can be removed by Armor Strip.',
		effects: [
			{ val: '', type: '', con: '' },
			]},


	// PAPER
	// ===========================================================================================
	{ 	id: 'paper-crane',name: 'Paper Crane', unique: true,
		affinity: 'paper', req: '', hits: 1,
		energycost: 3, mystcost: 3, type: 'ranged-burst', accuracy: 0, area: 'dot', target: 'ground',
		des: 'Creates a paper crane on the target area that decreases enemies\' evasion all over the field until destroyed.',
		effects: [
			{ val: 'paper-crane', type: 'ground', con: '' },
			]},

	{ 	id: 'devourers-charm',name: 'Devourer\'s Charm', unique: true,
		affinity: 'paper', req: '', hits: 1,
		energycost: 3, mystcost: 5, type: 'ranged-projectile', accuracy: 0, area: 'dot', target: 'enemies',
		des: 'Tags the target with a charm that damages them whenever they move.',
		effects: [
			{ val: 'devourers-charm', type: 'status', con: 80 },
			]},
			
	{ 	id: 'lifetread-jinx',name: 'Lifetread Jinx', unique: true,
		affinity: 'paper', req: '', hits: 1,
		energycost: 5, mystcost: 7, type: 'ranged-projectile', accuracy: 0, area: 'dot', target: 'enemies',
		des: 'Jinxes the target which automatically makes them dead. Though actually, it only damages them based on the difference between their and Avery\'s health.',
		effects: [
			{ val: 'lifetread-jinx', type: 'status', con: 100 },
			]},

	{ 	id: 'dreaded-hex',name: 'Dreaded Hex', unique: true,
		affinity: 'paper', req: '', hits: 5,
		energycost: 5, mystcost: 7, type: 'ranged-burst', accuracy: 0, area: 'box', target: 'enemies',
		des: 'Floods the ground with paper, damaging opponents with paper cuts. Returns a portion of the damage dealt as healing.',
		effects: [
			{ val: 0.5, type: 'affinitydamage', con: 'mystical|slashing' },
			{ val: 0.3, type: 'heal', con: 'self' },
			]},


	// SPEED
	// ===========================================================================================
	{ 	id: 'mad-dash',name: 'Mad Dash', unique: true,
		affinity: 'speed', req: '', hits: 1,
		energycost: 5, mystcost: 3, type: 'dash', accuracy: 0, area: 'dot', target: 'ground',
		des: 'Dashes over a straight line, leaving all enemies passed through; disarmed.',
		effects: [
			{ val: 5, type: 'dash', con: '' },
			{ val: 'disarm', type: 'status', con: 70 },
			]},

	{ 	id: 'trailblazer',name: 'Trailblazer', unique: true,
		affinity: 'speed', req: '', hits: 1,
		energycost: 3, mystcost: 3, type: 'instant', accuracy: 0, area: 'ring', target: 'allies',
		des: 'Leaves a trailblazer on the area which will buff anyone near it with increased speed!',
		effects: [
			{ val: 'trailblazer', type: 'ground', con: '' },
			]},

	{ 	id: 'kinetic-control',name: 'Kinetic Control', unique: true,
		affinity: 'speed', req: '', hits: 1,
		energycost: 5, mystcost: 5, type: 'ranged-burst', accuracy: 20, area: 'dot', target: 'ground',
		des: 'Conjures a vector arrow that throws anyone that stands on it away from Daud.',
		effects: [
			{ val: 'kinetic-control', type: 'ground', con: '' },
			]},

	{ 	id: 'cutting-wind',name: 'Cutting Wind', unique: true,
		affinity: 'speed', req: 'haste', hits: 2,
		energycost: 7, mystcost: 7, type: 'instant', accuracy: 20, area: 'all', target: 'enemies',
		des: 'Jumps from enemy to enemy, dealing damage, cutting wind, slaping faces.',
		effects: [
			{ val: 1.2, type: 'affinitydamage', con: 'physical|crushing' },
			{ val: 'break', type: 'status', con: 60 },
			]},
]; 

// GET ART INDEX
function getArtIndex(id) {
    for (var i=0; i<charSkills.length; i++) if (charSkills[i]['id'] == id) return i;
}