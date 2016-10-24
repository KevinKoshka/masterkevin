module.exports = function(grunt) {

    var siteArray = ['react-try'];

    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),

        //Task options.

        nodemon : {
            dev : {
                script : 'app.js'
            }
        },

        exec : {
            browsify : {
                cmd : function (_dir) {
                    return 'browserify ./public/' + _dir + '/' + _dir + '.js --debug | exorcist ./public/' + _dir + '/bundle.map.js > ./public/' + _dir + '/bundle.js'
                } 
            }
        },

        watch : {
            'react-try' : {
                files : ['./public/react-try/react-try.js'],
                tasks : ['exec:browsify:react-try']
            }
        } 
        
        /*(function(){
            var obj = {};
            for(var i = 0; i < siteArray.length; i++){
                var val = siteArray[i].toString();
                obj[val] = {
                    files : './public/' + val + '/' + val + '.js',
                    tasks : ['exec:browsify:' + val]
                };
            }
            console.log(obj);
        })()*/
    });

    //Task plugin load.
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //Task definition: Task name + plugins to run.
    grunt.registerTask('server', ['nodemon', 'watch']);
}