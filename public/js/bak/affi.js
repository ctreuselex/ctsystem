var specialAffinities = 6;
var charAffinities = [

	// MYDOW
	// ===========================================================================================
	{ 	id: 'mydow', name: 'Mydow', special: false,
		icon: 'ra ra-aura',
		des: 'Lorem ipsum', },

	// MYSTIC
	// ===========================================================================================
	{ 	id: 'myst', name: 'Myst', special: false,
		icon: 'ra ra-bottle-vapors',
		des: 'Lorem ipsum', },

	// FIRE
	// ===========================================================================================
	{ 	id: 'fire', name: 'Fire', special: false,
		icon: 'ra ra-fire-symbol',
		des: 'Lorem ipsum', },

	// WATER
	// ===========================================================================================
	{ 	id: 'water', name: 'Water', special: false,
		icon: 'ra ra-water-drop',
		des: 'Lorem ipsum', },

	// EARTH
	// ===========================================================================================
	{ 	id: 'earth', name: 'Earth', special: false,
		icon: 'ra ra-gem',
		des: 'Lorem ipsum', },

	// AIR
	// ===========================================================================================
	{ 	id: 'air', name: 'Air', special: false,
		icon: 'ra ra-fluffy-swirl',
		des: 'Lorem ipsum', },

	// LIGHT
	// ===========================================================================================
	{ 	id: 'light', name: 'Light', special: false,
		icon: 'ra ra-sun',
		des: 'Lorem ipsum', },

	// ELECTRIC
	// ===========================================================================================
	{ 	id: 'electric', name: 'Electric', special: false,
		icon: 'ra ra-lightning-bolt',
		des: 'Lorem ipsum', },

	// FROST
	// ===========================================================================================
	{ 	id: 'frost', name: 'Frost', special: false,
		icon: 'ra ra-snowflake',
		des: 'Lorem ipsum', },

	// PLANT
	// ===========================================================================================
	{ 	id: 'plant', name: 'Plant', special: false,
		icon: 'ra ra-zigzag-leaf',
		des: 'Lorem ipsum', },

	// METAL
	// ===========================================================================================
	{ 	id: 'metal', name: 'Metal', special: false,
		icon: 'ra ra-anvil',
		des: 'Lorem ipsum', },


	// SPECIALS
	// ===========================================================================================

	// PAPER
	// ===========================================================================================
	{ 	id: 'paper', name: 'Paper', special: true,
		icon: 'fa fa-paper-plane',
		des: 'Lorem ipsum', },

	// SPEEED
	// ===========================================================================================
	{ 	id: 'speed', name: 'Speed', special: true,
		icon: 'ra ra-reverse',
		des: 'Lorem ipsum', },

	// FLESH
	// ===========================================================================================
	{ 	id: 'flesh', name: 'Flesh', special: true,
		icon: 'ra ra-blade-bite',
		des: 'Lorem ipsum', },

	// SPACE
	// ===========================================================================================
	{ 	id: 'space', name: 'Space', special: true,
		icon: 'ra ra-fluffy-swirl',
		des: 'Lorem ipsum', },

	// TIME
	// ===========================================================================================
	{ 	id: 'time', name: 'Time', special: true,
		icon: 'ra ra-clockwork',
		des: 'Lorem ipsum', },

];

function getAffinityIcon(id) {
	var icon = "";
	for (var i=0; i<charAffinities.length; i++) if (charAffinities[i]['id'] == id) icon = charAffinities[i]['icon'];
	return icon;
}

$('affi').each( function() {
	var affinity = $(this);
	var affinityID = $(this).html();

	var affinityCont = "<div>Unrecognized Affinity</div>";
	for(var i=0; i<charAffinities.length; i++) {
		if(affinityID == charAffinities[i]['id']) {
			affinityCont = "";
			affinityCont += "<div>";
			affinityCont += "<i class='" + charAffinities[i]['icon'] + "'></i>";
			if (affinity.hasClass('showname')) affinityCont += "<b>" + charAffinities[i]['name'] + "</b>";
			if (affinity.hasClass('showdes')) affinityCont += "<div class='des'>" + charAffinities[i]['des'] + "</div>";
			affinityCont += "<div>";
		}
	}
	$(this).html(affinityCont);
})