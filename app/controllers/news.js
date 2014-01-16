var list = [];

list.push(create_list('event', '/news/hoa-hau.jpg', '20 Hoa hậu đẹp nhất 2013', 'Trang Global Beauties vừa công bố Top 20 Miss Grand Slam 2013.'));
list.push(create_list('promotion', '/news/San.jpg', 'Sandakan - thành phố đầy bất ngờ', 'Đến Sandakan (Malaysia), bạn sẽ bất ngờ bởi cuộc sống đường phố độc đáo...'));
list.push(create_list('promotion', '/news/iPhone.jpg', '10 smartphone được mong chờ', 'Vừa bắt đầu năm mới, nhưng giới công nghệ đã dần nóng lên hàng loạt những tin tức...'));
list.push(create_list('news', '/news/hoa-hau.jpg', '20 Hoa hậu đẹp nhất 2013', 'Trang Global Beauties vừa công bố Top 20 Miss Grand Slam 2013.'));
list.push(create_list('event', '/news/San.jpg', 'Sandakan - thành phố đầy bất ngờ', 'Đến Sandakan (Malaysia), bạn sẽ bất ngờ bởi cuộc sống đường phố độc đáo...'));
list.push(create_list('event', '/news/iPhone.jpg', '10 smartphone được mong chờ', 'Vừa bắt đầu năm mới, nhưng giới công nghệ đã dần nóng lên hàng loạt những tin tức...'));
list.push(create_list('news', '/news/San.jpg', 'Sandakan - thành phố đầy bất ngờ', 'Đến Sandakan (Malaysia), bạn sẽ bất ngờ bởi cuộc sống đường phố độc đáo...'));
list.push(create_list('promotion', '/news/hoa-hau.jpg', '20 Hoa hậu đẹp nhất 2013', 'Trang Global Beauties vừa công bố Top 20 Miss Grand Slam 2013.'));
list.push(create_list('event', '/news/iPhone.jpg', '10 smartphone được mong chờ', 'Vừa bắt đầu năm mới, nhưng giới công nghệ đã dần nóng lên hàng loạt những tin tức...'));
list.push(create_list('promotion', '/news/hoa-hau.jpg', '20 Hoa hậu đẹp nhất 2013', 'Trang Global Beauties vừa công bố Top 20 Miss Grand Slam 2013.'));

$.list_news.setData(list);

$.list_news.addEventListener('click', function(e) {

	Alloy.createController('detail_news').getView().open();

});

/*
 * function create_list
 * custom table view row for list tour
 * */
function create_list(type, img, title, description) {

	var color = '#ccc';
	if (type == 'news')
		color = '#8f8f8f';
	else if (type == 'promotion')
		color = '#ff7e25';
	else if (type == 'event')
		color = '#9b05a8';

	var row = Ti.UI.createTableViewRow({
		font : {
			fontSize : '15dp'
		},
		selectionStyle : 'none',
		selectedBackgroundColor : 'transparent',
		className : 'row'
	});

	row.add(Ti.UI.createImageView({
		image : img,
		width : '60dp',
		height : '60dp',
		borderColor : '#fff',
		border : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		borderRadius : '60',
		left : '10dp'
	}));

	row.add(Ti.UI.createLabel({
		text : title,
		font : {
			fontSize : '18dp'
		},
		color : '#575757',
		left : '80dp',
		top : '10dp',
		height : '25dp'
	}));

	row.add(Ti.UI.createLabel({
		text : '08:00 20/02/14',
		font : {
			fontSize : '13dp'
		},
		left : '80dp',
		top : '27dp',
		height : '25dp'
	}));

	row.add(Ti.UI.createLabel({
		left : '80dp',
		font : {
			fontSize : '14dp'
		},
		text : description,
		top : '35dp',
		bottom : '10dp',
		color : '#a3a3a3',
	}));

	row.add(Ti.UI.createLabel({
		text : ' ' + type + ' ',
		backgroundColor : color,
		color : '#fff',
		height : '20dp',
		width : Ti.UI.SIZE,
		left : '80dp',
		bottom : '10dp',
		top : '90dp',
		font : {
			fontSize : '12dp'
		},
		border : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		borderRadius : '10',
	}));

	return row;
}

function back(e) {
	openView('home');
}

function filter(e){
	alert('filter news');
}
