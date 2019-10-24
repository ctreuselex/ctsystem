var mirrorGrid = {
	main: this,
	options: {
		el: null,
		title: '',
		subtitle: '',
		gridColumns: 6, 
		gridSpacing: 10,
		gridHeight: 300,
		gridColors: { 
			top: 'color', 
			bot: 'color', 
			ico: 'color', 
			cat: 'color',
			aff: 'color', },
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
	minimizeBox: 0,
	dataBlocks: [],
	init: function(options) {
		$.extend(this.options, options);
		this.options.el.addClass('mirror-grid');
		this.options.el.html('');
		this.options.el.append( this.setHead() );
		this.options.el.append( this.setGrid() );
		this.loadBoxes(true);

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
		cont += 	'<span class="sub">' + this.options.subtitle + '</span>';
		cont += 	'<div class="showing"></div>';
		cont += 	'<div class="btn add"><center><i class="fas fa-plus"></i> Add New</center></div>';
		cont += 	'<div class="search"><i class="fas fa-search"></i> <input type="text" placeholder="Search"></div>';
		cont += '</div>';
		return cont;
	},
	setGrid: function() {
		var cont = '';
		cont += '<div class="grid">';
		cont += '</div>';
		cont += '<div class="nothing">';
		cont += 	'Oof, I found nothing.';
		cont += '</div>';
		return cont;
	},
	setGridInteractions: function() {
		var self = this;
		$('.btn.add', this.options.el).on('click', function() {
		 	self.popup.setup( self.options.addData );
		});

		$('.search input', this.options.el).on('change', function() {
			var search = $(this).val();
		 	self.loadBoxes(false, search);
		});

		// self.checkBoxDisplay(0);
		// $('.grid', this.options.el).scroll( function() {
		// 	self.checkBoxDisplay( $('.grid', self.options.el).scrollTop() );
		// });
	},

	loadBoxes: function(update=false, search='') {
		var self = this;
		window.requestAnimationFrame( function() {
			var grid = $('.grid', self.options.el);
			var data = self.options.data;
			var delay = 0;

			for (var i=0; i<data.length; i++) {
				var item = data[i];
				var box = $('.box#' + item['id'], grid);

				// APPEND BOX AFTER ADDING
				if ( box.length == 0 ) { 
					$(grid).append( self.getBox(item, i) );
					box = $('.box#' + item['id'], grid);
					delay = i * 0.05;
					self.updateBox(box, item, delay);
					self.setBoxInteractions( box );
					self.popup.popOut();
				}

				// UPDATE BOX AFTER EDITING
				if (update) { 
					self.updateBox(box, item, delay);
			 		if ( !$(box).hasClass('top') ) {
						$(box).css('top', self.getBoxTop(i));
						$(box).css('left', self.getBoxLeft(i));
			 		} 
					self.popup.popOut();
				}
			}

			var delay = 0;
			var searchCount = 0;
			$('.box', grid).each( function() {
				var id = $(this).attr('id');
				// REMOVE DELETED BOX
				if (!getData(id, data)) $(this).remove();

	 			// SEARCH BOXES
				if (search != '') {
					if ( $('.name', this).html().toLowerCase().indexOf(search) >= 0 ) {
						$(this).removeClass('filter');
						delay = searchCount * 0.05;
						$(this).css('animation-delay', delay + 's');
						$(this).css('top', self.getBoxTop(searchCount));
						$(this).css('left', self.getBoxLeft(searchCount));
						searchCount += 1;
					} else {
						$(this).addClass('filter');
					}
				} else {
					$(this).removeClass('filter');
					delay = searchCount * 0.05;
					$(this).css('animation-delay', delay + 's');
					searchCount += 1;
				}
			});

			$('.head .showing', self.el).html("Showing: " + searchCount + " " + self.options.title);
			if (searchCount == 0) { $('.nothing', self.options.el).addClass('open');
			} else $('.nothing', self.options.el).removeClass('open');
		});
	},
	getBox: function(item, i) {
		var cont = '';
		cont += '<div class="box" id="' + item['id'] + '" ';
		cont += 	'style="';
		cont += 	'width: ' + this.getBoxSize() + 'px;';
		cont += 	'height: ' + this.options.gridHeight + 'px;';
		cont += 	'top: ' + this.getBoxTop(i) + 'px;';
		cont += 	'left: ' + this.getBoxLeft(i) + 'px;';
		cont += 	'margin-bottom: ' + this.options.gridSpacing + 'px;';
		cont += 	'border-top-color: ' + item[this.options.gridColors.top] + ';';
		cont += 	'border-bottom-color: ' + item[this.options.gridColors.bot] + ';';
		cont += 	'">';
		cont += 	'<div class="box-gradient" style="';
		cont += 		'background-image: linear-gradient(to bottom, ' + item[this.options.gridColors.top] + ', ' + item[this.options.gridColors.bot] + ');';
		cont += 		'"></div>';
		cont += 	'<div class="box-container">';
		cont += 		'<div class="box-slash" style="';
		cont += 			'background-color: ' + item[this.options.gridColors.ico] + ';';
		cont += 			'box-shadow: 0 0 50px ' + item[this.options.gridColors.ico] + ';';
		cont += 			'"></div>';
		cont +=				this.getBoxData(item);
		cont += 		'<div class="btn-box">';
		cont +=				'<div class="btn shw" id="' + item['id'] + '"><i class="fas fa-expand"></i></div>';
		cont +=				'<div class="btn edt" id="' + item['id'] + '"><i class="fas fa-edit"></i></div>';
		cont +=				'<div class="btn dlt" id="' + item['id'] + '"><i class="fas fa-trash"></i></div>';
		cont += 		'</div>';
		cont += 	'</div>';
		cont += '</div>';
		return cont;
	},
	getBoxSize: function() { return (this.options.el.width() / this.options.gridColumns) - ((this.options.gridSpacing * (2 / this.options.gridColumns) + this.options.gridSpacing)); },
	getBoxTop: function(i) { return Math.floor(i / this.options.gridColumns) * (this.options.gridHeight + this.options.gridSpacing) + this.options.gridSpacing; },
	getBoxLeft: function(i) { return (i % this.options.gridColumns) * this.getBoxSize() + (this.options.gridSpacing * (i % this.options.gridColumns + 1)); },
	getBoxData: function(item) {
		var cont = '';
		for (var i=0; i<this.options.gridContent.length; i++) {
			var content = this.options.gridContent[i];

			if (content['name'] == 'icon') {
				cont += '<div class="icon">';
				cont += 	'<i></i>';
				cont += '</div>';

			} else if (content['name'] == 'image') {
				cont += '<div class="image">';
				cont += '</div>';

			} else if (content['name'] == 'category') {
				cont += '<div class="category">';
				cont += '</div>';

			} else if (content['name'] == 'affinity') {
				cont += '<div class="affinity">';
				cont += 	'<div class="ico">';
				cont += 		'<i></i>';
				cont += 	'</div>';
				cont += '</div>';

			} else if (content['name'] == 'name') {
				cont += '<div class="name">';
				cont += '</div>';

			} else if (content['name'] == 'description') {
				cont += '<div class="description">';
				cont += 	'<div class="text"></div>';
				cont += 	'<textarea></textarea>';
				cont += 	'<div class="des-btn edit"><i class="fas fa-edit"></i></div>';
				cont += 	'<div class="des-btn save"><i class="fas fa-save"></i></div>';
				cont += '</div>';
			}
		}
		return cont;
	},
	updateBox: function(box, item, delay) {
		$(box).css('animation-delay', delay + 's');
		$(box).css('border-top-color', item[this.options.gridColors.top]);
		$(box).css('border-bottom-color', item[this.options.gridColors.bot]);
		$('.box-gradient', box).css('background-image', 'linear-gradient(to bottom, ' + item[this.options.gridColors.top] + ', ' + item[this.options.gridColors.bot] + ')');
		$('.box-slash', box).css('background-color', item[this.options.gridColors.ico]);
		$('.box-slash', box).css('box-shadow', '0 0 10px ' + item[this.options.gridColors.ico]);

		for (var i=0; i<this.options.gridContent.length; i++) {
			var content = this.options.gridContent[i];
			var itemName = item['name'];

			if (content['name'] == 'icon') {
				$('.icon i', box).attr('class', item[content['tag']]);

			} else if (content['name'] == 'image') {
				if (item[content['tag']]) {
					$('.image', box).css('background-image', 'url(' + item[content['tag']] + ')');
				} else {
					$('.image', box).css('background-image', 'url(' + nullImage + ')');
				}

			} else if (content['name'] == 'category') {
				$('.category', box).css('background-color', item[this.options.gridColors.cat]);
				if (content['tag']) $('.category', box).html(item[content['tag']]);
				else if (content['tags']) $('.category', box).html(getContentTags(content['tags'], item, content['seperator']));

			} else if (content['name'] == 'affinity') {
				$('.affinity', box).css('background-color', item[this.options.gridColors.aff]);
				$('.affinity i', box).attr('class', item[content['tag']]);

			} else if (content['name'] == 'name') {
				if (content['tag']) $('.' + content['name'], box).html(item[content['tag']]);
				else if (content['tags']) $('.' + content['name'], box).html(getContentTags(content['tags'], item, content['seperator']));

			} else if (content['name'] == 'description') {
				$('.' + content['name'] + ' .text', box).html( this.getDescriptionData(itemName, item[content['tag']]) );
			}
		}

		var self = this;
		window.requestAnimationFrame( function() {
			for (var i=0; i<self.dataBlocks.length; i++) {
				var block = self.dataBlocks[i];
				if (block['owner'] == itemName) self.getBlockData(self.dataBlocks[i]); 
			}	
		});
	},
	setBoxInteractions: function(box) {
		var self = this;
		var options = this.options;
		var popup = this.popup;
		var diamondAlert = this.diamondAlert;
		var minimizeBox = this.minimizeBox;
		var descriptionBox = $('.description', box);

		$(box).hover(function() {
			$('.grid .box', options.el).addClass('unfocused');
			$(this).removeClass('unfocused');
		}, function() {
			$('.grid .box', options.el).removeClass('unfocused');
		});

		$('.btn.shw', box).on('click', function() {
			var id = $(this).attr('id');

			if ( $(box).hasClass('maximize') ) {
			 	$(this).html('<i class="fas fa-expand"></i>');
			 	$(options.el).removeClass('maximize');
			 	$('.grid .box', options.el).removeClass('maximize');
			 	$('.head .search input', options.el).prop('disabled', false);
		 		$(box).css('top', minimizeBox );
				$(descriptionBox).removeClass('edit');
			 	$('textarea', descriptionBox).prop('disabled', true);
		 		setTimeout( function() { $(box).removeClass('top'); }, 300);

			} else {
				minimizeBox = $(box).css('top');
			 	$(this).html('<i class="fas fa-compress"></i>');
			 	$(options.el).addClass('maximize');
			 	$(box).addClass('maximize');
			 	$(box).addClass('top');
			 	$(box).css('top', $('.grid', options.el).scrollTop() + 'px' );
			 	$('.head .search input', options.el).prop('disabled', true);
			 	$('textarea', descriptionBox).prop('disabled', true);
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
										{ text: 'Okay', id: 'okay', func: function(self) { self.popOut(); self.main.loadBoxes(true); } },
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

		$('.edit', descriptionBox).on('click', function() {
			if ( $(descriptionBox).hasClass('edit') ) {
				$(descriptionBox).removeClass('edit');
			 	$('textarea', descriptionBox).prop('disabled', true);
			} else {
				$(descriptionBox).addClass('edit');
				var data = getData( $(box).attr('id'), options.data );
			 	$('textarea', descriptionBox).prop('disabled', false);
			 	$('textarea', descriptionBox).val( data['description'] );
			}
		});

		$('.save', descriptionBox).on('click', function() {
			$(descriptionBox).removeClass('edit');

			var data = {};
			data['_token'] = $('meta[name="csrf-token"]').attr('content');
			data['id'] = $(box).attr('id');
			data['description'] = $('textarea', descriptionBox).val();

            $.ajax({
                type: 'POST',
                url: options.editData.baseLink + '/saveDescription',
                data: data,
		        success: function(response) {
		        	options.data = response;
			    	diamondAlert.setup({
			    		class: 'edt',
			    		text: options.editData.alertSuccess,
			    		buttons: [
							{ text: 'Okay', id: 'okay', func: function(self) { 
								self.main.loadBoxes(true); 
								self.popOut(); } },
						]
					});
		      	},
	            error: function(xhr,ajaxOptions,throwError) {
			    	diamondAlert.setup({
			    		class: 'edt',
			    		text: throwError,
			    		buttons: [
							{ text: 'Okay', id: 'okay', func: function(self) { self.popOut(); } },
						]
					});
	    		},
	            complete: function() {}
		    });
		});

		$('.dataBlock', descriptionBox).on('click', function() {
			var id = $(this).attr('id');
			$(this).html('<i class="fas fa-cog fa-spin reload"></i>UwU. wait please~');
			self.reloadBlock(id);
		});
	},

	getDescriptionData: function(name, des) {
		var cont = '';

		if (des) {
			var desSplit = des.split('|');

			for (var i=0; i<desSplit.length; i++) {
				var split = desSplit[i].split('-');
				var dataUrl = null;

				if (split[0] == 'chr') dataUrl = url.origin + '/dash/characters/getData';
				if (split[0] == 'aff') dataUrl = url.origin + '/dash/affinities/getData';
				if (split[0] == 'div') dataUrl = url.origin + '/dash/divisions/getData';
				if (split[0] == 'ori') dataUrl = url.origin + '/dash/origins/getData';

				if (dataUrl) {
					var id = name + '-' + i;
					cont += '<span class="dataBlock" id="' + id + '"><i class="fas fa-cog fa-spin reload"></i></span>';

					var data = {};
					data['owner'] = name;
					data['dataUrl'] = dataUrl;
					data['_token'] = $('meta[name="csrf-token"]').attr('content');
					data['block_id'] = id;
					data['name'] = split[1];
					data['alt'] = split[2];
					this.dataBlocks.push(data);

				} else {
					cont += desSplit[i];
				}
			}
		}
		return cont;
	},
	getBlock: function(id, data, alt=null) {
		var dataBlock = $('.dataBlock#' + id);
		var cont = '';

		if (data) {
			if (data['color']) $(dataBlock).css('color', data['color']);
			if (data['color_primary']) $(dataBlock).css('color', data['color_primary']);

			if (data['icon']) cont += '<i class="' + data['icon'] + '"></i>';
			if (alt) cont += alt;
			else {
				cont += data['name'];	
				if (data['surname']) cont += " " + data['surname']
			}

		} else {
			cont += "Not Found";
		}

		dataBlock.html(cont);
	},
	getBlockData: function(data) {
		var self = this;
	    $.ajax({
	        type: 'POST',
	        url: data['dataUrl'],
			data: data,
	        success: function(response) { self.getBlock(response['block_id'], response, response['alt']); },
	        error: function(xhr,ajaxOptions,throwError) { console.log(data['block_id'] + ' Not Found')  },
	        complete: function() {}
	    });
	},
	reloadBlock: function(id) {
		for (var i=0; i<this.dataBlocks.length; i++) {
			if (this.dataBlocks[i]['block_id'] == id) { this.getBlockData(this.dataBlocks[i]); }
		}
	},

	popup: {
		main: null,
		el: null,
		create: function( width, callback ) {
			var cont = '';
			cont += '<div class="popup">';
			cont += 	'<div class="flex">';
			cont += 		'<div class="row">';
			cont += 			'<div class="box" style="width: ' + width + 'px">';
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
			var boxColumnSize = 'calc(100% / ' + options.columns + ')';
			var multiSelects = [];

			self.el.append( 
				self.create( options.width,
					function() {
					var cont = '';
					cont += '<div class="title">' + options.title + '</div>';
					cont += '<div class="scroll">';

					col = [];
					for (var i=1; i<=options.columns; i++) { col[i] = '<div class="col" style="width: ' + boxColumnSize + '">'; }

					for (var i=0; i<options.inputs.length; i++) {
						var input = options.inputs[i];
						col[input['col']] += '<div class="input-box ' + input['type'] + '">';
						col[input['col']] += 	'<label>' + input['name'] + '</label>';

						if (input['type'] == 'textarea') {
							if (options['data'] && options['data'][input['tag']]) {
								col[input['col']] += '<textarea id="' + input['tag'] + '" rows="8">' + options['data'][input['tag']] + '</textarea>';
							} else {
								col[input['col']] += '<textarea id="' + input['tag'] + '" rows="8"></textarea>';
							}

						} else if (input['type'] == 'color') {
							if (options['data'] && options['data'][input['tag']]) {
								col[input['col']] += '<input id="' + input['tag'] + '" type="text" value="' + options['data'][input['tag']] + '" autocomplete="off">';
								col[input['col']] += '<input type="color" value="' + options['data'][input['tag']] + '">';
							} else {
								col[input['col']] += '<input id="' + input['tag'] + '" type="text" value="" autocomplete="off">';
								col[input['col']] += '<input type="color" value="">';
							}

						} else if (input['type'] == 'select') {
							if (options['data'] && options['data'][input['tag']]) {
								col[input['col']] += '<select id="' + input['tag'] + '" value="' + options['data'][input['tag']] + '">';
								col[input['col']] += 	getSelectOptions(input['from'], options['data'][input['tag']]);
								col[input['col']] += '</select>';
							} else { 
								col[input['col']] += '<select id="' + input['tag'] + '" value="0">';
								col[input['col']] += 	getSelectOptions(input['from']);
								col[input['col']] += '</select>';
							}

						} else if (input['type'] == 'multi-select') {
							if (options['data'] && options['data'][input['tag']]) {
								col[input['col']] += '<select id="' + input['tag'] + '" multiple="multiple" value="' + options['data'][input['tag']] + '">';
								col[input['col']] += 	getSelectOptions(input['from'], options['data'][input['tag']]);
								col[input['col']] += '</select>';
							} else { 
								col[input['col']] += '<select id="' + input['tag'] + '" value="0">';
								col[input['col']] += 	getSelectOptions(input['from']);
								col[input['col']] += '</select>';
							}
							multiSelects.push('#' + input['tag']);
						
						} else {
							if (options['data'] && options['data'][input['tag']]) {
								col[input['col']] += '<input id="' + input['tag'] + '" type="' + input['type'] + '" value="' + options['data'][input['tag']] + '" autocomplete="off">';
							} else {
								col[input['col']] += '<input id="' + input['tag'] + '" type="' + input['type'] + '" value="" autocomplete="off">';
							}
						}

						col[input['col']] += '</div>';
					}

					for (var i=1; i<=options.columns; i++) {
						col[i] += '</div>';
						cont += col[i];
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

				$('.input-box.color input[type="text"]', self.el).on('change', function() {
					$('input[type="color"]', $(this).parent()).val( $(this).val());
				});
				$('.input-box.color input[type="color"]', self.el).on('change', function() {
					$('input[type="text"]', $(this).parent()).val( $(this).val() );
				});

				for (var i=0; i<multiSelects.length; i++) { $(multiSelects[i]).multiSelect({}); }

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
									{ text: 'Okay', id: 'okay', func: function(self) { 
										search = $('.search input', self.main.options.el).val();
										self.popOut(); 
										self.main.loadBoxes(true, search); } },
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