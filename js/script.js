document.addEventListener('DOMContentLoaded', () => {
  // Dark Mode Logic
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const body = document.body;

  // Check for saved preference
  if (localStorage.getItem('dark-mode') === 'enabled') {
    enableDarkMode();
  }

  darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark')) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });

  function enableDarkMode() {
    body.classList.add('dark');
    darkModeToggle.textContent = '☀️';
    localStorage.setItem('dark-mode', 'enabled');
  }

  function disableDarkMode() {
    body.classList.remove('dark');
    darkModeToggle.textContent = '🌙';
    localStorage.setItem('dark-mode', 'disabled');
  }

  // Back to Top Logic
  const backToTopButton = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  console.log('Portfolio enhancements initialized');
});