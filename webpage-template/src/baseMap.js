var map = L.map('map', {
    scrollWheelZoom: false
}).setView([37.8, -96], 4);

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

