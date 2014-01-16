$.index.open();

/*
 * function loginByTwitter
 * action
 * */
function loginByFacebook() {
	var home = Alloy.createController('profile').getView();
	home.open();
}

/*
 * function loginByTwitter
 * action
 * */
function loginByTwitter() {
	var home = Alloy.createController('profile').getView();
	home.open();
}

function showDialog(){
    $.dialog.show();
};

function doClick(e){
    Ti.API.info('e.text: ' + e.text);
};

