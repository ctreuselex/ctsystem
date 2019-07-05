@extends('templates.single-default')

@section('metas')
	<link rel="stylesheet" type="text/css" href="{{ url('css/timeline.css') }}">
@stop

@section('title') Timeline @stop
@section('tag') History of Mirrorplane @stop
@section('cont') 
	<div class="tl-list">
		<div class="scroll">

			<?php
				$yearbr=1699;
	            foreach ($mirTimeline as $k => $tl) {
	                $year[$k] = $tl['year'];
	                $season[$k] = $tl['season'];
	                $day[$k] = $tl['day'];
	            }
	            array_multisort($year, SORT_DESC, $season, SORT_DESC, $day, SORT_DESC, $mirTimeline); // SORT_ASC
	        ?>

			<?php foreach ($mirTimeline as $k => $tl) : ?>

				<?php 
					// DATE FORMAT
					$seasonNames = ['', 'Summer', 'Fall', 'Winter', 'Spring'];

					// CHARACTER COLOR
					$lColor = "grey"; $rColor = "grey"; $cIco = "ra ra-horn-call";
					$charName = "";
					foreach ($mirChars as $c) {
						if ($tl['main'] == $c['name']) {
							$lColor = $c['color'];
							$rColor = $c['subcolor'];
							$cIco = $c['icon'];
							$charName = $c['name'];
						}
					}
				?>

				<?php if( $yearbr > $tl['year']) { $yearbr = $tl['year']; echo '<div class="tl-br">' . $yearbr . '</div>'; } ?>

				<div class="tl-box" onclick="openLog(this, '{{ $k }}')">
					<div class="head" style="border-left-color: {{ $lColor }}; border-right-color: {{ $rColor }}">
						<div class="col date">{{ $seasonNames[$tl['season']] }} {{ $tl['day'] }}</div>
						<div class="col name"><i class="{{ $cIco }}" style="color: {{ $lColor }};"></i> {{ $tl['name'] }}</div>
						<!-- <div class="col main">{{ $charName }}</div> -->
					</div>
				</div>
			<?php endforeach ?>

		</div>
	</div>

	<div class="tl-display">
		<div class="name"></div>
		<div class="desc"></div>
	</div>

	<script type="text/javascript">
		var mirTimeline = <?=json_encode($mirTimeline)?>;
		var mirChars = <?=json_encode($mirChars)?>;

		var selectYear = 0;

		function openLog(el, id) {
			var name = mirTimeline[id]['name'];
			var cont = mirTimeline[id]['cont'];
			selectYear = mirTimeline[id]['year'];

			$('.tl-display').addClass('change');
			setTimeout( function() {
				$('.tl-display .name').html(name + '<div class="edit" onclick="editLog(' + id + ')"><i class="ra ra-cog"></i></div>');
				$('.tl-display .desc').html(findCharacters(cont));
				$('.tl-display').removeClass('change');
			}, 500);

			$('.tl-list .tl-box').removeClass('open');
			$(el).addClass('open');

			isEditing = false;
 			editId = "";
		}

		function findCharacters(cont) {
			var split = cont.split("|");

			for (var i=0; i<split.length; i++) {
				var part = split[i].split("-"),
					character = "";

				if (part[0] == 'c' || part[0] == 'f' || part[0] == 'i') split[i] = findName(part[1], part[0]);
			}

			return split.join("");
		}

		function findName(name, type) {
			var character = "",
				found = false;

			for (var i=0; i<mirChars.length; i++) {
				if (mirChars[i]['name'] == name) {
					var subcolor = mirChars[i]['subcolor'];
					if (subcolor == "") subcolor = "grey";
					character += "<span class='mir-" + type + "' style='background-color: " + subcolor + "'>";

					var icon = mirChars[i]['icon'];
					if (icon == "") icon = "ra ra-player";
					character += "<i class='" + icon + "' style='color: " + mirChars[i]['color'] + "'></i>";

					var charCycle = selectYear - mirChars[i]['year'];
					var charAge = Math.floor(((236*1.35)*(selectYear-mirChars[i]['year']))/365, 0);
					if (mirChars[i]['year'] == "") {
						charCycle = "??";
						charAge = "??";
					}

					var charDetail = "";
					charDetail += "<div class='details'>";
					if (type == 'f') {
						if (mirChars[i]['sur'] == "anon") charDetail += "<div class='detail n'> Anonymous </div>";
						else charDetail += "<div class='detail n'> " + mirChars[i]['name'] + " " + mirChars[i]['sur'] + "</div>";
					}

					charDetail += "<div class='detail a'>";
					if (name == "riza") {
						charDetail += 	"@&mc;" + charCycle + "$pt;?";
						charDetail += 	" | @&ae;" + charAge + "$gt;?";
					} else {
						charDetail += 	"MPC: " + charCycle;
						charDetail += 	" | AGE: " + charAge;
					}
					charDetail += "</div>";

					charDetail += "</div>";

					if (type == 'c') {

						if (name == "riza") {
							character += " @&tl;Unknown$gt;?";
						} else {
							character += " " + mirChars[i]['name'];
							character += " " + mirChars[i]['sur'];
						}
						character += charDetail;

					} else if (type == 'f') {
						character += " " + mirChars[i]['forum'];
						character += charDetail;

					} else if (type == 'i') {
						character += " " + mirChars[i]['name'];
						character += " <span style='text-transform:uppercase'>" + mirChars[i]['sur'].substring(0, 1) + ".</span>";
					}

					character += "</span>";
					found = true;

				}
			}

			if (!found) {
				character += "<span class='mir-" + type + "' style='background-color: grey'>";
				character += "<i class='ra ra-player'></i> [deleted]";
				character += "</span>";
			}

			return character
		}

		var isEditing = false;
		var editId = "";
		function editLog(id) {

	 		if (isEditing == false) {
				var cont = mirTimeline[id]['cont'];

				$('.tl-display .desc').html('<textarea class="edit-log">');
				$('.tl-display .desc textarea').val(cont);
				isEditing = true;
				editId = mirTimeline[id]['id'];
			} else {
				saveLog();
			}
		}

		function saveLog() {
	 		if (isEditing == true) {
	 			var cont = $('.tl-display .desc textarea').val();

				var found = false;
				for (var i=0; i<mirTimeline.length; i++) {
	                if (mirTimeline[i]['id'] == editId) {
	                    mirTimeline[i]['cont'] = cont;
	                    found = true;
	                    break;
	                }
	            }

	            url = "<?=URL::to('/dashboard/save/timeline')?>";
	            data = mirTimeline;

	            toFile(url, 'timeline', data, 'Log saved!');

	 			isEditing = false;
	 			editId = "";

	 			$('.tl-display .desc').html(findCharacters(cont));
	 		}
		}

		// FINAL SAVING
		// ============================================================================================================
		// ============================================================================================================
		function toFile(url, base, data, act) {
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

	            },error:function(jqXHR){ 
	                alert(jqXHR.status + ' ' + jqXHR.statusText + ' $.post failed!');
	            }
	        }); 
		}

	</script>
@stop