$(document).ready(function () {
  $('#heart').click(like);
  function like () {
    $('#heart').html('<i class="fa fa-heart"></i> HEART');
    $('#heart').css('color', 'red');
    $('#dude').css('opacity', '0.5');
    $('.profilePic').css('background-color', 'red');
    $('#reject').css('color', 'black');
  }
  $('#reject').click(reject);
  function reject () {
    $('#reject').css('color', 'blue');
    $('#dude').css('opacity', '0.5');
    $('.profilePic').css('background-color', 'blue');
    $('#heart').css('color', 'black');
  }
})