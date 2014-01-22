var list = [];

list.push(create_list('/city/ha-noi.jpg', 'Du lịch nha trang vinperland 3 ngày 2 đêm', '3 ngày 2 đêm', 'Theo yêu cầu', '1.820.000 VNĐ'));
list.push(create_list('/city/ha-noi.jpg', 'Du lịch nha trang', '3 ngày 2 đêm', 'Theo yêu cầu', '1.820.000 VNĐ'));
list.push(create_list('/city/ha-noi.jpg', 'Du lịch nha trang', '3 ngày 2 đêm', 'Theo yêu cầu', '1.820.000 VNĐ'));
list.push(create_list('/city/ha-noi.jpg', 'Du lịch nha trang', '3 ngày 2 đêm', 'Theo yêu cầu', '1.820.000 VNĐ'));
list.push(create_list('/city/ha-noi.jpg', 'Du lịch nha trang', '3 ngày 2 đêm', 'Theo yêu cầu', '1.820.000 VNĐ'));
list.push(create_list('/city/ha-noi.jpg', 'Du lịch nha trang', '3 ngày 2 đêm', 'Theo yêu cầu', '1.820.000 VNĐ'));
list.push(create_list('/city/ha-noi.jpg', 'Du lịch nha trang', '3 ngày 2 đêm', 'Theo yêu cầu', '1.820.000 VNĐ'));
list.push(create_list('/city/ha-noi.jpg', 'Du lịch nha trang', '3 ngày 2 đêm', 'Theo yêu cầu', '1.820.000 VNĐ'));
list.push(create_list('/city/ha-noi.jpg', 'Du lịch nha trang', '3 ngày 2 đêm', 'Theo yêu cầu', '1.820.000 VNĐ'));
list.push(create_list('/city/ha-noi.jpg', 'Du lịch nha trang', '3 ngày 2 đêm', 'Theo yêu cầu', '1.820.000 VNĐ'));

$.list_tours.setData(list);

$.list_tours.addEventListener('click', function(e) {
	openView('detail_tour');
});

/*
 * function create_list
 * custom table view row for list tour
 * */
function create_list(img, title, day, departure, price) {
	var row = Ti.UI.createTableViewRow({
		font : {
			fontSize : '15dp'
		},
		height : '90dp',
		selectionStyle : 'none',
		selectedBackgroundColor : 'transparent',
		className : 'row'
	});

	//image tour
	row.add(Ti.UI.createImageView({
		image : img,
		width : '60dp',
		height : '60dp',
		left : '7dp',
		top : '15dp',
		right : '7dp',
		bottom : '5dp',
		borderColor : '#fff',
		borderRadius : '60'
	}));

	//title tour
	row.add(Ti.UI.createLabel({
		text : title,
		font : {
			fontSize : '18dp'
		},
		color : '#575757',
		left : '73dp',
		top : '7dp',
		height : '25dp'
	}));

	row.add(Ti.UI.createLabel({
		left : '73dp',
		color : '#cc0903',
		font : {
			fontSize : '14dp'
		},
		text : price,
		top : '28dp'
	}));

	row.add(Ti.UI.createLabel({
		text : 'Thời gian : ' + day,
		font : {
			fontSize : '14dp'
		},
		color : '#808080',
		left : '73dp',
		top : '45dp'
	}));

	row.add(Ti.UI.createLabel({
		text : 'Khởi hành : ' + departure,
		font : {
			fontSize : '14dp'
		},
		color : '#808080',
		left : '73dp',
		top : '60dp'
	}));

	return row;
}

function back(e) {
	openView('search');
}
