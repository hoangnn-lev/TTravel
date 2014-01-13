function openView(view) {
    v && v.close();
    v = Alloy.createController(view).getView();
    activityScreen.nextWindow(v);
}

var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

require("config");

var v;

Alloy.createController("index");