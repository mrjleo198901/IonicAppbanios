/**
 * Created by Juanpa on 23/11/2016.
 */
app.controller('RestaurantController', function($scope,$http,myProvider,$ionicSlideBoxDelegate) {
  $scope.lista=[
    {
      titulo:'Café del Cielo',
      img:'../img/restaurantes/cafeCielo.PNG',
      telefono:'Telefono: (03) 2740 360',
      direccion:'Dirección: Vía a Runtun Km 6, Baños'
    },
    {
      titulo:'Coffee Bar Jota Jota',
      img:'../img/restaurantes/jotaJota.PNG',
      telefono:'Telefono: 0998 373 240',
      direccion:'Dirección: Luis Martinez y Thomas Halflants'
    },
    {
      titulo:'Le Petit Restaurant',
      img:'../img/restaurantes/lePetit.PNG',
      telefono:'Telefono: (03) 2740 936',
      direccion:'Dirección: 16 de Diciembre 240 y Montalvo'
    },
    {
      titulo:'Mercedes Restaurant',
      img:'../img/restaurantes/mercedes.PNG',
      telefono:'Telefono: (03) 2741 745',
      direccion:'Dirección: Luis Martinez y Sebastian Baño'
    },
    {
      titulo:'Ricooo Pan Café',
      img:'../img/restaurantes/ricoPan.PNG',
      telefono:'Telefono: (03) 2740 387',
      direccion:'Dirección: Ambato y Maldonado'
    },
    {
      titulo:'Runtun Restaurante',
      img:'../img/restaurantes/runtun.PNG',
      telefono:'Telefono: (03) 2740 882',
      direccion:'Dirección: Vía a Runtun Km 6'
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
