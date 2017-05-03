var Router = require('koa-router');
var router = new Router();


router.get('/', function (ctx, next) {
	console.log(12321);
	ctx.render('body',{title:"hello world!!!"});
});
 
module.exports = router;