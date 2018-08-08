<div class="menu-party">
	<div class="title">My Party</div>
	<div class="party-options">
		<div class="option"><i class="fas fa-save"></i></div>
		<div class="option"><i class="far fa-save"></i></div>
		<div class="option" onclick="resetChars();"><i class="fas fa-undo-alt"></i></div>
	</div>

	<div class="chars">
	<?php for($i=0; $i<3; $i++): ?>
		<div class="char" id="char<?=$i?>">
			<div class="scroll">
				<div class="diamonds">
					<!-- <div id="dbchar<?=$i?>" class="diamond block"></div> -->
					<!-- <div id="dbcharback<?=$i?>" class="diamond block"></div> -->
				</div>
				<input type="text" class="name" placeholder="Name" onchange="saveName(this, <?=$i?>)">
				<div class="stats origin"><div class="attr">There's nothing here...</div></div>

				<div class="stats attributes">
					<div class="stat"><i class="ra ra-heart-bottle"></i> Health: 		<span class="val mhealth"></span>	<span class="val chealth"></span></div>
					<div class="stat"><i class="ra ra-corked-tube"></i> Energy: 		<span class="val menergy"></span>	<span class="val cenergy"></span></div>
					<div class="stat"><i class="ra ra-fizzing-flask"></i> Myst: 		<span class="val mmyst"></span>		<span class="val cmyst"></span></div>

					<div class="colrow">
						<div class="col3"><div class="stat"><i class="ra ra-muscle-up"></i>			<span class="val statbody"></span></div></div>
						<div class="col3"><div class="stat"><i class="ra ra-aware"></i> 			<span class="val statmind"></span></div></div>
						<div class="col3"><div class="stat"><i class="ra ra-player-teleport"></i> 	<span class="val statspirit"></span></div></div>
					</div>

					<div class="stat"><i class="ra ra-all-for-one "></i> Weapon Effectiveness: <span class="val statweapon"></span></div>
					<div class="stat"><i id="stataffinityicon" class=""></i> <span class="stataffinityelem"></span> <span class="val stataffinity"></span></div>
				</div>

				<div class="stats resistances colrow">
					<div class="col3">
						<div class="stat"><i class="ra ra-fire-symbol"></i> 		<span class="val statheatresist"></span></div>
						<div class="stat"><i class="ra ra-snowflake"></i> 			<span class="val statcoldresist"></span></div>
					</div>
					<div class="col3">
						<div class="stat"><i class="ra ra-lightning-bolt"></i>  	<span class="val statsprkresist"></span></div>
						<div class="stat"><i class="ra ra-broadhead-arrow"></i> 	<span class="val statpierceresist"></span></div>
					</div>
					<div class="col3">
						<div class="stat"><i class="ra ra-sword"></i> 				<span class="val statslashresist"></span></div>
						<div class="stat"><i class="ra ra-large-hammer"></i> 		<span class="val statcrushresist"></span></div>
					</div>
				</div>

				<div class="stats social">
					<div class="colrow">
						<div class="col3"><div class="stat"><i class="ra ra-cycle"></i> 	<span class="val statpersuasion">0</span></div></div>
						<div class="col3"><div class="stat"><i class="ra ra-diamond"></i>  	<span class="val statbartering">0</span></div></div>
						<div class="col3"><div class="stat"><i class="ra ra-hood"></i> 		<span class="val statthievery">0</span></div></div>
					</div>
				</div>

				<div class="stats traits"><div class="attr">There's nothing here...</div></div>
				<div class="stats skills"><div class="attr">There's nothing here...</div></div>
			</div>
			<div class="build creator" onclick=""><i class="ra ra-player-lift"></i></div>	
			<div class="build randomizer" onclick="randChar(this, <?=$i?>)"><i class="ra ra-perspective-dice-one"></i></div>	
		</div>
	<?php endfor; ?>
	</div>

</div>

<script type="text/javascript">

	// OPEN PARTY
	/*===================================================================*/
	var isPartyOpen = false;
	function openParty(el) {
		if (!isPartyOpen) {
			$('.main-card .action-menu .action-item').removeClass('current');
			$(el).addClass('current');

			for (var i=0; i<partyChars.length; i++) setChar(i);

			closeMainMenu(function () {
				outFocus(true, function() {
					$('.menu-party').addClass('open');
					isPartyOpen = true;
				});
			});
		} else {
			$('.main-card .action-menu .action-item').removeClass('current');
			outFocus(false, function () {		
				$('.menu-party').removeClass('open');
				isPartyOpen = false;
			});
		}
	}

</script>