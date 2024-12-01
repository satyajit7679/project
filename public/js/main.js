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

<<<<<<< HEAD
    // Profile dropdown functionality
    const profileButton = document.getElementById('profileButton');
    const profileDropdown = document.getElementById('profileMenu');
=======
  // Profile dropdown functionality
  const profileButton = document.getElementById("userMenuButton");
  const profileDropdown = document.getElementById("profileMenu");
>>>>>>> e4cdb9597666d01989ccbb80fe148efc64b017b8

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
