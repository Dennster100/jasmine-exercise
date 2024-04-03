
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.0
  }
  expect(calculateMonthlyPayment(values)).toEqual('126.60')

});


it("should return a result with 2 decimal places", function() {

  const values = {
    amount: 10000,
    years: 8,
    rate: 5.0
  }
  //https://stackoverflow.com/questions/69776105/how-can-you-use-jasmine-to-check-if-a-value-has-two-decimal-places
  //found a stack over flow page taht shows how to check specifically for 2 decimals spaces
  expect(calculateMonthlyPayment(values)).toMatch(/^\d+\.\d\d$/);
});




