// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var app = angular.module('starter', ['ionic', 'ngCordova', 'ionic-ratings', 'ionic.rating'])


function ApiUrl() {

  this.getUser = function () {
    return 'http://localhost:3000/api/user';
  }
  /*this.getHistoriaClinica = function () {
   return 'http://192.168.1.108:3000/api/historiaClinica';
   }*/

  this.getEstablecimiento = function () {
    return 'http://localhost:3000/api/establecimiento';

  }

  this.getSendEmail = function () {
    return 'http://localhost:3000/sendEmail';

  }
}

app.factory("myProvider", function () {
  // console.log("factory function");
  return new ApiUrl();

});


app.controller('Redirect', function ($scope, $http, myProvider, $ionicPopup) {

  function validateEmail(email) {
    //console.log(email)
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  var errorMsg = "";
  $scope.generateValidatePopUp = function () {
    var flagCancel = false;
    $scope.data = {}

    // Custom popup
    var myPopup = $ionicPopup.show({
      template: '<input type = "text" ng-model = "data.model">',
      title: '#baniosTuristico<br> <div style="text-align: center">Porfavor, ingresa tu correo electronico!.</div><br>',
      subTitle: errorMsg,
      scope: $scope,

      buttons: [
        {
          text: 'Cancel',
          onTap: function (e) {
            flagCancel = true;
          }
        },
        {
          text: '<b>Enviar</b>',
          type: 'button-positive',
          onTap: function (e) {

            if (!$scope.data.model) {
              //don't allow the user to close unless he enters model...
              e.preventDefault();
            } else {
              return $scope.data.model;
            }
          }
        }
      ]
    });

    myPopup.then(function (res) {
      console.log('Tapped!', res + validateEmail(res));
      if (validateEmail(res) == true && flagCancel == false) {
        //Enviar correo//
        $scope.getEmailPass(res);

      } else {

        if (flagCancel == false) {
          errorMsg = "Ingrese un correo valido!"
          $scope.generateValidatePopUp();
        }

      }
    });
  };


  $scope.getEmailPass = function (res) {

    var pass = null;
    var url = myProvider.getUser() + '?mail=' + res;
    //var url = myProvider.getUser() + '?mail=' + $scope.usuarioLogin.mail;

    $http({
      method: 'GET',
      url: url,
      headers: {
        'Content-Type': 'application/json'
      }

    }).then(function successCallback(response) {

      if (response.data.length > 0) {
        $scope.usuario1 = angular.fromJson(response.data[0]);
        pass = $scope.usuario1.pass;
        console.log(pass)
        ////send email///
        $http({

          method: 'POST',
          url: myProvider.getSendEmail(),
          headers: {
            'Content-Type': 'application/json'
          },
          data: {
            "mailFrom": "mrjleo1989@gmail.com",
            "mailTo": res,
            "title": "Recuperacion de contraseña",
            "text": "<!DOCTYPE html>" +
            "<html class='html' lang='es-ES'>"
            + "<head>" + "<meta charset='utf-8'>" + "<meta http-equiv='X-UA-Compatible' content='IE=edge'>"
            + "<meta name='viewport' content='width=device-width, initial-scale=1'>"
            + "<title>Email Sender</title>"
            + "<link rel='stylesheet' href='style.css'>"
            + "<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>"
            + "<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>"
            + "</head>"
            + "<body>"
            + "<center>"
            + "<br>"
            + "<h2><font color='blue'>#baniosTuristicoApp</font></h2>"
            + "<img  src='http://thumbnails117.imagebam.com/52049/e782c3520483472.jpg'>"
            + "<p>Hola amig@!</p>"
            + "<p>Hemos recibido tu solicitud de recuperacion de contraseña.</p>"
            + "<p>A continuacion te enviamos tu contraseña, copia y pegala en el Login:</p>"
            + "<p>Aqui tu contraseña: </p>" + "<p>" + pass + "</p>"
            + "<p>Recuerda recomendar la aplicacion con todos tus amigos!</p>"
            + "<p>Gracias por utilizar la aplicacion</p>"
            + "<p>baniosTuristicoApp 2017 © RIOBYTES SOLUTIONS</p>"
            + "</center>"
            + "</body>"
            + "</html>"

          }

        }).then(function successCallback(response) {
          console.log(response.data);
          alert("setting parameters");

        }, function errorCallback(response) {
          console.log(response);
        });

      } else {
        $ionicPopup.alert({
          title: 'baniosTuristicoApp',
          content: '<center>El correo ingresado no existe!.</center>'
        })
      }

    }, function errorCallback(response) {

      Console.log(response);

    });

  }

  $scope.sendEmail = function () {

  }

  $scope.devList = [
    {text: "Recuerdame!", checked: false}
  ];

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

  /*var LocalStorageManager = {
    setValue: function(key, value) {
      window.localStorage.setItem(key, JSON.stringify(value));
    },
    getValue: function(key) {
      try {
        return JSON.parse(window.localStorage.getItem(key));
      } catch (e) {

      }
    }
  };*/



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

      //LocalStorageManager.setValue(usuario1._id,usuario1);
      //console.log("localStorage: "+localstorage.getValue(usuario1._id));

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


