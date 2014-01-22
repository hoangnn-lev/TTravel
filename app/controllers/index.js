$.index.open();

/*
 * function loginByTwitter
 * action
 * */
function loginByFacebook() {
	openView('home');
}

/*
 * function loginByTwitter
 * action
 * */
function loginByTwitter() {
	openView('home');
}

function showDialog(){
    $.dialog.show();
};

function doClick(e){
    Ti.API.info('e.text: ' + e.text);
};

