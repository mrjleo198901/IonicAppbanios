/**
 * Created by Juanpa on 23/11/2016.
 */
app.controller('HotelController', function ($scope, $http, myProvider, $ionicSlideBoxDelegate,$ionicPopup) {
  $scope.lista = [
    {
      titulo: 'ALIZAMAY HOTEL',
      img: '../img/hoteles/alisamay.PNG',
      telefono: 'TELEFONO: (03) 2741 391.',
      direccion: 'DIRECCIÓN: Calle Pastaza y Espejo.'
    },
    {
      titulo: 'DONDE MARCELO',
      img: '../img/hoteles/dondeMarcelo.PNG',
      telefono: 'TELEFONO: (03) 2742 846.',
      direccion: 'DIRECCIÓN: Ambato y Pasaje Herrera.'
    },
    {
      titulo: 'ELVITA SPA HOTEL',
      img: '../img/hoteles/elvita.PNG',
      telefono: 'TELEFONO: (03) 2743 516.',
      direccion: 'DIRECCIÓN: 16  de Diciembre y Rocafuerte.'
    },
    {
      titulo: 'JARDINES DE CHAMANA',
      img: '../img/hoteles/jardinesChamana.PNG',
      telefono: 'TELEFONO: (03) 2776 170.',
      direccion: 'DIRECCIÓN: Via al Puyo, puente Ulba.'
    },
    {
      titulo: 'LUNA RUNTUN',
      img: '../img/hoteles/lunaRuntun.PNG',
      telefono: 'TELEFONO: (03) 2740 882.',
      direccion: 'DIRECCIÓN: Vía a Runtun Km 6.'
    },
    {
      titulo: 'MANANTIAL DE VIDA',
      img: '../img/hoteles/manatialVida.PNG',
      telefono: 'TELEFONO: (03) 3031 571.',
      direccion: 'DIRECCIÓN: Parroquia Río Negro.'
    },
    {
      titulo: 'SAMARI',
      img: '../img/hoteles/samari.PNG',
      telefono: 'TELEFONO: (03) 2741 855.',
      direccion: 'DIRECCIÓN: Vía a Puyo Kilometro 1.'
    },
    {
      titulo: 'SANGAY SPA HOTEL',
      img: '../img/hoteles/sangay.PNG',
      telefono: 'TELEFONO: (03) 2740 490.',
      direccion: 'DIRECCIÓN: Plaza Isidro Ayora *100.'
    },

    {
      titulo: 'VOLCANO',
      img: '../img/hoteles/volcano.PNG',
      telefono: 'TELEFONO: (03) 2742 140.',
      direccion: 'DIRECCIÓN: R. Vieira y Av. Montalvo.'
    }
  ]

  $scope.ratingsObject = {
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
  var ind=0;
  $scope.slideHasChanged = function ($index) {
    //alert('slideHasChanged $index=' + $index);
    ind = $index;
    if ($index === 0) {
      // first box
    }
  };

  $scope.labels = [
    "Current",
    "Average"
  ];

  $scope.ratingsCallback = function (rating, index) {
    console.log('Rating: ', rating, ' Index: ', index, ' Nro. Hotel: ', ind);
  };

  /*$scope.ratingsCallback = function(rating) {
   console.log('Selected rating is : ', rating);
   };*/

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

  $scope.getAverage = function () {
    var url = myProvider.getEstablecimiento();

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
          //window.location = '/appBanios/client/hola.html';

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



});
