
var curSkillClass = '';

function generateField(options) {

	var el = options['el'];
	var elsize = options['elsize'];
	var width = options['width'];
	var height = options['height'];
	var area = options['area'];
	curSkillClass = options['skillclass'];

	var field = [];
	var tilesize = (elsize / width);
	if (area) tilesize = 8;

	for (var i=0; i<width; i++) {
		var lineheight = height + 1,
			colIndent = 0,
			margin = 1;

		if (i % 2 == 0) {
			lineheight = height;
			colIndent = (tilesize / 2) - 2;
			if (area) colIndent = 4;
		}

		for (var j=0; j<lineheight; j++) {
			var tile = i + "-" + j,
				top = ((j*tilesize) + (j*margin)) + colIndent,
				left = ((i*tilesize) + (i*margin));

			field.push({
				id: tile,
				top: top,
				left: left,
				class: '',
				group: '',
			});
		}
	}

	if (area) {
		field = getRange(field, area);
		return drawField(field, tilesize);

	} else $(el).append(drawField(field, tilesize));
}

function drawField(field, tilesize) {
	var tiles = "";
	for (var i=0; i<field.length; i++) {
		var tile = "";

		tile += "<div ";
		tile += 	"id='" + field[i]['id'] + "' ";
		tile += 	"class='tile ";
		tile += 	field[i]['class'];
		tile += 	"' style='";
		tile += 		"top: " + field[i]['top'] + "px;";
		tile += 		"left: " + field[i]['left'] + "px;";
		tile += 		"width: " + tilesize + "px;";
		tile += 		"height: " + tilesize + "px;";
		tile += 	"' " + field[i]['group'];
		tile += ">";
		tile += "</div>";
		
		tiles += tile;
	}
	return tiles;
}


function getRange(field, area) {
	var areasplit = area.split('-'),
		areaclass = "",
		target = [],
		groupees = '';

	if (areasplit[0] == 'instant') {
		field[findTileIndex(field, '3-3')]['class'] += 'caster ';

		if (areasplit[1] == 'self') {
			target.push({main: '3-3', group: [[0,0], ]});
		
		} else if (areasplit[1] == 'shortring') {
			target.push({main: '3-3', group: [[0,-1], [1,-1], [1,0], [0,1], [-1,0], [-1,-1], ]});

		} else if (areasplit[1] == 'longring') {
			target.push({main: '3-3', group: [[0,-2], [1,-2], [2,-1], [2,0], [2,1], [1,1], [0,2], [-1,1], [-2,1], [-2,0], [-2,-1], [-1,-2], ]});
		
		} else if (areasplit[1] == 'shortcircle') {
			target.push({main: '3-3', group: [[0,0], [0,-1], [1,-1], [1,0], [0,1], [-1,0], [-1,-1], ]});

		} else if (areasplit[1] == 'longcircle') {
			target.push({main: '3-3', group: [[0,0], [0,-1], [1,-1], [1,0], [0,1], [-1,0], [-1,-1], 
				[0,-2], [1,-2], [2,-1], [2,0], [2,1], [1,1], [0,2], [-1,1], [-2,1], [-2,0], [-2,-1], [-1,-2], ]});

		} else if (areasplit[1] == 'widecircle') {
			target.push({main: '3-3', group: [[0,0], [0,-1], [1,-1], [1,0], [0,1], [-1,0], [-1,-1], 
				[0,-2], [1,-2], [2,-1], [2,0], [2,1], [1,1], [0,2], [-1,1], [-2,1], [-2,0], [-2,-1], [-1,-2],
				[0,-3], [1,-3], [2,-2], [3,-2], [3,-1], [3,0], [3,1], [2,2], [1,2], [0,3],
				[-1,2], [-2,2], [-3,1], [-3,0], [-3,-1], [-3,-2], [-2,-2], [-1,-3],  ]});
		}

	} else if (areasplit[0] == 'melee') {
		field[findTileIndex(field, '3-3')]['class'] += 'caster ';

		if (areasplit[1] == 'dot') {
			target.push({main: '3-2', group: [[0,0], ]});
			target.push({main: '4-2', group: [[0,0], ]});
			target.push({main: '4-3', group: [[0,0], ]});
			target.push({main: '3-4', group: [[0,0], ]});
			target.push({main: '2-3', group: [[0,0], ]});
			target.push({main: '2-2', group: [[0,0], ]});

		} else if (areasplit[1] == 'cone') {
			target.push({main: '3-2', group: [[0,0], [-1,0], [1,0],  	[-1,-1], [0,-1], [1,-1], ]});
			target.push({main: '4-2', group: [[0,0], [-1,0], [0,1], 	[0,-1], [1,0], [1,1], ]});
			target.push({main: '4-3', group: [[0,0], [0,-1], [-1,1], 	[1,0], [1,1], [0,1], ]});
			target.push({main: '3-4', group: [[0,0], [1,-1], [-1,-1], 	[1,0], [0,1], [-1,0], ]});
			target.push({main: '2-3', group: [[0,0], [1,1], [0,-1], 	[0,1], [-1,1], [-1,0], ]});
			target.push({main: '2-2', group: [[0,0], [0,1], [1,0], 		[-1,1], [-1,0], [0,-1], ]});

		} else if (areasplit[1] == 'shortcrescent') {
			target.push({main: '3-2', group: [[0,0], [-1,0], [1,0], ]});
			target.push({main: '4-2', group: [[0,0], [-1,0], [0,1], ]});
			target.push({main: '4-3', group: [[0,0], [0,-1], [-1,1], ]});
			target.push({main: '3-4', group: [[0,0], [1,-1], [-1,-1], ]});
			target.push({main: '2-3', group: [[0,0], [1,1], [0,-1], ]});
			target.push({main: '2-2', group: [[0,0], [0,1], [1,0], ]});

		} else if (areasplit[1] == 'longcrescent') {
			target.push({main: '3-1', group: [[0,0], [-2,1], [-1,0], [1,0], [2,1], ]});
			target.push({main: '5-2', group: [[0,0], [-2,-1], [-1,-1], [0,1], [0,2], ]});
			target.push({main: '5-4', group: [[0,0], [0,-2], [0,-1], [-1,0], [-2,1], ]});
			target.push({main: '3-5', group: [[0,0], [2,-1], [1,-1], [-1,-1], [-2,-1], ]});
			target.push({main: '1-4', group: [[0,0], [2,1], [1,0], [0,-1], [0,-2], ]});
			target.push({main: '1-2', group: [[0,0], [0,2], [0,1], [1,-1], [2,-1], ]});

			target.push({main: '4-1', group: [[0,0], [-2,0], [-1,0], [1,1], [1,2], ]});
			target.push({main: '5-3', group: [[0,0], [-1,-2], [0,-1], [0,1], [-1,1], ]});
			target.push({main: '4-4', group: [[0,0], [1,-1], [1,0], [-1,1], [-2,0], ]});
			target.push({main: '2-4', group: [[0,0], [2,0], [1,1], [-1,0], [-1,-1], ]});
			target.push({main: '1-3', group: [[0,0], [1,1], [0,1], [0,-1], [1,-2], ]});
			target.push({main: '2-1', group: [[0,0], [-1,2], [-1,1], [1,0], [2,0], ]});

		} else if (areasplit[1] == 'shortpierce') {
			target.push({main: '3-1', group: [ [0,0], [0,1], ]});
			target.push({main: '5-2', group: [ [0,0], [-1,0], ]});
			target.push({main: '5-4', group: [ [0,0], [-1,-1], ]});
			target.push({main: '3-5', group: [ [0,0], [0,-1], ]});
			target.push({main: '1-4', group: [ [0,0], [1,-1], ]});
			target.push({main: '1-2', group: [ [0,0], [1,0], ]});

		} else if (areasplit[1] == 'longpierce') {
			target.push({main: '3-1', group: [ [0,-1], 	[0,0], [0,1],  ]});
			target.push({main: '5-2', group: [ [1,-1], 	[0,0], [-1,0], ]});
			target.push({main: '5-4', group: [ [1,0], 	[0,0], [-1,-1], ]});
			target.push({main: '3-5', group: [ [0,1], 	[0,0], [0,-1], ]});
			target.push({main: '1-4', group: [ [-1,0], 	[0,0], [1,-1], ]});
			target.push({main: '1-2', group: [ [-1,-1], [0,0], [1,0], ]});

		} else if (areasplit[1] == 'widepierce') {
			target.push({main: '3-1', group: [ [0,-1], 	[0,0], [0,1],		[-1,0], [-1,-1], [1,0], [1,-1],  ]});
			target.push({main: '5-2', group: [ [1,-1], 	[0,0], [-1,0], 		[-1,-1], [0,-1], [0,1], [1,0], [1,-2,] ]});
			target.push({main: '5-4', group: [ [1,0], 	[0,0], [-1,-1],		[0,-1], [1,-1], [-1,0], [0,1], [1,1]  ]});
			target.push({main: '3-5', group: [ [0,1], 	[0,0], [0,-1], 		[1,-1], [1,0], [-1,-1], [-1,0], ]});
			target.push({main: '1-4', group: [ [-1,0], 	[0,0], [1,-1], 		[1,0], [0,1], [-1,1], [0,-1], [-1,-1] ]});
			target.push({main: '1-2', group: [ [-1,-1], [0,0], [1,0], 		[0,1], [-1,0], [1,-1], [0,-1], [-1,-2] ]});
		}

	} else if (areasplit[0] == 'ranged') {
		for (var i=0; i<field.length; i++) {
			if (field[i]['id'] == '1-3') {
				field[i]['class'] = 'caster';
				field[i]['group'] = '';	

			} else {
				if (areasplit[1] == 'dot') {
					target.push({main: field[i]['id'], group: [[0,0], ]});

				} else if (areasplit[1] == 'shortring') {
					target.push({main: field[i]['id'], group: [[0,-1], [1,-1], [1,0], [0,1], [-1,0], [-1,-1], ]});

				} else if (areasplit[1] == 'shortcircle') {
					target.push({main: field[i]['id'], group: [[0,0], [0,-1], [1,-1], [1,0], [0,1], [-1,0], [-1,-1], ]});

				}
			}
		}

	}

	for (var i=0; i<target.length; i++) { 
		var tileid = findTileIndex(field, target[i]['main']);
		
		field[tileid]['class'] += 'inrange ';
		groupees = findGroupees(areasplit[0], target[i]['main'], target[i]['group']);
		field[tileid]['group'] = 'onmouseover="highlightGroup(this, \'' + curSkillClass + '\', \''+ groupees +'\')"';
		field[tileid]['group'] += ' onmouseout="lowlightGroup(this, \'' + curSkillClass + '\')"';

		if (groupees != '' && areasplit[0] != 'ranged') {
			var groupeesSplit = groupees.split('|');
			for (var j=0; j<groupeesSplit.length; j++) {
				var grouptileid = findTileIndex(field, groupeesSplit[j]);

				if (groupeesSplit[j] != '' ) {
					field[grouptileid]['class'] += 'inrange ';

					if (areasplit[1] != 'shortcrescent' && areasplit[1] != 'longcrescent') {
						field[grouptileid]['group'] = 'onmouseover="highlightGroup(this, \'' + curSkillClass + '\', \''+ groupees +'\')"';
						field[grouptileid]['group'] += ' onmouseout="lowlightGroup(this, \'' + curSkillClass + '\')"';
					}
				}
			}
		}
	}

	return field;
}

function findTileIndex(field, id) {
	for (var i=0; i<field.length; i++) {
		if(field[i]['id'] == id) return i;
	}
}

function findGroupees(type, main, group) {
	var mainsplit = main.split('-'),
		groupees = "";

	for (var i=0; i<group.length; i++) {
		var id = "";

		id += parseInt(mainsplit[0]) + parseInt(group[i][0]);
		id += "-";

		if (type == 'ranged' && mainsplit[0] % 2 == 0) {
			if (group[i][0] % 2 == 0) id += parseInt(mainsplit[1]) + parseInt(group[i][1]);
			else id += parseInt(mainsplit[1]) + parseInt(group[i][1] + 1);
		} else id += parseInt(mainsplit[1]) + parseInt(group[i][1]);

		groupees += id + "|";
	}
	return groupees;
}

function highlightGroup(el, skillclass, groupees) {
	var groupeesSplit = groupees.split('|');

	// $(el).addClass('target');
	for (var i=0; i<groupeesSplit.length; i++) {
		if (groupeesSplit[i] != '') {
			$('.' + skillclass + ' #' + groupeesSplit[i] + '.tile').addClass('target');
		}
	}
}

function lowlightGroup(el, skillclass) {
	$('.' + skillclass + ' .tile').removeClass('target');
}