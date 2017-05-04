const Koa = require('koa');
const app = new Koa();
const render=require('koa-ejs');
const router=require('./routes/router');
const path=require('path');
const staticServer = require('koa-static');
const onerror = require('koa-onerror')
const logger = require('koa-logger')

//错误消息打印到前台页面
onerror(app);

//访问日志
app.use(logger());

//指定静态文件目录，js、css、images等
app.use(staticServer(path.join(__dirname,'public')));


//使用ejs模板渲染html页面
render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: true
});

//设置路由
app.use(router.routes())
   .use(router.allowedMethods());


//404
app.use(async (ctx) => {
  ctx.status = 404;
  await ctx.render('404')
});


//控制台打印错误信息
app.on('error', function(err){
  console.error('server error', err);
});

module.exports = app;
