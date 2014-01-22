var myBooks = Alloy.Collections.books;

function insertBook() {
	var book = Alloy.createModel('books', {
		title: $.titleInput.value,
		author: $.authorInput.value
	});
	myBooks.add(book);
	book.save();
	$.addbook.close();
	//Resets the model's state from the database useful if you'd like to ensure that you have the latest database state.
	Alloy.Collections.books.fetch();
};

$.addbook.addEventListener("open", function() {
	$.titleInput.focus();
});
