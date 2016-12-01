/**
 * Created by Leo on 01/12/2016.
 */

app.controller('ControllerSignUp', function ($scope, $ionicLoading, $compile, $http, myProvider, $state, $ionicPopup) {

  //Sign Up//
  $scope.usuario = {
    nombre: '',
    apellido: '',
    mail: '',
    pass: '',
    r_pass: ''
  }

  $scope.signup = function () {
    $scope.usuario.nombre = document.getElementById('name').value;
    $scope.usuario.apellido = document.getElementById('last_name').value;
    $scope.usuario.mail = document.getElementById('txt-email-address').value;
    $scope.usuario.pass = document.getElementById('txt-password').value;
    $scope.usuario.r_pass = document.getElementById('txt-password-confirm').value;

    console.log($scope.usuario.nombre);
    //console.log(validateEmail($scope.mail));

    if (validateEmail($scope.usuario.mail) == true) {
      if ($scope.usuario.pass.localeCompare($scope.usuario.r_pass) == 0) {
        $http({
          method: 'POST',
          url: myProvider.getUser(),
          headers: {
            'Content-Type': 'application/json'
          },
          data: {
            "nombre": $scope.usuario.nombre,
            "apellido": $scope.usuario.apellido,
            "pass": $scope.usuario.pass,
            "mail": $scope.usuario.mail
          }

        }).then(function successCallback(response) {

          $ionicPopup.alert({
            title: 'baniosTuristico!',
            content: '<center>Ingreso existoso!.</center>',
            buttons: [{
              text: 'OK',
              type: 'button-positive',
              onTap: function (e) {
                window.location = 'singin.html';
                return scope.data.response;
              }
            }]
          })

        }, function errorCallback(response) {

          console.log(response);

        });
      } else {

        var span1 = document.getElementById("txt-password");
        span1.style.backgroundColor = "#F78181";
        var span2 = document.getElementById("txt-password-confirm");
        span2.style.backgroundColor = "#F78181";
        //alert("Las contraseñas no coinciden");
        $ionicPopup.alert({
          title: 'baniosTuristico!',
          content: '<center>Las contraseñas no coinciden!.</center>'
        })
      }
    } else {
      var span = document.getElementById("txt-email-address");
      //span.style.backgroundColor = "#BDBDBD";
      span.style.backgroundColor = "#F78181";
      //alert("Mail Incorrecto");
      $ionicPopup.alert({
        title: 'baniosTuristico!',
        content: '<center>Mail Incorrecto!.</center>'
      })
    }
  };
});

function validateEmail(email) {
  console.log(email)
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

