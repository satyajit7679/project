// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-button"); // All tab buttons
  const contents = document.querySelectorAll(".tab-content"); // All tab content sections

  // Function to show the appropriate tab
  function showTab(tabId) {
    // Hide all tab content sections
    contents.forEach((content) => {
      content.classList.add("hidden");
    });

    // Remove active class from all tab buttons
    tabs.forEach((tab) => {
      tab.classList.remove("text-blue-600", "border-blue-600");
      tab.classList.add("text-gray-500");
    });

    // Show the selected tab content
    const activeContent = document.getElementById(tabId);
    if (activeContent) {
      activeContent.classList.remove("hidden");
    }

    // Highlight the active tab button
    const activeTab = Array.from(tabs).find((tab) => {
      // Match tab by its id (lowercase version of the tabId)
      return (
        tab.textContent.trim().toLowerCase().replace(/\s+/g, "-") === tabId
      );
    });
    if (activeTab) {
      activeTab.classList.add("text-blue-600", "border-blue-600");
      activeTab.classList.remove("text-gray-500");
    }
  }

  // Add click event listeners to all tab buttons
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabId = tab.textContent.trim().toLowerCase().replace(/\s+/g, "-");
      showTab(tabId);
    });
  });

  // Show the default tab on page load (Basic Details)
  showTab("basic-details");
});
