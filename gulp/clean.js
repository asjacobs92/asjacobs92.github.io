'use strict';

let del = require('del');
let gulp = require('gulp');

let config = require('./config');

/**
 * Clean distribution and temporary directories.
 * @gulptask clean
 */
gulp.task('clean', function() {
  return del([config.paths.dist, config.paths.tmp]);
});
