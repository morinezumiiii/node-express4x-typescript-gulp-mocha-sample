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
  // TODO: �f�B���N�g���\�����ێ������܂�src/ts��src/js�փg�����X�p�C��������
  // TODO: �������Asrc/ts/public/vendor�͏���
  gulp.src('src/ts/**/*.ts')
    .pipe(typescript(typescriptProject))
    .js
    .pipe(gulp.dest('src/ts/'));
});

/* watch */
gulp.task('watch', function() {
  // TODO: �Ď��Ώۃt�@�C���ɕύX����������A�����I�Ɏ��s
});

/* test */
gulp.task('test', function() {
  // TODO: mocha�Ȃǂ̒P�̃e�X�g�c�[�������s
});

/* deploy */
gulp.task('deploy', function() {
  // TODO: src/js�ȉ���minify����dest�փR�s�[����
});
