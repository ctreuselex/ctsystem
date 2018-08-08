@extends('templates.single')

@section('metas')
	<script type="text/javascript">
		var heroImage = '<?=url('img/myma/agriconti.jpg')?>';
		var mdColor = '#4227B0';
		var sdColor = '#1EB7C9';
	</script>
@stop

@section('title') Rudimenti: Agriconti @stop
@section('tag') "Food for Thought" @stop
@section('cont') 
	<p class="head">ORIGIN</p>
	<p>The very first thing Mystics are ever been thought of as useful is with their discovery of Agriconti. With the city's resources beginning to dwindle, they sat down and think "Well Fuck. We'll have to make our ow now."</p>
	<p class="head">PRACTICE</p>
	<p>Even by today, Agriconti is still considered as the most noble form of Myst manipualtion, as it is the creation of food that the populace actually consume and depend on to strive. Without it, the city would be nothing but rubble.</p>
	<p>However, not a lot of people think of Agriconti very highly now that manufacturers began to rise up and take their jobs with automated resource-conjuring tech shenanigans, and the elitist culture the Rudimenti developed for themselves does not help either. Still, pretty much 85% of the richest people in the city are Agriconti (including the manufacturers themselves.)</p>
	<p>
		<myma class="showname showdes">agr01</myma>
		<myma class="showname showdes">agr02</myma>
	</p>
	
    <script src="{{ url('js/myma.js') }}"></script>
@stop