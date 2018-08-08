
var constantsStat = {
		health: 0, 			energy: 0, 			myst: 0,
		body: 5, 			mind: 5, 			spirit: 5,
		affinity: 1, 		weapon: 1,
		heatresist: 0, 		coldresist: 0, 		sparkresist: 0,
		pierceresist: 0, 	slashresist: 0, 	crushresist: 0,
		persuasion: 0, 		bartering: 0, 		thievery: 0,
	}

var partyChars = [];
var partyTraits = [];

function initChars() {
	partyChars = [];
	partyTraits = [];

	for (var i=0; i<3; i++) {
		partyChars.push({
			blank:          true,
			name: 			'',
			division: 		'',
			origin: 		'',
			mhealth: 		constantsStat['health'], 		chealth: 	constantsStat['health'],
			menergy: 		constantsStat['energy'], 		cenergy: 	constantsStat['energy'],
			mmyst: 			constantsStat['myst'], 			cmyst: 		constantsStat['myst'],
			body: 			constantsStat['body'], 
			mind: 			constantsStat['mind'], 
			spirit: 		constantsStat['spirit'],
			affinity: 		constantsStat['affinity'],  	affinityelem: 'mydow',
			weapon: 		constantsStat['weapon'],
			heatresist: 	constantsStat['heatresist'], 	coldresist: constantsStat['coldresist'], 		sparkresist: constantsStat['sparkresist'],
			pierceresist: 	constantsStat['pierceresist'], 	slashresist: constantsStat['slashresist'], 		crushresist: constantsStat['crushresist'],
			persuasion: 	constantsStat['persuasion'], 	bartering: constantsStat['bartering'], 			thievery: constantsStat['thievery'],
			traits: [], buffs: [], }
			);
		partyTraits.push({
			traits: [],
		});
	}
}

// TEST
// partyChars[0]['traits'].push(18);
// partyChars[0]['traits'].push(6);
// partyChars[1]['traits'].push(6);

// SAVE NAME
/*===================================================================*/
function saveName(el, char) {
	partyChars[char]['name'] = $(el).val(); 
}

// SET CHARCTERS
/*===================================================================*/
function setChar(char) {
	var el = $('#char' + char);

	if (partyChars[char]['blank']) $(el).addClass('blank');

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
				originlist += "<div class='attr'> Division: ";
				originlist += "<b>" + cityDivisions[i]['name'] + "</b>";
				originlist += "</div>";
				// GET ORIGIN NAME
				for (var j=0; j<cityDivisions[i]['origins'].length; j++) {
					if (cityDivisions[i]['origins'][j]['id'] == origin) {
						originname = cityDivisions[i]['origins'][j]['name'];
						originlist += "<div class='attr'> Origin: ";
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

	// ANIMATE DIAMONDS
	$('.diamonds', el).fadeOut("fast", function() {
		$('.diamonds', el).html();
		$('.diamonds', el).show();
		$('.diamonds', el).html("<div id='dbchar" + char + "' class='diamond block'></div><div id='dbcharback" + char + "' class='diamond block'></div>");
		diamondDes('#dbchar' + char, {
			top: 20,
			left: 'center',
			size: 400,
			color: divisionmcolor,
			glow: true,
			animation: 'diamondGrow 0.3s',
			delay: 500 });
		diamondDes('#dbcharback' + char, {
			top: -90,
			left: 'center',
			size: 800,
			color: divisionscolor,
			glow: true,
			animation: 'diamondGrow 0.3s',
			delay: 250 });	
	});

	// GET TRAITS
	var traits = [],
		traitlist = "";
	if (partyChars[char]['traits'].length != 0) {
		traits = partyChars[char]['traits'];
	} else {
		traitlist += "<div class='attr'>";
		traitlist += "There's nothing here..."
		traitlist += "</div>";
	}

	// GET AFFINITY
	var affinity = 0;
		affinityelem = partyChars[char]['affinityelem'],
		affinityelemname = '', affinityelemicon = '';

	// GET TRAIT LIST AND UPS
	var traitups = {
		health: 0, 			energy: 0, 			myst: 0,
		body: 0, 			mind: 0, 			spirit: 0,
		affinity: 0, 		weapon: 0,
		heatresist: 0, 		coldresist: 0, 		sparkresist: 0,
		pierceresist: 0, 	slashresist: 0, 	crushresist: 0,
		persuasion: 0, 		bartering: 0, 		thievery: 0,
	}
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
					statname = findStatName(traitstat['stat']),
					statvalue =  traitstat['value'],
					stateffectiveness = "", stateffectivenesscolor = "";

				if (statvalue > 0) statvalue = "+" + statvalue;
				if (statid == 'affinity') statname = traitstat['con'] + " " + statname;

				// TRAITS APPLIES TO SELF
				if (traitstat['target'] == 'self') {

					// TRAITS WITH CONDITIONS
					if (traitstat['contype'] != '') {
						var statApplies = false;

						// SAVE AFFINITY BASED CONS
						if (traitstat['contype'] == 'affinity') {
							var contraitname = traitstat['con'];

							if (traitstat['con'] == affinityelem) {
								stateffectivenesscolor = '';
								traiteffectiveness++;
								statApplies = true;
							} else { 
								stateffectivenesscolor = 'inactive';
								stateffectiveness = ' (Incompatible Affinity)'; 
								traiteffectiveness--;
								statApplies = false;
							}

							// SAVE TRAIT BASED CONS
						} else if (traitstat['contype'] == 'trait') {
							var contraitname = traitstat['con'],
								contraitindex = '';
								hasTrait = false;

							for (var k=0; k<charTraits.length; k++) {
								if (charTraits[k]['id'] == contraitname) { 
									contraitname = charTraits[k]['name'];  
									contraitindex = k; }
							}
							for (var k=0; k<traits.length; k++) if (traits[k] == contraitindex) hasTrait = true;
							if (hasTrait) {
								stateffectivenesscolor = '';
								stateffectiveness = ' (' + contraitname + ')';
								traiteffectiveness++;
								statApplies = true;
							} else { 
								stateffectivenesscolor = 'inactive';
								stateffectiveness = ' (requires: ' + contraitname + ')';
								traiteffectiveness--;
								statApplies = false;
							}

							// SAVE STATUS BASED CONS
						} else if (traitstat['contype'] == 'status') {
							var contraitname = traitstat['con'];

							if (traits['con'] == affinityelem) {
								stateffectiveness = ' (' + contraitname + ')';
								traiteffectiveness++;
								statApplies = true;
							} else { 
								stateffectivenesscolor = 'inactive';
								stateffectiveness = ' (while ' + contraitname + ')';
								traiteffectiveness--;
								statApplies = false;
							}
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
						stateffectiveness = '';
						traitups[statid] += traitstat['value'];
					}
				} else if (traitstat['target'] == 'party') {

					// TRAITS WITH CONDITIONS (PARTY)
					if (traitstat['contype'] != '') {

					// OTHERWISE ADD TRAIT STATS
					} else {
						stateffectivenesscolor = '';
						stateffectiveness = ' to party';
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
				traitstatlist += 	statvalue + " " + statname; 
				traitstatlist += 	stateffectiveness;
				traitstatlist += "</div>";
			}

			var traiteffectivenessclass = "";
			if (traiteffectiveness > 0) traiteffectivenessclass = "compatible";
			else if (traiteffectiveness < 0) traiteffectivenessclass = "incompatible";

			traitlist += "<div class='attr " + traiteffectivenessclass + "'>";
			traitlist += 	"<i class='" + trait['icon'] + "'></i> ";
			traitlist += 	trait['name'];
			if (trait['special']!='') traitlist += 	" (" + originname + ")";
			traitlist += 	"<div class='des'>";
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

	// GET MAIN STATS
	var body = partyChars[char]['body'] + traitups['body'] + partytraitups['body'],
		mind = partyChars[char]['mind'] + traitups['mind'] + partytraitups['mind'],
		spirit = partyChars[char]['spirit'] + traitups['spirit'] + partytraitups['spirit'];
		weapon = partyChars[char]['weapon'] + Math.floor(body / 2) + traitups['weapon'] + partytraitups['weapon'];

	// GET HEALTH / ENERGY / MYST VALUE
	var mhealth = partyChars[char]['mhealth'] + Math.floor(body * 2) + traitups['health'] + partytraitups['health'],
		menergy = partyChars[char]['menergy'] + Math.floor(((body + (spirit * 2)) / 2)) + traitups['energy'] + partytraitups['energy'],
		mmyst = partyChars[char]['mmyst'] + Math.floor((((mind * 2) + spirit) / 2)) + traitups['myst'] + partytraitups['myst'];

	// GET IF MYSTIC OR MYDOW
	if (affinityelem != '') { 
		for (var i=0; i<mymaAffinities.length; i++) {
			if (mymaAffinities[i]['id'] == affinityelem) {
				affinityelemname = mymaAffinities[i]['name'];
				affinityelemicon = mymaAffinities[i]['icon'];
			}
		}
		if (affinityelem == 'mydow') {
			affinityelemname += " (+Weapon Effectiveness)";
			affinity = Math.floor((body / 2));
		} else {
			affinityelemname += " Affinity";
			affinity = partyChars[char]['affinity'] + Math.floor((mind / 2)) + traitups['affinity'] + partytraitups['affinity'];
		}
	}

	// GET RESISTANCES
	var heatresist = partyChars[char]['heatresist'] + traitups['heatresist'] + partytraitups['heatresist'],
		coldresist = partyChars[char]['coldresist'] + traitups['coldresist'] + partytraitups['coldresist'],
		sparkresist = partyChars[char]['sparkresist'] + traitups['sparkresist'] + partytraitups['sparkresist'],
		pierceresist = partyChars[char]['pierceresist'] + traitups['pierceresist'] + partytraitups['pierceresist'],
		slashresist = partyChars[char]['slashresist'] + traitups['slashresist'] + partytraitups['slashresist'],
		crushresist = partyChars[char]['crushresist'] + traitups['crushresist'] + partytraitups['crushresist'];

	// GET SOCIAL
	var persuasion = partyChars[char]['persuasion'] + traitups['persuasion'] + partytraitups['persuasion'],
		bartering = partyChars[char]['bartering'] + traitups['bartering'] + partytraitups['bartering'],
		thievery = partyChars[char]['thievery'] + traitups['thievery'] + partytraitups['thievery'];

	// POST ORIGIN
	$('.origin', el).html(originlist);

	// POST STATS
	$('.chealth', el).html( mhealth + '/' ); $('.mhealth', el).html(mhealth);
	$('.cenergy', el).html( menergy + '/' ); $('.menergy', el).html(menergy);
	$('.cmyst', el).html( mmyst  + '/'  ); $('.mmyst', el).html(mmyst);
	$('.statbody', el).html( body );
	$('.statmind', el).html( mind );
	$('.statspirit', el).html( spirit );
	$('.statweapon', el).html( weapon );

	// POST AFFINITY
	$('#stataffinityicon', el).removeClass();
	$('#stataffinityicon', el).addClass('ra'); $('#stataffinityicon', el).addClass(affinityelemicon);
	$('.stataffinityelem', el).html(affinityelemname);
	$('.stataffinity', el).html(affinity);

	// POST RESISTANCES
	$('.statheatresist', el).html(heatresist); 
	$('.statcoldresist', el).html(coldresist); 
	$('.statsprkresist', el).html(sparkresist); 
	$('.statpierceresist', el).html(pierceresist);
	$('.statslashresist', el).html(slashresist);
	$('.statcrushresist', el).html(crushresist);

	// POST SOCIAL
	$('.statpersuasion', el).html(persuasion); 
	$('.statbartering', el).html(bartering); 
	$('.statthievery', el).html(thievery); 

	// POST TRAITS
	$('.traits', el).html(traitlist);

	applyToggles();
	// console.log(traitups);
}

function applyToggles() {
	// TOGGLE ATTR DES
	$('.char .attr').unbind('click');
	$('.char .attr').on('click', function() {
		$('.des', this).slideToggle('fast');
	});
}

// PARTY TRAITS
// ============================================================================================================
function applyPartyTraits() {

	// GET TRAIT LIST AND UPS
	var partytraitups = {
		health: 0, 			energy: 0, 			myst: 0,
		body: 0, 			mind: 0, 			spirit: 0,
		affinity: 0, 		weapon: 0,
		heatresist: 0, 		coldresist: 0, 		sparkresist: 0,
		pierceresist: 0, 	slashresist: 0, 	crushresist: 0,
		persuasion: 0, 		bartering: 0, 		thievery: 0,
	}

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
function resetChars() {
	initChars();
	for (var i=0; i<partyChars.length; i++) setChar(i);
}

// RANDOMIZER
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
			var rand = Math.floor((Math.random() * charTraits.length) + 0);
			if (charTraits[rand]['special'] != '') {
				if (charTraits[rand]['special'] != originid) loopBreak = false; }
			if (!isfirst) for (var i=0; i<traits.length; i++) if (traits[i] == rand) loopBreak = false;
		} while (!loopBreak);
		return rand;	
	}

	// RAMDON AFFINITY
	var affinity = Math.floor((Math.random() * mymaAffinities.length) + 0);
	partyChars[char]['affinityelem'] = mymaAffinities[affinity]['id'];

	// SET CHAR
	for (var i=0; i<partyChars.length; i++) setChar(i);
	for (var i=0; i<partyChars.length; i++) setChar(i);
	// $(el).fadeOut();
}