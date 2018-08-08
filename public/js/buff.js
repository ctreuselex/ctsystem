var charBuffs = [
	{ 	id: 'carefree', 
		name: 'Carefree',
		icon: 'ra ra-falling',
		duration: 0,
		des: 'Goofing around or just being totally chill in general gives quite a boost to the whole party\'s Spirit and Energy.',
		stats: [
			{ value: 1, stat: 'spirit', con: '', contype: '', },
			{ value: 1, stat: 'energy', con: '', contype: '', },
		]},
	{ 	id: 'lucky', 
		name: 'Lucky',
		icon: 'ra ra-clover',
		duration: 0,
		des: 'Are closely followed through life with a comforting sense of luck. They win often and they win big.',
		stats: [
			{ value: 1, stat: 'spirit', con: '', contype: '', },
		]},
];

function findBuffIndex(id) {
	for (var i=0; i<charBuffs.length; i++) {
		if (charBuffs[i]['id'] == id) return i;
	}
}