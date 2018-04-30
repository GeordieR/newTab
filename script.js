// Get a random ocation from the locations file
var randomID = Math.floor(Math.random() * (locations.length - 1000)) + 1000;
var loc = locations[randomID];

//Update webpage with new location
document.getElementById("bg").style.backgroundImage = "url("+loc.image+")";
if(loc.region===""){
	document.getElementById("region").innerHTML = "";
} else {
	document.getElementById("region").innerHTML = loc.region+", ";
}
document.getElementById("country").innerHTML = loc.country;
document.getElementById("location").setAttribute('href', loc.map);
document.getElementById("copy").innerHTML = "&copy; "+loc.copyright;