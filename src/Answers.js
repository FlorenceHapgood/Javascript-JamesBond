function Answers() {

}

Answers.prototype.qOne = function(user_answer) {
  if (user_answer === 'Dr_No') {
    return 'Ok...well done';
  } else {
    return 'WRONG! The answer is Dr_No';
  }
};

Answers.prototype.qTwo = function(user_answer) {
  if (user_answer === 'Goldfinger_Two') {
    return 'Hm...not bad, not bad';
  } else {
    return 'You call yourself a James Bond fan? The answer is Goldfinger.';
  }
};

Answers.prototype.qThree = function(user_answer) {
  if (user_answer === 'John_Barry') {
    return 'Not bad at all';
  } else {
    return 'Please...no. John Barry is the correct answer.';
  }
};

Answers.prototype.qFour= function(user_answer) {
  if (user_answer === 'Pierce_Brosnan') {
    return 'Impressive';
  } else {
    return 'Nah. It was Pierce Brosnan.';
  }
};

Answers.prototype.qFive= function(user_answer) {
  if (user_answer === 'Casino_Royale') {
    return 'Nice, very nice';
  } else {
    return 'Nahuh. It was Casino_Royale.';
  }
};
