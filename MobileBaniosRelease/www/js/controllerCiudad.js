/**
 * Created by xaipo on 11/20/2016.
 */
app.controller('CiudadesController', function($scope,$http,myProvider,$ionicSlideBoxDelegate) {



  $scope.lista=[

    {
      titulo:'Baños de Agua Santa',
      img:'../img/ciudad/slide1.jpg',
      desc:'Baños de Agua Santa se encuentra en la provincia de Tungurahua solamente a 180 Km de Quito y 35 Km de Ambato.'
    },
    {
      titulo:'Fiestas y feriados principales',
      img:'../img/ciudad/slide2.jpg',
      desc:'Carnaval en Febrero, Semana Santa, 24 de Mayo (Batalla de Pichincha), 10 de Agosto (Primer grito de independencia), Fiestas de la Virgen en Octubre, 2 de Noviembre (Día de los fieles difuntos) y la fiesta de Cantonización en Diciembre.'
    },
    {
      titulo:'Su Población',
      img:'../img/ciudad/slide3.jpg',
      desc:'Baños tiene una población con 20.000 habitantes, esta a una altura de 1.826 metros y posee temperaturas promedios de 20°C.'
    },
    {
      titulo:'Su Volcán',
      img:'../img/ciudad/slide4.jpg',
      desc:'El volcan Tungurahua tiene una altura de 5016 metros y se ubica 25 km al este de Ambato.'
    },
    {
      titulo:'Deportes',
      img:'../img/ciudad/slide5.jpg',
      desc:'El Cantón les invita a descansar en sus piscinas de aguas termales y spas, aventura para toda la familia o deportes extremos como rafting, escaladas, canyoning, canopy, trekking, mountain biking o puenting (bungee jumping).'
    },
    {
      titulo:'Santuario de la Virgen de Agua Santa',
      img:'../img/ciudad/slide8.jpg',
      desc:'La construcción del  Santuario duro 40 años,  desde 1904 hasta 1944; construida en su totalidad en roca tallada a mano y de origen volcánico,  posee una arquitectura gótica moderada. Su construcción la inició el Padre Thomas Halflants de origen belga.'
    },

    {
      titulo:'Baños de Agua Santa',
      img:'../img/ciudad/slide10.jpg',
      desc:'En Baños la inspiración que genera su entorno ha influenciado en la aparición  de  artistas que han paseado su arte por el Ecuador y el mundo,  muchas de sus obras se encuentran en galerías de arte de la localidad.'
    },
    {
      titulo:'Alojamiento',
      img:'../img/ciudad/slide11.jpg',
      desc:'Baños posee una cantidad de hoteles y spa, para disfrutar en familia, solo o acompañado.'
    },
    {
      titulo:'Baños de Agua Santa',
      img:'../img/ciudad/slide12.jpg',
      desc:'La ciudad turística de está ubicado en un valle con cascadas y aguas termales a lado del volcán Tungurahua con una altura de 5.016 metros.'
    },
    {
      titulo:'Lugares de Descanso',
      img:'../img/ciudad/slide13.jpg',
      desc:'La ciudad posee un sin numero de lugares donde podemos relagarnos y olvidarnos de nuestros problemas.'
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
