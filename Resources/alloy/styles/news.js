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
    priority: 10000.0065,
    key: "newsSearchText",
    style: {
        top: "10dp",
        backgroundFocusedColor: "#fff",
        bottom: "10dp",
        left: "44dp",
        right: "10dp",
        font: {
            fontSize: "15dp"
        },
        color: "#d3d3d3"
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
    priority: 100000.0062,
    key: "topBar",
    style: {
        width: Ti.UI.FILL,
        height: "50dp",
        backgroundColor: Ti.API.MAIN_COLOR,
        top: 0
    }
}, {
    isId: true,
    priority: 100000.0063,
    key: "searchBar",
    style: {
        backgroundColor: "#eeeeee",
        width: Ti.UI.FILL,
        height: "60dp"
    }
}, {
    isId: true,
    priority: 100000.0064,
    key: "searchIcon",
    style: {
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        width: "50dp",
        height: "40dp",
        backgroundColor: "#fff",
        left: "10dp"
    }
} ];