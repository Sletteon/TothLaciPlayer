chrome.browserAction.onClicked.addListener(function(tab) {
	var myAudio = new Audio();			// megalkotja az audio objektumot
	myAudio.src = "zene.mp3";			// az audio fájlhoz hozzárendeli a hangfájlt
	myAudio.play();						// lejátsza a zenét
});