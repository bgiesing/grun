
chrome.browserAction.onClicked.addListener(function(tabs) {
    alert('Hodor!');
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {"hodorify": true }, function(response) {
        });
    });
});