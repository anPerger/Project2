// bird json data
var birdData = null;
jQuery.get("/api/birds", function (data) {
    birdData = data;
});