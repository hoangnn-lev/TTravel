var deviceWidth = Ti.Platform.displayCaps.platformWidth / (Ti.Platform.displayCaps.dpi / 160);

var menu = ['/menu/search.png', '/menu/favourite.png', '/menu/home.png', '/menu/history.png', '/menu/news.png'];

for (var i = 0, n = menu.length; i < n; i++) {

	var menuItemWidth = deviceWidth / n;

	var view = Ti.UI.createView({
		width : menuItemWidth + 'dp',
		height : '40dp',
		left : i * menuItemWidth + 'dp'
	});
	var button = Ti.UI.createImageView({
		image : menu[i],
		height : '30dp',
		width : '30dp',
		opacity : .5,
		zIndex : 2
	});
	button.addEventListener('click', function(e) {
		this.setOpacity(1);
	});
	view.add(button);
	$.barMenu.add(view);
}

