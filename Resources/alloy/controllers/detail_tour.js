function Controller() {
    function booking() {
        alert("á");
    }
    function next() {
        alert("next");
    }
    function prev() {
        alert("prev");
    }
    function imgClick() {
        alert("content img click");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detail_tour";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.detail_tour = Ti.UI.createWindow({
        backgroundColor: "#fff",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "detail_tour"
    });
    $.__views.detail_tour && $.addTopLevelView($.__views.detail_tour);
    $.__views.app = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        bottom: "60dp",
        id: "app"
    });
    $.__views.detail_tour.add($.__views.app);
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
    $.__views.__alloyId1 = Ti.UI.createImageView({
        height: "20dp",
        width: "20dp",
        image: "/icon/p.png",
        left: "35dp",
        id: "__alloyId1"
    });
    $.__views.topBar.add($.__views.__alloyId1);
    $.__views.topBarText = Ti.UI.createLabel({
        font: {
            fontSize: "17dp"
        },
        color: "#fff",
        text: "Nha Trang VinperLand",
        left: "60dp",
        id: "topBarText"
    });
    $.__views.topBar.add($.__views.topBarText);
    $.__views.detail = Ti.UI.createView({
        left: "10dp",
        right: "10dp",
        bottom: "10dp",
        top: "10dp",
        layout: "vertical",
        id: "detail"
    });
    $.__views.app.add($.__views.detail);
    $.__views.tourDescription = Ti.UI.createView({
        top: 0,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "tourDescription"
    });
    $.__views.detail.add($.__views.tourDescription);
    $.__views.description = Ti.UI.createView({
        left: "0",
        height: Ti.UI.SIZE,
        top: "5dp",
        id: "description"
    });
    $.__views.tourDescription.add($.__views.description);
    $.__views.__alloyId2 = Ti.UI.createImageView({
        image: "/icon/rating.png",
        top: "0",
        left: "0",
        width: "109dp",
        height: "21dp",
        id: "__alloyId2"
    });
    $.__views.description.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createImageView({
        image: "/icon/booking.png",
        top: "0",
        right: "0",
        width: "132dp",
        height: "30dp",
        id: "__alloyId3"
    });
    $.__views.description.add($.__views.__alloyId3);
    booking ? $.__views.__alloyId3.addEventListener("click", booking) : __defers["$.__views.__alloyId3!click!booking"] = true;
    $.__views.__alloyId4 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: "23dp",
        id: "__alloyId4"
    });
    $.__views.description.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        font: {
            fontSize: "18dp"
        },
        color: "#069de4",
        left: "0",
        top: "0",
        text: "1.500.00 VNĐ",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: "50dp",
        id: "__alloyId6"
    });
    $.__views.description.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createImageView({
        image: "/icon/flag.png",
        left: "0",
        height: "15dp",
        width: "15dp",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        color: "#737373",
        left: "25dp",
        text: "Điểm xuất phát: TP. Hồ Chí Minh",
        id: "__alloyId8"
    });
    $.__views.__alloyId6.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: "73dp",
        id: "__alloyId9"
    });
    $.__views.description.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createImageView({
        image: "/icon/clock.png",
        left: "0",
        height: "15dp",
        width: "15dp",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        color: "#737373",
        left: "25dp",
        text: "Thời gian: 3 ngày 2 đêm",
        id: "__alloyId11"
    });
    $.__views.__alloyId9.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: "96dp",
        id: "__alloyId12"
    });
    $.__views.description.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createImageView({
        image: "/icon/bus.png",
        left: "0",
        height: "15dp",
        width: "15dp",
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        color: "#737373",
        left: "25dp",
        text: "Ngày khởi hành: Theo yêu cầu",
        id: "__alloyId14"
    });
    $.__views.__alloyId12.add($.__views.__alloyId14);
    $.__views.tabLink = Ti.UI.createView({
        top: "10dp",
        layout: "vertical",
        id: "tabLink"
    });
    $.__views.detail.add($.__views.tabLink);
    $.__views.link = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "25dp",
        id: "link"
    });
    $.__views.tabLink.add($.__views.link);
    $.__views.__alloyId15 = Ti.UI.createImageView({
        width: "15dp",
        height: "15dp",
        left: 0,
        image: "/icon/remove.png",
        id: "__alloyId15"
    });
    $.__views.link.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        left: "20dp",
        color: "#8d8d8d",
        text: "Hình ảnh",
        id: "__alloyId16"
    });
    $.__views.link.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.FILL,
        height: "1sp",
        backgroundColor: "#dfdfdf",
        top: "2dp",
        bottom: "2dp",
        id: "__alloyId17"
    });
    $.__views.tabLink.add($.__views.__alloyId17);
    $.__views.imgColection = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "160dp",
        backgroundColor: "#efefef",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        borderColor: "#efefef",
        top: "10dp",
        bottom: "10dp",
        id: "imgColection"
    });
    $.__views.tabLink.add($.__views.imgColection);
    $.__views.__alloyId18 = Ti.UI.createImageView({
        width: "22dp",
        zIndex: "2",
        left: "5dp",
        height: "40dp",
        image: "/icon/prev.png",
        id: "__alloyId18"
    });
    $.__views.imgColection.add($.__views.__alloyId18);
    prev ? $.__views.__alloyId18.addEventListener("click", prev) : __defers["$.__views.__alloyId18!click!prev"] = true;
    $.__views.imgContent = Ti.UI.createView({
        top: "5dp",
        bottom: "5dp",
        left: "5dp",
        right: "5dp",
        width: Ti.UI.FILL,
        height: "150dp",
        id: "imgContent",
        zIndex: "1"
    });
    $.__views.imgColection.add($.__views.imgContent);
    imgClick ? $.__views.imgContent.addEventListener("click", imgClick) : __defers["$.__views.imgContent!click!imgClick"] = true;
    $.__views.__alloyId19 = Ti.UI.createImageView({
        image: "/nha-trang-wall.jpg",
        height: "150dp",
        width: "330dp",
        id: "__alloyId19"
    });
    $.__views.imgContent.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createImageView({
        width: "22dp",
        zIndex: "2",
        right: "5dp",
        height: "40dp",
        image: "/icon/next.png",
        id: "__alloyId20"
    });
    $.__views.imgColection.add($.__views.__alloyId20);
    next ? $.__views.__alloyId20.addEventListener("click", next) : __defers["$.__views.__alloyId20!click!next"] = true;
    $.__views.link = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "25dp",
        id: "link"
    });
    $.__views.tabLink.add($.__views.link);
    $.__views.__alloyId21 = Ti.UI.createImageView({
        width: "15dp",
        height: "15dp",
        left: 0,
        image: "/icon/add.png",
        id: "__alloyId21"
    });
    $.__views.link.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        left: "20dp",
        color: "#8d8d8d",
        text: "Chi tiết tour",
        id: "__alloyId22"
    });
    $.__views.link.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.FILL,
        height: "1sp",
        backgroundColor: "#dfdfdf",
        top: "2dp",
        bottom: "2dp",
        id: "__alloyId23"
    });
    $.__views.tabLink.add($.__views.__alloyId23);
    $.__views.link = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "25dp",
        id: "link"
    });
    $.__views.tabLink.add($.__views.link);
    $.__views.__alloyId24 = Ti.UI.createImageView({
        width: "15dp",
        height: "15dp",
        left: 0,
        image: "/icon/add.png",
        id: "__alloyId24"
    });
    $.__views.link.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        left: "20dp",
        color: "#8d8d8d",
        text: "Chương trình tour",
        id: "__alloyId25"
    });
    $.__views.link.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.FILL,
        height: "1sp",
        backgroundColor: "#dfdfdf",
        top: "2dp",
        bottom: "2dp",
        id: "__alloyId26"
    });
    $.__views.tabLink.add($.__views.__alloyId26);
    $.__views.link = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "25dp",
        id: "link"
    });
    $.__views.tabLink.add($.__views.link);
    $.__views.__alloyId27 = Ti.UI.createImageView({
        width: "15dp",
        height: "15dp",
        left: 0,
        image: "/icon/add.png",
        id: "__alloyId27"
    });
    $.__views.link.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        left: "20dp",
        color: "#8d8d8d",
        text: "Điều kiện - Quy định",
        id: "__alloyId28"
    });
    $.__views.link.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.FILL,
        height: "1sp",
        backgroundColor: "#dfdfdf",
        top: "2dp",
        bottom: "2dp",
        id: "__alloyId29"
    });
    $.__views.tabLink.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Alloy.createController("bar_menu", {
        id: "__alloyId30",
        __parentSymbol: $.__views.detail_tour
    });
    $.__views.__alloyId30.setParent($.__views.detail_tour);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId3!click!booking"] && $.__views.__alloyId3.addEventListener("click", booking);
    __defers["$.__views.__alloyId18!click!prev"] && $.__views.__alloyId18.addEventListener("click", prev);
    __defers["$.__views.imgContent!click!imgClick"] && $.__views.imgContent.addEventListener("click", imgClick);
    __defers["$.__views.__alloyId20!click!next"] && $.__views.__alloyId20.addEventListener("click", next);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;