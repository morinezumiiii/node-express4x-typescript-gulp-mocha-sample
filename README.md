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
    $ npm install gulp-tsd

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

modified then, run 'gulp build'.

#### gulp test

Run unit testing for JavaScript source files(src/js).
using unit test framework is mocha.

#### gulp deploy

Deploy source files(src/js) to dest directory(dest/), 
and minify JavaScript source files.