@extends('templates.single-swiper')

@section('metas')
	<?php
		$imgCnt = 6;
	?>

	<script type="text/javascript">
		var mdColor = '#4227B0';
		var sdColor = '#1EB7C9';
	</script>
@stop

@section('slides')
	@for($i=1; $i<=$imgCnt; $i++)
	    <?php
	        $url = 'img/divi/mys/divi'.'%20('.$i.').jpg';
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

@section('title') <img src="{{ url('img/divi/mys.png') }}"> Mystos @stop
@section('tag') The division of Water, Winter, and Change @stop
@section('cont') 
	<br>
	<p>The division in which most of the best and talented people came from, or so the Dominion says as it's where Felix Zacharias, the founder of the Dominion, originated from. Everyone else, however, agreed that if there is something they are the best at; it's bragging. </p>
	<p class="head">Higher Ring | Nimbocolumbus</p>
	<p>Nimbocolumbus, the home of the Dominion; consists of mostly Mystos population. It was once what is considered the higher ring of Mystos until Zacharias decided that it needs to go higher and threw the whole place into the air. The only way up to the Nimbocolumbus is through a circular flight of stairs within the Mystos division of the Institute, which also requires extensive indentification protocols, including background check, scanning of criminal records, checking of diseases, scanning of criminal records of your dog, and more, and can take several days to be validated. Plus, losing a thousand of calories from walking up the thousand steps of death. Most would rather not, seeing that almost everyone they'll meet up there are assholes anyway. </p>
	<p class="head">Middle Ring | Mandalas Cathedral</p>
	<p>The middle ring of Mystos is fairly normal and non-elitist. The middle wall is also where half of the revolving Mandalas Cathedral is located; home of the Children of Mandalas, originally formed by Felix Zacharias and Gliciero Quivince back in 1656 as an external base of operations for their regime, but now serves the polar opposite of what it's supposed to represent. </p>
	<p class="head">Lower Ring</p>
	<p>Mystos' lower ring has quite the same condition as Aeros, tall buildings and overpopulated. Aeros really can't keep their dirt on themselves they had to drag Mystos as well. However, a mysterious disease had set its foot exclusively on Mystos in the past few cycles, known as "Rot". Nobody is sure where or when it came to be, but they are sure that whoever have it, will never be allowed to come in contact with anyone else, ever again. </p>
	<p class="head">Mystos Division of the Institute</p>
	<p>Mystos acquires all the entry applicants for the Institute and interviews begin on the 10th of Fall then those who are accepted will begin their semester on the 1st of Winter. </p>
	<p class="head"></p>
	<p>The Institute's Mystos Division practices Rudimenti, the most pure form of Myst Manipulation, aside from Extenebri of course, but that was just invented. </p>
@stop