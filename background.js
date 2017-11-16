function openWebPageWithLinkInChromeStorage(){
	chrome.storage.sync.get("links", function (linkobj) {
		var j = linkobj.links;
		var next = 0;
		chrome.windows.create({ url: j[next] }, function(tab) {
      		chrome.windows.update(tab.id, { focused: false });
			});
});
}
chrome.browserAction.onClicked.addListener(function(tab) {
	// var myAudio = new Audio();			// megalkotja az audio objektumot
	// myAudio.src = "zene.mp3";			// az audio fájlhoz hozzárendeli a hangfájlt
	// myAudio.play();						// lejátsza a zenét
openWebPageWithLinkInChromeStorage();
});


function nextSong(){
	var nextLink = j[next];
	chrome.windows.create({url:nextLink}, function(tab){
		chrome.windows.update(tab.id, {focused: false});
	});
	next +=1;

}
chrome.tabs.onUpdated.addListener(
    function(tabId, changeInfo, tab) {
	var j =linkobj.links;
	var oldurl;
	oldurl = j[next];
	var newurl = changeInfo.url;
	alert("newurl");
	if(oldurl === newurl){
		alert("url change");
		next + 1;
	}
	else{chrome.tabs.remove(tab.id)}
}
);