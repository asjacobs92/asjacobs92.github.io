'use strict';

let browserSync = require('browser-sync');
let gulp = require('gulp');
let plugins = require('gulp-load-plugins')();
let _ = require('lodash');
let path = require('path');
let wiredep = require('wiredep').stream;

let config = require('./config');

let destPath = path.join(config.paths.tmp, '/serve');

/**
 * Inject scripts and styles into HTML files placed directly in the source dir.
 * @gulptask inject
 */
gulp.task('inject', ['scripts', 'styles'], function() {
  let injectScripts = gulp.src(path.join(config.paths.src, '/app/**/*.js'));

  let injectStyles = gulp.src(path.join(config.paths.tmp, '/serve/**/*.css'), {read: false});

  let injectOptions = {
    addRootSlash: false,
    ignorePath: [config.paths.src, destPath],
  };

  return gulp
    .src(path.join(config.paths.src, '/*.html'))
    .pipe(plugins.inject(injectScripts, injectOptions))
    .pipe(plugins.inject(injectStyles, injectOptions))
    .pipe(wiredep(_.extend({}, config.wiredep)))
    .pipe(gulp.dest(destPath));
});

/**
 * Start `inject` task and launch Browsersync reloading after.
 * @gulptask inject:reload
 */
gulp.task('inject:reload', ['inject'], function() {
  browserSync.reload();
});
