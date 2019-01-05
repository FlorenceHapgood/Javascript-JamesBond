describe("Questions", function(){
  var questions;
  beforeEach(function(){
    questions = new Questions();
  })

  describe('qOne', function(){
    it('asks the first question', function(){
      expect(questions.qOne()).toEqual("Q1) Let's start off easy. What was the first James Bond film ever made?");
    })
  })

  describe('qOneAnswer', function(){
    it('evaluates if the answer is right or wrong', function(){
      expect(questions.qOneAnswer("Goldfinger")).toEqual('WRONG!')
    })
  })

})
