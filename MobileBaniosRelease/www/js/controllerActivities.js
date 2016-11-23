/**
 * Created by Juanpa on 23/11/2016.
 */
app.controller('ActivitiesController', function($scope,$http,myProvider,$ionicSlideBoxDelegate) {
  $scope.lista=[
    {
      titulo:'Canopy',
      img:'../img/actividades/canopy.PNG',
      desc:'Permite deslizarse desde la parte superior hacia abajo suspendido en un cable generalmente de acero inoxidable que cruza una quebrada, un río o entre las copas de los árboles.'
    },
    {
      titulo:'Canyoning',
      img:'../img/actividades/canyoning.PNG',
      desc:'Es un deporte que se practica en cascadas, básicamente es el descenso de las mismas a través de una cuerda sujetada a un arnés y otros equipos especiales.'
    },
    {
      titulo:'Downhill',
      img:'../img/actividades/downhill.PNG',
      desc:'Es un descenso de una montaña en bicicleta, hay varias pistas muy técnicas para la práctica de este deporte, y han sido escenario de varias competencias a nivel Nacional e Internacional.'
    },
    {
      titulo:'Puenting',
      img:'../img/actividades/puenting.PNG',
      desc:'Es un deporte que se lo practica en los puentes, se lo realiza con cuerdas que se encuentran atadas a un lado del puente y consiste en saltar del otro extremo del mismo cayendo unos segundos en caída libre y luego en movimientos tipo columpio.'
    },
    {
      titulo:'Rafting',
      img:'../img/actividades/rafting.PNG',
      desc:'Se lo realiza en el río Pastaza en el sector oriental de la ciudad, partiendo desde San Francisco, o desde el sector de La Penal (Río Negro); generalemnte se lo realiza en 2 tramos del río con distinto grado o nivel de dificultad que va entre III a V.'
    },
    {
      titulo:'Spa',
      img:'../img/actividades/spa.PNG',
      desc:'Usted podrá escoger de una gama de  80 diferentes tratamientos, como: fango terapia, baños de vapor, depilaciones, aroma terapia,  hidratación con miel o chocolate, etc. Que le renovarán su vitalidad y espiritualidad  y le llenarán de renovadas energías.'
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
