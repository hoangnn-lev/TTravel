// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
require('config');
var detail_news, detail_tour, favourite, history, home, list_tour, news, profile, search_list, search;
function openView(view) {
	if(view=='detail_news'){
		if(!detail_news){
			detail_news = Alloy.createController('detail_news').getView();
		}
		activityScreen.nextWindow(detail_news);
	}else if(view=='detail_tour'){
		if(!detail_tour){
			detail_tour = Alloy.createController('detail_tour').getView();
		}
		activityScreen.nextWindow(detail_tour);
	}else if(view=='favourite'){
		if(!favourite){
			favourite = Alloy.createController('favourite').getView();
		}
		activityScreen.nextWindow(favourite);
	}else if(view=='history'){
		if(!history){
			history = Alloy.createController('history').getView();
		}
		activityScreen.nextWindow(history);
	}else if(view=='home'){
		if(!home){
			home = Alloy.createController('home').getView();
		}
		activityScreen.nextWindow(home);
	}else if(view=='list_tour'){
		if(!list_tour){
			list_tour = Alloy.createController('list_tour').getView();
		}
		activityScreen.nextWindow(list_tour);
	}else if(view=='news'){
		if(!news){
			news = Alloy.createController('news').getView();
		}
		activityScreen.nextWindow(news);
	}else if(view=='profile'){
		if(!profile){
			profile = Alloy.createController('profile').getView();
		}
		activityScreen.nextWindow(profile);
	}else if(view=='search_list'){
		if(!search_list){
			search_list = Alloy.createController('search_list').getView();
		}
		activityScreen.nextWindow(search_list);
	}else if(view=='search'){
		if(!search){
			search = Alloy.createController('search').getView();
		}
		activityScreen.nextWindow(search);
	}
	
}
