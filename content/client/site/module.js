(function () {
    "use strict";
  
    angular.module('client.site', ['ui.router', 'ui.bootstrap'])
    angular.module("client.site").config(RouteConfig);
  
    RouteConfig.$inject = ["$stateProvider"]
  
    function RouteConfig($stateProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          views: {
            root: {
              component: 'homePage'
            }
          }
        })
    }
  
  })();