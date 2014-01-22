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
    priority: 10000.0102,
    key: "uploadCircle",
    style: {
        width: "40dp",
        height: "40dp",
        top: "20dp",
        left: "20dp"
    }
}, {
    isClass: true,
    priority: 10000.0103,
    key: "name",
    style: {
        font: {
            fontSize: "18dp"
        },
        bottom: "40dp",
        left: "20dp",
        color: "#fff",
        top: "10dp"
    }
}, {
    isClass: true,
    priority: 10000.0104,
    key: "address",
    style: {
        font: {
            fontSize: "14dp"
        },
        bottom: "20dp",
        left: "20dp",
        color: "#fff"
    }
}, {
    isClass: true,
    priority: 10000.0105,
    key: "updateProfile",
    style: {
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        font: {
            fontSize: "14dp"
        },
        top: 0
    }
}, {
    isClass: true,
    priority: 10000.0106,
    key: "aboutView",
    style: {
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0107,
    key: "about",
    style: {
        top: "10dp",
        bottom: "10dp",
        left: "20dp",
        font: {
            fontSize: "14dp"
        },
        color: "#737373",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0108,
    key: "favourite",
    style: {
        width: "30dp",
        height: "26dp",
        right: "55dp",
        bottom: "20dp"
    }
}, {
    isClass: true,
    priority: 10000.0109,
    key: "favouriteCount",
    style: {
        right: "35dp",
        bottom: "20dp",
        color: "#fff",
        font: {
            fontSize: "22dp"
        }
    }
}, {
    isClass: true,
    priority: 10000.011,
    key: "info",
    style: {
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        backgroundImage: "/icon/transparent.png",
        bottom: 0
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
    priority: 100000.01,
    key: "avarta",
    style: {
        width: Ti.UI.FILL,
        height: "230dp",
        top: 0,
        backgroundColor: "#dfdfdf"
    }
}, {
    isId: true,
    priority: 100000.0101,
    key: "content",
    style: {
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL
    }
} ];