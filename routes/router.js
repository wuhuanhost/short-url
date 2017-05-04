var Router = require('koa-router');
var router = new Router();

router.get('/', async (ctx, next)=> {
    ctx.state = ctx.state || {};
    ctx.state.now = new Date();
    ctx.state.ip = ctx.ip;
    ctx.state.version = '2.0.0';
    const users = [{ name: 'Dead Horse' }, { name: 'Jack' }, { name: 'Tom' }];
    await ctx.render('content', {
    users
  });
});
 
module.exports = router;