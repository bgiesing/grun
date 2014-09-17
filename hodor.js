function hodorify(element) {
    if (element.childNodes.length > 0)
        for (var i = 0; i < element.childNodes.length; i++)
            hodorify(element.childNodes[i]);
    if (element.nodeType == Node.TEXT_NODE && /\S/.test(element.nodeValue)) {
        var num_words = element.nodeValue.split(/\s+/).length;
        var hodors = ""
        for (var i = 0; i < num_words; i++)
            hodors += "Hodor "
        element.nodeValue = hodors
    }
}

var html = document.getElementsByTagName('html')[0];
hodorify(html);
