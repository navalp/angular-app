/**
 * Created by hp on 2/4/2016.
 */
(function () {
    'use strict';

    angular.module('AngularApp.Account').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('main.profile', {
            url: '/profile',
            views: {
                '@': {
                    templateUrl: 'app/modules/account/views/profile.html',
                    controller: 'ProfileController'
                },
                'slider@': {
                      template: 'slider',              
                },
            },
            data:{
                isAuthRequired:true,
                roles:['user']
            }


        });

        $stateProvider.state('main.users', {
            url: '/users',
            views: {
                '@': {
                    templateUrl: 'app/modules/account/views/userList.html',
                    controller: 'UserController',
                }
            },
            data:{
                isAuthRequired:true,
                roles:['admin','user']
            }


        });
    }]);

})();