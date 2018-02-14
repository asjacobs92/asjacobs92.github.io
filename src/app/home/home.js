(function() {
  'use strict';

  angular.module('app').directive('home', home);

  function home() {
    return {
      controller: 'HomeController',
      controllerAs: 'hc',
      templateUrl: 'app/home/home.html',
    };
  }
})();
