(function () {
    'use strict';

    module.exports = function (grunt) {
        var vendorFiles,
            cssFiles,
            appFiles;
        vendorFiles = ['vendor/jquery/dist/jquery.min.js', 'vendor/bootstrap/dist/js/bootstrap.min.js', 'vendor/angular/angular.min.js',
            'vendor/angular-ui-router/release/angular-ui-router.min.js',
            'vendor/metisMenu/dist/metisMenu.min.js'
        ];

        appFiles = [
            'app/components/auth/AuthModule.js', 'app/components/auth/AuthRoute.js', 'app/components/auth/controllers/LoginController.js',
            'app/components/common/commonModule.js', 'app/components/dashboard/DashboardModule.js', 'app/components/dashboard/DashboardRoute.js',
            'app/components/dashboard/controllers/DashboardController.js', 'app.js', 'config.js'
        ];
        cssFiles = [
            'vendor/bootstrap/dist/css/bootstrap.min.css', 'assets/css/main.css', 'assets/css/timeline.css', 'vendor/metisMenu/dist/metisMenu.min.css'
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
                        'dist/js/vendor.min.js': vendorFiles,
                        'dist/js/app.min.js': appFiles
                    }
                }
            },
            watch: {
                scripts: {
                    files: vendorFiles.concat(appFiles),
                    tasks: ['concat', 'uglify']
                }
            }


        });
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-cssmin');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.registerTask('default', ['watch']);
    }

})();

