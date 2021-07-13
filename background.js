console.log('background running');

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript(
			tab.id,
			{file: 'trac.js'});
	});
}