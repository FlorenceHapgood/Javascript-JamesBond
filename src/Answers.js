function Answers(){

}

Answers.prototype.qOne = function(user_answer){
  if(user_answer === 'Dr_No') {
    return 'Ok...well done'
  } else {
    return 'WRONG!'
  }
}
