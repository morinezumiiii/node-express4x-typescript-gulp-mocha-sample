# Node.js + express 4.x + TypeScript + gulp + mocha framework sample project.
## Installation
### express

    $ npm install -g express

### gulp

    $ npm install -g gulp

### mocha

    $ npm install -g mocha

### TypeScript

    $ npm install -g tsc
    
## Preparing

### Install gulp plugins

    $ cd [project-root]
    $ npm install gulp-typescript --save-dev
    $ npm install gulp-tsd --save-dev
    $ npm install gulp-mocha --save-dev
    $ npm install gulp-util --save-dev

### Get the TypeScript definition files

    $ cd [project-root]/src/ts/libs
    $ tsd query express --action install --resolve --save
    $ tsd query serve-favicon --action install --resolve --save
    $ tsd query morgan --action install --resolve --save
    $ tsd query cookie-parser --action install --resolve --save
    $ tsd query body-parser --action install --resolve --save
    $ tsd query stylus --action install --resolve --save


## Usage

### gulp commands

#### gulp build

Transpile TypeScript source files(src/ts) to JavaScript source files(src/js).


#### gulp watch

Watch modify TypeScript source files(src/ts).

modified then, run 'gulp build' and 'gulp test'.

#### gulp test

Run unit testing for JavaScript source files(src/js).
using unit test framework is mocha.

#### gulp deploy

Deploy source files(src/js) to dest directory(dest/), 
and minify JavaScript source files.


## Project directory tree

    [project-root]
    ├ .idea/        <- IntelliJプロジェクト環境用ディレクトリ
    ├ bin/          <- Node.jsアプリケーションサーバ(起点)
    ├ node_modules/ <- Node.jsパッケージ
    ├ src/          <- 開発ソース用ディレクトリ
    │ ├ js         <- TypeScriptからトランスパイルされたJavaScriptファイル
    │ │ ├ public/
    │ │ │ ├ images/
    │ │ │ ├ javascripts/
    │ │ │ │  ├ vendor/
    │ │ │ │  └ [Your JavaScript file]
    │ │ │ └ stylesheets/
    │ │ │     └ hoge.css
    │ │ ├ routes/
    │ │ │  ├ index.js
    │ │ │  └ hoge.js
    │ │ ├ views/
    │ │ │  ├ index.jade
    │ │ │  └ hoge.jade
    │ │ └ app.js
    │ └ ts         <- 開発用TypeScriptソースディレクトリ(基本はこの下のソースコードを編集する)
    │    ├ public/ <- クライアントサイド公開用ディレクトリ(画像やCSS、JavaScriptプラグインなど)
    │    │ ├ images/
    │    │ ├ javascripts/
    │    │ │  ├ vendor/
    │    │ │  └ [Your JavaScript file]
    │    │ └ stylesheets/
    │    │     └ hoge.stylus
    │    ├ routes/   <- expressのRouting用ディレクトリ(ユーザリクエストを処理する部分)
    │    │  ├ index.ts
    │    │  └ hoge.ts
    │    ├ views/    <- expressのView(Jadeテンプレートエンジンを使用)
    │    │  ├ index.jade
    │    │  └ hoge.jade
    │    ├ libs/     <- TypeScript型定義ファイルなど、ライブラリ類を格納するディレクトリ
    │    │  ├ typings  <- tsdコマンドにて取得した型定義ファイル格納用のディレクトリ
    │    │  │  ├ hoge.ts.d
    │    │  │  └ fuga.ts.d
    │    │  └ tsd.json <- tsdコマンドの--saveオプションにて追記されるtsd情報ファイル
    │    └ app.ts  <- expressアプリケーションのmainに相当するソースファイル
    ├ test/    <- テストコード格納用ディレクトリ
    │ ├ unit  <- ユニットテスト用(expressフレームワークで使用するファイルと1対1)
    │ │ ├ routes/
    │ │ │ ├ index.js
    │ │ │ └ hoge.js
    │ │ ├ public/
    │ │ │ ├ fuga.js
    │ │ └ app.js
    │ └ scenario <- シナリオテスト用(ログイン操作、ユーザ操作などをまとめたテスト)
    │    ├ login.js
    │    ├ users.js
    │    └ hoge.js
    ├ dest/         <- デプロイ用ディレクトリ
    ├ gulpfile.js   <- gulp設定ファイル
    ├ package.json  <- Node.jsパッケージ設定ファイル
    └ [project-name].iml  <--- IntelliJ プロジェクトファイル
