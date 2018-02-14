'use strict';

let browserSync = require('browser-sync');
let gulp = require('gulp');
let plugins = require('gulp-load-plugins')();
let path = require('path');

let config = require('./config');

let scriptsPath = path.join(config.paths.src, '/app/**/*.js');

/**
 * Build scripts.
 * @gulptask scripts
 */
gulp.task('scripts', function() {
  return buildScripts(scriptsPath);
});

/**
 * Build scripts from specified sources.
 * @param {*} src
 * @return {*}
 */
function buildScripts(src) {
  return gulp
    .src(src)
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format())
    .pipe(plugins.babel(config.babel))
    .pipe(gulp.dest(path.join(config.paths.tmp, '/serve/app/')));
}

/**
 * Build scripts and watch for changes.
 * @gulptask scripts:watch
 */
gulp.task('scripts:watch', ['scripts'], function() {
  return watch();
});

/**
 * Watch for changes.
 * @param {Function|null} [notOnlyChangedCallback=null]
 * @return {*}
 */
function watch(notOnlyChangedCallback) {
  notOnlyChangedCallback = notOnlyChangedCallback || null;

  return gulp.watch(scriptsPath, function(event) {
    if (event.type !== 'changed') {
      notOnlyChangedCallback();
      return;
    }

    buildScripts(event.path)
      .pipe(plugins.debug({title: 'scripts modified:'}))
      .pipe(browserSync.stream());
  });
}

exports.watch = watch;
