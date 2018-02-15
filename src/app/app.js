(function() {
  'use strict';

  angular
    .module('app', ['ui.router', 'duScroll'])
    .config(routes)
    .config(config)
    .run(run);

  function config($locationProvider, $logProvider) {
    $locationProvider.html5Mode(true);
    $logProvider.debugEnabled(true);
  }

  function routes($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/',
      component: 'home',
    });

    $urlRouterProvider.otherwise('/');
  }

  function run($log, $http, $rootScope) {
    $rootScope.keys = Object.keys;
    $http
      .get('/assets/data/resume.json')
      .then((data) => ($rootScope.resume = data.data))
      .catch(() => $log.error('Failed to load resume.'));
  }
})();
