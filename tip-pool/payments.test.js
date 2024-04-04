describe('Payments test (setup and teardown)', function () {
    beforeEach( function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 10;
    });

    it('should add curPayment object to allPayments, resest input values update Dom', function () {


    });
    it('should return obj with billAmt tipAmt values and tipPercentage vlaue', function () {

        expect(createCurPayment()).toEqual({ billAmt: '100', tipAmt: '10', tipPercent: 10 });

    });

    it('should return undefined if input is negative or empty', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        expect(createCurPayment()).toEqual(undefined);
        billAmtInput.value = -1;
        tipAmtInput.value = -1;
        expect(createCurPayment()).toEqual(undefined);

    });

    it('should append new tr with the curpayment values', function () {

        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;

        appendPaymentTable(curPayment);

        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(curTdList.length).toEqual(4);
        expect(curTdList[0].innerText).toEqual('$100');
        expect(curTdList[1].innerText).toEqual('$10');
        expect(curTdList[2].innerText).toEqual('10%');
        expect(curTdList[3].innerText).toEqual('X');

    });
    
    it('should create the delete element', function () {
        let newTr = document.createElement('tr');

        appendDeleteBtn(newTr);

        expect(newTr.lastChild.innerHTML).toEqual('X');

    });


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
