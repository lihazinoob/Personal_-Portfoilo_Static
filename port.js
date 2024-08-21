const hamburger = document.querySelector(".menuham");
const navLinks = document.querySelector(".list");
const linksfornavigation = document.querySelectorAll(".navlink");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  navLinks.classList.toggle("open");
  console.log("clicked");
});

linksfornavigation.forEach((link) => {
  link.addEventListener("click", function () {
    hamburger.classList.remove("is-active");
    navLinks.classList.remove("open");
  });
});

// For Making a DropDown Menu for Skills Section.

document.addEventListener('DOMContentLoaded', () => {
  // Get all the dropdown arrows
  const dropdownArrows = document.querySelectorAll('.droparrow');

  dropdownArrows.forEach((arrow) => {
    arrow.addEventListener('click', (e) => {
      // Find the corresponding skillsbar
      const box = e.target.closest('.box');
      const skillsBar = box.querySelector('.skillsbar');

      // Toggle the 'active' class to show/hide the skillsbar
      skillsBar.classList.toggle('clicked');
      
      // Optional: Toggle the arrow direction
      arrow.classList.toggle('clicked');
    });
  });
});

// Implementing Dark Mode

const tog = document.getElementById('toggler');
var Boolean = true;//Boolean true hoile dark mode on hobe
tog.addEventListener('click', function(){
  document.body.classList.toggle('light');
});
