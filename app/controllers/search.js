function search(e) {
	Alloy.createController('search_list').getView().open();
}

function changeLocation(e) {
	alert('Change location');
}

function clearFilter(e) {
	alert('clear all filter');
}

function back(e) {
	openView('home');
}
