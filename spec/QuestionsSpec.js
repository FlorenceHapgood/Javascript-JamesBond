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

})
