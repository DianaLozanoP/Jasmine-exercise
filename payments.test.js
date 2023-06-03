describe('test payments', function(){
    // it('count the number of payments', function(){
    //     submitPaymentInfo();
    //     expect(paymentId).toEqual(1)
    // })
    it('create a payment', function(){
        billAmtInput.value = 150
        tipAmtInput.value = 20
        expect(createCurPayment()).toEqual({ billAmt: '150', tipAmt: '20', tipPercent: 13 })
    });
})