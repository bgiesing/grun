
chrome.browserAction.onClicked.addListener(function(tabs) {
    alert('Grun!');
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {"grunify": true }, function(response) {
        });
    });
});
