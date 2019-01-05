describe("Answers", function(){
  var answers;
  beforeEach(function(){
    answers = new Answers();
  })

  describe('qOne', function(){
    it('asks the first question', function(){
      expect(answers.qOne()).toEqual("Q1) Let's start off easy. What was the first James Bond film ever made?");
    })
  })

  describe('qOneAnswer', function(){
    it('evaluates if the answer is right or wrong', function(){
      expect(answers.qOneAnswer("Goldfinger")).toEqual('WRONG!')
    })
  })

})
