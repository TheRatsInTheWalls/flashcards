(function () {
  "use strict";

  angular.module('client.site', ['ui.router', 'ui.bootstrap'])
  angular.module("client.site").config(RouteConfig);

  RouteConfig.$inject = ["$stateProvider"]

  function RouteConfig($stateProvider) {
    $stateProvider
      .state('frame', {
        abstract: true,
        views: {
          root: {
            component: 'flashcardFrame'
          }
        }
      })
      .state('frame.home', {
        url: '/home',
        views: {
          content: {
            component: 'homePage'
          }
        }
      })

  }

})();