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
    priority: 100000.0036,
    key: "banner",
    style: {
        top: 0,
        height: Ti.UI.SIZE
    }
}, {
    isId: true,
    priority: 100000.0037,
    key: "search",
    style: {
        backgroundColor: Ti.API.MAIN_COLOR,
        height: "60dp",
        width: Ti.UI.FILL,
        top: 0
    }
}, {
    isId: true,
    priority: 100000.0038,
    key: "searchIcon",
    style: {
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        width: "50dp",
        height: "40dp",
        backgroundColor: "#fff",
        left: "10dp"
    }
}, {
    isId: true,
    priority: 100000.0039,
    key: "searchBar",
    style: {
        backgroundColor: "#fff",
        backgroundFocusedColor: "#fff",
        width: Ti.UI.FILL,
        height: "40dp",
        top: "10dp",
        bottom: "10dp",
        right: "70dp",
        left: "44dp",
        font: {
            fontSize: "15dp"
        },
        color: "#d3d3d3"
    }
}, {
    isId: true,
    priority: 100000.004,
    key: "searchButton",
    style: {
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
        }
    }
} ];