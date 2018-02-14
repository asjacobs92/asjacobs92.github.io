(function() {
  'use strict';

  angular.module('app').controller('HomeController', HomeController);

  function HomeController($log) {
    let vm = this;

    vm.name = 'Arthur Selle Jacobs';

    initalize();

    function initalize() {
      $log.info('hey');
    }
  }
})();
