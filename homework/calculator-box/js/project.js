$(document).ready(function () {

  var total = 0;

  $('#a10').click(add10);
  function add10 () {
    total = total + 10;
    $('#out').text(total);
  }

  $('#a20').click(add20);
  function add20 () {
    total = total + 20;
    $('#out').text(total);
  }

  $('#a30').click(add30);
  function add30 () {
    total = total + 30;
    $('#out').text(total);
  }

  $('#n10').click(minus10);
  function minus10 () {
    total = total - 10;
    $('#out').text(total);
  }

  $('#n20').click(minus20);
  function minus20 () {
    total = total - 20;
    $('#out').text(total);
  }

  $('#n30').click(minus30);
  function minus30 () {
    total = total - 30;
    $('#out').text(total);
  }

  $('#red').click(red);
  function red () {
    $('#out').css('background-color', 'red')
  }

  $('#blue').click(blue);
  function blue () {
    $('#out').css('background-color', 'blue')
  }

  $('#out').click(clear);
  function clear () {
    total = 0;
    $('#out').text(total);
    $('#out').css('background-color', 'white')
  }
})