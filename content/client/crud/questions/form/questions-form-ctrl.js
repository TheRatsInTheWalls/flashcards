(function () {
    'use strict'
    angular.module('client.crud').component('questionsForm', {
        templateUrl: 'client/crud/questions/form/questions-form.html',
        controller: 'questionsFormController as fc',
        bindings: {
            question: "<",
            categories: "<"
        }
    })

    angular.module('client.crud')
        .controller('questionsFormController', QuestionsFormController)

    QuestionsFormController.$inject = ['$log', "$state", 'questionsService']

    function QuestionsFormController($log, $state, questionsService) {
        const vm = this
        vm.$onInit = _init
        vm.submitForm = _submitForm
        vm.cancelForm = _cancelForm
        vm.resetForm = _resetForm

        vm.editMode = false
        vm.formData = null

        function _init() {
            _checkEditMode()
        }

        function _checkEditMode() {
            if (vm.question != null) {
                vm.editMode = true
                vm.formData = angular.copy(vm.question)
            }
        }

        function _submitForm() {
            if (vm.editMode) {
                questionsService.update(vm.formData)
                .then(x => {
                    $log.log(x)
                    $state.go('frame.questions.list')
                })
                    .catch(err => $log.log(err))
            } else {
                questionsService.create(vm.formData)
                    .then(x => {
                        $log.log(x)
                        $state.go('frame.questions.list')
                    })
                    .catch(err => $log.log(err))
            }
            
        }

        function _cancelForm() {
            $state.go('frame.questions.list')
        }

        function _resetForm() {
            if (vm.editMode) {
                vm.formData = angular.copy(vm.question)
            } else {
                vm.formData = null
            }
        }
    }

})();