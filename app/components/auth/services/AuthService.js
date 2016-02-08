(function () {
    'use strict';

    function AuthService($http, Session) {

        /**
         *User login
         */
        this.login = function login(user) {
            $http.post('', user).then(function (response) {
                var result = response.data;
                if (response.success && response.data) {
                    Session.setAccessToken(result.access_token || null);
                    Session.setRole(result.role || '');
                    Session.setUser(result || null);
                }
            }).catch(function () {
            });
        }

        /**
         *User logout
         */
        this.logout = function logout() {
            Session.destroy();
        }

    }

    angular.module('AugularApp.auth').service('AuthService', ['$http', 'Session', AuthService]);
})();

