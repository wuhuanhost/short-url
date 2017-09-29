var Router = require('koa-router');
var router = new Router();
var testControler=require('../../src/controller/test_controller.js');

router.post('/getUser',testControler.getUser);
 
module.exports = router;