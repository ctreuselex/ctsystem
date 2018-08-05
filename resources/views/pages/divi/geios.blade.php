@extends('templates.single-swiper')

@section('metas')
	<?php
		$imgCnt = 5;
	?>

	<script type="text/javascript">
		var mdColor = '#69B027';
		var sdColor = '#D8A71C';
	</script>
@stop

@section('slides')
	@for($i=1; $i<=$imgCnt; $i++)
	    <?php
	        $url = 'img/divi/gei/divi'.'%20('.$i.').jpg';
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

@section('title') <img src="{{ url('img/divi/gei-grey.png') }}"> Geios @stop
@section('tag') The division of Earth, Spring, and Wealth @stop
@section('cont') 
	<br>
	<p>The richest and wealthiest division is not in fact the Dominion, but Geios. The higher ring of Geios is even richer than whole of Mystos combine, making the Geios, as a whole, even richer than all of Mirrorplane.</p>
	<p class="head">Rings of Gold</p>
	<p>Much like Aeros, all rings of Geios are very alike, but unlike Aeros, the rings are all wealthy with at least four more trees for every person living there. Half forest, half city, though one would assume that with all the leaves and twigs falling on the roads of Geios makes it acceptable to be filthy but it's not. Geios have the most trees per houses in the entire city, are very well educated, and very strict when it comes to taking care of their surroundings. Tree-huggers, they are called, and they'll also let the tree stab you in the face if they see you throwing your trash irresponsibly. </p>
	<p class="head">Recurssions and Graduations</p>
	<p>Geios is responsible for the "Shifting" of the Myst Core to the next Division Pedestal every recurssion. Being reputable of being able to take care of thing gets them that kind of priviledge. They also held the graduation of the students of the Institute during the first of Spring, congratulating them for six cycles of passion, crying, and hard work. </p>
	<p class="head">Myst-based Weapon Manufacturers</p>
	<p>Tauroscence Corporations, and eventually; Landar Industries established themselves within Geios. The focus towards innovation and efficiency which are extremely high within its borders really helped both company find their calling within the city. </p>
	<p class="head">Geios Division of the Institute</p>
	<p>Geios' practices Cirkunesi, but due to the fact that it's very rare, they consider Extenebri as well. But Cirkunesi will always be the priority. </p>
@stop