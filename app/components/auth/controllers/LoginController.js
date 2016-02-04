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