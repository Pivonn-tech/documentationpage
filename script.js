// JavaScript function for smooth scrolling
function smoothScroll(targetId) {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth", // This enables smooth scrolling
    });
  }
}

// JavaScript function to toggle the menu
function toggleMenu(menuIcon) {
  menuIcon.classList.toggle("change");
  const navbar = document.getElementById("navbar");
  
  if (navbar.style.display === "block") {
    navbar.style.display = "none"; // Hide the menu
  } else {
    navbar.style.display = "block"; // Show the menu
  }
}


// JavaScript function to show a specific section and hide others
function showSection(sectionId) {
  const sections = document.querySelectorAll(".main-section");
  sections.forEach((section) => {
    if (section.id === sectionId) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
}
