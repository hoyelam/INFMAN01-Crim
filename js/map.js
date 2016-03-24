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

    $.ajax({
        url: 'json/fietsendiefstaldata.json',
        dataType: 'json',
        type: 'get',
        cache: false,
        success: function (data){
            $(data.fietsendiefstal).each(function( index, value){

                if (index<500) {
                    setInterval(function(){
                        $.getJSON("http://maps.googleapis.com/maps/api/geocode/json?address=" + value.Straat + "," + value.Plaats, function (json) {
                            var long = json.results[0].geometry.location.lng;
                            var lat = json.results[0].geometry.location.lat;

                            marker = new google.maps.Marker({
                                map: map,
                                draggable: true,
                                animation: google.maps.Animation.DROP,
                                position: {lat: lat, lng: long}
                            });
                        });

                    }, 100);
                }
            });
        }
    });
    //marker.addListener('click', toggleBounce);
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