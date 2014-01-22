function Controller() {
    function __alloyId11(e) {
        if (e && e.fromAdapter) return;
        __alloyId11.opts || {};
        var models = __alloyId10.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId7 = models[i];
            __alloyId7.__transform = {};
            var __alloyId9 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId7.__transform["title"] ? __alloyId7.__transform["title"] : __alloyId7.get("title"),
                author: "undefined" != typeof __alloyId7.__transform["author"] ? __alloyId7.__transform["author"] : __alloyId7.get("author"),
                bookId: "undefined" != typeof __alloyId7.__transform["book_id"] ? __alloyId7.__transform["book_id"] : __alloyId7.get("book_id")
            });
            rows.push(__alloyId9);
            showBook ? __alloyId9.addEventListener("click", showBook) : __defers["__alloyId9!click!showBook"] = true;
        }
        $.__views.bookTable.setData(rows);
    }
    function showBook(event) {
        var selectedBook = event.source;
        var args = {
            title: selectedBook.title,
            author: selectedBook.author,
            id: selectedBook.bookId
        };
        var bookdetailsController = Alloy.createController("bookdetails", args);
        var bookDetailsView = bookdetailsController.getView();
        bookdetailsController.removeBook($.removeBook);
        $.navGroupWin.openWindow(bookDetailsView);
    }
    function addBook() {
        var addView = Alloy.createController("addbook").getView();
        $.navGroupWin.openWindow(addView);
    }
    function deleteBookDialog(event) {
        var alertDialog = Titanium.UI.createAlertDialog({
            title: "Remove",
            message: "Do you want to remove this book?",
            buttonNames: [ "Yes", "No" ],
            cancel: 1
        });
        alertDialog.show();
        alertDialog.addEventListener("click", function(e) {
            0 == e.index ? removeBook(event.row.bookId) : 1 == e.index;
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("books");
    $.__views.__alloyId6 = Ti.UI.createWindow({
        backgroundColor: "white",
        title: "My Books",
        id: "__alloyId6"
    });
    $.__views.bookTable = Ti.UI.createTableView({
        id: "bookTable"
    });
    $.__views.__alloyId6.add($.__views.bookTable);
    var __alloyId10 = Alloy.Collections["books"] || books;
    __alloyId10.on("fetch destroy change add remove reset", __alloyId11);
    deleteBookDialog ? $.__views.bookTable.addEventListener("longpress", deleteBookDialog) : __defers["$.__views.bookTable!longpress!deleteBookDialog"] = true;
    var __alloyId14 = [];
    $.__views.add = Ti.UI.createButton({
        id: "add",
        title: "Add book"
    });
    __alloyId14.push($.__views.add);
    addBook ? $.__views.add.addEventListener("click", addBook) : __defers["$.__views.add!click!addBook"] = true;
    $.__views.__alloyId12 = Ti.UI.iOS.createToolbar({
        items: __alloyId14,
        bottom: "0",
        id: "__alloyId12"
    });
    $.__views.__alloyId6.add($.__views.__alloyId12);
    $.__views.navGroupWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.__alloyId6,
        id: "navGroupWin"
    });
    $.__views.navGroupWin && $.addTopLevelView($.__views.navGroupWin);
    exports.destroy = function() {
        __alloyId10.off("fetch destroy change add remove reset", __alloyId11);
    };
    _.extend($, $.__views);
    var myBooks = Alloy.Collections.books;
    exports.removeBook = function(id) {
        var db = Alloy.createCollection("books");
        Ti.API.log("Removing book: " + id);
        db.fetch({
            query: "SELECT * FROM books where book_id = " + id
        });
        if (db.length > 0) {
            db.at(0).destroy();
            myBooks.fetch();
            return true;
        }
        return false;
    };
    $.navGroupWin.open();
    myBooks.fetch();
    __defers["__alloyId9!click!showBook"] && __alloyId9.addEventListener("click", showBook);
    __defers["$.__views.bookTable!longpress!deleteBookDialog"] && $.__views.bookTable.addEventListener("longpress", deleteBookDialog);
    __defers["$.__views.add!click!addBook"] && $.__views.add.addEventListener("click", addBook);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;