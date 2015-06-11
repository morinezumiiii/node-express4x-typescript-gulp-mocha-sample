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
    �� .idea/        <- IntelliJ�v���W�F�N�g���p�f�B���N�g��
    �� bin/          <- Node.js�A�v���P�[�V�����T�[�o(�N�_)
    �� node_modules/ <- Node.js�p�b�P�[�W
    �� src/          <- �J���\�[�X�p�f�B���N�g��
    �� �� js         <- TypeScript����g�����X�p�C�����ꂽJavaScript�t�@�C��
    �� �� �� public/
    �� �� �� �� images/
    �� �� �� �� javascripts/
    �� �� �� ��  �� vendor/
    �� �� �� ��  �� [Your JavaScript file]
    �� �� �� �� stylesheets/
    �� �� ��     �� hoge.css
    �� �� �� routes/
    �� �� ��  �� index.js
    �� �� ��  �� hoge.js
    �� �� �� views/
    �� �� ��  �� index.jade
    �� �� ��  �� hoge.jade
    �� �� �� app.js
    �� �� ts         <- �J���pTypeScript�\�[�X�f�B���N�g��(��{�͂��̉��̃\�[�X�R�[�h��ҏW����)
    ��    �� public/ <- �N���C�A���g�T�C�h���J�p�f�B���N�g��(�摜��CSS�AJavaScript�v���O�C���Ȃ�)
    ��    �� �� images/
    ��    �� �� javascripts/
    ��    �� ��  �� vendor/
    ��    �� ��  �� [Your JavaScript file]
    ��    �� �� stylesheets/
    ��    ��     �� hoge.stylus
    ��    �� routes/   <- express��Routing�p�f�B���N�g��(���[�U���N�G�X�g���������镔��)
    ��    ��  �� index.ts
    ��    ��  �� hoge.ts
    ��    �� views/    <- express��View(Jade�e���v���[�g�G���W�����g�p)
    ��    ��  �� index.jade
    ��    ��  �� hoge.jade
    ��    �� libs/     <- TypeScript�^��`�t�@�C���ȂǁA���C�u�����ނ��i�[����f�B���N�g��
    ��    ��  �� typings  <- tsd�R�}���h�ɂĎ擾�����^��`�t�@�C���i�[�p�̃f�B���N�g��
    ��    ��  ��  �� hoge.ts.d
    ��    ��  ��  �� fuga.ts.d
    ��    ��  �� tsd.json <- tsd�R�}���h��--save�I�v�V�����ɂĒǋL�����tsd���t�@�C��
    ��    �� app.ts  <- express�A�v���P�[�V������main�ɑ�������\�[�X�t�@�C��
    �� test/    <- �e�X�g�R�[�h�i�[�p�f�B���N�g��
    �� �� unit  <- ���j�b�g�e�X�g�p(express�t���[�����[�N�Ŏg�p����t�@�C����1��1)
    �� �� �� routes/
    �� �� �� �� index.js
    �� �� �� �� hoge.js
    �� �� �� public/
    �� �� �� �� fuga.js
    �� �� �� app.js
    �� �� scenario <- �V�i���I�e�X�g�p(���O�C������A���[�U����Ȃǂ��܂Ƃ߂��e�X�g)
    ��    �� login.js
    ��    �� users.js
    ��    �� hoge.js
    �� dest/         <- �f�v���C�p�f�B���N�g��
    �� gulpfile.js   <- gulp�ݒ�t�@�C��
    �� package.json  <- Node.js�p�b�P�[�W�ݒ�t�@�C��
    �� [project-name].iml  <--- IntelliJ �v���W�F�N�g�t�@�C��
