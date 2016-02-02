function generatePhrase() {
    var selected_phrase = Math.floor((Math.random() * 10) + 1);
    switch(selected_phrase) {
      case 1:
        return "Grun. ";
        break
      case 2:
        return "Grun grun. ";
        break;
      case 3:
        return "Grun? "
        break;
      case 4:
        return "Grun! ";
        break;
      case 5:
        return "Grun? Grun. ";
        break;
      case 6:
        return "Grun? Grun! ";
        break;
      case 7:
        return "Grun! Grun! ";
        break;
      case 8:
        return "(Grun grun.) ";
        break;
      case 9:
        return "(Grun.) ";
        break;
      case 10:
        return "(Grun?) ";
        break;
      default:
        return "Grun. ";
        break;
    }
}

function grunify(element) {
    if (element.childNodes.length > 0)
        for (var i = 0; i < element.childNodes.length; i++)
            grunify(element.childNodes[i]);
    if (element.nodeType == Node.TEXT_NODE && /\S/.test(element.nodeValue)) {
        var num_words = element.nodeValue.split(/\s+/).length;
        var gruns = ""
        for (var i = 0; i < num_words; i++)
            gruns += generatePhrase();
        element.nodeValue = gruns
    }
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.grunify == true) {
      var html = document.getElementsByTagName('html')[0];
      grunify(html);
    }
});


