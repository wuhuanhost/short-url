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
exports.addShortUrl=function(code,tabname,cb){
	var sql="INSERT INTO "+tabname+"(`code`,`url`) values(?,?)";
	var params=[code];
	db.execSql(sql,params,cb);
};



/**
**读取系统配置表数据
**/
exports.readSysConfig=function(key,cb){
	var sql="SELECT * FROM sys_config WHERE key=?";
	var params=[key];
	db.execSql(sql,params,cb);
};



/**
**修改系统配置表数据
**/
exports.updateSysConfig=function(key,value,cb){
	var sql="UPDATE sys_config SET value=? WHERE key=?";
	var params=[value,key];
	db.execSql(sql,params,cb);
};




/**
**写入数据到系统配置表
**/
exports.writeSysConfig=function(obj,cb){
	var sql="INSERT INTO sys_config(`key`,`value`,`remark`) values(?,?,?)";
	var params=[obj.key,obj.value,object.remark];
	db.execSql(sql,params,cb);
};


/**
**删除配置文件记录
**/
exports.deleteSysConfig=function(key,cb){
	var sql="DELETE FROM sys_config WHERE key=?";
	var params=[key];
	db.execSql(sql,params,cb);
};

