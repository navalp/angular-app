(function () {
    'use strict';

    function Session() {

        /**
         * Initialize default value
         */
        this._user = localStorage.getItem('session.user') ? JSON.parse(localStorage.getItem('session.user')) : null;
        this._role = localStorage.getItem('session.user.role');
        this._accessToken = localStorage.getItem('session.access_token');

        /**
         *Set user to session
         * @param {Object}
         */
        this.setUser = function setUser(user) {
            this._user = user;
            localStorage.setItem('session.user', JSON.stringify(user));
        }

        /**
         *Set user access Token to session
         * @param {String}
         */
        this.setAccessToken = function setAccessToken(access_token) {
            this._accessToken = access_token;
            localStorage.setItem('session.access_token', access_token);
        }

        /**
         *Set user role to session
         * @param {String}
         */
        this.setRole = function setRole(role) {
            this._role = role;
            localStorage.setItem('session.user.role', role);
        }

        /**
         *Get user
         * @return {Object}
         */
        this.getUser = function getUser() {
            return this._user;
        }

        /**
         *get user access token
         * @return {String}
         */
        this.getAccessToken = function getAccessToken() {
            return this._accessToken;
        }

        /**
         *Get user role
         * @return {String}
         */
        this.getRole = function getRole() {
            return this._role;
        }

        /**
         *Destroy user session
         */
        this.destroy = function destroy() {
            this.setAccessToken(null);
            this.setUser(null);
            this.setRole(null);
        }

    }

    angular.module('AngularApp.Auth').service('Session', [Session]);
})();

