@extends('dash.template')

<!-- MAIN -->
@section('main')
	<div class="sidebar">
		<div class="title">Mirrorplane Dash</div>
		<?php foreach ($menus as $key => $menu) : ?>
			<?php if ($menu['link'] != '') : ?> <a href="{{ $menu['link'] }}"> <?php endif ?>
				<div class="menu {{ $menu['type'] }}"> <i class="{{ $menu['icon'] }}"></i> {{ $menu['name'] }} </div>
			<?php if ($menu['link'] != '') : ?> </a> <?php endif ?>
		<?php endforeach ?>
	</div>

	<div class="frame">
		<div class="loader">
			<div class="flex">
				<div class="row">

					<div class="box">
						<div class="flex">
							<div class="row">
								<i class="fas fa-cog"></i>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<iframe src=""></iframe>	
	</div>
@stop