/// <reference path="./../libs/typings/tsd.d.ts" />

import express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req: express.Request, res: express.Response, next: Function) => {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/hoge', (req: express.Request, res: express.Response, next: Function) => {
  res.render('index', {
    title: 'Express'
  });
});

export = router;
