/**
 * 10进制数字转64进制字符串
 * @param  {[type]} number [description]
 * @return {[type]}        [description]
 */
exports.number10to64=function(number) {
    var chars = '0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ-_'.split(''),
        radix = chars.length,//基数
        qutient = number,//系数
        arr = [];
    do {
        mod = qutient % radix;
        qutient = (qutient - mod) / radix;
        arr.unshift(chars[mod]);
    } while (qutient);

    return arr.join("");
}


/**
 * 64进制字符串转10进制数字
 * @param  {[type]} number_code [description]
 * @return {[type]}             [description]
 */
exports.string64to10=function(number_code) {
  var chars = '0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ_-',
    radix = chars.length,
    number_code = String(number_code),
    len = number_code.length,
    i = 0,
    origin_number = 0;
  while (i < len) {
    origin_number += Math.pow(radix, i++) * chars.indexOf(number_code.charAt(len - i) || 0);
  }
  return origin_number;
}
