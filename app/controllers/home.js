var list = [];

list.push(create_list('/city/ha-noi.jpg', 'Hà Nội', 8));
list.push(create_list('/city/nha-trang.jpg', 'Nha Trang', 80));
list.push(create_list('/city/hcm.jpg', 'TP.HCM', 122));
list.push(create_list('/city/hue.jpg', 'Khu vực Bắc trung bộ', 18));
list.push(create_list('/city/mien-tay.jpg', 'Miền Tây', 18));

list.push(create_list('/city/ha-noi.jpg', 'Hà Nội', 8));
list.push(create_list('/city/nha-trang.jpg', 'Nha Trang', 80));
list.push(create_list('/city/hcm.jpg', 'TP.HCM', 122));
list.push(create_list('/city/hue.jpg', 'Khu vực Bắc trung bộ', 18));
list.push(create_list('/city/mien-tay.jpg', 'Miền Tây', 18));

$.list_tour.setData(list);

$.list_tour.addEventListener('click', function(e) {
	alert(e.index);
});

$.searchButton.addEventListener('click', function(e) {
	alert('searching');
});

/*
 * function create_list
 * custom table view row for list tour
 * */
function create_list(img, title, num) {
	var row = Ti.UI.createTableViewRow({
		font : {
			fontSize : '15dp'
		},
		height : '70dp',
		selectionStyle : 'none',
		selectedBackgroundColor : 'transparent'
	});

	//image tour
	row.add(Ti.UI.createImageView({
		image : img,
		width : '60dp',
		height : '60dp',
		left : '5dp',
		top : '5dp',
		right : '5dp',
		bottom : '5dp',
		borderColor : '#fff',
		borderRadius : '60'
	}));

	//title tour
	row.add(Ti.UI.createLabel({
		text : title,
		font : {
			fontSize : '20dp'
		},
		color : '#575757',
		left : '70dp',
		top : '7dp'
	}));

	row.add(Ti.UI.createLabel({
		text : 'Có ' + num + ' tour du lịch đang mở',
		font : {
			fontSize : '16dp'
		},
		color : '#808080',
		left : '70dp',
		top : '30dp'
	}));

	row.add(Ti.UI.createLabel({
		right : '30dp',
		color : '#d3d3d3',
		font : {
			fontSize : '25dp'
		},
		text : num
	}));

	row.add(Ti.UI.createImageView({
		right : '10dp',
		image : '/icon/right.png',
		height : '40dp'
	}));
	return row;
}

