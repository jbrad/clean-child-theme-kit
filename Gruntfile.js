module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            child_theme: {
                options: {
                    paths: ["css/less"],
                    yuicompress: false
                },
                files: {
                    "style.css": "css/less/style.less"
                }
            }
        },

        watch: {
            child_theme_less: {
                files: [
                    'css/less/*.less'
                ],
                tasks: ['less']
            }
        },

        compress: {
            child_theme: {
                options: {
                    archive: '../<%= pkg.name %>.zip'
                },
                files: [
                    {src: [
                        '**',
                        '!**css/less/**',
                        '!Gruntfile.js',
                        '!package.json',
                        '!bower.json',
                        '!codekit-config.json',
                        '!*.md',
                        '!license.txt',
                        '!**/node_modules/**'
                    ],
                        dest: '<%= pkg.name %>',
                        filter: 'isFile'
                    }
                ]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-compress');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less', 'compress']);

};