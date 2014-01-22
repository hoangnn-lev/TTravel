function Controller() {
    function create_profile(img, title, description) {
        var row = Ti.UI.createTableViewRow({
            font: {
                fontSize: "15dp"
            },
            height: "60dp",
            selectionStyle: "none",
            selectedBackgroundColor: "transparent"
        });
        row.add(Ti.UI.createImageView({
            image: img,
            width: "25dp",
            height: "25dp",
            left: "20dp",
            top: "15dp",
            right: "20dp"
        }));
        row.add(Ti.UI.createLabel({
            text: title,
            font: {
                fontSize: "16dp"
            },
            color: Ti.API.MAIN_COLOR,
            left: "70dp",
            top: "7dp"
        }));
        row.add(Ti.UI.createLabel({
            text: description,
            font: {
                fontSize: "16dp"
            },
            color: "#808080",
            left: "70dp",
            top: "30dp"
        }));
        return row;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "update_profile";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.update_profile = Ti.UI.createWindow({
        backgroundColor: "#fff",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "update_profile"
    });
    $.__views.update_profile && $.addTopLevelView($.__views.update_profile);
    $.__views.app = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        bottom: "50dp",
        id: "app"
    });
    $.__views.update_profile.add($.__views.app);
    $.__views.avarta = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "230dp",
        top: 0,
        backgroundColor: "#dfdfdf",
        id: "avarta",
        backgroundImage: "/midu.jpg"
    });
    $.__views.app.add($.__views.avarta);
    $.__views.__alloyId160 = Ti.UI.createImageView({
        width: "40dp",
        height: "40dp",
        top: "20dp",
        left: "20dp",
        zIndex: "2",
        image: "/icon/upload.png",
        id: "__alloyId160"
    });
    $.__views.avarta.add($.__views.__alloyId160);
    $.__views.__alloyId161 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        backgroundImage: "/icon/transparent.png",
        bottom: 0,
        id: "__alloyId161"
    });
    $.__views.avarta.add($.__views.__alloyId161);
    $.__views.__alloyId162 = Ti.UI.createLabel({
        font: {
            fontSize: "18dp"
        },
        bottom: "40dp",
        left: "20dp",
        color: "#fff",
        top: "10dp",
        text: "MỸ DUNG",
        id: "__alloyId162"
    });
    $.__views.__alloyId161.add($.__views.__alloyId162);
    $.__views.__alloyId163 = Ti.UI.createLabel({
        font: {
            fontSize: "14dp"
        },
        bottom: "20dp",
        left: "20dp",
        color: "#fff",
        text: "2 Hải Triều Quận 1, TP. HCM",
        id: "__alloyId163"
    });
    $.__views.__alloyId161.add($.__views.__alloyId163);
    $.__views.__alloyId164 = Ti.UI.createImageView({
        width: "30dp",
        height: "26dp",
        right: "55dp",
        bottom: "20dp",
        zIndex: "2",
        image: "/icon/profile/favourite.png",
        id: "__alloyId164"
    });
    $.__views.__alloyId161.add($.__views.__alloyId164);
    $.__views.__alloyId165 = Ti.UI.createLabel({
        font: {
            fontSize: "22dp"
        },
        right: "35dp",
        bottom: "20dp",
        color: "#fff",
        text: "5",
        id: "__alloyId165"
    });
    $.__views.__alloyId161.add($.__views.__alloyId165);
    $.__views.__alloyId166 = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        width: Ti.UI.FILL,
        height: "1sp",
        backgroundColor: "#dfdfdf",
        top: "0",
        bottom: "2dp",
        id: "__alloyId166"
    });
    $.__views.app.add($.__views.__alloyId166);
    $.__views.list_profile = Ti.UI.createTableView({
        separatorColor: "#eaeaea",
        id: "list_profile"
    });
    $.__views.app.add($.__views.list_profile);
    $.__views.__alloyId167 = Alloy.createController("bar_menu", {
        id: "__alloyId167",
        __parentSymbol: $.__views.update_profile
    });
    $.__views.__alloyId167.setParent($.__views.update_profile);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var list = [];
    var row = create_profile("/icon/profile/name.png", "Tên đăng nhập", "midu");
    row.add(Ti.UI.createImageView({
        image: "/icon/profile/edit.png",
        width: "15dp",
        height: "15dp",
        right: "20dp"
    }));
    list.push(row);
    list.push(create_profile("/icon/profile/key.png", "Mật khẩu", "******"));
    list.push(create_profile("/icon/profile/fullname.png", "Họ & Tên", "Mỹ Dung"));
    list.push(create_profile("/icon/profile/calendar.png", "Ngày sinh", "11/02/1990"));
    list.push(create_profile("/icon/profile/gender.png", "Giới tính", "Nữ"));
    list.push(create_profile("/icon/profile/email.png", "Email", "midu@gmail.com"));
    list.push(create_profile("/icon/profile/phone.png", "Điện thoại", "090 282 8888"));
    list.push(create_profile("/icon/profile/address.png", "Địa chỉ", "2 Hải Triều, Quận 1, TP. HCM"));
    $.list_profile.setData(list);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;