document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-btn');
    const monthlyInvestmentInput = document.getElementById('monthly-investment');
    const rateInput = document.getElementById('rate');
    const timeInput = document.getElementById('time');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', function() {
        const monthlyInvestment = parseFloat(monthlyInvestmentInput.value);
        const rate = parseFloat(rateInput.value);
        const time = parseFloat(timeInput.value);

        if (isNaN(monthlyInvestment) || isNaN(rate) || isNaN(time)) {
            resultDiv.textContent = 'Please enter valid numbers';
            return;
        }

        // Calculate RD maturity amount
        const monthlyRate = rate / 12 / 100;
        const months = time * 12;
        const maturityAmount = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
        const totalInvestment = monthlyInvestment * months;
        const interestEarned = maturityAmount - totalInvestment;

        resultDiv.innerHTML = `
            <div class="mt-4 p-4 bg-green-50 rounded-lg">
                <p class="text-lg font-semibold text-green-800">Maturity Details:</p>
                <div class="mt-2">
                    <p class="text-gray-700">Total Investment: ₹${totalInvestment.toFixed(2)}</p>
                    <p class="text-gray-700">Interest Earned: ₹${interestEarned.toFixed(2)}</p>
                    <p class="text-green-700 font-semibold">Maturity Amount: ₹${maturityAmount.toFixed(2)}</p>
                </div>
            </div>
        `;
    });

    // Input validation
    [monthlyInvestmentInput, rateInput, timeInput].forEach(input => {
        input.addEventListener('input', function() {
            if (this.value < 0) {
                this.value = 0;
            }
        });
    });
});
