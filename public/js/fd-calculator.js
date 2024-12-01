document.addEventListener("DOMContentLoaded", function () {
  // Input Elements
  const principalInput = document.getElementById("principal");
  const rateInput = document.getElementById("rate");
  const timeInput = document.getElementById("time");
  const timeUnitInput = document.getElementById("timeUnit");
  const maturityAmountDiv = document.getElementById("maturityAmount");
  const totalInterestDiv = document.getElementById("totalInterest");
  const calculateBtn = document.getElementById("calculate-btn");

  // Chart variable
  let fdChart = null;

  // Add Event Listener to Calculate Button
  calculateBtn.addEventListener("click", function () {
    calculateFD();
  });

  // Fixed Deposit Calculator
  function calculateFD() {
    const principal = parseFloat(principalInput.value);
    const rate = parseFloat(rateInput.value);
    const time = parseFloat(timeInput.value);
    const timeUnit = timeUnitInput.value;

    // Validation for empty or invalid inputs
    if (
      isNaN(principal) ||
      isNaN(rate) ||
      isNaN(time) ||
      principal <= 0 ||
      rate <= 0 ||
      time <= 0
    ) {
      alert("Please enter valid and positive numbers");
      return;
    }

    // Convert time to years for calculation
    let timeInYears = time;
    if (timeUnit === "months") {
      timeInYears = time / 12;
    } else if (timeUnit === "days") {
      timeInYears = time / 365;
    }

    // Calculate FD maturity amount
    const interest = (principal * rate * timeInYears) / 100;
    const maturityAmount = principal + interest;

    // Update results in the UI
    maturityAmountDiv.textContent = "₹" + maturityAmount.toFixed(2);
    totalInterestDiv.textContent = "₹" + interest.toFixed(2);

    // Update the chart
    updateChart(principal, interest);
  }

  // Chart Update Function
  function updateChart(principal, interest) {
    const ctx = document.getElementById("fdChart").getContext("2d");

    // Destroy the existing chart instance if it exists
    if (fdChart) {
      fdChart.destroy();
    }

    // Create a new chart instance
    fdChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Principal Amount", "Interest Earned"],
        datasets: [
          {
            data: [principal, interest],
            backgroundColor: [
              "rgb(59, 130, 246)", // blue-500
              "rgb(22, 163, 74)", // green-600
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    });
  }

  // Input Validation to Prevent Negative Values
  [principalInput, rateInput, timeInput].forEach((input) => {
    input.addEventListener("input", function () {
      if (this.value < 0) {
        this.value = 0;
      }
    });
  });
});
