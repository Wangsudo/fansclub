module.exports = function (grunt) {
    grunt.initConfig({
        //读取package.json文件
        pkg: grunt.file.readJSON('package.json'),
        //concat用来合并js文件
        concat: {
            option: {
                //定义一个用于插入合并输出文件之间的字符
                seqarator: ';'
            },
            dist: {
                //将要被合并的文件
                src: ['app/src/**/*.js'],
                //合并后的JS文件的存放位置
                dest: 'app/dist/<%= pkg.name %>.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('test',['concat']);
};

grunt.registerTask('test', ['concat','uglify','jshint','watch']);