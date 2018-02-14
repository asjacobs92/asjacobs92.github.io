(function() {
  'use strict';

  angular.module('app').config(routes);

  /** @ngInject */
  function routes($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/',
      component: 'home',
    });

    $urlRouterProvider.otherwise('/');
  }
})();
