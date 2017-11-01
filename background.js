function openWebPageWithLinkInChromeStorage(){
	chrome.storage.sync.get("links", function (linkobj) {
		j = linkobj.links;
		chrome.windows.create({ url: j }, function(win) {
        		chrome.windows.update(win.id, { focused: false });
    		});
	});
}
chrome.browserAction.onClicked.addListener(function(tab) {
	// var myAudio = new Audio();			// megalkotja az audio objektumot
	// myAudio.src = "zene.mp3";			// az audio fájlhoz hozzárendeli a hangfájlt
	// myAudio.play();						// lejátsza a zenét

	openWebPageWithLinkInChromeStorage();
});