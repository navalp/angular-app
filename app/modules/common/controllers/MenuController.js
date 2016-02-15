/**
 * Created by hp on 2/4/2016.
 */
(function () {
    'use strict';

    angular.module('AngularApp.Common').controller('MenuController', ['$scope', 'Session', function ($scope, Session) {
        var menu = {
            admin: [
                {
                    label: 'Dashboard',
                    'state': 'main.dashboard',
                    'class': '',
                    icon: '',
                    id: 'dashboard_link',
                    has_child: false
                },
                {label: 'Users', 'state': 'main.users', 'class': '', icon: '', id: 'users_link', has_child: false},
            ],
            user: [
                {
                    label: 'Dashboard',
                    'state': 'main.dashboard',
                    'class': '',
                    icon: '',
                    id: 'dashboard_link',
                    has_child: false
                },
                {
                    label: 'Profile',
                    'state': 'main.profile',
                    'class': '',
                    icon: '',
                    id: 'profile_link',
                    has_child: false
                }
            ]
        };

        switch (Session.getRole()) {
            case 'admin':
                $scope.menu = menu.admin;
                break;
            case 'user':
                $scope.menu = menu.user;
                break;
            default:
                $scope.menu = [];
        }
    }]);

})();