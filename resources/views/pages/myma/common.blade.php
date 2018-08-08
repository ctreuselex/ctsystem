@extends('templates.single')

@section('metas')
	<script type="text/javascript">
		var heroImage = '<?=url('img/myma/common.jpg')?>';
		var mdColor = '#17ce60';
		var sdColor = '#1EB7C9';
	</script>
@stop

@section('title') Material Affinity: Common @stop
@section('tag') "Powerful, Versatile, and most of all, Understandable" @stop
@section('cont') 
	<p>All types of affinities, common, rare, or even unknown exists in every division of Mirrorplane, but these are the most common ones based on division:</p>
	<div class="row">
		<div class="col col-xs-3">
			<p class="head no-indent">Luminos</p>
			<affi class="showname">fire</affi>
			<affi class="showname">water</affi>
			<affi class="showname">air</affi>
			<affi class="showname">light</affi>
			<affi class="showname">plant</affi>
		</div>
		<div class="col col-xs-3">
			<p class="head no-indent">Aeros</p>
			<affi class="showname">fire</affi>
			<affi class="showname">electric</affi>
			<affi class="showname">air</affi>
			<affi class="showname">metal</affi>
			<affi class="showname">frost</affi>
		</div>
		<div class="col col-xs-3">
			<p class="head no-indent">Mystos</p>
			<affi class="showname">fire</affi>
			<affi class="showname">water</affi>
			<affi class="showname">frost</affi>
			<affi class="showname">electric</affi>
			<affi class="showname">light</affi>
		</div>
		<div class="col col-xs-3">
			<p class="head no-indent">Geios</p>
			<affi class="showname">earth</affi>
			<affi class="showname">metal</affi>
			<affi class="showname">water</affi>
			<affi class="showname">plant</affi>
			<affi class="showname">light</affi>
		</div>
	</div>
	
    <script src="{{ url('js/affi.js') }}"></script>
@stop