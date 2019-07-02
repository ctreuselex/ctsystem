@extends('templates.single')

@section('metas')
	<script type="text/javascript">
		var heroImage = 'https://cdnb.artstation.com/p/assets/images/images/000/243/537/large/dmitry-grebenkov-earth-mage.jpg?1412932039';
		var mdColor = '#69B027';
		var sdColor = '#D8A71C';
	</script>
@stop

@section('title') Cirkunesi @stop
@section('tag') "The City; within the Palm of your Hands" @stop
@section('cont') 
	<p class="head">ORIGIN</p>
	<p>Much like its sibling, Rudimenti, Cirkunesi has been practiced since the beginning of time. But unlike Rudimenti, Cirkunesi's development is well tracked as it only become more common later in history. Back then, Mystics has always been considered "destructive" because of their lack of control.</p>
	<p class="head">PRACTICE</p>
	<p>Cirkunesi is the art of controlling and manipulating matter with one's will. Like with the creation of matter, Cirkunesi also requires Myst to take action but requires less as it involves an already existing material.</p>
	<p>This does not mean that Cirkunesi is easier though, as it is in fact, requires much higher focus to do properly without simply throwing things around. And an even higher focus is required to be able to manipulate matter through finer details which are now a separate art called: Construkti.</p>
	<p>
		<myma class="showname showdes">manipulation</myma>
		<myma class="showname showdes">protection</myma>
		<myma class="showname showdes">perception</myma>
	</p>
	
    <script src="{{ url('js/myma.js') }}"></script>
@stop