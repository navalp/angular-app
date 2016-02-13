/**
 * Created by hp on 2/4/2016.
 */
(function () {
    'use strict';

    angular.module('AngularApp.Account').controller('UserController', ['$scope', '$state', function ($scope, $state) {
        $scope.users = [
            {id: 1, name: 'user1', username: 'username1', email: 'user1@domain.com'},
            {id: 2, name: 'user2', username: 'username2', email: 'user2@domain.com'},
            {id: 3, name: 'user3', username: 'username3', email: 'user3@domain.com'}
        ];
    }]);

})();