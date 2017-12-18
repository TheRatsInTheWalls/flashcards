(function () {
    'use strict'

angular.module('client.site').component('homePage', {
    templateUrl: 'client/site/home/home.html',
    controller: 'homeController as hc'
})

    angular.module('client.site')
        .controller('homeController', HomeController)

        HomeController.$inject = ['$state']

    function HomeController($state) {
        const vm = this
       
    }
})()