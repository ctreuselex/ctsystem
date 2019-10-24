function mirrorGrid(options) {
	construct = {
		el: null,
		title: 'title',
		subtitle: 'subtitle',
		data: null,
		box: {
			columns: 6,
			spacing: 10,
			colors: { 
				top: 'color', 
				bot: 'color', 
				ico: 'color', 
				cat: 'color',
				aff: 'color', },
			content: [ { name: 'name', tag: 'tag' } ],
		},
		addData: null,
		editData: null,
		deleteData: null,
		dataBlocks: [],
	} 
	$.extend(construct, options); 
	init();

	function init() {
		construct.el.addClass('mirror-grid');
		construct.el.html('');
		createGrid();
		createItems();
	}

	function createGrid() {
		var cont = '';
		cont += '<div class="head">';
		cont += 	'<span class="title">' + construct.title + '</span>';
		cont += 	'<span class="sub">' + construct.subtitle + '</span>';
		cont += 	'<div class="showing"></div>';
		cont += 	'<div class="button add"><div class="row"><i class="fas fa-plus"></i> Add New</div></div>';
		cont += 	'<div class="search"><i class="fas fa-search"></i> <input type="text" placeholder="Search"></div>';
		cont += '</div>';
		cont += '<div class="grid"></div>';
		// cont += '<div class="nothing">';
		// cont += 	'Oof, I found nothing.';
		// cont += '</div>';
		construct.el.append(cont);
		construct.grid = $('.grid', construct.el);
		setGridInteractions();
	}

	function setGridInteractions() {
		$('.button.add', construct.el).on('click', function() {
			var id = $(this).attr('id');
		 	setupPopup('add');
		});

		$('.search input', construct.el).on('change', function() {
			var search = $(this).val();
		 	updateItemsPosition(search);
		});
	}

	function createItems() {
		for (var i=0; i<construct.data.length; i++) {
			createItem(construct.data[i]);
			updateItem(construct.data[i]);
			setItemInteractions(construct.data[i]);
		}
		updateItemsPosition();
	}

	function createItem(item) {
		var cont = '';
		cont += '<div class="box" id="' + item['id'] + '">';
		cont += 	'<div class="gradient"></div>';
		cont += 	'<div class="content">';
		cont += 		'<div class="slash"></div>';
		cont += 		createItemContent();
		cont += 		'<div class="buttons">';
		cont += 			'<div class="button shw" id="' + item['id'] + '"><div class="row"><i class="fas fa-expand"></i></div></div>';
		cont += 			'<div class="button edt" id="' + item['id'] + '"><div class="row"><i class="fas fa-edit"></i></div></div>';
		cont += 			'<div class="button dlt" id="' + item['id'] + '"><div class="row"><i class="fas fa-trash"></i></div></div>';
		cont += 		'</div>';
		cont += 	'</div>';
		cont += '</div>';
		construct.grid.append(cont);
	}

	function createItemContent() {
		var cont = '';
		for (var i=0; i<construct.box.content.length; i++) {
			var content = construct.box.content[i];

			if (content['name'] == 'icon') {
				cont += '<div class="icon"></div>';

			} else if (content['name'] == 'image') {
				cont += '<div class="image"></div>';

			} else if (content['name'] == 'category') {
				cont += '<div class="category"></div>';

			} else if (content['name'] == 'affinity') {
				cont += '<div class="affinity">';
				cont += 	'<div class="center">';
				cont += 		'<div class="icon"></div>';
				cont += 	'</div>';
				cont += '</div>';

			} else if (content['name'] == 'name') {
				cont += '<div class="name"></div>';

			} else if (content['name'] == 'description') {
				cont += '<div class="description">';
				cont += 	'<div class="text"></div>';
				// cont += 	'<textarea></textarea>';
				// cont += 	'<div class="des-btn edit"><i class="fas fa-edit"></i></div>';
				// cont += 	'<div class="des-btn save"><i class="fas fa-save"></i></div>';
				cont += '</div>';
			}
		}
		return cont;
	}

	function updateItem(item) {
		var el = $('#' + item['id'], construct.grid);

		$(el).css('width', getBoxSize() + 'px');
		$(el).css('height', getBoxSize() + 'px');
		$(el).css('margin-bottom', construct.box.spacing + 'px');

		$('.gradient', el).css('background-image', 'linear-gradient(to bottom, ' + item[construct.box.colors.top] + ', ' + item[construct.box.colors.bot] + ')');

		$('.content', el).css('border-top-color', item[construct.box.colors.top]);
		$('.content', el).css('border-bottom-color', item[construct.box.colors.bot]);
		$('.content .slash', el).css('background-color', item[construct.box.colors.ico]);
		$('.content .slash', el).css('box-shadow', '0 0 50px ' + item[construct.box.colors.ico]);

		updateItemContent(item);
	}

	function updateItemsPosition(search = null) {
		// POSITION BY SORT
		for (var i=0; i<construct.data.length; i++) {
			var item = construct.data[i];
			maximizeItem(item, 'min');
			$('#' + item['id'], construct.grid).css('top', getBoxTop(i) + 'px');
			$('#' + item['id'], construct.grid).css('left', getBoxLeft(i) + 'px');
		}

		// POSITION BY SEARCH
		var searchCount = 0;
		$('.box', construct.grid).each( function() {
			var id = $(this).attr('id');

			if (search && search != '') {
				if ( $('.name', this).html().toLowerCase().indexOf(search) >= 0 ) {
					$(this).removeClass('filter');
					$(this).css('top', getBoxTop(searchCount) + 'px');
					$(this).css('left', getBoxLeft(searchCount) + 'px');
					searchCount += 1;
				} else {
					$(this).addClass('filter');
				}
			} else {
				$(this).removeClass('filter');
				searchCount += 1;
			}
		});
	}

	function updateItemContent(item) {
		var el = $('#' + item['id'], construct.grid);

		for (var i=0; i<construct.box.content.length; i++) {
			var content = construct.box.content[i];

			if (content['name'] == 'icon') {
				var icon = '<i class="' + item[content['tag']] + '"></i>';
				$('.icon', el).html(icon);

			} else if (content['name'] == 'image') {
				$('.image', el).css('background-image', 'url(\'' + item[content['tag']] + '\')');

			} else if (content['name'] == 'category') {
				$('.category', el).css('background-color', item[construct.box.colors.cat]);
				if (content['tag']) $('.category', el).html(item[content['tag']]);
				else if (content['tags']) $('.category', el).html(getContentTags(content['tags'], item, content['seperator']));

			} else if (content['name'] == 'affinity') {
				var icon = '<i class="' + item[content['tag']] + '"></i>';
				$('.affinity', el).css('background-color', item[construct.box.colors.aff]);
				$('.affinity .icon', el).html(icon);

			} else if (content['name'] == 'name') {
				$('.name', el).html(item[content['tag']]);

				if (content['tag']) $('.name', el).html(item[content['tag']]);
				else if (content['tags']) $('.name', el).html(getContentTags(content['tags'], item, content['seperator']));

			} else if (content['name'] == 'description') {
				$('.description .text', el).html(item[content['tag']]);
			}
		}
	}

	function setItemInteractions(item) {
		var el = $('#' + item['id'], construct.grid);

		$('.button.shw', el).on('click', function() {
			if ( $(el).hasClass('maximize') ) maximizeItem(item, 'min');
			else maximizeItem(item, 'max');
		});

		$('.button.edt', el).on('click', function() {
			var id = $(this).attr('id');
			construct.editData.data = getData(id, construct.data);
			construct.editData.link = construct.editData.baseLink + '/' + id;
		 	setupPopup('edit');
		});

		$('.button.dlt', el).on('click', function() {
			var id = $(this).attr('id');
			construct.deleteData.data = getData(id, construct.data);
			construct.deleteData.link = construct.deleteData.baseLink + '/' + id;
		 	setupPopup('delete');
		});
	}

	function maximizeItem(item, type) {
		var el = $('#' + item['id'], construct.grid);

		if ( type == 'max' ) {
			construct.minimizeBox = $(el).css('top');
		 	$(this).html('<div class="row"><i class="fas fa-compress"></i></div>');

		 	$(construct.el).addClass('maximize');
		 	$(el).addClass('maximize');
		 	$(el).addClass('top');
		 	$(el).css('top', ($('.grid', options.el).scrollTop()) + 'px' );

	 		setTimeout( function() { 
	 			$('.description .text', el).html( getDescriptionData(item['id'], item['description']) );
				window.requestAnimationFrame( function() {
		 			for (var i=0; i<construct.dataBlocks.length; i++) {
						var block = construct.dataBlocks[i];
						getBlockData(construct.dataBlocks[i]); 
					}
					construct.dataBlocks = [];
				});
	 		}, 300);

		 	// $('.head .search input', options.el).prop('disabled', true);
		 	// $('textarea', descriptionBox).prop('disabled', true);
		}

		if ( type == 'min' ) {
	 		$(el).css('top', construct.minimizeBox );
		 	$(this).html('<div class="row"><i class="fas fa-expand"></i></div>');

		 	$(construct.el).removeClass('maximize');
		 	$('.box', construct.grid).removeClass('maximize');

	 		setTimeout( function() { 
	 			$(el).removeClass('top'); 
	 		}, 300);

			// $(descriptionBox).removeClass('edit');
		 	// $('textarea', descriptionBox).prop('disabled', true);
		}
	}

	function setupPopup(type) {
		var popup = null, saveColor = 'grey';

		if (type == 'add') {
			popup = construct.addData;
			saveColor = 'var(--btn-shw);';
			popupAddEdit();
		}
		if (type == 'edit') {
			popup = construct.editData;
			saveColor = 'var(--btn-edt);';
			popupAddEdit();
		}
		if (type == 'delete') {
			popup = construct.deleteData;
			saveColor = 'var(--btn-dlt);';
			popupDelete();
		}

		// ADD AND EDIT
		function popupAddEdit() {
			var popupColumnSize = 'calc(100% / ' + popup.columns + ')';
			var multiSelects = [];

			createPopup( function() {
				var cont = '';
				cont += '<div class="title">' + popup.title + '</div>';
				cont += '<div class="scroll">';

				col = [];
				for (var i=1; i<=popup.columns; i++) { col[i] = '<div class="col" style="width: ' + popupColumnSize + '">'; }

				for (var i=0; i<popup.inputs.length; i++) {
					var input = popup.inputs[i];
					col[input['col']] += '<div class="input-box ' + input['type'] + '">';
					col[input['col']] += 	'<label>' + input['name'] + '</label>';

					if (input['type'] == 'textarea') {
						if (popup['data'] && popup['data'][input['tag']]) {
							col[input['col']] += '<textarea id="' + input['tag'] + '" rows="8">' + popup['data'][input['tag']] + '</textarea>';
						} else {
							col[input['col']] += '<textarea id="' + input['tag'] + '" rows="8"></textarea>';
						}

					} else if (input['type'] == 'color') {
						if (popup['data'] && popup['data'][input['tag']]) {
							col[input['col']] += '<input id="' + input['tag'] + '" type="text" value="' + popup['data'][input['tag']] + '" autocomplete="off">';
							col[input['col']] += '<input type="color" value="' + popup['data'][input['tag']] + '">';
						} else {
							col[input['col']] += '<input id="' + input['tag'] + '" type="text" value="" autocomplete="off">';
							col[input['col']] += '<input type="color" value="">';
						}

					} else if (input['type'] == 'select') {
						if (popup['data'] && popup['data'][input['tag']]) {
							col[input['col']] += '<select id="' + input['tag'] + '" value="' + popup['data'][input['tag']] + '">';
							col[input['col']] += 	getSelectOptions(input['from'], popup['data'][input['tag']]);
							col[input['col']] += '</select>';
						} else { 
							col[input['col']] += '<select id="' + input['tag'] + '" value="0">';
							col[input['col']] += 	getSelectOptions(input['from']);
							col[input['col']] += '</select>';
						}

					} else if (input['type'] == 'multi-select') {
						if (popup['data'] && popup['data'][input['tag']]) {
							col[input['col']] += '<select id="' + input['tag'] + '" multiple="multiple" value="' + popup['data'][input['tag']] + '">';
							col[input['col']] += 	getSelectOptions(input['from'], popup['data'][input['tag']]);
							col[input['col']] += '</select>';
						} else { 
							col[input['col']] += '<select id="' + input['tag'] + '" value="0">';
							col[input['col']] += 	getSelectOptions(input['from']);
							col[input['col']] += '</select>';
						}
						multiSelects.push('#' + input['tag']);
					
					} else {
						if (popup['data'] && popup['data'][input['tag']]) {
							col[input['col']] += '<input id="' + input['tag'] + '" type="' + input['type'] + '" value="' + popup['data'][input['tag']] + '" autocomplete="off">';
						} else {
							col[input['col']] += '<input id="' + input['tag'] + '" type="' + input['type'] + '" value="" autocomplete="off">';
						}
					}

					col[input['col']] += '</div>';
				}

				for (var i=1; i<=popup.columns; i++) {
					col[i] += '</div>';
					cont += col[i];
				}

				cont += '<div class="input-box submit">';
				cont += 	'<i class="fas fa-cog"></i>';
				cont += 	'<input type="submit" value="Save" style="background-color: ' + saveColor + '">';
				cont += '</div>';
				cont += '</div>';

				return cont;
			});

			inputBox( $(popup.el) );
			for (var i=0; i<multiSelects.length; i++) { $(multiSelects[i]).multiSelect({}); }
			window.requestAnimationFrame( function() { setPopupInteractions() });
		}

		function popupDelete() {
			createPopup( function() {
				var cont = '';
				cont += '<div class="title">' + popup.title + '</div>';
				cont += '<div class="scroll">';
				cont += 	'<div class="input-box submit">';
				cont += 		'<i class="fas fa-cog"></i>';
				cont += 		'<input type="submit" value="Delete" style="background-color: ' + saveColor + '">';
				cont += 	'</div>';
				cont += '</div>';
				return cont;
			});
			window.requestAnimationFrame( function() { setPopupInteractions() });
		}
		
		function createPopup(callback = function() {} ) {
			var cont = '';
			cont += '<div class="popup">';
			cont += 	'<div class="flex">';
			cont += 		'<div class="row">';
			cont += 			'<div class="box" style="width: ' + popup.width + 'px">';
			cont += 				'<div class="close"><i class="fas fa-times"></i></div>';
			cont +=					callback();
			cont += 			'</div>';
			cont += 		'</div>';
			cont += 	'</div>';
			cont += '</div>';
			construct.el.append(cont);
			popup.el = $('.popup');
		}

		function closePopup(callback = function() {} ) {
			$(popup.el).fadeOut('fast', function() {
				$(popup.el).removeClass('open');
				setTimeout( function() { 
					$(popup.el).remove(); 
					callback();
				}, 300);
			});
		}

		function setPopupInteractions() {
			$(popup.el).addClass('open');

			$('.close', popup.el).on('click', function() { closePopup() });

			$('input[type="submit"]', popup.el).on('click', function() {
				var btn = $(this);
				$(btn).parent().addClass('load');

				var data = {};
				data['_token'] = $('meta[name="csrf-token"]').attr('content');

        		if (type == 'add' || type == 'edit' ) {
					for (var i=0; i<popup.inputs.length; i++) {
						var tag = popup.inputs[i]['tag'];
						data[tag] = $('#' + tag, popup.el).val();
					}
				}

	            $.ajax({
	                type: popup.method,
	                url: popup.link,
	                data: data,
			        success: function(response) {
			        	construct.data = response;
		            	closePopup( function() {
		            		alert(popup.alertSuccess);

		            		if (type == 'add') {
		            			for (var i=0; i<construct.data.length; i++) {
		            				var item = construct.data[i];
		            				if ( $('.box#' + item['id'], construct.grid).length == 0 ) {
		            					createItem(item);
		            					updateItem(item);
										setItemInteractions(item);
		            				}
		            			}
		            		}

		            		if (type == 'edit') {
		            			for (var i=0; i<construct.data.length; i++) {
		            				var item = construct.data[i];
		            				if (item['id'] == popup.data['id']) {
		            					updateItem(item);
		            				}
		            			}
		            		}

		            		if (type == 'delete') {
		            			$('.box#' + construct.deleteData.data['id'], construct.grid).remove();
		            		}

		            		updateItemsPosition( $('.search input', construct.el).val() );
		            	});
			      	},
		            error: function(xhr,ajaxOptions,throwError) {
		            	closePopup( function() {
		            		alert(throwError);
		            	});
		    		},
		            complete: function(){
						$(btn).parent().removeClass('load');
			      	}
			    });
		    });
		}
	}	

	function getBoxSize() { return (construct.grid.width() / construct.box.columns) - ((construct.box.spacing * (2 / construct.box.columns) + construct.box.spacing)); }
	function getBoxTop(i) { return Math.floor(i / construct.box.columns) * (getBoxSize() + construct.box.spacing) + construct.box.spacing; }
	function getBoxLeft(i) { return (i % construct.box.columns) * getBoxSize() + (construct.box.spacing * (i % construct.box.columns + 1)); }
	
	function getData(id, data) {
		for (var i=0; i<data.length; i++) {
			if (data[i]['id'] == id) return data[i];
		}
		return false;
	}

	function getContentTags(tags, item, seperator) {
		var cont = '';
		for (var i=0; i<tags.length; i++) {
			if (i!=0) cont += seperator;
			if (item[tags[i]] && item[tags[i]] != 'null') cont += item[tags[i]];
			else cont += '';
		}
		return cont;
	}

	function getDescriptionData(id, des) {
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
					cont += '<span class="dataBlock reload" id="' + id + '">';
					cont += 	'<i class="fas fa-cog fa-spin"></i>';
					cont += 	split[1];
					cont += '</span>';

					var data = {};
					data['owner'] = name;
					data['dataUrl'] = dataUrl;
					data['_token'] = $('meta[name="csrf-token"]').attr('content');
					data['block_id'] = id;
					data['name'] = split[1];
					data['alt'] = split[2];
					construct.dataBlocks.push(data);

				} else {
					cont += desSplit[i];
				}
			}
		}
		return cont;
	}

	function getBlock(id, data, alt=null) {
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

		dataBlock.removeClass('reload');
		dataBlock.html(cont);
	}
	function getBlockData(data) {
	    $.ajax({
	        type: 'POST',
	        url: data['dataUrl'],
			data: data,
	        success: function(response) { getBlock(response['block_id'], response, response['alt']); },
	        error: function(xhr,ajaxOptions,throwError) { console.log(data['block_id'] + ' Not Found')  },
	        complete: function() {}
	    });
	}

}

$.extend(mirrorGrid.prototype, {
	setAdd: function(options) { construct.addData = options },
	setEdit: function(options) { construct.editData = options },
	setDelete: function(options) { construct.deleteData = options },

	console: function() { console.log(construct) },
});