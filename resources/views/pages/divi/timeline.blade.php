@extends('templates.single-default')

@section('metas')
	<style type="text/css">
		.main-page .cont-div .title {
		    padding: 50px 20px !important; }
		.main-page .cont-div .cont {
			height: calc(100vh - 90px) !important;
			padding: 0 0 !important;
			overflow: hidden; }
		.main-page .cont .tl-list {
			float: left;
			width: calc(40%);
		    padding: 0;
			height: calc(100vh - 90px);
		 	overflow-y: hidden; }
			.main-page .cont .tl-list .scroll {
				height: 100%;
				padding: 0 0 150px; }

		 	.main-page .cont .tl-list .tl-br {
		 		position: relative;
			    float: left;
			    position: relative;
			    background: white;
			    width: 50px;
			    color: #333;
			    font-size: 12px;
			    font-weight: bold;
			    text-align: right;
			    padding: 0 5px;
			    margin: 5px 0 -5px;
			    z-index: 1; }
		 		.main-page .cont .tl-list .tl-box {
		 			position: relative; left: 20px;
		 			width: calc(100% - 20px); }

		.main-page .cont .tl-box .head {
			float: left;
			width: 100%;
			background-color: rgba(0,0,0,0.5);
			font-size: 14px;
		    font-weight: initial;
			border-left: 5px solid grey;
			border-right: 5px solid grey;
		    padding: 5px 15px;
			margin: 0 0 1px;
			cursor: pointer;
			transition: 0.5s; }	
			.main-page .cont .tl-box.open .head {
				background-color: white;
				color: #333; 
				transition: 0.3s; }

			.main-page .cont .tl-box .head .col {
				float: left;
				font-family: "Quicksand"; 
				text-transform: initial;
				/*width: calc(100% / 3);*/ }
			.main-page .cont .tl-box .head .date { 
				width: calc(25%);
				font-size: 12px; }
			.main-page .cont .tl-box .head .name { 
				width: calc(75%);
				font-weight: bold;
				text-transform: capitalize; }

		.main-page .cont .tl-display {
			position: relative;
			float: left;
			width: 60%;
			height: 100%;
			background-color: rgba(0,0,0,0.7);
    		font-size: 12px;
			padding: 10px 15px 150px;
			overflow-y: auto; }
			.main-page .cont .tl-display .name {
				position: relative; right: 0;
			    font-family: "Righteous";
			    font-size: 30px;
			    font-weight: bold;
				text-transform: capitalize;
			    letter-spacing: -1px;
		        line-height: 1;
    			margin: 0 0 15px;
			    opacity: 1;
			    transition: 0.3s; }
				.main-page .cont .tl-display.change .name {
					right: -50px;
					opacity: 0;
					transition: 0.3s; }
			.main-page .cont .tl-display .desc {
				position: relative; right: 0;
				opacity: 1;
				transition: 0.5s; }
				.main-page .cont .tl-display.change .desc {
					right: -50px;
					opacity: 0;
					transition: 0.5s; }

				.main-page .cont .tl-display .desc hr {
					margin-bottom: 5px;
					opacity: 0.5; }
				.main-page .cont .tl-display .desc .mir-c {
					display: inline-block;
					font-weight: bold;
					text-transform: capitalize;
					/*line-height: 1.6;*/
					padding: 1px 5px;
					margin-top: 2px;
    				border-radius: 3px; }
				.main-page .cont .tl-display .desc .mir-f {
					font-weight: bold;
					line-height: 1.6;
					padding: 1px 5px;
    				border-radius: 3px; }

				.main-page .cont .tl-display .desc textarea {
			        background-color: transparent;
				 	color: white;
				    width: 100%;    
				    /*height: calc(100vh - 200px);*/
				    height: 300vh;
				    border: 0; }


			.main-page .cont .tl-display .edit { 
				position: absolute; top: 0px; right: 0px;
				font-size: 14px;
				cursor: pointer; }
	</style>
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
					// $season = $seasonNames[$date[1]];
					// $day = "";
					// if ($date[2] > 0) {
					// 	$d = explode('-', $date[2]);
					// 	$day = "| " . $d[0];
					// } //substr($date[2],0,2);

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

		var selectLog = "";

		function openLog(el, id) {
			var name = mirTimeline[id]['name'];
			var cont = mirTimeline[id]['cont'];

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

				if (part[0] == 'c') split[i] = findName(part[1], 'c');
				if (part[0] == 'f') split[i] = findName(part[1], 'f');
				
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

					if (type == 'c') {

						if (name == "riza") {
							character += " @&tl;Unknown$gt;?";
						} else {
							character += " " + mirChars[i]['name'];
							character += " " + mirChars[i]['sur'];
						}
					} else if (type == 'f') {
						character += " " + mirChars[i]['forum'];
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
				editId = mirTimeline[id]['date'];
			} else {
				saveLog();
			}
		}

		function saveLog() {
	 		if (isEditing == true) {
	 			var cont = $('.tl-display .desc textarea').val();

				var found = false;
				for (var i=0; i<mirTimeline.length; i++) {
	                if (mirTimeline[i]['date'] == editId) {
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