/**
 * Created by hp on 2/4/2016.
 */
(function () {
    'use strict';

    angular.module('AngularApp.Auth', ['ui.router']);

})();
/**
 * Created by hp on 2/4/2016.
 */
(function () {
    'use strict';

    angular.module('AngularApp.Auth').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('login', {
            url: '/login',
            controller: 'LoginController',
            templateUrl: 'app/components/auth/views/login.html'
        });
    }]);

})();
/**
 * Created by hp on 2/4/2016.
 */
(function () {
    'use strict';

    angular.module('AngularApp.Auth').controller('LoginController', ['$scope', '$state', function ($scope, $state) {
        $scope.login = function login() {
            $state.go('main.dashboard');
        }

    }]);

})();
(function () {
    'use strict';
    angular.module('AugularApp.common', ['ui.router']);
})();


/**
 * Created by hp on 2/4/2016.
 */
(function () {
    'use strict';

    angular.module('AngularApp.Dashboard', ['ui.router']);

})();
/**
 * Created by hp on 2/4/2016.
 */
(function () {
    'use strict';

    angular.module('AngularApp.Dashboard').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('main.dashboard', {
            url: '/dashboard',
            controller: 'DashboardController',
            views: {
                '@': {
                    templateUrl: 'app/components/dashboard/views/dashboard.html'
                }
            }


        });
    }]);

})();
/**
 * Created by hp on 2/4/2016.
 */
(function () {
    'use strict';

    angular.module('AngularApp.Dashboard').controller('DashboardController', ['$scope', '$state', function ($scope, $state) {

    }]);

})();
(function () {
    'use strict';

    angular.module('AngularApp', ['ui.router', 'AugularApp.common', 'AngularApp.Auth', 'AngularApp.Dashboard']);
})();


(function () {
    'use strict';

    angular.module('AngularApp').config(['$stateProvider', '$urlRouterProvider', config]);

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('main', {
            url: '',
            views: {
                header: {
                    templateUrl: 'app/components/common/views/header.html'

                },
                'navigation@main': {
                    templateUrl: 'app/components/common/views/leftNavigation.html'
                }
            }
        });


    }
})();

