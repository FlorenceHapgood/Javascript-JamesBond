$(document).ready(function() {
  var answers = new Answers()

  $('#First_User_Ans').change(function(event) {
    event.preventDefault();
    //var user_answer = $('#Q1_User_Ans').val();
    $('#First_Ans').text(answers.qOne())
  })

})
