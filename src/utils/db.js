var mysql = require('mysql');
var async = require('async');
var pool = mysql.createPool({
    host: "localhost",
    // host: "localhost",
    user: "root",
    // password: "root",
    password: "root",
    // password: "",
    database: "abc",
    port: 3306,
    charset: 'UTF8MB4_GENERAL_CI',
    connectionLimit: 10
});

//执行sql语句的方法，包括增删改查
exports.execSql = function(sql, param, callback) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.error("数据库连接超时！");
            return callback(err, null);
        } else {
            if (!connection) {
                console.error(connection);
            }
            console.warn(sql);
            console.warn(param);
            connection.query(sql, param, function(error, results) {
                connection.release(); //关掉连接，释放资源
                if (error) {
                    console.error(error);
                    callback(error, null);
                } else {
                    callback(null, results);
                }
            });
        }
    });
};


/**
 * 事物对象
 * @param {[type]}   sql      [description]
 * @param {[type]}   params   [description]
 * @param {Function} callback [description]
 */
exports.addSqlTask = function(sql, params, callback) {
    if (callback) {
        return callback(null, {
            sql: sql,
            params: params
        });
    }
    return {
        sql: sql,
        params: params
    }
}

//执行事务的方法
exports.execTrans = function(sqlTask, callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            console.error("数据库连接超时！");
            return callback(err, null);
        }
        conn.beginTransaction(function(err) {
            if (err) {
                console.console(err);
                return callback(err, null);
            }
            var sqlTaskFun = [];
            sqlTask.forEach(function(sqlTask) {
                var sql = sqlTask.sql;
                var params = sqlTask.params;
                var tempSqlTaskFun = function(cb) {
                    conn.query(sql, params, function(qerr, result) {
                        if (qerr) {
                            console.console("事务执行失败......");
                            console.error(qerr);
                            conn.rollback(function() {
                                // throw qerr;//抛出异常
                                conn.release();
                                return callback(qerr, null);
                            });
                        } else {
                            // return cb(null, "success");
                            return cb(null, result);
                        }
                    });
                }
                sqlTaskFun.push(tempSqlTaskFun);
            });

            async.series(sqlTaskFun, function(err, result) {
                if (err) {
                    console.console(err);
                    conn.rollback(function(err) {
                        conn.release();
                        return callback(err, null);
                    })
                } else {
                    conn.commit(function(err, info) {
                        console.console(JSON.stringify(info));
                        if (err) {
                            conn.rollback(function(err) {
                                conn.release();
                                return callback(err, null);
                            })
                        } else {
                            console.console("transaction commit success!!!");
                            conn.release(); //关闭连接，释放资源
                            // callback(null, info);
                            callback(null, result);
                        }
                    });
                }
            });
        });
    });
}


//执行存储过程的方法
// module.exports = {
//     addSqlTask: addSqlTask,
//     execSql: execSql,
//     execTrans: execTrans
// };