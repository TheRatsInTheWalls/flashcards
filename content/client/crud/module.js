(function () {
'use strict'

angular.module('client.crud', ['ui.router', 'client.services','ui.bootstrap'])
angular.module('client.crud').config(RouteConfig)

RouteConfig.$inject = ['$stateProvider']

function RouteConfig($stateProvider){}

})();