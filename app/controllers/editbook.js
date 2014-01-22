var args = arguments[0] || {};

$.titleInput.value = args.title;
$.authorInput.value = args.author;

function updateBook() {
	//TODO To implement!
	Ti.API.log('args.id: ' + args.id);
}

function cancelUpdate() {
	$.editWindow.close();
}
