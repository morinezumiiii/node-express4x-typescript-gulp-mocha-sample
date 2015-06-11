# TypeScript�{ExpressJS�{gulp�J�����쐬����

## Node.js��

* Windows�̏ꍇ�́A�����T�C�g���C���X�g�[�����_�E�����[�h���A�C���X�g�[��
* �R�}���h���C�����npm�R�}���h���g����悤�ɂȂ��OK


## tsc

* TypeScript�R�[�h���AJavaScript�ɃR���p�C������R�}���h(�R���p�C��)�B

### �C���X�g�[��
    $ npm install -g tsc
    $ npm install -g tsc
   

## tsd

NPM�ŊǗ�����Ă��郂�W���[�����g�p����ꍇ�A
�����̌^��`����TypeScript�R�[�h���ɓǂݍ��܂���K�v������̂ŁA
tsd���g�p���āA�^��`�t�@�C�����Ǘ�����B
�^��`�t�@�C����typings�f�B���N�g�����ɕۑ������B

### �C���X�g�[��
    $ npm install -g tsd

�ȉ��̃R�}���h�́A�^��`�t�@�C�����擾���A�^��`�t�@�C���Ǘ��t�@�C��(tsd.d.ts��)�ۑ�����B

#### �p�@
    $ tsd query [���W���[����] --action [�A�N�V������(install�Ȃ�)]
    --resolve�I�v�V�����́A�C���X�g�[�������^��`��񂷂ׂĂ�typings/tsd.d.ts�ɂĊǗ�����

#### �R�}���h��
    $ tsd query express --action install --resolve --save

�ȉ��̃R�����g���A�v���P�[�V������.ts�t�@�C���̐擪�ɋL�q���邱�ƂŁA�^��`����ǂݍ��܂��邱�Ƃ��o����B

#### �p�@
    /// <reference path="[tsd.d.ts�t�@�C���̃p�X]" />

#### ��
    /// <reference path="../../typings/tsd.d.ts" />


## gulp

�l�X�ȑ�����A�^�X�N�Ƃ��ĊǗ������������邽�߂̃c�[���B
gulpfile��JavaScript�R�[�h���L�q���邱�Ƃ��ł��A
gulp.task()�ɏ������e���L�q���邱�ƂŁA
gulp�R�}���h�̑������Ɏw�肵�Ď��s���邱�Ƃ��ł���B

### �C���X�g�[��
    $ npm install -g gulp


### gulpfile.js(�T���v��)

    'use strict';
    
    var gulp = require('gulp');
    var typescript = require('gulp-typescript');
    
    var typescriptProject = typescript.createProject({
      module: 'commonjs',
      target: 'ES5',
      removeComments: true,
      sortOutput: true
    });
    
    gulp.task('build', function() {
      gulp.src('../src/ts/**/*.ts')
        .pipe(typescript(typescriptProject))
        .js
        .pipe(gulp.dest('../src/js/'));
    });
    
    /* watch */
    gulp.task('watch', function() {
      // �Ď��Ώۃt�@�C���ɕύX����������A�����I�Ɏ��s
    });
    
    /* test */
    gulp.task('espower', function() {
      // mocha�Ȃǂ̒P�̃e�X�g�c�[�������s
    });


## expressjs�{TypeScript
                              
app.ts(expressjs��app.js��TypeScript��)

    /// <reference path="../../typings/tsd.d.ts" />
    
    import express = require('express');
    import path = require('path');
    import favicon = require('serve-favicon');
    import logger = require('morgan');
    import cookieParser = require('cookie-parser');
    import bodyParser = require('body-parser');
    import stylus = require('stylus');
    
    import routes = require('./routes/index');
    import users = require('./routes/users');
    
    var app = express();
    
    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');
    
    // uncomment after placing your favicon in /public
    //app.use(favicon(__dirname + '/public/favicon.ico'));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(stylus.middleware(path.join(__dirname, 'public')));
    app.use(express.static(path.join(__dirname, 'public')));
    
    app.use('/', routes);
    app.use('/users', users);
    
    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
      var err = new Error('Not Found');
      err.status = 404;
      next(err);
    });
    
    // error handlers
    
    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development') {
      app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
          message: err.message,
          error: err
        });
      });
    }
    
    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: {}
      });
    });

