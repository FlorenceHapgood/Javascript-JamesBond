function Answers() {

}

Answers.prototype.qOne = function(user_answer) {
  if (user_answer === 'Dr_No') {
    return 'Ok...well done';
  } else {
    return 'WRONG!';
  }
};

Answers.prototype.qTwo = function(user_answer) {
  if (user_answer === 'Goldfinger_Two') {
    return 'Hm...not bad, not bad';
  } else {
    return 'You call yourself a James Bond fan?';
  }
};

Answers.prototype.qThree = function(user_answer) {
  if (user_answer === 'John_Barry') {
    return 'Not bad at all';
  } else {
    return 'Please...no';
  }
};

Answers.prototype.qFour= function(user_answer) {
  if (user_answer === 'Pierce_Brosnan') {
    return 'Impressive';
  } else {
    return 'Nah';
  }
};

Answers.prototype.qFive= function(user_answer) {
  if (user_answer === 'Casino_Royale') {
    return 'Nice, very nice';
  } else {
    return 'Nahuh';
  }
};
