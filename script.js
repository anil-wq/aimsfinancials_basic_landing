// website_final/script.js
// This script controls the responsive navigation menu and updates the footer year.

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  // Toggle the hamburger menu on mobile devices
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('active');
    });

    // Close the mobile menu when a navigation link is clicked
    navLinks.addEventListener('click', (event) => {
      if (event.target.tagName.toLowerCase() === 'a') {
        navToggle.classList.remove('open');
        navLinks.classList.remove('active');
      }
    });
  }

  // Update the footer year dynamically
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});