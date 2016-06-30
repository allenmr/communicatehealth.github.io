
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
          src: ['Gruntfile.js']
        }
      }
    },

    // Uglify - Minify and concatenate js files
    uglify: {
      base: {
        options : {
          mangle : true,
          compress : true
        },
        src: ['js/lib/jumplink.js','js/lib/outlink.js'],
        dest: 'js/base.js'
      },
      jquery: {
        options : {
          mangle : true,
          compress : true
        },
        src: ['js/vendor/jquery.js'],
        dest: 'js/jquery.js'
      }
    },

    // Shell - Jekyll build and serve tasks via shell
    shell: {
      jekyllBuild: {
        command: 'bundle exec jekyll build'
      },
      jekyllServe: {
        command: 'bundle exec jekyll serve --watch'
      }
    },

    // Imagemin - Run image optimization on img folder
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'img/'
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
        '_site/css/*.css'
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

  grunt.registerTask('default', ['js', 'serve']);

  grunt.registerTask('serve', ['shell:jekyllServe']);
  grunt.registerTask('build', ['js', 'images', 'shell:jekyllBuild']);

  grunt.registerTask('js', ['jshint', 'uglify']);
  grunt.registerTask('images', ['imagemin']);

  grunt.registerTask('lint', ['lint-js', 'lint-html', 'lint-a11y', 'lint-scss']);
  grunt.registerTask('lint-js', ['jshint']);
  grunt.registerTask('lint-html', ['htmllint']);
  grunt.registerTask('lint-a11y', ['accessibility']);
  grunt.registerTask('lint-scss', ['scsslint']);

  grunt.registerTask('report-css', ['parker']);

  grunt.registerTask('update', ['devUpdate']);

};
