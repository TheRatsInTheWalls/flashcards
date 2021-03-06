(function () {
    'use strict'

    angular
        .module('client.services')
        .factory('categoriesService', CategoriesServiceFactory)

    CategoriesServiceFactory.$inject = ['$http', '$q']

    function CategoriesServiceFactory($http, $q) {
        return {
            readAll: _readAll,
            readById: _readById,
            create: _create,
            update: _update,
            delete: _delete
        }


        function _readAll() {
            return $http.get(`/api/categories`)
                .then(result => result.data)
                .catch(onError)
        }

        function _readById(id) {
            return $http.get(`/api/categories/${id}`)
                .then(result => result.data)
                .catch(onError)
        }

        function _create(catOjbect) {
            return $http.post(`/api/categories`, catOjbect)
                //.then()
                .catch(onError)
        }

        function _update(catOjbect) {
            return $http.put(`/api/categories/${catOjbect._id}`, catOjbect)
                //.then()
                .catch(onError)
        }

        function _delete(id) {
            return $http.delete(`/api/categories/${id}`)
                //.then()
                .catch(onError)
        }

        function onError(error) {
            console.log(error.data)
            return $q.reject(error.data)
        }
    }



})();