var map;

function initMap(){
    map = new google.maps.Map(document.getElementById("map"),{
        center:{lat : 33.660057, lng: 	-117.998970}, 
        zoom:6,
    });
}