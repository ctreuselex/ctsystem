@extends('templates.single')

@section('metas')
	<script type="text/javascript">
		var heroImage = '<?=url('img/divi/lum/divi (6).jpg')?>';
		var mdColor = '#F3A40C';
		var sdColor = '#F54C04';
	</script>
@stop

@section('title') Luminos: Bluebloods @stop
@section('tag') "Rolling in the Deep" @stop
@section('cont') 
	<p class="head">ABOUT</p>
	<p>Unlike the other divisions, the richer population of Luminos does not live in the higher ring, instead they decided to live deep under the water that flooded the lower ring of Luminos from long ago.</p>
	<p>They are the first show-offs according to pretty much everyone you can ask. But they have been <i>upstaged</i> by Mystos by a longshot. But the Bluebloods had become extremely patient people who likes to live life in the slowest possible pace, allowing Mystos to have their fun for while.</p>
	<p class="head">SPECIAL TRAITS</p>
	<p class="special-traits"></p>
	
    <script src="{{ url('js/trts.js') }}"></script>
    <script type="text/javascript">
    	var traitlist = printSpecialTraits('blueblood');
    	$('.special-traits').html(traitlist);
    </script>
@stop