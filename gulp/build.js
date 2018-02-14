'use strict';

let gulp = require('gulp');
let plugins = require('gulp-load-plugins')();
let path = require('path');

let config = require('./config');

/**
 * Build production version ready to deploy.
 * @gulptask build
 */
gulp.task('build', ['build-app', 'fonts', 'other']);

/**
 * Build production version of app only, without assets.
 * @gulptask build-app
 */
gulp.task('build-app', ['inject', 'partials'], function() {
  let injectPartials = gulp.src(path.join(config.paths.partials, '/', config.templatecache.filename), {read: false});

  let injectOptions = {
    addRootSlash: false,
    ignorePath: config.paths.partials,
    starttag: '<!-- inject:partials -->',
  };

  let filterOptions = {dot: true, restore: true};

  let excludeSourceMapsFilter = plugins.filter(['**', '!**/*.map'], filterOptions);
  let htmlFilter = plugins.filter('**/*.html', filterOptions);
  let scriptsFilter = plugins.filter('**/*.js', filterOptions);
  let stylesFilter = plugins.filter('**/*.css', filterOptions);

  return (gulp
      .src(path.join(config.paths.tmp, '/serve/*.html'))
      .pipe(plugins.inject(injectPartials, injectOptions))
      // Concatenate scripts and styles within
      // `<!-- build:<type>(<path>) <destination> -->` comments in HTML files.
      .pipe(plugins.useref())
      // Filter scripts only.
      .pipe(scriptsFilter)
      // Append revision hash to the filenames.
      .pipe(plugins.rev())
      // Initialize source mapping.
      .pipe(plugins.sourcemaps.init())
      // Inject Angular dependencies.
      .pipe(plugins.ngAnnotate())
      // Obfuscate scripts preserving `some` comments.
      .pipe(plugins.uglify({output: {comments: 'some'}}))
      .on('error', config.errorHandler('Uglify'))
      // Store source maps.
      .pipe(plugins.sourcemaps.write('maps'))
      // Restore filtered.
      .pipe(scriptsFilter.restore)
      // Filter styles only.
      .pipe(stylesFilter)
      // Append revision hash to the filenames.
      .pipe(plugins.rev())
      // Initialize source mapping.
      .pipe(plugins.sourcemaps.init())
      // Minify styles preserving `z-index` values.
      .pipe(plugins.cssnano({zindex: false}))
      // Store source maps.
      .pipe(plugins.sourcemaps.write('maps'))
      // Restore filtered.
      .pipe(stylesFilter.restore)
      // Exclude source maps to avoid it injecting instead of original files.
      .pipe(excludeSourceMapsFilter)
      // Replace original filenames with updated.
      .pipe(plugins.revReplace())
      // Restore source maps filtered out.
      .pipe(excludeSourceMapsFilter.restore)
      // Filter HTML files.
      .pipe(htmlFilter)
      // Minify HTML files.
      .pipe(plugins.htmlmin(config.htmlmin))
      // Restore filtered.
      .pipe(htmlFilter.restore)
      // Output files.
      .pipe(gulp.dest(config.paths.dist))
      // Output size of each file.
      .pipe(plugins.size({showFiles: true, title: 'build-app'})) );
});
