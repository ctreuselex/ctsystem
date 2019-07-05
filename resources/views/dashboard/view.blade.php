@extends('dashboard.template')

<!-- MAIN -->
@section('main')
	<div class="main grid-input">
		<div class="title">Mirrorplane</div>
		@include('dashboard/input')
	</div>

	<div class="main grid-view">
		<div class="tabs">
			<div class="tab" id="tab-timeline" 		onclick="createTable(this, 'timeline')">Timeline</div>
			<div class="tab" id="tab-chars" 		onclick="createTable(this, 'chars')">Characters</div>
			<div class="tab" id="tab-affinities" 	onclick="createTable(this, 'affinities')">Affinities</div>
			<div class="tab" id="tab-traits" 		onclick="createTable(this, 'traits')">Traits</div>
			<div class="tab" id="tab-weapons" 		onclick="createTable(this, 'weapons')">Weapon Arts</div>
			<div class="tab" id="tab-skills" 		onclick="createTable(this, 'skills')">Mystic Arts</div>
			<div class="tab" id="tab-status" 		onclick="createTable(this, 'status')">Statuses</div>
			<div class="tab" id="tab-ground" 		onclick="createTable(this, 'ground')">Ground Effects</div>
		</div>

		<div class="sel table">

		</div>
	</div>

	<script type="text/javascript">
		
		function createTable(el, base) {
			var tableDataString = "";

			if (base == 'timeline') tableDataString = stringData(base, mirTimeline);
			if (base == 'chars') tableDataString = stringData(base, mirChars);
			if (base == 'affinities') tableDataString = stringData(base, charAffinities);
			if (base == 'traits') tableDataString = stringData(base, charTraits);
			if (base == 'weapons') tableDataString = stringData(base, charWeapons);
			if (base == 'skills') tableDataString = stringData(base, charSkills);
			if (base == 'status') tableDataString = stringData(base, charStatus);
			if (base == 'ground') tableDataString = stringData(base, charGround);

			inputData(base);

	        $('.sel.table').html(tableDataString);
	        $('#main-table').DataTable({
	        	"order": [[ 0, "asc" ], [ 2, "asc" ]],
		        scrollY:        '70vh',
		        scrollCollapse: true,
		        paging:         false,
		        deferRender:    true,
    			// scroller:       true
		    });

		    $('.main .tabs .tab').removeClass('active');
		    $(el).addClass('active');
		}

		function stringData(base, data) {
			var tableData = data,
				tableDataString = "";

			tableDataString += "<table id='main-table' class='display' cellspacing='0'>";
			tableDataString +=   "<thead>";
			tableDataString +=     "<tr>";

			if (base == 'chars') {
				tableDataString += "<td>Name</td>";
				tableDataString += "<td>Icon</td>";
				tableDataString += "<td>Colors</td>";
				tableDataString += "<td>Tags</td>";
				tableDataString += "<td>Show</td>";
				tableDataString += "<td>Actions</td>";

			} else if (base == 'timeline') {

				tableDataString += "<td>ID</td>";
				tableDataString += "<td>Year</td>";
				tableDataString += "<td>Season</td>";
				tableDataString += "<td>Day</td>";
				tableDataString += "<td>Name</td>";
				tableDataString += "<td>Main</td>";
				tableDataString += "<td>Actions</td>";

			} else {

				if (base == 'weapons') 	{
					tableDataString += "<td>Class</td>";
					tableDataString += "<td>Icon</td>";
					tableDataString += "<td>Name</td>";
				} else if (base == 'skills') {
					tableDataString += "<td>Affinity</td>";
					tableDataString += "<td>Icon</td>";
					tableDataString += "<td>Name</td>";
				} else {
					tableDataString += "<td>Name</td>";
					tableDataString += "<td>Icon</td>";
				}

				tableDataString += "<td>Description</td>";

				if (base == 'traits') 	{
					tableDataString += "<td>Exclusive</td>";
				} else if (base == 'weapons' || base == 'skills') {
					tableDataString += "<td>Type | Target</td>";
					tableDataString += "<td>Area</td>";
				} else if (base == 'status') {
					tableDataString += "<td>Removes</td>";
				}

				tableDataString += "<td>Actions</td>";
			}

			tableDataString +=     "</tr>";
			tableDataString +=   "</thead>";
			tableDataString +=   "<tbody>";

			// CONTENT
			// ============================================================================================================
			// ============================================================================================================
            for (var i=0; i<tableData.length; i++) {
            	tableDataString += "<tr ";

				if (base == 'chars') {
            		tableDataString += "id='" + tableData[i]['name'] + "'>";
					tableDataString +=   "<td style='text-transform: capitalize'>" + tableData[i]['name'] + " " + tableData[i]['sur'] + "</td>";
					tableDataString +=   "<td><i class='" + tableData[i]['icon'] + "'></i></td>";
					tableDataString +=   "<td>";
					tableDataString +=     "<div class='color-box char-grade' style='background-color: " + tableData[i]['color'] + "'> " + tableData[i]['color'] +"</div>";
					tableDataString +=     "<div class='color-box char-grade' style='background-color: " + tableData[i]['subcolor'] + "'> " + tableData[i]['subcolor'] +"</div>";
					tableDataString +=   "</td>";
					tableDataString +=   "<td>";
					if (tableData[i]['tags']) tableDataString += tableData[i]['tags']
					tableDataString +=   "</td>";
					tableDataString +=   "<td>";
					if (tableData[i]['show']) tableDataString += "true";
					else tableDataString += "false";
					tableDataString +=   "</td>";
					tableDataString +=   "<td>";
					tableDataString +=     "<div class='btn view' onclick='viewData(\"" + base + "\", \"" + tableData[i]['name'] +"\")'><i class='fas fa-eye'></i></div>";
					tableDataString +=   "</td>";

				} else if (base == 'timeline') {
            		tableDataString += "id='" + tableData[i]['id'] + "'>";

            		// DATE FORMAT
					var seasonNames = ['', 'Summer', 'Fall', 'Winter', 'Spring'];

					tableDataString += 	"<td>" + tableData[i]['id'] + "</td>";
					tableDataString += 	"<td>" + tableData[i]['year'] + "</td>";
					tableDataString += 	"<td>" + seasonNames[tableData[i]['season']] + "</td>";
					tableDataString += 	"<td>" + tableData[i]['day'] + "</td>";
					tableDataString += 	"<td>" + tableData[i]['name'] + "</td>";
					tableDataString += 	"<td>" + tableData[i]['main'] + "</td>";
					tableDataString +=   "<td>";
					tableDataString +=     "<div class='btn view' onclick='viewData(\"" + base + "\", \"" + tableData[i]['id'] +"\")'><i class='fas fa-eye'></i></div>";
					tableDataString +=   "</td>";

				} else {
            		tableDataString += "id='" + tableData[i]['id'] + "'>";

					if (base == 'affinities') { 
						tableDataString += "<td>" + tableData[i]['name'] + "</td>";
						tableDataString += "<td><div class='color-box' style='background-color: " + tableData[i]['color'] + "'>";
						tableDataString += "<i class='" + tableData[i]['icon'] + "'></i>";
						tableDataString += "</div></td>";
					} else if (base == 'weapons' || base == 'skills') { 
	            		var articon = "";
	            		if (tableData[i]['articon']) articon = getDataIcon(tableData[i]['articon']);
						if (base == 'weapons') tableDataString += "<td>" + tableData[i]['weapontype'] + "</td>";
						if (base == 'skills') tableDataString += "<td>" + tableData[i]['affinity'] + "</td>";
						tableDataString += "<td><div class='color-box' style='background-color: " + getAffinityColor(tableData[i]['affinity']) + "'>";
						tableDataString += "<img src='" + articon + "'></div></td>";
						tableDataString += "<td>" + tableData[i]['name'] + "</td>";
					} else if (base == 'status' || base == 'ground' ) { 
	            		var articon = "";
	            		if (tableData[i]['icon']) articon = getDataIcon(tableData[i]['icon']);
						tableDataString += "<td>" + tableData[i]['name'] + "</td>";
						tableDataString += "<td><div class='color-box status-" + tableData[i]['class'] + "' >";
						tableDataString += "<img src='" + articon + "'></div></td>";
					} else {
						tableDataString += "<td>" + tableData[i]['name'] + "</td>";
						tableDataString += "<td><i class='" + tableData[i]['icon'] + "'></i></td>";
					}

					tableDataString +=   "<td>" + tableData[i]['des'] + "</td>";

					if (base == 'traits') 	{
						tableDataString += "<td>" + tableData[i]['special'] + "</td>";
					} else if (base == 'weapons' || base == 'skills') {
						tableDataString += "<td>" + tableData[i]['type'] + "<br>" + tableData[i]['target'] + "</td>";
						tableDataString += "<td><div class='field'>";
						tableDataString += generateField({
											width: 7, 
											height: 6,
											area: tableData[i]['area'],
											skillclass: tableData[i]['id'],
										});
						tableDataString += "<div></td>";
					} else if (base == 'status') { 
						if (tableData[i]['removes']) {
							var	splitRe = tableData[i]['removes'].split('|'), 
								removes = "";
							for (var j=0; j<splitRe.length; j++) {
								removes += "|" + splitRe[j] + "|<br>";
							}
						}
						if (tableData[i]['removes']) tableDataString += "<td style='font-size: 10px;'>" + findReplaceableTags(removes) + "</td>";
						else tableDataString += "<td></td>";
					}
					
					tableDataString +=   "<td>";
					tableDataString +=     "<div class='btn view' onclick='viewData(\"" + base + "\", \"";
					if (base == 'chars') 		tableDataString += tableData[i]['name']; 
					else 						tableDataString += tableData[i]['id']; 
					tableDataString += 	"\")'><i class='fas fa-eye'></i></div>";
					tableDataString +=   "</td>";
				}
				tableDataString += "</tr>";
            }	

            tableDataString +=   "</tbody>";
			tableDataString += "</table>"; 

			return(tableDataString);
		}

		function inputData(base) {
			$('.input-div .box').hide();
			if (base == 'timeline') { 
				$('.input-div .box.mir-timeline').show();
			} else if (base == 'chars') { 
				$('.input-div .box.mir-chars').show();
			} else {
				$('.input-div .box.char-' + base).show();
			}
		}

		function viewData(base, id) {
			var data;

			if (base == 'timeline') { 
				data = findDataByID(mirTimeline, id, 'id');
				$('.mir-timeline #id').val(data['id']);
				$('.mir-timeline #year').val(data['year']);
				$('.mir-timeline #season').val(data['season']);
				$('.mir-timeline #day').val(data['day']);
				$('.mir-timeline #name').val(data['name']);
				$('.mir-timeline #main').val(data['main']);
				$('.mir-timeline #cont').val(data['cont']);
			}

			if (base == 'chars') { 
				data = findDataByID(mirChars, id, 'name');
				$('.mir-chars #name').val(data['name']);
				$('.mir-chars #sur').val(data['sur']);
				$('.mir-chars #year').val(data['year']);
				$('.mir-chars #icon').val(data['icon']);
				$('.mir-chars #tags').val(data['tags']);
				$('.mir-chars #color').val(data['color']);
				$('.mir-chars #subcolor').val(data['subcolor']);
				if (data['show']) $('.mir-chars #show').prop('checked', true);
				else $('.mir-chars #show').prop('checked', false);
				$('.mir-chars #forum').val(data['forum']);
			}

			if (base == 'affinities') { 
				data = findDataByID(charAffinities, id, 'id');
				$('.char-affinities #id').val(data['id']);
				$('.char-affinities #name').val(data['name']);
				$('.char-affinities #icon').val(data['icon']);
				$('.char-affinities #color').val(data['color']);
				$('.char-affinities #des').val(data['des']);
				if (data['special']) $('.char-affinities #special').prop('checked', true);
				else $('.char-affinities #special').prop('checked', false);
			}

			if (base == 'traits') { 
				data = findDataByID(charTraits, id, 'id');
				$('.char-traits #id').val(data['id']);
				$('.char-traits #name').val(data['name']);
				$('.char-traits #icon').val(data['icon']);
				$('.char-traits #des').val(data['des']);
				$('.char-traits #special').val(data['special']);
				if (data['unique']) $('.char-traits #unique').prop('checked', true);
				else $('.char-traits #unique').prop('checked', false);
			}

			if (base == 'weapons') { 
				data = findDataByID(charWeapons, id, 'id');
				$('.char-weapons #id').val(data['id']);
				$('.char-weapons #name').val(data['name']);
				$('.char-weapons #weapontype').val(data['weapontype']);
				$('.char-weapons #articon').val(data['articon']);
				$('.char-weapons #des').val(data['des']);
				$('.char-weapons #energycost').val(data['energycost']);
				$('.char-weapons #mystcost').val(data['mystcost']);
				$('.char-weapons #req').val(data['req']);
				$('.char-weapons #hits').val(data['hits']);
				$('.char-weapons #accuracy').val(data['accuracy']);
				$('.char-weapons #type').val(data['type']);
				$('.char-weapons #area').val(data['area']);
				$('.char-weapons #target').val(data['target']);
				if (data['unique']) $('.char-weapons #unique').prop('checked', true);
				else $('.char-weapons #unique').prop('checked', false);
			}

			if (base == 'skills') { 
				data = findDataByID(charSkills, id, 'id');
				$('.char-skills #id').val(data['id']);
				$('.char-skills #name').val(data['name']);
				$('.char-skills #affinity').val(data['affinity']);
				$('.char-skills #articon').val(data['articon']);
				$('.char-skills #des').val(data['des']);
				$('.char-skills #energycost').val(data['energycost']);
				$('.char-skills #mystcost').val(data['mystcost']);
				$('.char-skills #req').val(data['req']);
				$('.char-skills #hits').val(data['hits']);
				$('.char-skills #accuracy').val(data['accuracy']);
				$('.char-skills #type').val(data['type']);
				$('.char-skills #area').val(data['area']);
				$('.char-skills #target').val(data['target']);
				if (data['unique']) $('.char-skills #unique').prop('checked', true);
				else $('.char-skills #unique').prop('checked', false);
			}

			if (base == 'status') { 
				data = findDataByID(charStatus, id, 'id');
				$('.char-status #id').val(data['id']);
				$('.char-status #name').val(data['name']);
				$('.char-status #icon').val(data['icon']);
				$('.char-status #des').val(data['des']);
				$('.char-status #class').val(data['class']);
				$('.char-status #stack').val(data['stack']);
				$('.char-status #removes').val(data['removes']);
			}

			if (base == 'ground') { 
				data = findDataByID(charGround, id, 'id');
				$('.char-ground #id').val(data['id']);
				$('.char-ground #name').val(data['name']);
				$('.char-ground #icon').val(data['icon']);
				$('.char-ground #des').val(data['des']);
				if (data['affecttiles']) $('.char-ground #affecttiles').prop('checked', true);
				else $('.char-ground #affecttiles').prop('checked', false);
				if (data['oncontact']) $('.char-ground #oncontact').prop('checked', true);
				else $('.char-ground #oncontact').prop('checked', false);
				if (data['blocksproj']) $('.char-ground #blocksproj').prop('checked', true);
				else $('.char-ground #blocksproj').prop('checked', false);
				if (data['impassable']) $('.char-ground #impassable').prop('checked', true);
				else $('.char-ground #impassable').prop('checked', false);
			}

			zeroStat();
			addStat(base, data);
		}

		function findDataByID(tableData, id, tag) {
			for (var i=0; i<tableData.length; i++) {
				if(tableData[i][tag] == id) return tableData[i];
			}
		}

	</script>
@stop