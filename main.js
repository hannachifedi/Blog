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
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-dark");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
  });

  // Load mode from localStorage
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  // Existing dark mode toggle code...

  const form = document.querySelector(".comment-form");
  const commentList = document.querySelector(".comment-list");

  if (form && commentList) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const textarea = form.querySelector("textarea");
      const comment = textarea.value.trim();
      if (comment) {
        const p = document.createElement("p");
        p.textContent = comment;
        commentList.appendChild(p);
        textarea.value = "";
      }
    });
  }
});
