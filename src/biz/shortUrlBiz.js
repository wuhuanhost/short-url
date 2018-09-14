const shortUrlDao = require('../dao/shortUrlDao.js')
const baseUtils = require('../utils/base_utils.js')
const async = require('async')

/**
 * 根据urlcode获取url
 */
exports.getUrlByUrlCode = function(urlcode) {
    let tablename = 'short_url_'
    let urlNumber = baseUtils.string62to10(urlcode)
    let tempUrlNumber = urlNumber.toString()
    let urlNumberLastNumber = tempUrlNumber.substr(tempUrlNumber.length - 1, 1)
    tablename = tablename + urlNumberLastNumber
    console.log(urlNumber)
    console.log(tempUrlNumber)
    console.log(urlNumberLastNumber)
    console.log(urlNumberLastNumber)
    console.log(tablename)
    return new Promise(function(resolve, reject) {
        shortUrlDao.queryUrlByCode(urlcode, tablename, function(err, result) {
            if (!err && result[0] && result[0].url !== undefined) {
                console.log(result[0].url)
                resolve(result[0].url)
            } else {
                reject(err)
            }
        })
    })
}

/**
 **通过url获取短连接
 **/
exports.getShortUrl = function(url, cb) {
    let maxIndex = 0 // 当前数据库中的index的最大值
    let urlCode = ''
    let tablename = 'short_url_'
    let domain = ''
    async.series([function(callback) {
        // 获取系统配置表中最大记录值
        shortUrlDao.readSysConfig('max_index', function(err, result) {
            if (!err) {
                // console.log(result)
                maxIndex = parseInt(result[0].value)
                    // 将记录值+1，并且获取记录值的最后一位。然后将记录值转换成62进制
                maxIndex = maxIndex + 1
                let tempMaxIndex = maxIndex.toString()
                let maxIndexLastNumber = tempMaxIndex.substr(tempMaxIndex.length - 1, 1)
                    // console.log(maxIndex+"          "+maxIndexLastNumber);
                tablename = tablename + maxIndexLastNumber
                urlCode = baseUtils.number10to62(maxIndex)
                callback(null, 'success')
            } else {
                callback(err, null)
            }
        })
    }, function(callback) {
        // 数据存储到表名为（short_url_记录值最后一位）
        shortUrlDao.addShortUrl(urlCode, url, tablename, function(err, result) {
            if (!err) {
                callback(null, 'success')
            } else {
                callback(err, null)
            }
        })
    }, function(callback) {
        // 配置表中的最大记录值+1
        shortUrlDao.updateSysConfig('max_index', maxIndex, function(err, result) {
            if (!err) {
                callback(null, 'success')
            } else {
                callback(err, null)
            }
        })
    }, function(callback) {
        shortUrlDao.readSysConfig('domain', function(err, result) {
            // 读取系统配置表中的短连接域名
            if (!err) {
                domain = result[0].value
                callback(null, 'success')
            } else {
                callback(err, null)
            }
        })
    }], function(err, results) {
        if (!err) {
            // 组装短连接给前端
            let shorturl = domain + '/' + urlCode
            cb(null, shorturl)
        } else {

        }
    })
}