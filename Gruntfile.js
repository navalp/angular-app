(function () {
    'use strict';

    module.exports = function (grunt) {
        var vendorFiles,
            appFiles;
        vendorFiles = [];
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            vendorFiles: [],
            
        });
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-cssmin');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.registerTask('default', []);
    }

})();

