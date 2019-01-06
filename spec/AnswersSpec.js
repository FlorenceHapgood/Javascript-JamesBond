describe("Answers", function(){
  var answers;
  beforeEach(function(){
    answers = new Answers();
  })

  describe('qOne', function(){
    it('says if the answer is right', function(){
      expect(answers.qOne('Dr_No')).toEqual('Ok...well done')
    })

    it('says if the answer is wrong', function(){
      expect(answers.qOne('Goldfinger')).toEqual('WRONG!')
    })

    it('says if the answer is wrong', function(){
      expect(answers.qOne('From_Russia_With_Love')).toEqual('WRONG!')
    })
  })

  describe('qTwo', function(){
    it('says if the answer is right', function(){
      expect(answers.qTwo('Goldfinger')).toEqual('Hm...not bad, not bad')
    })

    it('says if the answer is wrong', function(){
      expect(answers.qTwo('Diamonds_Are_Forever')).toEqual('You call yourself a James Bond fan?')
    })

    it('says if the answer is wrong', function(){
      expect(answers.qTwo('From_Russia_With_Love')).toEqual('You call yourself a James Bond fan?')
    })
  })

  describe('qThree', function(){
    it('says if the answer is right', function(){
      expect(answers.qThree('John Barry')).toEqual('Not bad at all')
    })
    it('says if the answer is wrong', function(){
      expect(answers.qThree('John Williams')).toEqual('Please...no')
    })
    it('says if the answer is wrong', function(){
      expect(answers.qThree('David Arnold')).toEqual('Please...no')
    })
  })

})
