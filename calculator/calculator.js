window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let initalValues = { principle: 100000, years: 5, rate: 2.5 };
  const amountI = document.querySelector('#loan-amount');
  const yearsI = document.querySelector('#loan-years');
  const rateI = document.querySelector('#loan-rate');
  amountI.value = initalValues.principle;
  yearsI.value = initalValues.years;
  rateI.value = initalValues.rate;
  update();

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const valuesObj = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(valuesObj));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let i = (values.rate / 100) / 12;
  let P = values.amount;
  let n = values.years * 12;
  let monthlyRate = (i * P) / (1 - Math.pow((1 + i), -n));

  return monthlyRate.toFixed(2);

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUI = document.querySelector('#monthly-payment');
  monthlyUI.innerText ='$'+ monthly;
}
