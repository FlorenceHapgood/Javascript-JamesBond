function Answers(){

}

  Answers.prototype.qOne = function(user_answer){
    if(user_answer === 'Dr_No') {
      return 'Ok...well done'
    } else {
      return 'WRONG!'
    }
  }

  Answers.prototype.qTwo = function(user_answer){
    if(user_answer === 'Goldfinger') {
      return 'Hm...not bad, not bad'
    } else {
      return 'You call yourself a James Bond fan?'
    }
  }
