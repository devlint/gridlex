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
          "dist/demo/demo.css": "dist/demo/demo.less" // example only
        }
      }
    },


    /* AUTOPREFIXER
      ================================================================= */
    autoprefixer: {
      options: {
        browsers: ['last 2 version']
      },
      css: {
        files: {
          "dist/gridlex.css": "dist/gridlex.css",
          "dist/demo/demo.css": "dist/demo/demo.css"
        }
      }
    },


    /* CSS MINIFY
     ================================================================= */
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files:{
            "dist/gridlex.min.css": "dist/gridlex.css"
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
        tasks: ['compile']
      }
    }

  });


  /* GRUNT TASKS
  ================================================================= */
  grunt.registerTask('default', ['mincss']);
  grunt.registerTask('compile', ['less', 'autoprefixer', 'cssmin']);

};