(function () {
    'use strict'

    // angular.module('client.services')
    //     .factory('categoriesService', CategoriesServiceFactory)

    CategoriesServiceFactory.$inject = ['$http', '$q']

    function CategoriesServiceFactory($http, $q) {
        return {
            readAll: _readAll,
            readById: _readById,
            create: _create,
            update: _update,
            delete: _delete
        }
    }

    function _readAll(id) {
        $http.get(`/api/categories`, { cache: false })
            .then()
            .catch(onError)
    }

    function _readById() {
        $http.get(`/api/categories`)
            .then()
            .catch(onError)
    }

    function _create() {
        $http.put(`/api/categories`)
            .then()
            .catch(onError)
    }

    function _update() {
        $http.post(`/api/categories`)
            .then()
            .catch(onError)
    }

    function _delete() {
        $http.delete(`/api/categories`)
            .then()
            .catch(onError)
    }


    function onError(error) {
        console.log(error.data)
        return $q.reject(error.data)
    }

})