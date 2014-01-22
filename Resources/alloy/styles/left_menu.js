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
    priority: 1000.0055,
    key: "TableViewRow",
    style: {
        width: Ti.UI.FILL,
        height: "50dp"
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
    priority: 10000.005,
    key: "leftMenuHeader",
    style: {
        top: 0,
        height: "220dp",
        width: Ti.UI.FILL,
        backgroundColor: "#272c30",
        backgroundRepeat: true
    }
}, {
    isClass: true,
    priority: 10000.0051,
    key: "leftMenuAvarta",
    style: {
        width: "120dp",
        height: "120dp",
        backgroundColor: "#3d4349",
        borderRadius: "120",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderColor: "#3d4349",
        top: "20dp",
        zIndex: 4
    }
}, {
    isClass: true,
    priority: 10000.0052,
    key: "leftMenuImgAvarta",
    style: {
        width: "100dp",
        height: "100dp",
        top: "10dp",
        borderRadius: "100",
        border: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
    }
}, {
    isClass: true,
    priority: 10000.0053,
    key: "leftMenuName",
    style: {
        color: "#fff",
        font: {
            fontSize: "24dp"
        },
        top: "150dp"
    }
}, {
    isClass: true,
    priority: 10000.0054,
    key: "leftMenuProfile",
    style: {
        color: "#737374",
        font: {
            fontSize: "14dp"
        },
        top: "180dp"
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
    priority: 100000.0049,
    key: "leftMenu",
    style: {
        backgroundColor: "#212529",
        width: "80%",
        left: "-80%",
        height: Ti.UI.FILL,
        zIndex: 3,
        backgroundRepeat: true
    }
} ];