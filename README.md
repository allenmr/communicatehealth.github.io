# camp [![Build Status](https://travis-ci.org/CommunicateHealth/camp.svg?branch=gh-pages)](https://travis-ci.org/CommunicateHealth/camp)

camp is a starting point for new Jekyll projects

- [References](#references)
- [Requirements](#requirements)
- [Installation](#installation)
- [Grunt Tasks](#grunt-tasks)
- [Jekyll Tips](#jekyll-tips)
- [Options](#options)

## References

- [`index.html` reference](https://github.com/communicatehealth/camp/blob/gh-pages/_content/index.md)

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

### Build and serve locally

- ```grunt``` - runs JS lint + concatenation + minification, SCSS lint + compilation + autoprefixing + minification, image optimization, Jekyll build, then serves + watches at [http://127.0.0.1:4000](http://127.0.0.1:4000) - any changes to HTML, SCSS, JS, images files will trigger a rebuild on-the-fly


### Build locally

- ```grunt serve``` - same as running ```grunt```
- ```grunt build``` - runs JS lint + concatenation + minification, SCSS lint + compilation + autoprefixing + minification, image optimization, Jekyll build
- ```grunt js``` - runs JS lint + concatenation + minification
- ```grunt css``` - runs SCSS compilation + autoprefixing + minification
- ```grunt images``` - runs image optimization on JPG, GIF, PNG, SVG images in _img folder

### Linting and validation

- ```grunt lint``` - Lint JS, HTML validation of compiled site, accessibility scan of compiled site, SCSS linting
- ```grunt css-report``` - Show stats on compiled site's CSS (using [Parker](https://github.com/katiefenn/parker/))

### Grunt dependency updating

- ```grunt update``` - checks for version updates on all grunt dependencies

## Jekyll Tips

### Adding ```baseurl``` to all links

The ```site.baseurl``` variable lets you use absolute URLs in your HTML regardless how deep in the folder structure your site will live. Check out some examples of how to prepend the baseurl to links:

#### Stylesheet link

```<link rel="stylesheet" href="{{ "/public/css/style.min.css" | prepend: site.baseurl }}">```

#### Image link

```<img src="{{ "/public/img/logo.png" | prepend: site.baseurl }}" alt="">```

#### Internal page link

```<a href="{{ "/about-us/" | prepend: site.baseurl }}">About Us</a>```

## Options

### Uglify HTML output

Calling the compress.html layout from the default.htm layout file will remove all whitespace from compiled HTML (via [http://jch.penibelst.de/](http://jch.penibelst.de/)). To use compress.html add the following to the top of _includes/default.html:

    ---
    layout: compress
    ---

