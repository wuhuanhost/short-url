var redis = require("redis");
var Promise = require('bluebird');

function RedisInstance() {
    this.client = null;
    this.connect = function() {
        //获取链接实例
        this.client = redis.createClient({
            host: "127.0.0.1",
            port: 6379,
        });
        //监听Error事件
        this.client.on("error", function(err) {
            console.error("Error " + err);
        });
        //监听Ready事件
        this.client.on('ready', function() {
            console.log('Success: 客服端链接服务器成功！');
        });
    };
};

/**
 * 初始化方法
 * @return {[type]} [description]
 */
RedisInstance.prototype.init = function() {
    this.connect(); // 创建连接
    const clientInstance = this.client;

    // 重写get和set方法
    const get = clientInstance.get;
    const set = clientInstance.set;

    //总写set方法
    clientInstance.set = function(key, resultue) {
        return new Promise(function(reslove, reject) {
            if (resultue !== undefined) {
                set.call(clientInstance, key, JSON.stringify(resultue), function(err, result) {
                    if (err) {
                        reject(err);
                    } else {
                        reslove(JSON.stringify(result));
                    }
                });
            } else {
                reject("11111111111111===========");
            }
        });
    };

    //重写get方法
    clientInstance.get = function(key) {
        return new Promise((reslove, reject) => {
            get.call(clientInstance, key, function(err, resultue) {
                if (err) {
                    console.log('redis.get: ', key, err);
                    reject(err);
                } else {
                    reslove(JSON.parse(resultue));
                }
            });
        });
    };
    return clientInstance;
};

var redisInstance = new RedisInstance().init();


redisInstance.set("test1", "123").
then(function(result) {
    console.log( result)
    return redisInstance.set('test2', "456");
}).then(function(result) {
    console.log(result)
    return redisInstance.set('test3', "789");
}).then(function(result) {
    console.log(result)
    return redisInstance.get('test3');
}).then(function(result) {
    console.log(result)
});
