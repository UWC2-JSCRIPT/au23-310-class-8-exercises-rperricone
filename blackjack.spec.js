describe("Dealer should draw function", function () {
    it("10, 9 return false", function () {
      
        let dealer = new CardPlayer('Dealer');
        dealer.hand.push({ suit: 'hearts', val: 10, displayVal: '10' })
        dealer.hand.push({ suit: 'hearts', val: 9, displayVal: '9' })
        expect(dealerShouldDraw(dealer.hand)).toBe(false);
    });
    it("Ace, 6 return true", function () {
      
        let dealer = new CardPlayer('Dealer');
        dealer.hand.push({ suit: 'hearts', val: 1, displayVal: 'Ace' })
        dealer.hand.push({ suit: 'hearts', val: 6, displayVal: '6' })
    
        expect(dealerShouldDraw(dealer.hand)).toBe(true);
    });
    it("10, 6 , Ace return false", function () {
       
        let dealer = new CardPlayer('Dealer');
        dealer.hand.push({ suit: 'hearts', val: 10, displayVal: '10' })
        dealer.hand.push({ suit: 'hearts', val: 6, displayVal: '6' })
        dealer.hand.push({ suit: 'hearts', val: 1, displayVal: 'Ace' })
       
        expect(dealerShouldDraw(dealer.hand)).toBe(false);
    });

    it("2, 4 ,2 ,5  return true", function () {
      
        let dealer = new CardPlayer('Dealer');
        dealer.hand.push({ suit: 'hearts', val: 2, displayVal: '2' })
        dealer.hand.push({ suit: 'hearts', val: 4, displayVal: '4' })
        dealer.hand.push({ suit: 'spades', val: 2, displayVal: '2' })
        dealer.hand.push({ suit: 'hearts', val: 5, displayVal: '5' })
        expect(dealerShouldDraw(dealer.hand)).toBe(true);
    });
});


