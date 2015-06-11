# TypeScript＋ExpressJS＋gulp開発環境作成メモ

## Node.js環境

* Windowsの場合は、公式サイトよりインストーラをダウンロードし、インストール
* コマンドライン上でnpmコマンドが使えるようになればOK


## tsc

* TypeScriptコードを、JavaScriptにコンパイルするコマンド(コンパイラ)。

### インストール
    $ npm install -g tsc
    $ npm install -g tsc
   

## tsd

NPMで管理されているモジュールを使用する場合、
それらの型定義情報をTypeScriptコード内に読み込ませる必要があるので、
tsdを使用して、型定義ファイルを管理する。
型定義ファイルはtypingsディレクトリ内に保存される。

### インストール
    $ npm install -g tsd

以下のコマンドは、型定義ファイルを取得し、型定義ファイル管理ファイル(tsd.d.tsに)保存する。

#### 用法
    $ tsd query [モジュール名] --action [アクション名(installなど)]
    --resolveオプションは、インストールした型定義情報すべてをtypings/tsd.d.tsにて管理する

#### コマンド例
    $ tsd query express --action install --resolve --save

以下のコメントをアプリケーションの.tsファイルの先頭に記述することで、型定義情報を読み込ませることが出来る。

#### 用法
    /// <reference path="[tsd.d.tsファイルのパス]" />

#### 例
    /// <reference path="../../typings/tsd.d.ts" />


## gulp

様々な操作を、タスクとして管理し自動化するためのツール。
gulpfileはJavaScriptコードを記述することができ、
gulp.task()に処理内容を記述することで、
gulpコマンドの第一引数に指定して実行することができる。

### インストール
    $ npm install -g gulp


### gulpfile.js(サンプル)

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
      // 監視対象ファイルに変更があったら、自動的に実行
    });
    
    /* test */
    gulp.task('espower', function() {
      // mochaなどの単体テストツールを実行
    });


## expressjs＋TypeScript
                              
app.ts(expressjsのapp.jsのTypeScript版)

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

