// describe("payments test (setup and tear down)", function () {
//     beforeEach(function () {
//         billAmtInput.value = 100;
//         tipAmtInput.value = 20;
//         submitPaymentInfo();

//     });

//     it('should add total tip amouunt of all payments to sumPaymentTotal()', function () {
        


//     })
// });

describe("helpers test (with setup and tear-down)", function () {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });

    it('should sum total tip amount of all payments on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(20);

        billAmtInput.value = 200;
        tipAmtInput.value = 40;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(60);
    });

    it('should sum total bill amount of all payments on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(100);

        billAmtInput.value = 200;
        tipAmtInput.value = 40;

        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(300);
    });

    it('should sum total tip percent on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipPercent')).toEqual(20);

        billAmtInput.value = 100;
        tipAmtInput.value = 20;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipPercent')).toEqual(40);
    });
    it('should should return a tip percentage based of of total tips', function () {

        expect(calculateTipPercent(200, 20)).toEqual(10);
    });
    it('should append a new tr with td to the DOM', function () {
        let newTr = document.createElement('tr');

        appendTd(newTr, 'test');

        expect(newTr.firstChild.innerText).toEqual('test');

    })
    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
});