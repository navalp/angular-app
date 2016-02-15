(function () {
    'use strict';

    angular.module('AngularApp').config(['$stateProvider', '$urlRouterProvider', config]);

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('main', {
            url: '',
            views: {
                header: {
                    templateUrl: 'app/modules/common/views/header.html'

                },
                'navigation@main': {
                    templateUrl: 'app/modules/common/views/leftNavigation.html',
                    controller: 'MenuController'
                }
            }
        });
    }

    angular.module('AngularApp').run(['$rootScope', 'AuthService', '$state',function ($rootScope, AuthService, $state) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                if (toState.data && toState.data.isAuthRequired) {
                    if (!AuthService.isAuthenticated()) {
                        event.preventDefault();
                        $state.go('login');
                    } else if (!AuthService.isAuthorized(toState.data.roles)) {
                        event.preventDefault();
                        $state.go('main.unauthorize');
                    }
                }
            }
        );

    }]);

})();

