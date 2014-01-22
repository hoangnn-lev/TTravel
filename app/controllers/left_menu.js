function profile(e) {
	openView('profile');
}

function close() {
	$.leftMenu.animate({
		left : '-80%',
		duration : 200,
		curve : Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
	});
}

