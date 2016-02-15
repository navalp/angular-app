/**
 * Created by hp on 2/4/2016.
 */
(function () {
    'use strict';

    angular.module('AngularApp.Auth').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('login', {
            url: '/login',
            controller: 'LoginController',
            templateUrl: 'app/modules/auth/views/login.html'
        }).state('main.unauthorize', {
            url: '/unauthorize',
            views: {
                '@': {
                    templateUrl: 'app/modules/auth/views/unauthorize.html'
                }
            }

        });
    }]);
})();