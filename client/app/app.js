'use strict';

angular.module('coffeeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

// Now set up the states
  $stateProvider
    .state('roasters', {
      url: "/roasters",
      templateUrl: "app/roasters/roasters.html",
      controller: "RoastersCtrl"
    })

    .state('join', {
      url: "/join",
      templateUrl: "app/join/join.html",
      controller: function($scope) {
        $scope.things = ["A", "Set", "Of", "Things"];
      }
    });

    $locationProvider.html5Mode(true);
  });
