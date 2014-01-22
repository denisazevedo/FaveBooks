exports.definition = {
	config: {
		columns: {
		    "book_id": "INTEGER PRIMARY KEY AUTOINCREMENT",
		    "title": "text",
		    "author": "text"
		},
		adapter: {
			type: "sql",
			collection_name: "books",
			idAttribute: "book_id"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};