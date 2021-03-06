function Controller() {
    function __alloyId10(e) {
        if (e && e.fromAdapter) return;
        __alloyId10.opts || {};
        var models = __alloyId9.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId6 = models[i];
            __alloyId6.__transform = {};
            var __alloyId8 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId6.__transform["title"] ? __alloyId6.__transform["title"] : __alloyId6.get("title"),
                author: "undefined" != typeof __alloyId6.__transform["author"] ? __alloyId6.__transform["author"] : __alloyId6.get("author"),
                bookId: "undefined" != typeof __alloyId6.__transform["book_id"] ? __alloyId6.__transform["book_id"] : __alloyId6.get("book_id")
            });
            rows.push(__alloyId8);
            showBook ? __alloyId8.addEventListener("click", showBook) : __defers["__alloyId8!click!showBook"] = true;
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
        {
            bookdetailsController.getView();
        }
        bookdetailsController.removeBook($.removeBook);
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
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.bookTable = Ti.UI.createTableView({
        id: "bookTable"
    });
    $.__views.index.add($.__views.bookTable);
    var __alloyId9 = Alloy.Collections["books"] || books;
    __alloyId9.on("fetch destroy change add remove reset", __alloyId10);
    deleteBookDialog ? $.__views.bookTable.addEventListener("longpress", deleteBookDialog) : __defers["$.__views.bookTable!longpress!deleteBookDialog"] = true;
    exports.destroy = function() {
        __alloyId9.off("fetch destroy change add remove reset", __alloyId10);
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
    myBooks.fetch();
    __defers["__alloyId8!click!showBook"] && __alloyId8.addEventListener("click", showBook);
    __defers["$.__views.bookTable!longpress!deleteBookDialog"] && $.__views.bookTable.addEventListener("longpress", deleteBookDialog);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;