// Plant Marker Layer Initialization
let plantMarkers;

// Listener for toggling on/off plants layer
$("#plantsLayer").click(function () {
    if ($("#plantsLayer").hasClass("active")) {
        $("#plantsLayer").removeClass("active");
        map.removeLayer(plantMarkers);
    } else {
        $("#plantsLayer").addClass("active");
        getAndPlotPlants();
    }
});

//plant json data
function getAndPlotPlants() {
    if (plantMarkers == null) {
        plantMarkers = L.markerClusterGroup({
            showCoverageOnHover: false,
            zoomToBoundsOnClick: true
        });

        jQuery.get("/api/plants", function (data) {
            // Create a new marker cluster group
            plantData = data.plant_data
            for (var i = 0; i < plantData.length; i++) {
                var plant = plantData[i];
                var location = [plant.Lat, plant.Long]
                plantMarkers.addLayer(
                    L.marker(location)
                        .bindPopup("<h4> Plant Name: " + plant["Species Name"] + "</h4> <hr> <h5> Federal Status: " + plant["Federal Status"] + "</h5>")
                );
            }
        });
    }
    map.addLayer(plantMarkers);
}
