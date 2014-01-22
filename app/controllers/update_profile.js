function back(e) {
	openView('home');
}

var list = [];
var row = create_profile('/icon/profile/name.png', 'Tên đăng nhập', 'midu');
row.add(Ti.UI.createImageView({
	image : '/icon/profile/edit.png',
	width : '15dp',
	height : '15dp',
	right : '20dp'
}));
list.push(row);
list.push(create_profile('/icon/profile/key.png', 'Mật khẩu', '******'));
list.push(create_profile('/icon/profile/fullname.png', 'Họ & Tên', 'Mỹ Dung'));
list.push(create_profile('/icon/profile/calendar.png', 'Ngày sinh', '11/02/1990'));
list.push(create_profile('/icon/profile/gender.png', 'Giới tính', 'Nữ'));
list.push(create_profile('/icon/profile/email.png', 'Email', 'midu@gmail.com'));
list.push(create_profile('/icon/profile/phone.png', 'Điện thoại', '090 282 8888'));
list.push(create_profile('/icon/profile/address.png', 'Địa chỉ', '2 Hải Triều, Quận 1, TP. HCM'));

$.list_profile.setData(list);

/*
 * function create_profile
 * custom profile
 * */
function create_profile(img, title, description) {
	var row = Ti.UI.createTableViewRow({
		font : {
			fontSize : '15dp'
		},
		height : '60dp',
		selectionStyle : 'none',
		selectedBackgroundColor : 'transparent'
	});

	row.add(Ti.UI.createImageView({
		image : img,
		width : '25dp',
		height : '25dp',
		left : '20dp',
		top : '15dp',
		right : '20dp'
	}));

	row.add(Ti.UI.createLabel({
		text : title,
		font : {
			fontSize : '16dp'
		},
		color : Ti.API.MAIN_COLOR,
		left : '70dp',
		top : '7dp'
	}));

	row.add(Ti.UI.createLabel({
		text : description,
		font : {
			fontSize : '16dp'
		},
		color : '#808080',
		left : '70dp',
		top : '30dp'
	}));

	return row;
}