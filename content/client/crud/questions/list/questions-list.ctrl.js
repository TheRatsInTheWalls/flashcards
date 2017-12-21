(function () {
    'use strict'

    angular.module('client.crud').component('questionsList', {
        templateUrl: 'client/crud/questions/list/questions-list.html',
        controller: 'questionsListController as lc',
        bindings: {
            questions: '<'
        }
    })

    angular.module('client.crud').controller('questionsListController', QuestionsListController)

    QuestionsListController.$inject = ['$log', '$state', 'questionsService']

    function QuestionsListController($log, $state, questionsService) {
        const vm = this
        vm.$onInit = _init
        vm.goEdit = _goEdit
        vm.delete = _delete

        function _init() {
            $log.log(vm.questions)
        }

        function _goEdit(id) {
            $state.go('frame.questions.edit', { id: id })
        }

        function _delete(id){
            questionsService.delete(id)
            $state.go('frame.questions.list', null, { reload: true })
        }
    }

})();