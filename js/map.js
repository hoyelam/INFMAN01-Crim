/**
 * Created by tjardavoorn on 17/03/16.
 */

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

    var jqxhr = $.getJSON("json/data.json", function () {
            console.log("success");
        })
        .done(function () {
            console.log("second success");
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });

// Perform other work here ...

// Set another completion function for the request above
    jqxhr.complete(function () {
        console.log("second complete");
        console.log(jqxhr);
    });
}

