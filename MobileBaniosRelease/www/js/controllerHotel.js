/**
 * Created by Juanpa on 23/11/2016.
 */
app.controller('HotelController', function($scope,$http,myProvider,$ionicSlideBoxDelegate) {
  $scope.lista=[
    {
      titulo:'ALIZAMAY HOTEL',
      img:'../img/hoteles/alisamay.PNG',
      desc:'TELEFONO: (03) 2741 391.',
      desc:'DIRECCIÓN: Calle Pastaza y Espejo.'
    },
    {
      titulo:'DONDE MARCELO',
      img:'../img/hoteles/dondeMarcelo.PNG',
      desc:'TELEFONO: (03) 2742 846.',
      desc:'DIRECCIÓN: Ambato y Pasaje Herrera.'
    },
    {
      titulo:'ELVITA SPA HOTEL',
      img:'../img/hoteles/elvita.PNG',
      desc:'TELEFONO: (03) 2743 516.',
      desc:'DIRECCIÓN: 16  de Diciembre y Rocafuerte.'
    },
    {
      titulo:'JARDINES DE CHAMANA',
      img:'../img/hoteles/jardinesChamana.PNG',
      desc:'TELEFONO: (03) 2776 170.',
      desc:'DIRECCIÓN: Via al Puyo, puente Ulba.'
    },
    {
      titulo:'LUNA RUNTUN',
      img:'../img/hoteles/lunaRuntun.PNG',
      desc:'TELEFONO: (03) 2740 882.',
      desc:'DIRECCIÓN: Vía a Runtun Km 6.'
    },
    {
      titulo:'MANANTIAL DE VIDA',
      img:'../img/hoteles/manatialVida.PNG',
      desc:'TELEFONO: (03) 3031 571.',
      desc:'DIRECCIÓN: Parroquia Río Negro.'
    },
    {
      titulo:'SAMARI',
      img:'../img/hoteles/samari.PNG',
      desc:'TELEFONO: (03) 2741 855.',
      desc:'DIRECCIÓN: Vía a Puyo Kilometro 1.'
    },
    {
      titulo:'SANGAY SPA HOTEL',
      img:'../img/hoteles/sangay.PNG',
      desc:'TELEFONO: (03) 2740 490.',
      desc:'DIRECCIÓN: Plaza Isidro Ayora *100.'
    },

    {
      titulo:'VOLCANO',
      img:'../img/hoteles/volcano.PNG',
      desc:'TELEFONO: (03) 2742 140.',
      desc:'DIRECCIÓN: R. Vieira y Av. Montalvo.'
    }
  ]

  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };
  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
});
