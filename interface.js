$(document).ready(function() {
  var questions = new Questions()
  $('#Q1').text(questions.qOne())
})

$('#Dr_No').click(function(){
  $('#Q1_Ans').text('Ok...well done')
})

$('#Goldfinger').click(function(){
  $('#Q1_Ans').text('WRONG!')
})

$('#From_Russia_With_Love').click(function(){
  $('#Q1_Ans').text('WRONG!')
})
