/**
 * Created by Juanpa on 23/11/2016.
 */
app.controller('GuidesController', function($scope,$http,myProvider,$ionicSlideBoxDelegate) {
  $scope.lista=[
    {
      titulo:'Adventure Equatorland',
      img:'../img/guia/adventureEquatorland.jpg',
      desc:'Telefono: 032740360',
      desc:'email: adventureequatorland@hotmail.com',
      desc:'Rafting, Canyoning, Selva, Chiva, Cascadas, etc..'
    },
    {
      titulo:'AGUITUN',
      img:'../img/guia/aguitun.png',
      desc:'Telefono: 000000000',
      desc:'email: aguitun@gmail.com',
      desc:'Montaña, Rekking, Rafting, Canyoning, Guías nativos, et..'
    },
    {
      titulo:'Aninga Travel',
      img:'../img/guia/aninga.png',
      desc:'Telefono: 032743372',
      desc:'email: aningatravel@hotmail.com',
      desc:'Rafting, Canyoning, Cabalgata, Parapente, Puentinig, etc..'
    },
    {
      titulo:'Alquiler de Chivas',
      img:'../img/guia/chiva.png',
      desc:'Telefono: 032741024',
      desc:'email: santiagosilva93@hotmail.com',
      desc:'our Nocturno, Tour Cascada, Reserva de Chivas'
    },
    {
      titulo:'Ecuador Mountain Guides',
      img:'../img/guia/ecuadorMount.png',
      desc:'Celular: 09 8505 0678',
      desc:'email: ecuadormountainguides@outlook.es',
      desc:'Ciclismo, Trekking, Caminatas, Parapente, Cabalgatas, etc..'
    },
    {
      titulo:'Geo Tours',
      img:'../img/guia/geotours.jpg',
      desc:'Telefono: 032741344',
      desc:'email: geotoursbanios@yahoo.es',
      desc:'Selva, Parapente, Cabalgatas, Rafting, Escalada, etc..'
    },
    {
      titulo:'Imagine Ecuador',
      img:'../img/guia/imagineEcuador.jpg',
      desc:'Telefono: 032743472',
      desc:'email: imagineecuador@gmail.com',
      desc:'Tour Packages, Trekking, Caminatas, Parapente, Cabalgatas, etc..'
    },
    {
      titulo:'Luna Travel',
      img:'../img/guia/lunaTravel.jpg',
      desc:'Telefono: 032740882',
      desc:'email: xxxxx',
      desc:'Rafting, Canyoning, Canopy, Bicicletas, Caballos, Amazonía, etc..'
    },

    {
      titulo:'Team Adventure',
      img:'../img/guia/teamAdventure.gif',
      desc:'Celular: 0984986245',
      desc:'email: xxxxx',
      desc:'Puenting, Canyoning,Selva, Montaña (Chimborazo, Cotopaxi, Carihuairazo), etc..'
    },
    {
      titulo:'Wonderful Ecuador',
      img:'../img/guia/WonderfulEcuador.png',
      desc:'Telefono: 032741580',
      desc:'email: xxxxx',
      desc:'Rafting, Canyoning, Canopy, Jumping, Amazon, etc..'
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
