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
    isApi: true,
    priority: 1000.0046,
    key: "Label",
    style: {
        color: "#fff"
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
    priority: 10000.0043,
    key: "loginByTwitter",
    style: {
        bottom: "70dp",
        color: "#fff",
        textAlign: "left",
        height: "40dp",
        backgroundColor: "#00aced",
        width: Ti.UI.FILL,
        left: "20dp",
        right: "20dp",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        borderColor: "#00aced"
    }
}, {
    isClass: true,
    priority: 10000.0044,
    key: "loginByFacebook",
    style: {
        bottom: "120dp",
        color: "#fff",
        textAlign: "left",
        height: "40dp",
        backgroundColor: "#345291",
        width: Ti.UI.FILL,
        left: "20dp",
        right: "20dp",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        borderColor: "#345291"
    }
}, {
    isClass: true,
    priority: 10000.0045,
    key: "copyright",
    style: {
        bottom: "20dp",
        color: "#fff",
        height: "40dp",
        width: Ti.UI.FILL
    }
}, {
    isClass: true,
    priority: 10000.0047,
    key: "popupField",
    style: {
        top: "10dp",
        left: "20dp",
        right: "20dp",
        backgroundColor: "transparent",
        backgroundFocusedColor: "#fff",
        font: {
            fontSize: "15dp"
        }
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
    priority: 100000.0042,
    key: "loginBox",
    style: {
        top: "210dp",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL
    }
} ];