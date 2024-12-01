// Common validation functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}

// Login functionality
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const errorDiv = document.getElementById('error-message');

            if (!validateEmail(email)) {
                errorDiv.textContent = 'Please enter a valid email address';
                return;
            }

            if (!validatePassword(password)) {
                errorDiv.textContent = 'Password must be at least 8 characters long';
                return;
            }

            // Here you would typically make an API call to your backend
            console.log('Login attempt:', { email });
            // Simulate successful login
            window.location.href = 'index.html';
        });
    }

    // Signup functionality
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const errorDiv = document.getElementById('error-message');

            if (!name || name.length < 2) {
                errorDiv.textContent = 'Please enter a valid name';
                return;
            }

            if (!validateEmail(email)) {
                errorDiv.textContent = 'Please enter a valid email address';
                return;
            }

            if (!validatePassword(password)) {
                errorDiv.textContent = 'Password must be at least 8 characters long';
                return;
            }

            if (password !== confirmPassword) {
                errorDiv.textContent = 'Passwords do not match';
                return;
            }

            // Here you would typically make an API call to your backend
            console.log('Signup attempt:', { name, email });
            // Simulate successful signup
            window.location.href = 'login.html';
        });
    }
});
