// Card hover effects and interactions
document.addEventListener('DOMContentLoaded', function() {
    // Learn More button click handlers
    const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const fdType = this.getAttribute('data-fd-type');
            showFDDetails(fdType);
        });
    });
});

// Function to show FD details (can be expanded based on requirements)
function showFDDetails(fdType) {
    const fdDetails = {
        'standard': {
            title: 'Standard Fixed Deposit',
            details: 'A traditional fixed deposit with flexible tenure options and competitive interest rates.',
            features: [
                'Tenure ranging from 7 days to 10 years',
                'Competitive interest rates up to 7.50% p.a.',
                'Option for premature withdrawal',
                'Auto-renewal facility available'
            ]
        },
        'tax-saving': {
            title: 'Tax-Saving Fixed Deposit',
            details: 'Investment option that helps you save tax under Section 80C of Income Tax Act.',
            features: [
                'Tax deduction up to ₹1.5 lakhs under Section 80C',
                'Fixed 5-year lock-in period',
                'Competitive interest rates',
                'No premature withdrawal allowed'
            ]
        },
        'senior-citizen': {
            title: 'Senior Citizen Fixed Deposit',
            details: 'Special FD scheme for senior citizens with higher interest rates.',
            features: [
                'Additional 0.5% interest rate',
                'Special services and priority handling',
                'Flexible tenure options',
                'Monthly interest payout option'
            ]
        },
        'cumulative': {
            title: 'Cumulative Fixed Deposit',
            details: 'FD where interest is compounded and paid at maturity.',
            features: [
                'Interest compounded quarterly',
                'Higher returns at maturity',
                'Flexible tenure options',
                'Ideal for long-term savings'
            ]
        },
        'non-cumulative': {
            title: 'Non-Cumulative Fixed Deposit',
            details: 'FD with regular interest payouts at fixed intervals.',
            features: [
                'Regular interest payouts',
                'Monthly/Quarterly/Half-yearly/Annual interest options',
                'Ideal for regular income needs',
                'Suitable for retirees'
            ]
        },
        'flexi': {
            title: 'Flexi Fixed Deposit',
            details: 'Flexible FD linked with your savings account.',
            features: [
                'Automatic sweep-in and sweep-out facility',
                'Liquidity with FD returns',
                'No premature withdrawal penalties',
                'Minimum balance maintenance'
            ]
        }
    };

    const details = fdDetails[fdType];
    if (details) {
        // Create modal content
        const modalContent = `
            <div class="fixed inset-0 bg-black bg-opacity-50 z-40" id="modal-overlay"></div>
            <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div class="bg-white rounded-lg max-w-lg w-full p-6 relative">
                    <button class="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onclick="closeModal()">
                        <i class="fas fa-times"></i>
                    </button>
                    <h3 class="text-2xl font-bold mb-4">${details.title}</h3>
                    <p class="text-gray-600 mb-4">${details.details}</p>
                    <h4 class="font-semibold mb-2">Key Features:</h4>
                    <ul class="list-disc pl-5 space-y-2">
                        ${details.features.map(feature => `<li class="text-gray-600">${feature}</li>`).join('')}
                    </ul>
                    <button class="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Apply Now
                    </button>
                </div>
            </div>
        `;

        // Create and append modal
        const modalContainer = document.createElement('div');
        modalContainer.id = 'fd-modal';
        modalContainer.innerHTML = modalContent;
        document.body.appendChild(modalContainer);

        // Add click handler to close modal when clicking overlay
        document.getElementById('modal-overlay').addEventListener('click', closeModal);
    }
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById('fd-modal');
    if (modal) {
        modal.remove();
    }
}
