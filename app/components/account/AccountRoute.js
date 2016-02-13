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
                    templateUrl: 'app/components/account/views/profile.html',
                    controller: 'ProfileController'
                }
            },
            data:{
                is_authorize:true,
                role:['user']
            }


        });

        $stateProvider.state('main.users', {
            url: '/users',
            views: {
                '@': {
                    templateUrl: 'app/components/account/views/userList.html',
                    controller: 'UserController',
                }
            },
            data:{
                is_authorize:true,
                role:['user']
            }


        });
    }]);

})();