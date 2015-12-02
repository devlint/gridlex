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
          "dist/demo/demo.css": "dist/demo/demo.less"
        }
      }
    },

    /* SASS
      ================================================================= */
    sass: {
      dist: {
        options: {
          style: 'expanded',
          sourcemap: 'none'
        },
        files: {
          "dist/gridlex.css": "src/gridlex.scss"
        }
      }
    },

    /* POSTCSS - autoprefixer & cssnano
      ================================================================= */
    postcss: {
      options: {
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'}),
          require('cssnano')()
        ]
      },
      css: {
        files: {
          "dist/gridlex.min.css": "dist/gridlex.css",
          "dist/demo/demo.min.css": "dist/demo/demo.css"
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
        files: '**/*.less',
        //files: '**/*.scss',
        tasks: ['compile']
      }
    }

  });


  /* GRUNT TASKS
  ================================================================= */
  grunt.registerTask('default', ['compile']);
  grunt.registerTask('compile', ['less', 'postcss']);
  //grunt.registerTask('compile', ['sass', 'postcss']); // uncomment for Sass compilation

};