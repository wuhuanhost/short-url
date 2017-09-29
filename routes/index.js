var Router = require('koa-router');
var router = new Router();
var testControler=require('../src/controller/test_controller.js');

router.get(':urlcode',testControler.getUrlByUrlCode);


router.get('/', async(ctx, next) => {
  console.error("/")
  ctx.state = ctx.state || {};
  ctx.state.now = new Date();
  ctx.state.ip = ctx.ip;
  ctx.state.version = '2.0.0';
  const users = [{
    name: 'Dead Horse'
  }, {
    name: 'Jack'
  }, {
    name: 'Tom'
  }];
  await ctx.render('content', {
    users
  });
});




module.exports = router;