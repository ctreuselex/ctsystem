
var charAffinities = [
	{ 	id: 'mydow', name: 'Mydow',
		icon: 'ra ra-aura',
		des: 'Lorem ipsum' },

	{ 	id: 'fire', name: 'Fire',
		icon: 'ra ra-fire-symbol',
		des: 'Lorem ipsum' },

	{ 	id: 'water', name: 'Water',
		icon: 'ra ra-water-drop',
		des: 'Lorem ipsum' },

	{ 	id: 'earth', name: 'Earth',
		icon: 'ra ra-gem',
		des: 'Lorem ipsum' },

	{ 	id: 'air', name: 'Air',
		icon: 'ra ra-fluffy-swirl',
		des: 'Lorem ipsum' },

	{ 	id: 'light', name: 'Light',
		icon: 'ra ra-sun',
		des: 'Lorem ipsum' },

	{ 	id: 'electric', name: 'Electric',
		icon: 'ra ra-lightning-bolt',
		des: 'Lorem ipsum' },

	{ 	id: 'frost', name: 'Frost',
		icon: 'ra ra-snowflake',
		des: 'Lorem ipsum' },

	{ 	id: 'plant', name: 'Plant',
		icon: 'ra ra-zigzag-leaf',
		des: 'Lorem ipsum' },

	{ 	id: 'metal', name: 'Metal',
		icon: 'ra ra-anvil',
		des: 'Lorem ipsum' },

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