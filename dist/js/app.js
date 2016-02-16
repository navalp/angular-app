/**
 * Created by hp on 2/4/2016.
 */
(function () {
    'use strict';

    angular.module('AngularApp.Auth', ['ui.router']);

})();
/**
 * Created by hp on 2/4/2016.
 */
(function () {
    'use strict';

    angular.module('AngularApp.Auth').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('login', {
            url: '/login',
            controller: 'LoginController',
            templateUrl: 'app/modules/auth/views/login.html'
        }).state('main.unauthorize', {
            url: '/unauthorize',
            views: {
                '@': {
                    templateUrl: 'app/modules/auth/views/unauthorize.html'
                }
            },
            data:{
                isAuthRequired:true,
                roles:['admin','user']
            }

        });
    }]);
})();
/**
 * Created by hp on 2/4/2016.
 */
(function () {
    'use strict';

    angular.module('AngularApp.Auth').controller('LoginController', ['$scope', '$state', 'AuthService', function ($scope, $state, AuthService) {
        $scope.login = function login() {
            var user = {'email': 'test@gmail.com', access_token: '12345678', role: 'user'};
            AuthService.login(user);
            $state.go('main.dashboard');
        }

    }]);

})();
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


(function () {
    'use strict';
    angular.module('AngularApp.Common', ['ui.router']);
})();


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
/**
 * Created by hp on 2/4/2016.
 */
(function () {
    'use strict';

    angular.module('AngularApp.Dashboard', ['ui.router']);

})();
/**
 * Created by hp on 2/4/2016.
 */
(function () {
    'use strict';

    angular.module('AngularApp.Dashboard').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('main.dashboard', {
            url: '/dashboard',
            controller: 'DashboardController',
            views: {
                '@': {
                    templateUrl: 'app/modules/dashboard/views/dashboard.html'
                }
            },
            data:{
                isAuthRequired:true,
                roles:['admin']
            }


        });
    }]);

})();
/**
 * Created by hp on 2/4/2016.
 */
(function () {
    'use strict';

    angular.module('AngularApp.Dashboard').controller('DashboardController', ['$scope', '$state', function ($scope, $state) {

    }]);

})();
/**
 * Created by hp on 2/4/2016.
 */
(function () {
    'use strict';

    angular.module('AngularApp.Account', ['ui.router']);

})();
/**
 * Created by hp on 2/4/2016.
 */
(function () {
    'use strict';

    angular.module('AngularApp.Account').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('main.profile', {
            url: '/profile',
            views: {
                '@': {
                    templateUrl: 'app/modules/account/views/profile.html',
                    controller: 'ProfileController'
                }
            },
            data:{
                isAuthRequired:true,
                roles:['user']
            }


        });

        $stateProvider.state('main.users', {
            url: '/users',
            views: {
                '@': {
                    templateUrl: 'app/modules/account/views/userList.html',
                    controller: 'UserController',
                }
            },
            data:{
                isAuthRequired:true,
                roles:['admin','user']
            }


        });
    }]);

})();
/**
 * Created by hp on 2/4/2016.
 */
(function () {
    'use strict';

    angular.module('AngularApp.Account').controller('ProfileController', ['$scope', '$state', function ($scope, $state) {
        $scope.user = {name: '', username: '', email: ''};
    }]);

})();
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
(function () {
    'use strict';

    angular.module('AngularApp', ['ui.router', 'AngularApp.Common', 'AngularApp.Auth', 'AngularApp.Dashboard', 'AngularApp.Account']);
})();


(function () {
    'use strict';

    angular.module('AngularApp').config(['$stateProvider', '$urlRouterProvider', config]);

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('main', {
            url: '',
            views: {
                header: {
                    templateUrl: 'app/modules/common/views/header.html',
                    controller: 'HeaderController'
                },
                'navigation@main': {
                    templateUrl: 'app/modules/common/views/leftNavigation.html',
                    controller: 'MenuController'
                }
            }
        });
    }

    angular.module('AngularApp').run(['$rootScope', 'AuthService', '$state',function ($rootScope, AuthService, $state) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                if (toState.data && toState.data.isAuthRequired) {
                    if (!AuthService.isAuthenticated()) {
                        event.preventDefault();
                        $state.go('login');
                    } else if (!AuthService.isAuthorized(toState.data.roles)) {
                        event.preventDefault();
                        $state.go('main.unauthorize');
                    }
                }
            }
        );

    }]);

})();


$(function() {

    $('#side-menu').metisMenu();

});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        topOffset = 50;
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    var element = $('ul.nav a').filter(function() {
        return this.href == url || url.href.indexOf(this.href) == 0;
    }).addClass('active').parent().parent().addClass('in').parent();
    if (element.is('li')) {
        element.addClass('active');
    }
});
