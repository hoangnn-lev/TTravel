module.exports = [ {
    isApi: true,
    priority: 1000.0001,
    key: "Label",
    style: {
        font: {
            fontSize: "15dp"
        }
    }
}, {
    isApi: true,
    priority: 1000.0002,
    key: "Window",
    style: {
        backgroundColor: "#fff",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL
    }
}, {
    isApi: true,
    priority: 1000.0003,
    key: "TextField",
    style: {
        backgroundColor: "#fff",
        backgroundFocusedColor: "#ecf8fe",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        borderColor: "#fff"
    }
}, {
    isClass: true,
    priority: 10000.0004,
    key: "line",
    style: {
        width: Ti.UI.FILL,
        height: "1sp",
        backgroundColor: "#dfdfdf",
        top: "2dp",
        bottom: "2dp"
    }
}, {
    isClass: true,
    priority: 10000.0018,
    key: "tourTitle",
    style: {
        color: "#f28b07",
        font: {
            fontSize: "16dp"
        },
        height: "24dp"
    }
}, {
    isClass: true,
    priority: 10000.0019,
    key: "price",
    style: {
        color: "#069de4",
        font: {
            fontSize: "18dp"
        },
        left: 0
    }
}, {
    isClass: true,
    priority: 10000.002,
    key: "infoTitle",
    style: {
        color: "#737373",
        left: 0
    }
}, {
    isClass: true,
    priority: 10000.0021,
    key: "title",
    style: {
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0022,
    key: "itemDescription",
    style: {
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0026,
    key: "linkItem",
    style: {
        left: "20dp",
        color: "#8d8d8d"
    }
}, {
    isClass: true,
    priority: 10000.0027,
    key: "imgLinkItem",
    style: {
        width: "15dp",
        height: "15dp",
        left: 0
    }
}, {
    isId: true,
    priority: 100000.0005,
    key: "app",
    style: {
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        bottom: "50dp"
    }
}, {
    isId: true,
    priority: 100000.0013,
    key: "topBar",
    style: {
        width: Ti.UI.FILL,
        height: "50dp",
        backgroundColor: Ti.API.MAIN_COLOR,
        top: 0
    }
}, {
    isId: true,
    priority: 100000.0014,
    key: "topBarText",
    style: {
        color: "#fff",
        font: {
            fontSize: "17dp"
        }
    }
}, {
    isId: true,
    priority: 100000.0015,
    key: "detail",
    style: {
        left: "10dp",
        right: "10dp",
        bottom: "10dp",
        top: "10dp",
        layout: "vertical"
    }
}, {
    isId: true,
    priority: 100000.0016,
    key: "tourDescription",
    style: {
        top: 0,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE
    }
}, {
    isId: true,
    priority: 100000.0017,
    key: "description",
    style: {
        left: "0",
        height: Ti.UI.SIZE,
        top: "5dp"
    }
}, {
    isId: true,
    priority: 100000.0023,
    key: "imgColection",
    style: {
        width: Ti.UI.FILL,
        height: "160dp",
        backgroundColor: "#efefef",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        borderColor: "#efefef",
        top: "10dp",
        bottom: "10dp"
    }
}, {
    isId: true,
    priority: 100000.0024,
    key: "imgContent",
    style: {
        top: "5dp",
        bottom: "5dp",
        left: "5dp",
        right: "5dp",
        width: Ti.UI.FILL,
        height: "150dp"
    }
}, {
    isId: true,
    priority: 100000.0025,
    key: "link",
    style: {
        width: Ti.UI.FILL,
        height: "25dp"
    }
}, {
    isId: true,
    priority: 100000.0028,
    key: "tabLink",
    style: {
        top: "10dp"
    }
} ];