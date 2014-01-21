var myBooks = Alloy.Collections.books;

function insertBook() {
	var book = Alloy.createModel('books', {
		title: $.titleInput.value,
		author: $.authorInput.value
	});
	myBooks.add(book);
	book.save();
	$.addbook.close();
};

$.addbook.addEventListener("open", function() {
	$.titleInput.focus();
});
