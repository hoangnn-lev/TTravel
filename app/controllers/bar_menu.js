var deviceWidth = Ti.Platform.displayCaps.platformWidth / (Ti.Platform.displayCaps.dpi / 160);

var menu = [{
	'img' : '/menu/search.png',
	'v' : 'search'
}, {
	'img' : '/menu/favourite.png',
	'v' : 'favourite'
}, {
	'img' : '/menu/home-active.png',
	'v' : 'home'
}, {
	'img' : '/menu/history.png',
	'v' : 'history'
}, {
	'img' : '/menu/news.png',
	'v' : 'news'
}];

for (var i = 0, n = menu.length; i < n; i++) {

	var menuItemWidth = deviceWidth / n;

	var view = Ti.UI.createView({
		width : menuItemWidth + 'dp',
		height : '50dp',
		left : i * menuItemWidth + 'dp',
	});
	if (i == 4) {
		var notice = Ti.UI.createLabel({
			backgroundColor : '#ff7e25',
			color : '#fff',
			text : ' 8 ',
			font : {
				fontSize : '14dp'
			},
			top : '3dp',
			zIndex : 3,
			border : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			borderRadius : '16'
		});
		view.add(notice);
	}

	var button = Ti.UI.createImageView({
		image : menu[i].img,
		height : '30dp',
		width : '30dp',
		v : menu[i].v,
		zIndex : 2
	});
	button.addEventListener('click', function(e) {
		//this.setOpacity(1);
		if (e.source.v)
			openView(e.source.v);
	});
	view.add(button);
	$.barMenu.add(view);
}

