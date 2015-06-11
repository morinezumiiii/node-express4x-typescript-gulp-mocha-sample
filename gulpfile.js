'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var typescript = require('gulp-typescript');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');

var typescriptProject = typescript.createProject({
  module: 'commonjs',
  target: 'ES5',
  removeComments: true,
  sortOutput: true
});

/* build */
gulp.task('build', function(cb) {
  runSequence(
    'transpile-public-ts',
    'transpile-routes-ts',
    'transpile-app-ts',
    'transpile-test-ts',
    'copy-views-jade',
    'copy-public-images',
    'copy-public-vendor',
    'copy-public-stylesheets',
    cb);
});

/* transpile-app-ts */
gulp.task('transpile-app-ts', function() {
  return gulp.src('src/ts/app.ts')
    .pipe(typescript(typescriptProject))
    .js
    .pipe(gulp.dest('src/js/'));
});

/* transpile-routes-ts */
gulp.task('transpile-routes-ts', function() {
  return gulp.src('src/ts/routes/*.ts')
    .pipe(typescript(typescriptProject))
    .js
    .pipe(gulp.dest('src/js/routes/'));
});

/* transpile-public-ts */
gulp.task('transpile-public-ts', function() {
  return gulp.src('src/ts/public/javascripts/*.ts')
    .pipe(typescript(typescriptProject))
    .js
    .pipe(gulp.dest('src/js/public/javascripts/'));
});

/* transpile-test-ts */
gulp.task('transpile-test-ts', function() {
  return gulp.src('src/ts/test/**/*.ts')
    .pipe(typescript(typescriptProject))
    .js
    .pipe(gulp.dest('src/js/test/'));
});

/* copy-views-jade */
gulp.task('copy-views-jade', function() {
  return gulp.src('src/ts/views/*.jade')
    .pipe(gulp.dest('src/js/views/'));
});

/* copy-public-vendor */
gulp.task('copy-public-vendor', function() {
  return gulp.src('src/ts/public/javascripts/vendor/**')
    .pipe(gulp.dest('src/js/public/javascripts/vendor/'));
});

/* copy-public-images */
gulp.task('copy-public-images', function() {
  return gulp.src('src/ts/public/images/*')
    .pipe(gulp.dest('src/js/public/images/'));
});

/* copy-public-stylesheets */
gulp.task('copy-public-stylesheets', function() {
  return gulp.src('src/ts/public/stylesheets/*')
    .pipe(gulp.dest('src/js/public/stylesheets/'));
});

/* watch */
gulp.task('watch', function() {
  gulp.watch(['src/ts/**/*', 'test/**'], function() {
    runSequence('build', 'test');
  });
});

/* test */
gulp.task('test', function() {
  return gulp.src(['test/**/*.js'], { read: false })
    .pipe(mocha({ reporter: 'list' }))
    .on('error', gutil.log);
});

/* deploy */
gulp.task('deploy', function() {
  // TODO: src/jsà»â∫ÇminifyÇµÇƒdestÇ÷ÉRÉsÅ[Ç∑ÇÈ
});
