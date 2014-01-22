var args = arguments[0] || {};

$.titleInput.value = args.title;
$.authorInput.value = args.author;

function updateBook() {
	var books = Alloy.Collections.books;
	books.fetch();
	
	var book = books.get(args.id);
	
	book.on('error', function(book, error) {
		alert(error);
	});
	var isValid = book.set({
		title: $.titleInput.value,
		author: $.authorInput.value
	});
	
	if (isValid) {
		book.save();
		books.fetch();
		$.editWindow.close();
	}
}

function cancelUpdate() {
	$.editWindow.close();
}
