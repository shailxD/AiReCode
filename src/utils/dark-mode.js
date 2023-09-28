const darkMode = () => {
  const darkModeToggleBtn = document.querySelector('#theme-toggle-dark');
  const lightModeToggleBtn = document.querySelector('#theme-toggle-light');
  const headerImg = document.querySelector('.header__img');
  const theme = localStorage.getItem('theme');
  const originalSrc = headerImg.getAttribute('src');

  // Function to toggle the theme
  const toggleTheme = () => {
    if (document.body.classList.contains('light-mode')) {
      // Switch to dark mode
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark-mode');
      headerImg.setAttribute('src', headerImg.getAttribute('data-src-dark'));
      darkModeToggleBtn.style.display = 'block';
      lightModeToggleBtn.style.display = 'none';
    } else {
      // Switch to light mode
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light-mode');
      headerImg.setAttribute('src', originalSrc);
      darkModeToggleBtn.style.display = 'none';
      lightModeToggleBtn.style.display = 'block';
    }
  };

  // Check the saved theme and set the initial button display
  if (theme === 'light-mode') {
    document.body.classList.add('light-mode');
    lightModeToggleBtn.style.display = 'block';
    darkModeToggleBtn.style.display = 'none';
  } else {
    darkModeToggleBtn.style.display = 'block';
    lightModeToggleBtn.style.display = 'none';
  }

  // Events
  darkModeToggleBtn.addEventListener('click', toggleTheme);
  lightModeToggleBtn.addEventListener('click', toggleTheme);
};

export default darkMode;
