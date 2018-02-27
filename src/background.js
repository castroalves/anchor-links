chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.executeScript(null, {
		file: "anchor-links.js",
		runAt: "document_end"
	});
});