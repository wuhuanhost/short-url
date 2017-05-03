var Router = require('koa-router');
var router = new Router();

router.get('/', function (ctx, next) {
	console.log(12321);
	ctx.render('template',{title:"hello world!!!"});
	next();
});
 

module.exports = router;