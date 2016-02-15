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
        }).state('unauthorize', {
            url: '/unauthorize',
            templateUrl: 'app/modules/auth/views/unauthorize.html'
        });
    }]);
})();