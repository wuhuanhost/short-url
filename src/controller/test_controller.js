const ApiError = require('../utils/api_msg/ApiMsg');
const ApiErrorNames = require('../utils/api_msg/ApiMsgNames');
const shortUrlBiz=require('../biz/shortUrlBiz.js');
//获取用户
exports.getUser = async (ctx, next) => {
   //如果id != 1抛出API 异常
    if(ctx.query.id != 1){
        throw new ApiError(ApiErrorNames.USER_NOT_EXIST);
    }
	console.log(">>>>>>>>>>>>>>>>>>>>>")
    ctx.body = {
        username: '测试数据',
        age: 30
    }
}