(function () {
    'use strict';

    function AuthService($http, Session) {

        /**
         *User login
         */
        this.login = function login(user) {
            /* $http.post('', user).then(function (response) {
             var result = response.data;
             if (response.success && response.data) {
             Session.setAccessToken(result.access_token || null);
             Session.setRole(result.role || '');
             Session.setUser(result || null);
             }
             },function(error){

             });*/
            Session.setAccessToken(user.access_token);
            Session.setRole(user.role);
            Session.setUser(user);
        }

        /**
         *User logout
         */
        this.logout = function logout() {
            Session.destroy();
        }

        /**
         *Check user authorized
         */
        this.isAuthorized = function isAuthorized(role) {
            if (angular.isArray(role) && role.indexOf(Session.getRole()) !== -1) {
                return true;
            } else {
                return false;
            }
        }

        /**
         *Check user authenticate
         */
        this.isAuthenticated = function isAuthenticated() {
            if (Session.getUser() && Session.getUser().access_token) {
                return true;
            } else {
                return false;
            }
        }

    }

    angular.module('AngularApp.Auth').service('AuthService', ['$http', 'Session', AuthService]);
})();

