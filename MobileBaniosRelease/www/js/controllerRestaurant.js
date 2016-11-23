/**
 * Created by Juanpa on 23/11/2016.
 */
app.controller('RestaurantController', function($scope,$http,myProvider,$ionicSlideBoxDelegate) {
  $scope.lista=[
    {
      titulo:'Café del Cielo',
      img:'../img/restaurantes/cafeCielo.PNG',
      desc:'Telefono: 032740360',
      desc:'Dirección: Vía a Runtun Km 6, Baños'
    },
    {
      titulo:'Coffee Bar Jota Jota',
      img:'../img/restaurantes/jotaJota.PNG',
      desc:'Telefono: 0998373240',
      desc:'Dirección: Luis Martinez y Thomas Halflants'
    },
    {
      titulo:'Le Petit Restaurant',
      img:'../img/restaurantes/lePetit.PNG',
      desc:'Telefono: 03-2740-936',
      desc:'Dirección: 16 de Diciembre 240 y Montalvo'
    },
    {
      titulo:'Mercedes Restaurant',
      img:'../img/restaurantes/mercedes.PNG',
      desc:'Telefono: 032-741-745',
      desc:'Dirección: Luis Martinez y Sebastian Baño'
    },
    {
      titulo:'Ricooo Pan Café',
      img:'../img/restaurantes/ricoPan.PNG',
      desc:'Telefono: 03-2740-387',
      desc:'Dirección: Ambato y Maldonado'
    },
    {
      titulo:'Runtun Restaurante',
      img:'../img/restaurantes/runtun.PNG',
      desc:'Telefono: 032-740-882',
      desc:'Dirección: Vía a Runtun Km 6'
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
