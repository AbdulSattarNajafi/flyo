const toggleBTn = document.getElementById("theme-toggle");
const darkIcon = document.getElementById(
  "theme-toggle-dark-icon"
);
const lightIcon = document.getElementById(
  "theme-toggle-light-icon"
);

// This should be in the Header of the HTML file
// checking if the Operating system is in dark mode or dark mode enabled by user
// Show the correct SVG
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)")
      .matches)
) {
  document.documentElement.classList.add("dark");
  darkIcon.classList.remove("hidden");
} else {
  document.documentElement.classList.remove("dark");
  lightIcon.classList.remove("hidden");
}

// Toggle Light & Dark Mode
toggleBTn.addEventListener("click", toggleMode);

function toggleMode() {
  // Toggle Icon
  darkIcon.classList.toggle("hidden");
  lightIcon.classList.toggle("hidden");

  // Checking Local Storage for the theme
  if (localStorage.getItem("color-theme")) {
    // if Light
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    // If not in local storage
    if (
      document.documentElement.classList.contains("dark")
    ) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
}
