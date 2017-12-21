(function () {
    'use strict'

    angular.module('client.crud', ['client.services', 'ui.router', 'ui.bootstrap'])
    angular.module('client.crud').config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            //--------------------------------------categories------------------------------------------------------------//
            .state('frame.categories', {
                abstract: true,
                url: "/categories",
                views: {
                    content: {
                        templateUrl: '/client/crud/categories/categories.index.html'
                    }
                }
            })
            .state('frame.categories.list', {
                url: "/categories",
                views: {
                    categories: {
                        component: 'categoriesList'
                    }
                },
                resolve: {
                    categories: _getAllCategories
                }
            })
            .state('frame.categories.create', {
                url: "/create",
                views: {
                    categories: {
                        component: 'categoriesForm'
                    }
                }
            })
            .state('frame.categories.edit', {
                url: "/edit/:id",
                views: {
                    categories: {
                        component: 'categoriesForm'
                    }
                },
                resolve: {
                    category: _getCategory
                }
            })
            //--------------------------------------questions------------------------------------------------------------//
            .state('frame.questions', {
                abstract: true,
                views: {
                    content: {
                        templateUrl: '/client/crud/questions/questions.index.html'
                    }
                }
            })
            .state('frame.questions.list', {
                url: "/questions",
                views: {
                    questions: {
                        component: 'questionsList'
                    }
                },
                resolve: {
                    questions: _getAllQuestions
                }
            })
            .state('frame.questions.create', {
                url: "/create",
                views: {
                    questions: {
                        component: 'questionsForm'
                    }
                },
                resolve: {
                    categories: _getAllCategories
                }
            })
            .state('frame.questions.edit', {
                url: "/edit/:id",
                views: {
                    questions: {
                        component: 'questionsForm'
                    }
                },
                resolve: {
                    question: _getQuestion,
                    categories: _getAllCategories
                }
            })
            //--------------------------------------review------------------------------------------------------------//
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

    _getAllCategories.$inject = ['categoriesService']
    function _getAllCategories(categoriesService) {
        return categoriesService.readAll()
    }

    _getAllQuestions.$inject = ['questionsService']
    function _getAllQuestions(questionsService) {
        return questionsService.readAll()
    }

    _getCategory.$inject = ['categoriesService', '$stateParams']
    function _getCategory(categoriesService, $stateParams) {
        return categoriesService.readById($stateParams.id)
    }

    _getQuestion.$inject = ['questionsService', '$stateParams']
    function _getQuestion(questionsService, $stateParams) {
        return questionsService.readById($stateParams.id)
    }

})();