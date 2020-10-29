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


    function getColor(d) {
        return d > 1000 ? '#800026' :
            d > 500 ? '#BD0026' :
            d > 200 ? '#E31A1C' :
            d > 100 ? '#FC4E2A' :
            d > 50 ? '#FD8D3C' :
            d > 20 ? '#FEB24C' :
            d > 10 ? '#FED976' :
                    '#FFEDA0';
    }
});

