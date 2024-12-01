document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    if (themeToggle) {
        // Check saved preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            htmlElement.classList.toggle('dark', savedTheme === 'dark');
            themeToggle.checked = savedTheme === 'dark';
        }

        themeToggle.addEventListener('change', function() {
            htmlElement.classList.toggle('dark', this.checked);
            localStorage.setItem('theme', this.checked ? 'dark' : 'light');
        });
    }

    // Profile update functionality
    const profileForm = document.getElementById('profile-form');
    if (profileForm) {
        profileForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const successMessage = document.getElementById('success-message');
            const errorMessage = document.getElementById('error-message');

            // Basic validation
            if (!name || !email || !phone) {
                errorMessage.textContent = 'All fields are required';
                errorMessage.classList.remove('hidden');
                successMessage.classList.add('hidden');
                return;
            }

            // Here you would typically make an API call to update the profile
            console.log('Profile update:', { name, email, phone });

            // Show success message
            successMessage.textContent = 'Profile updated successfully!';
            successMessage.classList.remove('hidden');
            errorMessage.classList.add('hidden');
        });
    }

    // Password change functionality
    const passwordForm = document.getElementById('password-form');
    if (passwordForm) {
        passwordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const currentPassword = document.getElementById('current-password').value;
            const newPassword = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const successMessage = document.getElementById('password-success-message');
            const errorMessage = document.getElementById('password-error-message');

            // Validation
            if (!currentPassword || !newPassword || !confirmPassword) {
                errorMessage.textContent = 'All fields are required';
                errorMessage.classList.remove('hidden');
                successMessage.classList.add('hidden');
                return;
            }

            if (newPassword.length < 8) {
                errorMessage.textContent = 'New password must be at least 8 characters long';
                errorMessage.classList.remove('hidden');
                successMessage.classList.add('hidden');
                return;
            }

            if (newPassword !== confirmPassword) {
                errorMessage.textContent = 'New passwords do not match';
                errorMessage.classList.remove('hidden');
                successMessage.classList.add('hidden');
                return;
            }

            // Here you would typically make an API call to change the password
            console.log('Password change attempt');

            // Show success message
            successMessage.textContent = 'Password changed successfully!';
            successMessage.classList.remove('hidden');
            errorMessage.classList.add('hidden');
            
            // Clear form
            passwordForm.reset();
        });
    }

    // Notification preferences
    const notificationToggles = document.querySelectorAll('[data-notification-toggle]');
    notificationToggles.forEach(toggle => {
        toggle.addEventListener('change', function() {
            const type = this.dataset.notificationType;
            // Here you would typically make an API call to update notification preferences
            console.log('Notification preference updated:', { type, enabled: this.checked });
        });
    });
});
