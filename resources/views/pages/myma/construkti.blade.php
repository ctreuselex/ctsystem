@extends('templates.single')

@section('metas')
	<script type="text/javascript">
		var heroImage = 'https://cdna.artstation.com/p/assets/images/images/011/152/034/large/billy-christian-geomorpher-mollisa-reg-post.jpg?1528120408';
		var mdColor = '#69B027';
		var sdColor = '#D8A71C';
	</script>
@stop

@section('title') Cirkunesi: Construkti @stop
@section('tag') "We Built this City on Rock & Roll" @stop
@section('cont') 
	<p class="head">ORIGIN</p>
	<p>Being known for having superiority complex, Rudimenti just can't let anyone have it. Shortly after the discovery of Extenebri and the development of the CTsystem, Gliciero Quivince, a loyal member of the Dominion developed a way to maximize the power of Rudimenti (or any form of Myst manipulation) by invoking what he calls a "Sigil", which allows the invoker to open a window directly to the Myst Core; granting them near limitless capabilities.</p>
	<p class="head">PRACTICE</p>
	<p>With such promise of power, invoking a sigil is no trivial matter. Even the creation of the sigil requires perfect conception otherwise it will simply be a useless drawing. Aside from the massive requirement of drawing skills, knowledge of the Myst Core's "languange" is also need as the invoker must establish what they want to accomplish with the invoked sigil before the Myst Core even allows them to open the window. And most of the time, the Myst Core does not answer to simple problems.</p>
	<p>Being a demanding task. Very few Sigiati exists in the entire city. But they are very well feared.</p>
	<p>
		<myma class="showname showdes">construction</myma>
		<myma class="showname showdes">extension</myma>
	</p>
	
    <script src="{{ url('js/myma.js') }}"></script>
@stop