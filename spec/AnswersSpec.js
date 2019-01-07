describe('Answers', function() {
  let answers;
  beforeEach(function() {
    answers = new Answers();
  });

  describe('qOne', function() {
    it('says if the answer is right', function() {
      expect(answers.qOne('Dr_No')).toEqual('Ok...well done');
    });

    it('says if the answer is wrong', function() {
      expect(answers.qOne('Goldfinger_One')).toEqual('WRONG!');
    });

    it('says if the answer is wrong', function() {
      expect(answers.qOne('From_Russia_With_Love')).toEqual('WRONG!');
    });
  });

  describe('qTwo', function() {
    it('says if the answer is right', function() {
      expect(answers.qTwo('Goldfinger_Two')).toEqual('Hm...not bad, not bad');
    });

    it('says if the answer is wrong', function() {
      expect(answers.qTwo('Diamonds_Are_Forever')).toEqual('You call yourself' +
      ' a James Bond fan?');
    });

    it('says if the answer is wrong', function() {
      expect(answers.qTwo('From_Russia_With_Love')).toEqual('You call' +
      ' yourself a James Bond fan?');
    });
  });

  describe('qThree', function() {
    it('says if the answer is right', function() {
      expect(answers.qThree('John_Barry')).toEqual('Not bad at all');
    });
    it('says if the answer is wrong', function() {
      expect(answers.qThree('John_Williams')).toEqual('Please...no');
    });
    it('says if the answer is wrong', function() {
      expect(answers.qThree('David_Arnold')).toEqual('Please...no');
    });
  });

  describe('qFour', function() {
    it('says if the answer is right', function() {
      expect(answers.qFour('Pierce_Brosnan')).toEqual('Impressive');
    });
    it('says if the answer is wrong', function() {
      expect(answers.qFour('Tom_Selleck')).toEqual('Nah');
    });
    it('says if the answer is wrong', function() {
      expect(answers.qFour('Ralph_Fiennes')).toEqual('Nah');
    });
  });

  describe('qFive', function() {
    it('says if the answer is right', function() {
      expect(answers.qFive('Casino_Royale')).toEqual('Nice, very nice');
    });
    it('says if the answer is wrong', function() {
      expect(answers.qFive('On_Her_Majesty\'s_Secret_Service')).toEqual('Nahuh');
    });
    it('says if the answer is wrong', function() {
      expect(answers.qFive('Live_And_Let_Die')).toEqual('Nahuh');
    });
  });
});
