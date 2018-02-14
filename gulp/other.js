'use strict';

let gulp = require('gulp');
let $ = require('gulp-load-plugins')();
let path = require('path');

let config = require('./config');

/**
 * Copy various not handled stuff to the distribution dir.
 * @gulptask other
 */
gulp.task('other', function() {
  let filter = $.filter(function(file) {
    return file.stat.isFile();
  });

  return gulp
    .src([
      path.join(config.paths.src, '/**/*'),
      path.join(config.paths.src, '/**/.*'),
      path.join('!' + config.paths.src, '/**/*.{css,html,js,styl}'),
      path.join('!' + config.paths.src, '/app/**/', config.locales.directory, '/*.json'),
    ])
    .pipe(filter)
    .pipe($.size({title: 'other'}))
    .pipe(gulp.dest(config.paths.dist));
});
