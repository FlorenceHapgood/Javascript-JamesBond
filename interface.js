$(document).ready(function() {
  var answers = new Answers()

  $('#First_User_Ans').change(function(event) {
    event.preventDefault();

    var user_answer = $('#First_User_Ans').val();
    console.log(user_answer)
    $('#First_Ans').text(answers.qOne(user_answer))
  })

})
