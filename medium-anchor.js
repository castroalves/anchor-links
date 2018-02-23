var currentSelection = getCurrentSelection();
if( currentSelection !== '' ) {
	prompt( 'Copy the following URL:', currentSelection.url );	
} else {
	alert( 'Nothing was selected. Try again!' );
}

function getCurrentSelection() {
	var selectedText = '';
	if ( window.getSelection ) {
		if( window.getSelection().toString() !== '' ) {
			var postArticle = document.querySelector('.postArticle-content');
			var postId = postArticle.dataset.postId;
			var baseUrl = 'https://medium.com/p';
			var elementId = window.getSelection().anchorNode.parentNode.id;
			selectedText = {
				text: window.getSelection().anchorNode.parentNode.textContent,
				url: baseUrl + '/' + postId + '#' + elementId
			};
		}
	}
	return selectedText;
}