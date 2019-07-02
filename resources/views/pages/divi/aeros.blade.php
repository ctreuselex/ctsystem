@extends('templates.single-swiper')

@section('metas')
	<?php
		$imgCnt = 7;
	?>

	<script type="text/javascript">
		var mdColor = '#B027AE';
		var sdColor = '#FF9800';
	</script>
@stop

@section('slides')
	@for($i=1; $i<=$imgCnt; $i++)
	    <?php
	        $url = 'img/divi/aer/divi'.'%20('.$i.').jpg';
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

@section('title') <img src="{{ url('img/divi/aer-grey.png') }}"> Aeros @stop
@section('tag') The division of Air, Autumn, and Freedom @stop
@section('cont') 
	<br>
	<p>The division of Aeros is the most crowded in the entire city, causing the houses to be stacked on top of each other, bringing a lot of vertical space and momentum to the entire division. This also, results in many shady businesses and secret organizations, especially in the deeper parts of the streets that the light doesn't reach.</p>
	<p class="head">Rings of Smoke</p>
	<p>The classification between the rings of Aeros is really blurred, due to their population problems resulting to structural problems, one wouldn't even be able to distiguish if they've left the ring and entered the other. Most of the population are of the working class, working for different companies from the other divisions, also serving as the cheapest laborers in town since they'd rather get paid in coins than not get paid at all.</p>
	<p class="head">Tall Structures</p>
	<p>Buildings in Aeros are so tall they can be seen from any where in Mirrorplane. This is where they collide with the Dominion who are doing they're best, humane or not, to keep the population of Aeros as low as possible; as the lower their population is, the less likely they will stack a house on top of another and reach the Nimbocolumbus by foot. As chaotic is the upper parts of these buildings seem, the lower parts, where it's always night time, is where the real chaos strives in.</p>
	<p class="head">The Great Aeros Fire</p>
	<p>In 1666, a large fire which ate half of what supposed to be the middle ring of Aeros has occured, killing hundreds of people, and leaving thousands homeless and hopeless. Some witnesses says that the fire is caused by a bird-like Mare which was brought up by a cult that worshipped it. Evidences has been gathered and the recovered burned robes and scriptures that are barely readable might lead to it being true. One more evidence is a ground fit for a ritual, which required two sacrifices. Though it is unknown if a ritual actually occured in place, but it sure is in the heart of the fire.</p>
	<p class="head">Carnival of Madness</p>
	<p>Every two cycles, a the Carnival of Madness lights up within the heart of the Great Aeros Fire to bring people back to its ground. It serves as a remembrance to those who were lost during the times of flames and as a way to liven the place up back from its barren ground.</p>
	<p class="head">Aeros Division of the Institute</p>
	<p>After Frederick Lemaitre and his first protégé, Jon Horacio, the Aeros division of the Intitute built themselves on Extenebri, the practice of manipulating Myst by itself without a medium. this also served to be really useful to their situation, as with the lack of actual material to use. </p>
@stop