/**
 * Created by Leo on 08/12/2016.
 */

app.controller('HotelControllerNew', function ($scope, $http, myProvider, $ionicSlideBoxDelegate, $ionicPopup, $rootScope) {

  var sample = [{}];
  var avg = 1;
  var ind = 0;
  var currentRating = 0;


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

  $scope.slideHasChanged = function ($index) {
    currentRating = 0;
    ind = $index;
    avg = getAvg(ind);
    $scope.data.rating = 0;
    $scope.readOnlyCur = false;
    //$scope.data1.rating1 = avg;
    if ($index === 0) {
      // first box
      //avg = getAvg(ind);
    }
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

  //Get Establishments
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
      }

      avg = getAvg(ind);

    }, function errorCallback(response) {
      $scope.mesaje = response.mensaje;

    });

  };
  $scope.getEstablecimientos();

  function getAvg(ind) {
    var n = sample.length;
    var avg;
    for (var i = 0; i < n; i++) {
      if (sample[i].indice == ind) {
        avg = sample[i].average;
        break;
      }
    }
    //console.log(avg);
    $scope.data1.rating1 = avg;
    $scope.readOnlyAvg = true;
    return avg;
  }

  //Current//
  $scope.rating = 4;
  $scope.data = {
    rating: 0,
    max: 5
  }

  //Average//
  $scope.rating1 = 4;
  $scope.data1 = {
    rating1: 1,
    max1: 5
  }
  $scope.readOnlyCur = false;
  $scope.readOnlyAvg = false;

  $scope.$watch('data.rating', function () {
    currentRating = $scope.data.rating;
    console.log('New value: ' + $scope.data.rating);
    activateRO();
  });

  function activateRO() {
    console.log(currentRating)
    if (currentRating > 0) {
      //message//
      setTimeout(function () {
        generateAlerts(1);
      }, 300);
      //set true//
      $scope.readOnlyCur = true;
    }
  }


  function generateAlerts(type) {
    if (type == 1) {
      $ionicPopup.alert({
        title: 'baniosTuristico!',
        content: '<center>Has votado por el establecimiento!</center>',
        buttons: [{
          text: 'OK',
          type: 'button-positive'
        }]
      })
    }
    if (type == 2) {
      $ionicPopup.alert({
        title: 'baniosTuristico!',
        content: '<div style="text-align: center">Ya has votado por este estableciento!</div>' +
        '<br> <div style="text-align: center">¿Deseas volver a votar?</div>',
        buttons: [{
          text: 'OK',
          type: 'button-positive',
          onTap: function (e) {

          }
        },
          {
            text: 'Cancel',
            type: 'button-assertive'
          }]
      })
    }
  }


});


// Generated by CoffeeScript 1.9.1
(function () {
  angular.module('ionic.rating', []).constant('ratingConfig', {
    max: 5,
    stateOn: null,
    stateOff: null
  }).controller('RatingController', function ($scope, $attrs, ratingConfig) {
    var ngModelCtrl;
    ngModelCtrl = {
      $setViewValue: angular.noop
    };
    this.init = function (ngModelCtrl_) {
      var max, ratingStates;
      ngModelCtrl = ngModelCtrl_;
      ngModelCtrl.$render = this.render;
      this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn;
      this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff;
      max = angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max;
      ratingStates = angular.isDefined($attrs.ratingStates) ? $scope.$parent.$eval($attrs.ratingStates) : new Array(max);
      return $scope.range = this.buildTemplateObjects(ratingStates);
    };
    this.buildTemplateObjects = function (states) {
      var i, j, len, ref;
      ref = states.length;
      for (j = 0, len = ref.length; j < len; j++) {
        i = ref[j];
        states[i] = angular.extend({
          index: 1
        }, {
          stateOn: this.stateOn,
          stateOff: this.stateOff
        }, states[i]);
      }
      return states;
    };
    $scope.rate = function (value) {
      if (!$scope.readonly && value >= 0 && value <= $scope.range.length) {
        ngModelCtrl.$setViewValue(value);
        return ngModelCtrl.$render();
      }
    };
    $scope.reset = function () {
      $scope.value = ngModelCtrl.$viewValue;

      return $scope.onLeave();
    };
    $scope.enter = function (value) {
      if (!$scope.readonly) {
        $scope.value = value;
      }
      return $scope.onHover({
        value: value
      });
    };
    $scope.onKeydown = function (evt) {
      if (/(37|38|39|40)/.test(evt.which)) {
        evt.preventDefault();
        evt.stopPropagation();
        return $scope.rate($scope.value + (evt.which === 38 || evt.which === 39 ? {
            1: -1
          } : void 0));
      }
    };
    this.render = function () {
      return $scope.value = ngModelCtrl.$viewValue;
    };
    return this;
  }).directive('rating', function () {
    return {
      restrict: 'EA',
      require: ['rating', 'ngModel'],
      scope: {
        readonly: '=?',
        onHover: '&',
        onLeave: '&'
      },
      controller: 'RatingController',
      template: '<ul class="rating" ng-mouseleave="reset()" ng-keydown="onKeydown($event)">' + '<li ng-repeat="r in range track by $index" ng-click="rate($index + 1)"><i class="icon" ng-class="$index < value && (r.stateOn || \'ion-ios-star\') || (r.stateOff || \'ion-ios-star-outline\')"></i></li>' + '</ul>',
      replace: true,
      link: function (scope, element, attrs, ctrls) {
        var ngModelCtrl, ratingCtrl;
        ratingCtrl = ctrls[0];
        ngModelCtrl = ctrls[1];
        if (ngModelCtrl) {
          return ratingCtrl.init(ngModelCtrl);
        }
      }
    };
  });

}).call(this);

