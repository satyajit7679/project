document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu functionality
  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileMenuIcon = document.getElementById("mobileMenuIcon");
  const closeMenuIcon = document.getElementById("closeMenuIcon");

  if (mobileMenuButton) {
    mobileMenuButton.addEventListener("click", function () {
      const isExpanded =
        mobileMenuButton.getAttribute("aria-expanded") === "true";
      mobileMenuButton.setAttribute("aria-expanded", !isExpanded);
      mobileMenu.classList.toggle("hidden");
      mobileMenuIcon.classList.toggle("hidden");
      closeMenuIcon.classList.toggle("hidden");
    });
  }

  // Profile dropdown functionality
  const profileButton = document.getElementById("userMenuButton");
  const profileDropdown = document.getElementById("profileMenu");

  if (profileButton) {
    profileButton.addEventListener("click", function () {
      const isExpanded = profileButton.getAttribute("aria-expanded") === "true";
      profileButton.setAttribute("aria-expanded", !isExpanded);
      profileDropdown.classList.toggle("hidden");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !profileButton.contains(event.target) &&
        !profileDropdown.contains(event.target)
      ) {
        profileButton.setAttribute("aria-expanded", "false");
        profileDropdown.classList.add("hidden");
      }
    });
  }
});
