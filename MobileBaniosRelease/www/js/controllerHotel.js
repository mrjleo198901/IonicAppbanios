/**
 * Created by Juanpa on 23/11/2016.
 */


app.controller('HotelController', function ($scope, $http, myProvider, $ionicSlideBoxDelegate, $ionicPopup, $ionicLoading, $compile) {

  var sample = [{}];
  var avg = 1;
  var ind = 0;
  $scope.ratingsObjectCurrent = '';
  $scope.ratingsObjectAvg = '';
  var alreadyVoted = false;
  var a;

  // set the rate and max variables
  $scope.rating = {};
  $scope.rating.rate = 3;
  $scope.rating.max = 5;

  $scope.lista = [
    {
      titulo: 'ALIZAMAY HOTEL',
      img: '../img/hoteles/alisamay.PNG',
      telefono: 'TELEFONO: (03) 2741 391.',
      direccion: 'DIRECCIÓN: Calle Pastaza y Espejo.',
      indice: 0,
    },
    {
      titulo: 'DONDE MARCELO',
      img: '../img/hoteles/dondeMarcelo.PNG',
      telefono: 'TELEFONO: (03) 2742 846.',
      direccion: 'DIRECCIÓN: Ambato y Pasaje Herrera.',
      indice: 1
    },
    {
      titulo: 'ELVITA SPA HOTEL',
      img: '../img/hoteles/elvita.PNG',
      telefono: 'TELEFONO: (03) 2743 516.',
      direccion: 'DIRECCIÓN: 16  de Diciembre y Rocafuerte.',
      indice: 2
    },
    {
      titulo: 'JARDINES DE CHAMANA',
      img: '../img/hoteles/jardinesChamana.PNG',
      telefono: 'TELEFONO: (03) 2776 170.',
      direccion: 'DIRECCIÓN: Via al Puyo, puente Ulba.',
      indice: 3
    },
    {
      titulo: 'LUNA RUNTUN',
      img: '../img/hoteles/lunaRuntun.PNG',
      telefono: 'TELEFONO: (03) 2740 882.',
      direccion: 'DIRECCIÓN: Vía a Runtun Km 6.',
      indice: 4
    },
    {
      titulo: 'MANANTIAL DE VIDA',
      img: '../img/hoteles/manatialVida.PNG',
      telefono: 'TELEFONO: (03) 3031 571.',
      direccion: 'DIRECCIÓN: Parroquia Río Negro.',
      indice: 5
    },
    {
      titulo: 'SAMARI',
      img: '../img/hoteles/samari.PNG',
      telefono: 'TELEFONO: (03) 2741 855.',
      direccion: 'DIRECCIÓN: Vía a Puyo Kilometro 1.',
      indice: 6
    },
    {
      titulo: 'SANGAY SPA HOTEL',
      img: '../img/hoteles/sangay.PNG',
      telefono: 'TELEFONO: (03) 2740 490.',
      direccion: 'DIRECCIÓN: Plaza Isidro Ayora *100.',
      indice: 7
    },

    {
      titulo: 'VOLCANO',
      img: '../img/hoteles/volcano.PNG',
      telefono: 'TELEFONO: (03) 2742 140.',
      direccion: 'DIRECCIÓN: R. Vieira y Av. Montalvo.',
      indice: 8
    }
  ]

  $scope.slideHasChanged = function ($index) {

    ind = $index;
    avg = getAvg(ind);


    ////////////////////////Current grade/////////////////////
    $scope.ratingsObjectCurrent = {
      iconOn: 'ion-ios-star',
      iconOff: 'ion-ios-star-outline',
      iconOffColor: 'rgb(200, 200, 100)',
      iconOnColor: 'rgb(255, 255, 255)',
      rating: 2,
      minRating: 1,
      readOnly: true,
      callback: function (rating, index) {
        //alreadyVoted = true;
        var container = document.getElementById("currentDiv");
        var content = container.innerHTML;
        container.innerHTML = content;


        console.log("slide")
        $scope.ratingsCallback1(rating, index);
        a = rating;
        $ionicPopup.alert({
          title: 'baniosTuristico!',
          content: '<center>Has votado por el establecimiento!</center>',
          buttons: [{
            text: 'OK',
            type: 'button-positive',
            onTap: function (e) {
              //$scope.remakeStar();


            }
          }]
        })
      }
    };


    ////////////////////////Average/////////////////////
    //console.log('ahi ta ' + $scope.lista.length)
    $scope.ratingsObjectAvg = {
      iconOn: 'ion-ios-star',
      iconOff: 'ion-ios-star-outline',
      //iconOffColor: 'rgb(200, 200, 100)',
      //iconOnColor: 'rgb(255, 255, 255)',
      iconOffColor: 'rgb(10, 20, 98)',
      iconOnColor: 'rgb(98, 180, 5)',
      rating: avg,
      minRating: 1,
      readOnly: true,
      callback: function (rating, index) {
        $scope.ratingsCallback2(rating, index);
      }
    };

    if ($index === 0) {
      // first box
      //avg = getAvg(ind);
    }
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

  ///////////getCurAver//////////

  $scope.getEstablecimientos = function () {

    var url = myProvider.getEstablecimiento();

    $http({
      method: 'GET',
      url: url,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function successCallback(response) {

      for (var i = 0; i < response.data.length; i++) {
        sample[i] = angular.fromJson(response.data[i]);
      }

      avg = getAvg(ind);
      $scope.ratingsObjectAvg = {
        iconOn: 'ion-ios-star',
        iconOff: 'ion-ios-star-outline',
        iconOffColor: 'rgb(200, 200, 100)',
        iconOnColor: 'rgb(255, 255, 255)',
        rating: avg,
        minRating: 1,
        readOnly: true,
        callback: function (rating, index) {
          $scope.ratingsCallback2(rating, index);
        }
      };
    }, function errorCallback(response) {
      $scope.mesaje = response.mensaje;

    });

  };

  $scope.getEstablecimientos();

  function getAvg(ind) {
    var n = sample.length;
    var avg;
    for (var i = 0; i < n; i++) {
      if (sample[i].indice == ind) {
        avg = sample[i].average;
        break;
      }
    }
    return avg;
  }

  ////////////////////////Current grade/////////////////////

  $scope.ratingsObjectCurrent = {
    iconOn: 'ion-ios-star',
    iconOff: 'ion-ios-star-outline',
    iconOffColor: 'rgb(200, 200, 100)',
    iconOnColor: 'rgb(255, 255, 255)',
    //iconOffColor:'rgb(255,255,255)',
    //iconOnColor:'rgb(233,53,53)',
    //iconOffColor: 'rgb(10, 20, 98)',
    //iconOnColor: 'rgb(98, 180, 5)',
    rating: 2,
    minRating: 1,
    readOnly: false,
    callback: function (rating, index) {
      console.log("1st")
      $scope.ratingsCallback1(rating, index);
      a = rating;
      $ionicPopup.alert({
        title: 'baniosTuristico!',
        content: '<center>Has votado por el establecimiento!</center>',
        buttons: [{
          text: 'OK',
          type: 'button-positive',
          onTap: function (e) {
            $scope.remakeStar();
          }
        }]
      })
    }
  };

  ////////////////////////Average/////////////////////
  $scope.ratingsObjectAvg = {
    iconOn: 'ion-ios-star',
    iconOff: 'ion-ios-star-outline',
    iconOffColor: 'rgb(200, 200, 100)',
    iconOnColor: 'rgb(255, 255, 255)',
    rating: avg,
    minRating: 1,
    readOnly: true,
    callback: function (rating, index) {
      $scope.ratingsCallback2(rating, index);
    }
  };

  $scope.ratingsCallback1 = function (rating, index) {
    console.log('Rating: ', rating, ' Index: ', index, ' Nro. Hotel: ', ind);
  };
  $scope.ratingsCallback2 = function (rating, index) {
    console.log('Rating: ', rating + 'avg: ' + avg + 'index:' + index);
  };


  $scope.remakeStar = function () {


    var container = document.getElementById("currentDiv");
    var content = container.innerHTML;
    container.innerHTML = content;

    console.log("star")
    /*$scope.ratingsObjectCurrent = {
     iconOn: 'ion-ios-star',
     iconOff: 'ion-ios-star-outline',
     iconOffColor: 'rgb(200, 200, 100)',
     iconOnColor: 'rgb(255, 255, 255)',
     rating: a,
     minRating: 1,
     readOnly: true,
     callback: function (rating, index) {
     console.log("remake")
     $scope.ratingsCallback1(rating, index);
     }
     };*/
  }

});


