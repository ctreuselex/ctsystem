@extends('templates.single-swiper')

@section('metas')
	<?php
		$imgCnt = 6;
	?>

	<script type="text/javascript">
		var mdColor = '#F3A40C';
		var sdColor = '#F54C04';
	</script>
@stop

@section('slides')
	@for($i=1; $i<=$imgCnt; $i++)
	    <?php
	        $url = 'img/divi/lum/divi'.'%20('.$i.').jpg';
	        $size = getimagesize(url($url));
	        $por = 300 / $size[1]; 
	        $height = $por * $size[1];
	        $width = $por * $size[0];
	    ?>
	    <div class="swiper-slide" style="width: {{ $width }}px; height: {{ $height }}px; ">
	        <img src="{{ url($url) }}" width="100%">
	    </div>
	@endfor
@stop

@section('title') <img src="{{ url('img/divi/lum.png') }}"> Luminos @stop
@section('tag') The division of Fire, Summer, and Power  @stop
@section('cont') 
	<br>
	<p>The warmest division in all of Mirrorplane, in which even the Children of Mandalas dare not to ruin the fun of summer by also joining in to the beach party whenever the cathedral is within its borders in the earlier half of the cycle. </p>
	<p class="head">Higher Ring | Corporal Works</p>
	<p>Luminos' high ring is an industrial wonder, pumping water from the lower rings and using it as a source of food and as beautiful landmarks such as; waterfalls. It's walls have a lot of open spaces and sand which are very coarse and gets everywhere, students who practices Armagi find such place ideal for their training. It is also the home of Corporal Works, and anyone who are interested in weaponry will always find the best deal in its marketplace. </p>
	<p class="head">Middle Ring</p>
	<p>Half flooded and warm weather, the middle ring of Luminos as actually an excellent place for vacation, and its people knows that and sells it very well. Boats and bridges are common place here due to the water dividing most part of the lands, and unless they actually want to swim from place to place, taking such routes is pretty much their only way. The middle ring is also where most of Luminos' population live. </p>
	<p class="head">Lower Ring</p>
	<p>Most of Luminos' lower ring is submerged in water, only excluding those tiny huts that floats above the actual division which they use for extraculicular fishing and sports. The only way to the underwater division is through tubes that run through the middle ring wall, which is, as every maintenance worker would say, the hardest part of their job. The tube is in fact an elevator and not just a regular tube to which one would expect he would need to jump in, this makes travelling through the tubes very expensive, which only the rich can afford. This results in the lower ring being the richest part of Luminos instead of the higher ring like the other divisions. </p>
	<p class="head">Luminos Division of the Institute</p>
	<p>The Luminos division of the Institute acquired the ancient form of Myst manipulation; Armagi, the practice of using weapons in conjuction with actual manipulations. </p>
@stop