(function () {
    'use strict'

    angular
        .module('client.services')
        .factory('questionsService', QuestionsServiceFactory)

    QuestionsServiceFactory.$inject = ['$http', '$q']

    function QuestionsServiceFactory($http, $q) {
        return {
            readAll: _readAll,
            readById: _readById,
            create: _create,
            update: _update,
            delete: _delete
        }

        function _readAll() {
            return $http.get(`/api/questions`)
                .then(result => result.data)
                .catch(onError)
        }

        function _readById(id) {
            return $http.get(`/api/questions/${id}`)
                .then(result => result.data)
                .catch(onError)
        }

        function _create(quesObject) {
            return $http.post(`/api/questions`, quesObject)
                // .then()
                .catch(onError)
        }

        function _update(quesObject) {
            return $http.put(`/api/questions/${quesObject._id}`, quesObject)
                // .then()
                .catch(onError)
        }

        function _delete(id) {
            return $http.delete(`/api/questions/${id}`)
                //.then()
                .catch(onError)
        }

        function onError(error) {
            console.log(error.data)
            return $q.reject(error.data)
        }
    }



})();