var router = require("../../../src/js/routes/");
var assert = require("assert");

describe('router', function(){

  describe('get(/)', function(){

    it('Hello mocha', function(){
      //req.msg = 'mocha';
      router.get('/', function(req, res, next) {
        assert.equal(res.title, 'Express');
      });
    });
  });
});