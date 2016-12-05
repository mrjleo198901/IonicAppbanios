/**
 * Created by Juanpa on 23/11/2016.
 */
var sample = [{}];
var avg = 1;
var ind = 0;

app.controller('HotelController', function ($scope, $http, myProvider, $ionicSlideBoxDelegate, $ionicPopup) {

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

  ////////////////////////Current grade/////////////////////
  $scope.ratingsObjectCurrent = {
    iconOn: 'ion-ios-star',
    iconOff: 'ion-ios-star-outline',
    iconOffColor: 'rgb(200, 200, 100)',
    //iconOffColor:  'rgb(200, 100, 100)',
    iconOnColor: 'rgb(255, 255, 255)',
    rating: 2,
    minRating: 1,
    callback: function (rating, index) {
      $scope.ratingsCallback(rating, index);
    }
  };

  ////////////////////////Average/////////////////////

  $scope.ratingsObjectAvg = {
    iconOn: 'ion-ios-star',
    iconOff: 'ion-ios-star-outline',
    iconOffColor: 'rgb(200, 200, 100)',
    //iconOffColor:  'rgb(200, 100, 100)',
    iconOnColor: 'rgb(255, 255, 255)',
    rating: avg,
    minRating: 1,
    readOnly: true,
    callback: function (rating, index) {
      $scope.ratingsCallback(rating, index);
    }
  };


  $scope.slideHasChanged = function ($index) {
  //////////////

  //////////////

    ind = $index;
    avg = getAvg(ind);
    console.log(avg);
    if ($index === 0) {
      // first box
    }
  };


  $scope.ratingsCallback = function (rating, index) {
    console.log('Rating: ', rating, ' Index: ', index, ' Nro. Hotel: ', ind);

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
        console.log(sample[i].name);
      }

      avg=getAvg(ind);
      console.log("arrancando: "+avg);
    }, function errorCallback(response) {
      $scope.mesaje = response.mensaje;

    });

  };
  //console.log(getAvg(0));
  //console.log(ind)
  $scope.getEstablecimientos();

  function getAvg(ind) {
    var n = sample.length;
    //console.log("sample lenght:" + n)
    var avg;
    for (var i = 0; i < n; i++) {
      if (sample[i].indice == ind) {
        avg = sample[i].average;
        break;
      }
    }
    return avg;
  }

});


