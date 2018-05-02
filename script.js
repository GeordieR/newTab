// Get a random location from the locations file
var randomID = Math.floor(Math.random() * (locations.length - 1000)) + 1000;
var loc = locations[randomID];


if(navigator.onLine){
	//Update webpage with new location
	document.getElementById("bg").style.backgroundImage = "url("+loc.image+")"; //Background Image
	//If a region is provided display it
	if(loc.region===""){
		document.getElementById("region").innerHTML = "";
	} else {
		document.getElementById("region").innerHTML = loc.region+", ";
	}
	document.getElementById("country").innerHTML = loc.country; //Country
	document.getElementById("location").setAttribute('href', loc.map); //Google Maps link
	document.getElementById("copy").innerHTML = "&copy; "+loc.copyright; //Copyright Information
}