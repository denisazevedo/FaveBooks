// var db = Alloy.createCollection("books");
// db.fetch({
	// query : "DROP TABLE books"
// });
// db.dropTable('books');	

//Get a reference to our collection
var myBooks = Alloy.Collections.books;

function createTestBook() {
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
		author: selectedBook.author,
		id: selectedBook.bookId
	};
	//create an instance of the Alloy bookview, passing it the args object containing the title and author data, and open the view
	var bookdetailsController = Alloy.createController("bookdetails", args);
	var bookDetailsView = bookdetailsController.getView();

	bookdetailsController.removeBook($.removeBook); //bookdetails will has access to this
	bookdetailsController.setParent($.navGroupWin); //bookdetails will has access to this
	
	if (OS_IOS) $.navGroupWin.openWindow(bookDetailsView);
	if (OS_ANDROID) bookDetailsView.open();
}

function addBook() {
	var addView = Alloy.createController("addbook").getView();
	if (OS_IOS) $.navGroupWin.openWindow(addView);
	if (OS_ANDROID) addView.open();
}

function deleteBookDialog(event) {
//exports.deleteBookDialog = function() {
	var alertDialog = Titanium.UI.createAlertDialog({
		title : 'Remove',
		message : 'Do you want to remove this book?',
		buttonNames : ['Yes', 'No'],
		cancel : 1
	});
	alertDialog.show();

	alertDialog.addEventListener('click', function(e) {
		if (e.index == 0) {// clicked "YES"
			removeBook(event.row.bookId);
		} else if (e.index == 1) {// clicked "NO"
		}
	});
};

exports.removeBook = function(id) {
//function removeBook(id) {
	var db = Alloy.createCollection("books");
	Ti.API.log('Removing book: ' + id);

	db.fetch({
		query : "SELECT * FROM books where book_id = " + id
	});
	if (db.length > 0) {
		//To remove a row from the database we use destroy()
		db.at(0).destroy();
		myBooks.fetch();
		return true;
	}
	return false;
};

// createMockBook();

//Platform specific
if (OS_IOS) {
	$.navGroupWin.open();
}
if (OS_ANDROID) {
	$.index.open();
}

//Resets the model's state from the database useful if you'd like to ensure that you have the latest database state.
myBooks.fetch();
