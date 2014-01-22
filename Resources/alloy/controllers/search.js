function Controller() {
    function search() {
        openView("search_list");
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
        bottom: "50dp",
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
    $.__views.__alloyId104 = Ti.UI.createImageView({
        height: "30dp",
        width: "12dp",
        image: "/icon/Previous@2x.png",
        left: "10dp",
        id: "__alloyId104"
    });
    $.__views.topBar.add($.__views.__alloyId104);
    back ? $.__views.__alloyId104.addEventListener("click", back) : __defers["$.__views.__alloyId104!click!back"] = true;
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
    $.__views.__alloyId105 = Ti.UI.createImageView({
        height: "30dp",
        zIndex: "2",
        width: "30dp",
        image: "/icon/search-icon-white.png",
        right: "10dp",
        id: "__alloyId105"
    });
    $.__views.topBar.add($.__views.__alloyId105);
    search ? $.__views.__alloyId105.addEventListener("click", search) : __defers["$.__views.__alloyId105!click!search"] = true;
    $.__views.__alloyId106 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId106"
    });
    $.__views.app.add($.__views.__alloyId106);
    $.__views.__alloyId107 = Ti.UI.createView({
        backgroundColor: "#f8f8f8",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "__alloyId107"
    });
    $.__views.__alloyId106.add($.__views.__alloyId107);
    $.__views.__alloyId108 = Ti.UI.createLabel({
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
        id: "__alloyId108"
    });
    $.__views.__alloyId107.add($.__views.__alloyId108);
    $.__views.__alloyId109 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.FILL,
        height: "1sp",
        backgroundColor: "#dfdfdf",
        top: 0,
        bottom: 0,
        id: "__alloyId109"
    });
    $.__views.__alloyId106.add($.__views.__alloyId109);
    $.__views.__alloyId110 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId110"
    });
    $.__views.__alloyId106.add($.__views.__alloyId110);
    $.__views.__alloyId111 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        bottom: "10dp",
        top: "10dp",
        id: "__alloyId111"
    });
    $.__views.__alloyId110.add($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createImageView({
        image: "/icon/near_me.png",
        width: "20dp",
        height: "20dp",
        left: "25dp",
        id: "__alloyId112"
    });
    $.__views.__alloyId111.add($.__views.__alloyId112);
    $.__views.__alloyId113 = Ti.UI.createLabel({
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
        id: "__alloyId113"
    });
    $.__views.__alloyId111.add($.__views.__alloyId113);
    $.__views.__alloyId114 = Ti.UI.createImageView({
        zIndex: "2",
        image: "/icon/location.png",
        width: "20dp",
        height: "20dp",
        right: "25dp",
        id: "__alloyId114"
    });
    $.__views.__alloyId111.add($.__views.__alloyId114);
    changeLocation ? $.__views.__alloyId114.addEventListener("click", changeLocation) : __defers["$.__views.__alloyId114!click!changeLocation"] = true;
    $.__views.__alloyId115 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.FILL,
        height: "1sp",
        backgroundColor: "#dfdfdf",
        top: 0,
        bottom: 0,
        left: "60dp",
        id: "__alloyId115"
    });
    $.__views.__alloyId110.add($.__views.__alloyId115);
    $.__views.__alloyId116 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        bottom: "10dp",
        top: "10dp",
        id: "__alloyId116"
    });
    $.__views.__alloyId110.add($.__views.__alloyId116);
    $.__views.__alloyId117 = Ti.UI.createImageView({
        image: "/icon/marker.png",
        width: "20dp",
        height: "20dp",
        left: "25dp",
        id: "__alloyId117"
    });
    $.__views.__alloyId116.add($.__views.__alloyId117);
    $.__views.__alloyId118 = Ti.UI.createTextField({
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
        id: "__alloyId118"
    });
    $.__views.__alloyId116.add($.__views.__alloyId118);
    $.__views.__alloyId119 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.FILL,
        height: "1sp",
        backgroundColor: "#dfdfdf",
        top: 0,
        bottom: 0,
        left: "60dp",
        id: "__alloyId119"
    });
    $.__views.__alloyId110.add($.__views.__alloyId119);
    $.__views.__alloyId120 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        bottom: "10dp",
        top: "10dp",
        id: "__alloyId120"
    });
    $.__views.__alloyId110.add($.__views.__alloyId120);
    $.__views.__alloyId121 = Ti.UI.createImageView({
        image: "/icon/person.png",
        width: "20dp",
        height: "20dp",
        left: "25dp",
        id: "__alloyId121"
    });
    $.__views.__alloyId120.add($.__views.__alloyId121);
    $.__views.__alloyId122 = Ti.UI.createTextField({
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
        id: "__alloyId122"
    });
    $.__views.__alloyId120.add($.__views.__alloyId122);
    $.__views.__alloyId123 = Ti.UI.createView({
        backgroundColor: "#f8f8f8",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "__alloyId123"
    });
    $.__views.__alloyId106.add($.__views.__alloyId123);
    $.__views.__alloyId124 = Ti.UI.createLabel({
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
        id: "__alloyId124"
    });
    $.__views.__alloyId123.add($.__views.__alloyId124);
    $.__views.__alloyId125 = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            fontSize: "12dp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        right: "20dp",
        color: "#ff7e25",
        text: "CLEAR ALL",
        id: "__alloyId125"
    });
    $.__views.__alloyId123.add($.__views.__alloyId125);
    clearFilter ? $.__views.__alloyId125.addEventListener("click", clearFilter) : __defers["$.__views.__alloyId125!click!clearFilter"] = true;
    $.__views.__alloyId126 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.FILL,
        height: "1sp",
        backgroundColor: "#dfdfdf",
        top: 0,
        bottom: 0,
        id: "__alloyId126"
    });
    $.__views.__alloyId106.add($.__views.__alloyId126);
    $.__views.__alloyId127 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        bottom: "10dp",
        top: "10dp",
        id: "__alloyId127"
    });
    $.__views.__alloyId106.add($.__views.__alloyId127);
    $.__views.__alloyId128 = Ti.UI.createImageView({
        image: "/icon/time.png",
        width: "20dp",
        height: "20dp",
        left: "25dp",
        id: "__alloyId128"
    });
    $.__views.__alloyId127.add($.__views.__alloyId128);
    $.__views.__alloyId129 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        left: "60dp",
        color: "#737373",
        top: 0,
        text: "Thời gian",
        id: "__alloyId129"
    });
    $.__views.__alloyId127.add($.__views.__alloyId129);
    $.__views.__alloyId130 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        bottom: "10dp",
        top: "0",
        id: "__alloyId130"
    });
    $.__views.__alloyId106.add($.__views.__alloyId130);
    $.__views.__alloyId131 = Ti.UI.createView({
        backgroundColor: "#dfdfdf",
        width: "80dp",
        height: "30dp",
        left: "60dp",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        id: "__alloyId131"
    });
    $.__views.__alloyId130.add($.__views.__alloyId131);
    $.__views.__alloyId132 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#737373",
        text: "16/02/13",
        id: "__alloyId132"
    });
    $.__views.__alloyId131.add($.__views.__alloyId132);
    $.__views.__alloyId133 = Ti.UI.createView({
        backgroundColor: "#dfdfdf",
        width: "40dp",
        height: "30dp",
        left: "150dp",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        id: "__alloyId133"
    });
    $.__views.__alloyId130.add($.__views.__alloyId133);
    $.__views.__alloyId134 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#737373",
        text: "-",
        id: "__alloyId134"
    });
    $.__views.__alloyId133.add($.__views.__alloyId134);
    $.__views.__alloyId135 = Ti.UI.createView({
        backgroundColor: "#dfdfdf",
        width: "80dp",
        height: "30dp",
        left: "200dp",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        id: "__alloyId135"
    });
    $.__views.__alloyId130.add($.__views.__alloyId135);
    $.__views.__alloyId136 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#737373",
        text: "20/02/13",
        id: "__alloyId136"
    });
    $.__views.__alloyId135.add($.__views.__alloyId136);
    $.__views.__alloyId137 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.FILL,
        height: "1sp",
        backgroundColor: "#dfdfdf",
        top: 0,
        bottom: 0,
        id: "__alloyId137"
    });
    $.__views.__alloyId106.add($.__views.__alloyId137);
    $.__views.__alloyId138 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        bottom: "10dp",
        top: "10dp",
        id: "__alloyId138"
    });
    $.__views.__alloyId106.add($.__views.__alloyId138);
    $.__views.__alloyId139 = Ti.UI.createImageView({
        image: "/icon/payment.png",
        width: "20dp",
        height: "20dp",
        left: "25dp",
        id: "__alloyId139"
    });
    $.__views.__alloyId138.add($.__views.__alloyId139);
    $.__views.__alloyId140 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        left: "60dp",
        color: "#737373",
        top: 0,
        text: "Mức giá",
        id: "__alloyId140"
    });
    $.__views.__alloyId138.add($.__views.__alloyId140);
    $.__views.__alloyId141 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        bottom: "10dp",
        top: "0",
        id: "__alloyId141"
    });
    $.__views.__alloyId106.add($.__views.__alloyId141);
    $.__views.__alloyId142 = Ti.UI.createView({
        backgroundColor: "#ff7e25",
        width: "80dp",
        height: "30dp",
        left: "60dp",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        top: 0,
        id: "__alloyId142"
    });
    $.__views.__alloyId141.add($.__views.__alloyId142);
    $.__views.__alloyId143 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#fff",
        text: "Tất cả",
        id: "__alloyId143"
    });
    $.__views.__alloyId142.add($.__views.__alloyId143);
    $.__views.__alloyId144 = Ti.UI.createView({
        backgroundColor: "#dfdfdf",
        width: "80dp",
        height: "30dp",
        left: "150dp",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        top: 0,
        id: "__alloyId144"
    });
    $.__views.__alloyId141.add($.__views.__alloyId144);
    $.__views.__alloyId145 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#737373",
        text: "$$",
        id: "__alloyId145"
    });
    $.__views.__alloyId144.add($.__views.__alloyId145);
    $.__views.__alloyId146 = Ti.UI.createView({
        backgroundColor: "#dfdfdf",
        width: "80dp",
        height: "30dp",
        left: "240dp",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        top: 0,
        id: "__alloyId146"
    });
    $.__views.__alloyId141.add($.__views.__alloyId146);
    $.__views.__alloyId147 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#737373",
        text: "$$$",
        id: "__alloyId147"
    });
    $.__views.__alloyId146.add($.__views.__alloyId147);
    $.__views.__alloyId148 = Ti.UI.createView({
        backgroundColor: "#dfdfdf",
        width: "80dp",
        height: "30dp",
        left: "60dp",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        top: "40dp",
        id: "__alloyId148"
    });
    $.__views.__alloyId141.add($.__views.__alloyId148);
    $.__views.__alloyId149 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#737373",
        text: "$$$$",
        id: "__alloyId149"
    });
    $.__views.__alloyId148.add($.__views.__alloyId149);
    $.__views.__alloyId150 = Ti.UI.createView({
        backgroundColor: "#dfdfdf",
        width: "80dp",
        height: "30dp",
        left: "150dp",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        top: "40dp",
        id: "__alloyId150"
    });
    $.__views.__alloyId141.add($.__views.__alloyId150);
    $.__views.__alloyId151 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#737373",
        text: "$$$$$",
        id: "__alloyId151"
    });
    $.__views.__alloyId150.add($.__views.__alloyId151);
    $.__views.__alloyId152 = Alloy.createController("bar_menu", {
        id: "__alloyId152",
        __parentSymbol: $.__views.search
    });
    $.__views.__alloyId152.setParent($.__views.search);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId104!click!back"] && $.__views.__alloyId104.addEventListener("click", back);
    __defers["$.__views.__alloyId105!click!search"] && $.__views.__alloyId105.addEventListener("click", search);
    __defers["$.__views.__alloyId114!click!changeLocation"] && $.__views.__alloyId114.addEventListener("click", changeLocation);
    __defers["$.__views.__alloyId125!click!clearFilter"] && $.__views.__alloyId125.addEventListener("click", clearFilter);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;