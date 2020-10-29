var map = L.map('map', {
    scrollWheelZoom: false
}).setView([37.8, -96], 4);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + API_KEY, {
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);

map.on('click', function () {
    if (map.scrollWheelZoom.enabled()) {
        map.scrollWheelZoom.disable();
    }
    else {
        map.scrollWheelZoom.enable();
    }
});

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

function style(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

// adding data to map with density styling
function mapDataWithStyle(data) {
    // L.geoJson(data).addTo(map);
    L.geoJson(data, { style: style }).addTo(map);
}


// adding data to map without density styling
function mapDataWithoutStyle(data) {
    // L.geoJson(data).addTo(map);
    L.geoJson(data).addTo(map);
}
// population  data
jQuery.get("/api/population", function (data) {
    mapDataWithStyle(data);
});

// bird json data
var birdData = null;
jQuery.get("/api/birds", function (data) {
    birdData = data;
});

// plant json data
var plantData = null;
jQuery.get("/api/plants", function (data) {
    plantData = data;
});
