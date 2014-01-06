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
    var menu = [ "/menu/search.png", "/menu/favourite.png", "/menu/home.png", "/menu/history.png", "/menu/news.png" ];
    for (var i = 0, n = menu.length; n > i; i++) {
        var menuItemWidth = deviceWidth / n;
        var view = Ti.UI.createView({
            width: menuItemWidth + "dp",
            height: "40dp",
            left: i * menuItemWidth + "dp"
        });
        var button = Ti.UI.createImageView({
            image: menu[i],
            height: "30dp",
            width: "30dp",
            opacity: .5,
            zIndex: 2
        });
        button.addEventListener("click", function() {
            this.setOpacity(1);
        });
        view.add(button);
        $.barMenu.add(view);
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;