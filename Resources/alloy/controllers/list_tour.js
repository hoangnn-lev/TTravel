function Controller() {
    function create_list(img, title, day, departure, price, promotion) {
        var row = Ti.UI.createTableViewRow({
            font: {
                fontSize: "15dp"
            },
            height: "90dp",
            selectionStyle: "none",
            selectedBackgroundColor: "transparent",
            className: "row"
        });
        row.add(Ti.UI.createImageView({
            image: img,
            width: "60dp",
            height: "60dp",
            left: "7dp",
            top: "15dp",
            right: "7dp",
            bottom: "5dp",
            borderColor: "#fff",
            borderRadius: "60"
        }));
        promotion && row.add(Ti.UI.createImageView({
            image: "/icon/sale.png",
            width: "60dp",
            height: "60dp",
            left: "7dp",
            top: "0",
            left: "0"
        }));
        row.add(Ti.UI.createLabel({
            text: title,
            font: {
                fontSize: "18dp"
            },
            color: "#575757",
            left: "73dp",
            top: "7dp",
            height: "25dp"
        }));
        row.add(Ti.UI.createLabel({
            left: "73dp",
            color: "#cc0903",
            font: {
                fontSize: "14dp"
            },
            text: price,
            top: "28dp"
        }));
        row.add(Ti.UI.createLabel({
            text: "Thời gian : " + day,
            font: {
                fontSize: "14dp"
            },
            color: "#808080",
            left: "73dp",
            top: "45dp"
        }));
        row.add(Ti.UI.createLabel({
            text: "Khởi hành : " + departure,
            font: {
                fontSize: "14dp"
            },
            color: "#808080",
            left: "73dp",
            top: "60dp"
        }));
        return row;
    }
    function back() {
        openView("home");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "list_tour";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.list_tour = Ti.UI.createWindow({
        backgroundColor: "#fff",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "list_tour"
    });
    $.__views.list_tour && $.addTopLevelView($.__views.list_tour);
    $.__views.app = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        bottom: "50dp",
        id: "app"
    });
    $.__views.list_tour.add($.__views.app);
    $.__views.topBar = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "50dp",
        backgroundColor: Ti.API.MAIN_COLOR,
        top: 0,
        id: "topBar"
    });
    $.__views.app.add($.__views.topBar);
    $.__views.__alloyId81 = Ti.UI.createImageView({
        height: "30dp",
        width: "12dp",
        image: "/icon/Previous@2x.png",
        left: "10dp",
        id: "__alloyId81"
    });
    $.__views.topBar.add($.__views.__alloyId81);
    back ? $.__views.__alloyId81.addEventListener("click", back) : __defers["$.__views.__alloyId81!click!back"] = true;
    $.__views.topBarText = Ti.UI.createLabel({
        font: {
            fontSize: "20dp"
        },
        color: "#fff",
        textAlign: "center",
        top: "10dp",
        text: "Nha Trang",
        id: "topBarText"
    });
    $.__views.topBar.add($.__views.topBarText);
    $.__views.__alloyId82 = Ti.UI.createImageView({
        height: "30dp",
        width: "30dp",
        image: "/icon/New@2x.png",
        right: "10dp",
        id: "__alloyId82"
    });
    $.__views.topBar.add($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "__alloyId83"
    });
    $.__views.app.add($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createImageView({
        top: "0",
        image: "/ads.jpg",
        width: Ti.UI.FILL,
        id: "__alloyId84"
    });
    $.__views.__alloyId83.add($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createView({
        id: "__alloyId85"
    });
    $.__views.app.add($.__views.__alloyId85);
    $.__views.list_tours = Ti.UI.createTableView({
        separatorColor: "#eaeaea",
        id: "list_tours"
    });
    $.__views.__alloyId85.add($.__views.list_tours);
    $.__views.__alloyId86 = Alloy.createController("bar_menu", {
        id: "__alloyId86",
        __parentSymbol: $.__views.list_tour
    });
    $.__views.__alloyId86.setParent($.__views.list_tour);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var list = [];
    list.push(create_list("/city/nha-trang.jpg", "Du lịch nha trang vinperland 3 ngày 2 đêm", "3 ngày 2 đêm", "25/03/2014", "1.820.000 VNĐ"));
    list.push(create_list("/city/mien-tay.jpg", "Miền tây chợ trên sông", "3 ngày 2 đêm", "Theo yêu cầu", "1.820.000 VNĐ"));
    list.push(create_list("/city/hue.jpg", "Huế mộng mơ", "3 ngày 2 đêm", "Theo yêu cầu", "1.820.000 VNĐ", 1));
    list.push(create_list("/city/hcm.jpg", "Đầm sen TP Hồ Chí minh", "3 ngày 2 đêm", "Theo yêu cầu", "1.820.000 VNĐ"));
    list.push(create_list("/city/ha-noi.jpg", "Thăm lăng bác Hà Nội", "3 ngày 2 đêm", "17/05/2014", "1.820.000 VNĐ", 1));
    list.push(create_list("/city/nha-trang.jpg", "Du lịch nha trang vinperland 3 ngày 2 đêm", "3 ngày 2 đêm", "Theo yêu cầu", "1.820.000 VNĐ"));
    list.push(create_list("/city/mien-tay.jpg", "Miền tây chợ trên sông", "3 ngày 2 đêm", "Theo yêu cầu", "1.820.000 VNĐ", 1));
    list.push(create_list("/city/hue.jpg", "Huế mộng mơ", "3 ngày 2 đêm", "Theo yêu cầu", "1.820.000 VNĐ"));
    list.push(create_list("/city/hcm.jpg", "Đầm sen TP Hồ Chí minh", "3 ngày 2 đêm", "11/05/2014", "1.820.000 VNĐ", 1));
    list.push(create_list("/city/ha-noi.jpg", "Thăm lăng bác Hà Nội", "3 ngày 2 đêm", "Theo yêu cầu", "1.820.000 VNĐ"));
    $.list_tours.setData(list);
    $.list_tours.addEventListener("click", function() {
        openView("detail_tour");
    });
    __defers["$.__views.__alloyId81!click!back"] && $.__views.__alloyId81.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;