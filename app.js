const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const render=require('koa-ejs');
const path=require('path');
const staticServer = require('koa-static');
const onerror = require('koa-onerror');
const logger = require('koa-logger');
const logUtil = require('./src/utils/log_utils.js');
const convert = require('koa-convert');
const index=require('./routes/index');
const api=require('./routes/api/index');

//easy_monitor 服务器监控
//const easyMonitor = require('easy-monitor');
//easyMonitor('short-url');

app.use(convert(logger()));

//错误消息打印到前台页面
onerror(app);

//访问日志打印在控制台
app.use(logger());

//详细日志记录到文件
app.use(async (ctx, next) => {
  //响应开始时间
  const start = new Date();
  //响应间隔时间
  var ms;
  try {
    //开始进入到下一个中间件
    await next();
    ms = new Date() - start;
    //记录响应日志
    logUtil.logResponse(ctx, ms);
  } catch (error) {
    ms = new Date() - start;
    //记录异常日志
    logUtil.logError(ctx, error, ms);
  }
});


//使用api接口格式化返回的数据
const response_formatter = require('./middlewares/response_formatter');

//仅对/api开头的url进行格式化处理
app.use(response_formatter('^/api'));


//设置路由
router.use('/', index.routes(), index.allowedMethods());
router.use('/api', api.routes(), api.allowedMethods());
app.use(router.routes(), router.allowedMethods());


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


//404页面
app.use(async (ctx) => {
  ctx.status = 404;
  await ctx.render('404')
});


//打印错误信息
app.on('error', function(err, ctx){
  console.log(err);
  logger.error('server error', err, ctx);
});


module.exports = app;
