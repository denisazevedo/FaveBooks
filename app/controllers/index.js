function createMockBook() {
	//Get a reference to our collection
	var myBooks = Alloy.Collections.books;
	
	//Create a new model object (book) and assign it a title and author
	var book = Alloy.createModel('books', {
		title: 'Great Expectations',
		author: 'Charles Dickens'
	});
	//Add the book to the collection and persist it to the database
	myBooks.add(book);
	book.save();
}

function showBook(event) {
	//extract the title and author of the selected book from the event.source object
	var selectedBook = event.source;
	var args = {
		title: selectedBook.title,
		author: selectedBook.author
	};
	//create an instance of the Alloy bookview, passing it the args object containing the title and author data, and open the view
	var bookDetailsView = Alloy.createController("bookdetails", args).getView();
	if (OS_IOS) $.navGroupWin.openWindow(bookDetailsView);
	if (OS_ANDROID) bookDetailsView.open();
}

function addBook() {
	var addView = Alloy.createController("addbook").getView();
	if (OS_IOS) $.navGroupWin.openWindow(addView);
	if (OS_ANDROID) addView.open();
}

createMockBook();

//Platform specific
if (OS_IOS) {
	$.navGroupWin.open();
}
if (OS_ANDROID) {
	$.index.open();
}