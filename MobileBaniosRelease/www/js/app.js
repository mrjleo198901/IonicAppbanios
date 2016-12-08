// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ngCordova', 'ionic-ratings','ionic.rating'])

function ApiUrl() {

  this.getUser = function () {
    return 'http://localhost:3000/api/user';
  }
  this.getHistoriaClinica = function () {
    return 'http://192.168.1.108:3000/api/historiaClinica';
  }

  this.getEstablecimiento = function () {
    return 'http://localhost:3000/api/establecimiento';

  }
}

app.factory("myProvider", function () {
  // console.log("factory function");
  return new ApiUrl();

});



app.controller('Redirect', function ($scope, $http, myProvider, $ionicPopup) {

  $scope.redirectSingUp = function () {


    console.log('entra');
    window.location = 'templates/singup.html';
  }

  $scope.redirectSingIn = function () {
    console.log('entra');
    window.location = 'templates/singin.html';
  }
  $scope.indexPage = function () {
    console.log('entra');
    window.location = '../index.html';
  }

  $scope.ciudadesRedirect = function () {
    console.log('entra');
    window.location = './ciudades.html';
  }

  $scope.mapsRedirect = function () {
    console.log('entra');
    window.location = './map.html';
  }

  $scope.guidesRedirect = function () {
    console.log('entra');
    window.location = './guides.html';
  }

  $scope.hashtagRedirect = function () {
    console.log('entra');
    window.location = './hashtag.html';
  }

  $scope.hotelRedirect = function () {
    console.log('entra');
    window.location = './hotel.html';
  }

  $scope.restaurantRedirect = function () {
    console.log('entra');
    window.location = './restaurant.html';
  }

  $scope.sportRedirect = function () {
    console.log('entra');
    window.location = './sport.html';
  }

  $scope.activitiesRedirect = function () {
    console.log('entra');
    window.location = './activities.html';
  }

  $scope.menuAdmRedirect = function () {
    console.log('entra');
    window.location = '../templates/menuAdm.html';
  }

  //Sign In//

  $scope.mensaje = "";
  $scope.usuarioLogin = {
    mail: '',
    password: ''
  }

  $scope.login = function () {
    $scope.mensaje = "procesando";
    var url = myProvider.getUser() + '?mail=' + $scope.usuarioLogin.mail;

    console.log(url);

    $http({
      method: 'GET',
      url: url,
      headers: {
        'Content-Type': 'application/json'
      }

    }).then(function successCallback(response) {
      $scope.usuario1 = angular.fromJson(response.data[0]);

      if (response.data.length > 0) {
        console.log($scope.usuario1);

        if ($scope.usuario1.mail == $scope.usuarioLogin.mail && $scope.usuario1.pass == $scope.usuarioLogin.pass) {

          window.localStorage.setItem("usuario", JSON.stringify($scope.usuario1));
          window.location = 'menuAdm.html';

        } else {

          $scope.mensaje = "Revise su correo y password";
          $ionicPopup.confirm({
            title: 'Credenciales incorrectas!',
            content: '<center>Disculpa, revisa tu correo y password!.</center>'
          })
        }

      } else {

        $ionicPopup.alert({
          title: 'Credenciales incorrectas!',
          content: '<center>Disculpa, revisa tu correo y password!.</center>'
        })
      }

      console.log(response);

    }, function errorCallback(response) {

      Console.log(response);
      $scope.mesaje = response.mensaje;

    });
  };

});


app.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }


  });

})


