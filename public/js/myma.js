
var mymaAbilities = [   
	// RUDIMENTI
	{ 	id: 'rud01', 
		name: 'Generation',
		icon: 'fa fa-times',
		des: 'The most basic technique for Rudimenti is the creation of energy; which comes easy for those who are gifted with the affinity to the likes of light, fire, etc. It is basically what makes a Mystic Rudimenti.' },
  	{ 	id: 'rud02', 	
  		name: 'Creation',
		icon: 'fa fa-times',
  		des: 'The second basic technique of Rudimenti is the creation of something that can be called a material; a rock for example. People say the being able to do this is what makes a better Rudimenti, though it pretty much relies on one\'s affinity which they have no control of.' }, 
  	{ 	id: 'rud03', 	
  		name: 'Duplication',
		icon: 'fa fa-times',
  		des: 'It is the technique of creating the same matter as the one the Mystic is currently in contact with, requiring minimal Myst use. And with Invorti around, rumor ties it as the origin of the said art.' }, 

	// CIRKUNESI
	{ 	id: 'cir01', 
		name: 'Manipulation',
		icon: 'fa fa-times',
		des: 'The basic of Cirkunesi is pretty much just being able to move things around with one\'s mind, but with the limitation of only capable of doing it to things related to their affinity.' },
	{ 	id: 'cir02', 
		name: 'Perception',
		icon: 'fa fa-times',
		des: 'Another core technique of Cirkunesi is being able to "see" or "feel" their affinity with their mind. It\'s a technique that they are widely known for but in reality, only few actually possess the talent to do it.' },
	{ 	id: 'cir03', 
		name: 'Protection',
		icon: 'fa fa-times',
		des: 'Most Cirkunesi\'s first technique is the ability to resist their own affinity. It is actually how most Mystics, regardless of art, discover theirs.' },

	// EXTENEBRI
	{ 	id: 'ext01', 
		name: 'Detection',
		icon: 'fa fa-times',
		des: 'What separates an excellent Extenebri from the other Mystic arts or other Extenebris is the ability too "see" Myst in its purest form regardless of its ties to their own affinity.' },
	{ 	id: 'ext02', 
		name: 'Crystalization',
		icon: 'fa fa-times',
		des: 'The bread and butter of Extenebri is the ability to create anything out of Myst. Though limited with the same glass-like material, the versitality of shaping it into anything made it the most common form of Mystic Art since its inception.' },
	{ 	id: 'ext03', 
		name: 'Remotion',
		icon: 'fa fa-times',
		des: 'With the rising evidence of the existence of Vuidemorti, it is now called to poor man\'s version of it, as instead of completely creating an area void of Myst, it is simply the technique of moving the mass of Myst from one ares to another, rendering those within the area weakened.' },

	// INVORTI
	{ 	id: 'inv01', 
		name: 'Transfiguration',
		icon: 'fa fa-times',
		des: 'The ability of being able to change one matter to the form of another quite scares those of the Dominion as it quickly became a competitor to their "being the only ones able to create something new" monopoly.' },
	{ 	id: 'inv02', 
		name: 'Transmutation',
		icon: 'fa fa-times',
		des: 'If a matter has it\'s own will to resist an Invorti\'s transfiguration shenanigans, then maybe it\'s time to use a little bit of force.' },
];

$('myma').each( function() {
	var abilityID = $(this).html();

	var abilityCont = "<div>Unrecognized ability</div>";
	for(var i=0; i<mymaAbilities.length; i++) {
		if(abilityID == mymaAbilities[i]['id']) {
			abilityCont = "";
			abilityCont += "<div>";
			abilityCont += "<i class='" + mymaAbilities[i]['icon'] + "'></i>";
			abilityCont += "<b>" + mymaAbilities[i]['name'] + "</b>";
			abilityCont += "<div class='des'>" + mymaAbilities[i]['des'] + "</div>";
			abilityCont += "<div>";
		}
	}
	$(this).html(abilityCont);
})

// console.log(mymaAbilities);