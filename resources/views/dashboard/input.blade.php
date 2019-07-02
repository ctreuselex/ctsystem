<?php
	$artTypes = array(
		array('id'=>'melee','name'=>'Melee',),
		array('id'=>'dash','name'=>'Dash',),
		array('id'=>'projectile','name'=>'Projectile',),
		array('id'=>'burst','name'=>'Burst',),
	);

	$artAreas = array(
		array('id'=>'instant-self','name'=>'Instant | Self',),
		array('id'=>'instant-shortring','name'=>'Instant | Short Ring',),
		array('id'=>'instant-longring','name'=>'Instant | Long Ring',),
		array('id'=>'instant-shortcircle','name'=>'Instant | Short Circle',),
		array('id'=>'instant-longcircle','name'=>'Instant | Long Circle',),
		array('id'=>'instant-widecircle','name'=>'Instant | Wide Circle',),
		// array('id'=>'instant-all','name'=>'Instant | All',),

		array('id'=>'melee-dot','name'=>'Melee | Dot',),
		array('id'=>'melee-cone','name'=>'Melee | Cone',),
		array('id'=>'melee-shortcrescent','name'=>'Melee | Short Crescent',),
		array('id'=>'melee-longcrescent','name'=>'Melee | Long Crescent',),
		array('id'=>'melee-shortpierce','name'=>'Melee | Short Pierce',),
		array('id'=>'melee-longpierce','name'=>'Melee | Long Pierce',),
		array('id'=>'melee-widepierce','name'=>'Melee | Wide Pierce',),

		array('id'=>'ranged-dot','name'=>'Ranged | Dot',),
		array('id'=>'ranged-shortring','name'=>'Ranged | Short Ring',),
		array('id'=>'ranged-shortcircle','name'=>'Ranged | Short Circle',),
	);

	$artTargets = array(
		array('id'=>'self','name'=>'Self',),
		array('id'=>'allies','name'=>'Allies',),
		array('id'=>'enemies','name'=>'Enemies',),
		array('id'=>'all','name'=>'All',),
		array('id'=>'ground','name'=>'Ground',),
	);

	$artStatusClass = array(
		array('id'=>'buff','name'=>'Buff',),
		array('id'=>'debuff','name'=>'Debuff',),
		array('id'=>'disable','name'=>'Disable',),
		array('id'=>'other','name'=>'Other',),
	);
?>

<div class="input-div">

	<div class="box mir-timeline">
		<input type="text" id="date" placeholder="Date">
		<input type="text" id="name" placeholder="Name">
		<input type="text" id="main" placeholder="Main">
		<textarea id="cont" placeholder=""></textarea>
		<div class="table"></div>
		<div class="btn" onclick="saveData('timeline')">Save</div>
		<div class="btn" onclick="deleteData('timeline', 'name')">Delete</div>
	</div>

	<div class="box mir-chars">
		<input type="text" id="name" placeholder="Name">
		<input type="text" id="sur" placeholder="Surname">
		<input type="text" id="icon" placeholder="Icon">
		<textarea id="tags" placeholder="Tags"></textarea> 
		<input class="half" type="text" value="Main Color" disabled><input class="half" type="text" id="color">
		<input class="half" type="text" value="Sub Color" disabled><input class="half" type="text" id="subcolor">
		<input class="half" type="text" value="Show" disabled><input class="half" type="checkbox" id="show">
		<div class="table"></div>
		<div class="btn" onclick="saveData('chars')">Save</div>
		<div class="btn" onclick="deleteData('chars', 'name')">Delete</div>
	</div>

	<!-- AFFINITIES -->
	<!-- ============================================================================================================ -->
	<div class="box char-affinities">
		<input type="text" id="id" placeholder="ID">
		<input type="text" id="name" placeholder="Name">
		<input type="text" id="icon" placeholder="Icon">
		<input type="text" id="color" placeholder="color">
		<textarea id="des" placeholder="Description"></textarea> 
		<input class="half" type="text" value="Special Affinity" disabled><input class="half" type="checkbox" id="special">
		<div class="table"></div>
		<div class="btn" onclick="saveData('affinities')">Save</div>
		<div class="btn" onclick="deleteData('affinities', 'id')">Delete</div>
	</div>


	<!-- TRAITS -->
	<!-- ============================================================================================================ -->
	<div class="box char-traits">
		<input type="text" id="id" placeholder="ID">
		<input type="text" id="name" placeholder="Name">
		<input type="text" id="icon" placeholder="Icon">
		<textarea id="des" placeholder="Description"></textarea> 
		<input class="half" type="text" value="Exclusive to (Origin)" disabled><input class="half" type="text" id="special">
		<input class="half" type="text" value="Unique" disabled><input class="half" type="checkbox" id="unique">
		<div class="table"></div>
		<div class="btn" onclick="addStat('traits', null)">Add Stat</div>
		<div class="btn" onclick="saveData('traits')">Save</div>
		<div class="btn" onclick="deleteData('traits', 'id')">Delete</div>
	</div>

	<!-- WEAPONS -->
	<!-- ============================================================================================================ -->
	<div class="box char-weapons">
		<input type="text" id="id" placeholder="ID">
		<input type="text" id="name" placeholder="Name">
		<input class="half" type="text" value="Weapon Class" disabled><input class="half" type="text" id="weapontype">
		<input class="half" type="text" value="Art Icon" disabled><input class="half" type="text" id="articon">
		<textarea id="des" placeholder="Description"></textarea> 
		<input class="half" type="text" value="Energy Cost" disabled><input class="half" type="number" id="energycost" value="0">
		<input class="half" type="text" value="Myst Cost" disabled><input class="half" type="number" id="mystcost" value="0">
		<input class="half" type="text" value="Requires Status" disabled><input class="half" type="text" id="req" placeholder="none">
		<input class="half" type="text" value="No of Hits" disabled><input class="half" type="number" id="hits" value="1" min="1">
		<input class="half" type="text" value="Base Accuracy" disabled><input class="half" type="number" id="accuracy" value="0">
		<input class="half" type="text" value="Art Type" disabled>
			<select class="half" id="type">	
				<?php foreach ($artTypes as $val) : ?>
					<option value="<?=$val['id']?>"><?=$val['name']?></option>	
				<?php endforeach ?>
			</select>
		<input class="half" type="text" value="Area of Effect" disabled>
			<select class="half" id="area">		
				<?php foreach ($artAreas as $val) : ?>
					<option value="<?=$val['id']?>"><?=$val['name']?></option>	
				<?php endforeach ?>
			</select>
		<input class="half" type="text" value="Targets Affected" disabled>
			<select class="half" id="target">	
				<?php foreach ($artTargets as $val) : ?>
					<option value="<?=$val['id']?>"><?=$val['name']?></option>	
				<?php endforeach ?>
			</select>
		<input class="half" type="text" value="Unique" disabled><input class="half" type="checkbox" id="unique">
		<div class="table"></div>
		<div class="btn" onclick="addStat('weapons', null)">Add Stat</div>
		<div class="btn" onclick="saveData('weapons')">Save</div>
		<div class="btn" onclick="deleteData('weapons', 'id')">Delete</div>
	</div>

	<!-- SKILLS -->
	<!-- ============================================================================================================ -->
	<div class="box char-skills">
		<input type="text" id="id" placeholder="ID">
		<input type="text" id="name" placeholder="Name">
		<input class="half" type="text" value="Affinity" disabled><input class="half" type="text" id="affinity">
		<input class="half" type="text" value="Art Icon" disabled><input class="half" type="text" id="articon">
		<textarea id="des" placeholder="Description"></textarea> 
		<input class="half" type="text" value="Energy Cost" disabled><input class="half" type="number" id="energycost" value="0">
		<input class="half" type="text" value="Myst Cost" disabled><input class="half" type="number" id="mystcost" value="0">
		<input class="half" type="text" value="Requires Status" disabled><input class="half" type="text" id="req" placeholder="none">
		<input class="half" type="text" value="No of Hits" disabled><input class="half" type="number" id="hits" value="1" min="1">
		<input class="half" type="text" value="Base Accuracy" disabled><input class="half" type="number" id="accuracy" value="0">
		<input class="half" type="text" value="Art Type" disabled>
			<select class="half" id="type">	
				<?php foreach ($artTypes as $val) : ?>
					<option value="<?=$val['id']?>"><?=$val['name']?></option>	
				<?php endforeach ?>
			</select>
		<input class="half" type="text" value="Area of Effect" disabled>
			<select class="half" id="area">			
				<?php foreach ($artAreas as $val) : ?>
					<option value="<?=$val['id']?>"><?=$val['name']?></option>	
				<?php endforeach ?>	
			</select>
		<input class="half" type="text" value="Targets Affected" disabled>
			<select class="half" id="target">	
				<?php foreach ($artTargets as $val) : ?>
					<option value="<?=$val['id']?>"><?=$val['name']?></option>	
				<?php endforeach ?>
			</select>
		<input class="half" type="text" value="Unique" disabled><input class="half" type="checkbox" id="unique">
		<div class="table"></div>
		<div class="btn" onclick="addStat('skills', null)">Add Stat</div>
		<div class="btn" onclick="saveData('skills')">Save</div>
		<div class="btn" onclick="deleteData('skills', 'id')">Delete</div>
	</div>

	<!-- STATUS -->
	<!-- ============================================================================================================ -->
	<div class="box char-status">
		<input type="text" id="id" placeholder="ID">
		<input type="text" id="name" placeholder="Name">
		<input class="half" type="text" value="Art Icon" disabled><input class="half" type="text" id="icon">
		<textarea id="des" placeholder="Description"></textarea> 
		<input class="half" type="text" value="Status Type" disabled>
			<select class="half" id="class">		
				<?php foreach ($artStatusClass as $val) : ?>
					<option value="<?=$val['id']?>"><?=$val['name']?></option>	
				<?php endforeach ?>
			</select>
		<input class="half" type="text" value="Max Stacks" disabled><input class="half" type="number" id="stack" value="1" min="1">
		<input class="half" type="text" value="Removes:" disabled><input class="half" type="text" id="removes">
		<div class="table"></div>
		<div class="btn" onclick="addStat('status', null)">Add Stat</div>
		<div class="btn" onclick="saveData('status')">Save</div>
		<div class="btn" onclick="deleteData('status', 'id')">Delete</div>
	</div>

	<!-- GROUND -->
	<!-- ============================================================================================================ -->
	<div class="box char-ground">
		<input type="text" id="id" placeholder="ID">
		<input type="text" id="name" placeholder="Name">
		<input class="half" type="text" value="Art Icon" disabled><input class="half" type="text" id="icon">
		<textarea id="des" placeholder="Description"></textarea> 
		<input class="half" type="text" value="Affects nearby Tiles" disabled><input class="half" type="checkbox" id="affecttiles">
		<input class="half" type="text" value="Disappears on Contact" disabled><input class="half" type="checkbox" id="oncontact">
		<input class="half" type="text" value="Blocks Projectiles" disabled><input class="half" type="checkbox" id="blocksproj">
		<input class="half" type="text" value="Impassable" disabled><input class="half" type="checkbox" id="impassable">
		<div class="table"></div>
		<div class="btn" onclick="addStat('ground', null)">Add Stat</div>
		<div class="btn" onclick="saveData('ground')">Save</div>
		<div class="btn" onclick="deleteData('ground', 'id')">Delete</div>
	</div>

</div>

<script type="text/javascript">
	var curStat = 0;
	function zeroStat() { curStat = 0; }

	function addStat(base, data) {

		// TRAITS
		// ============================================================================================================
		// ============================================================================================================
		if (base == 'traits') { 
			var statData = "";

			if (curStat == 0) {
				statData += '<input type="text" value="value" disabled>';
				statData += '<input type="text" value="stat" disabled>';
				statData += '<input type="text" value="con" disabled>';
				statData += '<input type="text" value="contype" disabled>';
				statData += '<input type="text" value="target" disabled>';
			}

			if (data) {
				for (var i=0; i<data['stats'].length; i++) {
					var stat = data['stats'][i];

					statData += '<input id="stat' + i + 'value" type="text" value="' + stat['value'] + '">';
					statData += '<input id="stat' + i + 'stat" type="text" value="' + stat['stat'] + '">';
					statData += '<input id="stat' + i + 'con" type="text" value="' + stat['con'] + '">';
					statData += '<input id="stat' + i + 'contype" type="text" value="' + stat['contype'] + '">';
					statData += '<input id="stat' + i + 'target" type="text" value="' + stat['target'] + '">';
					curStat++;
				}
				$('.char-traits .table').html(statData);

			} else {
				statData += '<input id="stat' + curStat + 'value" type="text">';
				statData += '<input id="stat' + curStat + 'stat" type="text">';
				statData += '<input id="stat' + curStat + 'con" type="text">';
				statData += '<input id="stat' + curStat + 'contype" type="text">';
				statData += '<input id="stat' + curStat + 'target" type="text">';
				curStat++;

				$('.char-traits .table').append(statData);
			}
		}

		// WEAPONS
		// ============================================================================================================
		// ============================================================================================================
		if (base == 'weapons') { 
			var statData = "";

			if (curStat == 0) {
				statData += '<input type="text" value="value" disabled>';
				statData += '<input type="text" value="type" disabled>';
				statData += '<input type="text" value="Accuracy | D.Type" disabled>';
			}

			if (data) {
				for (var i=0; i<data['effects'].length; i++) {
					var stat = data['effects'][i];

					statData += '<input id="stat' + i + 'val" type="text" value="' + stat['val'] + '">';
					statData += '<input id="stat' + i + 'type" type="text" value="' + stat['type'] + '">';
					statData += '<input id="stat' + i + 'con" type="text" value="' + stat['con'] + '">';
					curStat++;
				}
				$('.char-weapons .table').html(statData);

			} else {
				statData += '<input id="stat' + curStat + 'val" type="text">';
				statData += '<input id="stat' + curStat + 'type" type="text">';
				statData += '<input id="stat' + curStat + 'con" type="text">';
				curStat++;

				$('.char-weapons .table').append(statData);
			}
		}

		// SKILLS
		// ============================================================================================================
		// ============================================================================================================
		if (base == 'skills') { 
			var statData = "";

			if (curStat == 0) {
				statData += '<input type="text" value="value" disabled>';
				statData += '<input type="text" value="type" disabled>';
				statData += '<input type="text" value="Accuracy | D.Type" disabled>';
			}

			if (data) {
				for (var i=0; i<data['effects'].length; i++) {
					var stat = data['effects'][i];

					statData += '<input id="stat' + i + 'val" type="text" value="' + stat['val'] + '">';
					statData += '<input id="stat' + i + 'type" type="text" value="' + stat['type'] + '">';
					statData += '<input id="stat' + i + 'con" type="text" value="' + stat['con'] + '">';
					curStat++;
				}
				$('.char-skills .table').html(statData);

			} else {
				statData += '<input id="stat' + curStat + 'val" type="text">';
				statData += '<input id="stat' + curStat + 'type" type="text">';
				statData += '<input id="stat' + curStat + 'con" type="text">';
				curStat++;

				$('.char-skills .table').append(statData);
			}
		}

		// STATUS
		// ============================================================================================================
		// ============================================================================================================
		if (base == 'status') { 
			var statData = "";

			if (curStat == 0) {
				statData += '<input type="text" value="value" disabled>';
				statData += '<input type="text" value="stat" disabled>';
				statData += '<input type="text" value="applied on stack" disabled>';
			}

			if (data) {
				for (var i=0; i<data['stats'].length; i++) {
					var stat = data['stats'][i];

					statData += '<input id="stat' + i + 'value" type="text" value="' + stat['value'] + '">';
					statData += '<input id="stat' + i + 'stat" type="text" value="' + stat['stat'] + '">';
					if (stat['onstack']) statData += '<input id="stat' + i + 'onstack" type="checkbox" checked>';
					else statData += '<input id="stat' + i + 'onstack" type="checkbox">';
					curStat++;
				}
				$('.char-status .table').html(statData);

			} else {
				statData += '<input id="stat' + curStat + 'value" type="text">';
				statData += '<input id="stat' + curStat + 'stat" type="text">';
				statData += '<input id="stat' + curStat + 'onstack" type="checkbox">';
				curStat++;

				$('.char-status .table').append(statData);
			}
		}

		// GROUND
		// ============================================================================================================
		// ============================================================================================================
		if (base == 'ground') { 
			var statData = "";

			if (curStat == 0) {
				statData += '<input type="text" value="value" disabled>';
				statData += '<input type="text" value="stat" disabled>';
			}

			if (data) {
				for (var i=0; i<data['stats'].length; i++) {
					var stat = data['stats'][i];

					statData += '<input id="stat' + i + 'value" type="text" value="' + stat['value'] + '">';
					statData += '<input id="stat' + i + 'stat" type="text" value="' + stat['stat'] + '">';
					curStat++;
				}
				$('.char-ground .table').html(statData);

			} else {
				statData += '<input id="stat' + curStat + 'value" type="text">';
				statData += '<input id="stat' + curStat + 'stat" type="text">';
				curStat++;

				$('.char-ground .table').append(statData);
			}
		}

	}

	function saveData(base) {
		var data,
			url;


		// TIMELINE
		// ============================================================================================================
		// ============================================================================================================
		if (base == 'timeline') {
			var savedate = $('.mir-timeline #date').val();
			var savename = $('.mir-timeline #name').val();
			var savemain = $('.mir-timeline #main').val();
			var savecont = $('.mir-timeline #cont').val();
			// OVERRIDE
			var found = false;
			for (var i=0; i<mirTimeline.length; i++) {
                if (mirTimeline[i]['date'] == savedate) {
                    mirTimeline[i]['date'] = savedate;
                    mirTimeline[i]['name'] = savename;
                    mirTimeline[i]['main'] = savemain;
                    mirTimeline[i]['cont'] = savecont;
                    found = true;
                    break;
                }
            }
            // ADD
            if(!found) {
                mirTimeline.push({
                    date: savedate,
                    name: savename,
                    main: savemain,
                    cont: savecont,
                })
            }
            url = "<?=URL::to('/dashboard/save/timeline')?>";
            data = mirTimeline;
		}


		// CHARS
		// ============================================================================================================
		// ============================================================================================================
		if (base == 'chars') { 
			var saveid = $('.mir-chars #name').val();
			var savename = $('.mir-chars #name').val();
			var savesur = $('.mir-chars #sur').val();
			var saveicon = $('.mir-chars #icon').val();
			var savetags = $('.mir-chars #tags').val();
			var savecolor = $('.mir-chars #color').val();
			var savesubcolor = $('.mir-chars #subcolor').val();
			var saveshow;
			if ($('.mir-chars #show').is(':checked')) saveshow = true 
			else saveshow = false;

			// OVERRIDE
			var found = false;
			for (var i=0; i<mirChars.length; i++) {
                if (mirChars[i]['name'] == savename) {
                    mirChars[i]['sur'] = savesur;
                    mirChars[i]['icon'] = saveicon;
                    mirChars[i]['tags'] = savetags;
                    mirChars[i]['color'] = savecolor;
                    mirChars[i]['subcolor'] = savesubcolor;
                    mirChars[i]['show'] = saveshow;
                    found = true;
                    break;
                }
            }
            // ADD
            if(!found) {
                mirChars.push({
                    name: savename,
                    sur: savesur,
                    icon: saveicon,
                    tags: savetags,
                    color: savecolor,
                    subcolor: savesubcolor,
                    show: saveshow,
                })
            }
            url = "<?=URL::to('/dashboard/save/chars')?>";
            data = mirChars;
		}


		// AFFINITIES
		// ============================================================================================================
		// ============================================================================================================
		if (base == 'affinities') { 
			var saveid = $('.char-affinities #id').val();
			var savename = $('.char-affinities #name').val();
			var saveicon = $('.char-affinities #icon').val();
			var savecolor = $('.char-affinities #color').val();
			var savedes = $('.char-affinities #des').val();
			var savespecial;
			if ($('.char-affinities #special').is(':checked')) saveunique = true 
			else saveunique = false;

			// OVERRIDE
			var found = false;
			for (var i=0; i<charAffinities.length; i++) {
                if (charAffinities[i]['id'] == saveid) {
                    charAffinities[i]['name'] = savename;
                    charAffinities[i]['icon'] = saveicon;
                    charAffinities[i]['color'] = savecolor;
                    charAffinities[i]['des'] = savedes;
                    charAffinities[i]['special'] = savespecial;
                    found = true;
                    break;
                }
            }
            // ADD
            if(!found) {
                charAffinities.push({
                    id: saveid,
                    name: savename,
                    icon: saveicon,
                    color: savecolor,
                    des: savedes,
                    special: savespecial,
                })
            }
            url = "<?=URL::to('/dashboard/save/affinities')?>";
            data = charAffinities;
		}

		// TRAITS
		// ============================================================================================================
		// ============================================================================================================
		if (base == 'traits') { 
			var saveid = $('.char-traits #id').val();
			var savename = $('.char-traits #name').val();
			var saveicon = $('.char-traits #icon').val();
			var savedes = $('.char-traits #des').val();
			var savespecial = $('.char-traits #special').val(); 
			var saveunique;
			if ($('.char-traits #unique').is(':checked')) saveunique = true 
			else saveunique = false;
			var savestats = [];

			// STATS
			for (var i=0; i<curStat; i++) {
				var value = $('.char-traits .table #stat' + i + 'value').val();
				if ($.isNumeric(value)) value = parseInt(value);

				savestats.push({
                    value: value,
                    stat: $('.char-traits .table #stat' + i + 'stat').val(),
                    con: $('.char-traits .table #stat' + i + 'con').val(),
                    contype: $('.char-traits .table #stat' + i + 'contype').val(),
                    target: $('.char-traits .table #stat' + i + 'target').val(),
                })
			}

			// OVERRIDE
			var found = false;
			for (var i=0; i<charTraits.length; i++) {
                if (charTraits[i]['id'] == saveid) {
                    charTraits[i]['name'] = savename;
                    charTraits[i]['icon'] = saveicon;
                    charTraits[i]['des'] = savedes;
                    charTraits[i]['special'] = savespecial;
                    charTraits[i]['unique'] = saveunique;
                    charTraits[i]['stats'] = savestats;
                    found = true;
                    break;
                }
            }
            // ADD
            if(!found) {
                charTraits.push({
                    id: saveid,
                    name: savename,
                    icon: saveicon,
                    des: savedes,
                    special: savespecial,
                    unique: saveunique,
                    stats: savestats,
                })
            }
            url = "<?=URL::to('/dashboard/save/traits')?>";
            data = charTraits;
		}


		// WEAPONS
		// ============================================================================================================
		// ============================================================================================================
		if (base == 'weapons') { 
			var saveid = $('.char-weapons #id').val();
			var savename = $('.char-weapons #name').val();
			var saveweapontype = $('.char-weapons #weapontype').val();
			var savearticon = $('.char-weapons #articon').val();
			var savedes = $('.char-weapons #des').val();
			var saveenergycost = $('.char-weapons #energycost').val(); 
			var savemystcost = $('.char-weapons #mystcost').val(); 
			var savereq = $('.char-weapons #req').val(); 
			var savehits = $('.char-weapons #hits').val(); 
			var saveaccuracy = $('.char-weapons #accuracy').val(); 
			var savetype = $('.char-weapons #type').val(); 
			var savearea = $('.char-weapons #area').val(); 
			var savetarget = $('.char-weapons #target').val();
			var saveunique;
			if ($('.char-weapons #unique').is(':checked')) saveunique = true 
			else saveunique = false;
			var savestats = [];

			// STATS
			for (var i=0; i<curStat; i++) {
				var value = $('.char-weapons .table #stat' + i + 'val').val();
				if ($.isNumeric(value)) value = parseFloat(value);

				savestats.push({
                    val: value,
                    type: $('.char-weapons .table #stat' + i + 'type').val(),
                    con: $('.char-weapons .table #stat' + i + 'con').val(),
                })
			}

			// OVERRIDE
			var found = false;
			for (var i=0; i<charWeapons.length; i++) {
                if (charWeapons[i]['id'] == saveid) {
                    charWeapons[i]['name'] = savename;
                    charWeapons[i]['weapontype'] = saveweapontype;
                    charWeapons[i]['articon'] = savearticon;
                    charWeapons[i]['des'] = savedes;
                    charWeapons[i]['energycost'] = saveenergycost;
                    charWeapons[i]['mystcost'] = savemystcost;
                    charWeapons[i]['req'] = savereq;
                    charWeapons[i]['hits'] = savehits;
                    charWeapons[i]['accuracy'] = saveaccuracy;
                    charWeapons[i]['type'] = savetype;
                    charWeapons[i]['area'] = savearea;
                    charWeapons[i]['target'] = savetarget;
                    charWeapons[i]['unique'] = saveunique;
                    charWeapons[i]['effects'] = savestats;
                    found = true;
                    break;
                }
            }
            // ADD
            if(!found) {
                charWeapons.push({
                    id: saveid,
                    name : savename,
                    weapontype : saveweapontype,
                    articon : savearticon,
                    des : savedes,
                    energycost : saveenergycost,
                    mystcost : savemystcost,
                    req : savereq,
                    hits : savehits,
                    accuracy : saveaccuracy,
                    type : savetype,
                    area : savearea,
                    target : savetarget,
                    unique : saveunique,
                    effects: savestats,
                })
            }
            url = "<?=URL::to('/dashboard/save/weapons')?>";
            data = charWeapons;
		}


		// SKILLS
		// ============================================================================================================
		// ============================================================================================================
		if (base == 'skills') { 
			var saveid = $('.char-skills #id').val();
			var savename = $('.char-skills #name').val();
			var saveaffinity = $('.char-skills #affinity').val();
			var savearticon = $('.char-skills #articon').val();
			var savedes = $('.char-skills #des').val();
			var saveenergycost = $('.char-skills #energycost').val(); 
			var savemystcost = $('.char-skills #mystcost').val(); 
			var savereq = $('.char-skills #req').val(); 
			var savehits = $('.char-skills #hits').val(); 
			var saveaccuracy = $('.char-skills #accuracy').val(); 
			var savetype = $('.char-skills #type').val(); 
			var savearea = $('.char-skills #area').val(); 
			var savetarget = $('.char-skills #target').val();
			var saveunique;
			if ($('.char-skills #unique').is(':checked')) saveunique = true 
			else saveunique = false;
			var savestats = [];

			// STATS
			for (var i=0; i<curStat; i++) {
				var value = $('.char-skills .table #stat' + i + 'val').val();
				if ($.isNumeric(value)) value = parseFloat(value);

				savestats.push({
                    val: value,
                    type: $('.char-skills .table #stat' + i + 'type').val(),
                    con: $('.char-skills .table #stat' + i + 'con').val(),
                })
			}

			// OVERRIDE
			var found = false;
			for (var i=0; i<charSkills.length; i++) {
                if (charSkills[i]['id'] == saveid) {
                    charSkills[i]['name'] = savename;
                    charSkills[i]['affinity'] = saveaffinity;
                    charSkills[i]['articon'] = savearticon;
                    charSkills[i]['des'] = savedes;
                    charSkills[i]['energycost'] = saveenergycost;
                    charSkills[i]['mystcost'] = savemystcost;
                    charSkills[i]['req'] = savereq;
                    charSkills[i]['hits'] = savehits;
                    charSkills[i]['accuracy'] = saveaccuracy;
                    charSkills[i]['type'] = savetype;
                    charSkills[i]['area'] = savearea;
                    charSkills[i]['target'] = savetarget;
                    charSkills[i]['unique'] = saveunique;
                    charSkills[i]['effects'] = savestats;
                    found = true;
                    break;
                }
            }
            // ADD
            if(!found) {
                charSkills.push({
                    id: saveid,
                    name : savename,
                    affinity : saveaffinity,
                    articon: savearticon,
                    des : savedes,
                    energycost : saveenergycost,
                    mystcost : savemystcost,
                    req : savereq,
                    hits : savehits,
                    accuracy : saveaccuracy,
                    type : savetype,
                    area : savearea,
                    target : savetarget,
                    unique : saveunique,
                    effects: savestats,
                })
            }
            url = "<?=URL::to('/dashboard/save/skills')?>";
            data = charSkills;
		}


		// STATUS
		// ============================================================================================================
		// ============================================================================================================
		if (base == 'status') { 
			var saveid = $('.char-status #id').val();
			var savename = $('.char-status #name').val();
			var saveicon = $('.char-status #icon').val();
			var savedes = $('.char-status #des').val();
			var saveclass = $('.char-status #class').val();
			var savestack = $('.char-status #stack').val(); 
			var saveremoves = $('.char-status #removes').val();
			var savestats = [];

			// STATS
			for (var i=0; i<curStat; i++) {
				var value = $('.char-status .table #stat' + i + 'value').val();
				if ($.isNumeric(value)) value = parseInt(value);

				var onstack;
				if ($('.char-status .table #stat' + i + 'onstack').is(':checked')) onstack = true 
				else onstack = false;

				savestats.push({
                    value: value,
                    stat: $('.char-status .table #stat' + i + 'stat').val(),
                    onstack: onstack,
                })
			}

			// OVERRIDE
			var found = false;
			for (var i=0; i<charStatus.length; i++) {
                if (charStatus[i]['id'] == saveid) {
                    charStatus[i]['name'] = savename;	
                    charStatus[i]['icon'] = saveicon;
                    charStatus[i]['des'] = savedes;
                    charStatus[i]['class'] = saveclass;
                    charStatus[i]['stack'] = savestack;
                    charStatus[i]['removes'] = saveremoves;
                    charStatus[i]['stats'] = savestats;
                    found = true;
                    break;
                }
            }
            // ADD
            if(!found) {
                charStatus.push({
                    id: saveid,
                    name: savename,
                    icon: saveicon,
                    des: savedes,
                    class: saveclass,
                    stack: savestack,
                    removes: saveremoves,
                    stats: savestats,
                })
            }
            url = "<?=URL::to('/dashboard/save/status')?>";
            data = charStatus;
		}


		// GROUND
		// ============================================================================================================
		// ============================================================================================================
		if (base == 'ground') { 
			var saveid = $('.char-ground #id').val();
			var savename = $('.char-ground #name').val();
			var saveicon = $('.char-ground #icon').val();
			var savedes = $('.char-ground #des').val();
			var saveaffecttiles;
			if ($('.char-ground #affecttiles').is(':checked')) saveaffecttiles = true 
			else saveaffecttiles = false;
			var saveoncontact;
			if ($('.char-ground #oncontact').is(':checked')) saveoncontact = true 
			else saveoncontact = false;
			var saveblocksproj;
			if ($('.char-ground #blocksproj').is(':checked')) saveblocksproj = true 
			else saveblocksproj = false;
			var saveimpassable;
			if ($('.char-ground #impassable').is(':checked')) saveimpassable = true 
			else saveimpassable = false;
			var savestats = [];

			// STATS
			for (var i=0; i<curStat; i++) {
				var value = $('.char-ground .table #stat' + i + 'value').val();
				if ($.isNumeric(value)) value = parseInt(value);

				savestats.push({
                    value: value,
                    stat: $('.char-ground .table #stat' + i + 'stat').val(),
                })
			}

			// OVERRIDE
			var found = false;
			for (var i=0; i<charGround.length; i++) {
                if (charGround[i]['id'] == saveid) {	
                    charGround[i]['name'] = savename;
                    charGround[i]['icon'] = saveicon;
                    charGround[i]['des'] = savedes;
                    charGround[i]['affecttiles'] = saveaffecttiles;
                    charGround[i]['oncontact'] = saveoncontact;
                    charGround[i]['blocksproj'] = saveblocksproj;
                    charGround[i]['impassable'] = saveimpassable;
                    charGround[i]['stats'] = savestats;
                    found = true;
                    break;
                }
            }
            // ADD
            if(!found) {
                charGround.push({
                    id: saveid,
                    name: savename,
                    icon: saveicon,
                    des: savedes,
                    affecttiles: saveaffecttiles,
                    oncontact: saveoncontact,
                    blocksproj: saveblocksproj,
                    impassable: saveimpassable,
                    stats: savestats,
                })
            }
            url = "<?=URL::to('/dashboard/save/ground')?>";
            data = charGround;
		}

		toFile(url, base, data, saveid + ' saved!', saveid);
	}


	function deleteData(base, tag) {
		var saveid = $('.char-' + base + ' #id').val();
		var data, url;

		if (base == 'chars') { 
			saveid = $('.char-' + base + ' #name').val();
			data = mirChars;
            url = "<?=URL::to('/dashboard/save/chars')?>";
		} else if (base == 'affinities') { 
			data = charAffinities;
            url = "<?=URL::to('/dashboard/save/affinities')?>";
		} else if (base == 'traits') { 
			data = charTraits;
            url = "<?=URL::to('/dashboard/save/traits')?>";
		} else if (base == 'weapons') { 
			data = charWeapons;
            url = "<?=URL::to('/dashboard/save/weapons')?>";
		} else if (base == 'skills') { 
			data = charSkills;
            url = "<?=URL::to('/dashboard/save/skills')?>";
		} else if (base == 'status') { 
			data = charStatus;
            url = "<?=URL::to('/dashboard/save/status')?>";
		} else if (base == 'ground') { 
			data = charGround;
            url = "<?=URL::to('/dashboard/save/ground')?>";
		}

		for(var i=0; i<data.length; i++){
            if( data[i][tag] == saveid ){
                data.splice(i, 1);
                break;
            }
        }

		toFile(url, base, data, saveid + ' deleted!', '');
	}

	// FINAL SAVING
	// ============================================================================================================
	// ============================================================================================================
	function toFile(url, base, data, act, rowid) {
        $.ajaxSetup({
			headers: {
				'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
			}
        });

        $.ajax({
            url: url,
            type: "POST",
            data: { info : JSON.stringify(data) },

            success:function(data){
                alert(act);
                $('#tab-' + base).click();

                $('.dataTables_scrollBody').scrollTo('#'+rowid);

            },error:function(jqXHR){ 
                alert(jqXHR.status + ' ' + jqXHR.statusText + ' $.post failed!');
            }
        }); 
	}

</script>