module.exports = function(grunt) {
    //Add available site sections here for watch.
    var siteArray = ['react-try'];

    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),

        //Task options.

        //grunt-concurrent runs many tasks simultaneously.
        concurrent : {
            dev : {
                tasks : ['nodemon', 'watch'],
                options : {
                    logConcurrentOutput : true
                }
            }
        },
        //nodemon lifts the server.
        nodemon : {
            dev : {
                script : 'app.js'
            }
        },
        //exec runs custom console commands.
        exec : {
            browsify : {
                cmd : function (_dir) {
                    return 'browserify ./public/' + _dir + '/' + _dir + '.js --debug | exorcist ./public/' + _dir + '/bundle.map.js > ./public/' + _dir + '/bundle.js'
                } 
            }
        },
        //Watches js files by the names in siteArray.
        watch : (function(){
            var obj = {};
            for(var i = 0; i < siteArray.length; i++){
                var val = siteArray[i].toString();
                obj[val] = {
                    files : './public/' + val + '/' + val + '.js',
                    tasks : ['exec:browsify:' + val]
                };
            }
            return obj;
        })()
    });

    //Task plugin load.
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent')
    //Task definition: Task name + plugins to run.
    grunt.registerTask('server', ['concurrent:dev']);
}