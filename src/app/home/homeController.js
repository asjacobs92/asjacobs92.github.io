(function() {
  'use strict';

  angular.module('app').controller('HomeController', HomeController);

  function HomeController($log, $document, $location) {
    let vm = this;

    vm.scrollTo = scrollTo;

    function scrollTo(id) {
      $document.scrollToElementAnimated(angular.element(document.getElementById(id)));
    }
  }
})();
