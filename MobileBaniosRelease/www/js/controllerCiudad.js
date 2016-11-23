/**
 * Created by xaipo on 11/20/2016.
 */
app.controller('CiudadesController', function($scope,$http,myProvider,$ionicSlideBoxDelegate) {



  $scope.lista=[

    {
      titulo:'titulo1',
      img:'../img/ciudad/slide1.jpg',
      desc:'asdasdasd'
    },
    {
      titulo:'titulo2',
      img:'../img/ciudad/slide2.jpg',
      desc:'asdasdasd2'
    },
    {
      titulo:'titulo1',
      img:'../img/ciudad/slide3.jpg',
      desc:'asdasdasd'
    },
    {
      titulo:'titulo2',
      img:'../img/ciudad/slide4.jpg',
      desc:'asdasdasd2'
    },
    {
      titulo:'titulo1',
      img:'../img/ciudad/slide5.jpg',
      desc:'asdasdasd'
    },
    {
      titulo:'titulo2',
      img:'../img/ciudad/slide6.jpg',
      desc:'asdasdasd2'
    },   {
      titulo:'titulo1',
      img:'../img/ciudad/slide7.jpg',
      desc:'asdasdasd'
    },
    {
      titulo:'titulo2',
      img:'../img/ciudad/slide8.jpg',
      desc:'asdasdasd2'
    },

    {
      titulo:'titulo2',
      img:'../img/ciudad/slide10.jpg',
      desc:'asdasdasd2'
    },
    {
      titulo:'titulo1',
      img:'../img/ciudad/slide11.jpg',
      desc:'asdasdasd'
    },
    {
      titulo:'titulo2',
      img:'../img/ciudad/slide12.jpg',
      desc:'asdasdasd2'
    },
    {
      titulo:'titulo1',
      img:'../img/ciudad/slide13.jpg',
      desc:'asdasdasd'
    },
    {
      titulo:'titulo2',
      img:'../img/ciudad/slide14.jpg',
      desc:'asdasdasd2'
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
