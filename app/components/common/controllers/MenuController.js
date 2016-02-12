/**
 * Created by hp on 2/4/2016.
 */
(function () {
    'use strict';

    angular.module('AngularApp.Common').controller('MenuController', ['$scope', function ($scope) {
        $scope.menu = [
            {label: 'Dashboard', 'state': 'main.dashboard', 'class': '', icon: '', id: 'dashboard_link', has_child: false},
            {label: 'Profile', 'state': 'main.profile', 'class': '', icon: '', id: 'dashboard_link', has_child: false},
        ]

    }]);

})();