/**
 * Created by Juanpa on 23/11/2016.
 */
app.controller('GuidesController', function ($scope, $http, myProvider, $ionicSlideBoxDelegate, $ionicPopup) {

  $scope.sample = [{}];
  var currentRating = 0;
  var res = 2;
  var currentUser = angular.fromJson(window.localStorage.getItem("usuario"));
  var alreadyVoted = false;
  var estID = "";
  var estRate = 0;
  var acum = 0;
  var ratingNumber = 0;

  //Get Establishments
  var url = myProvider.getEstablecimiento() + '?type=' + res;

  $http({
    method: 'GET',
    url: url,
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function successCallback(response) {

    for (var i = 0; i < response.data.length; i++) {
      $scope.sample[i] = angular.fromJson(response.data[i]);
    }
    console.log($scope.sample[0]);
    //setting the avg to the 1st element(hotel)
    $scope.data1.rating1 = $scope.sample[0].average;
    //Get user to verify establishmentsArray
    //var hotelID = $scope.sample[0]._id;
    estID = $scope.sample[0]._id;
    checkRateUserHotel(estID);
  }, function errorCallback(response) {
    $scope.mesaje = response.mensaje;

  });

  function checkRateUserHotel(hotelID) {

    var n = currentUser.establecimientoV.length;
    var aux;
    var array2 = [];
    var array3 = [];

    for (var i = 0; i < n; i++) {
      aux = currentUser.establecimientoV[i].split("-");
      array2[i] = aux[0];
      array3[i] = aux[1];
    }
    var a = array2.indexOf(hotelID);
    console.log("hotelID: " + hotelID);
    if (a != -1) {
      $scope.data.rating = array3[a];
      $scope.readOnlyCur = true;
      alreadyVoted = true;

    } else {
      $scope.data.rating = 0;
      $scope.readOnlyCur = false;
      alreadyVoted = false;
    }

  }

  $scope.slideHasChanged = function ($index) {

    $scope.data1.rating1 = $scope.sample[$index].average;
    $scope.readOnlyAvg = true;
    var hotelID = $scope.sample[$index]._id;
    checkRateUserHotel(hotelID);
    estID = hotelID;
    acum = $scope.sample[$index].acum;
    ratingNumber = $scope.sample[$index].ratingNumber;
  };

  $scope.next = function () {
    $ionicSlideBoxDelegate.next();
  };

  $scope.previous = function () {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function (index) {
    $scope.slideIndex = index;
  };

  //Current//
  $scope.rating = 4;
  $scope.data = {
    rating: 0,
    max: 5
  }

  //Average//
  $scope.rating1 = 4;
  $scope.data1 = {
    rating1: 0,
    max1: 5
  }
  //$scope.readOnlyCur = false;
  $scope.readOnlyAvg = true;

  $scope.$watch('data.rating', function () {
    currentRating = $scope.data.rating;
    //console.log('New value: ' + $scope.data.rating);
    if (!alreadyVoted)
      activateRO();
  });

  function activateRO() {
    //console.log(currentRating)
    if (currentRating > 0) {
      //message//
      setTimeout(function () {
        generateAlerts(1);
      }, 300);
      //set true//
      $scope.readOnlyCur = true;
      estRate = currentRating;
    }
  }


  function generateAlerts(type) {
    if (type == 1) {
      $ionicPopup.alert({
        title: 'baniosTuristico!',
        content: '<center>Has votado por el establecimiento!</center>',
        buttons: [{
          text: 'OK',
          type: 'button-positive',
          onTap: function (e) {

            //Save rating in establishmentArray *************************PENDIENTE******************
            //get whole array, concat (-) hotelID + currentRating, add to array, do put with user ID
            var register = estID.concat("-").concat(estRate);
            var vecEst = currentUser.establecimientoV;
            vecEst.push(register);
            //Update localStorage
            var updatedUser = {
              "_id": currentUser._id,
              "nombre": currentUser.nombre,
              "apellido": currentUser.pass,
              "pass": currentUser.pass,
              "mail": currentUser.mail,
              "establecimientoV": vecEst
            }
            window.localStorage.setItem("usuario", JSON.stringify(updatedUser));
            //Save in user document
            var url = myProvider.getUser() + '/' + currentUser._id;
            $http({
              method: 'PUT',
              url: url,
              headers: {
                'Content-Type': 'application/json'
              },
              data: {
                "establecimientoV": vecEst
              }

            }).then(function successCallback(response) {

            }, function errorCallback(response) {
              $scope.mesaje = response.mensaje;

            });
            //Update rating % acumulator
            acum = ratingNumber + estRate;
            ratingNumber++;
            //Update Average
            var newAvg = acum / ratingNumber;
            $scope.data1.rating1 = newAvg;
            //Update establishment document
            var url = myProvider.getEstablecimiento() + '/' + estID;
            $http({
              method: 'PUT',
              url: url,
              headers: {
                'Content-Type': 'application/json'
              },
              data: {
                "acum": acum,
                "ratingNumber": ratingNumber,
                "average": newAvg
              }

            }).then(function successCallback(response) {


            }, function errorCallback(response) {
              $scope.mesaje = response.mensaje;

            });

          }
        }]
      })
    }

    if (type == 2) {
      $ionicPopup.alert({
        title: 'baniosTuristico!',
        content: '<div style="text-align: center">Ya has votado por este estableciento!</div>' +
        '<br> <div style="text-align: center">¿Deseas volver a votar?</div>',
        buttons: [{
          text: 'OK',
          type: 'button-positive',
          onTap: function (e) {

          }
        },
          {
            text: 'Cancel',
            type: 'button-assertive'
          }]
      })
    }
  }

});
