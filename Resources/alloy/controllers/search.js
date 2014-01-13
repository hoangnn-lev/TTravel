function Controller() {
    function search() {
        Alloy.createController("search_list").getView().open();
    }
    function changeLocation() {
        alert("Change location");
    }
    function clearFilter() {
        alert("clear all filter");
    }
    function back() {
        openView("home");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "search";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.search = Ti.UI.createWindow({
        backgroundColor: "#fff",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "search"
    });
    $.__views.search && $.addTopLevelView($.__views.search);
    $.__views.app = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        bottom: "60dp",
        id: "app"
    });
    $.__views.search.add($.__views.app);
    $.__views.topBar = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "50dp",
        backgroundColor: Ti.API.MAIN_COLOR,
        top: 0,
        id: "topBar"
    });
    $.__views.app.add($.__views.topBar);
    $.__views.__alloyId52 = Ti.UI.createImageView({
        height: "30dp",
        width: "12dp",
        image: "/icon/Previous@2x.png",
        left: "10dp",
        id: "__alloyId52"
    });
    $.__views.topBar.add($.__views.__alloyId52);
    back ? $.__views.__alloyId52.addEventListener("click", back) : __defers["$.__views.__alloyId52!click!back"] = true;
    $.__views.topBarText = Ti.UI.createLabel({
        font: {
            fontSize: "20dp"
        },
        color: "#fff",
        textAlign: "center",
        top: "10dp",
        text: "Search tour",
        id: "topBarText"
    });
    $.__views.topBar.add($.__views.topBarText);
    $.__views.__alloyId53 = Ti.UI.createImageView({
        height: "30dp",
        zIndex: "2",
        width: "30dp",
        image: "/icon/search-icon-white.png",
        right: "10dp",
        id: "__alloyId53"
    });
    $.__views.topBar.add($.__views.__alloyId53);
    search ? $.__views.__alloyId53.addEventListener("click", search) : __defers["$.__views.__alloyId53!click!search"] = true;
    $.__views.__alloyId54 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId54"
    });
    $.__views.app.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createView({
        backgroundColor: "#f8f8f8",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "__alloyId55"
    });
    $.__views.__alloyId54.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            fontSize: "14dp"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        top: "15dp",
        bottom: "5dp",
        left: "20dp",
        color: "#737373",
        text: "LỊCH TRÌNH",
        id: "__alloyId56"
    });
    $.__views.__alloyId55.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.FILL,
        height: "1sp",
        backgroundColor: "#dfdfdf",
        top: 0,
        bottom: 0,
        id: "__alloyId57"
    });
    $.__views.__alloyId54.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId58"
    });
    $.__views.__alloyId54.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        bottom: "10dp",
        top: "10dp",
        id: "__alloyId59"
    });
    $.__views.__alloyId58.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createImageView({
        image: "/icon/near_me.png",
        width: "20dp",
        height: "20dp",
        left: "25dp",
        id: "__alloyId60"
    });
    $.__views.__alloyId59.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        left: "60dp",
        color: "#737373",
        top: 0,
        text: "TP. Hồ Chí Minh",
        right: "30dp",
        id: "__alloyId61"
    });
    $.__views.__alloyId59.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createImageView({
        zIndex: "2",
        image: "/icon/location.png",
        width: "20dp",
        height: "20dp",
        right: "25dp",
        id: "__alloyId62"
    });
    $.__views.__alloyId59.add($.__views.__alloyId62);
    changeLocation ? $.__views.__alloyId62.addEventListener("click", changeLocation) : __defers["$.__views.__alloyId62!click!changeLocation"] = true;
    $.__views.__alloyId63 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.FILL,
        height: "1sp",
        backgroundColor: "#dfdfdf",
        top: 0,
        bottom: 0,
        left: "60dp",
        id: "__alloyId63"
    });
    $.__views.__alloyId58.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        bottom: "10dp",
        top: "10dp",
        id: "__alloyId64"
    });
    $.__views.__alloyId58.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createImageView({
        image: "/icon/marker.png",
        width: "20dp",
        height: "20dp",
        left: "25dp",
        id: "__alloyId65"
    });
    $.__views.__alloyId64.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createTextField({
        backgroundColor: "#fff",
        backgroundFocusedColor: "#fff",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "0",
        borderColor: "#fff",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        left: "50dp",
        top: 0,
        font: {
            fontSize: "15dp"
        },
        paddingLeft: "0",
        hintText: "Địa điểm đến ?",
        id: "__alloyId66"
    });
    $.__views.__alloyId64.add($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.FILL,
        height: "1sp",
        backgroundColor: "#dfdfdf",
        top: 0,
        bottom: 0,
        left: "60dp",
        id: "__alloyId67"
    });
    $.__views.__alloyId58.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        bottom: "10dp",
        top: "10dp",
        id: "__alloyId68"
    });
    $.__views.__alloyId58.add($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createImageView({
        image: "/icon/person.png",
        width: "20dp",
        height: "20dp",
        left: "25dp",
        id: "__alloyId69"
    });
    $.__views.__alloyId68.add($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createTextField({
        backgroundColor: "#fff",
        backgroundFocusedColor: "#fff",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "0",
        borderColor: "#fff",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        left: "50dp",
        top: 0,
        font: {
            fontSize: "15dp"
        },
        paddingLeft: "0",
        hintText: "Số người ?",
        text: "6",
        id: "__alloyId70"
    });
    $.__views.__alloyId68.add($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createView({
        backgroundColor: "#f8f8f8",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "__alloyId71"
    });
    $.__views.__alloyId54.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            fontSize: "14dp"
        },
        width: Ti.UI.FILL,
        height: "30dp",
        top: "15dp",
        bottom: "5dp",
        left: "20dp",
        color: "#737373",
        text: "FILLTER",
        id: "__alloyId72"
    });
    $.__views.__alloyId71.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            fontSize: "12dp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        right: "20dp",
        color: "#ff7e25",
        text: "CLEAR ALL",
        id: "__alloyId73"
    });
    $.__views.__alloyId71.add($.__views.__alloyId73);
    clearFilter ? $.__views.__alloyId73.addEventListener("click", clearFilter) : __defers["$.__views.__alloyId73!click!clearFilter"] = true;
    $.__views.__alloyId74 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.FILL,
        height: "1sp",
        backgroundColor: "#dfdfdf",
        top: 0,
        bottom: 0,
        id: "__alloyId74"
    });
    $.__views.__alloyId54.add($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        bottom: "10dp",
        top: "10dp",
        id: "__alloyId75"
    });
    $.__views.__alloyId54.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createImageView({
        image: "/icon/time.png",
        width: "20dp",
        height: "20dp",
        left: "25dp",
        id: "__alloyId76"
    });
    $.__views.__alloyId75.add($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        left: "60dp",
        color: "#737373",
        top: 0,
        text: "Thời gian",
        id: "__alloyId77"
    });
    $.__views.__alloyId75.add($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        bottom: "10dp",
        top: "0",
        id: "__alloyId78"
    });
    $.__views.__alloyId54.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createView({
        backgroundColor: "#dfdfdf",
        width: "80dp",
        height: "30dp",
        left: "60dp",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        id: "__alloyId79"
    });
    $.__views.__alloyId78.add($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#737373",
        text: "16/02/13",
        id: "__alloyId80"
    });
    $.__views.__alloyId79.add($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createView({
        backgroundColor: "#dfdfdf",
        width: "40dp",
        height: "30dp",
        left: "150dp",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        id: "__alloyId81"
    });
    $.__views.__alloyId78.add($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#737373",
        text: "-",
        id: "__alloyId82"
    });
    $.__views.__alloyId81.add($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createView({
        backgroundColor: "#dfdfdf",
        width: "80dp",
        height: "30dp",
        left: "200dp",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        id: "__alloyId83"
    });
    $.__views.__alloyId78.add($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#737373",
        text: "20/02/13",
        id: "__alloyId84"
    });
    $.__views.__alloyId83.add($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.FILL,
        height: "1sp",
        backgroundColor: "#dfdfdf",
        top: 0,
        bottom: 0,
        id: "__alloyId85"
    });
    $.__views.__alloyId54.add($.__views.__alloyId85);
    $.__views.__alloyId86 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        bottom: "10dp",
        top: "10dp",
        id: "__alloyId86"
    });
    $.__views.__alloyId54.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createImageView({
        image: "/icon/payment.png",
        width: "20dp",
        height: "20dp",
        left: "25dp",
        id: "__alloyId87"
    });
    $.__views.__alloyId86.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        left: "60dp",
        color: "#737373",
        top: 0,
        text: "Mức giá",
        id: "__alloyId88"
    });
    $.__views.__alloyId86.add($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        bottom: "10dp",
        top: "0",
        id: "__alloyId89"
    });
    $.__views.__alloyId54.add($.__views.__alloyId89);
    $.__views.__alloyId90 = Ti.UI.createView({
        backgroundColor: "#ff7e25",
        width: "80dp",
        height: "30dp",
        left: "60dp",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        top: 0,
        id: "__alloyId90"
    });
    $.__views.__alloyId89.add($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#fff",
        text: "Tất cả",
        id: "__alloyId91"
    });
    $.__views.__alloyId90.add($.__views.__alloyId91);
    $.__views.__alloyId92 = Ti.UI.createView({
        backgroundColor: "#dfdfdf",
        width: "80dp",
        height: "30dp",
        left: "150dp",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        top: 0,
        id: "__alloyId92"
    });
    $.__views.__alloyId89.add($.__views.__alloyId92);
    $.__views.__alloyId93 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#737373",
        text: "$$",
        id: "__alloyId93"
    });
    $.__views.__alloyId92.add($.__views.__alloyId93);
    $.__views.__alloyId94 = Ti.UI.createView({
        backgroundColor: "#dfdfdf",
        width: "80dp",
        height: "30dp",
        left: "240dp",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        top: 0,
        id: "__alloyId94"
    });
    $.__views.__alloyId89.add($.__views.__alloyId94);
    $.__views.__alloyId95 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#737373",
        text: "$$$",
        id: "__alloyId95"
    });
    $.__views.__alloyId94.add($.__views.__alloyId95);
    $.__views.__alloyId96 = Ti.UI.createView({
        backgroundColor: "#dfdfdf",
        width: "80dp",
        height: "30dp",
        left: "60dp",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        top: "40dp",
        id: "__alloyId96"
    });
    $.__views.__alloyId89.add($.__views.__alloyId96);
    $.__views.__alloyId97 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#737373",
        text: "$$$$",
        id: "__alloyId97"
    });
    $.__views.__alloyId96.add($.__views.__alloyId97);
    $.__views.__alloyId98 = Ti.UI.createView({
        backgroundColor: "#dfdfdf",
        width: "80dp",
        height: "30dp",
        left: "150dp",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        top: "40dp",
        id: "__alloyId98"
    });
    $.__views.__alloyId89.add($.__views.__alloyId98);
    $.__views.__alloyId99 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#737373",
        text: "$$$$$",
        id: "__alloyId99"
    });
    $.__views.__alloyId98.add($.__views.__alloyId99);
    $.__views.__alloyId100 = Alloy.createController("bar_menu", {
        id: "__alloyId100",
        __parentSymbol: $.__views.search
    });
    $.__views.__alloyId100.setParent($.__views.search);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId52!click!back"] && $.__views.__alloyId52.addEventListener("click", back);
    __defers["$.__views.__alloyId53!click!search"] && $.__views.__alloyId53.addEventListener("click", search);
    __defers["$.__views.__alloyId62!click!changeLocation"] && $.__views.__alloyId62.addEventListener("click", changeLocation);
    __defers["$.__views.__alloyId73!click!clearFilter"] && $.__views.__alloyId73.addEventListener("click", clearFilter);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;