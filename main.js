// main.js

// Show popup after 5 seconds
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const popup = document.querySelector('.newsletter-popup');
    if (popup) popup.style.display = 'flex';
  }, 5000);
});

// Close popup when 'X' is clicked
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('close-popup')) {
    const popup = document.querySelector('.newsletter-popup');
    if (popup) popup.style.display = 'none';
  }
});
