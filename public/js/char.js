
var constantsStat = {
		health: 10, 		energy: 3, 			myst: 3,
		body: 5, 			mind: 5, 			spirit: 5,
		accuracy: 60, 		evasion: 0, 		counter: 0,
		affinity: 1, 		weapon: 1,			counterdam: 0,
		heatresist: 0, 		coldresist: 0, 		sparkresist: 0,
		pierceresist: 0, 	slashresist: 0, 	crushresist: 0,
		persuasion: 1, 		bartering: 1, 		thievery: 1,
	}

var partyChars = [];
var partyTraits = [];

function initChars() {
	partyChars = [];
	partyTraits = [];

	for (var i=0; i<3; i++) {
		partyChars.push({
			blank:          true,
			portrait: 		'',
			name: 			'',
			division: 		'',
			origin: 		'',
			health: 		constantsStat['health'], 		
			energy: 		constantsStat['energy'], 		
			myst: 			constantsStat['myst'], 			
			body: 			constantsStat['body'], 
			mind: 			constantsStat['mind'], 
			spirit: 		constantsStat['spirit'],
			affinity: 		constantsStat['affinity'],  	affinityelem: 'mydow',
			weapon: 		constantsStat['weapon'],		counterdam: constantsStat['counterdam'],
			accuracy: 		constantsStat['accuracy'], 		evasion: constantsStat['evasion'], 				counter: constantsStat['counter'],
			heatresist: 	constantsStat['heatresist'], 	coldresist: constantsStat['coldresist'], 		sparkresist: constantsStat['sparkresist'],
			pierceresist: 	constantsStat['pierceresist'], 	slashresist: constantsStat['slashresist'], 		crushresist: constantsStat['crushresist'],
			persuasion: 	constantsStat['persuasion'], 	bartering: constantsStat['bartering'], 			thievery: constantsStat['thievery'],
			traits: [], weaps: [], arts: [], buffs: [], }
			);
		partyTraits.push({
			traits: [],
		});
	}

	// TEST
	// partyChars[1]['traits'].push(9);
	// partyChars[0]['traits'].push(6);
	// partyChars[1]['traits'].push(6);
}


// SAVE NAME
// ============================================================================================================
// ============================================================================================================
function saveName(el, char) {
	partyChars[char]['name'] = $(el).val(); 
}

// SET CHARCTERS
// ============================================================================================================
// ============================================================================================================
function setChar(char) {
	var el = $('#char' + char);

	if (partyChars[char]['blank']) $(el).addClass('blank');
	else $(el).removeClass('blank');

	$('.name', el).val( partyChars[char]['name'] );

	// GET ORIGIN
	var division = partyChars[char]['division'],
		origin = partyChars[char]['origin'],
		originname = "",
		originlist = "";

	var divisionmcolor = "";
	var divisionscolor = "";
	if (division != '') {
		// GET DIVISION NAME
		for (var i=0; i<cityDivisions.length; i++) {
			if (cityDivisions[i]['id'] == division) {
				divisionmcolor = cityDivisions[i]['mcolor'];
				divisionscolor = cityDivisions[i]['scolor'];
				originlist += "<div class='attr ttdivision'> Division: ";
				originlist += "<b>" + cityDivisions[i]['name'] + "</b>";
				originlist += "</div>";
				// GET ORIGIN NAME
				for (var j=0; j<cityDivisions[i]['origins'].length; j++) {
					if (cityDivisions[i]['origins'][j]['id'] == origin) {
						originname = cityDivisions[i]['origins'][j]['name'];
						originlist += "<div class='attr ttorigin'> Origin: ";
						originlist += "<b>" + originname + "</b>";
						originlist += "</div>";
					}
				}
			}
		}
	} else {
		originlist += "<div class='attr'>";
		originlist += "There's nothing here..."
		originlist += "</div>";
	}

	// ANIMATE DIAMONDS GET PORTRAIT
	var charportrait = '';
	if (partyChars[char]['blank']) {
		$('.diamonds', el).fadeOut("fast", function() {
			$('.diamonds', el).show();
			$('.diamonds', el).html();
			$('.diamonds', el).html("<div id='dbchar" + char + "' class='diamond block'></div>" + 
				"<div id='dbcharback" + char + "' class='diamond block' style='overflow:hidden'>" + 
				"<div class='portrait'></div></div>" +
				"<div id='dbcharfront" + char + "' class='diamond block'></div>");
			animateDiamonds( function() {
				charportrait = randPortrait(char);
				$('#char' + char + ' .portrait').css('background-image', 'url(' + portraits[charportrait] + ')');
			});
		});
	} else {
		animateDiamonds( function() {
			charportrait = partyChars[char]['portrait'];
			$('#char' + char + ' .portrait').css('background-image', 'url(' + portraits[charportrait] + ')');
		});
	}

	function animateDiamonds(callback) {
		diamondDes('#dbchar' + char, {
			top: 30,
			left: -30,
			size: 400,
			color: divisionmcolor,
			glow: true });
		diamondDes('#dbcharback' + char, {
			top: -45,
			left: 10,
			size: 500,
			color: divisionscolor,
			glow: true });	
		diamondDes('#dbcharfront' + char, {
			top: 30,
			left: 60,
			size: 300,
			color: divisionscolor,
			glow: true });
		callback();
	}

	// GET TRAITS
	var traits = partyChars[char]['traits'],
		traitlist = "";

	// GET AFFINITY
	var affinity = 0;
		affinityelem = partyChars[char]['affinityelem'],
		affinityelemname = '', affinityelemicon = '';

	// ============================================================================================================
	// ============================================================================================================
	// GET TRAIT LIST AND UPS
	var traitups = {
		health: 0, 			energy: 0, 			myst: 0,
		body: 0, 			mind: 0, 			spirit: 0,
		accuracy: 0, 		evasion: 0, 		counter: 0,
		affinity: 0, 		weapon: 0,			counterdam: 0,
		heatresist: 0, 		coldresist: 0, 		sparkresist: 0,
		pierceresist: 0, 	slashresist: 0, 	crushresist: 0,
		persuasion: 0, 		bartering: 0, 		thievery: 0, }
	var traitconBuffs = [];

	if (traits.length) {
		for (var i=0; i<traits.length; i++) {
			var traitid = traits[i],
				trait = charTraits[traitid];
				traitstatlist = "",
				traiteffectiveness = 0;

			for (var j=0; j<trait['stats'].length; j++) {
				var traitstat = trait['stats'][j],
					traitvalue = traitstat['value'],
					statid = traitstat['stat'],
					statname = getStatName(traitstat['stat']),
					statvalue =  traitstat['value'],
					stattag = "", stateffectivenesscolor = "";
					
				if (statvalue > 0) statvalue = "+" + statvalue;
				// if (statid == 'affinity') statname = traitstat['con'].toUpperCase() + " " + statname;

				// TRAITS APPLIES TO SELF
				if (traitstat['target'] == 'self') {

					// TRAITS WITH CONDITIONS
					if (traitstat['contype'] != '') {
						var statApplies = false,
							contraitname = traitstat['con'];

						// SAVE AFFINITY BASED CONS
						if (traitstat['contype'] == 'affinity') {

							if (traitstat['stat'] != 'special') stattag = statvalue + " <i class='" + getAffinityIcon(traitstat['con']) + "'></i> " + statname;
							else stattag = " <i class='" + getAffinityIcon(traitstat['con']) + "'></i> " + statvalue + " " + statname;
							if (traitstat['con'] == affinityelem) {
								stateffectivenesscolor = '';
								traiteffectiveness++;
								statApplies = true;
							} else { 
								stateffectivenesscolor = 'inactive';
								statApplies = false;
							}

						// SAVE TRAIT BASED CONS
						} else if (traitstat['contype'] == 'trait') {

							stattag = statvalue + " " + statname;
							if (checkCharTraits(contraitname, traits)) {
								stateffectivenesscolor = '';
								stattag = '(' + getTraitName(contraitname) + ') ' + stattag;
								traiteffectiveness++;
								statApplies = true;
							} else { 
								stateffectivenesscolor = 'inactive';
								statApplies = false;
							}

						// SAVE PARTY TRAIT BASED CONS
						} else if (traitstat['contype'] == 'partytrait') {

							stattag = statvalue + " " + statname;
							if (checkPartyCharTraits(contraitname, char)) {
								stateffectivenesscolor = '';
								stattag = '(' + getTraitName(contraitname) + ' from party) ' + stattag;
								traiteffectiveness++;
								statApplies = true;
							} else { 
								stateffectivenesscolor = 'inactive';
								statApplies = false;
							}

						// SAVE STATUS BASED CONS
						} else if (traitstat['contype'] == 'status') {
							var curStatus = charStatus[findStatusIndex(contraitname)];

							stateffectivenesscolor = '';
							stattag = statvalue + " " + getStatName(traitstat['stat']); 
							stattag += ' (while |' + curStatus['id'] + '|)';
							// stattag += ' (while <span class="buff tt' + curStatus['id'] + '">';
							// stattag += 		'<i class="' + curStatus['icon'] + '"></i> ' + curStatus['name'];
							// stattag += '</span>)';
							statApplies = false;
						} 

						traitconBuffs.push({ 
							id: trait['id'],
							value: traitvalue,
							stat: traitstat['stat'],
							con: traitstat['con'], 
							contype: traitstat['contype'],
							applies: statApplies, });

					// OTHERWISE ADD TRAIT STATS
					} else {
						stateffectivenesscolor = '';
						stattag = statvalue + " " + statname; 
						traitups[statid] += traitstat['value'];
					}

				} else if (traitstat['target'] == 'party') {

					// TRAITS WITH CONDITIONS (PARTY)
					if (traitstat['contype'] != '') {

					// OTHERWISE ADD TRAIT STATS
					} else {
						stateffectivenesscolor = '';
						stattag = statvalue + " " + statname; 
						stattag += ' to party';
						var hasTrait = false;

						for (var k=0; k<partyTraits[char]['traits'].length; k++) {
							var partyTraitsChar = partyTraits[char]['traits'][k];
							if(partyTraitsChar['id'] == trait['id'] && partyTraitsChar['stat'] == traitstat['stat']) hasTrait = true;
						}
						if(!hasTrait) {
							partyTraits[char]['traits'].push({
								id: trait['id'],
								value: traitvalue,
								stat: traitstat['stat'],
							});
						}
					}

				} else if (traitstat['target'] == 'enemy') {

					// TRAITS WITH CONDITIONS (ENEMIES)
					if (traitstat['contype'] != '') {

					// OTHERWISE ADD TRAIT STATS
					} else {
						stateffectivenesscolor = '';
						stattag = statvalue + " " + statname; 
						stattag += ' to enemies';
						var hasTrait = false;

						for (var k=0; k<partyTraits[char]['traits'].length; k++) {
							var partyTraitsChar = partyTraits[char]['traits'][k];
							if(partyTraitsChar['id'] == trait['id'] && partyTraitsChar['stat'] == traitstat['stat']) hasTrait = true;
						}
						if(!hasTrait) {
							partyTraits[char]['traits'].push({
								id: trait['id'],
								value: traitvalue,
								stat: traitstat['stat'],
							});
						}
					}
				}

				traitstatlist += "<div class='inner-attr " + stateffectivenesscolor + "'>";
				traitstatlist += 	findReplaceableTags(stattag);
				traitstatlist += "</div>";
			}

			var traiteffectivenessclass = "";
			if (traiteffectiveness > 0) traiteffectivenessclass = "compatible";
			else if (traiteffectiveness < 0) traiteffectivenessclass = "incompatible";

			traitlist += "<div class='attr tttrait " + traiteffectivenessclass + "'>";
			traitlist += 	"<i class='" + trait['icon'] + "'></i> ";
			traitlist += 	trait['name'];
			if (trait['special']!='') traitlist += 	" (" + originname + ")";
			traitlist += 	"<div class='des'>";
			traitlist += 		"<p class='det'>";
			traitlist += 			trait['des'];
			traitlist +=		"</p>";
			traitlist += 		traitstatlist;
			traitlist += 	"</div>";
			traitlist += "</div>"; 
		}
	}

	// GET PARTY TRAITS
	var partytraitups = applyPartyTraits();

	// APPLY CON BASED TRAITS
	for (var i=0; i<traitconBuffs.length; i++) {
		if (traitconBuffs[i]['applies']) {
			var statname = traitconBuffs[i]['stat'];
			traitups[statname] += traitconBuffs[i]['value'];
		}
	}

	var traitfin = {
		health: 0, 			energy: 0, 			myst: 0,
		body: 0, 			mind: 0, 			spirit: 0,
		accuracy: 0, 		evasion: 0, 		counter: 0,
		affinity: 0, 		weapon: 0,			counterdam: 0,
		heatresist: 0, 		coldresist: 0, 		sparkresist: 0,
		pierceresist: 0, 	slashresist: 0, 	crushresist: 0,
		persuasion: 0, 		bartering: 0, 		thievery: 0, }

	// GET MAIN STATS
	traitfin['body'] = partyChars[char]['body'] + traitups['body'] + partytraitups['body'];
	traitfin['mind'] = partyChars[char]['mind'] + traitups['mind'] + partytraitups['mind'];
	traitfin['spirit'] = partyChars[char]['spirit'] + traitups['spirit'] + partytraitups['spirit'];
	traitfin['weapon'] = partyChars[char]['weapon'] + (traitfin['body'] / 2) + traitups['weapon'] + partytraitups['weapon'];

	// GET HEALTH / ENERGY / MYST VALUE
	traitfin['health'] = ((partyChars[char]['health'] + (traitfin['body'] * 2)) * 2) + traitups['health'] + partytraitups['health'];
	traitfin['energy'] = partyChars[char]['energy'] + ((traitfin['body'] + (traitfin['spirit'] * 2)) / 2) + traitups['energy'] + partytraitups['energy'];
	traitfin['myst'] = partyChars[char]['myst'] + (((traitfin['mind'] * 2) + traitfin['spirit']) / 2) + traitups['myst'] + partytraitups['myst'];

	// GET IF MYSTIC OR MYDOW
	if (affinityelem != '') { 
		for (var i=0; i<charAffinities.length; i++) {
			if (charAffinities[i]['id'] == affinityelem) {
				affinityelemname = charAffinities[i]['name'];
				affinityelemicon = charAffinities[i]['icon'];
			}
		}
		if (affinityelem == 'mydow') {
			traitfin['affinity'] = 0;
			traitfin['weapon'] += (partyChars[char]['affinity'] / 2);
		} else {
			affinityelemname += " Affinity";
			traitfin['affinity'] = partyChars[char]['affinity'] + (traitfin['mind'] / 2) + traitups['affinity'] + partytraitups['affinity'];
		}
	}

	// GET  ACCURACY/EVASION/COUNTER
	traitfin['accuracy'] = (partyChars[char]['accuracy'] + traitfin['mind']) + traitups['accuracy'] + partytraitups['accuracy'];
	traitfin['evasion'] = partyChars[char]['evasion'] + traitups['evasion'] + partytraitups['evasion'];
	traitfin['counter'] = partyChars[char]['counter'] + traitups['counter'] + partytraitups['counter'];
	traitfin['counterdam'] = (((traitfin['weapon'] + traitfin['mind']) * 1.3) / (traitfin['counter'])) * (traitfin['counter'] * 2);

	// GET RESISTANCES
	traitfin['heatresist'] = partyChars[char]['heatresist'] + traitups['heatresist'] + partytraitups['heatresist'];
	traitfin['coldresist'] = partyChars[char]['coldresist'] + traitups['coldresist'] + partytraitups['coldresist'];
	traitfin['sparkresist'] = partyChars[char]['sparkresist'] + traitups['sparkresist'] + partytraitups['sparkresist'];
	traitfin['pierceresist'] = partyChars[char]['pierceresist'] + traitups['pierceresist'] + partytraitups['pierceresist'];
	traitfin['slashresist'] = partyChars[char]['slashresist'] + traitups['slashresist'] + partytraitups['slashresist'];
	traitfin['crushresist'] = partyChars[char]['crushresist'] + traitups['crushresist'] + partytraitups['crushresist'];

	// GET SOCIAL
	traitfin['persuasion'] = partyChars[char]['persuasion'] + traitups['persuasion'] + partytraitups['persuasion'];
	traitfin['bartering'] = partyChars[char]['bartering'] + traitups['bartering'] + partytraitups['bartering'];
	traitfin['thievery'] = partyChars[char]['thievery'] + traitups['thievery'] + partytraitups['thievery'];

	traitfin = checkSpecialTraits(partyChars[char], traits, traitfin, traitups, partytraitups, affinityelem);
	traitfin = setStatLimits(traitfin);

	// ============================================================================================================
	// ============================================================================================================
	// GET WEAPS
	var weaps = partyChars[char]['weaps'],
		weapslist = "";
	if (weaps.length) {
		var weaponarts = charWeapons;
		for (var i=0; i<weaps.length; i++) weapslist += getArts(weaps, weaponarts);
	}

	// GET ARTS
	var arts = partyChars[char]['arts'],
		artlist = "";
	if (arts.length) {
		var affinityarts = charSkills;
		for (var i=0; i<arts.length; i++) artlist += getArts(arts, affinityarts);
	}

	function getArts(skills, skilllist) {
		var skill = skilllist[skills[i]];
		if (skill['weapontype']) var artaffinityicon = getWeaponIcon(skill['weapontype']);
		else var artaffinityicon = getAffinityIcon(skill['affinity']);

		var skilleff = "";
		// skilleff += '<img src="' + baseUrl + "/img/area/" + skill['area'] + '.png">';
		skilleff += '<div class="eff">';
		skilleff += '</i> ' + skill['type'] + ' | ' + skill['target']  + '</b><br>';
		if (skill['accuracy'] > 0) { skilleff += '<i class="ra ra-burning-eye"></i> <b>+' + skill['accuracy'] + '%</b> Accuracy<br>'; }
		if (skill['accuracy'] < 0) { skilleff += '<i class="ra ra-burning-eye"></i> <b>' + skill['accuracy'] + '%</b> Accuracy<br>'; }

		for (var j=0; j<skill['effects'].length; j++) {
			var skilleffect = skill['effects'][j];

			if (skilleffect['type'] == 'weapondamage' || skilleffect['type'] == 'affinitydamage') {
				var skilleffectcon = skilleffect['con'].split('|'),
					skilleffectconmain = skilleffectcon[0],
					skilleffectcontype = skilleffectcon[1];
				if (skilleffectconmain == 'physical') skilleffectconmain = '<span class="damagetype physical"></span> ';
				if (skilleffectconmain == 'mystical') skilleffectconmain = '<span class="damagetype mystical"></span> ';
				skilleff += '<i class="ra ra-sword"></i> <b>'; 

				if (skilleffect['type'] == 'weapondamage') skilleff += Math.floor((skilleffect['val'] * traitfin['weapon']));
				if (skilleffect['type'] == 'affinitydamage') skilleff += Math.floor((skilleffect['val'] * traitfin['affinity']));

				if (skill['hits'] > 1) skilleff += ' (' + skill['hits'] + 'x)';
				skilleff += '</b> ' + skilleffectconmain + skilleffectcontype + ' damage<br>';

			} else if (skilleffect['type'] == 'heal') {
				skilleff += '<i class="ra ra-health"></i> <b>'; 
				skilleff += 		Math.floor((skilleffect['val'] * traitfin['affinity']));
				if (skill['hits'] > 1) skilleff += ' (' + skill['hits'] + 'x)';
				if (skilleffect['con'] == 'self') skilleff += '</b> Heal to Self<br>';
				if (skilleffect['con'] == 'target') skilleff += '</b> Heal to Target<br>';

			} else if (skilleffect['type'] == 'dash') {
				skilleff += '<i class="ra ra-player-dodge"></i> <b>';
				skilleff += 		skilleffect['val'];
				skilleff += '</b> tile dash<br>';

			} else if (skilleffect['type'] == 'status') {
				var curStatus = charStatus[findStatusIndex(skilleffect['val'])];
				if (skilleffect['con'] == '100') skilleff += 'Inflicts <b>';
				else skilleff += '<b>' + skilleffect['con'] + '%</b> chance to <b>';
				skilleff += '<span class="buff tt' + curStatus['id'] + '">';
				skilleff += 		'<img src="' + getDataIcon(curStatus['icon']) + '"> ' + curStatus['name'];
				skilleff += '</span></b><br>';

			} else if (skilleffect['type'] == 'ground') {
				var curGround = charGround[findGroundIndex(skilleffect['val'])];
				skilleff += 'Applies <b>';
				skilleff += '<span class="buff tt' + curGround['id'] + '">';
				skilleff += 		'<img src="' + getDataIcon(curGround['icon']) + '"> ' + curGround['name'];
				skilleff += '</span></b> to Tile<br>';

			} else if (skilleffect['type'] == 'knockback') {
				skilleff += '<b><i class="ra ra-player-pain"></i> ' + skilleffect['val'] + '</b> knockback power';
		
			} else if (skilleffect['type'] == 'custom') {
				skilleff += '<span style="text-transform: initial">' + findReplaceableTags(skilleffect['val']) + '</span><br>';
			}
		}

		if (skill['req'] != '') { 
			var curStatus = charStatus[findStatusIndex(skill['req'])];
			skilleff += 'Required Status: <b>';
			skilleff += '<span class="buff tt' + curStatus['id'] + '">';
			skilleff += 	'<img src="' + getDataIcon(curStatus['icon']) + '"> ' + curStatus['name'];
			skilleff += '</span></b><br>';
		}

		skilleff += '</div>';

		var skillclass = char + "-" + skill['id'];
		var skilllist = "";
		skilllist += "<div class='attr ttskill " + skillclass + "' style='border-color: " +  getAffinityColor(skill['affinity']) + "'>";
		// skilllist += "<i class='" + artaffinityicon + "'></i> ";
		skilllist += "<div class='icon'>";
		skilllist += "<img src='" + getDataIcon(skill['articon']) + "'></div>";
		skilllist += skill['name'];
		skilllist += "<span class='val'>";
		if (skill['energycost']!=0) skilllist += "<span class='charbar energy'>" + skill['energycost'] + "</span> ";
		if (skill['mystcost']!=0) skilllist += "<span class='charbar myst'>" + skill['mystcost'] + "</span>";
		skilllist += "</span>";
		skilllist += 		"<div class='des'>";
		skilllist += 			"<div class='field'>";
		skilllist += 				generateField({
										width: 7, 
										height: 6,
										area: skill['area'],
										skillclass: skillclass,
									});
		skilllist += 			"</div>";
		skilllist += 			"<p class='det'>";
		skilllist += 				skill['des'];
		skilllist +=			"</p>";
		skilllist += 			skilleff;
		skilllist += 		"</div>";
		skilllist += "</div>"; 
		return skilllist;
	}

	// ============================================================================================================
	// ============================================================================================================
	// POST ORIGIN
	$('.origin', el).html(originlist);
	addTooltipCus('division', 'Division', 'From which of the four division of Mirrorplane the character was from for the majority of their life.');
	addTooltipCus('origin', 'Origin', 'To which class of the division they classify as. Often times meaningless but people can\'t get behind the idea of not having labels.');

	// POST STATS
	$('.health', el).html( "<span class='charbar full health'>" + Math.floor(traitfin['health']) + "</span>" ); 
		addTooltip('health'); calcBarWidth(char, 'health', Math.floor(traitfin['health']));
	$('.energy', el).html( "<span class='charbar full energy'>" + Math.floor(traitfin['energy']) + "</span>" ); 
		addTooltip('energy'); calcBarWidth(char, 'energy', Math.floor(traitfin['energy']));
	$('.myst', el).html( "<span class='charbar full myst'>" + Math.floor(traitfin['myst']) + "</span>" ); 
		addTooltip('myst'); calcBarWidth(char, 'myst', Math.floor(traitfin['myst']));
	$('.statbody', el).html( Math.floor(traitfin['body']) ); addTooltip('body');
	$('.statmind', el).html( Math.floor(traitfin['mind']) ); addTooltip('mind');
	$('.statspirit', el).html( Math.floor(traitfin['spirit']) ); addTooltip('spirit');

	// COUNTER STAT
	var weaponString = Math.floor(traitfin['weapon']);
	if (traitfin['counter'] != 0) weaponString += ' | ' + Math.floor(traitfin['counterdam']) + '%';
	$('.statweapon', el).html( weaponString ); addTooltip('weapon');

	// POST AFFINITY
	$('#stataffinityicon', el).removeClass();
	$('#stataffinityicon', el).addClass(affinityelemicon);
	$('.stataffinityelem', el).html(affinityelemname);
	$('.stataffinity', el).html( Math.floor(traitfin['affinity']) ); addTooltip('affinity');
	// AFFINITY COLOR
	// $('.ttaffinity', el).css('color',  getAffinityColor(affinityelem) );
	// $('#stataffinityicon', el).css('color',  getAffinityColor(affinityelem) );
	$('.ttaffinity', el).css('border-color',  getAffinityColor(affinityelem) );

	// POST ACCURACY/EVASION/COUNTER
	$('.stataccuracy', el).html( Math.floor(traitfin['accuracy']) + '%' ); addTooltip('accuracy');
	$('.statevasion', el).html( Math.floor(traitfin['evasion']) + '%' ); addTooltip('evasion');
	$('.statcounter', el).html( Math.floor(traitfin['counter']) + '%' ); addTooltip('counter');

	// POST RESISTANCES
	$('.statheatresist', el).html( Math.floor(traitfin['heatresist']) ); addTooltip('heatresist');
	$('.statcoldresist', el).html( Math.floor(traitfin['coldresist']) ); addTooltip('coldresist');
	$('.statsparkresist', el).html( Math.floor(traitfin['sparkresist']) ); addTooltip('sparkresist');
	$('.statpierceresist', el).html( Math.floor(traitfin['pierceresist']) ); addTooltip('pierceresist');
	$('.statslashresist', el).html( Math.floor(traitfin['slashresist']) ); addTooltip('slashresist');
	$('.statcrushresist', el).html( Math.floor(traitfin['crushresist']) ); addTooltip('crushresist');

	// POST SOCIAL
	$('.statpersuasion', el).html( Math.floor(traitfin['persuasion']) ); addTooltip('persuasion');
	$('.statbartering', el).html( Math.floor(traitfin['bartering']) ); addTooltip('bartering');
	$('.statthievery', el).html( Math.floor(traitfin['thievery']) ); addTooltip('thievery');

	// POST TRAITS
	$('.traits', el).html(traitlist);
	addTooltipCus('trait', 'Traits', 'People having traits can be good or bad depending on one\'s point of view, or whether they are an android or not.');

	// POST SKILLS
	$('.skills', el).html(weapslist + artlist);
	addTooltipCus('skill', 'Mystic Arts', 'Are the character\'s fighting arsenal. Some are better than others.');

	applyToggles();
	applyStatusTooltips();
	applyGroundTooltips();

	// TESTS
	if(char == 0) {
		// console.log(traitconBuffs);
		// console.log(traitups);	
		// console.log(traitfin);	
	}
}

// ============================================================================================================
// ============================================================================================================
function applyToggles() {
	// TOGGLE ATTR DES
	$('.char .attr').unbind('click');
	$('.char .attr').on('click', function() {
		$('.des', this).slideToggle('fast');

		if ($('.icon', this).hasClass('open')) $('.icon', this).removeClass('open');
		else $('.icon', this).addClass('open');
	});
}

// BAR WIDTH
// ============================================================================================================
// ============================================================================================================
function calcBarWidth(char, el, val) {
	var calcWidth;
	if (el == 'health') calcWidth = (val * 1.5) + 10;
	else calcWidth = (val * 3) + 10;
	$('#char' + char + ' .charbar.full.' + el).width( calcWidth );
}

// STAT LIMITS
// ============================================================================================================
// ============================================================================================================
function setStatLimits(traitfin) {
	var traits = traitfin;
	var hasmins = [ 'health', 'energy', 'myst', 'body', 'mind', 'spirit' ];
	var hassocialmax = [ 'persuasion', 'bartering', 'thievery' ];
	var haspercentmax = [ 'accuracy', 'evasion', 'counter' ];
	var has150max = [ 'counterdam' ];
	
	for (var i=0; i<Object.keys(traits).length; i++) {
		// MIN OF 1
		for (var j=0; j<hasmins.length; j++) if ( Math.floor(traits[hasmins[j]] ) < 1) traits[hasmins[j]] = 1;
		// SOCIAL MAX
		for (var j=0; j<hassocialmax.length; j++) if ( Math.floor(traits[hassocialmax[j]] ) > 10) traits[hassocialmax[j]] = 10;
		// PERCENT MAX
		for (var j=0; j<haspercentmax.length; j++) if ( Math.floor(traits[haspercentmax[j]] ) > 100) traits[haspercentmax[j]] = 100;
		// 150 MAX
		for (var j=0; j<has150max.length; j++) if ( Math.floor(traits[has150max[j]] ) > 150) traits[has150max[j]] = 150;
	}
	return traits;
}

// PARTY TRAITS
// ============================================================================================================
// ============================================================================================================
function applyPartyTraits() {
	// GET TRAIT LIST AND UPS
	var partytraitups = {
		health: 0, 			energy: 0, 			myst: 0,
		body: 0, 			mind: 0, 			spirit: 0,
		accuracy: 0, 		evasion: 0, 		counter: 0,
		affinity: 0, 		weapon: 0,			counterdam: 0,
		heatresist: 0, 		coldresist: 0, 		sparkresist: 0,
		pierceresist: 0, 	slashresist: 0, 	crushresist: 0,
		persuasion: 0, 		bartering: 0, 		thievery: 0, }

	for (var i=0; i<partyTraits.length; i++) {
		var chartraits = partyTraits[i]['traits'];
		for (var j=0; j<chartraits.length; j++) {
			var statid = chartraits[j]['stat'];
			partytraitups[statid] += chartraits[j]['value'];
		}
	}
	return partytraitups;
}

// RESET CHARACTERS
// ============================================================================================================
// ============================================================================================================
function resetChars() {
	initChars();
	for (var i=0; i<partyChars.length; i++) setChar(i);
}

// RANDOMIZER
// ============================================================================================================
// ============================================================================================================
function randChar(el, char) {

	partyChars[char]['blank'] = false;
	$('#char' + char).removeClass('blank');

	// REMOVE PARTY BUFFS RELATED TO TRAITS
	partyTraits[char]['traits'] = [];

	// RANDOM ORIGIN
	var division = Math.floor((Math.random() * cityDivisions.length) + 0);
	partyChars[char]['division'] = cityDivisions[division]['id'];

	var origin = Math.floor((Math.random() * cityDivisions[division]['origins'].length) + 0);
	var originid = cityDivisions[division]['origins'][origin]['id'];
	partyChars[char]['origin'] = originid;

	// RANDOM TRAITS
	var traits = [];
	var traitCount = 5;
	for (traitCount; traitCount>0; traitCount--) {
		if (!traits.length) traits.push(getUniqueTrait(true));
		else traits.push(getUniqueTrait(false));
	}
	partyChars[char]['traits'] = traits;

	function getUniqueTrait(isfirst) {
		var loopBreak;
		do {
			loopBreak = true;
			var rand = Math.floor((Math.random() * (charTraits.length)) + 0);
			if (charTraits[rand]['special'] != '') {
				if (charTraits[rand]['special'] != originid) loopBreak = false; }
			if (ifTraitUnique(rand)) loopBreak = false;
			if (!isfirst) for (var i=0; i<traits.length; i++) if (traits[i] == rand) loopBreak = false;
		} while (!loopBreak);
		return rand;	
	}

	// RAMDON AFFINITY
		partyChars[char]['affinityelem'] = charAffinities[getUniqueAffinity()]['id'];

	function getUniqueAffinity() {
		var loopBreak;
		do {
			loopBreak = true;
			var rand = Math.floor((Math.random() * (charAffinities.length)) + 0);
			if (charAffinities[rand]['special']) loopBreak = false;
		} while (!loopBreak);
		return rand;	
	}

	// RANDOM WEAP
	var weaparts = [];
	var weapartCount = 2, weapartType = "";
	for (weapartCount; weapartCount>0; weapartCount--) {
		if (!weaparts.length) weaparts.push(getUniqueWeaponArt(true));
		else weaparts.push(getUniqueWeaponArt(false));
	} partyChars[char]['weaps'] = weaparts;

	function getUniqueWeaponArt(isfirst) {
		var loopBreak;
		var weaponArts = charWeapons;
		do {
			loopBreak = true;
			var rand = Math.floor((Math.random() * weaponArts.length) + 0);
			if (isfirst) weapartType = weaponArts[rand]['weapontype'];
			if (!isfirst) {
				if (weaponArts[rand]['weapontype'] != weapartType) loopBreak = false;
				for (var i=0; i<weaparts.length; i++) if (weaparts[i] == rand) loopBreak = false;
			}
			if (weaponArts[rand]['unique']) loopBreak = false;
		} while (!loopBreak);
		return rand;
	}

	// RANDOM ARTS
	var arts = [];
	var artCount = 4;
	for (artCount; artCount>0; artCount--) {
		if (!arts.length) arts.push(getUniqueArt(true));
		else arts.push(getUniqueArt(false));
	} partyChars[char]['arts'] = arts;

	function getUniqueArt(isfirst) {
		var loopBreak;
		var affinityArts = charSkills;
		do {
			loopBreak = true;
			var rand = Math.floor((Math.random() * affinityArts.length) + 0);
			if (partyChars[char]['affinityelem'] != 'mydow') {
				if (affinityArts[rand]['affinity'] != partyChars[char]['affinityelem'] ) {
					loopBreak = false; 
					var otherArtRand = Math.floor((Math.random() * 10) + 0);
					if (affinityArts[rand]['affinity'] == 'mydow' && otherArtRand < 2) loopBreak = true;
					if (affinityArts[rand]['affinity'] == 'myst' && otherArtRand < 2) loopBreak = true;
				}
			} else {
				if (affinityArts[rand]['affinity'] != 'mydow' ) loopBreak = false; 
			}
			if (affinityArts[rand]['unique']) loopBreak = false;
			if (!isfirst) for (var i=0; i<arts.length; i++) if (arts[i] == rand) loopBreak = false;
		} while (!loopBreak);
		return rand;	
	}

	// SET CHAR
	for (var i=0; i<partyChars.length; i++) setChar(i);
	for (var i=0; i<partyChars.length; i++) setChar(i);
	// $(el).fadeOut();

	$('#char' + char + '.char').addClass('in-rand');
	setTimeout( function() {
		$('#char' + char + '.char').removeClass('in-rand');
	},100);
}

function randPortrait(char) {
	// RANDOM PORTRAIT
	var randimg = Math.floor((Math.random() * portraits.length) + 0);
	partyChars[char]['portrait'] = randimg;
	$('#char' + char + ' .portrait').css('background-image', 'url(' + portraits[randimg] + ')');
	return randimg;
}

// COPIERS
// ============================================================================================================
// ============================================================================================================
function copyChar(el, char) {
	var iframecontent = document.getElementById('main-frame').contentWindow['partyChars'];
	if (iframecontent) partyChars[char] = iframecontent[0];

	for (var i=0; i<partyChars.length; i++) setChar(i);
	for (var i=0; i<partyChars.length; i++) setChar(i);

	$('#char' + char + '.char').addClass('in-rand');
	setTimeout( function() {
		$('#char' + char + '.char').removeClass('in-rand');
	},100);
}

// SAVE PARTY
// ============================================================================================================
// ============================================================================================================
function partySave() {
    var parties = partyChars;

	$.cookie('parties', JSON.stringify(parties));
	alert('save success!');
}

// LOAD PARTY
// ============================================================================================================
// ============================================================================================================
function partyLoad() {
    var parties = JSON.parse($.cookie('parties'));
    partyChars = parties;   

	// SET CHAR
	for (var i=0; i<partyChars.length; i++) setChar(i);
	for (var i=0; i<partyChars.length; i++) setChar(i);
	alert('save loaded!');
}