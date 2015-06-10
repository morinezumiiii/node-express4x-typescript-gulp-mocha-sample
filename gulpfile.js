'use strict';

var gulp = require('gulp');
var typescript = require('gulp-typescript');

var typescriptProject = typescript.createProject({
  module: 'commonjs',
  target: 'ES5',
  removeComments: true,
  sortOutput: true
});

/* build */
gulp.task('build', function() {
  // TODO: ディレクトリ構造を維持したままsrc/tsをsrc/jsへトランスパイルしたい
  // TODO: ただし、src/ts/public/vendorは除く
  gulp.src('src/ts/**/*.ts')
    .pipe(typescript(typescriptProject))
    .js
    .pipe(gulp.dest('src/ts/'));
});

/* watch */
gulp.task('watch', function() {
  // TODO: 監視対象ファイルに変更があったら、自動的に実行
});

/* test */
gulp.task('test', function() {
  // TODO: mochaなどの単体テストツールを実行
});

/* deploy */
gulp.task('deploy', function() {
  // TODO: src/js以下をminifyしてdestへコピーする
});
