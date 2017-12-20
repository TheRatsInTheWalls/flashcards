'use strict';

(function () {
    'use strict';

    angular.module('client', ['ui.router', 'ui.bootstrap', 'client.site', 'client.services', 'client.crud']);

    angular.module('client').config(RouteConfig).run(StateErrorHandler);

    StateErrorHandler.$inject = ['$rootScope', '$log'];

    function StateErrorHandler($rootScope, $log) {
        $rootScope.$on('$stateChangeError', function (info) {
            return $log.log(info);
        });
    }

    RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/home');
        $locationProvider.html5Mode(true);
    }
})();
'use strict';

(function () {
  'use strict';

  angular.module('client.crud', ['ui.router', 'client.services', 'ui-bootstrap']);
  angular.module('client.crud').config(RouteConfig);

  RouteConfig.$inject = ['$StateProvider'];

  function RouteConfig($stateProvider) {}
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.services', []);
})();
'use strict';

(function () {
  "use strict";

  angular.module('client.site', ['ui.router', 'ui.bootstrap']);
  angular.module("client.site").config(RouteConfig);

  RouteConfig.$inject = ["$stateProvider"];

  function RouteConfig($stateProvider) {
    $stateProvider.state('frame', {
      abstract: true,
      views: {
        root: {
          component: 'flashcardFrame'
        }
      }
    }).state('frame.home', {
      url: '/home',
      views: {
        content: {
          component: 'homePage'
        }
      }
    });
  }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.services').factory('categoriesService', CategoriesServiceFactory);

    CategoriesServiceFactory.$inject = ['$http', '$q'];

    function CategoriesServiceFactory($http, $q) {
        return {
            readAll: _readAll,
            readById: _readById,
            create: _create,
            update: _update,
            delete: _delete
        };
    }

    function _readAll(id) {
        $http.get('/api/categories', { cache: false }).then().catch(onError);
    }

    function _readById() {
        $http.get('/api/categories').then().catch(onError);
    }

    function _create() {
        $http.put('/api/categories').then().catch(onError);
    }

    function _update() {
        $http.post('/api/categories').then().catch(onError);
    }

    function _delete() {
        $http.delete('/api/categories').then().catch(onError);
    }

    function onError(error) {
        console.log(error.data);
        return $q.reject(error.data);
    }
});
'use strict';

(function () {
    'use strict';

    angular.module('client.site').component('homePage', {
        templateUrl: 'client/site/home/home.html',
        controller: 'homeController as hc'
    });

    angular.module('client.site').controller('homeController', HomeController);

    HomeController.$inject = ['$state'];

    function HomeController($state) {
        var vm = this;
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.site').component('flashcardFrame', {
        templateUrl: 'client/site/page-frame/frame.html',
        controller: 'frameController as ffc'
    });

    angular.module('client.site').controller('frameController', FrameController);

    FrameController.$inject = ['$state'];

    function FrameController($state) {
        var vm = this;
    }
})();