var Router = require('koa-router');
var router = new Router();
var testControler=require('../../src/controller/test_controller.js');

router.get('/getUser',testControler.getUser);
 
module.exports = router;