
var mymaAbilities = [   
	// RUDIMENTI
	{ 	id: 'rud01', 
		name: 'Generation',
		icon: 'ra  ra-burning-embers',
		des: 'The most basic technique for Rudimenti is the creation of energy; which comes easy for those who are gifted with the affinity to the likes of light, fire, etc. It is basically what makes a Mystic Rudimenti.' },
  	{ 	id: 'rud02', 	
  		name: 'Creation',
		icon: 'ra ra-frostfire',
  		des: 'The second basic technique of Rudimenti is the creation of something that can be called a material; a rock for example. People say the being able to do this is what makes a better Rudimenti, though it pretty much relies on one\'s affinity which they have no control of.' }, 
  	{ 	id: 'rud03', 	
  		name: 'Duplication',
		icon: 'ra ra-two-hearts',
  		des: 'It is the technique of creating the same matter as the one the Mystic is currently in contact with, requiring minimal Myst use. And with Invorti around, rumor ties it as the origin of the said art.' }, 

		// AGRICONTI
		{ 	id: 'agr01', 
			name: 'Germination',
			icon: 'ra ra-sprout',
			des: 'Considered as the best thing the Mystics has ever done is the discovery of their capability to create a seed and rapidly grow it into maturiy in only a matter of days. Even now, it is still the city\'s main source of food.' },
		{ 	id: 'agr02', 
			name: 'Formulation',
			icon: 'ra ra-sprout-emblem',
			des: 'Some Agriconti can even skip the germination process and create food directly. Though, such Mystics tend to be extremely talented and often ends up serving as the heads of the industry; only doing their arts when they need to or when they want to.' },

		// SIGIATI
		{ 	id: 'sig01', 
			name: 'Invocation',
			icon: 'ra ra-explosion',
			des: 'Also; the power to do anything. Sigiati are people who the people consider as only a level below the Weaver.' },

	// CIRKUNESI
	{ 	id: 'cir01', 
		name: 'Manipulation',
		icon: 'ra ra-crystals',
		des: 'The basic of Cirkunesi is pretty much just being able to move things around with one\'s mind, but with the limitation of only capable of doing it to things related to their affinity.' },
	{ 	id: 'cir02', 
		name: 'Perception',
		icon: 'ra ra-burning-eye',
		des: 'Another core technique of Cirkunesi is being able to "see" or "feel" their affinity with their mind. It\'s a technique that they are widely known for but in reality, only few actually possess the talent to do it.' },
	{ 	id: 'cir03', 
		name: 'Protection',
		icon: 'ra ra-heavy-shield',
		des: 'Most Cirkunesi\'s first technique is the ability to resist their own affinity. It is actually how most Mystics, regardless of art, discover theirs.' },

		// CONSTRUKTI
		{ 	id: 'con01', 
			name: 'Construction',
			icon: 'ra ra-locked-fortress',
			des: 'The main difference between a Construkti and a regular Cirkunesi is their attention to detail, and their incredibly intricate way of manipulating their affinity.' },
		{ 	id: 'con02', 
			name: 'Extension',
			icon: 'ra ra-decapitation',
			des: 'Due to the nature of their art, Construkti often perceive their affinity in ways no other Mystic are capable of; like being able to manipulate anything that even merely contain it or pull it out entirely.' },

	// EXTENEBRI
	{ 	id: 'ext01', 
		name: 'Detection',
		icon: 'ra ra-bleeding-eye',
		des: 'What separates an excellent Extenebri from the other Mystic arts or other Extenebris is the ability too "see" Myst in its purest form regardless of its ties to their own affinity.' },
	{ 	id: 'ext02', 
		name: 'Crystalization',
		icon: 'ra ra-diamond',
		des: 'The bread and butter of Extenebri is the ability to create anything out of Myst. Though limited with the same glass-like material, the versitality of shaping it into anything made it the most common form of Mystic Art since its inception.' },
	{ 	id: 'ext03', 
		name: 'Remotion',
		icon: 'ra ra-doubled',
		des: 'With the rising evidence of the existence of Vuidemorti, it is now called to poor man\'s version of it, as instead of completely creating an area void of Myst, it is simply the technique of moving the mass of Myst from one area to another, rendering those within the area weakened, but not Mystlocked.' },

		// TEKINESI
		{ 	id: 'tek01', 
			name: 'Specialization',
			icon: 'ra ra-all-for-one',
			des: 'Allows a Mystic to use special Myst-based weapons made especially for Tekinesi. Also a free tour to Tauroscene\'s factory every 2 recursions.' },
		
		// VUIDEMORTI
		{ 	id: 'vui01', 
			name: 'Implosion',
			icon: 'ra ra-broken-skull',
			des: 'The ability to completely void an area of Myst which leads to several nasty implications. It\'s basically like being detached from your soul.' },

	// INVORTI
	{ 	id: 'inv01', 
		name: 'Transfiguration',
		icon: 'ra ra-insect-jaws',
		des: 'The ability of being able to change one matter to the form of another quite scares those of the Dominion as it quickly became a competitor to their "being the only ones able to create something new" monopoly.' },
	{ 	id: 'inv02', 
		name: 'Transmutation',
		icon: 'ra ra-muscle-up',
		des: 'If a matter has it\'s own will to resist an Invorti\'s transfiguration shenanigans, then maybe it\'s time to use a little bit of force.' },
];

$('myma').each( function() {
	var ability = $(this);
	var abilityID = $(this).html();

	var abilityCont = "<div>Unrecognized ability</div>";
	for(var i=0; i<mymaAbilities.length; i++) {
		if(abilityID == mymaAbilities[i]['id']) {
			abilityCont = "";
			abilityCont += "<div>";
			abilityCont += "<i class='" + mymaAbilities[i]['icon'] + "'></i>";
			if (ability.hasClass('showname')) abilityCont += "<b>" + mymaAbilities[i]['name'] + "</b>";
			if (ability.hasClass('showdes')) abilityCont += "<div class='des'>" + mymaAbilities[i]['des'] + "</div>";
			abilityCont += "<div>";
		}
	}
	$(this).html(abilityCont);
})

// console.log(mymaAbilities);