const Koa = require('koa');
const app = new Koa();
const render=require('koa-ejs');
const router=require('./routes/router');
const path=require('path');
const staticServer = require('koa-static');


//指定静态文件目录，js、css、images等
app.use(staticServer(path.join(__dirname,'public')));


//使用ejs模板渲染
render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'template',
  viewExt: 'ejs',
  cache: false,
  debug: true
});


//设置路由
app.use(router.routes());


// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.on('error', function(err){
  console.error('server error', err);
});

app.listen(3000);


//学习资料
//http://book.apebook.org/minghe/koa-action/xtemplate/xtemplate.html