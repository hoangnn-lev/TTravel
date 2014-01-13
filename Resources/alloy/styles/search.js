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
    priority: 10000.0049,
    key: "headerTitle",
    style: {
        backgroundColor: "#f8f8f8",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.005,
    key: "searchTextHeader",
    style: {
        width: Ti.UI.FILL,
        height: "30dp",
        top: "15dp",
        bottom: "5dp",
        left: "20dp",
        font: {
            fontWeight: "bold",
            fontSize: "14dp"
        },
        color: "#737373"
    }
}, {
    isClass: true,
    priority: 10000.0051,
    key: "blockSearch",
    style: {
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        backgroundColor: "#fff",
        layout: "vertical"
    }
}, {
    isClass: true,
    priority: 10000.0052,
    key: "item",
    style: {
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        bottom: "10dp",
        top: "10dp"
    }
}, {
    isClass: true,
    priority: 10000.0053,
    key: "line",
    style: {
        top: 0,
        bottom: 0
    }
}, {
    isClass: true,
    priority: 10000.0054,
    key: "searchTextTitle",
    style: {
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        left: "60dp",
        color: "#737373",
        top: 0
    }
}, {
    isClass: true,
    priority: 10000.0055,
    key: "input",
    style: {
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        left: "50dp",
        top: 0,
        backgroundColor: "#fff",
        backgroundFocusedColor: "#fff",
        borderRadius: "0",
        font: {
            fontSize: "15dp"
        },
        paddingLeft: "0"
    }
}, {
    isClass: true,
    priority: 10000.0056,
    key: "date",
    style: {
        backgroundColor: "#dfdfdf",
        width: "80dp",
        height: "30dp",
        left: "60dp",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15"
    }
}, {
    isClass: true,
    priority: 10000.0057,
    key: "labelDate",
    style: {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#737373"
    }
}, {
    isClass: true,
    priority: 10000.0058,
    key: "price",
    style: {
        backgroundColor: "#dfdfdf",
        width: "80dp",
        height: "30dp",
        left: "60dp",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        top: 0
    }
}, {
    isClass: true,
    priority: 10000.0059,
    key: "priceActive",
    style: {
        backgroundColor: "#ff7e25",
        width: "80dp",
        height: "30dp",
        left: "60dp",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        top: 0
    }
}, {
    isClass: true,
    priority: 10000.006,
    key: "labelPrice",
    style: {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#737373"
    }
}, {
    isClass: true,
    priority: 10000.0061,
    key: "labelPriceActive",
    style: {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#fff"
    }
}, {
    isClass: true,
    priority: 10000.0062,
    key: "clearText",
    style: {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontWeight: "bold",
            fontSize: "12dp"
        },
        right: "20dp",
        color: "#ff7e25"
    }
}, {
    isId: true,
    priority: 100000.0046,
    key: "topBar",
    style: {
        width: Ti.UI.FILL,
        height: "50dp",
        backgroundColor: Ti.API.MAIN_COLOR,
        top: 0
    }
}, {
    isId: true,
    priority: 100000.0047,
    key: "topBarText",
    style: {
        color: "#fff",
        textAlign: "center",
        top: "10dp",
        font: {
            fontSize: "20dp"
        }
    }
}, {
    isId: true,
    priority: 100000.0048,
    key: "app",
    style: {
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        bottom: "60dp"
    }
} ];