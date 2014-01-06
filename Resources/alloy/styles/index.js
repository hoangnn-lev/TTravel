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
    priority: 1000.0015,
    key: "Window",
    style: {
        layout: "vertical"
    }
}, {
    isClass: true,
    priority: 10000.0019,
    key: "loginField",
    style: {
        backgroundColor: "#ecf8fe",
        backgroundFocusedColor: "#c2ebff",
        borderRadius: "0",
        width: Ti.UI.FILL,
        height: "40dp",
        top: "10dp",
        font: {
            fontSize: "15dp"
        },
        left: "20dp",
        right: "20dp"
    }
}, {
    isClass: true,
    priority: 10000.002,
    key: "loginButton",
    style: {
        top: "10dp",
        width: Ti.UI.FILL,
        backgroundColor: "#bfbfbf",
        backgroundSelectedColor: "#c2ebff",
        height: "45dp",
        color: "#fff",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "15",
        borderColor: "#bfbfbf",
        left: "20dp",
        right: "20dp"
    }
}, {
    isClass: true,
    priority: 10000.0021,
    key: "forgetPassText",
    style: {
        top: "10dp",
        color: "red",
        textAlign: "center",
        width: Ti.UI.FILL
    }
}, {
    isClass: true,
    priority: 10000.0023,
    key: "loginByTwitter",
    style: {
        top: "10dp",
        color: "#00aced",
        textAlign: "center"
    }
}, {
    isClass: true,
    priority: 10000.0024,
    key: "loginByFacebook",
    style: {
        top: "10dp",
        color: "#345291",
        textAlign: "center"
    }
}, {
    isClass: true,
    priority: 10000.0025,
    key: "otherLogin",
    style: {
        top: "10dp",
        color: "#ccc",
        textAlign: "center"
    }
}, {
    isId: true,
    priority: 100000.0016,
    key: "loginBar",
    style: {
        layout: "vertical",
        width: Ti.UI.FILL,
        height: "40dp",
        backgroundColor: Ti.API.MAIN_COLOR,
        top: 0
    }
}, {
    isId: true,
    priority: 100000.0017,
    key: "loginBarText",
    style: {
        color: "#fff",
        textAlign: "center",
        top: "8dp",
        font: {
            fontSize: "20dp"
        }
    }
}, {
    isId: true,
    priority: 100000.0018,
    key: "loginBox",
    style: {
        top: "20dp",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        layout: "vertical"
    }
}, {
    isId: true,
    priority: 100000.0022,
    key: "loginSocical",
    style: {
        top: "20dp",
        left: "20dp",
        right: "20dp"
    }
} ];