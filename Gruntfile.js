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
          paths: ["less"]
        },
        files: {
          "css/grid.css": "less/grid.less",
          "css/grid-noflex.css": "less/grid-noflex.less",
          "css/demo.css": "less/demo.less"
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
          "css/grid.css": "css/grid.css",
          "css/grid-noflex.css": "css/grid-noflex.css",
          "css/demo.css": "css/demo.css"
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