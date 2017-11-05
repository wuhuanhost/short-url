$(document).ready(function () {
  $('#getShortUrl').click(function () {
    var url = $('#url').val()
    // alert(url);
    var data = {
      url: url
    }
    $.post('http://localhost:8080/api/users/getUser', data, function (result) {
      console.log(result)
      $('.mask').show()
      $('#shorturl').text(result.data)
      $('#qrcode').html('')
      $('#qrcode').qrcode(result.data)
    })
  })

  $('.mask').click(function () {
    $(this).hide()
  })

  $('.go').click(function () {
    // window.location.href = $("#shorturl").text();
    window.open($('#shorturl').text(), '_blank')
  })

  $('.copy').click(function () {
    alert('正在添加中，暂时使用手动选中复制.......')
  })
})
