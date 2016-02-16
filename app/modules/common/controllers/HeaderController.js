/**
 * Created by hp on 2/4/2016.
 */
(function () {
    'use strict';

    angular.module('AngularApp.Common').controller('HeaderController', ['$scope', 'Session', '$state', function ($scope, Session, $state) {

        $scope.logout = function () {
            Session.destroy();
            $state.go('login');
        }

    }]);

})();