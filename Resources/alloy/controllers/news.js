function Controller() {
    function create_list(type, img, title, description) {
        var color = "#ccc";
        "news" == type ? color = "#8f8f8f" : "promotion" == type ? color = "#ff7e25" : "event" == type && (color = "#9b05a8");
        var row = Ti.UI.createTableViewRow({
            font: {
                fontSize: "15dp"
            },
            selectionStyle: "none",
            selectedBackgroundColor: "transparent",
            className: "row"
        });
        row.add(Ti.UI.createImageView({
            image: img,
            width: "60dp",
            height: "60dp",
            borderColor: "#fff",
            border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
            borderRadius: "60",
            left: "10dp"
        }));
        row.add(Ti.UI.createLabel({
            text: title,
            font: {
                fontSize: "18dp"
            },
            color: "#575757",
            left: "80dp",
            top: "10dp",
            height: "25dp"
        }));
        row.add(Ti.UI.createLabel({
            text: "08:00 20/02/14",
            font: {
                fontSize: "13dp"
            },
            left: "80dp",
            top: "27dp",
            height: "25dp"
        }));
        row.add(Ti.UI.createLabel({
            left: "80dp",
            font: {
                fontSize: "14dp"
            },
            text: description,
            top: "35dp",
            bottom: "10dp",
            color: "#a3a3a3"
        }));
        row.add(Ti.UI.createLabel({
            text: " " + type + " ",
            backgroundColor: color,
            color: "#fff",
            height: "20dp",
            width: Ti.UI.SIZE,
            left: "80dp",
            bottom: "10dp",
            top: "90dp",
            font: {
                fontSize: "12dp"
            },
            border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
            borderRadius: "10"
        }));
        return row;
    }
    function back() {
        openView("home");
    }
    function filter() {
        alert("filter news");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "news";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.news = Ti.UI.createWindow({
        backgroundColor: "#fff",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "news"
    });
    $.__views.news && $.addTopLevelView($.__views.news);
    $.__views.app = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        bottom: "50dp",
        id: "app"
    });
    $.__views.news.add($.__views.app);
    $.__views.topBar = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "50dp",
        backgroundColor: Ti.API.MAIN_COLOR,
        top: 0,
        id: "topBar"
    });
    $.__views.app.add($.__views.topBar);
    $.__views.__alloyId89 = Ti.UI.createImageView({
        height: "30dp",
        width: "12dp",
        image: "/icon/Previous@2x.png",
        left: "10dp",
        id: "__alloyId89"
    });
    $.__views.topBar.add($.__views.__alloyId89);
    back ? $.__views.__alloyId89.addEventListener("click", back) : __defers["$.__views.__alloyId89!click!back"] = true;
    $.__views.__alloyId90 = Ti.UI.createImageView({
        height: "30dp",
        width: "30dp",
        image: "/icon/list.png",
        right: "15dp",
        id: "__alloyId90"
    });
    $.__views.topBar.add($.__views.__alloyId90);
    filter ? $.__views.__alloyId90.addEventListener("click", filter) : __defers["$.__views.__alloyId90!click!filter"] = true;
    $.__views.__alloyId91 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        text: "TIN TỨC",
        height: Ti.UI.SIZE,
        color: "#fff",
        id: "__alloyId91"
    });
    $.__views.topBar.add($.__views.__alloyId91);
    $.__views.searchBar = Ti.UI.createView({
        backgroundColor: "#eeeeee",
        width: Ti.UI.FILL,
        height: "60dp",
        id: "searchBar"
    });
    $.__views.app.add($.__views.searchBar);
    $.__views.searchIcon = Ti.UI.createView({
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        width: "50dp",
        height: "40dp",
        backgroundColor: "#fff",
        left: "10dp",
        id: "searchIcon"
    });
    $.__views.searchBar.add($.__views.searchIcon);
    $.__views.__alloyId92 = Ti.UI.createImageView({
        left: "8dp",
        zIndex: "1",
        image: "/icon/search-icon.png",
        height: "25dp",
        width: "25dp",
        top: "7dp",
        id: "__alloyId92"
    });
    $.__views.searchIcon.add($.__views.__alloyId92);
    $.__views.__alloyId93 = Ti.UI.createTextField({
        backgroundColor: "#fff",
        backgroundFocusedColor: "#fff",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        borderColor: "#fff",
        top: "10dp",
        bottom: "10dp",
        left: "44dp",
        right: "10dp",
        font: {
            fontSize: "15dp"
        },
        color: "#d3d3d3",
        hintText: "Tìm tin tức",
        id: "__alloyId93"
    });
    $.__views.searchBar.add($.__views.__alloyId93);
    $.__views.__alloyId94 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.FILL,
        height: "1sp",
        backgroundColor: "#dfdfdf",
        top: "0",
        bottom: "2dp",
        id: "__alloyId94"
    });
    $.__views.app.add($.__views.__alloyId94);
    $.__views.list_news = Ti.UI.createTableView({
        separatorColor: "#eaeaea",
        id: "list_news"
    });
    $.__views.app.add($.__views.list_news);
    $.__views.__alloyId95 = Alloy.createController("bar_menu", {
        id: "__alloyId95",
        __parentSymbol: $.__views.news
    });
    $.__views.__alloyId95.setParent($.__views.news);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var list = [];
    list.push(create_list("event", "/news/hoa-hau.jpg", "20 Hoa hậu đẹp nhất 2013", "Trang Global Beauties vừa công bố Top 20 Miss Grand Slam 2013."));
    list.push(create_list("promotion", "/news/San.jpg", "Sandakan - thành phố đầy bất ngờ", "Đến Sandakan (Malaysia), bạn sẽ bất ngờ bởi cuộc sống đường phố độc đáo..."));
    list.push(create_list("promotion", "/news/iPhone.jpg", "10 smartphone được mong chờ", "Vừa bắt đầu năm mới, nhưng giới công nghệ đã dần nóng lên hàng loạt những tin tức..."));
    list.push(create_list("news", "/news/hoa-hau.jpg", "20 Hoa hậu đẹp nhất 2013", "Trang Global Beauties vừa công bố Top 20 Miss Grand Slam 2013."));
    list.push(create_list("event", "/news/San.jpg", "Sandakan - thành phố đầy bất ngờ", "Đến Sandakan (Malaysia), bạn sẽ bất ngờ bởi cuộc sống đường phố độc đáo..."));
    list.push(create_list("event", "/news/iPhone.jpg", "10 smartphone được mong chờ", "Vừa bắt đầu năm mới, nhưng giới công nghệ đã dần nóng lên hàng loạt những tin tức..."));
    list.push(create_list("news", "/news/San.jpg", "Sandakan - thành phố đầy bất ngờ", "Đến Sandakan (Malaysia), bạn sẽ bất ngờ bởi cuộc sống đường phố độc đáo..."));
    list.push(create_list("promotion", "/news/hoa-hau.jpg", "20 Hoa hậu đẹp nhất 2013", "Trang Global Beauties vừa công bố Top 20 Miss Grand Slam 2013."));
    list.push(create_list("event", "/news/iPhone.jpg", "10 smartphone được mong chờ", "Vừa bắt đầu năm mới, nhưng giới công nghệ đã dần nóng lên hàng loạt những tin tức..."));
    list.push(create_list("promotion", "/news/hoa-hau.jpg", "20 Hoa hậu đẹp nhất 2013", "Trang Global Beauties vừa công bố Top 20 Miss Grand Slam 2013."));
    $.list_news.setData(list);
    $.list_news.addEventListener("click", function() {
        openView("detail_news");
    });
    __defers["$.__views.__alloyId89!click!back"] && $.__views.__alloyId89.addEventListener("click", back);
    __defers["$.__views.__alloyId90!click!filter"] && $.__views.__alloyId90.addEventListener("click", filter);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;