(function() {
  'use strict';

  angular.module('app').config(config);

  /** @ngInject */
  function config($locationProvider, $logProvider) {
    $locationProvider.html5Mode(true);
    $logProvider.debugEnabled(true);
  }
})();
