(function () {
    'use strict'
    angular.module('client', [
        'ui.router',
        'ui.bootstrap',
        'client.site',
        'client.services',
        'client.crud'
    ])

    angular.module('client')
        .config(RouteConfig)
        .run(StateErrorHandler)

    StateErrorHandler.$inject = ['$rootScope', '$log']

    function StateErrorHandler($rootScope, $log) {
        $rootScope.$on('$stateChangeError', info => $log.log(info))
    }

    RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider','$locationProvider']

    function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/home')
        $locationProvider.html5Mode(true)
    }

})();