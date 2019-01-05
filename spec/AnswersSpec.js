describe("Answers", function(){
  var answers;
  beforeEach(function(){
    answers = new Answers();
  })

  describe('qOne', function(){
    it('evaluates if the answer is right or wrong', function(){
      expect(answers.qOne("Goldfinger")).toEqual('WRONG!')
    })
  })

})
