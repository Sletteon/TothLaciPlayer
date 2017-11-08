// Visszaadja, hogy mit írt be a felhasználó
function getYTLinks() {
	return document.getElementById("links").value;
}
// Példa a chrome get-re, alerttel visszaadja a chrome-tárhelyben mentett linkeket
// Ha egy másik scriptben szeretnénk a j változót használni, egy ilyesmi funkciót kell csinálni
// globális j-vel
function alertLinks(){
	 chrome.storage.sync.get("links", function (linkobj) {
    		j = linkobj.links;
		console.log(linkobj);
		alert(j);
	});
}
// Örök listener, ha a saveButton id-jű gombot lenyomják,
// ellenőrizze a beírt szöveget, ha az nem semmi (szó szerint),
// akkor mentse el a varázslatos chrome felhőbe 
$(function(){
	$('#saveButton').click(function(){
		//var links = $('#links').val();
		var linkobj = getYTLinks();
		if (linkobj != ""){
			chrome.storage.sync.set({'links' : getYTLinks()}, function(){
				alert('Linkek mentve!');
				//alertLinks(); // <- ez kellett debugolás miatt
			});
		} else {
			alert('Üres mező!');
		}
		var find = linkobj.split(",");
		if (find != -1){
			chrome.storage.sync.set({'links' : find}, function(){
			alert("Több link mentve");
			});
		}
		
	})
})
// A szövegdoboz tartalma legyen a mentett link (ha van)
// Ha nincs nem ír ki semmit
function setTextAreaToPreviousLinks(){
	chrome.storage.sync.get("links", function(linkobj){
		j = linkobj.links;
		$('#links').val(j)
	});
}
// Ha betöltődik az oldal, hívja meg a setTextAreaToPreviousLinks függvényt
window.onload = function(){
	setTextAreaToPreviousLinks();
	};