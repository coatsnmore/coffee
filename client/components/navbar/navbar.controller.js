'use strict';

angular.module('coffeeApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },{
      'title': 'Roasters',
      'link': '/roasters'
     },{
       'title': 'Join',
       'link': '/join'
     }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });