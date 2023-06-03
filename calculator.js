window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
      const form1 = document.querySelector('form')
      form1.reset()
    });
  }
});

function getCurrentUIValues() {
  const values= {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
  calculateMonthlyPayment(values);
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let loanAmount = document.querySelector('#loan-amount').value
  let loanYears = document.querySelector('#loan-years').value
  let loanRate = document.querySelector('#loan-rate').value
  const values = {
    amount: loanAmount,
    years: loanYears,
    rate: loanRate,
  }
  calculateMonthlyPayment(values);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  getCurrentUIValues();
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const values1 = Object.values(values)
  let P = values1[0]
  let i = values1[2] / 1200
  let n = values1[1] *12
  let X = 1 + i
  const monthlyCalculation =  P * (i / (1-(Math.pow(X,-n))))
  console.log(monthlyCalculation)
  const monthlyDec = monthlyCalculation.toFixed(2)
  const monthly = monthlyDec.toString()
  updateMonthly(monthly);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUpdates = document.querySelectorAll('span')
  if(monthlyUpdates.length >= 2){
    monthlyUpdates[1].remove()
  }
  const monthlyUpdated = document.createElement('span');
  const monthlyPayment = document.getElementById('monthly-payment');
  monthlyPayment.appendChild(monthlyUpdated)
  monthlyUpdated.innerText= monthly;
}
