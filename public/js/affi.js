
var mymaAffinities = [
	{ 	id: 'mydow', 
		name: 'Mydow',
		icon: 'ra ra-aura',
		des: 'Lorem ipsum' },

	{ 	id: 'fire', 
		name: 'Fire',
		icon: 'ra ra-fire-symbol',
		des: 'Lorem ipsum' },

	{ 	id: 'water', 
		name: 'Water',
		icon: 'ra ra-water-drop',
		des: 'Lorem ipsum' },

	{ 	id: 'earth', 
		name: 'Earth',
		icon: 'ra ra-gem',
		des: 'Lorem ipsum' },

	{ 	id: 'air', 
		name: 'Air',
		icon: 'ra ra-kaleidoscope',
		des: 'Lorem ipsum' },

	{ 	id: 'light', 
		name: 'Light',
		icon: 'ra ra-sun',
		des: 'Lorem ipsum' },

	{ 	id: 'electric', 
		name: 'Electric',
		icon: 'ra ra-lightning-bolt',
		des: 'Lorem ipsum' },

	{ 	id: 'frost', 
		name: 'Frost',
		icon: 'ra ra-snowflake',
		des: 'Lorem ipsum' },

	{ 	id: 'plant', 
		name: 'Plant',
		icon: 'ra ra-zigzag-leaf',
		des: 'Lorem ipsum' },

	{ 	id: 'metal', 
		name: 'Metal',
		icon: 'ra ra-anvil',
		des: 'Lorem ipsum' },

];

$('affi').each( function() {
	var affinity = $(this);
	var affinityID = $(this).html();

	var affinityCont = "<div>Unrecognized Affinity</div>";
	for(var i=0; i<mymaAffinities.length; i++) {
		if(affinityID == mymaAffinities[i]['id']) {
			affinityCont = "";
			affinityCont += "<div>";
			affinityCont += "<i class='" + mymaAffinities[i]['icon'] + "'></i>";
			if (affinity.hasClass('showname')) affinityCont += "<b>" + mymaAffinities[i]['name'] + "</b>";
			if (affinity.hasClass('showdes')) affinityCont += "<div class='des'>" + mymaAffinities[i]['des'] + "</div>";
			affinityCont += "<div>";
		}
	}
	$(this).html(affinityCont);
})

// console.log(mymaAbilities);