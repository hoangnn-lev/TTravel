function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "map";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.map = Ti.UI.createWindow({
        backgroundColor: "#fff",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "map"
    });
    $.__views.map && $.addTopLevelView($.__views.map);
    $.__views.__alloyId50 = Ti.UI.createView({
        backgroundImage: "/map.jpg",
        bottom: "50dp",
        id: "__alloyId50"
    });
    $.__views.map.add($.__views.__alloyId50);
    $.__views.hanoi = Ti.UI.createLabel({
        font: {
            fontSize: "14dp"
        },
        color: "red",
        top: "70dp",
        left: "160dp",
        text: "Hà Nội (8)",
        id: "hanoi"
    });
    $.__views.__alloyId50.add($.__views.hanoi);
    $.__views.__alloyId51 = Alloy.createController("bar_menu", {
        id: "__alloyId51",
        __parentSymbol: $.__views.map
    });
    $.__views.__alloyId51.setParent($.__views.map);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;