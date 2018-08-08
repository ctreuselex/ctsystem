@extends('templates.single')

@section('metas')
	<script type="text/javascript">
		var heroImage = '<?=url('img/myma/vuidemorti.jpg')?>';
		var mdColor = '#B027AE';
		var sdColor = '#3797D5';
	</script>
@stop

@section('title') Extenebri: Vuidemorti @stop
@section('tag') "From the Void, to the Void" @stop
@section('cont') 
	<p class="head">ORIGIN</p>
	<p>Yet another current addition to the Mystic Arts. Also coming from Aeros, which is suspiciously becoming a breeding ground for these kind of stuff. Vuidemorti is only a term coined after evidences left after murders commited by the "Order". Though, some say that the art is as old as the likes of Rudimenti and that the Order's assassins are only getting sloppier by time.</p>
	<p class="head">PRACTICE</p>
	<p>From what is known of it, Vuidemorti is the complete removal of Myst in an area, causing Mystlock to people affected and rapid decaying to other material in the area. Mystlock includes dizziness, nausea, and lack of Myst, which might lead to death if not returned to normal quantities after a certain time.</p>
	<p>
		<myma class="showname showdes">vui01</myma>
	</p>
	
    <script src="{{ url('js/myma.js') }}"></script>
@stop