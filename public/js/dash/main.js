
var url = window.location;
var nullImage = url.origin + '/img/default-img.png';

$.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });

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

// CREATE GRID
// /*===================================================================*/
function mirrorGrid(options) {
	construct = {
		el: null,
		title: '',
		subtitle: '',
		data: null,
		box: {
			columns: 6,
			spacing: 10,
			height: 300,
			colors: { 
				top: 'color', 
				bot: 'color', 
				ico: 'color', 
				cat: 'color',
				aff: 'color', },
			content: [
				{ name: 'name', tag: 'name' },
			],
		},
		addData: {
			method: 'POST',
			title: "Add New",
			alertSuccess: "Added!",
			alertFail: "Fail to add!",
			inputs: [
				{ name: 'name', tag: 'name', type: 'text' },
			],
			link: url.pathname,
		},
		editData: {
			method: 'PUT',
			title: "Edit",
			alertSuccess: "Saved!",
			alertFail: "Fail to save!",
			inputs: [
				{ name: 'name', tag: 'name', type: 'text' },
			],
			baseLink: url.pathname,
		},
		deleteData: {
			alertQuestion: "Delete?",
			alertSuccess: "Deleted!",
			link: url.pathname,
		},
		items: [],
	}
	$.extend(construct, options);
	this.init();
}

$.extend(mirrorGrid.prototype, {
	init: function() {
		construct.el.addClass('mirror-grid');
		construct.el.html( this.buildGrid() );
		this.buildBoxes();

		console.log(construct.items);
	},
	buildGrid: function() {
		var cont = '';
		cont += '<div class="head">';
		cont += 	construct.title;
		cont += 	'<span class="sub">' + construct.subtitle + '</span>';
		cont += 	'<div class="showing"></div>';
		cont += 	'<div class="btn add"><center><i class="fas fa-plus"></i> Add New</center></div>';
		cont += 	'<div class="search"><i class="fas fa-search"></i> <input type="text" placeholder="Search"></div>';
		cont += '</div>';

		cont += '<div class="grid"></div>';
		cont += '<div class="nothing"> Oof, I found nothing. </div>';
		return cont;
	},
	buildBoxes: function() {
		var grid = $('.grid', construct.el);
		for (var i=0; i<construct.data.length; i++) {
			var data = construct.data[i];
			var box = Object.create(mirrorBox);
			// var box = new mirrorBox({
			// 	grid: grid,
			// 	box: construct.box,
			// 	data: data,
			// })
			box.construct.grid = grid;
			box.construct.box = construct.box;
			box.construct.data = data;

			grid.append( box.buildBox(i) );
			box.updateBox();
			// box.updateBlocks();

			construct.items.push(box);
		}
	},
});

var mirrorBox = {
	construct: { dataBlocks: [], },
	buildBox: function(i) {
		var cont = '';
		cont += '<div class="box" id="' + construct.data['id'] + '" ';
		cont += 	'style="';
		cont += 	'width: ' + this.getBoxSize() + 'px;';
		cont += 	'height: ' + construct.box.height + 'px;';
		cont += 	'top: ' + this.getBoxTop(i) + 'px;';
		cont += 	'left: ' + this.getBoxLeft(i) + 'px;';
		cont += 	'margin-bottom: ' + construct.box.spacing + 'px;';
		cont += 	'">';
		cont += 	'<div class="box-gradient"></div>';
		cont += 	'<div class="box-container">';
		cont += 		'<div class="box-slash"></div>';
		cont +=				this.getBoxData( construct.data );
		cont += 		'<div class="btn-box">';
		cont +=				'<div class="btn shw" id="' + construct.data['id'] + '"><i class="fas fa-expand"></i></div>';
		cont +=				'<div class="btn edt" id="' + construct.data['id'] + '"><i class="fas fa-edit"></i></div>';
		cont +=				'<div class="btn dlt" id="' + construct.data['id'] + '"><i class="fas fa-trash"></i></div>';
		cont += 		'</div>';
		cont += 	'</div>';
		cont += '</div>';
		return cont;
	},
	
	getBoxData: function(data) {
		var cont = '';
		for (var i=0; i<construct.box.content.length; i++) {
			var content = construct.box.content[i];

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
	updateBox: function() {
		construct.el = this.getElement();
		// $(box).css('animation-delay', delay + 's');
		$(construct.el).css('border-top-color', construct.data[construct.box.colors.top]);
		$(construct.el).css('border-bottom-color', construct.data[construct.box.colors.bot]);
		$('.box-gradient', construct.el).css('background-image', 'linear-gradient(to bottom, ' + construct.data[construct.box.colors.top] + ', ' + construct.data[construct.box.colors.bot] + ')');
		$('.box-slash', construct.el).css('background-color', construct.data[construct.box.colors.ico]);
		$('.box-slash', construct.el).css('box-shadow', '0 0 10px ' + construct.data[construct.box.colors.ico]);

		for (var i=0; i<construct.box.content.length; i++) {
			var content = construct.box.content[i];

			if (content['name'] == 'icon') {
				$('.icon i', construct.el).attr('class', construct.data[content['tag']]);

			} else if (content['name'] == 'image') {
				if (construct.data[content['tag']]) {
					$('.image', construct.el).css('background-image', 'url(' + construct.data[content['tag']] + ')');
				} else {
					$('.image', construct.el).css('background-image', 'url(' + nullImage + ')');
				}

			} else if (content['name'] == 'category') {
				$('.category', construct.el).css('background-color', construct.data[options.gridColors.cat]);
				if (content['tag']) {
					$('.category', construct.el).html(construct.data[content['tag']]);
				} else if (content['tags']) {
					$('.category', construct.el).html(getContentTags(content['tags'], construct.data, content['seperator']));
				}

			} else if (content['name'] == 'affinity') {
				$('.affinity', construct.el).css('background-color', construct.data[options.gridColors.aff]);
				$('.affinity i', construct.el).attr('class', construct.data[content['tag']]);

			} else if (content['name'] == 'name') {
				if (content['tag']) {
					$('.' + content['name'], construct.el).html(construct.data[content['tag']]);
				} else if (content['tags']) {
					$('.' + content['name'], construct.el).html(getContentTags(content['tags'], construct.data, content['seperator']));
				}

			} else if (content['name'] == 'description') {
				// $('.' + content['name'] + ' .text', construct.el).html( this.getDescriptionBlocks(construct.data['id'], construct.data[content['tag']]) );
			}
		}
	},
	updateBlocks: function() {
		for (var i=0; i<construct.dataBlocks.length; i++) {
			getBlockData(construct.dataBlocks[i]); 
		}	
	},
	getBoxSize: function() { return (construct.grid.width() / construct.box.columns) - ((construct.box.spacing * (2 / construct.box.columns) + construct.box.spacing)); },
	getBoxTop: function(i) { return Math.floor(i / construct.box.columns) * (construct.box.height + construct.box.spacing) + construct.box.spacing; },
	getBoxLeft: function(i) { return (i % construct.box.columns) * this.getBoxSize() + (construct.box.spacing * (i % construct.box.columns + 1)); },
	getElement: function() { return $('#' + construct.data['id'], construct.grid); },
}

function mirrorBox(options) {
	construct = { 
		el: null,
		grid: null,
		box: null,
		data: null,
		dataBlocks: [], 
	}
	$.extend(construct, options);
}

$.extend(mirrorBox.prototype, {
	buildBox: function(i) {
		var cont = '';
		cont += '<div class="box" id="' + construct.data['id'] + '" ';
		cont += 	'style="';
		cont += 	'width: ' + this.getBoxSize() + 'px;';
		cont += 	'height: ' + construct.box.height + 'px;';
		cont += 	'top: ' + this.getBoxTop(i) + 'px;';
		cont += 	'left: ' + this.getBoxLeft(i) + 'px;';
		cont += 	'margin-bottom: ' + construct.box.spacing + 'px;';
		cont += 	'">';
		cont += 	'<div class="box-gradient"></div>';
		cont += 	'<div class="box-container">';
		cont += 		'<div class="box-slash"></div>';
		cont +=				this.getBoxData( construct.data );
		cont += 		'<div class="btn-box">';
		cont +=				'<div class="btn shw" id="' + construct.data['id'] + '"><i class="fas fa-expand"></i></div>';
		cont +=				'<div class="btn edt" id="' + construct.data['id'] + '"><i class="fas fa-edit"></i></div>';
		cont +=				'<div class="btn dlt" id="' + construct.data['id'] + '"><i class="fas fa-trash"></i></div>';
		cont += 		'</div>';
		cont += 	'</div>';
		cont += '</div>';
		return cont;
	},
	getBoxData: function(data) {
		var cont = '';
		for (var i=0; i<construct.box.content.length; i++) {
			var content = construct.box.content[i];

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
	updateBox: function() {
		construct.el = this.getElement();
		// $(box).css('animation-delay', delay + 's');
		$(construct.el).css('border-top-color', construct.data[construct.box.colors.top]);
		$(construct.el).css('border-bottom-color', construct.data[construct.box.colors.bot]);
		$('.box-gradient', construct.el).css('background-image', 'linear-gradient(to bottom, ' + construct.data[construct.box.colors.top] + ', ' + construct.data[construct.box.colors.bot] + ')');
		$('.box-slash', construct.el).css('background-color', construct.data[construct.box.colors.ico]);
		$('.box-slash', construct.el).css('box-shadow', '0 0 10px ' + construct.data[construct.box.colors.ico]);

		for (var i=0; i<construct.box.content.length; i++) {
			var content = construct.box.content[i];

			if (content['name'] == 'icon') {
				$('.icon i', construct.el).attr('class', construct.data[content['tag']]);

			} else if (content['name'] == 'image') {
				if (construct.data[content['tag']]) {
					$('.image', construct.el).css('background-image', 'url(' + construct.data[content['tag']] + ')');
				} else {
					$('.image', construct.el).css('background-image', 'url(' + nullImage + ')');
				}

			} else if (content['name'] == 'category') {
				$('.category', construct.el).css('background-color', construct.data[options.gridColors.cat]);
				if (content['tag']) {
					$('.category', construct.el).html(construct.data[content['tag']]);
				} else if (content['tags']) {
					$('.category', construct.el).html(getContentTags(content['tags'], construct.data, content['seperator']));
				}

			} else if (content['name'] == 'affinity') {
				$('.affinity', construct.el).css('background-color', construct.data[options.gridColors.aff]);
				$('.affinity i', construct.el).attr('class', construct.data[content['tag']]);

			} else if (content['name'] == 'name') {
				if (content['tag']) {
					$('.' + content['name'], construct.el).html(construct.data[content['tag']]);
				} else if (content['tags']) {
					$('.' + content['name'], construct.el).html(getContentTags(content['tags'], construct.data, content['seperator']));
				}

			} else if (content['name'] == 'description') {
				// $('.' + content['name'] + ' .text', construct.el).html( this.getDescriptionBlocks(construct.data['id'], construct.data[content['tag']]) );
			}
		}
	},
	updateBlocks: function() {
		for (var i=0; i<construct.dataBlocks.length; i++) {
			getBlockData(construct.dataBlocks[i]); 
		}	
	},
	getBoxSize: function() { return (construct.grid.width() / construct.box.columns) - ((construct.box.spacing * (2 / construct.box.columns) + construct.box.spacing)); },
	getBoxTop: function(i) { return Math.floor(i / construct.box.columns) * (construct.box.height + construct.box.spacing) + construct.box.spacing; },
	getBoxLeft: function(i) { return (i % construct.box.columns) * this.getBoxSize() + (construct.box.spacing * (i % construct.box.columns + 1)); },
	getElement: function() { return $('#' + construct.data['id'], construct.grid); },

	getDescriptionBlocks: function(dataId, des) {
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
					var id = dataId + '-' + i;
					cont += '<span class="dataBlock" id="' + id + '"><i class="fas fa-cog fa-spin reload"></i></span>';

					var data = {};
					data['owner'] = dataId;
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
});

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

		$('input[type="text"]', el).on('change', function() {
			$('input[type="color"]', $(this).parent()).val( $(this).val());
		});

		$('input[type="color"]', el).on('change', function() {
			$('input[type="text"]', $(this).parent()).val( $(this).val() );
		});
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

function getDatabyName(name, data) {
	for (var i=0; i<data.length; i++) {
		var namecomp = data[i]['name'].toLowerCase().replace(/\s/g, "");
		if (namecomp == name) return data[i];
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