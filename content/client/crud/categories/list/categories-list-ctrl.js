(function () {
    'use strict'

    angular.module('client.crud').component('categoriesList', {
        templateUrl: 'client/crud/categories/list/categories-list.html',
        controller: 'categoriesListController as lc',
        bindings: {
            categories: '<'
        }
    })

    angular.module('client.crud').controller('categoriesListController', CategoriesListController)

    CategoriesListController.$inject = ['$log', '$state', 'categoriesService']

    function CategoriesListController($log, $state, categoriesService) {
        const vm = this
        vm.$onInit = _init
        vm.goEdit = _goEdit
        vm.delete = _delete

        function _init() {
            $log.log(vm.categories)
        }

        function _goEdit(id) {
            $state.go('frame.categories.edit', { id: id })
        }

        function _delete(id){
            categoriesService.delete(id)
            $state.go('frame.categories.list', null, { reload: true })
        }
    }

})();