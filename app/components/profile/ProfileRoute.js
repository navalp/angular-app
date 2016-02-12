/**
 * Created by hp on 2/4/2016.
 */
(function () {
    'use strict';

    angular.module('AngularApp.Profile').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('main.profile', {
            url: '/profile',
            controller: 'ProfileController',
            views: {
                '@': {
                    templateUrl: 'app/components/profile/views/profile.html'
                }
            },
            data:{
                is_authorize:true,
                role:['user']
            }


        });
    }]);

})();