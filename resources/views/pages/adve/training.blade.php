@extends('templates.inner')

@section('main')
	<?php
		$randomSky = $_GET['skies'];

		$mColor = $skyStatus[$randomSky]['mcolor'];
		$sColor = $skyStatus[$randomSky]['scolor'];
	?>

    <script src="{{ url('js/orig.js') }}"></script>
    <script src="{{ url('js/myma.js') }}"></script>
    <script src="{{ url('js/getr.js') }}"></script>
    <script src="{{ url('js/char.js') }}"></script>
    <script src="{{ url('js/field.js') }}"></script>

	<div id="dbright" class="diamond block"></div>
	<div id="dbleft" class="diamond block"></div>
	<!-- <div class="main-field"> -->
		<div class="field"></div>
	<!-- </div> -->

	<script type="text/javascript">
		var baseUrl = "<?=url('/')?>";
		var mirChars = <?=json_encode($mirChars)?>;
        var charAffinities = <?=json_encode($charAffinities)?>;
        var charTraits = <?=json_encode($charTraits)?>;
        var charWeapons = <?=json_encode($charWeapons)?>;
        var charSkills = <?=json_encode($charSkills)?>;
        var charStatus = <?=json_encode($charStatus)?>;
        var charGround = <?=json_encode($charGround)?>;

        var mColor = "<?=$mColor?>";
        var sColor = "<?=$sColor?>";

		$(window).on('load', function() {
			generateField({
				el: '.field', 
				elsize: 800, 
				width: 11, 
				height: 8,
			});

			diamondDes('#dbright', {
				top: 0,
				left: 40,
				size: 800,
				color: sColor,
				glow: true,
				animation: 'diamondDashRight 0.5s',
				delay: 250 });
			diamondDes('#dbleft', {
				top: -10,
				left: -15,
				size: 1000,
				color: mColor,
				glow: true,
				animation: 'diamondDashLeft 0.5s',
				delay: 500 });
		});
	</script>
@stop


