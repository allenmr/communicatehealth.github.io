module.exports = function(grunt) {
  'use strict';

  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    // reference the package.json
    pkg: grunt.file.readJSON('package.json'),

    //  --------------------------------------
    //  Grunt Task Configuration
    //  --------------------------------------
    //  1. JavaScript
    //    1-1. JS linting
    //    1-2. JS concatenation
    //    1-3. JS uglify/compression
    //  2. (S)CSS
    //    2-1. SCSS compiling
    //    2-2. Autoprefixing, CSS minification
    //  3. Images
    //    3-1. Image optimization
    //  4. Clean, build, and copy
    //    4-1. Clean out compiled directories
    //    4-2. Jekyll
    //    4-3. Copy into compiled directories
    //  5. Run local server, watch for changes
    //    5-1. Local server
    //    5-2. Watching for changes
    //  6. Additional linting, reports
    //    6-1. HTML validation
    //    6-2. Accessibility scan
    //    6-3. SCSS linting
    //    6-4. CSS reporting
    //  7. Housekeeping
    //    7-1. Update grunt dependencies
    //  --------------------------------------


    //  --------------------------------------
    //  1. JavaScript
    //  --------------------------------------

    //  1-1. JS linting
    //  --------------------------------------
    jshint: {
      dist: {
        options: {
          curly: true, // always put curly braces around blocks in loops and conditionals
          eqeqeq: true, // use === and !== instead of == and != to avoid value coercion
          eqnull: true, // suppress warnings about == null comparisons
          browser: true, // defines globals exposed by modern browsers
          globals: {
            jQuery: true // defines globals exposed by jQuery
          }
        },
        files: {
          // Lint our gruntfile and any project-specific JS files
          // Add new project-specific JS files to this array for linting
          src: ['Gruntfile.js', 'js/lib/accordion.js', 'js/lib/dropdown.js', 'js/lib/infographic.js', 'js/lib/slideshow.js', 'js/lib/tabs.js', 'js/lib/off-canvas.js', 'js/lib/animated-hide.js', 'js/lib/rich-select.js', 'js/lib/auto-height-iframe.js']
        }
      }
    },

    //  1-2. JS concatenation
    //  --------------------------------------
    concat: {
      dist: {
        // Combine all project files into one big JS file
        // Add new JS files to this array
        // Project-specific JS files go in js/lib
        // Third-party JS files go in js/vendor
        src: ['js/vendor/jquery.js'],
        dest: 'js/scripts.js',
      },
    },

    //  1-3. JS uglify/compression
    //  --------------------------------------
    uglify: {
      dist: {
        options : {
          mangle : true, // allow names to be changed, simplified
          compress : true // enable source compression
        },
        // Mangle and compress our single, concatenated JS file
        // Maintains uncompressed version for reference
        src: ['js/scripts.js'],
        dest: 'js/scripts.js'
      }
    },


    //  --------------------------------------
    //  2. (S)CSS
    //  --------------------------------------

    //  2-1. SCSS compilation
    //  --------------------------------------
    //  Using LibSass (C-based) for speed
    sass: {
      options: {
        sourceMapEmbed: true, // embed sourcemap directly in file
        style: 'nested' // nested output for readability
      },
      dist: {
        files: {
          // All SCSS is routed through _scss/style.scss
          'css/style.css': '_scss/style.scss'
        }
      }
    },

    //  2-2. Autoprefixing, CSS minification
    //  --------------------------------------
    //  Using PostCSS to run autoprefixer and CSS minification
    //  Adds necessary vendor prefixes, removed unnecessary vendor prefixes
    postcss: {
      options: {
        map: {
          inline: true // maintain embedded sourcemap
        },
        processors: [
          require('autoprefixer')({browsers: ['last 3 versions', 'ie 9']}), // autoprefixer setting
          require('cssnano')() // minify the result
        ]
      },
      dist: {
        // Overwrite compiled, nested CSS with autoprefixed, minified version
        src: 'css/style.css'
      }
    },


    //  --------------------------------------
    //  3. Images
    //  --------------------------------------

    //  3-1. Image optimization
    //  --------------------------------------
    //  Optimizes all JPG, PNG, GIF, and SVG images in img
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/', // source directory
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: 'img/' // output directory
        }]
      }
    },


    //  --------------------------------------
    //  4. Clean, build, and copy
    //  --------------------------------------

    //  4-1. Clean out compiled directories
    //  --------------------------------------
    //  Delete _site folder to ensure a clean build
    clean: {
      build: {
        src: ['_site/']
      }
    },

    //  4-2. Jekyll
    //  --------------------------------------
    //  Run Jekyll build via shell
    //  notes:
    //   - Grunt plugins for direct Jekyll compilation are out of date
    //   - Using Jekyll serve/watch options will prevent other build tasks from running
    shell: {
      // Build Jekyll site using GitHub Pages gem, using default config.yml
      jekyllBuild: {
        command: 'bundle exec jekyll build'
      },
      // Build Jekyll site using GitHub Pages gem, using localized config.yml
      jekyllBuildDev: {
        command: 'bundle exec jekyll build --config _local-config.yml'
      }
    },

    //  4-3. Copy into compiled directories
    //  --------------------------------------
    //  Copying files directly into compiled _site directory
    //  Side-steps Jekyll build for faster tasks, live updates
    copy: {
      // Copy post-process CSS files into _site
      css: {
        files: [
          {expand: true, src: ['css/*'], dest: '_site/', filter: 'isFile'}
        ]
      },
      // Copy post-process JS files into _site
      js: {
        files: [
          {expand: true, src: ['js/*'], dest: '_site/', filter: 'isFile'}
        ]
      },
      // Copy optimized images files into _site
      img: {
        files: [
          {expand: true, src: ['img/*'], dest: '_site/', filter: 'isFile'}
        ]
      }
    },


    //  --------------------------------------
    //  5. Run local server, watch for changes
    //  --------------------------------------

    //  5-1. Local server
    //  --------------------------------------
    // Create local server at http://127.0.0.1:4000
    connect: {
      server: {
        options: {
          hostname: '127.0.0.1',
          port: 4000,
          base: '_site' // specify base path of server
        },
        // Enable in-browser live reload
        // Requires installing browser extension: http://livereload.com/extensions/
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

    //  5-2. Watching for file changes
    //  --------------------------------------
    watch: {
      options: {
        // Enable in-browser live reload
        // Requires installing browser extension: http://livereload.com/extensions/
        livereload: {
          host: '127.0.0.1',
          port: 35729
        }
      },

      // CSS
      // When any *.scss file in _scss changes:
      // 1. Run SCSS compilation
      // 2. Autoprefix result
      // 3. Minify CSS
      // 4. Copy CSS into compiled directory
      css: {
        files: '_scss/**/*.scss',
        tasks: ['css', 'copy:css']
      },

      // JS
      // When any *.js file in _js changes:
      // 1. Lint JS files
      // 2. Concatenate JS files
      // 3. Uglify JS files
      // 4. Copy JS into compiled directory
      js: {
        files: 'js/**/*.js',
        tasks: ['js', 'copy:js']
      },

      // Images
      // When any file in _img changes:
      // 1. Optimize JPG, GIF, PNG, SVG files
      // 2. Copy optimized files into compiled directory
      img: {
        files: 'img/**/*',
        tasks: ['imagemin', 'copy:img']
      },

      // Jekyll/HTML
      // When any Jekyll component or HTML file changes:
      // 1. Run Jekyll build task (automatically copies into compiled directory)
      posts: {
        files:[
            '_config.yml',
            '*.html',
            '*.md',
            '_content/**',
            '_layouts/**',
            '_posts/**',
            '_drafts/**',
            '_includes/**',
            'assets/**/*.*'
        ],
        tasks: ['shell:jekyllBuildDev']
      }
    },


    //  --------------------------------------
    //  6. Additional linting, reports
    //  --------------------------------------

    //  6-1. HTML validation
    //  --------------------------------------
    //  Runs HTML validation on compiled site
    //  Known false-positives added to ignore list
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
        src: ["_site/**/*.html", "!_site/files/**/*.html" ]
      }
    },

    // See shell:htmlproofer above for additional HTML validation task

    //  6-2. Accessibility scan
    //  --------------------------------------
    //  Runs WCAG2A accessibility scan on compiled site
    //  Known false-positives added to ignore list
    accessibility: {
      options : {
        accessibilityLevel: 'WCAG2A',
        reportLevels: {
          notice: false, // don't display notices
          warning: true, // display warnings, still pass
          error: true // display errors
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
        src: ['_site/**/*.html', "!_site/files/**/*.html"]
      }
    },

    //  6-3. SCSS linting
    //  --------------------------------------
    //  Runs SCSS linter on all SCSS files
    //  Rules and exclusions specified in .scss-lint.yml
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

    //  6-4. CSS report
    //  --------------------------------------
    //  Runs CSS report on compiled, prefixed CSS
    //  Output sent to console
    parker: {
      options: {},
      src: [
        '_site/css/style.css'
      ],
    },


    //  --------------------------------------
    //  7. Housekeeping
    //  --------------------------------------

    //  7-1. Update grunt dependencies
    //  --------------------------------------
    //  Looks for version updates from devDependencies in package.json
    devUpdate: {
      main: {
        options: {
          updateType: 'prompt', // user prompt for update
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

  //  --------------------------------------
  //  Grunt Tasks
  //  --------------------------------------

  // "grunt" - runs "serve" task
  grunt.registerTask('default', ['serve']);

  // "grunt css"
  // 1. Compiles SCSS
  // 2. Autoprefixes compiled CSS
  // 3. Minifies prefixed, compiled CSS
  grunt.registerTask('css', ['sass', 'postcss']);

  // "grunt js"
  // 1. Lints JS files
  // 2. Concatenates JS files
  // 3. Uglifies JS files
  grunt.registerTask('js', ['jshint', 'concat', 'uglify']);

  // "grunt build"
  // 1. Cleans compiled directories
  // 2. Runs "grunt js" task
  // 3. Runs "grunt css" task
  // 4. Runs SCSS linter
  // 5. Runs image optimization
  // 6. Builds Jekyll site
  grunt.registerTask('build', ['clean', 'js', 'css', 'scsslint', 'imagemin', 'shell:jekyllBuildDev']);

  // "grunt serve"
  // 1. runs "grunt build" task
  // 2. establishes local server
  // 3. watches for file changes
  grunt.registerTask('serve', ['build', 'connect', 'watch']);

  // "grunt travis"
  // Task for TravisCI to run for build validation
  // 1. runs "grunt build" task
  // 2. runs htmlproofer scan
  // 3. runs accessibility scan
  grunt.registerTask('travis', ['build', 'accessibility']);

  // "grunt lint"
  // 1. Runs JS lint
  // 2. Runs HTML validation (htmlproofer + htmllint)
  // 3. Runs accessibility scan
  // 4. Runs SCSS linter
  grunt.registerTask('lint', ['jshint', 'htmllint', 'accessibility', 'scsslint']);

  // "grunt css-report"
  // 1. Output CSS stats to console
  grunt.registerTask('css-report', ['parker']);

  // "grunt update"
  // 1. Updates grunt dependencies
  grunt.registerTask('update', ['devUpdate']);

};
