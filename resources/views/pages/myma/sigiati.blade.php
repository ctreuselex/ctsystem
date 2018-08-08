@extends('templates.single')

@section('metas')
	<script type="text/javascript">
		var heroImage = '<?=url('img/myma/sigiati.jpg')?>';
		var mdColor = '#4227B0';
		var sdColor = '#1EB7C9';
	</script>
@stop

@section('title') Rudimenti: Sigiati @stop
@section('tag') "Path to Limitless Power" @stop
@section('cont') 
	<p class="head">ORIGIN</p>
	<p>Being known for having superiority complex, Rudimenti just can't let anyone have it. Shortly after the discovery of Extenebri and the development of the CTsystem, Gliciero Quivince, a loyal member of the Dominion developed a way to maximize the power of Rudimenti (or any form of Myst manipulation) by invoking what he calls a "Sigil", which allows the invoker to open a window directly to the Myst Core; granting them near limitless capabilities.</p>
	<p class="head">PRACTICE</p>
	<p>With such promise of power, invoking a sigil is no trivial matter. Even the creation of the sigil requires perfect conception otherwise it will simply be a useless drawing. Aside from the massive requirement of drawing skills, knowledge of the Myst Core's "languange" is also need as the invoker must establish what they want to accomplish with the invoked sigil before the Myst Core even allows them to open the window. And most of the time, the Myst Core does not answer to simple problems.</p>
	<p>Being a demanding task. Very few Sigiati exists in the entire city. But they are very well feared.</p>
	<p>
		<myma class="showname showdes">sig01</myma>
	</p>
	
    <script src="{{ url('js/myma.js') }}"></script>
@stop