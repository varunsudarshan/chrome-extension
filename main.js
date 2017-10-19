searchUrbanDict = function(word){
    var query = word.selectionText;
    alert(query);
    //chrome.tabs.create({'url': "http://www.urbandictionary.com/define.php?term=" + query});
 };

chrome.contextMenus.create({
 title: "Search i UrbanDictionary",
 contexts:["selection"],  // ContextType
 onclick: searchUrbanDict // A callback function
});