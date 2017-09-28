const shortUrlDao=require('../biz/shortUrlDao.js');
const async=require('async');


/**
**通过url获取短连接
**/
exports.getShortUrl=function(url,cb){
	//获取系统配置表中最大记录值
	//将记录值+1，然后转换成62进制，并且获取记录值的最后一位
	//数据存储到表名为（short_url_记录值最后一位）
	//将数据保存数据库
	//配置表中的最大记录值+1
	//组装短连接给前端

}