exports.definition = {
    config: {
        columns: {
            book_id: "INTEGER PRIMARY KEY AUTOINCREMENT",
            title: "text",
            author: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "books",
            idAttribute: "book_id"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            validate: function(attrs) {
                Ti.API.log("validate executed");
                if (0 >= attrs["title"].length) return "Error: No title!";
                if (0 >= attrs["author"].length) return "Error: No author!";
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("books", exports.definition, []);

collection = Alloy.C("books", exports.definition, model);

exports.Model = model;

exports.Collection = collection;