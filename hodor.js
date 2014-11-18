function generatePhrase() {
    var selected_phrase = Math.floor((Math.random() * 10) + 1);
    switch(selected_phrase) {
      case 1:
        return "Hodor. ";
        break
      case 2:
        return "Hodor hodor. ";
        break;
      case 3:
        return "Hodor? "
        break;
      case 4:
        return "Hodor! ";
        break;
      case 5:
        return "Hodor? Hodor. ";
        break;
      case 6:
        return "Hodor? Hodor! ";
        break;
      case 7:
        return "Hodor! Hodor! ";
        break;
      case 8:
        return "(Hodor hodor.) ";
        break;
      case 9:
        return "(Hodor.) ";
        break;
      case 10:
        return "(Hodor?) ";
        break;
      default:
        return "Hodor. ";
        break;
    }
}

function hodorify(element) {
    if (element.childNodes.length > 0)
        for (var i = 0; i < element.childNodes.length; i++)
            hodorify(element.childNodes[i]);
    if (element.nodeType == Node.TEXT_NODE && /\S/.test(element.nodeValue)) {
        var num_words = element.nodeValue.split(/\s+/).length;
        var hodors = ""
        for (var i = 0; i < num_words; i++)
            hodors += generatePhrase();
        element.nodeValue = hodors
    }
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.hodorify == true) {
      var html = document.getElementsByTagName('html')[0];
      hodorify(html);
    }
});


