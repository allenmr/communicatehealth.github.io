# CommunicateHealth Dev Blog

[https://communicatehealth.github.io](https://communicatehealth.github.io)

## Requirements

- [Ruby](http://www.ruby-lang.org/en/downloads/) (including development
headers and v2.0.0 or above)
- [RubyGems](http://rubygems.org/pages/download)
- [NodeJS](http://nodejs.org)

## Installation

1. Clone repo locally
2. Run ```gem install bundler``` to allow for installing Rubies from a Gemfile
3. Run ```bundle install``` to install Ruby dependencies for GitHub Pages
4. Run ```npm install -g grunt-cli``` to install Grunt globally
5. Run ```npm install``` to install Node/Grunt dependencies

## Grunt Tasks

- ```grunt``` - runs JS check, minification, then serves and watches Jekyll site (including SCSS compiling) at [http://127.0.0.1:4000](http://127.0.0.1:4000)
- ```grunt serve``` - same as running ```grunt```
- ```grunt build``` - runs JS check, minification, image optimization, then builds Jekyll site (including SCSS compiling)
- ```grunt js``` - runs JS check, concatenates, and minifies JS
- ```grunt images``` - runs image optimization on images in /img folder
- ```grunt lint-js``` - JS linter
- ```grunt lint-html``` - runs HTML validation on all HTML files in the compiled _site directory
- ```grunt lint-a11y``` - scans all HTML files in the compiled _site directory against WCAG2A accessibility guidelines
- ```grunt lint-scss``` - Lint SCSS
- ```grunt lint``` - Lint JS, HTML, Accessibility, SCSS
- ```grunt report-css``` - Show stats on compiled site's CSS (using [Parker](https://github.com/katiefenn/parker/))
- ```grunt update``` - checks for version updates on all grunt dependencies

## Options

### Uglify HTML output

Calling the compress.html layout from the default.htm layout file will remove all whitespace from compiled HTML (via [http://jch.penibelst.de/](http://jch.penibelst.de/)). To use compress.html add the following to the top of _includes/default.html:

    ---
    layout: compress
    ---
