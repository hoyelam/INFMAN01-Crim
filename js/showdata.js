/**
 * Created by tjardavoorn on 24/03/16.
 */
$.ajax({
    url: 'json/fietsendiefstaldata.json',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function (data){
        $(data.fietsendiefstal).each(function( index, value){
            console.log(value.Werkgebied);

        });
    }
});