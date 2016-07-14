
module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // JSHint - Error check javascript
    jshint: {
      dist: {
        options: {
          curly: true,
          eqeqeq: true,
          eqnull: true,
          browser: true,
          globals: {
            jQuery: true
          }
        },
        files: {
          src: ['Gruntfile.js', 'js/lib/accordion.js', 'js/lib/tabs.js', 'js/lib/slideshow.js', 'js/lib/off-canvas.js', 'js/lib/dropdown.js', 'js/lib/infographic.js', 'js/lib/animated-hide.js']
        }
      }
    },

    // Concatenate JS files
    concat: {
      dist: {
        src: ['js/lib/accordion.js', 'js/lib/tabs.js', 'js/lib/slideshow.js', 'js/lib/off-canvas.js', 'js/lib/dropdown.js', 'js/lib/infographic.js', 'js/lib/animated-hide.js'],
        dest: 'public/js/base.js',
      },
    },

    // Uglify - Minify and concatenate js files
    uglify: {
      dist: {
        options : {
          mangle : true,
          compress : true
        },
        src: ['public/js/base.js'],
        dest: 'public/js/base.min.js'
      }
    },

    // SCSS compiler
    sass: {
      options: {
        sourceMapEmbed: true,
        style: 'nested'
      },
      dist: {
        files: {
          'public/css/style.css': '_scss/style.scss'
        }
      }
    },

    // PostCSS to run Autoprefixer
    postcss: {
      options: {
        map: {
          inline: true
        },
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
        ]
      },
      dist: {
        src: 'public/css/*.css'
      }
    },

    // CSS minification
    cssnano: {
      options: {
        sourcemap: true
      },
      dist: {
        files: {
          'public/css/style.min.css': 'public/css/style.css'
        }
      }
    },

    // Shell - Jekyll build and serve tasks via shell
    shell: {
      jekyllBuild: {
        command: 'bundle exec jekyll build'
      },
      jekyllBuildDev: {
        command: 'bundle exec jekyll build --config _local-config.yml'
      },
      jekyllServe: {
        command: 'bundle exec jekyll serve --watch'
      }
    },

    // Watch for changes
    watch: {
      options: {
        livereload: {
          host: '127.0.0.1',
          port: 35729
        }
      },
      css: {
        files: ['_scss/**/*.scss', 'examples/**/*.css'],
        tasks: ['css', 'shell:jekyllBuildDev'],
      },
      js: {
        files: 'js/**/*.js',
        tasks: ['js', 'shell:jekyllBuildDev'],
      },
      posts: {
        files:[
            '_config.yml',
            '*.html',
            '*.md',
            '_content/**',
            'examples/**',
            '_layouts/**',
            '_posts/**',
            '_drafts/**',
            '_includes/**',
            'assets/**/*.*'
        ],
        tasks: ['shell:jekyllBuildDev']
      }
    },

    connect: {
      server: {
        options: {
          hostname: '127.0.0.1',
          port: 4000,
          base: '_site'
        },
        livereload: {
          options: {
            open: {
              target: 'http://127.0.0.1:4000/'
            },
            base: ['_site']
          }
        }
      }
    },

    // Imagemin - Run image optimization on img folder
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'public/img/'
        }]
      }
    },

    // HTML lint - run html validation on compiled site
    htmllint: {
      all: {
        options: {
          ignore: [
            'Element “main” does not need a “role” attribute.',
            'Element “nav” does not need a “role” attribute.',
            'The “banner” role is unnecessary for element “header”.',
            'The “complementary” role is unnecessary for element “aside”.',
            'The “contentinfo” role is unnecessary for element “footer”.',
            'The “frameborder” attribute on the “iframe” element is obsolete. Use CSS instead.'
          ]
        },
        src: ["_site/**/*.html", ]
      }
    },

    // Accessibility - run accessibility scan on compiled site
    accessibility: {
      options : {
        accessibilityLevel: 'WCAG2A',
        reportLevels: {
          notice: false,
          warning: true,
          error: true
        },
        ignore: [
          'WCAG2A.Principle1.Guideline1_1.1_1_1.H67.2', // empty alt tag warning
          'WCAG2A.Principle1.Guideline1_3.1_3_1.H48', // navigation false positive warning
          'WCAG2A.Principle1.Guideline1_3.1_3_1.H42', // suspected heading
          'WCAG2A.Principle1.Guideline1_3.1_3_1.H39.3.NoCaption', // No table caption
          'WCAG2A.Principle1.Guideline1_3.1_3_1.H73.3.NoSummary' // No table summary
          ]
      },
      test : {
        src: ['_site/**/*.html']
      }
    },

    // Parker - CSS stats
    parker: {
      options: {},
      src: [
        '_site/public/css/*.css'
      ],
    },

    // SCSS linter
    scsslint: {
      allFiles: [
        '_scss/**/*.scss',
      ],
      options: {
        bundleExec: true,
        config: '.scss-lint.yml',
        colorizeOutput: true
      }
    },

    // Update - find new versions of Grunt dependencies
    devUpdate: {
      main: {
        options: {
          updateType: 'prompt',
          reportUpdated: false,
          semver: false,
          packages: {
            devDependencies: true,
            dependencies: false
          },
          packageJson: null
        }
      }
    }

  });

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);


  grunt.registerTask('default', ['serve']);
  grunt.registerTask('serve', ['build', 'connect', 'watch']);
  grunt.registerTask('build', ['js', 'css', 'images', 'shell:jekyllBuildDev']);

  grunt.registerTask('css', ['sass', 'lint-scss', 'postcss', 'cssnano']);
  grunt.registerTask('js', ['lint-js', 'concat', 'uglify']);
  grunt.registerTask('images', ['imagemin']);

  grunt.registerTask('lint', ['lint-js', 'lint-html', 'lint-a11y', 'lint-scss']);
  grunt.registerTask('lint-js', ['jshint']);
  grunt.registerTask('lint-html', ['htmllint']);
  grunt.registerTask('lint-a11y', ['accessibility']);
  grunt.registerTask('lint-scss', ['scsslint']);

  grunt.registerTask('report-css', ['parker']);

  grunt.registerTask('update', ['devUpdate']);

};
