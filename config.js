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
                    templateUrl: 'app/components/common/views/leftNavigation.html',
                    controller: 'MenuController'
                }
            }
        });


    }
})();

