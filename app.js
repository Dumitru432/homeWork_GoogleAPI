var map;
var directionsService;
var directionsRenderer;

function initMap() {
  map = new google.maps.Map(document.getElementById('mapContainer'), {
    center: { lat: 28.1996, lng: 46.2833 }, // Cantemir
    zoom: 12,
  });

  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);

  document
    .getElementById('getDirections')
    .addEventListener('click', calculateRoute);
}

function calculateRoute() {
  var addressA = document.getElementById('addressA').value;
  var addressB = document.getElementById('addressB').value;

  var request = {
    origin: addressA,
    destination: addressB,
    travelMode: 'DRIVING',
  };

  directionsService.route(request, function (result, status) {
    if (status == 'OK') {
      directionsRenderer.setDirections(result);
    } else {
      alert('Directions request failed due to ' + status);
    }
  });
}

const src =
  'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
