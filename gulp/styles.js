'use strict';

let browserSync = require('browser-sync');
let gulp = require('gulp');
let plugins = require('gulp-load-plugins')();
let path = require('path');

let config = require('./config');

let indexPath = path.join(config.paths.src, '/styles/index.styl');

/**
 * Build styles.
 * @gulptask styles
 */
gulp.task('styles', function() {
  return buildStyles();
});

/**
 * Inject all SCSS files to the index file and build CSS.
 * @return {*}
 */
function buildStyles() {
  return gulp
    .src(indexPath)
    .pipe(plugins.stylus(config.stylus.options))
    .pipe(plugins.autoprefixer())
    .pipe(plugins.csso())
    .pipe(gulp.dest(path.join(config.paths.tmp, '/serve/css/')));
}

/**
 * Concat vendor styles.
 * @gulptask vendors
 */
gulp.task('vendors', function() {
  return gulp
    .src(mainBowerFiles())
    .pipe(filter('*.css'))
    .pipe(plugins.flatten())
    .pipe(plugins.size({title: 'styles'}))
    .pipe(gulp.dest(config.paths.styles));
});

/**
 * Build styles and watch for changes.
 * @gulptask styles:watch
 */
gulp.task('styles:watch', ['styles'], function() {
  return watch();
});

/**
 * Watch for changes.
 * @param {Function|null} [notOnlyChangedCallback=null]
 * @return {*}
 */
function watch(notOnlyChangedCallback) {
  notOnlyChangedCallback = notOnlyChangedCallback || null;

  return gulp.watch(path.join(config.paths.src, '/styles/**/*.styl'), function(event) {
    if (event.type !== 'changed') {
      notOnlyChangedCallback();
      return;
    }

    buildStyles()
      .pipe(plugins.debug({title: 'styles modified:'}))
      // Push only CSS files to the BrowserSync stream to prevent full reload.
      .pipe(browserSync.stream({match: '**/*.css'}));
  });
}

exports.watch = watch;
