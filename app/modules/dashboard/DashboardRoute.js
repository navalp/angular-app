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
                    templateUrl: 'app/modules/dashboard/views/dashboard.html'
                }
            },
            data:{
                isAuthRequired:true,
                roles:['admin']
            }


        });
    }]);

})();