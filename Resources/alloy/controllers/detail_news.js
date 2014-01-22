function Controller() {
    function back() {
        openView("news");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detail_news";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.detail_news = Ti.UI.createWindow({
        backgroundColor: "#fff",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "detail_news"
    });
    $.__views.detail_news && $.addTopLevelView($.__views.detail_news);
    $.__views.app = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        bottom: "50dp",
        id: "app"
    });
    $.__views.detail_news.add($.__views.app);
    $.__views.topBar = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "50dp",
        backgroundColor: Ti.API.MAIN_COLOR,
        top: 0,
        id: "topBar"
    });
    $.__views.app.add($.__views.topBar);
    $.__views.__alloyId0 = Ti.UI.createImageView({
        height: "30dp",
        width: "12dp",
        image: "/icon/Previous@2x.png",
        left: "10dp",
        id: "__alloyId0"
    });
    $.__views.topBar.add($.__views.__alloyId0);
    back ? $.__views.__alloyId0.addEventListener("click", back) : __defers["$.__views.__alloyId0!click!back"] = true;
    $.__views.__alloyId1 = Ti.UI.createImageView({
        height: "20dp",
        width: "20dp",
        image: "/icon/n.png",
        left: "35dp",
        id: "__alloyId1"
    });
    $.__views.topBar.add($.__views.__alloyId1);
    $.__views.topBarText = Ti.UI.createLabel({
        font: {
            fontSize: "17dp"
        },
        color: "#fff",
        left: "60dp",
        text: "20 Hoa hậu đẹp nhất 2013",
        id: "topBarText"
    });
    $.__views.topBar.add($.__views.topBarText);
    $.__views.__alloyId2 = Ti.UI.createView({
        id: "__alloyId2"
    });
    $.__views.app.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        text: "Chi tiết tin tức",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Alloy.createController("bar_menu", {
        id: "__alloyId4",
        __parentSymbol: $.__views.detail_news
    });
    $.__views.__alloyId4.setParent($.__views.detail_news);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId0!click!back"] && $.__views.__alloyId0.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;