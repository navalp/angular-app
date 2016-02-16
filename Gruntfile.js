(function () {
    'use strict';

    module.exports = function (grunt) {
        var vendorFiles,
            cssFiles,
            appFiles;
        vendorFiles = ['vendor/jquery/dist/jquery.min.js',
            'vendor/bootstrap/dist/js/bootstrap.min.js',
            'vendor/angular/angular.min.js',
            'vendor/angular-ui-router/release/angular-ui-router.min.js',
            'vendor/metisMenu/dist/metisMenu.min.js'
        ];

        appFiles = [
            'app/modules/auth/AuthModule.js',
            'app/modules/auth/AuthRoute.js',
            'app/modules/auth/controllers/LoginController.js',
            'app/modules/auth/services/Session.js',
            'app/modules/auth/services/AuthService.js',
            'app/modules/common/CommonModule.js',
            'app/modules/common/controllers/MenuController.js',
            'app/modules/common/controllers/HeaderController.js',
            'app/modules/dashboard/DashboardModule.js',
            'app/modules/dashboard/DashboardRoute.js',
            'app/modules/dashboard/controllers/DashboardController.js',
            'app/modules/account/AccountModule.js',
            'app/modules/account/AccountRoute.js',
            'app/modules/account/controllers/ProfileController.js',
            'app/modules/account/controllers/UserController.js',
            'app.js',
            'config.js',
            'assets/js/main.js'
        ];
        cssFiles = [
            'vendor/bootstrap/dist/css/bootstrap.min.css',
            'assets/css/main.css',
            'assets/css/timeline.css',
            'vendor/metisMenu/dist/metisMenu.min.css'
        ];
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            concat: {
                vendor: {
                    src: vendorFiles,
                    dest: 'dist/js/vendor.js'
                },
                app: {
                    src: appFiles,
                    dest: 'dist/js/app.js'
                },
                css: {
                    src: cssFiles,
                    dest: 'dist/css/app.css'
                }
            },
            uglify: {
                app: {
                    files: {
                        'dist/js/vendor.min.js': 'dist/js/vendor.js',
                        'dist/js/app.min.js': 'dist/js/app.js'
                    }
                }
            },
            watch: {
                scripts: {
                    files: vendorFiles.concat(appFiles, ['Gruntfile.js']),
                    tasks: ['concat', 'uglify']
                }
            }


        });
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-cssmin');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.registerTask('default', ['concat','uglify']);
    }

})();

