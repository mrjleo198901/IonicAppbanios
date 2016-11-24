/**
 * Created by Leo on 23/11/2016.
 */


/*function checkConnection() {
  var networkState = navigator.connection.type;

  var states = {};
  states[Connection.UNKNOWN]  = 'Unknown connection';
  states[Connection.ETHERNET] = 'Ethernet connection';
  states[Connection.WIFI]     = 'WiFi connection';
  states[Connection.CELL_2G]  = 'Cell 2G connection';
  states[Connection.CELL_3G]  = 'Cell 3G connection';
  states[Connection.CELL_4G]  = 'Cell 4G connection';
  states[Connection.CELL]     = 'Cell generic connection';
  states[Connection.NONE]     = 'No network connection';

  alert('Connection type: ' + states[networkState]);
}

checkConnection();*/



app.controller('MapControllerNew', function ($scope, $ionicLoading, $compile, $http, myProvider, $state, $cordovaGeolocation) {
  var options = {timeout: 10000, enableHighAccuracy: true};
  var lat = 0;
  var long = 0;

  $cordovaGeolocation.getCurrentPosition(options).then(function (position) {

    //var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    lat = position.coords.latitude;
    long = position.coords.longitude;
    initialize(lat, long);
    /*var mapOptions = {
     center: latLng,
     zoom: 15,
     mapTypeId: google.maps.MapTypeId.ROADMAP
     };

     //$scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

     google.maps.event.addListenerOnce($scope.map, 'idle', function () {

     var marker = new google.maps.Marker({
     map: $scope.map,
     animation: google.maps.Animation.DROP,
     position: latLng
     });

     var infoWindow = new google.maps.InfoWindow({
     content: "<center>#baniosTuristicoApp</center>" + "Estas aqui!" +
     "<br/>Latitud:" + position.coords.latitude + "<br/>Longitud:" + position.coords.longitude
     });

     google.maps.event.addListener(marker, 'click', function () {
     infoWindow.open($scope.map, marker);
     });

     });*/


  }, function (error) {
    console.log("No se puede obtener la ubicacion actual");
  });


  function initialize(lat, long) {
    console.log(lat);
    console.log(long);
    var site = new google.maps.LatLng(lat, long);
    //var site = new google.maps.LatLng(-1.6576195999999999, -78.6511877);
    var banios = new google.maps.LatLng(-1.3978554675299164, -78.42331901192665);

    var mapOptions = {
      streetViewControl: true,
      center: site,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    //Marker + infowindow + angularjs compiled ng-click
    var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
    var compiled = $compile(contentString)($scope);

    var infowindow = new google.maps.InfoWindow({
      content: compiled[0]
    });

    var marker = new google.maps.Marker({
      position: site,
      map: map,
      animation: google.maps.Animation.DROP,
      title: 'Current Position'
    });

    var baniosRoute = new google.maps.Marker({
      position: banios,
      map: map,
      animation: google.maps.Animation.DROP,
      title: 'Banios'
    });

    var infowindow = new google.maps.InfoWindow({
      content: "<center>#baniosTuristicoApp</center>" + "Estas aqui!"
    });

    infowindow.open(map, marker);

    var banioswindow = new google.maps.InfoWindow({
      content: "<center>Baños de Agua Santa</center>" +
      "Latitud:" + lat + "<br/>Longitud:" + long
    });

    banioswindow.open(map, baniosRoute);

    /*google.maps.event.addListener(marker, 'click', function () {
     infowindow.open(map, marker);
     });*/

    $scope.map = map;

    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();

    var request = {
      origin: site,
      destination: banios,
      travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function (response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
    });

    directionsDisplay.setMap(map);

  }

  google.maps.event.addDomListener(window, 'load', initialize);

  $scope.centerOnMe = function () {
    if (!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Obteniendo su ubicacion actual...',
      showBackdrop: false
    });
    navigator.geolocation.getCurrentPosition(function (pos) {
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.loading.hide();
    }, function (error) {
      alert('Imposible obtener su ubicacion: ' + error.message);
    });
  };

  $scope.clickTest = function () {
    alert('Example of infowindow with ng-click')
  };

});
