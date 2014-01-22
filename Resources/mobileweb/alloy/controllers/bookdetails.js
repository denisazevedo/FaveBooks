function Controller() {
    function removeBook() {
        Ti.API.log("bookdetails.js: Removing book " + args.id);
        if ($._removeBook(args.id)) {
            Ti.API.log("Book removed...");
            $.detailsWindow.close();
        } else alert("Error removing the book");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "bookdetails";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.detailsWindow = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "detailsWindow"
    });
    $.__views.detailsWindow && $.addTopLevelView($.__views.detailsWindow);
    $.__views.__alloyId1 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId1"
    });
    $.__views.detailsWindow.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        color: "gray",
        left: "10",
        text: "Title:",
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    $.__views.titleLabel = Ti.UI.createLabel({
        font: {
            fontSize: "30"
        },
        left: "10",
        id: "titleLabel"
    });
    $.__views.__alloyId1.add($.__views.titleLabel);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        color: "gray",
        left: "10",
        text: "Author:",
        id: "__alloyId3"
    });
    $.__views.__alloyId1.add($.__views.__alloyId3);
    $.__views.authorLabel = Ti.UI.createLabel({
        font: {
            fontSize: "20"
        },
        left: "10",
        id: "authorLabel"
    });
    $.__views.__alloyId1.add($.__views.authorLabel);
    $.__views.remove = Ti.UI.createButton({
        id: "remove",
        title: "Remove"
    });
    $.__views.__alloyId1.add($.__views.remove);
    removeBook ? $.__views.remove.addEventListener("click", removeBook) : __defers["$.__views.remove!click!removeBook"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.titleLabel.text = args.title + " [" + args.id + "]";
    $.authorLabel.text = args.author;
    exports.removeBook = function(_function) {
        $._removeBook = _function;
    };
    __defers["$.__views.remove!click!removeBook"] && $.__views.remove.addEventListener("click", removeBook);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;