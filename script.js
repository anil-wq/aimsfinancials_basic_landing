// Navigation menu toggle for mobile devices
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('active');
    });

    // Close the menu when a navigation link is clicked
    navLinks.addEventListener('click', (event) => {
      if (event.target.tagName.toLowerCase() === 'a') {
        navToggle.classList.remove('open');
        navLinks.classList.remove('active');
      }
    });
  }
});