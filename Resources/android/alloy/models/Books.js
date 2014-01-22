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
        _.extend(Model.prototype, {});
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