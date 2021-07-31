let expect = chai.expect;

describe('MyFunctions', function () {
  describe('#shuffle', function () {
    it('deck should contain 52 cards after shuffle', function () {
      testDeck = new Deck();
      testDeck.createDeck();
      expect(testDeck.cards).to.have.length(52);
    });
  });
});