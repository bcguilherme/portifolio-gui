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
    darkModeToggle.setAttribute('aria-label', 'Switch to light mode');
    localStorage.setItem('dark-mode', 'enabled');
  }

  function disableDarkMode() {
    body.classList.remove('dark');
    darkModeToggle.textContent = '🌙';
    darkModeToggle.setAttribute('aria-label', 'Switch to dark mode');
    localStorage.setItem('dark-mode', 'disabled');
  }

  // Scroll Reveal Animation with Intersection Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optionally stop observing after animation
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all portfolio items
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  portfolioItems.forEach(item => observer.observe(item));

  // Back to Top Logic with Throttle
  const backToTopButton = document.getElementById('back-to-top');
  let isThrottled = false;
  const throttleDelay = 100; // ms

  window.addEventListener('scroll', () => {
    if (!isThrottled) {
      isThrottled = true;

      setTimeout(() => {
        if (window.scrollY > 300) {
          backToTopButton.classList.add('visible');
        } else {
          backToTopButton.classList.remove('visible');
        }
        isThrottled = false;
      }, throttleDelay);
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  console.log('Portfolio enhancements initialized ✨');
});