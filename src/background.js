chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.executeScript(null, {
		file: "medium-anchor.js",
		runAt: "document_end"
	});
});