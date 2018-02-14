'use strict';

let gulp = require('gulp');
let $ = require('gulp-load-plugins')();
let path = require('path');

let config = require('./config');

/**
 * Create template cache from HTML partials.
 * @gulptask partials
 */
gulp.task('partials', function() {
  return gulp
    .src([path.join(config.paths.src, '/app/**/*.html'), path.join(config.paths.tmp, '/serve/app/**/*.html')])
    .pipe($.htmlmin(config.htmlmin))
    .pipe($.angularTemplatecache(config.templatecache.filename, config.templatecache.options))
    .pipe(gulp.dest(config.paths.partials));
});
