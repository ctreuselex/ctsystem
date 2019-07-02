
// AFFINITIES
// ============================================================================================================
// ============================================================================================================
	var specialAffinities = 6;
	function getAffinityIcon(id) {
		var icon = "";
		for (var i=0; i<charAffinities.length; i++) if (charAffinities[i]['id'] == id) icon = charAffinities[i]['icon'];
		return icon;
	}

	function getAffinityColor(id) {
		var color = "";
		for (var i=0; i<charAffinities.length; i++) if (charAffinities[i]['id'] == id) color = charAffinities[i]['color'];
		return color;
	}


// TRAITS
// ============================================================================================================
// ============================================================================================================
	function getTraitName(id) {
		var name = "";
		for (var i=0; i<charTraits.length; i++) if (charTraits[i]['id'] == id) name = charTraits[i]['name'];
		return name;
	}

	// CHECK FOR SPECIAL TRAITS
	function checkSpecialTraits(char, traits, traitfin, traitups, partytraitups, affinity) {
		if (checkCharTraits('bodybuilder', traits)) { // +50% health from body (bodybuilder + athletic)
			if (checkCharTraits('athletic', traits)) { 
				traitfin['health'] = ((char['health'] + (traitfin['body'] * 3)) * 2) + traitups['health'] + partytraitups['health'];
			}
		}
		if (checkCharTraits('urban-legend', traits)) { // thievery to 10 (bodybuilder + athletic)
			if (checkCharTraits('street-smart', traits)) { 
				traitfin['thievery'] = 10;
			}
		}
		if (checkCharTraits('weapon-enthusiast', traits)) { // 50% more weapon effectiveness (weapon enth + mydow)
			if (affinity == 'mydow') { 
				traitfin['weapon'] += traitfin['weapon'] * 0.30;
			}
		}
		if (checkCharTraits('art-attacker', traits)) { // +100% affinity from mind (artattacker + artistic)
			if (checkCharTraits('artistic', traits)) { 
				traitfin['affinity'] = char['affinity'] + traitfin['mind'] + traitups['affinity'] + partytraitups['affinity'];
			}
		}
		if (checkCharTraits('art-defender', traits)) { // persuasion to 10 (intimidating + perpetual-frowner)
			if (checkCharTraits('artistic', traits)) { 
				traitfin['counterdam'] = (((traitfin['weapon'] + traitfin['mind']) * 1.3) / (traitfin['counter'])) * (traitfin['counter'] * 3);
			}
		}
		if (checkCharTraits('intimidating', traits)) { // persuasion to 10 (intimidating + perpetual-frowner)
			if (checkCharTraits('perpetual-frowner', traits)) { 
				traitfin['persuasion'] = 10;
			}
		}

		return traitfin;
	}


	// GET TRAIT INDEX
	function getTraitIndex(id) {
	    for (var i=0; i<charTraits.length; i++) if (charTraits[i]['id'] == id) return i;
	}

	// GET IF UNIQUE
	function ifTraitUnique(index) {
		var trait = charTraits[index];
		if (trait['unique']) return true;
		else false;
	}

	// CHECK TRAITS
	function checkCharTraits(id, traits) {
		var traitIndex = 0;
		for (var i=0; i<charTraits.length; i++) if (charTraits[i]['id'] == id) traitIndex = i;
		for (var i=0; i<traits.length; i++) if (traits[i] == traitIndex) return true;
		return false;
	}

	// CHECK PARTY TRAITS
	function checkPartyCharTraits(id, char) {
		var hasTrait = false;
		for (var i=0; i<partyChars.length; i++) {
			if (i != char) {
				hastrait = checkCharTraits(id, partyChars[i]['traits']);
				if (hastrait) return true;
			}
		}
		return false;
	}

	// PRINT SPECIAL
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


// WEAPONS
// ============================================================================================================
// ============================================================================================================
	function getWeapIndex(id) {
	    for (var i=0; i<charWeapons.length; i++) if (charWeapons[i]['id'] == id) return i;
	}

	function getWeaponIcon(id) {
		if (id == 'tauroscene') return 'ra ra-taurus';

		if (id == 'archer') return 'ra ra-broadhead-arrow';
		if (id == 'assassin') return 'ra ra-crossed-swords';
		if (id == 'dragoon') return 'ra ra-spear-head';
		if (id == 'mystblade') return 'ra ra-spinning-sword';
		if (id == 'mystslinger') return 'ra ra-duel';
		if (id == 'smith') return 'ra ra-large-hammer';
		if (id == 'warrior') return 'ra ra-croc-sword';
	}


// SKILLS
// ============================================================================================================
// ============================================================================================================
	// GET ART INDEX
	function getArtIndex(id) {
	    for (var i=0; i<charSkills.length; i++) if (charSkills[i]['id'] == id) return i;
	}


// STATUS
// ============================================================================================================
// ============================================================================================================
	function applyStatusTooltips() {
		for (var i=0; i<charStatus.length; i++) {
			var status = charStatus[i];

			var stats = "", stack = "";
			for (var j=0; j<status['stats'].length; j++) {
				var stat = status['stats'][j];

				if (!status['stats'][j]['onstack']) {
					stats += getTooltipStat(stat);
				} else {
					stack += getTooltipStat(stat);
				}
			}

			if (status['removes']) {
				var	splitRe = status['removes'].split('|'), 
					removes = "";
				for (var j=0; j<splitRe.length; j++) {
					removes += "<br>|" + splitRe[j] + "|";
				}
			}

			var fulldes = status['des'] + "<hr>Initial<br>" + stats;
			if (status['stack'] > 1) fulldes += "<hr>On Stack <b>(Max: " + status['stack'] + ")</b><br>" + stack;
			if (status['removes']) fulldes += "<hr>Removes: " + removes;
			addTooltipCus(status['id'], status['name'], fulldes);
		}
	}

	function findStatusIndex(id) {
		for (var i=0; i<charStatus.length; i++) {
			if (charStatus[i]['id'] == id) return i;
		}
	}


// GROUND
// ============================================================================================================
// ============================================================================================================
	function applyGroundTooltips() {
		for (var i=0; i<charGround.length; i++) {
			var ground = charGround[i];

			var stats = "";
			for (var j=0; j<ground['stats'].length; j++) {
				var stat = ground['stats'][j];

				stats += getTooltipStat(stat);
			}

			var other = "";
			if (ground['affecttiles']) other += '<b>Affects Nearby Tiles</b><br>';
			if (ground['oncontact']) other += '<b>Disappears on contact</b><br>';
			if (ground['blocksproj']) other += '<b>Blocks projectiles</b><br>';
			if (ground['impassable']) other += '<b>Impassable</b><br>';

			var fulldes = ground['des'] + "<hr>" + stats;
			if (other != "") fulldes += "<hr>" + other;
			addTooltipCus(ground['id'], ground['name'], fulldes);
		}
	}

	function findGroundIndex(id) {
		for (var i=0; i<charGround.length; i++) {
			if (charGround[i]['id'] == id) return i;
		}
	}


// OTHER
// ============================================================================================================
// ============================================================================================================
	function getDataIcon(icon) {
		var articonsplit = icon.split('|');
		if (articonsplit[0] == "viscious-speed") articon =  baseUrl + "/img/icons/" + articonsplit[0] + "/abstract/svg/ffffff/transparent/" + articonsplit[1] + ".svg";
		else articon =  baseUrl + "/img/icons/" + articonsplit[0] + "/originals/svg/ffffff/transparent/" + articonsplit[1] + ".svg";
		return articon;
	}

	function getTooltipStat(stat) {
		var string = "";
		var stringarray = stat['stat'].split('|');

		if (stringarray[0] == 'turndamage' || stringarray[0] == 'contactdamage') {
			string += 'Deals <b>' + stat['value'];
			string += '</b> |' + stringarray[1] + '|';
			if (stringarray[2]) string += ' ' + stringarray[2];

			if (stringarray[0] == 'turndamage')  string += ' damage per turn.<br>';
			if (stringarray[0] == 'contactdamage')  string += ' damage on contact.<br>';

		} else if (stringarray[0] == 'turnheal' || stringarray[0] == 'contactheal') {
			string += 'Heals <b>' + stat['value'];
			string += '</b> health';

			if (stringarray[0] == 'turnheal')  string += ' per turn.<br>';
			if (stringarray[0] == 'contactheal')  string += ' on contact.<br>';

		} else if (stringarray[0] == 'status') {
			var curStatus = charStatus[findStatusIndex(stat['value'])];
			string += '<div class="buff">';
			string += 		'Inflicts <b>';
			string += 		'<img src="' + getDataIcon(curStatus['icon']) + '"> ' + curStatus['name'];
			string += '</b></div>';

		} else if (stringarray[0] == 'prevent') {
			var curStatus = charStatus[findStatusIndex(stat['value'])];
			string += '<div class="buff">';
			string += 		'Prevented by <b>';
			string += 		'<img src="' + getDataIcon(curStatus['icon']) + '"> ' + curStatus['name'];
			string += '</b></div>';

		} else if (stringarray[0] == 'custom') {
			string += stat['value'] + "<br>";

		} else {
			var statname = getStatName(stringarray[0]);
			var statvalue = stat['value'];
			if (statvalue > 0) statvalue = "+" + statvalue;
			string += "<div class='stat'>" + statvalue + " " + statname + "</div>";
		}

		return string;
	}

	
// TAGS 
// ============================================================================================================
// ============================================================================================================
	function findReplaceableTags(string) {
		var splitDesc = string.split('|'),
			fixDesc = "";

		for (var i=0; i<splitDesc.length; i++) {
			if (splitDesc[i] == 'physical') splitDesc[i] = '<span class="damagetype physical"></span>';
			else if (splitDesc[i] == 'mystical') splitDesc[i] = '<span class="damagetype mystical"></span>';
			else {
				var curStatus = charStatus[findStatusIndex(splitDesc[i])];

				if (curStatus) {
					splitDesc[i] =  '<span class="buff tt' + curStatus['id'] + '"><b>';
					splitDesc[i] += 	'<img src="' + getDataIcon(curStatus['icon']) + '"> ' + curStatus['name'];
					splitDesc[i] += '</b></span>';
				}
			}
			fixDesc += splitDesc[i];
		}

		return fixDesc;
	}