$('#introvert').click(function(){
  $('#tooltip').slideToggle()
})
$('#tooltip').click(function(){
  $('#tooltip').slideToggle()
})

$('#blank').click(function(){
  $('html, body').animate({
    scrollTop: $('#post').offset().top
  }, 500);
})

$('#blank').click(function(){
  $('#post').val('')
})

$('#gratitude').click(function(){
  $('html, body').animate({
    scrollTop: $('#post').offset().top
  }, 500);
})

$('#gratitude').click(function(){
  $('#post').html('Today I am grateful for...')
})

$('#save').click(function(){
  var post = $('textarea').val()
  alert('Submitted! Click on My Journal to see your entry')
  $('#post').val('')
  $('#journal').append('<p>' + post + '</p>')
  $('#zero-posts').remove()
})