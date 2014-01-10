
$.index.open();

/*
 * function loginByTwitter
 * action 
 * */
function login(){
	var home = Alloy.createController('home').getView();
	home.open();
}


/*
 * function loginByTwitter
 * action 
 * */
function loginByFacebook(){
	var map = Alloy.createController('map').getView();
	map.open();
}

/*
 * function loginByTwitter
 * action 
 * */
function loginByTwitter(){
	alert('login By Twitter');
}
