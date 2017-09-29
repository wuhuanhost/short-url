$(document).ready(function () {

  $("#getShortUrl").click(function () {
    var url = $("#url").val();
    var data = {
      url: url
    };
    $.post('http://localhost:8080/api/users/getUser', data, function (result) {
      console.log(result);
      $("#shorturl").html(result.data);
      $('#qrcode').html("");
      $('#qrcode').qrcode(result.data);
    })

  });

});