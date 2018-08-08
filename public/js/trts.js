
var charTraits = [
	// FLOOD FOLK
	{ 	id: 'half-soaked', 
		name: 'Half Soaked',
		icon: 'ra ra-water-drop',
		special: 'flood-folk',
		des: 'Amphibious, the Flood Folk are able to withstand the hindrances of doing thing underwater enabling them to consume less Energy while doing tasks submerged while also normally having a bit of resistance against the cold.',
		stats: [
			{ value: -2, stat: 'energycost', con: 'submerged', contype: 'status', target: 'self', },
			{ value: 2, stat: 'coldresist', con: '', contype: '', target: 'self', },
		]},
	{ 	id: 'sunbathed',
		name: 'Sunbathed',
		icon: 'ra ra-sun',
	 	special: 'flood-folk',
		des: 'Living half of their lives under the heat of Sol granted the Flood Folk a significant resistance to heat and a bit of boost to their Spirit.',
		stats: [
			{ value: 4, stat: 'heatresist', con: '', contype: '', target: 'self', }, 
			{ value: 1, stat: 'spirit', con: '', contype: '', target: 'self', },
		]},

	// BLUEBLOODS
	{ 	id: 'aquatic', 
		name: 'Aquatic',
		icon: 'ra ra-water-drop',
		special: 'blueblood',
		des: 'Living their whole life underwater, the Bluebloods had gain a significant resistance against cold. Also, doing tasks underwater is a lot easier to them at the cost of tasks exhausting them faster on land.',
		stats: [
			{ value: 4, stat: 'coldresist', con: '', contype: '', target: 'self', }, 
			{ value: -3, stat: 'energycost', con: 'submerged', contype: 'status', target: 'self', }, 
			{ value: 1, stat: 'energycost', con: '', contype: '', target: 'self', }, 
		]},
	{ 	id: 'slow-paced', 
		name: 'Slow Paced',
		icon: 'ra ra-cat',
		special: 'blueblood',
		des: 'Culturally taught to live life extremely slow granted the Bluebloods a powerful Mind and high reserve of Myst, they however, need to sleep a lot longer.',
		stats: [
			{ value: 2, stat: 'mind', con: '', contype: '', target: 'self', }, 
			{ value: 3, stat: 'myst', con: '', contype: '', target: 'self', },
			{ value: -4, stat: 'energy', con: '', contype: '', target: 'self', },
		]},

	//ENTREPRENEURS
	{	id: 'skyforged',
		name: 'Skyforged',
		icon: 'ra ra-forging',
		special: 'entrepreneur',
		des: 'Or the so called; proteges of Jupiter Skyforge, like they claim to be. I mean, there\'s nothing wrong with trying to achieve one\'s dream by <i>dreaming</i> but let\'s be a bit realistic okay?',
		stats: [
			{ value: 2, stat: 'affinity', con: 'electric', contype: 'affinity', target: 'self', },
			{ value: 2, stat: 'affinity', con: 'metal', contype: 'affinity', target: 'self', },
			{ value: 1, stat: 'mind', con: 'blacksmith', contype: 'trait', target: 'self', },
			{ value: 1, stat: 'bartering', con: '', contype: '', target: 'self', },
		]},


	// GENERAL
	{ 	id: 'athletic', 
		name: 'Athletic',
		icon: 'ra ra-muscle-up',
		special: '',
		des: 'They are the peak of human physique. They have increased points in Body, Energy, and general attractiveness.',
		stats: [
			{ value: 1, stat: 'body', con: '', contype: '', target: 'self', }, 
			{ value: 1, stat: 'energy', con: '', contype: '', target: 'self', },
			{ value: 1, stat: 'spirit', con: '', contype: '', target: 'self', },
		]},

	{ 	id: 'carefree', 
		name: 'Carefree',
		icon: 'ra ra-falling',
		special: '',
		des: 'Goofing around or just being totally chill in general gives quite a boost to the whole party\'s Spirit and Energy.',
		stats: [
			{ value: 1, stat: 'spirit', con: '', contype: '', target: 'party', },
			{ value: 1, stat: 'energy', con: '', contype: '', target: 'party', },
		]},

	{ 	id: 'patient', 
		name: 'Patient',
		icon: 'ra ra-hourglass',
		special: '',
		des: 'Knowing how to wait gives a boost to one\'s mind.',
		stats: [
			{ value: 3, stat: 'mind', con: '', contype: '', target: 'self', },
		]},

	{	id: 'medium-mystic',
		name: 'Medium Mystic',
		icon: 'ra ra-player',
		special: '',
		des: 'Possessing the general badassery of being a master or rather a mediocre level Mystic boosts one\'s spirit and of course, their affinity regardless if it\'s actually true.',
		stats: [
			{ value: 1, stat: 'affinity', con: '', contype: '', target: 'self', },
			{ value: 1, stat: 'spirit', con: '', contype: '', target: 'self', },
		]},

	{	id: 'bodybuilder',
		name: 'Bodybuilder',
		icon: 'ra ra-muscle-up',
		special: '',
		des: 'Obviously, this guy builds his body.',
		stats: [
			{ value: 2, stat: 'body', con: '', contype: '', target: 'self', },
			{ value: 1, stat: 'body', con: 'athletic', contype: 'trait', target: 'self', },
		]},

	{	id: 'bookworm',
		name: 'Bookworm',
		icon: 'ra ra-book',
		special: '',
		des: 'There are people who just likes to stay indoors and read scrolls all day, everyday.',
		stats: [
			{ value: 2, stat: 'mind', con: '', contype: '', target: 'self', },
			{ value: 1, stat: 'mind', con: 'patient', contype: 'trait', target: 'self', },
		]},

	{	id: 'daredevil',
		name: 'Daredevil',
		icon: 'ra ra-heartburn',
		special: '',
		des: 'Seeking the extremities are their only way of life, and with fire involved, there\'s no stopping them on their tracks.',
		stats: [
			{ value: 2, stat: 'affinity', con: 'fire', contype: 'affinity', target: 'self', },
			{ value: 1, stat: 'heatresist', con: 'fire', contype: 'affinity', target: 'self', },
			{ value: 2, stat: 'energy', con: '', contype: '', target: 'self', },
		]},

	{	id: 'snowman',
		name: 'Snowman',
		icon: 'ra ra-crystal-ball',
		special: '',
		des: 'They love it when the Mandalas\' around to rain the cold blanket of winter upon them. They make great snowmen in the wide empty fields of higher Mystos. And they wanted the Mnemosyne to freeze over just so that they\'ll be comfortable when they died.',
		stats: [
			{ value: 3, stat: 'affinity', con: 'frost', contype: 'affinity', target: 'self', },
			{ value: 1, stat: 'coldresist', con: '', contype: '', target: 'self', },
			{ value: -1, stat: 'heatresist', con: '', contype: '', target: 'self', },
		]},

	{	id: 'ambidextrous',
		name: 'Ambidextrous',
		icon: 'ra ra-slash-ring',
		special: '',
		des: 'Being able to rely on both of one\'s hands allowed them to be effective at doing two things at once, or juggling at least.',
		stats: [
			{ value: 1, stat: 'affinity', con: '', contype: '', target: 'self', },
			{ value: 1, stat: 'weapon', con: '', contype: '', target: 'self', },
		]},

	{	id: 'lone-wolf',
		name: 'Lone Wolf',
		icon: 'ra ',
		special: 'ra-wolf-howl',
		des: 'They like being alone. And with the weight of the entire city they\'ve been carrying around this whole time, they have quite the perseverance.',
		stats: [
			{ value: 2, stat: 'pierceresist', con: '', contype: '', target: 'self', },
			{ value: 2, stat: 'crushresist', con: '', contype: '', target: 'self', },
			{ value: 1, stat: 'mind', con: 'bookworm', contype: 'trait', target: 'self', },
		]},

	{	id: 'charismatic',
		name: 'Charismatic',
		icon: 'ra ra-glass-heart',
		special: '',
		des: 'Talking is what they do, and they\'re great at it.',
		stats: [
			{ value: 1, stat: 'persuasion', con: '', contype: '', target: 'self', },
			{ value: 2, stat: 'energy', con: '', contype: '', target: 'self', },
		]},

	{	id: 'technophobe',
		name: 'Technophobe',
		icon: 'ra ra-unplugged',
		special: '',
		des: 'Scared of technology, they just wish the city never ever progress so they can remain in they\'re ever decreasing hole to perish.',
		stats: [
			{ value: 4, stat: 'affinity', con: 'plant', contype: 'affinity', target: 'self', },
			{ value: -2, stat: 'affinity', con: 'electric', contype: 'affinity', target: 'self', },
			{ value: -2, stat: 'weapon', con: '', contype: '', target: 'self', },
		]},

	{	id: 'workaholic',
		name: 'Workaholic',
		icon: 'ra ra-ammo-bag',
		special: '',
		des: 'They love work and are very energetic about it. and they just really hate having to stand around doing nothing.',
		stats: [
			{ value: 2, stat: 'energy', con: '', contype: '', target: 'self', },
			{ value: -2, stat: 'myst', con: '', contype: '', target: 'self', },
			{ value: 1, stat: 'body', con: '', contype: '', target: 'self', },
		]},

	{	id: 'lucky',
		name: 'Lucky',
		icon: 'ra ra-clover',
		special: '',
		des: 'Are closely followed through life with a comforting sense of luck. They win often and they win big.',
		stats: [
			{ value: 2, stat: 'spirit', con: '', contype: '', target: 'self', },
			{ value: 1, stat: 'spirit', con: '', contype: '', target: 'party', },
		]},

	{	id: 'blacksmith',
		name: 'Blacksmith',
		icon: 'ra ra-forging',
		special: '',
		des: 'They may only worked on making sturdy armors and weapons designed for somebody else but they do have some first-hand experience with wielding some of those.',
		stats: [
			{ value: 3, stat: 'affinity', con: 'metal', contype: 'affinity', target: 'self', },
			{ value: 2, stat: 'weapon', con: '', contype: '', target: 'self', },
			{ value: 1, stat: 'slashresist', con: '', contype: '', target: 'self', },
			{ value: 1, stat: 'crushresist', con: '', contype: '', target: 'self', },
		]},

	{	id: 'thick-skin',
		name: 'Thick Skin',
		icon: 'ra ra-shield',
		special: '',
		des: 'Otherwise called calluses. But don\'t mention it to them, that\'s their sensitive part.',
		stats: [
			{ value: 2, stat: 'pierceresist', con: '', contype: '', target: 'self', },
			{ value: 2, stat: 'slashresist', con: '', contype: '', target: 'self', },
		]},

	{	id: 'air-guitarist',
		name: 'Air Guitarist',
		icon: 'ra ra-wyvern',
		special: '',
		des: 'One can often find them performing along the neon lit streets of Aeros, no can hear them but they\'re there, slamming on their air guitar like the rock stars they are.',
		stats: [
			{ value: 3, stat: 'affinity', con: 'air', contype: 'affinity', target: 'self', },
			{ value: -1, stat: 'affinity', con: 'earth', contype: 'affinity', target: 'self', },
			{ value: -1, stat: 'thievery', con: '', contype: '', target: 'party', },
			{ value: 1, stat: 'spirit', con: '', contype: '', target: 'party', },
		]},

	{	id: 'eccentric',
		name: 'Eccentric',
		icon: 'ra ra-jigsaw-piece',
		special: '',
		des: 'They are a volatile surge of energy. Nobody knows where the ideas come from nor do they want it hear it but no matter where they go, the voices always follows.',
		stats: [
			{ value: 5, stat: 'affinity', con: 'electric', contype: 'affinity', target: 'self', },
			{ value: -3, stat: 'spirit', con: '', contype: '', target: 'self', },
			{ value: -1, stat: 'persuasion', con: '', contype: '', target: 'self', },
		]},

	{	id: 'artistic',
		name: 'Artistic',
		icon: 'ra ra-triforce',
		special: '',
		des: '"To make art is the only way of life!" they say as the crowd that was looking over at their rather average exhibit begin to disperse.',
		stats: [
			{ value: 2, stat: 'affinity', con: 'water', contype: 'affinity', target: 'self', },
			{ value: 2, stat: 'affinity', con: 'earth', contype: 'affinity', target: 'self', },
			{ value: 2, stat: 'affinity', con: 'light', contype: 'affinity', target: 'self', },
			{ value: -1, stat: 'body', con: '', contype: '', target: 'self', },
		]},

	{	id: 'childish',
		name: 'Childish',
		icon: 'ra ra-hand',
		special: '',
		des: 'Are grown adults pretending to be children or otherwise children being realistic. There\'s no winning with this one.',
		stats: [
			{ value: 2, stat: 'energy', con: '', contype: '', target: 'self', },
			{ value: -1, stat: 'energycost', con: '', contype: '', target: 'self', },
			{ value: 1, stat: 'affinity', con: 'earth', contype: 'affinity', target: 'self', },
			{ value: 1, stat: 'pierceresist', con: '', contype: '', target: 'self', },
		]},

	{	id: 'know-it-all',
		name: 'kNoW iT aLl',
		icon: 'ra ra-scroll-unfurled',
		special: '',
		des: 'Well, there\'s is a slightly small microscopic chance that they actually know what they\'re saying but let\'s not depend on it.',
		stats: [
			{ value: -2, stat: 'mind', con: '', contype: '', target: 'self', },
			{ value: -2, stat: 'mind', con: 'childish', contype: 'trait', target: 'self', },
			{ value: 2, stat: 'mind', con: 'patient', contype: 'trait', target: 'self', },
			{ value: 2, stat: 'mind', con: 'bookworm', contype: 'trait', target: 'self', },
		]},

	{	id: 'flirty',
		name: 'Flirty',
		icon: 'ra ra-shot-through-the-heart',
		special: '',
		des: 'Hide your wives, hide your husbands, hide your kids too. Just to be sure, cause they are here to get all smoochie coochie coo.',
		stats: [
			{ value: 3, stat: 'persuasion', con: '', contype: '', target: 'self', },
			{ value: 1, stat: 'crushresist', con: '', contype: '', target: 'self', },
			{ value: 1, stat: 'affinity', con: 'plant', contype: 'affinity', target: 'self', },
		]},

	{	id: 'hip-kid',
		name: 'Hip Kid',
		icon: 'ra ra-fedora',
		special: '',
		des: '"No dad, it\'s not about my hips you old Lizie Stalker! I\'m just getting into my hash to get gravy from the park thermometer!"',
		stats: [
			{ value: -2, stat: 'mind', con: '', contype: '', target: 'self', },
			{ value: 3, stat: 'energy', con: '', contype: '', target: 'self', },
		]},

	{	id: 'grammar-dominioneer',
		name: 'Grammar Dominioneer',
		icon: 'ra ra-radar-dish',
		special: '',
		des: 'Nothing gets past their all-seeing eyes. They run wild within the depths of the CTsystem, waiting, waiting for the opportunity to get behind <strike>youre</strike back and strike!',
		stats: [
			{ value: 1, stat: 'mind', con: '', contype: '', target: 'self', },
			{ value: 3, stat: 'mind', con: 'bookworm', contype: 'trait', target: 'self', },
		]},

	{	id: 'hydrophobe',
		name: 'Hydrophobe',
		icon: 'ra ra-droplet-splash',
		special: '',
		des: 'One must take pity on others who get scared by taking showers.',
		stats: [
			{ value: 2, stat: 'affinity', con: 'earth', contype: 'affinity', target: 'self', },
			{ value: -2, stat: 'affinity', con: 'water', contype: 'affinity', target: 'self', },
		]},

	{	id: 'astroneer',
		name: 'Astroneer',
		icon: 'ra ra-fluffy-swirl',
		special: '',
		des: 'Ever wondered what it\'s like to reach for the skies? Well, in Mirrorplane all you need to do is to stop being a worhtless peasant and literally touch the sky with all of your five fingers. Easy.',
		stats: [
			{ value: 3, stat: 'affinity', con: 'light', contype: 'affinity', target: 'self', },
			{ value: -1, stat: 'spirit', con: '', contype: '', target: 'self', },
		]},

	{	id: 'chilled-butter',
		name: 'Chilled Butter',
		icon: 'ra ra-ice-cube',
		special: '',
		des: 'Being incredibly chilled allowed one to master the kitchen knife and prevent it from cutting through. They even gets a chance to break the knife and become the ultimate master of the ktichen.',
		stats: [
			{ value: 5, stat: 'slashresist', con: '', contype: '', target: 'self', },
			{ value: -1, stat: 'heatresist', con: '', contype: '', target: 'self', },
		]},

	{	id: 'glutton',
		name: 'Glutton',
		icon: 'ra ra-knife-fork',
		special: '',
		des: 'Having eaten a full meal is not enough, there\'s always space, and if there isn\'t then it\'s time to make more!',
		stats: [
			{ value: 1, stat: 'body', con: '', contype: '', target: 'self', },
			{ value: -3, stat: 'energycost', con: 'stuffed', contype: 'status', target: 'self', },
		]},

	// AFFINITY
	{ 	id: 'talented-fish', 
		name: 'Talented Fish',
		icon: 'ra ra-fish',
		special: '',
		des: 'One that is one with water are obviously very wet and capable of making others wet with ease.',
		stats: [
			{ value: 4, stat: 'affinity', con: 'water', contype: 'affinity', target: 'self', },
			{ value: 1, stat: 'spirit', con: '', contype: '', target: 'self', },
			{ value: -1, stat: 'heatresist', con: '', contype: '', target: 'self', },
		]},

	{ 	id: 'pyromaniac', 
		name: 'Pyromaniac',
		icon: 'ra ra-small-fire',
		special: '',
		des: 'They say not to let them touch anything that easilly sets on fire. What they didn\'t know is that every thing is easilly set on fire when they\'re around.',
		stats: [
			{ value: 4, stat: 'affinity', con: 'fire', contype: 'affinity', target: 'self', },
			{ value: 1, stat: 'myst', con: '', contype: '', target: 'self', },
			{ value: -1, stat: 'coldresist', con: '', contype: '', target: 'self', },
		]},

	{ 	id: 'golem', 
		name: 'Golem',
		icon: 'ra ra-brain-freeze',
		special: '',
		des: 'Be one with the rocks they say, so they decided to become as static as ever.',
		stats: [
			{ value: 4, stat: 'affinity', con: 'earth', contype: 'affinity', target: 'self', },
			{ value: 1, stat: 'body', con: '', contype: '', target: 'self', },
			{ value: -1, stat: 'crushresist', con: '', contype: '', target: 'self', },
		]},

	{ 	id: 'thunderstruck', 
		name: 'Thunderstruck',
		icon: 'ra ra-lightning-storm',
		special: '',
		des: 'They have been struck by a different kind of energy. Very different from the likes of Myst that nobody has yet to properly harness it. But those who are thunderstruck says that lightning soon overcome its limitations. Quite a scary tale, but they\'ve mostly likely lost their marbles from the initial strike.',
		stats: [
			{ value: 4, stat: 'affinity', con: 'electric', contype: 'affinity', target: 'self', },
			{ value: 1, stat: 'energy', con: '', contype: '', target: 'self', },
			{ value: -1, stat: 'myst', con: '', contype: '', target: 'self', },
		]},

	{ 	id: 'weapon-enthusiast', 
		name: 'Weapon Enthusiast',
		icon: 'ra ra-all-for-one',
		special: '',
		des: 'Allows for the effective use of weapons, for when the Mystic Arts are unreliable.',
		stats: [
			{ value: 3, stat: 'weapon', con: '', contype: '', target: 'self', },
		]},
];

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

// function findTraits() {
// 	$('trait').each( function() {
// 		var trait = $(this);
// 		var traitID = $(this).html();

// 		var traitCont = "<div>Unrecognized trait</div>";
// 		for(var i=0; i<charTraits.length; i++) {
// 			if(traitID == charTraits[i]['id']) {
// 				charTrait = charTraits[i];

// 				var traitstatlist = "";
// 				for (var j=0; j<charTrait['stats'].length; j++) {
// 					var statid = charTrait['stats'][j]['stat'],
// 						statname = findStatName(charTrait['stats'][j]['stat']),
// 						statvalue =  charTrait['stats'][j]['value'];

// 					if (statvalue > 0) statvalue = "+" + statvalue;
// 					if (statid == 'affinity') 
// 						statname = charTrait['stats'][j]['con'] + " " + statname;
// 					if (charTrait['stats'][j]['contype'] == 'status') 
// 						statname = statname + " while  " + charTrait['stats'][j]['con'];
// 					if (charTrait['stats'][j]['target'] == 'party') 
// 						statname = statname + " to Party";

// 					traitstatlist += statvalue + " " + statname;
// 					traitstatlist += ", ";
// 				}

// 				traitCont = "";
// 				traitCont += "<div>";
// 				traitCont += "<i class='" + charTrait['icon'] + "'></i>";
// 				if (trait.hasClass('showname')) traitCont += "<b>" + charTrait['name'] + "</b>";
// 				if (trait.hasClass('showstat')) traitCont += "<div class='stat'>" + traitstatlist + "</div>";
// 				if (trait.hasClass('showdes')) traitCont += "<div class='des'>" + charTrait['des'] + "</div>";
// 				traitCont += "<div>";
// 			}
// 		}
// 		$(this).html(traitCont);
// 	});
// }

// console.log(charTraits);