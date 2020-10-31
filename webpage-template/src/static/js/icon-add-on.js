// Template for adding custom icon markers
// Modify the for loop and L.marker to accomdate the endangered species data
// Format is set to pull location, name, and habitat from an array. It may need to be adjusted for our data source

let birdData = []
let plantData =[]

let flowerIcon = L.icon({
    iconUrl: 'static/images/flower-pin.png',
    iconSize:     [25, 25], // size of the icon
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [5, -10] // point from which the popup should open relative to the iconAnchor
});

let birdIcon = L.icon({
    iconUrl: 'static/images/bird-pin.png',
    iconSize:     [25, 30], // size of the icon
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [5, -10] // point from which the popup should open relative to the iconAnchor
});

//Puts a custom bird icon at each endangered species location and adds a popup of the species name and proected habitat (NWR)
for (let i = 0; i < birdData.length; i++) {
    let birdMarker = birdData[i];
    L.marker(birdMarker.location, {icon: birdIcon})
        .bindPopup("<h2>Species: " + birdMarker.name + "</h2> <hr> <h3>Protected Habitat: <br>" + birdMarker.habitat + "</h3>")
        .addTo(myMap);
    }