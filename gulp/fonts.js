'use strict';

let gulp = require('gulp');
let plugins = require('gulp-load-plugins')();
let mainBowerFiles = require('main-bower-files');

let config = require('./config');

/**
 * Copy and flatten fonts from Bower packages to the distribution dir.
 * @gulptask fonts
 */
gulp.task('fonts', function() {
  return gulp
    .src(mainBowerFiles())
    .pipe(plugins.filter('**/*.{eot,otf,svg,ttf,woff,woff2}'))
    .pipe(plugins.flatten())
    .pipe(plugins.size({title: 'fonts'}))
    .pipe(gulp.dest(config.paths.fonts));
});
