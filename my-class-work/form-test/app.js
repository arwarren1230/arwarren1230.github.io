$(document).ready(function () {

  $('#myForm').submit(function(){
    var name = $('#name-input').val()
    $('#target').text(name)
  })


})
