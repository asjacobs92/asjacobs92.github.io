'use strict';

let gulpUtil = require('gulp-util');

/**
 * Configuration object for `gulp-htmlmin` plugin.
 * @see https://www.npmjs.com/package/gulp-htmlmin
 * @type {Object}
 */
exports.htmlmin = {
  collapseBooleanAttributes: true,
  collapseWhitespace: true,
  removeAttributeQuotes: true,
  removeEmptyAttributes: true,
};

/**
 * Directories used.
 * @type {{dist: string, fonts: string, styles: string, partials: string, src: string, tmp: string}}
 */
exports.paths = {
  dist: 'dist',
  fonts: 'dist/fonts',
  styles: 'dist/css',
  partials: '.tmp/partials',
  src: 'src',
  tmp: '.tmp',
};

/**
 * Configuration object for `gulp-stylus` plugin.
 * @see https://www.npmjs.com/package/gulp-stylus
 */
exports.stylus = {
  excludeUnderscored: true,
  options: {
    'compress': true,
    'include css': true,
  },
};

exports.babel = {
  compact: true,
  minified: true,
  comments: false,
};

/**
 * Configuration object for `gulp-angular-templatecache` plugin.
 * @see https://www.npmjs.com/package/gulp-angular-templatecache
 * @type {{filename: string, options: {Object}}}
 */
exports.templatecache = {
  filename: 'templateCacheHtml.js',
  options: {
    module: 'app',
    root: 'app',
  },
};

/**
 * Configuration object for `wiredep`.
 * @see https://www.npmjs.com/package/wiredep
 * @type {Object}
 */
exports.wiredep = {
  directory: 'bower_components',
};

/**
 * Common error handler.
 * @param {string} title
 * @return {Function}
 */
exports.errorHandler = function(title) {
  return function(err) {
    gulpUtil.log(gulpUtil.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};
