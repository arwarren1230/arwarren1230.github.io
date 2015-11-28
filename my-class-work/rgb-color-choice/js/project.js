function changeColor () {
  var red = document.getElementById('red').value
  var green = document.getElementById('green').value
  var blue = document.getElementById('blue').value
  document.getElementById('colorful-text').innerHTML = 'rgb(red,green,blue)';
}
Document.getElementById('color-button').onclick = 'changeColor()'