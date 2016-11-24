/**
 * Created by Juanpa on 23/11/2016.
 */
app.controller('GuidesController', function($scope,$http,myProvider,$ionicSlideBoxDelegate) {
  $scope.lista=[
    {
      titulo:'Adventure Equatorland',
      img:'../img/guia/adventureEquatorland.jpg',
      telefono:'Telefono: (03) 2740 360',
      mail:'email: adventureequatorland@hotmail.com',
      desc:'Rafting, Canyoning, Selva, Chiva, Cascadas, etc..'
    },
    {
      titulo:'AGUITUN',
      img:'../img/guia/aguitun.png',
      telefono:'Telefono: 000000000',
      mail:'email: aguitun@gmail.com',
      desc:'Montaña, Rekking, Rafting, Canyoning, Guías nativos, et..'
    },
    {
      titulo:'Aninga Travel',
      img:'../img/guia/aninga.png',
      telefono:'Telefono: (03) 2743 372',
      mail:'email: aningatravel@hotmail.com',
      desc:'Rafting, Canyoning, Cabalgata, Parapente, Puentinig, etc..'
    },
    {
      titulo:'Alquiler de Chivas',
      img:'../img/guia/chiva.png',
      telefono:'Telefono: (03) 2741 024',
      mail:'email: santiagosilva93@hotmail.com',
      desc:'our Nocturno, Tour Cascada, Reserva de Chivas'
    },
    {
      titulo:'Ecuador Mountain Guides',
      img:'../img/guia/ecuadorMount.png',
      telefono:'Celular: 0985 050 678',
      mail:'email: ecuadormountainguides@outlook.es',
      desc:'Ciclismo, Trekking, Caminatas, Parapente, Cabalgatas, etc..'
    },
    {
      titulo:'Geo Tours',
      img:'../img/guia/geotours.jpg',
      telefono:'Telefono: (03) 2741 344',
      mail:'email: geotoursbanios@yahoo.es',
      desc:'Selva, Parapente, Cabalgatas, Rafting, Escalada, etc..'
    },
    {
      titulo:'Imagine Ecuador',
      img:'../img/guia/imagineEcuador.jpg',
      telefono:'Telefono: (03) 2743 472',
      mail:'email: imagineecuador@gmail.com',
      desc:'Tour Packages, Trekking, Caminatas, Parapente, Cabalgatas, etc..'
    },
    {
      titulo:'Luna Travel',
      img:'../img/guia/lunaTravel.jpg',
      telefono:'Telefono: (03) 2740 882',
      mail:'email: xxxxx',
      desc:'Rafting, Canyoning, Canopy, Bicicletas, Caballos, Amazonía, etc..'
    },

    {
      titulo:'Team Adventure',
      img:'../img/guia/teamAdventure.gif',
      telefono:'Celular: 0984 986 245',
      mail:'email: xxxxx',
      desc:'Puenting, Canyoning,Selva, Montaña (Chimborazo, Cotopaxi, Carihuairazo), etc..'
    },
    {
      titulo:'Wonderful Ecuador',
      img:'../img/guia/WonderfulEcuador.png',
      telefono:'Telefono: (03) 2741 580',
      mail:'email: xxxxx',
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
