document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-btn');
    const principalInput = document.getElementById('principal');
    const rateInput = document.getElementById('rate');
    const timeInput = document.getElementById('time');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', function() {
        const principal = parseFloat(principalInput.value);
        const rate = parseFloat(rateInput.value);
        const time = parseFloat(timeInput.value);

        if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
            resultDiv.textContent = 'Please enter valid numbers';
            return;
        }

        // Calculate FD maturity amount
        const interest = (principal * rate * time) / 100;
        const maturityAmount = principal + interest;

        resultDiv.innerHTML = `
            <div class="mt-4 p-4 bg-green-50 rounded-lg">
                <p class="text-lg font-semibold text-green-800">Maturity Details:</p>
                <div class="mt-2">
                    <p class="text-gray-700">Principal Amount: ₹${principal.toFixed(2)}</p>
                    <p class="text-gray-700">Interest Earned: ₹${interest.toFixed(2)}</p>
                    <p class="text-green-700 font-semibold">Maturity Amount: ₹${maturityAmount.toFixed(2)}</p>
                </div>
            </div>
        `;
    });

    // Input validation
    [principalInput, rateInput, timeInput].forEach(input => {
        input.addEventListener('input', function() {
            if (this.value < 0) {
                this.value = 0;
            }
        });
    });
});
