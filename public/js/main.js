// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuIcon = document.getElementById('mobile-menu-icon');
    const closeMenuIcon = document.getElementById('close-menu-icon');

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
            mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('hidden');
            mobileMenuIcon.classList.toggle('hidden');
            closeMenuIcon.classList.toggle('hidden');
        });
    }

    // Profile dropdown functionality
    const profileButton = document.getElementById('user-menu-button');
    const profileDropdown = document.getElementById('user-menu-dropdown');

    if (profileButton) {
        profileButton.addEventListener('click', function() {
            const isExpanded = profileButton.getAttribute('aria-expanded') === 'true';
            profileButton.setAttribute('aria-expanded', !isExpanded);
            profileDropdown.classList.toggle('hidden');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!profileButton.contains(event.target) && !profileDropdown.contains(event.target)) {
                profileButton.setAttribute('aria-expanded', 'false');
                profileDropdown.classList.add('hidden');
            }
        });
    }
});
