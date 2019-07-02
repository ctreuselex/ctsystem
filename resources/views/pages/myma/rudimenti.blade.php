@extends('templates.single')

@section('metas')
	<script type="text/javascript">
		var heroImage = 'https://cdna.artstation.com/p/assets/images/images/008/775/484/large/alexandre-chaudret-bra-prophetie-royaume-lur-final-viewer.jpg?1515236222';
		var mdColor = '#4227B0';
		var sdColor = '#1EB7C9';
	</script>
@stop

@section('title') Rudimenti @stop
@section('tag') "The Creation of Matter, the Creation of Life" @stop
@section('cont') 
	<p class="head">ORIGIN</p>
	<p>Rudimenti is the most basic art of Myst Manipulation and has been practiced even before the actual creation of the city. No one is certain about its true origin and who first discovered it but it has been common knowledge that there are multiple instances of its discovery throughout history.</p>
	<p class="head">PRACTICE</p>
	<p>It is the creation of matter using the raw energy of Myst. Most Mystics are limited to their material affinity when it comes to what they can create, and without Cirkunesi, they are also not able to shape their creation to their will, leading to disastrous outcomes.</p>
	<p>Rudimenti is the only source of new materials coming in to the city, which makes them essential to the survival of the entire population. This alone, makes them extremely valuable which often lead to the development of their snobby behaviour (see: Dominion).</p>	
	<p>
		<myma class="showname showdes">generation</myma>
		<myma class="showname showdes">creation</myma>
		<myma class="showname showdes">duplication</myma>
	</p>
	
    <script src="{{ url('js/myma.js') }}"></script>
@stop