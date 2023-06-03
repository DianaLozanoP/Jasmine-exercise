describe('testing the helpers js', function(){
    //  it('should return the sum Payment Total', function(){
    //     allPayments = {billAmt: 150, tipAmt:25}
    //     expect( sumPaymentTotal(tipAmt)).toContain(25)
    // })
    it('should return the tip percent', function(){
        expect(calculateTipPercent(150, 5)).toEqual(3)
    })
    // it('should create a new td element with correct text', function(){
    //     appendTd('Tip', 5)
    //     expect(newTd.innerText).toEqual(5)
    // })
})
//ask why the append td is not a function
