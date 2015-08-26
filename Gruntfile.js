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
          paths: ["src"],
          strictMath: true
        },
        files: {
          "dist/gridlex.css": "src/gridlex.less",
          "dist/gridlex-noflex.css": "src/gridlex-noflex.less",
          "dist/demo/demo.css": "dist/demo/demo.less" // example only
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
          "dist/gridlex.css": "dist/gridlex.css",
          "dist/gridlex-noflex.css": "dist/gridlex-noflex.css"
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
        files: 'src/**/*.less',
        tasks: ['mincss']
      }
    }

  });


  /* GRUNT TASKS
  ================================================================= */
  grunt.registerTask('default', ['mincss']);
  grunt.registerTask('mincss', ['less', 'autoprefixer']);

};