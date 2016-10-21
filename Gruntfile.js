module.exports = function(grunt) {
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),

        //Task options.

        nodemon : {
            dev : {
                script : 'app.js'
            }
        }
    });

    //Task plugin load.
    grunt.loadNpmTasks('grunt-nodemon');
    //Task definition: Task name + plugins to run.
    grunt.registerTask('server', ['nodemon']);
}