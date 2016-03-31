function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {

        // location Rotterdam
        center: {lat: 51.9166667, lng: 4.5},
        zoom: 11,
        styles: [{
            featureType: 'poi',
            stylers: [{visibility: 'off'}]  // Turn off points of interest.
        }, {
            featureType: 'transit.station',
            stylers: [{visibility: 'off'}]  // Turn off bus stations, train stations, etc.
        }],
        disableDoubleClickZoom: true
    });


    heatmap = new google.maps.visualization.HeatmapLayer({
        map: map,
        data: [],
        radius: 20
    });

    getMarkers(heatmap);
    //marker.addListener('click', toggleBounce);
}

function getMarkers(heatmap) {
    $.ajax({
        url: 'json/fietsendiefstaldata.json',
        dataType: 'json',
        type: 'get',
        cache: false,
        success: function (data){
            $(data.fietsendiefstal).each(function( index, value){
                if (index < 100) {
                    $.getJSON("http://maps.googleapis.com/maps/api/geocode/json?address=" + value.Straat + "," + value.Plaats, function (json) {
                        console.log(json);
                        var long = json.results[0].geometry.location.lng;
                        var lat = json.results[0].geometry.location.lat;
                        var latLng = new google.maps.LatLng(lat, long);
                        heatmap.getData().push(latLng);
                    });
                }
                if(index == 100){
                    return false
                }
            });
        }
    });
}
