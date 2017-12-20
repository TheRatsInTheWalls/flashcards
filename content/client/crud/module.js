(function () {
    'use strict'

    angular.module('client.crud', ['ui.router', 'client.services', 'ui.bootstrap'])
    angular.module('client.crud').config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('frame.categories', {
                //abstract: true,
                url: "/categories",
                views: {
                    content: {
                        templateUrl: '/client/crud/categories/categories.index.html'
                    }
                }
            })
            .state('frame.questions', {
                //abstract: true,
                url: "/questions",
                views: {
                    content: {
                        templateUrl: '/client/crud/questions/questions.index.html'
                    }
                }
            })
            .state('frame.review', {
                //abstract: true,
                url: "/review",
                views: {
                    content: {
                        templateUrl: '/client/crud/review/review.index.html'
                    }
                }
            })


    }

})();