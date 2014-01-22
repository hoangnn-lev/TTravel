function openView(view) {
    if ("detail_news" == view) {
        detail_news || (detail_news = Alloy.createController("detail_news").getView());
        activityScreen.nextWindow(detail_news);
    } else if ("detail_tour" == view) {
        detail_tour || (detail_tour = Alloy.createController("detail_tour").getView());
        activityScreen.nextWindow(detail_tour);
    } else if ("favourite" == view) {
        favourite || (favourite = Alloy.createController("favourite").getView());
        activityScreen.nextWindow(favourite);
    } else if ("history" == view) {
        history || (history = Alloy.createController("history").getView());
        activityScreen.nextWindow(history);
    } else if ("home" == view) {
        home || (home = Alloy.createController("home").getView());
        activityScreen.nextWindow(home);
    } else if ("list_tour" == view) {
        list_tour || (list_tour = Alloy.createController("list_tour").getView());
        activityScreen.nextWindow(list_tour);
    } else if ("news" == view) {
        news || (news = Alloy.createController("news").getView());
        activityScreen.nextWindow(news);
    } else if ("profile" == view) {
        profile || (profile = Alloy.createController("profile").getView());
        activityScreen.nextWindow(profile);
    } else if ("search_list" == view) {
        search_list || (search_list = Alloy.createController("search_list").getView());
        activityScreen.nextWindow(search_list);
    } else if ("search" == view) {
        search || (search = Alloy.createController("search").getView());
        activityScreen.nextWindow(search);
    }
}

var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

require("config");

var detail_news, detail_tour, favourite, history, home, list_tour, news, profile, search_list, search;

Alloy.createController("index");