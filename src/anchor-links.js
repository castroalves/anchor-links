var anchorText = getAnchor();
if( anchorText !== '' ) {
	copyTextToClipboard( anchorText );
	alert('Copied to your clipboard!');
} else {
	alert('Ooops, something went wrong. If the error persists, get in touch with our support.');
}

function getAnchor() {
	var anchorText = '';
	var elementId = '';
	if( window.location.href.indexOf('medium') > -1 ) { // For Medium users.
        if ( window.getSelection ) {
            if( window.getSelection().toString() !== '' ) {
                elementId = window.getSelection().anchorNode.parentNode.attributes.name.value;
                anchorText = '#' + elementId;
            }
        }
	} else if ( window.location.href.indexOf('wp-admin') > -1 ) { // For WordPress users.
		var tinyMCE = document.querySelector('#content_ifr');
        if( typeof tinyMCE !== 'undefined' ) {
            var selectedText = tinyMCE.contentDocument.getSelection();
            if( selectedText.toString() !== '' ) {
                // Sets element ID
                selectedText.anchorNode.parentNode.id = hashCode( selectedText.toString() );
                anchorText = '#' + selectedText.anchorNode.parentNode.id;
            }
        }
	}
	return anchorText;
}

function copyTextToClipboard(text) {
	var input = document.createElement('input');
	input.style.width = '2em';
	input.style.height = '2em';
	input.style.padding = 0;
	input.style.border = 'none';
	input.style.outline = 'none';
	input.style.boxShadow = 'none';
	input.style.background = 'transparent';
	input.value = text;
	document.body.appendChild(input);
	input.select();
	try {
		var successful = document.execCommand('copy');
		var msg = successful ? 'successful' : 'unsuccessful';
	} catch (err) {
		// console.log('Oops, unable to copy');
	}
	document.body.removeChild(input);
}

function hashCode(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
       hash = Math.abs( str.charCodeAt(i) + ((hash << 5) - hash) );
    }
    return hash.toString(16);
}