@extends('templates.single')

@section('metas')
	<script type="text/javascript">
		var heroImage = 'https://cdna.artstation.com/p/assets/images/images/003/096/452/large/joseph-meehan-bloodmist.jpg?1469628632';
		var mdColor = '#B0273A';
		var sdColor = '#37D55A';
	</script>
@stop

@section('title') Invorti @stop
@section('tag') "The Evolution of Anything or Anyone" @stop
@section('cont') 
	<p class="head">ORIGIN</p>
	<p>Is a rather unknown practice that has been rather frequently seen in the under belly of Aeros. Its entire existence is considered a taboo to most Mystics as it seem to corrupt the very matter it is used on. And the fact that being in proximity while the art is being practiced creates a deep feeling of doom which sets everyone away from it.</p>
	<p class="head">PRACTICE</p>
	<p>Invorti is the practice of transfiguration; turning matter into another. Though noble in its core, a decent competitor to the monopoly of Rudimenti, its use often leaves a mark called the "rot." Which is a liquid form of Myst that simply destroys everything in its path.</p>
	<p>The Psykeepers, along with the Children of Mandalas, has been hunting down anyone who practices the art. Especially, after the reports of using it on humans which turns them into living abominations whose only idea in mind: is to die.</p>
	<p>
		<myma class="showname showdes">transfiguration</myma>
		<myma class="showname showdes">transmutation</myma>
	</p>
	
    <script src="{{ url('js/myma.js') }}"></script>
@stop