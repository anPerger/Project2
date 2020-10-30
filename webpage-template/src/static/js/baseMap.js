var map = L.map('map', {
    scrollWheelZoom: false
}).setView([37.8, -96], 4);

// population  data
popData = null;
jQuery.get("/api/population", function (data) {
    popData = data;
});

// bird json data
birdData = null;
jQuery.get("/api/birds", function (data) {
    birdData = data;
});

// plant json data
plantData = null;
jQuery.get("/api/plants", function (data) {
    plantData = data;
});


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + API_KEY, {
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);

L.geoJson(statesData).addTo(map);

map.on('click', function () {
    if (map.scrollWheelZoom.enabled()) {
        map.scrollWheelZoom.disable();
    }
    else {
        map.scrollWheelZoom.enable();
    }
});

