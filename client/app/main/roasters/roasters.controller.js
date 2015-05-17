'use strict';

angular.module('coffeeApp')
  .controller('RoastersCtrl', function ($scope, $http, socket) {
    $scope.roasters = [{name:"The Best Roaster in Town"},{name:"Obviously the Best Roaster"},{name:"Roast Em Up!"}];
  });
