var args = arguments[0] || {};

$.titleInput.value = args.title;
$.authorInput.value = args.author;

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
