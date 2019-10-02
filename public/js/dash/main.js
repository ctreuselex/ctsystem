
$.ajaxSetup({
	headers: {
		'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
	}
});

// PAGE CHANGE 
/*===================================================================*/

$(document).on('click', 'a', function(event){
    event.preventDefault();

	var menuLink = $('.dash .sidebar a');
	var mainFrame = $('.dash .frame');

    var link = $(this).attr('href');
	$('iframe', mainFrame).attr('src', link);

	$('.menu', menuLink).removeClass('active');
	$('.menu', this).addClass('active')

	$(mainFrame).addClass('load');
	$('iframe', mainFrame).on('load', function() {
		setTimeout( function() {
			$(mainFrame).removeClass('load');
		}, 300);
	})
});

// CREATE TABLE
/*===================================================================*/
function createTable(options) {
	var cont = '';

	cont += '<div class="head">';
	cont += 	getHeads();
	cont += '</div>';
	cont += '<div class="cont">';
	for (var i=0; i<options['data'].length; i++) {
		cont += '<div class="row">';
		cont += 	getRowData( options['data'][i] );
		cont += '</div>';
	}
	cont += '</div>';

	$(options['el']).html(cont);
	setTimeout( function() {
		setButtonInteractions();
	}, 100);

	function getHeads() {
		var cont = '';

		for (var i=0; i<options['columns'].length; i++) {
			var column = options['columns'][i];

			cont += '<div class="col">';
			cont += 	column['name'];
			cont += '</div>';
		}

		cont += '<div class="col"></div>';
		return cont;
	}

	function getRowData(row) {
		var cont = '';

		for (var i=0; i<options['columns'].length; i++) {
			var column = options['columns'][i];

			cont += '<div class="col ' + column['tag'] + '">';
			if (column['color'] != '') cont += column.print( row[ column['tag'] ], row[ column['color'] ] );
			else cont += 	column.print( row[ column['tag'] ] );
			cont += '</div>';
		}

		cont += '<div class="col btn-box">';
		cont +=		'<div class="btn edt" id="' + row['id'] + '"><i class="fas fa-edit"></i></div>';
		cont +=		'<div class="btn dlt" id="' + row['id'] + '"><i class="fas fa-trash"></i></div>';
		cont += '</div>';
		return cont;
	}

	function setButtonInteractions() {

		// EDIT ROW
		$('.btn.edt', options['el']).each( function() {
			var btn = $(this);
			var id = $(btn).attr('id');
			popupEdit( $(btn), id );
		});

		// DELETE ROW
		$('.btn.dlt', options['el']).on('click', function() {

			var btn = $(this);
			$(btn).addClass('active');
			var id = $(btn).attr('id');

	    	diamondPop({
	    		class: 'dlt',
	    		text: 'Delete ' + options['title'] + '?',
	    		buttons: [
					{ text: 'Yep', id: 'yes', func: function() { deleteData( options['link'] + '/' + id ) } },
					{ text: 'Nope', id: 'no', func: function() { closeDiamondPop( $(btn) ) } },
				]});
	    });
	}
}

function deleteData(link) {
	var data = {};
	data['_token'] = $('meta[name="csrf-token"]').attr('content');

	$.ajax({
        type: 'DELETE',
        url: link,
        data: data,
        success: function(response) {
        	mainData = response;
        	loadData();
        	closeDiamondPop();
      	},
        error: function(xhr,ajaxOptions,throwError) {
			alert(throwError);
		},
        complete: function(){
      	}
    });
}

// CREATE GRID
/*===================================================================*/
var mirrorGrid = {
	main: this,
	options: {
		el: null,
		title: 'Default',
		gridColumns: 6, 
		gridSpacing: 10,
		gridHeight: 300,
		gridColors: { top: 'color', bot: 'color', ico: 'color', cat: 'color' },
		gridContent: [
			{ name: 'name', tag: 'name' },
		],
		data: null,
		addData: {
			method: 'POST',
			title: "Add New",
			alertSuccess: "Added!",
			alertFail: "Fail to add!",
			inputs: [
				{ name: 'name', tag: 'name', type: 'text' },
			],
			link: window.location.pathname,
		},
		editData: {
			method: 'PUT',
			title: "Edit",
			alertSuccess: "Saved!",
			alertFail: "Fail to save!",
			inputs: [
				{ name: 'name', tag: 'name', type: 'text' },
			],
			baseLink: window.location.pathname,
		},
		deleteData: {
			alertQuestion: "Delete?",
			alertSuccess: "Deleted!",
			link: window.location.pathname,
		},
	},
	init: function(options) {
		$.extend(this.options, options);
		this.options.el.addClass('mirror-grid');
		this.options.el.html('');
		this.options.el.append( this.setHead() );
		this.options.el.append( this.setGrid() );
		this.loadBoxes();

		this.popup.main = this;
		this.popup.el = options.el;
		this.diamondAlert.main = this;
		this.diamondAlert.el = options.el;
		this.setGridInteractions();
	},
	setHead: function() {
		var cont = '';
		cont += '<div class="head">';
		cont += 	this.options.title;
		cont += 	'<div class="btn add"><center><i class="fas fa-plus"></i> Add New</center></div>';
		cont += '</div>';
		return cont;
	},
	setGrid: function() {
		var cont = '';
		cont += '<div class="grid">';
		cont += '</div>';
		return cont;
	},
	setGridInteractions() {
		var self = this;
		$('.btn.add', this.options.el).on('click', function() {
		 	self.popup.setup( self.options.addData );
		});
	},

	loadBoxes: function() {
		var grid = $('.grid', this.options.el);
		var data = this.options.data;

		for (var i=0; i<data.length; i++) {
			var item = data[i];
			var box = $('.box#' + item['id'], grid);
			if ( box.length == 0 ) {
				$(grid).append( this.getBox(item, i) );
				box = $('.box#' + item['id'], grid);
				this.setBoxInteractions( box );
				this.popup.popOut();
			} else {
				this.updateBox(box, item);
				$(box).css('top', this.getBoxTop(i));
				$(box).css('left', this.getBoxLeft(i));
				this.popup.popOut();
			}
		}

		$('.box', grid).each( function() {
			var id = $(this).attr('id');
			if (!getData(id, data)) $(this).remove();
		})
	},
	getBox: function(item, i) {
		var cont = '';
		cont += '<div class="box" id="' + item['id'] + '" ';
		cont += 	'style="';
		cont += 	'animation-delay: ' + (i * 0.1) + 's;';
		cont += 	'width: ' + this.getBoxSize() + 'px;';
		cont += 	'height: ' + this.options.gridHeight + 'px;';
		cont += 	'top: ' + this.getBoxTop(i) + 'px;';
		cont += 	'left: ' + this.getBoxLeft(i) + 'px;';
		cont += 	'margin-bottom: ' + this.options.gridSpacing + 'px;';
		cont += 	'border-top-color: ' + item[this.options.gridColors.top] + ';';
		cont += 	'border-bottom-color: ' + item[this.options.gridColors.bot] + ';';
		cont += 	'box-shadow: 0 0 10px ' + item[this.options.gridColors.bot] + ';';
		cont += 	'">';
		cont += 	'<div class="box-slash" style="';
		cont += 		'background-color: ' + item[this.options.gridColors.ico] + ';';
		cont += 		'box-shadow: 0 0 50px ' + item[this.options.gridColors.ico] + ';';
		cont += 		'"></div>';
		cont +=			this.getBoxData(item);
		cont += '<div class="btn-box">';
		cont +=		'<div class="btn shw" id="' + item['id'] + '"><i class="fas fa-expand"></i></div>';
		cont +=		'<div class="btn edt" id="' + item['id'] + '"><i class="fas fa-edit"></i></div>';
		cont +=		'<div class="btn dlt" id="' + item['id'] + '"><i class="fas fa-trash"></i></div>';
		cont += '</div>';
		cont += '</div>';
		return cont;
	},
	getBoxSize: function() { return (this.options.el.width() / this.options.gridColumns) - (this.options.gridSpacing * 2); },
	getBoxTop: function(i) { return Math.floor(i / this.options.gridColumns) * (this.options.gridHeight + this.options.gridSpacing) + this.options.gridSpacing; },
	getBoxLeft: function(i) { return (i % this.options.gridColumns) * this.getBoxSize() + (this.options.gridSpacing * (i % this.options.gridColumns + 1)); },
	getBoxData: function(item) {
		var cont = '';
		for (var i=0; i<this.options.gridContent.length; i++) {
			var content = this.options.gridContent[i];

			if (content['name'] == 'icon') {
				cont += '<div class="icon">';
				cont += 	'<i class="' + item[content['tag']] + '"/>';
				cont += '</div>';

			} else if (content['name'] == 'image') {
				cont += '<div class="image" style="';
				cont += 	'background-image: url(' + item[content['tag']] + ');';
				cont += 	'">';
				cont += '</div>';

			} else if (content['name'] == 'category') {
				cont += '<div class="category" style="';
				cont += 	'background-color: ' + item[this.options.gridColors.cat] + ';';
				cont += 	'">';
				cont += 	item[content['tag']];
				cont += '</div>';

			} else {
				cont += '<div class="cont ' + content['name'] + '">';
				cont += 	item[content['tag']];
				cont += '</div>';
			}
		}
		return cont;
	},
	updateBox: function(box, item) {
		$(box).css('border-top-color', item[this.options.gridColors.top]);
		$(box).css('border-bottom-color', item[this.options.gridColors.bot]);
		$(box).css('box-shadow', '0 0 10px ' + item[this.options.gridColors.bot]);
		$('.box-slash', box).css('background-color', item[this.options.gridColors.ico]);
		$('.box-slash', box).css('box-shadow', '0 0 10px ' + item[this.options.gridColors.ico]);

		for (var i=0; i<this.options.gridContent.length; i++) {
			var content = this.options.gridContent[i];

			if (content['name'] == 'icon') {
				$('.icon i', box).attr('class', item[content['tag']]);

			} else if (content['name'] == 'image') {
				$('.image', box).css('background-image', 'url(' + item[content['tag']] + ')');

			} else if (content['name'] == 'category') {
				$('.category', box).css('background-color', item[this.options.gridColors.cat]);
				$('.category', box).html(item[content['tag']]);

			} else {
				$('.cont.' + content['name'], box).html(item[content['tag']]);
			}
		}
	},
	setBoxInteractions: function(box) {
		var options = this.options;
		var popup = this.popup;
		var diamondAlert = this.diamondAlert;

		$('.btn.shw', box).on('click', function() {
			var id = $(this).attr('id');

			if ( $(box).hasClass('maximize') ) {
			 	$('.grid', options.el).removeClass('maximize');
			 	$('.grid .box', options.el).removeClass('maximize');
			 	setTimeout( function() { $(box).removeClass('top'); },300);
			 	$(this).html('<i class="fas fa-expand"></i>');
			} else {
			 	$('.grid', options.el).addClass('maximize');
			 	$('.grid', options.el).animate({ scrollTop: 0 }, 300);
			 	$(box).addClass('maximize');
			 	$(box).addClass('top');
			 	$(this).html('<i class="fas fa-compress"></i>');
			}
		});

		$('.btn.edt', box).on('click', function() {
			var id = $(this).attr('id');
			options.editData.data = getData(id, popup.main.options.data);
			options.editData.link = options.editData.baseLink + '/' + id;
		 	popup.setup( options.editData );
		});

		$('.btn.dlt', box).on('click', function() {
			var id = $(this).attr('id');

	    	diamondAlert.setup({
	    		class: 'dlt',
	    		text: options.deleteData.alertQuestion,
	    		buttons: [
					{ text: 'Yep', id: 'yes', func: function(self) { 
						var data = {};
						data['_token'] = $('meta[name="csrf-token"]').attr('content');

						$.ajax({
					        type: 'DELETE',
					        url: options.deleteData.link + '/' + id,
					        data: data,
					        success: function(response) {
				        		options.data = response;

						    	self.main.diamondAlert.setup({
						    		class: 'dlt',
						    		text: options.deleteData.alertSuccess,
						    		buttons: [
										{ text: 'Okay', id: 'okay', func: function(self) { self.popOut(); self.main.loadBoxes(); } },
									]
								});
					      	},
					        error: function(xhr,ajaxOptions,throwError) {
						    	self.main.diamondAlert.setup({
						    		class: 'dlt',
						    		text: throwError,
						    		buttons: [
										{ text: 'Okay', id: 'okay', func: function(self) { self.popOut(); } },
									]
								});
							},
					        complete: function(){
					      	}
					    }); 
					}},
					{ text: 'Nope', id: 'no', func: function(self) { self.popOut() } },
				]
			});
	    });
	},

	popup: {
		main: null,
		el: null,
		create: function( callback ) {
			var cont = '';
			cont += '<div class="popup">';
			cont += 	'<div class="flex">';
			cont += 		'<div class="row">';
			cont += 			'<div class="box">';
			cont += 				'<div class="close"><i class="fas fa-times"></i></div>';
			cont +=					callback();
			cont += 			'</div>';
			cont += 		'</div>';
			cont += 	'</div>';
			cont += '</div>';
			return cont;
		},
		popIn: function() {
			$('.popup', this.el).fadeIn('fast', function() {
				$('.popup', this.el).addClass('open');
			});
		},
		popOut: function() {
			$('.popup', this.el).fadeOut('fast', function() {
				$('.popup', this.el).removeClass('open');
				setTimeout( function() { $('.popup', this.el).remove(); }, 300);
			});
		},
		setup: function(options) {
			var self = this;
			self.el.append( 
				self.create( function() {
					var cont = '';
					cont += '<div class="title">' + options.title + '</div>';
					cont += '<div class="scroll">';

					for (var i=0; i<options.inputs.length; i++) {
						var input = options.inputs[i];
						cont += '<div class="input-box ' + input['type'] + '">';
						cont += 	'<label>' + input['name'] + '</label>';

						if (input['type'] == 'textarea') {
							if (options['data']) cont += '<textarea id="' + input['tag'] + '" rows="8">' + options['data'][input['tag']] + '</textarea>';
							else cont += '<textarea id="' + input['tag'] + '" rows="8"></textarea>';

						} else if (input['type'] == 'select') {
							if (options['data']) {
								cont += '<select id="' + input['tag'] + '" value="' + options['data'][input['tag']] + '">';
								cont += 	getSelectOptions(input['from'], options['data'][input['tag']]);
								cont += '</select>';
							} else { 
								cont += '<select id="' + input['tag'] + '" value="0">';
								cont += 	getSelectOptions(input['from']);
								cont += '</select>';
							}
						
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

			if (options.method == 'POST') diamondClass = 'add';
			if (options.method == 'PUT') diamondClass = 'edt';

			setTimeout( function() {
				self.popIn();
				inputBox( $('.popup') );
				$('.popup .close', self.el).on('click', function() { self.popOut() });

				$('.popup input[type="submit"]', self.el).on('click', function() {
					var btn = $(this);
					$(btn).parent().addClass('load');

					var data = {};
					data['_token'] = $('meta[name="csrf-token"]').attr('content');

					for (var i=0; i<options.inputs.length; i++) {
						var tag = options.inputs[i]['tag'];
						data[tag] = $('.popup #' + tag, self.el).val();
					}

		            $.ajax({
		                type: options.method,
		                url: options.link,
		                data: data,
				        success: function(response) {
				        	self.main.options.data = response;

					    	self.main.diamondAlert.setup({
					    		class: diamondClass,
					    		text: options.alertSuccess,
					    		buttons: [
									{ text: 'Okay', id: 'okay', func: function(self) { self.popOut(); self.main.loadBoxes(); } },
								]
							});
				      	},
			            error: function(xhr,ajaxOptions,throwError) {
					    	self.main.diamondAlert.setup({
					    		class: diamondClass,
					    		text: throwError,
					    		buttons: [
									{ text: 'Okay', id: 'okay', func: function(self) { self.popOut(); } },
								]
							});
			    		},
			            complete: function(){
							$(btn).parent().removeClass('load');
				      	}
				    });
			    });
			}, 100);
		},
	},
	diamondAlert: {
		main: null,
		el: null,
		popIn: function() {
			$('.diamond-alert', this.el).fadeIn('fast', function() {
				$('.diamond-alert', this.el).addClass('open');
			});
		},
		popOut: function() {
			$('.diamond-alert', this.el).fadeOut('fast', function() {
				$('.diamond-alert', this.el).removeClass('open');
				setTimeout( function() { $('.diamond-alert', this.el).remove(); }, 300);
			});
		},
		setup: function( options ) {
			var cont = '';
			cont += '<div class="diamond-alert ' + options.class + '">';
			cont += 	'<div class="flex">';
			cont += 		'<div class="row">';

			cont += 			'<div class="box">';
			cont += 				'<div class="flex">';
			cont += 					'<div class="row">';
			cont += 						'<div class="center">';
			cont +=								'<div class="text">' + options.text + '</div>';

			for (var i=0; i<options.buttons.length; i++) {
				var btn = options.buttons[i];
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

			var self = this;
			self.el.append(cont);
			setTimeout( function() {
				self.popIn();

				buttons = options.buttons;
				$('.diamond-alert .btn', self.el).on('click', function() {
					var id = $(this).attr('id');
					data = getData(id, buttons);
					data.func(self);
				});
			},100);
		},
	},
};


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

// GET DATA
/*===================================================================*/
function getData(id, data) {
	for (var i=0; i<data.length; i++) {
		if (data[i]['id'] == id) return data[i];
	}
	return false;
}

function getSelectOptions(data, select=null) {
	var cont = '';
	for (var i=0; i<data.length; i++) {
		var d = data[i];
		cont += '<option value="' + d['id'] + '" ';
					if (select) if (select == d['id']) cont += ' selected';
		cont += 	'>' ;
		cont += 	d['name'];
		cont += '</option>';
	}
	return cont;
}