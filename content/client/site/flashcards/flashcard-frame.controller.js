(function () {
    'use strict'

angular.module('client.site').component('flashcardFrame', {
    templateUrl: 'client/site/flashcards/flashcard-frame.html',
    controller: 'flashFrameController as ffc'
})

    angular.module('client.site')
        .controller('flashFrameController', FlashFrameController)

        FlashFrameController.$inject = ['$state']

    function FlashFrameController($state) {
        const vm = this
       
    }
})();