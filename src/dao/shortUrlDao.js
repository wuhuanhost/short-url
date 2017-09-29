const db=require('../utils/db.js');

/**
**通过code和表名查询对应的记录
**/
exports.queryUrlByCode=function(code,tabname,cb){
	var sql="SELECT url FROM "+tabname+" WHERE code=?";
	var params=[code];
	db.execSql(sql,params,cb);
};



/**
**添加短连接对应记录
**/
exports.addShortUrl=function(code,url,tabname,cb){
	var sql="INSERT INTO "+tabname+"(`code`,`url`) values(?,?)";
	var params=[code,url];
	db.execSql(sql,params,cb);
};



/**
**读取系统配置表数据
**/
exports.readSysConfig=function(keyword,cb){
	var sql="SELECT * FROM sys_config WHERE keyword=?";
	var params=[keyword];
	db.execSql(sql,params,cb);
};



/**
**修改系统配置表数据
**/
exports.updateSysConfig=function(keyword,value,cb){
	var sql="UPDATE sys_config SET value=? WHERE keyword=?";
	var params=[value,keyword];
	db.execSql(sql,params,cb);
};




/**
**写入数据到系统配置表
**/
exports.writeSysConfig=function(obj,cb){
	var sql="INSERT INTO sys_config(`keyword`,`value`,`remark`) values(?,?,?)";
	var params=[obj.keyword,obj.value,object.remark];
	db.execSql(sql,params,cb);
};


/**
**删除配置文件记录
**/
exports.deleteSysConfig=function(keyword,cb){
	var sql="DELETE FROM sys_config WHERE keyword=?";
	var params=[keyword];
	db.execSql(sql,params,cb);
};

