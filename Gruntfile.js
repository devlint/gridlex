'use strict';

module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


  grunt.initConfig({

  pkg: grunt.file.readJSON('package.json'),

  /* LESS
    ================================================================= */
    less: {
      less2css: {
        options: {
          pathDevs: ['<%= pkg.pathDev %>less'],
          yuicompress: false,
          compress: false,
          cleancss: false,
          ieCompact: false,
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: 'screen.css.map',
          sourceMapFilename: 'css/screen.css.map'
        },
        files: {
          '<%= pkg.pathProd %>css/*.css': [
              '<%= pkg.pathDev %>less/*.less'
          ]
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
          '<%= pkg.pathProd %>css/*.css': '<%= pkg.pathProd %>css/*.css'
        }
      }
    },


  /* CSSMIN
    ================================================================= */
    cssmin: {
      options: {
        sourceMap: true,
        advanced: false
      },
      screen: {
        files: {
            '<%= pkg.pathProd %>css/*.min.css': '<%= pkg.pathProd %>css/front/*.css'
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
    grunt.registerTask('mincss', ['less:less2css', 'autoprefixer', 'cssmin']);

};