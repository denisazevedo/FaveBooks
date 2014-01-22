var args = arguments[0] || {};

$.titleLabel.text = args.title + ' [' + args.id + ']';
$.authorLabel.text = args.author;

//Able to access index's functions
exports.setParent = function(_parentController) {
	$._myParent = _parentController;
};

exports.removeBook = function(_function) {
	$._removeBook = _function;
};

function removeBook() {
	Ti.API.log('bookdetails.js: Removing book ' + args.id);
	if ($._removeBook(args.id)) { //Calls parent (index) function
		Ti.API.log('Book removed...');
		$.detailsWindow.close();
	} else {
		alert('Error removing the book');
	}
}

function editBook() {
	var editView = Alloy.createController("editbook", args).getView();
	
	if (OS_IOS) $._myParent.openWindow(editView);
	if (OS_ANDROID) editView.open(); //TODO Need to test!
	
	$.detailsWindow.close(); //Close this window to return to the list
}
