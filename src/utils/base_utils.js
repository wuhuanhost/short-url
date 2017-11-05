/**
 * 10进制数字转64进制字符串
 * @param  {[type]} number [description]
 * @return {[type]}        [description]
 */
exports.number10to62 = function (number) {
  var chars = '0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ'.split('')
  var radix = chars.length // 基数
  var qutient = number // 系数
  var arr = []
  do {
    var mod = qutient % radix
    qutient = (qutient - mod) / radix
    arr.unshift(chars[mod])
  } while (qutient)

  return arr.join('')
}

/**
 * 64进制字符串转10进制数字
 * @param  {[type]} numberCode [description]
 * @return {[type]}             [description]
 */
exports.string62to10 = function (numberCode) {
  var chars = '0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ'
  var radix = chars.length
  // var numberCode = String(numberCode)
  var len = numberCode.length
  var i = 0
  var originNumber = 0
  while (i < len) {
    originNumber += Math.pow(radix, i++) * chars.indexOf(numberCode.charAt(len - i) || 0)
  }
  return originNumber
}
