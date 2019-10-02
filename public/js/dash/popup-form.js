
// CREATE POPUP 
/*===================================================================*/
function createPopupForm( form = function() {} ) {
	var cont = '';

	cont += '<div class="popup">';
	cont += 	'<div class="flex">';
	cont += 		'<div class="row">';
	cont += 			'<div class="box">';
	cont += 				'<div class="popup-close"><i class="fas fa-times"></i></div>';
	cont +=					form();
	cont += 			'</div>';
	cont += 		'</div>';
	cont += 	'</div>';
	cont += '</div>';

	return cont;
}

function openPopup() {
	$('.popup').fadeIn('fast', function() {
		$(this).addClass('open');
		// var height = $('.popup .box').height();
		// $('.popup .box .scroll').height(height - 55);
	});
}

function closePopup(button = null) {
	$(button).removeClass('active');
	$('.popup').fadeOut('fast', function() {
		$('.popup').removeClass('open');
		setTimeout( function() { $('.popup').remove(); }, 300);
	});
}

// INPUT BOX
/*===================================================================*/
function inputBox(box) {
	$('.input-box', box).each(function() {
		var el = $(this);

		$('input, textarea', el)
			.focusin( function() {
				$(el).addClass('focus'); })
			.focusout( function() {
				$(el).removeClass('focus'); })
			.on('change', function() {
				var cont = $(this).val();
				if (cont == '') $(el).removeClass('filled');
				else $(el).addClass('filled');
			});

		if ( $('input, textarea', el).val() != '' ){
			$(el).addClass('filled');
		}
	
	});
}

// POPUP FUNCTION 
/*===================================================================*/
function setupPopupForm(options) {
	options['btn'].on('click', function() {
		//ADD
		if (options['method'] == 'POST') {
			popupTitle = "Add New " + options['title'];
			diamondClass = 'add';
			diamondText = options['title'] + " Added!"; }

		//EDIT
		if (options['method'] == 'PUT') {
			popupTitle = "Edit " + options['title'];
			diamondClass = 'edt';
			diamondText = options['title'] + " Saved!"; }

		var button = $(this)
		$(button).addClass('active');

		$('body').append( 
			createPopupForm(
				function() {
					var cont = '';

					cont += '<div class="title">' + popupTitle + '</div>';
					cont += '<div class="scroll">';

					for (var i=0; i<options['inputs'].length; i++) {
						var input = options['inputs'][i];
						cont += '<div class="input-box ' + input['type'] + '">';
						cont += 	'<label>' + input['name'] + '</label>';

						if (input['type'] == 'textarea') {
							if (options['data']) cont += '<textarea id="' + input['tag'] + '">' + options['data'][input['tag']] + '</textarea>';
							else cont += '<textarea id="' + input['tag'] + '"></textarea>';

						} else {
							if (options['data']) cont += '<input id="' + input['tag'] + '" type="' + input['type'] + '" value="' + options['data'][input['tag']] + '" autocomplete="off">';
							else cont += '<input id="' + input['tag'] + '" type="' + input['type'] + '" value="" autocomplete="off">';
						}

						cont += '</div>';
					}

					cont += '<div class="input-box submit">';
					cont += 	'<i class="fas fa-cog"></i>';
					cont += 	'<input type="submit" value="Save">';
					cont += '</div>';
					cont += '</div>';

					return cont;
				})
		);

		setTimeout( function() {
			openPopup();
			inputBox( $('.popup') );
			$('.popup .popup-close').on('click', function() { closePopup( $(button) ) });

			$('.popup input[type="submit"]').on('click', function() {
				var btn = $(this);
				$(btn).parent().addClass('load');

				var data = {};
				data['_token'] = $('meta[name="csrf-token"]').attr('content');

				for (var i=0; i<options['inputs'].length; i++) {
					var tag = options['inputs'][i]['tag'];
					data[tag] = $('.popup #' + tag).val();
				}

	            $.ajax({
	                type: options['method'],
	                url: options['link'],
	                data: data,
			        success: function(response) {
			        	mainData = response;
			        	loadData();
			        	closePopup( $(button) );

				    	diamondPop({
				    		class: diamondClass,
				    		text: diamondText,
				    		buttons: [
								{ text: 'Okay', id: 'okay', func: function() { closeDiamondPop() } },
							]});
			      	},
		            error: function(xhr,ajaxOptions,throwError) {
						alert(throwError);
		    		},
		            complete: function(){
						$(btn).parent().removeClass('load');
			      	}
			    });
		    });

		}, 100);

	})
}

// DIAMOND POP
/*===================================================================*/
var diamondButtons = {};
function diamondPop(options) {
	var cont = '';

	cont += '<div class="diamond-pop ' + options['class'] + '">';
	cont += 	'<div class="flex">';
	cont += 		'<div class="row">';

	cont += 			'<div class="box">';
	cont += 				'<div class="flex">';
	cont += 					'<div class="row">';
	cont += 						'<div class="center">';
	cont +=								'<div class="text">' + options['text'] + '</div>';

	for (var i=0; i<options['buttons'].length; i++) {
		var btn = options['buttons'][i];
		cont +=	'<div class="btn" id="' + btn['id'] + '">';
		cont +=		btn['text'];
		cont += '</div>';
	}

	cont += 						'</div>';
	cont += 					'</div>';
	cont += 				'</div>';

	cont += 			'</div>';
	cont += 		'</div>';
	cont += 	'</div>';
	cont += '</div>';

	$('body').append(cont);
	setTimeout( function() {
		openDiamondPop();

		diamondButtons = options['buttons'];
		$('.diamond-pop .btn').on('click', function() {
			var id = $(this).attr('id');
			data = getData(id, diamondButtons);
			data.func();
		});
	},100);
}	

function openDiamondPop() {
	$('.diamond-pop').fadeIn('fast', function() {
		$(this).addClass('open');
		// var height = $('.popup .box').height();
		// $('.popup .box .scroll').height(height - 55);
	});
}

function closeDiamondPop(button = null) {
	$(button).removeClass('active');
	$('.diamond-pop').fadeOut('fast', function() {
		$('.diamond-pop').removeClass('open');
		setTimeout( function() { $('.diamond-pop').remove(); }, 300);
	});
}