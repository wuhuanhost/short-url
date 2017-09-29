const ApiError = require('../utils/api_msg/ApiMsg');
const ApiErrorNames = require('../utils/api_msg/ApiMsgNames');
const shortUrlBiz = require('../biz/shortUrlBiz.js');
//获取用户
exports.getUser = async(ctx, next) => {
    //如果id != 1抛出API 异常
    // if(ctx.query.id != 1){
    //     throw new ApiError(ApiErrorNames.USER_NOT_EXIST);
    // }
    console.log(ctx.request.body.url);
    var url = ctx.request.body.url;
    let shorturl = await getShortUrlPromise(url);
    console.log(shorturl);
    ctx.body = shorturl;
    console.log("-----------------------------------------------2")
}

/**
 * 根据url编码获取对应的url
 */
exports.getUrlByUrlCode = async(ctx, next) => {
    console.log(ctx.params.urlcode)
    var urlcode = ctx.params.urlcode;
    let url = await shortUrlBiz.getUrlByUrlCode(urlcode);
    ctx.response.redirect(url||"http://localhost:8080");
}


function getShortUrlPromise(url) {
    return new Promise(function (resolve, reject) {
        shortUrlBiz.getShortUrl(url, function (err, result) {
            if (!err) {
                resolve(result);
            } else {
                reject();
            }
        })
    });
}