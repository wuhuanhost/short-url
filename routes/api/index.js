var Router = require('koa-router');
var router = new Router();
var user_router = require('./user_router.js');

router.use('/users', user_router.routes(), user_router.allowedMethods());


module.exports = router;