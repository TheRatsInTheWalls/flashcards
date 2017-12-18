'use strict';

(function () {
    'use strict';

    angular.module('client', ['ui.router', 'ui.bootstrap', 'client.layout', 'client.site']);

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