var specialTraits = 3;
var charTraits = [

	// ====================================================================================================================================================
	// FLOOD FOLK
	// ====================================================================================================================================================
	{ 	id: 'half-soaked', name: 'Half Soaked',
		icon: 'ra ra-water-drop', special: 'flood-folk',
		des: 'Amphibious, the Flood Folk are able to withstand the hindrances of doing thing underwater enabling them to consume less Energy while doing tasks submerged while also normally having a bit of resistance against the cold.',
		stats: [
			{ value: 2, stat: 'affinity', con: 'drench', contype: 'status', target: 'self', },
			{ value: -1, stat: 'energycost', con: 'drench', contype: 'status', target: 'self', },
			{ value: 2, stat: 'coldresist', con: '', contype: '', target: 'self', },
		]},
	{ 	id: 'sunbathed', name: 'Sunbathed',
		icon: 'ra ra-sun', special: 'flood-folk',
		des: 'Living half of their lives under the heat of Sol granted the Flood Folk a significant resistance to heat and a bit of boost to their Spirit.',
		stats: [
            { value: 5, stat: 'heatresist', con: 'pyromaniac', contype: 'trait', target: 'self', },
			{ value: 4, stat: 'heatresist', con: '', contype: '', target: 'self', }, 
			{ value: 1, stat: 'spirit', con: '', contype: '', target: 'self', },
		]},

	// ====================================================================================================================================================
	// BLUEBLOODS
	// ====================================================================================================================================================
	{ 	id: 'aquatic',  name: 'Aquatic',
		icon: 'ra ra-water-drop', special: 'blueblood',
		des: 'Living their whole life underwater, the Bluebloods had gain a significant resistance against cold. Also, doing tasks underwater is a lot easier to them at the cost of tasks exhausting them faster on land.',
		stats: [
			{ value: 4, stat: 'affinity', con: 'water', contype: 'affinity', target: 'self', },
			{ value: 4, stat: 'coldresist', con: '', contype: '', target: 'self', }, 
			{ value: -1, stat: 'energycost', con: 'drench', contype: 'status', target: 'self', }, 
			{ value: 1, stat: 'energycost', con: '', contype: '', target: 'self', }, 
		]},
	{ 	id: 'slow-paced', name: 'Slow Paced',
		icon: 'ra ra-cat', special: 'blueblood',
		des: 'Culturally taught to live life extremely slow granted the Bluebloods a powerful Mind and high reserve of Myst, they however, need to sleep a lot longer.',
		stats: [
			{ value: 5, stat: 'mind', con: 'mighty-glacier', contype: 'trait', target: 'self', }, 
			{ value: 3, stat: 'myst', con: '', contype: '', target: 'self', },
			{ value: 2, stat: 'mind', con: '', contype: '', target: 'self', }, 
			{ value: -4, stat: 'energy', con: '', contype: '', target: 'self', },
		]},

	// ====================================================================================================================================================
	// ENTREPRENEURS
	// ====================================================================================================================================================
	{	id: 'skyforged',name: 'Skyforged',
		icon: 'ra ra-forging', special: 'entrepreneur',
		des: 'Or the so called; proteges of Jupiter Skyforge, like they claim to be. I mean, there\'s nothing wrong with trying to achieve one\'s dream by <i>dreaming</i> but let\'s be a bit realistic okay?',
		stats: [
			{ value: 'Affinity skills costs 50% less Myst', stat: 'special', con: 'metal', contype: 'affinity', target: 'self', },
			{ value: 3, stat: 'affinity', con: 'metal', contype: 'affinity', target: 'self', },
			{ value: 1, stat: 'mind', con: 'blacksmith', contype: 'trait', target: 'self', },
			{ value: 1, stat: 'bartering', con: '', contype: '', target: 'self', },
		]},
    {   id: 'frugal', name: 'Frugal',
        icon: 'ra ra-spiral-shell', special: 'entrepreneur',
        des: 'They didn\'t become rich by spending all their credits every now and then. It takes quite a bit of patience and being a cheapskate.',
        stats: [
            { value: 2, stat: 'bartering', con: '', contype: '', target: 'self', },
            { value: 1, stat: 'bartering', con: 'patient', contype: 'trait', target: 'self', },
        ]},



    // ====================================================================================================================================================
    // FREE ARTIST
    // ====================================================================================================================================================
    {   id: 'art-attacker', name: 'Art Attacker',
        icon: 'ra ra-diamond', special: 'free-artist',
        des: 'It\'s just not enough to hit people with your myst blasts, there\'s always a need to actually make that attack look cool as heck or otherwise it\'s worthless and disgusting.',
        stats: [
            { value: 2, stat: 'affinity', con: '', contype: '', target: 'self', },
            { value: '+100% more Affinity from Mind', stat: 'special', con: 'artistic', contype: 'trait', target: 'self', },
        ]},

	// ====================================================================================================================================================
	// URBAN DWELLER
	// ====================================================================================================================================================
    {   id: 'street-smart', name: 'Street Smart',
        icon: 'ra ra-locked-fortress', special: 'urban-dweller',
        des: 'The crowded areas of Aeros became their training grounds. They may not look like the smart group of people but being underestimated is an advantage they\'ll never pass on.',
        stats: [
            { value: 2, stat: 'thievery', con: '', contype: '', target: 'self', },
            { value: 1, stat: 'mind', con: '', contype: '', target: 'self', },
        ]},
    {   id: 'urban-legend', name: 'Urban Legend',
        icon: 'ra ra-hood', special: 'urban-dweller',
        des: 'They are the legends of the urbans. Most feared in the crowd. Watch your pocket! Oh no it\'s gone. Your whole pocket is missing. That\'s the work of the urban legends!',
        stats: [
            { value: 3, stat: 'thievery', con: '', contype: '', target: 'self', },
            { value: 'Never fail being a thief with 10 points in Thievery', stat: 'special', con: 'street-smart', contype: 'trait', target: 'self', },
        ]},

	// ====================================================================================================================================================
	// SKY JUMPER
	// ====================================================================================================================================================
    {   id: 'high-risk-parkour', name: 'High Risk Parkour',
        icon: 'ra ra-falling', special: 'sky-jumper',
        des: 'The higher Aeros, not the ring but the literal high up in the air Aeros, is full of jumpy, life-risking, and hormonal teenagers which are known to drop Aeros\' mortality by 60%.',
        stats: [
            { value: 4, stat: 'affinity', con: 'air', contype: 'affinity', target: 'self', },
            { value: 15, stat: 'evasion', con: '', contype: '', target: 'self', },
            { value: 4, stat: 'spirit', con: '', contype: '', target: 'self', },
        ]},
    {   id: 'lightning-catcher', name: 'Lightning Catcher',
        icon: 'ra ra-lightning-trio', special: 'sky-jumper',
        des: 'Once in a while, like every hour, one person in Aeros gets struck by lightning. This is mostly because they are probably trying to jump to Nimbocolombus and those guys don\'t appreciate free loaders.',
        stats: [
            { value: 4, stat: 'affinity', con: 'electric', contype: 'affinity', target: 'self', },
            { value: 4, stat: 'myst', con: 'eccentric', contype: 'trait', target: 'self', },
            { value: 1, stat: 'spirit', con: '', contype: '', target: 'self', },
        ]},

	// ====================================================================================================================================================
    // ARISTOCRAT
	// ====================================================================================================================================================
    {   id: 'the-beautiful-elite', name: 'The Beautiful Elite',
        icon: 'ra ra-crowned-heart', special: 'aristocrat',
        des: 'Their whole life is better than yours. Their myst-contructed dog\'s life is better than yours. Mostly their slaves are also living it up with the finer things in life better than your.',
        stats: [
            { value: 'Additional 100c at start', stat: 'special', con: '', contype: '', target: 'self', },
            { value: 4, stat: 'spirit', con: '', contype: '', target: 'self', },
            { value: -2, stat: 'spirit', con: '', contype: '', target: 'party', },
        ]},
    {   id: 'wicked-cultured', name: 'Wicked Cultured',
        icon: 'ra ra-crowned-heart', special: 'aristocrat',
        des: 'They are cultured yet wicked. They gain all the possible smarts a person can have as long as at least somebody around them is on the same level.',
        stats: [
            { value: 8, stat: 'mind', con: 'wicked-cultured', contype: 'partytrait', target: 'self', },
            { value: 8, stat: 'mind', con: 'the-beautiful-elite', contype: 'partytrait', target: 'self', },
        ]},


	// ====================================================================================================================================================
	// GENERAL
	// ====================================================================================================================================================
    {   id: 'mighty-glacier', name: 'Mighty Glacier',
        icon: 'ra ra-ice-cube', special: '',
        des: 'They pack quite a punch with their amazing Myst manipulations but they always comes low on their reserves which is very counter productive.',
        stats: [
            { value: 6, stat: 'affinity', con: '', contype: '', target: 'self', },
            { value: -6, stat: 'myst', con: '', contype: '', target: 'self', },
        ]},

    {   id: 'fireman', name: 'Fireman',
        icon: 'ra ra-candle-fire', special: '',
        des: 'For some reason, they are do not have the liking of fire for someone with "fire" on their title. It\'s just weird and a bit disorienting. Even more if one realized that they like water the best.',
        stats: [
            { value: 3, stat: 'affinity', con: 'water', contype: 'affinity', target: 'self', },
            { value: 2, stat: 'affinity', con: 'drench', contype: 'status', target: 'self', },
            { value: 2, stat: 'heatresist', con: '', contype: '', target: 'self', },
        ]},

	{	id: 'artistic', name: 'Artistic',
		icon: 'ra ra-triforce', special: '',
		des: '"To make art is the only way of life!" they say as the crowd that was looking over at their rather average exhibit begin to disperse.',
		stats: [
            { value: 3, stat: 'myst', con: '', contype: '', target: 'self', },
            { value: 2, stat: 'affinity', con: 'paper', contype: 'affinity', target: 'self', },
			{ value: 2, stat: 'affinity', con: 'frost', contype: 'affinity', target: 'self', },
			{ value: 2, stat: 'affinity', con: 'earth', contype: 'affinity', target: 'self', },
			{ value: 2, stat: 'affinity', con: 'light', contype: 'affinity', target: 'self', },
			{ value: 2, stat: 'affinity', con: 'metal', contype: 'affinity', target: 'self', },
		]},

    {   id: 'aloof-elder-sibling', name: 'Aloof Elder Sibling',
        icon: 'ra ra-footprint', special: '',
        des: 'They are the smarter, stronger, faster, and sexier version of their younger sibling and they silently hate it that they seem to not get that much attention with those little nuggets around.',
        stats: [
            { value: 3, stat: 'mind', con: 'childish', contype: 'partytrait', target: 'self', },
            { value: 2, stat: 'body', con: 'childish', contype: 'partytrait', target: 'self', },
            { value: -2, stat: 'spirit', con: 'childish', contype: 'partytrait', target: 'self', },
            { value: 1, stat: 'body', con: '', contype: '', target: 'self', },
        ]},

    {   id: 'perpetual-frowner', name: 'Perpetual Frowner',
        icon: 'ra ra-death-skull', special: '',
        des: 'Only when the dome opens up and the hidden, magical world of wonders reveal itself will they slightly lift their facial muscles to somewhat ressemble a smile. Note: it make\'s everyone look badass so there\'s no need to question it.',
        stats: [
            { value: 2, stat: 'body', con: '', contype: '', target: 'party', },
        ]},

    {   id: 'extremely-omnisexual', name: 'Extremely Omnisexual',
        icon: 'ra ra-omega', special: '',
        des: 'Everbody knows that there is nothing that can stop them from "doing their thing" and with such knowledge came the fact that every little glare of disgust they receive is deserved.',
        stats: [
            { value: 5, stat: 'energy', con: '', contype: '', target: 'self', },
            { value: -1, stat: 'spirit', con: '', contype: '', target: 'party', },
        ]},

    {   id: 'cool-helmet', name: 'Cool Helmet',
        icon: 'ra ra-helmet', special: '',
        des: 'Acquires a really cool helmet that <i>totally</i> doesn\'t block their vision and just realistically boosts their effectiveness in combat.',
        stats: [
            { value: 2, stat: 'weapon', con: '', contype: '', target: 'self', },
            { value: -2, stat: 'mind', con: '', contype: '', target: 'self', },
        ]},

    {   id: 'sane', name: 'Sane',
        icon: 'ra ra-brain-freeze', special: '',
        des: 'With the general population of Mirrorplane being on the edge of only slightly falling into madness, being sane is quite a feat.',
        stats: [
            { value: 2, stat: 'mind', con: '', contype: '', target: 'self', },
            { value: 2, stat: 'myst', con: '', contype: '', target: 'self', },
        ]},

    {   id: 'cheerleader', name: 'Cheerleader',
        icon: 'ra ra-feather-wing', special: '',
        des: 'They like to share motivation and endless supply of happiness to create a thin veil of fabricated lightness to remain hidden as they falter towards the inevitable end of their lives.',
        stats: [
            { value: 1, stat: 'body', con: '', contype: '', target: 'party', },
            { value: 1, stat: 'mind', con: '', contype: '', target: 'party', },
            { value: 1, stat: 'spirit', con: '', contype: '', target: 'party', },
        ]},

    {   id: 'blank-book', name: 'Blank Book',
        icon: 'ra ra-player', special: '',
        des: 'Perfectly average. Normal. That\'s your life. You studied the arts of being a normal human being thus making you generally better than 80% of the people of Mirrorplane.',
        stats: [
            { value: 1, stat: 'mind', con: '', contype: '', target: 'self', },
            { value: 1, stat: 'persuasion', con: '', contype: '', target: 'self', },
            { value: 1, stat: 'bartering', con: '', contype: '', target: 'self', },
        ]},

	{ 	id: 'athletic', name: 'Athletic',
		icon: 'ra ra-muscle-up', special: '',
		des: 'They are the peak of human physique. They have increased points in Body, Energy, and general attractiveness.',
		stats: [
			{ value: 1, stat: 'body', con: '', contype: '', target: 'self', }, 
			{ value: 1, stat: 'energy', con: '', contype: '', target: 'self', },
			{ value: 1, stat: 'spirit', con: '', contype: '', target: 'self', },
            { value: 5, stat: 'evasion', con: '', contype: '', target: 'self', },
		]},

	{ 	id: 'carefree', name: 'Carefree',
		icon: 'ra ra-falling', special: '',
		des: 'Goofing around or just being totally chill in general gives quite a boost to the whole party\'s Spirit and Energy.',
		stats: [
			{ value: 2, stat: 'energy', con: 'cheerleader', contype: 'trait', target: 'party', },
			{ value: 1, stat: 'energy', con: '', contype: '', target: 'party', },
			{ value: 1, stat: 'spirit', con: '', contype: '', target: 'party', },
		]},

	{ 	id: 'patient', name: 'Patient',
		icon: 'ra ra-hourglass', special: '',
		des: 'Knowing how to wait gives a boost to one\'s mind.',
		stats: [
            { value: 5, stat: 'accuracy', con: '', contype: '', target: 'self', },
            { value: 5, stat: 'counter', con: '', contype: '', target: 'self', },
			{ value: 2, stat: 'mind', con: '', contype: '', target: 'self', },
		]},

	{	id: 'medium-mystic', name: 'Medium Mystic',
		icon: 'ra ra-player', special: '',
		des: 'Possessing the general badassery of being a master or rather a mediocre level Mystic boosts one\'s spirit and of course, their affinity regardless if it\'s actually true.',
		stats: [
            { value: 2, stat: 'affinity', con: 'mystic', contype: 'affinity', target: 'self', },
			{ value: 2, stat: 'affinity', con: '', contype: '', target: 'self', },
			{ value: 1, stat: 'spirit', con: '', contype: '', target: 'self', },
		]},

	{	id: 'bookworm', name: 'Bookworm',
		icon: 'ra ra-book', special: '',
		des: 'There are people who just likes to stay indoors and read scrolls all day, everyday.',
		stats: [
			{ value: 2, stat: 'mind', con: '', contype: '', target: 'self', },
			{ value: 1, stat: 'mind', con: 'patient', contype: 'trait', target: 'self', },
		]},

	{	id: 'daredevil', name: 'Daredevil',
		icon: 'ra ra-heartburn', special: '',
		des: 'Seeking the extremities are their only way of life, and with fire involved, there\'s no stopping them on their tracks.',
		stats: [
            { value: 2, stat: 'affinity', con: 'speed', contype: 'affinity', target: 'self', },
			{ value: 2, stat: 'affinity', con: 'fire', contype: 'affinity', target: 'self', },
            { value: 10, stat: 'evasion', con: 'athletic', contype: 'trait', target: 'self', },
			{ value: 2, stat: 'energy', con: '', contype: '', target: 'self', },
			{ value: 1, stat: 'heatresist', con: '', contype: '', target: 'self', },
		]},

	{	id: 'snowman', name: 'Snowman',
		icon: 'ra ra-crystal-ball', special: '',
		des: 'They love it when the Mandalas\' around to rain the cold blanket of winter upon them. They make great snowmen in the wide empty fields of higher Mystos. And they wanted the Mnemosyne to freeze over just so that they\'ll be comfortable when they die.',
		stats: [
			{ value: 3, stat: 'affinity', con: 'frost', contype: 'affinity', target: 'self', },
			{ value: 2, stat: 'coldresist', con: '', contype: '', target: 'self', },
			{ value: -1, stat: 'heatresist', con: '', contype: '', target: 'self', },
		]},

	{	id: 'ambidextrous', name: 'Ambidextrous',
		icon: 'ra ra-slash-ring', special: '',
		des: 'Being able to rely on both of one\'s hands allowed them to be effective at doing two things at once, or juggling at least.',
		stats: [
			{ value: 1, stat: 'affinity', con: '', contype: '', target: 'self', },
			{ value: 1, stat: 'weapon', con: '', contype: '', target: 'self', },
		]},

	{	id: 'lone-wolf', name: 'Lone Wolf',
		icon: 'ra ra-wolf-howl', special: '',
		des: 'They like being alone. And with the weight of the entire city they\'ve been carrying around this whole time, they have quite the perseverance.',
		stats: [
			{ value: 3, stat: 'pierceresist', con: '', contype: '', target: 'self', },
			{ value: 3, stat: 'crushresist', con: '', contype: '', target: 'self', },
			{ value: 2, stat: 'mind', con: 'patient', contype: 'partytrait', target: 'self', },
			{ value: -2, stat: 'mind', con: 'cheerleader', contype: 'partytrait', target: 'self', },
		]},

	{	id: 'charismatic', name: 'Charismatic',
		icon: 'ra ra-glass-heart', special: '',
		des: 'Talking is what they do, and they\'re great at it.',
		stats: [
			{ value: 2, stat: 'energy', con: '', contype: '', target: 'self', },
			{ value: 2, stat: 'persuasion', con: '', contype: '', target: 'self', },
		]},

	{	id: 'workaholic', name: 'Workaholic',
		icon: 'ra ra-ammo-bag', special: '',
		des: 'They love work and are very energetic about it. and they just really hate having to stand around doing nothing.',
		stats: [
			{ value: 2, stat: 'energy', con: '', contype: '', target: 'self', },
			{ value: -2, stat: 'myst', con: '', contype: '', target: 'self', },
			{ value: 1, stat: 'body', con: '', contype: '', target: 'self', },
		]},

	{	id: 'lucky', name: 'Lucky',
		icon: 'ra ra-clover', special: '',
		des: 'Are closely followed through life with a comforting sense of luck. They win often and they win big.',
		stats: [
			{ value: 2, stat: 'spirit', con: '', contype: '', target: 'self', },
			{ value: 1, stat: 'spirit', con: '', contype: '', target: 'party', },
		]},

	{	id: 'blacksmith', name: 'Blacksmith',
		icon: 'ra ra-forging', special: '',
		des: 'They may only worked on making sturdy armors and weapons designed for somebody else but they do have some first-hand experience with wielding some of those.',
		stats: [
			{ value: 3, stat: 'affinity', con: 'metal', contype: 'affinity', target: 'self', },
			{ value: 2, stat: 'weapon', con: '', contype: '', target: 'self', },
			{ value: 2, stat: 'slashresist', con: '', contype: '', target: 'self', },
			{ value: 2, stat: 'crushresist', con: '', contype: '', target: 'self', },
		]},

	{	id: 'thick-skin', name: 'Thick Skin',
		icon: 'ra ra-shield', special: '',
		des: 'Otherwise called calluses. But don\'t mention it to them, that\'s their sensitive part.',
		stats: [
            { value: 5, stat: 'counter', con: '', contype: '', target: 'self', },
			{ value: 3, stat: 'pierceresist', con: '', contype: '', target: 'self', },
			{ value: 3, stat: 'slashresist', con: '', contype: '', target: 'self', },
            { value: 1, stat: 'crushresist', con: '', contype: '', target: 'self', },
		]},

	{	id: 'air-guitarist', name: 'Air Guitarist',
		icon: 'ra ra-wyvern', special: '',
		des: 'One can often find them performing along the neon lit streets of Aeros, no one can hear them but they\'re there, slamming on their air guitar like the rock stars they are.',
		stats: [
			{ value: 3, stat: 'affinity', con: 'air', contype: 'affinity', target: 'self', },
			{ value: 1, stat: 'spirit', con: '', contype: '', target: 'party', },
			{ value: -1, stat: 'affinity', con: 'earth', contype: 'affinity', target: 'self', },
			{ value: -1, stat: 'thievery', con: '', contype: '', target: 'party', },
		]},

    {   id: 'bossy', name: 'Bossy',
        icon: 'ra ra-monster-skull', special: '',
        des: 'They like to boss you around, treat you like dirt, and gain pleasure in doing so. But in their heart; they are doing the right thing.',
        stats: [
            { value: 2, stat: 'affinity', con: '', contype: '', target: 'party', },
            { value: 2, stat: 'myst', con: '', contype: '', target: 'party', },
            { value: -2, stat: 'spirit', con: '', contype: '', target: 'party', },
        ]},

	{	id: 'eccentric', name: 'Eccentric',
		icon: 'ra ra-jigsaw-piece', special: '',
		des: 'They are a volatile surge of energy. Nobody knows where the ideas come from nor do they want it hear it but no matter where they go, the voices always follows.',
		stats: [
			{ value: 4, stat: 'affinity', con: 'electric', contype: 'affinity', target: 'self', },
			{ value: 2, stat: 'spirit', con: 'eccentric', contype: 'partytrait', target: 'self', },
			{ value: 2, stat: 'spirit', con: 'lightning-catcher', contype: 'partytrait', target: 'self', },
			{ value: 1, stat: 'spirit', con: '', contype: '', target: 'self', },
			{ value: -1, stat: 'persuasion', con: '', contype: '', target: 'self', },
		]},

	{	id: 'childish', name: 'Childish',
		icon: 'ra ra-hand', special: '',
		des: 'Are grown adults pretending to be children or otherwise children being realistic. There\'s no winning with this one.',
		stats: [
			{ value: 2, stat: 'energy', con: '', contype: '', target: 'self', },
			{ value: 1, stat: 'affinity', con: 'earth', contype: 'affinity', target: 'self', },
			{ value: 1, stat: 'pierceresist', con: '', contype: '', target: 'self', },
			{ value: -1, stat: 'energycost', con: '', contype: '', target: 'self', },
		]},

	{	id: 'know-it-all', name: 'kNoW iT aLl',
		icon: 'ra ra-scroll-unfurled', special: '',
		des: 'Well, there\'s is a slightly, small, microscopic chance that they actually know what they\'re saying but let\'s not count on it.',
		stats: [
			{ value: -2, stat: 'mind', con: '', contype: '', target: 'self', },
			{ value: 2, stat: 'mind', con: 'blacksmith', contype: 'trait', target: 'self', },
			{ value: 2, stat: 'mind', con: 'patient', contype: 'trait', target: 'self', },
			{ value: 2, stat: 'mind', con: 'bookworm', contype: 'trait', target: 'self', },
		]},

	{	id: 'flirty', name: 'Flirty',
		icon: 'ra ra-shot-through-the-heart', special: '',
		des: 'Hide your wives, hide your husbands, hide your kids too. Just to be sure, cause they are here to get all smoochie coochie coo.',
		stats: [
			{ value: 2, stat: 'persuasion', con: '', contype: '', target: 'self', },
			{ value: 1, stat: 'crushresist', con: '', contype: '', target: 'self', },
			{ value: 1, stat: 'affinity', con: 'plant', contype: 'affinity', target: 'self', },
		]},

	{	id: 'hip-kid', name: 'Hip Kid',
		icon: 'ra ra-fedora', special: '',
		des: '"No dad, it\'s not about my hips you old Lizie Stalker! I\'m just getting into my hash to get gravy from the park thermometer!"',
		stats: [
			{ value: -2, stat: 'mind', con: '', contype: '', target: 'self', },
			{ value: 3, stat: 'energy', con: '', contype: '', target: 'self', },
		]},

	{	id: 'grammar-dominioneer', name: 'Grammar Dominioneer',
		icon: 'ra ra-radar-dish', special: '',
		des: 'Nothing gets past their all-seeing eyes. They run wild within the depths of the CTsystem, waiting, waiting for the opportunity to get behind <strike>youre</strike> back and strike!',
		stats: [
			{ value: 3, stat: 'mind', con: 'bookworm', contype: 'trait', target: 'self', },
			{ value: 1, stat: 'mind', con: '', contype: '', target: 'self', },
		]},

	{	id: 'hydrophobe', name: 'Hydrophobe',
		icon: 'ra ra-droplet-splash', special: '',
		des: 'One must take pity on others who get scared by taking showers.',
		stats: [
			{ value: 3, stat: 'affinity', con: '', contype: '', target: 'self', },
			{ value: -5, stat: 'affinity', con: 'drench', contype: 'status', target: 'self', },
		]},

	{	id: 'astroneer', name: 'Astroneer',
		icon: 'ra ra-fluffy-swirl', special: '',
		des: 'Ever wondered what it\'s like to reach for the skies? Well, in Mirrorplane all you need to do is to stop being a worhtless peasant and literally touch the sky with all of your five fingers. Easy.',
		stats: [
            { value: 3, stat: 'affinity', con: 'space', contype: 'affinity', target: 'self', },
			{ value: 3, stat: 'affinity', con: 'light', contype: 'affinity', target: 'self', },
            { value: 3, stat: 'mind', con: '', contype: '', target: 'self', },
			{ value: -1, stat: 'spirit', con: '', contype: '', target: 'self', },
		]},

	{	id: 'chilled-butter', name: 'Chilled Butter',
		icon: 'ra ra-ice-cube', special: '',
		des: 'Being incredibly chilled allowed one to master the kitchen knife and prevent it from cutting through. They even gets a chance to break the knife and become the ultimate master of the ktichen.',
		stats: [
            { value: 6, stat: 'slashresist', con: 'freeze', contype: 'status', target: 'self', },
			{ value: 4, stat: 'slashresist', con: '', contype: '', target: 'self', },
            { value: 2, stat: 'coldresist', con: '', contype: '', target: 'self', },
			{ value: -2, stat: 'heatresist', con: '', contype: '', target: 'self', },
		]},

	{	id: 'glutton', name: 'Glutton',
		icon: 'ra ra-knife-fork', special: '',
		des: 'Having eaten a full meal is not enough, there\'s always space, and if there isn\'t then it\'s time to make more!',
		stats: [
			{ value: -1, stat: 'energycost', con: 'stuff', contype: 'status', target: 'self', },
			{ value: 2, stat: 'body', con: '', contype: '', target: 'self', },
            { value: -5, stat: 'evasion', con: '', contype: '', target: 'self', },
		]},

	{ 	id: 'talented-fish', name: 'Talented Fish',
		icon: 'ra ra-fish', special: '',
		des: 'One that is one with water are obviously very wet and capable of making others wet with ease.',
		stats: [
			{ value: 4, stat: 'affinity', con: 'water', contype: 'affinity', target: 'self', },
			{ value: 1, stat: 'spirit', con: '', contype: '', target: 'self', },
			{ value: -1, stat: 'heatresist', con: '', contype: '', target: 'self', },
		]},

	{ 	id: 'pyromaniac', name: 'Pyromaniac',
		icon: 'ra ra-small-fire', special: '',
		des: 'They say not to let them touch anything that easilly sets on fire. What they didn\'t know is that everything is easilly set on fire when they\'re around.',
		stats: [
			{ value: 3, stat: 'affinity', con: 'fire', contype: 'affinity', target: 'self', },
            { value: 2, stat: 'affinity', con: 'burn', contype: 'status', target: 'self', },
			{ value: 1, stat: 'myst', con: '', contype: '', target: 'self', },
			{ value: -1, stat: 'coldresist', con: '', contype: '', target: 'self', },
		]},

	{ 	id: 'golem', name: 'Golem',
		icon: 'ra ra-brain-freeze', special: '',
		des: 'Be one with the rocks they say, so they decided to become as static as ever.',
		stats: [
			{ value: 4, stat: 'affinity', con: 'earth', contype: 'affinity', target: 'self', },
			{ value: 3, stat: 'crushresist', con: '', contype: '', target: 'self', },
			{ value: 3, stat: 'sparkresist', con: '', contype: '', target: 'self', },
		]},

	{ 	id: 'thunderstruck', name: 'Thunderstruck',
		icon: 'ra ra-lightning-storm', special: '',
		des: 'They have been struck by a different kind of energy. Very different from the likes of Myst that nobody has yet to properly harness it. But those who are thunderstruck says that lightning will soon overcome its limitations. Quite a scary tale, but they\'ve mostly likely lost their marbles from the initial strike.',
		stats: [
			{ value: 2, stat: 'affinity', con: 'lightning-catcher', contype: 'trait', target: 'self', },
			{ value: 4, stat: 'affinity', con: 'electric', contype: 'affinity', target: 'self', },
            { value: 2, stat: 'affinity', con: 'spark', contype: 'status', target: 'self', },
            { value: 2, stat: 'sparkresist', con: '', contype: '', target: 'self', },
			{ value: 1, stat: 'energy', con: '', contype: '', target: 'self', },
		]},

    {   id: 'eagle-eye', name: 'Eagle Eye',
        icon: 'ra ra-bleeding-eye', special: '',
        des: 'The sharpest eyes got 20/20 vision of the future where you\'re dead kiddo.',
        stats: [
            { value: 20, stat: 'accuracy', con: '', contype: '', target: 'self', },
        ]},

    {   id: 'ultra-tall', name: 'Ultra Tall',
        icon: 'ra ra-player-lift', special: '',
        des: 'Sometimes, they get to be so tall that it can be considered as one, if not the only, noteworthy trait.',
        stats: [
            { value: 10, stat: 'accuracy', con: '', contype: '', target: 'self', },
            { value: 5, stat: 'accuracy', con: 'eagle-eye', contype: 'trait', target: 'self', },
            { value: 1, stat: 'body', con: '', contype: '', target: 'self', },
        ]},

    {   id: 'finger-gunner', name: 'Finger Gunner',
        icon: 'ra ra-revolver', special: '',
        des: 'The coolest weapon are your fingers. Really. With the amount of Myst around, it\'s a mistake not to make the most ridiculous Myst construct you can do.',
        stats: [
            { value: 5, stat: 'myst', con: '', contype: '', target: 'self', },
            { value: 10, stat: 'accuracy', con: '', contype: '', target: 'self', },
        ]},

    {   id: 'hop-bunny', name: 'Hop Bunny',
        icon: 'ra ra-rabbit', special: '',
        des: 'They are those who are simply incapable of staying put. Put them on a leash and somehow the leash gets a hundred times long just so they can move.',
        stats: [
            { value: 35, stat: 'evasion', con: '', contype: '', target: 'self', },
            { value: 2, stat: 'weapon', con: 'space', contype: 'affinity', target: 'self', },
        ]},

    {   id: 'duelist', name: 'Duelist',
        icon: 'ra ra-crossed-swords', special: '',
        des: 'Fighting is their game, and they\'re going to win every single one of them.',
        stats: [
            { value: 3, stat: 'weapon', con: '', contype: '', target: 'self', },
            { value: 20, stat: 'counter', con: '', contype: '', target: 'self', },
            { value: 20, stat: 'counter', con: 'mydow', contype: 'affinity', target: 'self', },
            { value: 20, stat: 'counter', con: 'space', contype: 'affinity', target: 'self', },
        ]},

    {   id: 'dad-punisher', name: 'Dad PUNisher',
        icon: 'ra ra-beer', special: '',
        des: 'When they\'re around, the only thing you can do is groan, and groan some more.',
        stats: [
            { value: 4, stat: 'spirit', con: '', contype: '', target: 'self', },
            { value: -2, stat: 'spirit', con: '', contype: '', target: 'party', },
            { value: -2, stat: 'spirit', con: '', contype: '', target: 'enemy', },
        ]},

    {   id: 'turtler', name: 'Turtler',
        icon: 'ra ra-round-shield', special: '',
        des: 'Slow as a turtle, the perfect counter patiently awaits.',
        stats: [
            { value: 30, stat: 'counter', con: '', contype: '', target: 'self', },
            { value: 20, stat: 'counter', con: 'patient', contype: 'trait', target: 'self', },
            { value: 1, stat: 'pierceresist', con: '', contype: '', target: 'self', },
            { value: -20, stat: 'evasion', con: '', contype: '', target: 'self', },
        ]},

    {   id: 'hard-headed', name: 'Hard Headed',
        icon: 'ra ra-bone-bite', special: '',
        des: 'Some people simply requires the patience of everyone around them to become really effective in a team.',
        stats: [
            { value: 2, stat: 'body', con: '', contype: '', target: 'self', },
            { value: 1, stat: 'body', con: 'patient', contype: 'partytrait', target: 'party', },
            { value: -2, stat: 'mind', con: '', contype: '', target: 'self', },
        ]},

    {   id: 'dirty-fingers', name: 'Dirty Fingers',
        icon: 'ra ra-cut-palm', special: '',
        des: 'The hands of someone with dirty fingers are often not where they are supposed to be.',
        stats: [
            { value: 3, stat: 'thievery', con: '', contype: '', target: 'self', },
            { value: 2, stat: 'persuasion', con: '', contype: '', target: 'self', },
        ]},

	// ====================================================================================================================================================
	// EFFECT TRAITS
	// ====================================================================================================================================================
    {   id: 'the-wizard-who-did-it', name: 'The Wizard Who Did It',
        icon: 'ra ra-player-thunder-struck', special: '',
        des: 'Nobody knows what the wizard did, nor how they did it, but it was effective, even efficient, so it\'s best to not question it and throw all kinds of doubt into the air.',
        stats: [
            { value: 'Adds a small chance of instantly killing an opponent', stat: 'special', con: '', contype: '', target: 'self', },
        ]},

    {   id: 'sadistic', name: 'Sadistic',
        icon: 'ra ra-player-pain', special: '',
        des: 'For them, there is no better pleasure in seeing someone in constant chronic pain.',
        stats: [
            { value: 2, stat: 'affinity', con: 'flesh', contype: 'affinity', target: 'self', },
            { value: 'Increases Affinity after dealing a large amount of damage', stat: 'special', con: '', contype: '', target: 'self', },
        ]},

    {   id: 'not-quite-dead', name: 'Not Quite Dead',
        icon: 'ra ra-broken-skull', special: '',
        des: 'Some people are just quite persistent and refuse to die even though someone already cracked their head.',
        stats: [
            { value: 'Returns Health to 1 after being hit by a killing blow once per battle', stat: 'special', con: '', contype: '', target: 'self', },
        ]},

	{	id: 'bodybuilder', name: 'Bodybuilder',
		icon: 'ra ra-muscle-up', special: '',
		des: 'Obviously, this guy builds his body.',
		stats: [
			{ value: 2, stat: 'body', con: '', contype: '', target: 'self', },
            { value: 2, stat: 'crushresist', con: '', contype: '', target: 'self', },
            { value: -10, stat: 'evasion', con: '', contype: '', target: 'self', },
			{ value: 'Adds 50% more Health from Body', stat: 'special', con: 'athletic', contype: 'trait', target: 'self', },
		]},

	{ 	id: 'weapon-enthusiast', name: 'Weapon Enthusiast',
		icon: 'ra ra-all-for-one', special: '',
		des: 'Allows for the effective use of weapons, for when the Mystic Arts are unreliable.',
		stats: [
			{ value: 3, stat: 'weapon', con: '', contype: '', target: 'self', },
            { value: 10, stat: 'counter', con: '', contype: '', target: 'self', },
            { value: 'Adds 30% more Weapon Effectiveness', stat: 'special', con: 'mydow', contype: 'affinity', target: 'self', },
		]},

	{ 	id: 'intimidating', name: 'Intimidating',
		icon: 'ra ra-muscle-up', special: '',
		des: 'Your reasonably good looks and good morals is definitely the reason why everybody seem to like you as a person.',
		stats: [
			{ value: 1, stat: 'body', con: '', contype: '', target: 'self', },
			{ value: 1, stat: 'persuasion', con: '', contype: '', target: 'self', },
            { value: 'Never fail persuading people with your intimidating upside-down smile', stat: 'special', con: 'perpetual-frowner', contype: 'trait', target: 'self', },
		]},

    // ====================================================================================================================================================
    // UNIQUE SPECIAL TRAITS
    // ====================================================================================================================================================

    {   id: 'tide-turner', name: 'Tide Turner',
        icon: 'ra ra-droplet-splash', special: '',
        des: 'Some people just have the natural talent of being able to move like a fish but most would only consider such talent a blessing when they are drenched.',
        stats: [
            { value: 3, stat: 'weapon', con: 'drench', contype: 'status', target: 'self', },
            { value: 40, stat: 'evasion', con: 'drench', contype: 'status', target: 'self', },
            { value: 40, stat: 'counter', con: 'drench', contype: 'status', target: 'self', },
            { value: 10, stat: 'evasion', con: '', contype: '', target: 'self', },
            { value: 10, stat: 'counter', con: '', contype: '', target: 'self', },
        ]},

    {   id: 'myst-ghost', name: 'Myst Ghost',
        icon: 'ra ra-supersonic-arrow', special: '',
        des: 'They had their fun spooking people acting like ghosts, now they are here for murder and turning people to ghosts.',
        stats: [
            { value: 4, stat: 'affinity', con: 'myst', contype: 'affinity', target: 'self', },
            { value: 5, stat: 'myst', con: '', contype: '', target: 'self', },
            { value: 'Causes physical damage to deal only half damage', stat: 'special', con: 'myst', contype: 'affinity', target: 'self', },
        ]},

    {   id: 'phoenix-fire', name: 'Phoenix Fire',
        icon: 'ra ra-heartburn', special: '',
        des: 'Their fire heals instead of burning them. They make really good fire fighters and fire dancers.',
        stats: [
            { value: 3, stat: 'affinity', con: 'fire', contype: 'affinity', target: 'self', },
            { value: 2, stat: 'affinity', con: 'burn', contype: 'status', target: 'self', },
            { value: 'Allows to heal from heat damage', stat: 'special', con: '', contype: '', target: 'self', },
        ]},
];

// ====================================================================================================================================================
// FUNCTIONS
// ====================================================================================================================================================
function getTraitName(id) {
	var name = "";
	for (var i=0; i<charTraits.length; i++) if (charTraits[i]['id'] == id) name = charTraits[i]['name'];
	return name;
}

// CHECK FOR SPECIAL TRAITS
function checkSpecialTraits(char, traits, traitfin, traitups, partytraitups, affinity) {
	if (checkCharTraits('bodybuilder', traits)) { // +50% health from body (bodybuilder + athletic)
		if (checkCharTraits('athletic', traits)) { 
			traitfin['health'] = ((char['health'] + (traitfin['body'] * 3)) * 2) + traitups['health'] + partytraitups['health'];
		}
	}
	if (checkCharTraits('urban-legend', traits)) { // thievery to 10 (bodybuilder + athletic)
		if (checkCharTraits('street-smart', traits)) { 
			traitfin['thievery'] = 10;
		}
	}
	if (checkCharTraits('weapon-enthusiast', traits)) { // 50% more weapon effectiveness (weapon enth + mydow)
		if (affinity == 'mydow') { 
			traitfin['weapon'] += traitfin['weapon'] * 0.30;
		}
	}
	if (checkCharTraits('art-attacker', traits)) { // +100% affinity from mind (artattacker + artistic)
		if (checkCharTraits('artistic', traits)) { 
			traitfin['affinity'] = char['affinity'] + traitfin['mind'] + traitups['affinity'] + partytraitups['affinity'];
		}
	}
	if (checkCharTraits('intimidating', traits)) { // persuasion to 10 (intimidating + perpetual-frowner)
		if (checkCharTraits('perpetual-frowner', traits)) { 
			traitfin['persuasion'] = 10;
		}
	}
	return traitfin;
}


// GET TRAIT INDEX
function getTraitIndex(id) {
    for (var i=0; i<charTraits.length; i++) if (charTraits[i]['id'] == id) return i;
}

// CHECK TRAITS
function checkCharTraits(id, traits) {
	var traitIndex = 0;
	for (var i=0; i<charTraits.length; i++) if (charTraits[i]['id'] == id) traitIndex = i;
	for (var i=0; i<traits.length; i++) if (traits[i] == traitIndex) return true;
	return false;
}
// CHECK PARTY TRAITS
function checkPartyCharTraits(id, char) {
	var hasTrait = false;
	for (var i=0; i<partyChars.length; i++) {
		if (i != char) {
			hastrait = checkCharTraits(id, partyChars[i]['traits']);
			if (hastrait) return true;
		}
	}
	return false;
}

// PRINT SPECIAL
function printSpecialTraits(special) {
	var traitlist = "";
	for (var i=0; i<charTraits.length; i++) {
		var charTrait = charTraits[i];

		if (charTrait['special'] == special) {
			traitlist += "<div class='list-trait'>";
			traitlist += "<i class='" + charTrait['icon'] + "'></i>";
			traitlist += "<b>" + charTrait['name'] + "</b>";
			traitlist += "<div class='des'>" + charTrait['des'] + "</div>";
			traitlist += "</div>";
		}
	}
	return traitlist;
}