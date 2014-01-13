var deviceWidth = Ti.Platform.displayCaps.platformWidth / (Ti.Platform.displayCaps.dpi / 160);

var menu = [{
	'img' : '/menu/search.png',
	'v' : 'search'
}, {
	'img' : '/menu/favourite.png',
	'v' : ''
}, {
	'img' : '/menu/home.png',
	'v' : 'home'
}, {
	'img' : '/menu/history.png',
	'v' : ''
}, {
	'img' : '/menu/news.png',
	'v' : ''
}];

for (var i = 0, n = menu.length; i < n; i++) {

	var menuItemWidth = deviceWidth / n;

	var view = Ti.UI.createView({
		width : menuItemWidth + 'dp',
		height : '40dp',
		left : i * menuItemWidth + 'dp'
	});
	var button = Ti.UI.createImageView({
		image : menu[i].img,
		height : '30dp',
		width : '30dp',
		v : menu[i].v,
		opacity : .5,
		zIndex : 2
	});
	button.addEventListener('click', function(e) {
		this.setOpacity(1);
		if (e.source.v)
			openView(e.source.v);
	});
	view.add(button);
	$.barMenu.add(view);
}

