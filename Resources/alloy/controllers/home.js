function Controller() {
    function create_list(img, title, num) {
        var row = Ti.UI.createTableViewRow({
            font: {
                fontSize: "15dp"
            },
            height: "70dp",
            selectionStyle: "none",
            selectedBackgroundColor: "transparent"
        });
        row.add(Ti.UI.createImageView({
            image: img,
            width: "60dp",
            height: "60dp",
            left: "5dp",
            top: "5dp",
            right: "5dp",
            bottom: "5dp",
            borderColor: "#fff",
            borderRadius: "60"
        }));
        row.add(Ti.UI.createLabel({
            text: title,
            font: {
                fontSize: "20dp"
            },
            color: "#575757",
            left: "70dp",
            top: "7dp"
        }));
        row.add(Ti.UI.createLabel({
            text: "Có " + num + " tour du lịch đang mở",
            font: {
                fontSize: "16dp"
            },
            color: "#808080",
            left: "70dp",
            top: "30dp"
        }));
        row.add(Ti.UI.createLabel({
            right: "30dp",
            color: "#d3d3d3",
            font: {
                fontSize: "25dp"
            },
            text: num
        }));
        row.add(Ti.UI.createImageView({
            right: "10dp",
            image: "/icon/right.png",
            height: "40dp"
        }));
        return row;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.home = Ti.UI.createWindow({
        backgroundColor: "#fff",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "home"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
    $.__views.app = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        bottom: "60dp",
        id: "app"
    });
    $.__views.home.add($.__views.app);
    $.__views.banner = Ti.UI.createView({
        top: 0,
        height: Ti.UI.SIZE,
        id: "banner"
    });
    $.__views.app.add($.__views.banner);
    $.__views.__alloyId0 = Ti.UI.createImageView({
        image: "/banner/nha-trang.jpg",
        width: Ti.UI.FILL,
        top: "0",
        id: "__alloyId0"
    });
    $.__views.banner.add($.__views.__alloyId0);
    $.__views.search = Ti.UI.createView({
        backgroundColor: Ti.API.MAIN_COLOR,
        height: "60dp",
        width: Ti.UI.FILL,
        top: 0,
        id: "search"
    });
    $.__views.app.add($.__views.search);
    $.__views.__alloyId1 = Ti.UI.createView({
        id: "__alloyId1"
    });
    $.__views.search.add($.__views.__alloyId1);
    $.__views.searchIcon = Ti.UI.createView({
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        width: "50dp",
        height: "40dp",
        backgroundColor: "#fff",
        left: "10dp",
        id: "searchIcon"
    });
    $.__views.__alloyId1.add($.__views.searchIcon);
    $.__views.__alloyId2 = Ti.UI.createImageView({
        left: "8dp",
        zIndex: "1",
        image: "/icon/search-icon.png",
        height: "25dp",
        width: "25dp",
        top: "7dp",
        id: "__alloyId2"
    });
    $.__views.searchIcon.add($.__views.__alloyId2);
    $.__views.searchBar = Ti.UI.createTextField({
        backgroundColor: "#fff",
        backgroundFocusedColor: "#fff",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        borderColor: "#fff",
        width: Ti.UI.FILL,
        height: "40dp",
        top: "10dp",
        bottom: "10dp",
        right: "70dp",
        left: "44dp",
        font: {
            fontSize: "15dp"
        },
        color: "#d3d3d3",
        id: "searchBar",
        hintText: "Nơi bạn muốn đến..."
    });
    $.__views.__alloyId1.add($.__views.searchBar);
    $.__views.searchButton = Ti.UI.createButton({
        height: "40dp",
        top: "10dp",
        bottom: "10dp",
        right: "5dp",
        width: "60dp",
        backgroundColor: Ti.API.MAIN_COLOR,
        color: "#fff",
        font: {
            fontWeigth: "bold",
            fontSize: "17dp"
        },
        id: "searchButton",
        title: "TÌM"
    });
    $.__views.__alloyId1.add($.__views.searchButton);
    $.__views.list_tour = Ti.UI.createTableView({
        id: "list_tour"
    });
    $.__views.app.add($.__views.list_tour);
    $.__views.__alloyId3 = Alloy.createController("bar_menu", {
        id: "__alloyId3",
        __parentSymbol: $.__views.home
    });
    $.__views.__alloyId3.setParent($.__views.home);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var list = [];
    list.push(create_list("/city/ha-noi.jpg", "Hà Nội", 8));
    list.push(create_list("/city/nha-trang.jpg", "Nha Trang", 80));
    list.push(create_list("/city/hcm.jpg", "TP.HCM", 122));
    list.push(create_list("/city/hue.jpg", "Khu vực Bắc trung bộ", 18));
    list.push(create_list("/city/mien-tay.jpg", "Miền Tây", 18));
    list.push(create_list("/city/ha-noi.jpg", "Hà Nội", 8));
    list.push(create_list("/city/nha-trang.jpg", "Nha Trang", 80));
    list.push(create_list("/city/hcm.jpg", "TP.HCM", 122));
    list.push(create_list("/city/hue.jpg", "Khu vực Bắc trung bộ", 18));
    list.push(create_list("/city/mien-tay.jpg", "Miền Tây", 18));
    $.list_tour.setData(list);
    $.list_tour.addEventListener("click", function(e) {
        alert(e.index);
    });
    $.searchButton.addEventListener("click", function() {
        alert("searching");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;