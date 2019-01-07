$(document).ready(function() {
  let answers = new Answers();

  $('#First_User_Ans').change(function() {
    let user_answer = $('#First_User_Ans input[type=\'radio\']:checked').val();
    $('#First_Ans').text(answers.qOne(user_answer));
  });

  $('#Second_User_Ans').change(function() {
    let user_answer = $('#Second_User_Ans input[type=\'radio\']:checked').val();
    $('#Second_Ans').text(answers.qTwo(user_answer));
  });


  $('#Third_User_Ans').change(function() {
    let user_answer = $('#Third_User_Ans input[type=\'radio\']:checked').val();
    $('#Third_Ans').text(answers.qThree(user_answer));
  });

  $('#Fourth_User_Ans').change(function() {
    let user_answer = $('#Fourth_User_Ans input[type=\'radio\']:checked').val();
    $('#Fourth_Ans').text(answers.qFour(user_answer));
  });

  $('#Fifth_User_Ans').change(function() {
    let user_answer = $('#Fifth_User_Ans input[type=\'radio\']:checked').val();
    $('#Fifth_Ans').text(answers.qFive(user_answer));
  });

});
