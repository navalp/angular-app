/**
 * Created by hp on 2/4/2016.
 */
(function () {
    'use strict';

    angular.module('AngularApp.Auth').controller('LoginController', ['$scope', '$state', 'AuthService', function ($scope, $state, AuthService) {
        $scope.login = function login() {
            var user = {'email': 'test@gmail.com', access_token: '12345678', role: 'admin'};
            AuthService.login(user);
            $state.go('main.dashboard');
        }

    }]);

})();