describe('calculateLoan tests', function(){
  it ('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment({
      amount: 1000,
      years: 1,
      rate: 6
    })).toEqual('86.07')
  });
})



it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({ 
    amount: 10000,
    years: 1,
    rate: 6})).toEqual('860.66')
});

/// etc
