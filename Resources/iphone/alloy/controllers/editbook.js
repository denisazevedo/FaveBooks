function Controller() {
    function updateBook() {
        var books = Alloy.Collections.books;
        books.fetch();
        var book = books.get(args.id);
        book.set({
            title: $.titleInput.value,
            author: $.authorInput.value
        }).save();
        books.fetch();
        $.editWindow.close();
    }
    function cancelUpdate() {
        $.editWindow.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "editbook";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.editWindow = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "editWindow"
    });
    $.__views.editWindow && $.addTopLevelView($.__views.editWindow);
    $.__views.__alloyId5 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId5"
    });
    $.__views.editWindow.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        text: "Title:",
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.titleInput = Ti.UI.createTextField({
        width: Ti.UI.FILL,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "10",
        right: "5",
        left: "5",
        id: "titleInput",
        hintText: "Title..."
    });
    $.__views.__alloyId5.add($.__views.titleInput);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        text: "Author:",
        id: "__alloyId7"
    });
    $.__views.__alloyId5.add($.__views.__alloyId7);
    $.__views.authorInput = Ti.UI.createTextField({
        width: Ti.UI.FILL,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "10",
        right: "5",
        left: "5",
        id: "authorInput",
        hintText: "Author..."
    });
    $.__views.__alloyId5.add($.__views.authorInput);
    $.__views.cancelButton = Ti.UI.createButton({
        id: "cancelButton",
        title: "Cancel"
    });
    $.__views.__alloyId5.add($.__views.cancelButton);
    cancelUpdate ? $.__views.cancelButton.addEventListener("click", cancelUpdate) : __defers["$.__views.cancelButton!click!cancelUpdate"] = true;
    $.__views.saveButton = Ti.UI.createButton({
        id: "saveButton",
        title: "Save"
    });
    $.__views.__alloyId5.add($.__views.saveButton);
    updateBook ? $.__views.saveButton.addEventListener("click", updateBook) : __defers["$.__views.saveButton!click!updateBook"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.titleInput.value = args.title;
    $.authorInput.value = args.author;
    __defers["$.__views.cancelButton!click!cancelUpdate"] && $.__views.cancelButton.addEventListener("click", cancelUpdate);
    __defers["$.__views.saveButton!click!updateBook"] && $.__views.saveButton.addEventListener("click", updateBook);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;