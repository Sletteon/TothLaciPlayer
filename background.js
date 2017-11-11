function openWebPageWithLinkInChromeStorage(){
	chrome.storage.sync.get("links", function (linkobj) {
		var j = linkobj.links;
		chrome.windows.create({ url: j[0] }, function(tab) {
        		chrome.windows.update(tab.id, { focused: false });
			});
	});
window.onhashchange = function(){
	alert("change");
}
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
	setInterval(function()
	{
		if (j[next] != window.location.href)
		{
			tab.close();
			nextSong();
		}
	}, 100);
}
