var anchorText = getAnchor();
if( anchorText !== '' ) {
	copyTextToClipboard( anchorText );
	alert('Copied to your clipboard!');
} else {
	alert('Ooops, something went wrong. Try again.');
}

function getAnchor() {
	var anchorText = '';
	if ( window.getSelection ) {
		if( window.getSelection().toString() !== '' ) {
			var baseUrl = window.location.href;
			var elementId = window.getSelection().anchorNode.parentNode.attributes.name.value;
			anchorText = '#' + elementId;
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
		// console.log('Copying text command was ' + msg);
		// console.log('Text to clipboard: ' + input.value);
	} catch (err) {
		// console.log('Oops, unable to copy');
	}
	document.body.removeChild(input);
}