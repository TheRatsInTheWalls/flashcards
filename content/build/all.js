'use strict';

(function () {
    'use strict';

    angular.module('client', ['ui.router', 'ui.bootstrap', 'client.site']);

    angular.module('client').config(RouteConfig).run(StateErrorHandler);

    StateErrorHandler.$inject = ['$rootScope', '$log'];

    function StateErrorHandler($rootScope, $log) {
        $rootScope.$on('$stateChangeError', function (info) {
            return $log.log(info);
        });
    }

    RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/home');
        $locationProvider.html5Mode(true);
    }
})();
'use strict';

(function () {
  "use strict";

  angular.module('client.site', ['ui.router', 'ui.bootstrap']);
  angular.module("client.site").config(RouteConfig);

  RouteConfig.$inject = ["$stateProvider"];

  function RouteConfig($stateProvider) {
    $stateProvider.state('home', {
      url: '/home',
      views: {
        root: {
          component: 'homePage'
        }
      }
    });
  }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.site').component('homePage', {
        templateUrl: 'client/site/home/home.html',
        controller: 'homeController as hc'
    });

    angular.module('client.site').controller('homeController', HomeController);

    HomeController.$inject = ['$state'];

    function HomeController($state) {
        var vm = this;
    }
})();