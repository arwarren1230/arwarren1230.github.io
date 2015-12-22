$(document).ready(function () {

  var total = 0;

  $('.math div').click(function () {
    var num = $(this).text()
    num = parseInt(num)
    total = total + num
    $('#out').html(total);
  })
  
})