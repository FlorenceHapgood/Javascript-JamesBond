$(document).ready(function() {
  var answers = new Answers()
  $('#Q1').text(answers.qOne())


  $('#Q1_User_Ans').change(function(event) {
    event.preventDefault();
    //var user_answer = $('#Q1_User_Ans').val();
    $('#Q1_Ans').text(answers.qOneAnswer())
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

})
