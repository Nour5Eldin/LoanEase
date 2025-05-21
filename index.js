function calculateLoan() {
  const amount = parseFloat(document.getElementById("amount").value);
  const interest = parseFloat(document.getElementById("interest").value);
  const years = parseInt(document.getElementById("years").value);
  const result = document.getElementById("result");

  if (!amount || !interest || !years || amount <= 0 || interest < 0 || years <= 0) {
    result.innerHTML = "❗ Please enter valid numbers in all fields.";
    result.style.display = "block";
    return;
  }

  const monthlyInterest = (interest / 100) / 12;
  const totalPayments = years * 12;

  const monthlyPayment = amount * monthlyInterest * Math.pow(1 + monthlyInterest, totalPayments) /
        (Math.pow(1 + monthlyInterest, totalPayments) - 1);

  if (isFinite(monthlyPayment)) {
    result.innerHTML = `💸 Monthly Payment: <strong>${monthlyPayment.toFixed(2)} EGP</strong>`;
  } else {
    result.innerHTML = "⚠️ Unable to calculate. Check your inputs.";
  }

  result.style.display = "block";
}

function clearFields() {
  document.getElementById("amount").value = "";
  document.getElementById("interest").value = "";
  document.getElementById("years").value = "";


  const result = document.getElementById("result");
  result.style.display = "none";
  result.innerHTML = "";
}

