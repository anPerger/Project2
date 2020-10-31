// Plant Marker Layer Initialization
let birdMarkers;

// Listener for toggling on/off plants layer
$("#birdLayer").click(function () {
    if ($("#birdLayer").hasClass("active")) {
        $("#birdLayer").removeClass("active");
        map.removeLayer(birdMarkers);
    } else {
        $("#birdLayer").addClass("active");
        getAndPlotBirds();
    }
});

//plant json data
function getAndPlotBirds() {
    if (birdMarkers == null) {
        birdMarkers = L.markerClusterGroup({
            showCoverageOnHover: false,
            zoomToBoundsOnClick: true
        });

        jQuery.get("/api/birds", function (data) {
            // Create a new marker cluster group
            birdData = data.bird_data
            for (var i = 0; i < birdData.length; i++) {
                var bird = birdData[i];
                var location = [bird.Lat, bird.Long]
                birdMarkers.addLayer(
                    L.marker(location)
                        .bindPopup("<h4> Bird Name: " + bird["Unit Name"] + "</h4> <hr> <h5> Federal Status: " + bird["Federal Status"] + "</h5>")
                );
            }
        });
    }
    map.addLayer(birdMarkers);
}


// // bird json data
// var birdData = null;
// jQuery.get("/api/birds", function (data) {
//     birdData = data;
// });