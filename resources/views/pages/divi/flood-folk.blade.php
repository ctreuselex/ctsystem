@extends('templates.single')

@section('metas')
	<script type="text/javascript">
		var heroImage = '<?=url('img/divi/lum/divi (3).jpg')?>';
		var mdColor = '#F3A40C';
		var sdColor = '#F54C04';
	</script>
@stop

@section('title') Luminos: Flood Folk @stop
@section('tag') "Where the Best and <i>Only</i> Beaches can be Found" @stop
@section('cont') 
	<!-- <p class="head">AROUND THESE PARTS</p>
	<p>The Flood Folk lives within the higher and middle ring of Luminos. Flooded by the continiously falling water from the Institute, the structures are made to withstand increadibly high pressure. The houses are usually above water and grows by being stack on top of another.</p>
	<p>It's quite imposible to travel around by foot so the Flood Folk uses boats to get around their area.</p> -->
	<p class="head">ABOUT</p>
	<p>Almost born in water, the Flood Folk are very familiar and at home when they are near a body of water. Due to the consistently warm temparature within Luminos, most of them pretty much lives underwater despite not being able to breathe in it.</p>
	<p>They are found in the above-water-houses within the higher and middle ring of Luminos.</p>
	<p class="head">SPECIAL TRAITS</p>
	<p class="special-traits"></p>
	
    <script src="{{ url('js/trts.js') }}"></script>
    <script type="text/javascript">
    	var traitlist = printSpecialTraits('flood-folk');
    	$('.special-traits').html(traitlist);
    </script>
@stop