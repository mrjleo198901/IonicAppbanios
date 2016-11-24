/**
 * Created by Leo on 23/11/2016.
 */
app.controller('MapController', function ($scope, $http, myProvider, $state, $cordovaGeolocation) {
  var options = {timeout: 10000, enableHighAccuracy: true};

  $cordovaGeolocation.getCurrentPosition(options).then(function (position) {

    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    mapLocation(position.coords.latitude,position.coords.longitude);
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    google.maps.event.addListenerOnce($scope.map, 'idle', function () {

      var marker = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: latLng
      });

      var infoWindow = new google.maps.InfoWindow({
        content: "<center>#baniosTuristicoApp</center>" + "Estas aqui!" + "<br/>Latitud:" + position.coords.latitude + "<br/>Longitud:" + position.coords.longitude
      });

      google.maps.event.addListener(marker, 'click', function () {
        infoWindow.open($scope.map, marker);
      });

    });


    /////////
    function mapLocation(lat,long) {

      var directionsDisplay;
      var directionsService = new google.maps.DirectionsService();
      var map1;

      function initialize() {
        console.log("holaa");
        directionsDisplay = new google.maps.DirectionsRenderer();

        var chicago = new google.maps.LatLng(lat, long);
        var mapOptions = {
          zoom: 7,
          center: chicago
        };
        //$scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
        calcRoute();
      }

      function calcRoute() {
        var start = new google.maps.LatLng(lat, long);
        var end = new google.maps.LatLng(-1.3978554675299164, -78.42331901192665);

        var bounds = new google.maps.LatLngBounds();
        bounds.extend(start);
        bounds.extend(end);
        $scope.map.fitBounds(bounds);
        var request = {
          origin: start,
          destination: end,
          travelMode: google.maps.TravelMode.DRIVING
        };
        directionsService.route(request, function (response, status) {
          if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
            directionsDisplay.setMap($scope.map);
          } else {
            alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status);
          }
        });
      }

      google.maps.event.addDomListener(window, 'load', initialize);
    }


    /////////





  }, function (error) {
    console.log("Could not get location");
  });




});





