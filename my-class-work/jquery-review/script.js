$(document).ready(function () {
  $('.box').css('background-color', 'blue')
  $('.box').text('Hello')
  $('#blue').click(changeSize)
    function changeSize () {
      $('#blue').css({'height': '500px', 'width': '500px'});
    }
  $('#red').click(grow)
    function grow () {
      $('#red').css({'height': '500px', 'width': '500px'});
    }
})