function Controller() {
    function login() {
        var home = Alloy.createController("home").getView();
        home.open();
    }
    function loginByFacebook() {
        var map = Alloy.createController("map").getView();
        map.open();
    }
    function loginByTwitter() {
        alert("login By Twitter");
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
        bottom: "30dp",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "loginBox"
    });
    $.__views.index.add($.__views.loginBox);
    $.__views.__alloyId36 = Ti.UI.createView({
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
        id: "__alloyId36"
    });
    $.__views.loginBox.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createImageView({
        zIndex: "2",
        image: "/icon/facebook.png",
        height: "30dp",
        left: "10dp",
        width: "30dp",
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        color: "#fff",
        text: "Đăng nhập bằng Facebook",
        left: "45dp",
        id: "__alloyId38"
    });
    $.__views.__alloyId36.add($.__views.__alloyId38);
    loginByFacebook ? $.__views.__alloyId38.addEventListener("click", loginByFacebook) : __defers["$.__views.__alloyId38!click!loginByFacebook"] = true;
    $.__views.__alloyId39 = Ti.UI.createView({
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
        id: "__alloyId39"
    });
    $.__views.loginBox.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createImageView({
        zIndex: "2",
        image: "/icon/twitter.png",
        height: "30dp",
        left: "10dp",
        width: "30dp",
        id: "__alloyId40"
    });
    $.__views.__alloyId39.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        color: "#fff",
        text: "Đăng nhập bằng Twitter",
        left: "45dp",
        id: "__alloyId41"
    });
    $.__views.__alloyId39.add($.__views.__alloyId41);
    loginByTwitter ? $.__views.__alloyId41.addEventListener("click", loginByTwitter) : __defers["$.__views.__alloyId41!click!loginByTwitter"] = true;
    $.__views.__alloyId42 = Ti.UI.createView({
        bottom: "20dp",
        color: "#616161",
        height: "40dp",
        width: Ti.UI.FILL,
        id: "__alloyId42"
    });
    $.__views.loginBox.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        color: "#00597b",
        text: "Bạn đã có tài khoản? Đăng nhập.",
        id: "__alloyId43"
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
    login ? $.__views.__alloyId43.addEventListener("click", login) : __defers["$.__views.__alloyId43!click!login"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.__alloyId38!click!loginByFacebook"] && $.__views.__alloyId38.addEventListener("click", loginByFacebook);
    __defers["$.__views.__alloyId41!click!loginByTwitter"] && $.__views.__alloyId41.addEventListener("click", loginByTwitter);
    __defers["$.__views.__alloyId43!click!login"] && $.__views.__alloyId43.addEventListener("click", login);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;