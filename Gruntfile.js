'use strict';

module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    /* LESS
      ================================================================= */
    less: {
      less: {
        options: {
          paths: ["src"]
        },
        files: {
          "gridlex.css": "src/gridlex.less",
          "gridlex-noflex.css": "src/gridlex-noflex.less",
          "example/css/demo.css": "example/less/demo.less"
        }
      }
    },


    /* AUTOPREFIXER
      ================================================================= */
    autoprefixer: {
      options: {
        browsers: ['last 2 version', 'Safari >= 6', 'Explorer >= 9', 'Opera >= 12', 'iOS >= 6', 'Android >= 4']
      },
      css: {
        files: {
          "gridlex.css": "gridlex.css",
          "gridlex-noflex.css": "gridlex-noflex.css"
        }
      }
    },


    /* WATCH
      ================================================================= */
    watch: {
      options: {
        atBegin: true
        //, livereload: true
      },
      less: {
        files: 'less/**/*.less',
        tasks: ['mincss']
      }
    }

  });


  /* GRUNT TASKS
  ================================================================= */
  grunt.registerTask('default', ['mincss']);
  grunt.registerTask('mincss', ['less', 'autoprefixer']);

};