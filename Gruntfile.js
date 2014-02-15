

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        //pkg: grunt.file.readJSON('package.json'),
        less : {
            options: {
                paths: ['less/']
            },
            development :{
                // no need for files, the config below should work
                expand: true,
                cwd:    "less/",
                src:    ['*.less', '!var.less'],
                dest : 'css/',
                ext:    ".css"
            }
        },
        /* Serveur pour le livereload */
        connect: {
            livereload: {
                options: {
                    port: 9001,
                    // Change hostname to '0.0.0.0' to access
                    // the server from outside (else, put localhost)
                    hostname: '0.0.0.0',
                    base: './',
                    open: true,
                    livereload: true
                }
            }
        },
        watch: {
            options : {
                livereload:true
            },
            less:{
                files: ['less/**/*.less'],
                tasks: ['less:development']
            }

        }
    });



    grunt.registerTask('default', ['connect:livereload','watch']);

    //grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

};