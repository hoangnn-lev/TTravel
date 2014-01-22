function Controller() {
    function profile() {
        openView("profile");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "left_menu";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.leftMenu = Ti.UI.createView({
        backgroundColor: "#212529",
        width: "80%",
        left: "-80%",
        height: Ti.UI.FILL,
        zIndex: 3,
        backgroundRepeat: true,
        id: "leftMenu",
        layout: "vertical"
    });
    $.__views.leftMenu && $.addTopLevelView($.__views.leftMenu);
    $.__views.__alloyId65 = Ti.UI.createView({
        top: 0,
        height: "220dp",
        width: Ti.UI.FILL,
        backgroundColor: "#272c30",
        backgroundRepeat: true,
        id: "__alloyId65"
    });
    $.__views.leftMenu.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createView({
        width: "120dp",
        height: "120dp",
        backgroundColor: "#3d4349",
        borderRadius: "120",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderColor: "#3d4349",
        top: "20dp",
        zIndex: 4,
        id: "__alloyId66"
    });
    $.__views.__alloyId65.add($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createImageView({
        width: "100dp",
        height: "100dp",
        top: "10dp",
        borderRadius: "100",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        image: "/midu.jpg",
        id: "__alloyId67"
    });
    $.__views.__alloyId66.add($.__views.__alloyId67);
    profile ? $.__views.__alloyId67.addEventListener("click", profile) : __defers["$.__views.__alloyId67!click!profile"] = true;
    $.__views.__alloyId68 = Ti.UI.createLabel({
        font: {
            fontSize: "24dp"
        },
        color: "#fff",
        top: "150dp",
        text: "Midu",
        id: "__alloyId68"
    });
    $.__views.__alloyId65.add($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createLabel({
        font: {
            fontSize: "14dp"
        },
        color: "#737374",
        top: "180dp",
        text: "Xem thông tin",
        id: "__alloyId69"
    });
    $.__views.__alloyId65.add($.__views.__alloyId69);
    profile ? $.__views.__alloyId69.addEventListener("click", profile) : __defers["$.__views.__alloyId69!click!profile"] = true;
    $.__views.__alloyId71 = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        height: "50dp",
        id: "__alloyId71"
    });
    var __alloyId72 = [];
    __alloyId72.push($.__views.__alloyId71);
    $.__views.__alloyId73 = Ti.UI.createImageView({
        left: "20dp",
        image: "/icon/about.png",
        height: "25dp",
        width: "25dp",
        id: "__alloyId73"
    });
    $.__views.__alloyId71.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        color: "#afb6bf",
        left: "60dp",
        text: "Giới thiệu",
        id: "__alloyId74"
    });
    $.__views.__alloyId71.add($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        height: "50dp",
        id: "__alloyId75"
    });
    __alloyId72.push($.__views.__alloyId75);
    profile ? $.__views.__alloyId75.addEventListener("click", profile) : __defers["$.__views.__alloyId75!click!profile"] = true;
    $.__views.__alloyId76 = Ti.UI.createImageView({
        left: "20dp",
        image: "/icon/profile_update.png",
        height: "25dp",
        width: "25dp",
        id: "__alloyId76"
    });
    $.__views.__alloyId75.add($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        color: "#afb6bf",
        left: "60dp",
        text: "Cập nhật thông tin",
        id: "__alloyId77"
    });
    $.__views.__alloyId75.add($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        height: "50dp",
        id: "__alloyId78"
    });
    __alloyId72.push($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createImageView({
        left: "20dp",
        image: "/icon/setting.png",
        height: "25dp",
        width: "25dp",
        id: "__alloyId79"
    });
    $.__views.__alloyId78.add($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        color: "#afb6bf",
        left: "60dp",
        text: "Cài đặt",
        id: "__alloyId80"
    });
    $.__views.__alloyId78.add($.__views.__alloyId80);
    $.__views.__alloyId70 = Ti.UI.createTableView({
        data: __alloyId72,
        backgroundColor: "#212529",
        separatorColor: "#3d4349",
        id: "__alloyId70"
    });
    $.__views.leftMenu.add($.__views.__alloyId70);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId67!click!profile"] && $.__views.__alloyId67.addEventListener("click", profile);
    __defers["$.__views.__alloyId69!click!profile"] && $.__views.__alloyId69.addEventListener("click", profile);
    __defers["$.__views.__alloyId75!click!profile"] && $.__views.__alloyId75.addEventListener("click", profile);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;