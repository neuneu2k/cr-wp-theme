"use strict";
module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    pkg: pkg,

    sass: {
      dev: {
        src: 'sass/main.scss',
        dest: 'css/main.css'
      },
      dist: {}
    },
    // Watch
    watch: {
      sass: {
        files: ['sass/*.scss'],
        tasks: ['sass:dev'],
        options: {
          debounceDelay: 250
        }
      }
    },

    // Clean
    clean: {
      // clean:release removed the dist directory
      release: [ 'dist' ]
    }
  });

  grunt.registerTask('default', 'Default task', [
    'sass:dev','watch'
  ]);

};
