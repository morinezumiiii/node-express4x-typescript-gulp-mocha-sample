/// <reference path="./../libs/typings/tsd.d.ts" />

import express = require('express');
var router = express.Router();

//router.hello ((msg: string) => {
//  console.log(msg);
//});

router.get('/', (req: express.Request, res: express.Response, next: Function) => {
  res.render('index', {
    title: 'Express'
  });
});


router.get('/:msg', (req: express.Request, res: express.Response, next: Function)  => {
  res.render('index', {
    title: 'Expresss'
  });
});

export = router;