// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app =angular.module('starter', ['ionic', 'ngCordova'])



function ApiUrl(){

  this.getUser=function(){
    return 'http://localhost:3000/api/user';
  }
  this.getHistoriaClinica=function(){
    return 'http://localhost:3000/api/historiaClinica';
  }
}

app.factory("myProvider",function(){
  // console.log("factory function");
  return new ApiUrl();

});





  app.config(function($stateProvider) {
    $stateProvider
      .state('index', { url: '/', templateUrl: 'templates/inicio.html'})
      .state('state1', {url: '/singUP', templateUrl: 'templates/singup.html'})
      .state('state2', {url: '/state2', templateUrl: 'templates/state2.html',});
  });
app.controller('Redirect', function($scope,$http,myProvider) {

  $scope.redirectSingUp=function(){


    console.log('entra');
    window.location='templates/singup.html';
  }

  $scope.redirectSingIn=function(){
    console.log('entra');
    window.location='templates/singin.html';
  }
  $scope.indexPage=function(){
    console.log('entra');
    window.location='../index.html';
  }

  $scope.ciudadesRedirect=function(){
    console.log('entra');
    window.location='./ciudades.html';
  }

  $scope.mapsRedirect=function(){
    console.log('entra');
    window.location='./map.html';
  }

  $scope.guidesRedirect=function(){
    console.log('entra');
    window.location='./guides.html';
  }

  $scope.hashtagRedirect=function(){
    console.log('entra');
    window.location='./hashtag.html';
  }

  $scope.hotelRedirect=function(){
    console.log('entra');
    window.location='./hotel.html';
  }

  $scope.restaurantRedirect=function(){
    console.log('entra');
    window.location='./restaurant.html';
  }

  $scope.sportRedirect=function(){
    console.log('entra');
    window.location='./sport.html';
  }

  $scope.activitiesRedirect=function(){
    console.log('entra');
    window.location='./activities.html';
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
      // this callback will be called asynchronously
      // when the response is available
      //  console.log(response.data[0].nombre_usuario);
      //  console.log(response.data);
      $scope.usuario1 = angular.fromJson(response.data[0]);
      //console.log($scope.usuario1);
      // console.log($scope.usuario1.nombre_usuario);
      // console.log($scope.usuario1.contrasena);
      // console.log($scope.usuario1._id);
      if (response.data.length > 0) {
        console.log($scope.usuario1);

        if ($scope.usuario1.mail == $scope.usuarioLogin.mail && $scope.usuario1.pass == $scope.usuarioLogin.pass) {
          //console.log($scope.usuario1.contrasena);
          //$scope.mensaje = "Bienvenido " + response.data[0].nombre_usuario.toString();
          // $rootScope.usuarioLogin=$scope.usuario1;
          //$localStorage.usr=$scope.usuario1;
          window.localStorage.setItem("usuario", JSON.stringify($scope.usuario1));
          //window.location = '/appBanios/client/hola.html';
          window.location = 'menuAdm.html';

        } else {

          $scope.mensaje = "Revise su correo y password";
        }

      } else {

        $scope.mensaje = "Revise su usuario y password";
        alert('Revise su usuario y password');
      }

      console.log(response);

    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      Console.log(response);
      $scope.mesaje = response.mensaje;

    });
  };

  //Sign Up//

  $scope.nombre = "";
  $scope.apellido = "";
  $scope.mail = "";
  $scope.pass = "";
  $scope.r_pass = "";

  $scope.signup = function () {

    //console.log(validateEmail($scope.mail));

    if (validateEmail($scope.mail) == true) {
      if ($scope.pass.localeCompare($scope.r_pass) == 0) {
        $http({
          method: 'POST',
          url: myProvider.getUser(),
          headers: {
            'Content-Type': 'application/json'
          },
          data: {
            "nombre": $scope.nombre,
            "apellido": $scope.apellido,
            "pass": $scope.pass,
            "mail": $scope.mail
          }

        }).then(function successCallback(response) {
          alert('Ingreso existoso!');

        }, function errorCallback(response) {

          console.log(response);

        });
      } else {

        var span1 = document.getElementById("txt-password");
        span1.style.backgroundColor = "#F78181";
        var span2 = document.getElementById("txt-password-confirm");
        span2.style.backgroundColor = "#F78181";
        alert("Las contraseñas no coinciden");
      }
    } else {
      var span = document.getElementById("txt-email-address");
      //span.style.backgroundColor = "#BDBDBD";
      span.style.backgroundColor = "#F78181";
      alert("Mail Incorrecto");
    }

  };





});


app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }



  });


})
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

