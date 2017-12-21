(function () {
    'use strict'
    angular.module('client.crud').component('categoriesForm', {
        templateUrl: 'client/crud/categories/form/categories-form.html',
        controller: 'categoriesFormController as fc',
        bindings: {
            category: "<"
        }
    })

    angular.module('client.crud')
        .controller('categoriesFormController', CategoriesFormController)

    CategoriesFormController.$inject = ['$log', '$state', 'categoriesService']

    function CategoriesFormController($log, $state, categoriesService) {
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
            if (vm.category != null) {
                vm.editMode = true
                vm.formData = angular.copy(vm.category)
            }
        }

        function _submitForm() {
            if (vm.editMode) {
                categoriesService.update(vm.formData)
                    .then(x => {
                        $log.log(x)
                        $state.go('frame.categories.list')
                    })
                    .catch(err => $log.log(err))
            } else {
                categoriesService.create(vm.formData)
                    .then(x => {
                        $log.log(x)
                        $state.go('frame.categories.list')
                    })
                    .catch(err => $log.log(err))
            }
        }

        function _cancelForm() {
            $state.go('frame.categories.list')
        }

        function _resetForm() {
            if (vm.editMode) {
                vm.formData = angular.copy(vm.category)
            } else {
                vm.formData = null
            }
        }
    }

})();