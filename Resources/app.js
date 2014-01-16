function openView(view) {
    var v = Alloy.createController(view).getView();
    activityScreen.nextWindow(v);
}

var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

require("config");

Alloy.createController("index");