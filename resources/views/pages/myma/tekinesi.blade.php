@extends('templates.single')

@section('metas')
	<script type="text/javascript">
		var heroImage = '<?=url('img/myma/tekinesi.jpg')?>';
		var mdColor = '#B027AE';
		var sdColor = '#3797D5';
	</script>
@stop

@section('title') Extenebri: Tekinesi @stop
@section('tag') "The Next Generation of Mystics" @stop
@section('cont') 
	<p class="head">ORIGIN</p>
	<p>It was the very first rendition of Extenebri. Tekenesi is the very art that created the CTsystem which the current population wouldn't be able to live without. It is also the main reason the Nexus became what is now known as the Dominion; they wanted it for themselves, but some guy named Lemaitre want to share it to the rest of the city like the nerd he is.</p>
	<p class="head">PRACTICE</p>
	<p>Tekinesi is not really considered a Mystic Art if you ask around. They'll say it's more of an extension to one's ability to hold a weapon. Now instead of just swinging a sword, or shooting a Myst-gun. Tekinesi allows them to augment their skills with Myst-based shenanigans. This is especially true with weapons from both Tauroscene Corp and Landars Industries as they make weapons that takes Tekinesi into account.</p>
	<p>In fact, the Tauroscene Corporation, only allows Tekinesi to use their weapons.</p>
	<p>
		<myma class="showname showdes">specialization</myma>
	</p>
	
    <script src="{{ url('js/myma.js') }}"></script>
@stop