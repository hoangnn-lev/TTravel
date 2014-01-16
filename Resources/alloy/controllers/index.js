function Controller() {
    function loginByFacebook() {
        var home = Alloy.createController("profile").getView();
        home.open();
    }
    function loginByTwitter() {
        var home = Alloy.createController("profile").getView();
        home.open();
    }
    function showDialog() {
        $.dialog.show();
    }
    function doClick(e) {
        Ti.API.info("e.text: " + e.text);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#fff",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundImage: "/login.jpg",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.loginBox = Ti.UI.createView({
        top: "210dp",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "loginBox"
    });
    $.__views.index.add($.__views.loginBox);
    $.__views.__alloyId46 = Ti.UI.createView({
        bottom: "120dp",
        color: "#fff",
        textAlign: "left",
        height: "40dp",
        backgroundColor: "#345291",
        width: Ti.UI.FILL,
        left: "20dp",
        right: "20dp",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        borderColor: "#345291",
        id: "__alloyId46"
    });
    $.__views.loginBox.add($.__views.__alloyId46);
    loginByFacebook ? $.__views.__alloyId46.addEventListener("click", loginByFacebook) : __defers["$.__views.__alloyId46!click!loginByFacebook"] = true;
    $.__views.__alloyId47 = Ti.UI.createImageView({
        zIndex: "2",
        image: "/icon/facebook.png",
        height: "30dp",
        left: "10dp",
        width: "30dp",
        id: "__alloyId47"
    });
    $.__views.__alloyId46.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        color: "#fff",
        text: "Đăng nhập bằng Facebook",
        left: "45dp",
        id: "__alloyId48"
    });
    $.__views.__alloyId46.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createView({
        bottom: "70dp",
        color: "#fff",
        textAlign: "left",
        height: "40dp",
        backgroundColor: "#00aced",
        width: Ti.UI.FILL,
        left: "20dp",
        right: "20dp",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        borderColor: "#00aced",
        id: "__alloyId49"
    });
    $.__views.loginBox.add($.__views.__alloyId49);
    loginByTwitter ? $.__views.__alloyId49.addEventListener("click", loginByTwitter) : __defers["$.__views.__alloyId49!click!loginByTwitter"] = true;
    $.__views.__alloyId50 = Ti.UI.createImageView({
        zIndex: "2",
        image: "/icon/twitter.png",
        height: "30dp",
        left: "10dp",
        width: "30dp",
        id: "__alloyId50"
    });
    $.__views.__alloyId49.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        color: "#fff",
        text: "Đăng nhập bằng Twitter",
        left: "45dp",
        id: "__alloyId51"
    });
    $.__views.__alloyId49.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createView({
        bottom: "20dp",
        color: "#fff",
        height: "40dp",
        width: Ti.UI.FILL,
        id: "__alloyId52"
    });
    $.__views.loginBox.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        color: "#00597b",
        text: "Bạn đã có tài khoản? Đăng nhập",
        id: "__alloyId53"
    });
    $.__views.__alloyId52.add($.__views.__alloyId53);
    showDialog ? $.__views.__alloyId53.addEventListener("click", showDialog) : __defers["$.__views.__alloyId53!click!showDialog"] = true;
    $.__views.__alloyId54 = Ti.UI.createView({
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId54"
    });
    $.__views.__alloyId55 = Ti.UI.createTextField({
        backgroundColor: "transparent",
        backgroundFocusedColor: "#fff",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        borderColor: "#fff",
        top: "10dp",
        left: "20dp",
        right: "20dp",
        font: {
            fontSize: "15dp"
        },
        hintText: "Email",
        id: "__alloyId55"
    });
    $.__views.__alloyId54.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        color: "#fff",
        width: Ti.UI.FILL,
        height: "1sp",
        backgroundColor: "#dfdfdf",
        top: "2dp",
        bottom: "2dp",
        id: "__alloyId56"
    });
    $.__views.__alloyId54.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createTextField({
        backgroundColor: "transparent",
        backgroundFocusedColor: "#fff",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        borderColor: "#fff",
        top: "10dp",
        left: "20dp",
        right: "20dp",
        font: {
            fontSize: "15dp"
        },
        hintText: "Mật khẩu",
        passwordMask: "true",
        id: "__alloyId57"
    });
    $.__views.__alloyId54.add($.__views.__alloyId57);
    var __alloyId59 = [];
    __alloyId59.push("Đăng nhập");
    __alloyId59.push("Hủy");
    $.__views.dialog = Ti.UI.createAlertDialog({
        androidView: $.__views.__alloyId54,
        buttonNames: __alloyId59,
        id: "dialog",
        title: "Đăng nhập",
        cancel: "1"
    });
    doClick ? $.__views.dialog.addEventListener("click", doClick) : __defers["$.__views.dialog!click!doClick"] = true;
    $.__views.__alloyId54 = Ti.UI.createView({
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId54"
    });
    $.__views.dialog.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createTextField({
        backgroundColor: "transparent",
        backgroundFocusedColor: "#fff",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        borderColor: "#fff",
        top: "10dp",
        left: "20dp",
        right: "20dp",
        font: {
            fontSize: "15dp"
        },
        hintText: "Email",
        id: "__alloyId55"
    });
    $.__views.__alloyId54.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        color: "#fff",
        width: Ti.UI.FILL,
        height: "1sp",
        backgroundColor: "#dfdfdf",
        top: "2dp",
        bottom: "2dp",
        id: "__alloyId56"
    });
    $.__views.__alloyId54.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createTextField({
        backgroundColor: "transparent",
        backgroundFocusedColor: "#fff",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        borderColor: "#fff",
        top: "10dp",
        left: "20dp",
        right: "20dp",
        font: {
            fontSize: "15dp"
        },
        hintText: "Mật khẩu",
        passwordMask: "true",
        id: "__alloyId57"
    });
    $.__views.__alloyId54.add($.__views.__alloyId57);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.__alloyId46!click!loginByFacebook"] && $.__views.__alloyId46.addEventListener("click", loginByFacebook);
    __defers["$.__views.__alloyId49!click!loginByTwitter"] && $.__views.__alloyId49.addEventListener("click", loginByTwitter);
    __defers["$.__views.__alloyId53!click!showDialog"] && $.__views.__alloyId53.addEventListener("click", showDialog);
    __defers["$.__views.dialog!click!doClick"] && $.__views.dialog.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;