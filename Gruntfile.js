module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['js/jquery.min.js', 'js/contact.js', 'js/parallax.js'],
        dest: 'js/build/js-concat.js',
      },
    },

    uglify: {
      build: {
        src: ['js/build/js-concat.js'], //input
        dest: 'js/build/global.min.js' //output
      },

      dev_build: {
        options: {
          sourceMap: true
        },

        src: ['js/build/js-concat.js'], //input
        dest: '_site/js/build/global.min.js' //output
      }
    },

    sass: {                                                
        options: {  
          require: 'susy',
          sourceMap: 'none',                   
          outputStyle: 'compressed'
        },
        dist: { 
          files: {
            'scss/global-unprefixed.css': 'scss/global.scss'
          }
        }
    },

    autoprefixer: {
      options: {
        // Task-specific options go here.
      },
      single_file: {
        src: 'scss/global-unprefixed.css',
        dest: 'css/global.css'
      },

      site: {
        src: 'scss/global-unprefixed.css',
        dest: '_site/css/global.css'
      },
    },

    svgstore: {
      options: {
        prefix : 'icon-', // This will prefix each <symbol> ID
        svg: {
          style: 'position: absolute; top: 0; z-index:-10'
        }
      },
      default : {
        files: {
          '_includes/svg-defs.svg': ['svgs/*.svg'],
        }
      }
    },

    imagemin: {
      dynamic: {
          files: [{
              expand: true,
              cwd: 'images/',
              src: ['*.{png,jpg,gif}'],
              dest: 'images/build'
          }]
      }
    },

    shell: {
      jekyllServe: {
        command: "jekyll serve"
      },
      jekyllBuild: {
        command: "jekyll build"
      }
    },

    browserSync: {
      dev: {
          bsFiles: {
              src: ['_site/css/global.css', '_site/global.min.js', '_site/index.html']
          },
          options: {
              watchTask: true,
              open: false,
              proxy: "localhost:4000"
          }
      }
    },

    watch: {
      options: {
        //livereload: true,
      },

      svg: {
        files: ['svgs/*.svg'],
        tasks: ['svgstore', 'shell:jekyllBuild']
      },

      css: {
        files: ['scss/*.scss'],
        tasks: ['sass', 'autoprefixer:site']
      },

      js: {
        files: ['js/*.js'],
        tasks: ['concat', 'uglify:dev_build']
      },

      images: {
        files: ['images/*.{png,jpg,gif}'],
        tasks: ['imagemin', 'shell:jekyllBuild']
      },
    }
  });

  // Load the plugins
  require('load-grunt-tasks')(grunt);

  // Default tasks
  grunt.registerTask('serve', ['shell:jekyllServe']);
  grunt.registerTask('default', ['concat', 'uglify:build', 'svgstore', 'sass', 'autoprefixer:single_file', 'imagemin',  'shell:jekyllBuild']);
  grunt.registerTask('dev', ['concat', 'uglify:build', 'svgstore', 'sass', 'autoprefixer:single_file', 'imagemin' ,'browserSync',  'watch']);

};
