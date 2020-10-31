let geojson;

// Create info Div in topright corner
let info = L.control({ position: 'topright' });
let div = L.DomUtil.create('div', 'info');
let opacity = .8

let map = L.map('map', {
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
    return d > 1000 ? '#0A2F51' :
        d > 500 ? '#0E4D64' :
            d > 200 ? '#137177' :
                d > 100 ? '#188977' :
                    d > 50 ? '#39A96B' :
                        d > 20 ? '#99D492' :
                            d > 10 ? '#BFE1B0' :
                                '#DEEDCF';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: opacity
    };
}

// population  data
jQuery.get("/api/population", function (data) {
    updateStateInfo(data);
});

// bird json data
let birdData = null;
jQuery.get("/api/birds", function (data) {
    plotbirds(data);
});

//plant json data
jQuery.get("/api/plants", function (data) {
    plotdata(data);
});

//bird layer example
function plotbirds(data) {
    // Create a new marker cluster group
    // var markers = L.markerClusterGroup();
    birdData = data.bird_data
    console.log(birdData.length)

    let birdIcon = L.icon({
        iconUrl: "../static/images/bird-pin.png",
        iconSize:     [25, 30], // size of the icon
        iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
        popupAnchor:  [5, -10] // point from which the popup should open relative to the iconAnchor
    });
    
    for (let i = 0; i < birdData.length; i++) {
        let bird = birdData[i];
        let location = [bird.Lat, bird.Long]
        L.marker(location, {icon: birdIcon})
        .bindPopup("<h3>Species: " + bird["Species Name"]+ "</h3> <hr> <h4>Protected Habitat: <br>" + bird["Unit Name"]  + "</h4>")
        .addTo(map);
    }
};

//plant layer example
function plotdata(data) {
    // Create a new marker cluster group
    // var markers = L.markerClusterGroup();
    plantData = data.plant_data
    console.log(plantData.length)

    let flowerIcon = L.icon({
        iconUrl: "../static/images/flower-pin.png",
        iconSize:     [25, 25], // size of the icon
        iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
        popupAnchor:  [5, -10] // point from which the popup should open relative to the iconAnchor
    });
    
    for (let i = 0; i < plantData.length; i++) {
        let plant = plantData[i];
        let location = [plant.Lat, plant.Long]
        L.marker(location, {icon: flowerIcon})
            .bindPopup("<h1> Plant Name: " + plant["Species Name"] + "</h1> <hr> <h3> Federal Status: " + plant["Federal Status"] + "</h3>")
            .addTo(map)
    }
};

function updateStateInfo(data) {
    geojson = L.geoJson(data, {
        style: style,
        onEachFeature: onEachFeature
    }).addTo(map);
}


function highlightFeature(e) {
    let layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: .3
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }

    // create the control
    info.onAdd = function (map) {
        div.innerHTML = '<h4>US Population Density</h4>' + (e.target.feature.properties ?
            '<b>' + e.target.feature.properties.name + '</b><br />' + e.target.feature.properties.density + ' people / mi<sup>2</sup>'
            : 'Hover over a state');
        return div;
    };

    info.addTo(map);
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}


map.attributionControl.addAttribution('Population data &copy; <a href="http://census.gov/">US Census Bureau</a>');


let legend = L.control({ position: 'bottomright' });

legend.onAdd = function (map) {

    let div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 10, 20, 50, 100, 200, 500, 1000],
        labels = [],
        from, to;

    for (let i = 0; i < grades.length; i++) {
        from = grades[i];
        to = grades[i + 1];

        labels.push(
            '<svg class="bd-placeholder-img rounded mr-2" width="15" height="15" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect opacity="' + opacity + '" width="100%" height="100%" fill="' + getColor(from + 1) + '"></rect></svg> ' +
            from + (to ? '&ndash;' + to : '+'));
    }

    div.innerHTML = labels.join('<br>');
    return div;
};

legend.addTo(map);

