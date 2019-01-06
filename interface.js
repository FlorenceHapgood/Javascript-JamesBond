$(document).ready(function() {
  var answers = new Answers()

  $('#First_User_Ans').change(function(event) {
    event.preventDefault();
    var user_answer = $('#First_User_Ans').val();
    $('#First_Ans').text(answers.qOne(user_answer))
  })

  $('#Second_User_Ans').change(function(event) {
    event.preventDefault();

    var user_answer = $("#Second_User_Ans input[type='radio']:checked").val();
    $('#Second_Ans').text(answers.qTwo(user_answer))
  })



  $('#Third_User_Ans').change(function(event){
    event.preventDefault();
    var user_answer = $('#Third_User_Ans').val()
    $('#Third_Ans').text(answers.qThree(user_answer))
  })

})
