function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "bar_menu";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.barMenu = Ti.UI.createView({
        bottom: "0",
        backgroundColor: Ti.API.MAIN_COLOR,
        height: "50dp",
        width: Ti.UI.FILL,
        id: "barMenu"
    });
    $.__views.barMenu && $.addTopLevelView($.__views.barMenu);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var deviceWidth = Ti.Platform.displayCaps.platformWidth / (Ti.Platform.displayCaps.dpi / 160);
    var menu = [ {
        img: "/menu/search.png",
        v: "search"
    }, {
        img: "/menu/favourite.png",
        v: ""
    }, {
        img: "/menu/home.png",
        v: "home"
    }, {
        img: "/menu/history.png",
        v: ""
    }, {
        img: "/menu/news.png",
        v: ""
    } ];
    for (var i = 0, n = menu.length; n > i; i++) {
        var menuItemWidth = deviceWidth / n;
        var view = Ti.UI.createView({
            width: menuItemWidth + "dp",
            height: "40dp",
            left: i * menuItemWidth + "dp"
        });
        var button = Ti.UI.createImageView({
            image: menu[i].img,
            height: "30dp",
            width: "30dp",
            v: menu[i].v,
            opacity: .5,
            zIndex: 2
        });
        button.addEventListener("click", function(e) {
            this.setOpacity(1);
            e.source.v && openView(e.source.v);
        });
        view.add(button);
        $.barMenu.add(view);
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;