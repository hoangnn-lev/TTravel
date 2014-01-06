function Controller() {
    function login() {
        var home = Alloy.createController("home").getView();
        home.open();
    }
    function forgetPassword() {
        alert("forget passs");
    }
    function loginByFacebook() {
        alert("login By Facebook");
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
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.loginBar = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.FILL,
        height: "40dp",
        backgroundColor: Ti.API.MAIN_COLOR,
        top: 0,
        id: "loginBar"
    });
    $.__views.index.add($.__views.loginBar);
    $.__views.loginBarText = Ti.UI.createLabel({
        font: {
            fontSize: "20dp"
        },
        color: "#fff",
        textAlign: "center",
        top: "8dp",
        text: "Đăng nhập",
        id: "loginBarText"
    });
    $.__views.loginBar.add($.__views.loginBarText);
    $.__views.logo = Ti.UI.createImageView({
        id: "logo",
        top: "20dp",
        image: "/logo.png",
        width: "100dp",
        height: "74dp"
    });
    $.__views.index.add($.__views.logo);
    $.__views.loginBox = Ti.UI.createView({
        top: "20dp",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        layout: "vertical",
        id: "loginBox"
    });
    $.__views.index.add($.__views.loginBox);
    $.__views.__alloyId5 = Ti.UI.createTextField({
        backgroundColor: "#ecf8fe",
        backgroundFocusedColor: "#c2ebff",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "0",
        borderColor: "#fff",
        width: Ti.UI.FILL,
        height: "40dp",
        top: "10dp",
        font: {
            fontSize: "15dp"
        },
        left: "20dp",
        right: "20dp",
        hintText: "Email",
        id: "__alloyId5"
    });
    $.__views.loginBox.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createTextField({
        backgroundColor: "#ecf8fe",
        backgroundFocusedColor: "#c2ebff",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "0",
        borderColor: "#fff",
        width: Ti.UI.FILL,
        height: "40dp",
        top: "10dp",
        font: {
            fontSize: "15dp"
        },
        left: "20dp",
        right: "20dp",
        hintText: "Mật khẩu",
        passwordMask: "true",
        id: "__alloyId6"
    });
    $.__views.loginBox.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createButton({
        top: "10dp",
        width: Ti.UI.FILL,
        backgroundColor: "#bfbfbf",
        backgroundSelectedColor: "#c2ebff",
        height: "45dp",
        color: "#fff",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        borderColor: "#bfbfbf",
        left: "20dp",
        right: "20dp",
        title: "Đăng nhập",
        id: "__alloyId7"
    });
    $.__views.loginBox.add($.__views.__alloyId7);
    login ? $.__views.__alloyId7.addEventListener("click", login) : __defers["$.__views.__alloyId7!click!login"] = true;
    $.__views.__alloyId8 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        top: "10dp",
        color: "red",
        textAlign: "center",
        width: Ti.UI.FILL,
        text: "Quên mật khẩu ?",
        id: "__alloyId8"
    });
    $.__views.loginBox.add($.__views.__alloyId8);
    forgetPassword ? $.__views.__alloyId8.addEventListener("click", forgetPassword) : __defers["$.__views.__alloyId8!click!forgetPassword"] = true;
    $.__views.__alloyId9 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        top: "10dp",
        color: "#ccc",
        textAlign: "center",
        text: "OR",
        id: "__alloyId9"
    });
    $.__views.loginBox.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        top: "10dp",
        color: "#345291",
        textAlign: "center",
        text: "Đăng nhập bằng Facebook",
        id: "__alloyId10"
    });
    $.__views.loginBox.add($.__views.__alloyId10);
    loginByFacebook ? $.__views.__alloyId10.addEventListener("click", loginByFacebook) : __defers["$.__views.__alloyId10!click!loginByFacebook"] = true;
    $.__views.__alloyId11 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        top: "10dp",
        color: "#00aced",
        textAlign: "center",
        text: "Đăng nhập bằng Twitter",
        id: "__alloyId11"
    });
    $.__views.loginBox.add($.__views.__alloyId11);
    loginByTwitter ? $.__views.__alloyId11.addEventListener("click", loginByTwitter) : __defers["$.__views.__alloyId11!click!loginByTwitter"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.__alloyId7!click!login"] && $.__views.__alloyId7.addEventListener("click", login);
    __defers["$.__views.__alloyId8!click!forgetPassword"] && $.__views.__alloyId8.addEventListener("click", forgetPassword);
    __defers["$.__views.__alloyId10!click!loginByFacebook"] && $.__views.__alloyId10.addEventListener("click", loginByFacebook);
    __defers["$.__views.__alloyId11!click!loginByTwitter"] && $.__views.__alloyId11.addEventListener("click", loginByTwitter);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;