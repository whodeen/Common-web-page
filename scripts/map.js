var _markerCoords = { lat: 49.794416, lng: 24.005005 };
var _centerCoords = { lat: 49.798770, lng: 23.999550 };

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: _centerCoords,
        zoom: 16,
        clickableIcons: false,
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: false
    });
    var marker = new google.maps.Marker({ position: _markerCoords, map: map, icon: 'img/pin.png' });
}