function Controller() {
    function create_list(img, title, day, departure, price) {
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
        openView("search");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "search_list";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.search_list = Ti.UI.createWindow({
        backgroundColor: "#fff",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "search_list"
    });
    $.__views.search_list && $.addTopLevelView($.__views.search_list);
    $.__views.app = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        bottom: "50dp",
        id: "app"
    });
    $.__views.search_list.add($.__views.app);
    $.__views.topBar = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "50dp",
        backgroundColor: Ti.API.MAIN_COLOR,
        top: 0,
        id: "topBar"
    });
    $.__views.app.add($.__views.topBar);
    $.__views.__alloyId150 = Ti.UI.createImageView({
        height: "30dp",
        width: "12dp",
        image: "/icon/Previous@2x.png",
        left: "10dp",
        id: "__alloyId150"
    });
    $.__views.topBar.add($.__views.__alloyId150);
    back ? $.__views.__alloyId150.addEventListener("click", back) : __defers["$.__views.__alloyId150!click!back"] = true;
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
    $.__views.__alloyId151 = Ti.UI.createView({
        height: "45dp",
        backgroundColor: "#f6f6f6",
        id: "__alloyId151"
    });
    $.__views.app.add($.__views.__alloyId151);
    $.__views.__alloyId152 = Ti.UI.createImageView({
        image: "/icon/search-icon.png",
        left: "10dp",
        width: "25dp",
        height: "25dp",
        id: "__alloyId152"
    });
    $.__views.__alloyId151.add($.__views.__alloyId152);
    $.__views.__alloyId153 = Ti.UI.createLabel({
        font: {
            fontSize: "16dp"
        },
        left: "40dp",
        color: "#737373",
        text: "Du lịch Nha Trang, ngày 16/02/13",
        id: "__alloyId153"
    });
    $.__views.__alloyId151.add($.__views.__alloyId153);
    $.__views.__alloyId154 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.FILL,
        height: "1sp",
        backgroundColor: "#dfdfdf",
        top: "2dp",
        bottom: "2dp",
        id: "__alloyId154"
    });
    $.__views.app.add($.__views.__alloyId154);
    $.__views.__alloyId155 = Ti.UI.createView({
        id: "__alloyId155"
    });
    $.__views.app.add($.__views.__alloyId155);
    $.__views.list_tours = Ti.UI.createTableView({
        separatorColor: "#eaeaea",
        id: "list_tours"
    });
    $.__views.__alloyId155.add($.__views.list_tours);
    $.__views.__alloyId156 = Alloy.createController("bar_menu", {
        id: "__alloyId156",
        __parentSymbol: $.__views.search_list
    });
    $.__views.__alloyId156.setParent($.__views.search_list);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var list = [];
    list.push(create_list("/city/ha-noi.jpg", "Du lịch nha trang vinperland 3 ngày 2 đêm", "3 ngày 2 đêm", "Theo yêu cầu", "1.820.000 VNĐ"));
    list.push(create_list("/city/ha-noi.jpg", "Du lịch nha trang", "3 ngày 2 đêm", "Theo yêu cầu", "1.820.000 VNĐ"));
    list.push(create_list("/city/ha-noi.jpg", "Du lịch nha trang", "3 ngày 2 đêm", "Theo yêu cầu", "1.820.000 VNĐ"));
    list.push(create_list("/city/ha-noi.jpg", "Du lịch nha trang", "3 ngày 2 đêm", "Theo yêu cầu", "1.820.000 VNĐ"));
    list.push(create_list("/city/ha-noi.jpg", "Du lịch nha trang", "3 ngày 2 đêm", "Theo yêu cầu", "1.820.000 VNĐ"));
    list.push(create_list("/city/ha-noi.jpg", "Du lịch nha trang", "3 ngày 2 đêm", "Theo yêu cầu", "1.820.000 VNĐ"));
    list.push(create_list("/city/ha-noi.jpg", "Du lịch nha trang", "3 ngày 2 đêm", "Theo yêu cầu", "1.820.000 VNĐ"));
    list.push(create_list("/city/ha-noi.jpg", "Du lịch nha trang", "3 ngày 2 đêm", "Theo yêu cầu", "1.820.000 VNĐ"));
    list.push(create_list("/city/ha-noi.jpg", "Du lịch nha trang", "3 ngày 2 đêm", "Theo yêu cầu", "1.820.000 VNĐ"));
    list.push(create_list("/city/ha-noi.jpg", "Du lịch nha trang", "3 ngày 2 đêm", "Theo yêu cầu", "1.820.000 VNĐ"));
    $.list_tours.setData(list);
    $.list_tours.addEventListener("click", function() {
        Alloy.createController("detail_tour").getView().open();
    });
    __defers["$.__views.__alloyId150!click!back"] && $.__views.__alloyId150.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;