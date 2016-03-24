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
}



/*
    $(document).ready(function() {
        var myItems;

        $.getJSON("json/fietsendiefstaldata.json", function(data) {
            myItems = data.Fietsendiefstal;
            console.log(myItems);
        });
    });

    $.each(data.Fietsendiefstal, function(key, val) {
        alert(val.MK);
        alert(val.Poging);
    });

/*
    var jqxhr = $.getJSON("json/fietsendiefstaldata.json", function () {
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

*/