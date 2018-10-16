# short-url
> 基于nodejs+koa2+mysql的短网址服务。

## 功能列表

* [x]长链接转换为短连接
* [x]短连接生成二维码
* [x]短连接还原为长链接
* [x]数据库分表(数据量大的时候可以加快检索速度)
* [-]通过缓存的机制，限制同一链接在一段时间内的(例如:一周之内只能提交一次，即缓存每周清理一次)提交次数，在一定程度上做限制，不可能保证所有时间同一链接只能提交一次，那样数据太多，查询比较慢，如果将缓存清空时间设置长，那么缓存占用空间，并且缓存中的数据和数据库中的数据量就会相等了，启动服务器的时间也会比较长，缓存的意义也就不大了，要么时间换空间，要么空间换时间，彼此中和的选择就是限制在一定时间内同一链接的提交次数就够了。

## Getting Started

Node v4.0+ , Mysql5.5+ required.

```shell
$ git clone ...
$ cd short_url
$ npm install .
$ npm run dev
```

## Open in Browser.....

> http://localhost:8080/
