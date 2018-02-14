(function() {
  'use strict';

  angular.module('app').run(run);

  /** @ngInject */
  function run($log, $http, $rootScope) {
    $rootScope.keys = Object.keys;
    $http
      .get('/assets/data/resume.json')
      .then((data) => ($rootScope.resume = data.data))
      .catch(() => $log.error('Failed to load resume.'));
  }
})();
