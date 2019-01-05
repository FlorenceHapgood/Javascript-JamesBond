describe("Answers", function(){
  var answers;
  beforeEach(function(){
    answers = new Answers();
  })

  describe('qOne', function(){
    it('says if the answer is wrong', function(){
      expect(answers.qOne("Goldfinger")).toEqual('WRONG!')
    })

    it('says if the answer is right', function(){
      expect(answers.qOne('Dr_No')).toEqual('Ok...well done')
    })
  })

})
