(function () {
    'use strict'

angular.module('client.site').component('flashcardFrame', {
    templateUrl: 'client/site/page-frame/frame.html',
    controller: 'frameController as ffc'
})

    angular.module('client.site')
        .controller('frameController', FrameController)

        FrameController.$inject = ['$state']

    function FrameController($state) {
        const vm = this
       
    }
})();